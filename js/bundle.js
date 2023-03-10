/*! For license information please see bundle.js.LICENSE.txt */
!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["@libui/lib-cmb"] = e() : t["@libui/lib-cmb"] = e() }(self, (() => (() => {
  var t = { 1: (t, e, i) => { var s = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, n = /^0b[01]+$/i, r = /^0o[0-7]+$/i, o = parseInt, l = "object" == typeof i.g && i.g && i.g.Object === Object && i.g, c = "object" == typeof self && self && self.Object === Object && self, d = l || c || Function("return this")(), u = Object.prototype.toString, h = Math.max, p = Math.min, b = function () { return d.Date.now() }; function m(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) } function g(t) { if ("number" == typeof t) return t; if (function (t) { return "symbol" == typeof t || function (t) { return !!t && "object" == typeof t }(t) && "[object Symbol]" == u.call(t) }(t)) return NaN; if (m(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t; t = m(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t; t = t.replace(s, ""); var i = n.test(t); return i || r.test(t) ? o(t.slice(2), i ? 2 : 8) : a.test(t) ? NaN : +t } t.exports = function (t, e, i) { var s, a, n, r, o, l, c = 0, d = !1, u = !1, v = !0; if ("function" != typeof t) throw new TypeError("Expected a function"); function f(e) { var i = s, n = a; return s = a = void 0, c = e, r = t.apply(n, i) } function x(t) { return c = t, o = setTimeout(k, e), d ? f(t) : r } function y(t) { var i = t - l; return void 0 === l || i >= e || i < 0 || u && t - c >= n } function k() { var t = b(); if (y(t)) return w(t); o = setTimeout(k, function (t) { var i = e - (t - l); return u ? p(i, n - (t - c)) : i }(t)) } function w(t) { return o = void 0, v && s ? f(t) : (s = a = void 0, r) } function C() { var t = b(), i = y(t); if (s = arguments, a = this, l = t, i) { if (void 0 === o) return x(l); if (u) return o = setTimeout(k, e), f(l) } return void 0 === o && (o = setTimeout(k, e)), r } return e = g(e) || 0, m(i) && (d = !!i.leading, n = (u = "maxWait" in i) ? h(g(i.maxWait) || 0, e) : n, v = "trailing" in i ? !!i.trailing : v), C.cancel = function () { void 0 !== o && clearTimeout(o), c = 0, s = l = a = o = void 0 }, C.flush = function () { return void 0 === o ? r : w(b()) }, C } }, 2891: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bouee-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bouee", toString: function () { return this.url } } }, 3115: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "enveloppe-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#enveloppe", toString: function () { return this.url } } }, 2349: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "facebook-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#facebook", toString: function () { return this.url } } }, 9808: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "linkedin-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#linkedin", toString: function () { return this.url } } }, 214: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "logo-usage", viewBox: "0 0 170 40", url: i.p + "./assets/images/icons.svg#logo", toString: function () { return this.url } } }, 4437: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "target-blank-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#target-blank", toString: function () { return this.url } } }, 4202: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "virtualis-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#virtualis", toString: function () { return this.url } } }, 3739: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "youtube-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#youtube", toString: function () { return this.url } } }, 1770: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "agence-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#agence", toString: function () { return this.url } } }, 7501: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "agenda-croix-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#agenda-croix", toString: function () { return this.url } } }, 7937: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "agenda-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#agenda", toString: function () { return this.url } } }, 4250: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "ampoule-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#ampoule", toString: function () { return this.url } } }, 2062: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "arbres-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#arbres", toString: function () { return this.url } } }, 8797: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "at-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#at", toString: function () { return this.url } } }, 5193: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "banque-fleches-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#banque-fleches", toString: function () { return this.url } } }, 8633: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "banque-usage", viewBox: "0 0 29.09 28", url: i.p + "./assets/images/icons.svg#banque", toString: function () { return this.url } } }, 7598: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bateau-papier-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bateau-papier", toString: function () { return this.url } } }, 2477: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "billets-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#billets", toString: function () { return this.url } } }, 7774: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bocal-euro-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bocal-euro", toString: function () { return this.url } } }, 9582: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "boite-au-lettres-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#boite-au-lettres", toString: function () { return this.url } } }, 4633: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bouclier-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bouclier", toString: function () { return this.url } } }, 3609: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bretagne-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bretagne", toString: function () { return this.url } } }, 8920: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bulle-aide-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bulle-aide", toString: function () { return this.url } } }, 8376: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bulle-euro-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bulle-euro", toString: function () { return this.url } } }, 1690: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bulle-exclamation-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bulle-exclamation", toString: function () { return this.url } } }, 9835: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bulle-faq-usage", viewBox: "0 0 28 28.02", url: i.p + "./assets/images/icons.svg#bulle-faq", toString: function () { return this.url } } }, 8337: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bulle-info-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bulle-info", toString: function () { return this.url } } }, 8364: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bulle-maison-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bulle-maison", toString: function () { return this.url } } }, 5170: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bulle-points-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bulle-points", toString: function () { return this.url } } }, 5273: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "bulles-reclamation-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#bulles-reclamation", toString: function () { return this.url } } }, 4552: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "cadenas-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#cadenas", toString: function () { return this.url } } }, 9062: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "calcul-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#calcul", toString: function () { return this.url } } }, 4172: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "calculatrice-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#calculatrice", toString: function () { return this.url } } }, 357: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "camembert-euros-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#camembert-euros", toString: function () { return this.url } } }, 9581: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "camembert-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#camembert", toString: function () { return this.url } } }, 410: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "camera-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#camera", toString: function () { return this.url } } }, 4306: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "camping-car-bateau-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#camping-car-bateau", toString: function () { return this.url } } }, 4601: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "carte-compte-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#carte-compte", toString: function () { return this.url } } }, 946: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "carte-fleches-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#carte-fleches", toString: function () { return this.url } } }, 8931: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "carte-id-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#carte-id", toString: function () { return this.url } } }, 3298: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "carte-interdit-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#carte-interdit", toString: function () { return this.url } } }, 1360: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "carte-mobile-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#carte-mobile", toString: function () { return this.url } } }, 6458: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "carte-pause-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#carte-pause", toString: function () { return this.url } } }, 7426: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "carte-plafond-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#carte-plafond", toString: function () { return this.url } } }, 7964: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "carte-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#carte", toString: function () { return this.url } } }, 5995: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "cartes-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#cartes", toString: function () { return this.url } } }, 6887: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "cercle-contour-usage", viewBox: "0 0 1024 1024", url: i.p + "./assets/images/icons.svg#cercle-contour", toString: function () { return this.url } } }, 5599: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "cercle-usage", viewBox: "0 0 1024 1024", url: i.p + "./assets/images/icons.svg#cercle", toString: function () { return this.url } } }, 5689: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "cheque-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#cheque", toString: function () { return this.url } } }, 2837: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "chequier-breton-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#chequier-breton", toString: function () { return this.url } } }, 7434: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "chequier-classique-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#chequier-classique", toString: function () { return this.url } } }, 9011: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "chequier-ferme-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#chequier-ferme", toString: function () { return this.url } } }, 2708: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "chequier-portefeuille-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#chequier-portefeuille", toString: function () { return this.url } } }, 4846: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "chevron-double-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#chevron-double", toString: function () { return this.url } } }, 5404: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "chevron-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#chevron", toString: function () { return this.url } } }, 7590: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "cible-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#cible", toString: function () { return this.url } } }, 9697: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "cloche-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#cloche", toString: function () { return this.url } } }, 3530: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "coche-cercle-fin-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#coche-cercle-fin", toString: function () { return this.url } } }, 7510: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "coche-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#coche-cercle", toString: function () { return this.url } } }, 3254: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "coche-disque-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#coche-disque", toString: function () { return this.url } } }, 7710: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "coche-liste-usage", viewBox: "0 0 28 28.04", url: i.p + "./assets/images/icons.svg#coche-liste", toString: function () { return this.url } } }, 2066: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "coche-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#coche", toString: function () { return this.url } } }, 1256: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "coffre-fort-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#coffre-fort", toString: function () { return this.url } } }, 9938: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "compte-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#compte", toString: function () { return this.url } } }, 668: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "conseiller-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#conseiller-cercle", toString: function () { return this.url } } }, 5077: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "conseiller-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#conseiller", toString: function () { return this.url } } }, 2303: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "conseillere-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#conseillere", toString: function () { return this.url } } }, 2669: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "contacts-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#contacts", toString: function () { return this.url } } }, 7838: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "copier-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#copier", toString: function () { return this.url } } }, 9425: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "couple-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#couple", toString: function () { return this.url } } }, 2269: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "courbe-fleche-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#courbe-fleche", toString: function () { return this.url } } }, 6487: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "crayon-barre-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#crayon-barre", toString: function () { return this.url } } }, 2508: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "crayon-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#crayon", toString: function () { return this.url } } }, 7623: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "croix-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#croix-cercle", toString: function () { return this.url } } }, 3867: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "croix-fermer-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#croix-fermer", toString: function () { return this.url } } }, 1142: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "croix-suppr-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#croix-suppr", toString: function () { return this.url } } }, 5677: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "curseur-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#curseur", toString: function () { return this.url } } }, 6298: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "deconnexion-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#deconnexion", toString: function () { return this.url } } }, 3607: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "dossier-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#dossier", toString: function () { return this.url } } }, 4046: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "drapeau-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#drapeau-cercle", toString: function () { return this.url } } }, 1799: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "drapeau-disque-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#drapeau-disque", toString: function () { return this.url } } }, 5606: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "drapeau-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#drapeau", toString: function () { return this.url } } }, 4946: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "engrenages-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#engrenages", toString: function () { return this.url } } }, 9109: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "enveloppe-fleche-usage", viewBox: "0 0 28.23 28", url: i.p + "./assets/images/icons.svg#enveloppe-fleche", toString: function () { return this.url } } }, 9934: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "enveloppe-ouverte-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#enveloppe-ouverte", toString: function () { return this.url } } }, 6428: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "enveloppe-recommande-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#enveloppe-recommande", toString: function () { return this.url } } }, 6951: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "etiquette-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#etiquette", toString: function () { return this.url } } }, 6180: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "etoile-plein-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#etoile-plein", toString: function () { return this.url } } }, 2491: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "etoile-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#etoile", toString: function () { return this.url } } }, 6593: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "euro-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#euro", toString: function () { return this.url } } }, 2157: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "excel-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#excel", toString: function () { return this.url } } }, 7332: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "exclamation-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#exclamation-cercle", toString: function () { return this.url } } }, 2251: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "exclamation-triangle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#exclamation-triangle", toString: function () { return this.url } } }, 7414: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "famille-parapluie-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#famille-parapluie", toString: function () { return this.url } } }, 605: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "feuille-crayon-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#feuille-crayon", toString: function () { return this.url } } }, 6485: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "feuille-croix-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#feuille-croix", toString: function () { return this.url } } }, 6791: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "feuille-euro-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#feuille-euro", toString: function () { return this.url } } }, 7546: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "fichier-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#fichier", toString: function () { return this.url } } }, 7459: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "fleche-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#fleche-cercle", toString: function () { return this.url } } }, 8483: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "fleche-retour-droite-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#fleche-retour-droite", toString: function () { return this.url } } }, 5117: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "fleches-chargement-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#fleches-chargement", toString: function () { return this.url } } }, 6119: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "fleches-euro-rapide-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#fleches-euro-rapide", toString: function () { return this.url } } }, 1075: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "fleches-euro-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#fleches-euro", toString: function () { return this.url } } }, 5590: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "geolocalisation-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#geolocalisation", toString: function () { return this.url } } }, 6695: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "graph-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#graph", toString: function () { return this.url } } }, 6498: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "histogramme-usage", viewBox: "0 0 28 30.06", url: i.p + "./assets/images/icons.svg#histogramme", toString: function () { return this.url } } }, 2596: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "historique-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#historique", toString: function () { return this.url } } }, 5481: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "horloge-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#horloge", toString: function () { return this.url } } }, 5243: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "hors-ligne-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#hors-ligne", toString: function () { return this.url } } }, 6178: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "imprimante-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#imprimante", toString: function () { return this.url } } }, 9121: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "info-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#info-cercle", toString: function () { return this.url } } }, 7968: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "info-flash-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#info-flash", toString: function () { return this.url } } }, 4733: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "interrogation-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#interrogation-cercle", toString: function () { return this.url } } }, 1032: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "justice-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#justice", toString: function () { return this.url } } }, 9520: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "livret-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#livret", toString: function () { return this.url } } }, 4753: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "loupe-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#loupe", toString: function () { return this.url } } }, 9400: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "lune-zzz-usage", viewBox: "0 0 28.33 28", url: i.p + "./assets/images/icons.svg#lune-zzz", toString: function () { return this.url } } }, 5271: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "main-bulle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#main-bulle", toString: function () { return this.url } } }, 9079: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "main-clic-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#main-clic", toString: function () { return this.url } } }, 4467: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "main-euro-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#main-euro", toString: function () { return this.url } } }, 3629: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "main-maison-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#main-maison", toString: function () { return this.url } } }, 4947: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "main-pourcentage-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#main-pourcentage", toString: function () { return this.url } } }, 2359: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "mains-poignee-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#mains-poignee", toString: function () { return this.url } } }, 6917: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "mains-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#mains", toString: function () { return this.url } } }, 6185: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "maison-cle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#maison-cle", toString: function () { return this.url } } }, 112: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "maison-marteau-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#maison-marteau", toString: function () { return this.url } } }, 7053: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "maison-parapluie-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#maison-parapluie", toString: function () { return this.url } } }, 1554: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "maison-voiture-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#maison-voiture", toString: function () { return this.url } } }, 4605: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "maison-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#maison", toString: function () { return this.url } } }, 4624: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "marteau-justice-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#marteau-justice", toString: function () { return this.url } } }, 7533: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "micro-ok-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#micro-ok", toString: function () { return this.url } } }, 635: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "micro-ondes-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#micro-ondes", toString: function () { return this.url } } }, 645: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "micro-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#micro", toString: function () { return this.url } } }, 6529: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "mobile-appel-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#mobile-appel", toString: function () { return this.url } } }, 9084: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "mobile-cadenas-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#mobile-cadenas", toString: function () { return this.url } } }, 2809: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "mobile-notification-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#mobile-notification", toString: function () { return this.url } } }, 232: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "mobile-sms-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#mobile-sms", toString: function () { return this.url } } }, 7953: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "mobile-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#mobile", toString: function () { return this.url } } }, 6294: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "moto-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#moto", toString: function () { return this.url } } }, 3323: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "navigation-burger-ferme-mobile-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#navigation-burger-ferme-mobile", toString: function () { return this.url } } }, 6571: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "navigation-burger-ouvert-mobile-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#navigation-burger-ouvert-mobile", toString: function () { return this.url } } }, 7158: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "navigation-fermer-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#navigation-fermer", toString: function () { return this.url } } }, 1984: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "navigation-retour-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#navigation-retour-cercle", toString: function () { return this.url } } }, 776: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "navigation-retour-mobile-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#navigation-retour-mobile", toString: function () { return this.url } } }, 5171: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "navigation-retour-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#navigation-retour", toString: function () { return this.url } } }, 4849: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "oeil-barre-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#oeil-barre", toString: function () { return this.url } } }, 2921: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "oeil-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#oeil", toString: function () { return this.url } } }, 9438: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "oreille-barree-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#oreille-barree", toString: function () { return this.url } } }, 3648: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "outils-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#outils", toString: function () { return this.url } } }, 7352: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "panier-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#panier", toString: function () { return this.url } } }, 9229: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "parapluie-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#parapluie", toString: function () { return this.url } } }, 7952: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-bouclier-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-bouclier", toString: function () { return this.url } } }, 6698: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-bulle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-bulle", toString: function () { return this.url } } }, 4679: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-cercle-fleche-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-cercle-fleche", toString: function () { return this.url } } }, 6618: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-cercle", toString: function () { return this.url } } }, 8738: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-check-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-check", toString: function () { return this.url } } }, 5139: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-cheveux-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-cheveux", toString: function () { return this.url } } }, 7945: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-croix-usage", viewBox: "0 0 28 28.02", url: i.p + "./assets/images/icons.svg#personne-croix", toString: function () { return this.url } } }, 4119: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-etudiant-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-etudiant", toString: function () { return this.url } } }, 9: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-malette-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-malette", toString: function () { return this.url } } }, 956: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-slash-personne-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-slash-personne", toString: function () { return this.url } } }, 4977: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-souriez-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne-souriez", toString: function () { return this.url } } }, 3047: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "personne-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#personne", toString: function () { return this.url } } }, 4976: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "plage-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#plage", toString: function () { return this.url } } }, 8945: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "plus-cercle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#plus-cercle", toString: function () { return this.url } } }, 1761: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "plus-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#plus", toString: function () { return this.url } } }, 5939: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "porte-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#porte", toString: function () { return this.url } } }, 3438: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "portefeuille-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#portefeuille", toString: function () { return this.url } } }, 9112: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "poubelle-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#poubelle", toString: function () { return this.url } } }, 6829: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "pouce-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#pouce", toString: function () { return this.url } } }, 1060: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "reco-faciale-empreinte-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#reco-faciale-empreinte", toString: function () { return this.url } } }, 6709: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "reco-faciale-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#reco-faciale", toString: function () { return this.url } } }, 7080: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "reglages-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#reglages", toString: function () { return this.url } } }, 8898: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "rib-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#rib", toString: function () { return this.url } } }, 8582: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "sablier-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#sablier", toString: function () { return this.url } } }, 8597: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "smiley-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#smiley", toString: function () { return this.url } } }, 250: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "tablette-crayon-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#tablette-crayon", toString: function () { return this.url } } }, 3035: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "telecharger-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#telecharger", toString: function () { return this.url } } }, 6369: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "telephone-fleche-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#telephone-fleche", toString: function () { return this.url } } }, 1074: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "telephone-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#telephone", toString: function () { return this.url } } }, 1766: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "tirelire-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#tirelire", toString: function () { return this.url } } }, 9089: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "trombone-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#trombone", toString: function () { return this.url } } }, 266: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "twitter-usage", viewBox: "0 0 28.009 28", url: i.p + "./assets/images/icons.svg#twitter", toString: function () { return this.url } } }, 1679: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "upload-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#upload", toString: function () { return this.url } } }, 3058: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "voiture-moto-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#voiture-moto", toString: function () { return this.url } } }, 5003: (t, e, i) => { "use strict"; i.r(e), i.d(e, { default: () => s }); const s = { id: "voiture-usage", viewBox: "0 0 28 28", url: i.p + "./assets/images/icons.svg#voiture", toString: function () { return this.url } } }, 206: (t, e, i) => { var s = { "./cmb_part.1.woff": 5353, "./cmb_part.1.woff2": 890, "ux-deprecated-lib/dist/cmb/assets/fonts/cmb_part.1.woff": 5353, "ux-deprecated-lib/dist/cmb/assets/fonts/cmb_part.1.woff2": 890 }; function a(t) { var e = n(t); return i(e) } function n(t) { if (!i.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] } a.keys = function () { return Object.keys(s) }, a.resolve = n, t.exports = a, a.id = 206 }, 7493: (t, e, i) => { var s = { "./broken-screen.png": 2755, "./construction.png": 5162, "./profil_chat.png": 9147, "./range.png": 6138, "./redirection.png": 7171, "ux-deprecated-lib/dist/cmb/assets/images/broken-screen.png": 2755, "ux-deprecated-lib/dist/cmb/assets/images/construction.png": 5162, "ux-deprecated-lib/dist/cmb/assets/images/profil_chat.png": 9147, "ux-deprecated-lib/dist/cmb/assets/images/range.png": 6138, "ux-deprecated-lib/dist/cmb/assets/images/redirection.png": 7171 }; function a(t) { var e = n(t); return i(e) } function n(t) { if (!i.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] } a.keys = function () { return Object.keys(s) }, a.resolve = n, t.exports = a, a.id = 7493 }, 502: () => { !function (t) { var e = {}; function i(s) { if (e[s]) return e[s].exports; var a = e[s] = { i: s, l: !1, exports: {} }; return t[s].call(a.exports, a, a.exports, i), a.l = !0, a.exports } i.m = t, i.c = e, i.d = function (t, e, s) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s }) }, i.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var s = Object.create(null); if (i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var a in t) i.d(s, a, function (e) { return t[e] }.bind(null, a)); return s }, i.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return i.d(e, "a", e), e }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 146) }([function (t, e, i) { "use strict"; t.exports = function (t) { var e = []; return e.toString = function () { return this.map((function (e) { var i = function (t, e) { var i, s, a, n = t[1] || "", r = t[3]; if (!r) return n; if (e && "function" == typeof btoa) { var o = (i = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(a, " */")), l = r.sources.map((function (t) { return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */") })); return [n].concat(l).concat([o]).join("\n") } return [n].join("\n") }(e, t); return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i })).join("") }, e.i = function (t, i, s) { "string" == typeof t && (t = [[null, t, ""]]); var a = {}; if (s) for (var n = 0; n < this.length; n++) { var r = this[n][0]; null != r && (a[r] = !0) } for (var o = 0; o < t.length; o++) { var l = [].concat(t[o]); s && a[l[0]] || (i && (l[2] ? l[2] = "".concat(i, " and ").concat(l[2]) : l[2] = i), e.push(l)) } }, e } }, function (t, e, i) { (function (e) { var i = /^\s+|\s+$/g, s = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, n = /^0o[0-7]+$/i, r = parseInt, o = "object" == typeof e && e && e.Object === Object && e, l = "object" == typeof self && self && self.Object === Object && self, c = o || l || Function("return this")(), d = Object.prototype.toString, u = Math.max, h = Math.min, p = function () { return c.Date.now() }; function b(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) } function m(t) { if ("number" == typeof t) return t; if (function (t) { return "symbol" == typeof t || function (t) { return !!t && "object" == typeof t }(t) && "[object Symbol]" == d.call(t) }(t)) return NaN; if (b(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t; t = b(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t; t = t.replace(i, ""); var o = a.test(t); return o || n.test(t) ? r(t.slice(2), o ? 2 : 8) : s.test(t) ? NaN : +t } t.exports = function (t, e, i) { var s, a, n, r, o, l, c = 0, d = !1, g = !1, v = !0; if ("function" != typeof t) throw new TypeError("Expected a function"); function f(e) { var i = s, n = a; return s = a = void 0, c = e, r = t.apply(n, i) } function x(t) { return c = t, o = setTimeout(k, e), d ? f(t) : r } function y(t) { var i = t - l; return void 0 === l || i >= e || i < 0 || g && t - c >= n } function k() { var t = p(); if (y(t)) return w(t); o = setTimeout(k, function (t) { var i = e - (t - l); return g ? h(i, n - (t - c)) : i }(t)) } function w(t) { return o = void 0, v && s ? f(t) : (s = a = void 0, r) } function C() { var t = p(), i = y(t); if (s = arguments, a = this, l = t, i) { if (void 0 === o) return x(l); if (g) return o = setTimeout(k, e), f(l) } return void 0 === o && (o = setTimeout(k, e)), r } return e = m(e) || 0, b(i) && (d = !!i.leading, n = (g = "maxWait" in i) ? u(m(i.maxWait) || 0, e) : n, v = "trailing" in i ? !!i.trailing : v), C.cancel = function () { void 0 !== o && clearTimeout(o), c = 0, s = l = a = o = void 0 }, C.flush = function () { return void 0 === o ? r : w(p()) }, C } }).call(this, i(100)) }, function (t, e, i) { t.exports = function () { "use strict"; var t = Object.hasOwnProperty, e = Object.setPrototypeOf, i = Object.isFrozen, s = Object.getPrototypeOf, a = Object.getOwnPropertyDescriptor, n = Object.freeze, r = Object.seal, o = Object.create, l = "undefined" != typeof Reflect && Reflect, c = l.apply, d = l.construct; c || (c = function (t, e, i) { return t.apply(e, i) }), n || (n = function (t) { return t }), r || (r = function (t) { return t }), d || (d = function (t, e) { return new (Function.prototype.bind.apply(t, [null].concat(function (t) { if (Array.isArray(t)) { for (var e = 0, i = Array(t.length); e < t.length; e++)i[e] = t[e]; return i } return Array.from(t) }(e)))) }); var u, h = w(Array.prototype.forEach), p = w(Array.prototype.pop), b = w(Array.prototype.push), m = w(String.prototype.toLowerCase), g = w(String.prototype.match), v = w(String.prototype.replace), f = w(String.prototype.indexOf), x = w(String.prototype.trim), y = w(RegExp.prototype.test), k = (u = TypeError, function () { for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)e[i] = arguments[i]; return d(u, e) }); function w(t) { return function (e) { for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)s[a - 1] = arguments[a]; return c(t, e, s) } } function C(t, s) { e && e(t, null); for (var a = s.length; a--;) { var n = s[a]; if ("string" == typeof n) { var r = m(n); r !== n && (i(s) || (s[a] = r), n = r) } t[n] = !0 } return t } function _(e) { var i = o(null), s = void 0; for (s in e) c(t, e, [s]) && (i[s] = e[s]); return i } function E(t, e) { for (; null !== t;) { var i = a(t, e); if (i) { if (i.get) return w(i.get); if ("function" == typeof i.value) return w(i.value) } t = s(t) } return null } var L = n(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), A = n(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), S = n(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), T = n(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $ = n(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), I = n(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), M = n(["#text"]), B = n(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]), q = n(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), z = n(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), N = n(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), H = r(/\{\{[\s\S]*|[\s\S]*\}\}/gm), j = r(/<%[\s\S]*|[\s\S]*%>/gm), R = r(/^data-[\-\w.\u00B7-\uFFFF]/), O = r(/^aria-[\-\w]+$/), P = r(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), D = r(/^(?:\w+script|data):/i), V = r(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; function F(t) { if (Array.isArray(t)) { for (var e = 0, i = Array(t.length); e < t.length; e++)i[e] = t[e]; return i } return Array.from(t) } var W = function () { return "undefined" == typeof window ? null : window }, K = function (t, e) { if ("object" !== (void 0 === t ? "undefined" : U(t)) || "function" != typeof t.createPolicy) return null; var i = null; e.currentScript && e.currentScript.hasAttribute("data-tt-policy-suffix") && (i = e.currentScript.getAttribute("data-tt-policy-suffix")); var s = "dompurify" + (i ? "#" + i : ""); try { return t.createPolicy(s, { createHTML: function (t) { return t } }) } catch (t) { return console.warn("TrustedTypes policy " + s + " could not be created."), null } }; return function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W(), i = function (e) { return t(e) }; if (i.version = "2.2.6", i.removed = [], !e || !e.document || 9 !== e.document.nodeType) return i.isSupported = !1, i; var s = e.document, a = e.document, r = e.DocumentFragment, o = e.HTMLTemplateElement, l = e.Node, c = e.Element, d = e.NodeFilter, u = e.NamedNodeMap, w = void 0 === u ? e.NamedNodeMap || e.MozNamedAttrMap : u, G = e.Text, X = e.Comment, Y = e.DOMParser, J = e.trustedTypes, Z = c.prototype, Q = E(Z, "cloneNode"), tt = E(Z, "nextSibling"), et = E(Z, "childNodes"), it = E(Z, "parentNode"); if ("function" == typeof o) { var st = a.createElement("template"); st.content && st.content.ownerDocument && (a = st.content.ownerDocument) } var at = K(J, s), nt = at && Ht ? at.createHTML("") : "", rt = a, ot = rt.implementation, lt = rt.createNodeIterator, ct = rt.getElementsByTagName, dt = rt.createDocumentFragment, ut = s.importNode, ht = {}; try { ht = _(a).documentMode ? a.documentMode : {} } catch (t) { } var pt = {}; i.isSupported = ot && void 0 !== ot.createHTMLDocument && 9 !== ht; var bt = H, mt = j, gt = R, vt = O, ft = D, xt = V, yt = P, kt = null, wt = C({}, [].concat(F(L), F(A), F(S), F($), F(M))), Ct = null, _t = C({}, [].concat(F(B), F(q), F(z), F(N))), Et = null, Lt = null, At = !0, St = !0, Tt = !1, $t = !1, It = !1, Mt = !1, Bt = !1, qt = !1, zt = !1, Nt = !0, Ht = !1, jt = !0, Rt = !0, Ot = !1, Pt = {}, Dt = C({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Vt = null, Ut = C({}, ["audio", "video", "img", "source", "image", "track"]), Ft = null, Wt = C({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]), Kt = null, Gt = a.createElement("form"), Xt = function (t) { Kt && Kt === t || (t && "object" === (void 0 === t ? "undefined" : U(t)) || (t = {}), t = _(t), kt = "ALLOWED_TAGS" in t ? C({}, t.ALLOWED_TAGS) : wt, Ct = "ALLOWED_ATTR" in t ? C({}, t.ALLOWED_ATTR) : _t, Ft = "ADD_URI_SAFE_ATTR" in t ? C(_(Wt), t.ADD_URI_SAFE_ATTR) : Wt, Vt = "ADD_DATA_URI_TAGS" in t ? C(_(Ut), t.ADD_DATA_URI_TAGS) : Ut, Et = "FORBID_TAGS" in t ? C({}, t.FORBID_TAGS) : {}, Lt = "FORBID_ATTR" in t ? C({}, t.FORBID_ATTR) : {}, Pt = "USE_PROFILES" in t && t.USE_PROFILES, At = !1 !== t.ALLOW_ARIA_ATTR, St = !1 !== t.ALLOW_DATA_ATTR, Tt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, $t = t.SAFE_FOR_TEMPLATES || !1, It = t.WHOLE_DOCUMENT || !1, qt = t.RETURN_DOM || !1, zt = t.RETURN_DOM_FRAGMENT || !1, Nt = !1 !== t.RETURN_DOM_IMPORT, Ht = t.RETURN_TRUSTED_TYPE || !1, Bt = t.FORCE_BODY || !1, jt = !1 !== t.SANITIZE_DOM, Rt = !1 !== t.KEEP_CONTENT, Ot = t.IN_PLACE || !1, yt = t.ALLOWED_URI_REGEXP || yt, $t && (St = !1), zt && (qt = !0), Pt && (kt = C({}, [].concat(F(M))), Ct = [], !0 === Pt.html && (C(kt, L), C(Ct, B)), !0 === Pt.svg && (C(kt, A), C(Ct, q), C(Ct, N)), !0 === Pt.svgFilters && (C(kt, S), C(Ct, q), C(Ct, N)), !0 === Pt.mathMl && (C(kt, $), C(Ct, z), C(Ct, N))), t.ADD_TAGS && (kt === wt && (kt = _(kt)), C(kt, t.ADD_TAGS)), t.ADD_ATTR && (Ct === _t && (Ct = _(Ct)), C(Ct, t.ADD_ATTR)), t.ADD_URI_SAFE_ATTR && C(Ft, t.ADD_URI_SAFE_ATTR), Rt && (kt["#text"] = !0), It && C(kt, ["html", "head", "body"]), kt.table && (C(kt, ["tbody"]), delete Et.tbody), n && n(t), Kt = t) }, Yt = C({}, ["mi", "mo", "mn", "ms", "mtext"]), Jt = C({}, ["foreignobject", "desc", "title", "annotation-xml"]), Zt = C({}, A); C(Zt, S), C(Zt, T); var Qt = C({}, $); C(Qt, I); var te = "http://www.w3.org/1998/Math/MathML", ee = "http://www.w3.org/2000/svg", ie = "http://www.w3.org/1999/xhtml", se = function (t) { var e = it(t); e && e.tagName || (e = { namespaceURI: ie, tagName: "template" }); var i = m(t.tagName), s = m(e.tagName); if (t.namespaceURI === ee) return e.namespaceURI === ie ? "svg" === i : e.namespaceURI === te ? "svg" === i && ("annotation-xml" === s || Yt[s]) : Boolean(Zt[i]); if (t.namespaceURI === te) return e.namespaceURI === ie ? "math" === i : e.namespaceURI === ee ? "math" === i && Jt[s] : Boolean(Qt[i]); if (t.namespaceURI === ie) { if (e.namespaceURI === ee && !Jt[s]) return !1; if (e.namespaceURI === te && !Yt[s]) return !1; var a = C({}, ["title", "style", "font", "a", "script"]); return !Qt[i] && (a[i] || !Zt[i]) } return !1 }, ae = function (t) { b(i.removed, { element: t }); try { t.parentNode.removeChild(t) } catch (e) { try { t.outerHTML = nt } catch (e) { t.remove() } } }, ne = function (t, e) { try { b(i.removed, { attribute: e.getAttributeNode(t), from: e }) } catch (t) { b(i.removed, { attribute: null, from: e }) } e.removeAttribute(t) }, re = function (t) { var e = void 0, i = void 0; if (Bt) t = "<remove></remove>" + t; else { var s = g(t, /^[\r\n\t ]+/); i = s && s[0] } var n = at ? at.createHTML(t) : t; try { e = (new Y).parseFromString(n, "text/html") } catch (t) { } if (!e || !e.documentElement) { var r = (e = ot.createHTMLDocument("")).body; r.parentNode.removeChild(r.parentNode.firstElementChild), r.outerHTML = n } return t && i && e.body.insertBefore(a.createTextNode(i), e.body.childNodes[0] || null), ct.call(e, It ? "html" : "body")[0] }, oe = function (t) { return lt.call(t.ownerDocument || t, t, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, (function () { return d.FILTER_ACCEPT }), !1) }, le = function (t) { return !(t instanceof G || t instanceof X || "string" == typeof t.nodeName && "string" == typeof t.textContent && "function" == typeof t.removeChild && t.attributes instanceof w && "function" == typeof t.removeAttribute && "function" == typeof t.setAttribute && "string" == typeof t.namespaceURI && "function" == typeof t.insertBefore) }, ce = function (t) { return "object" === (void 0 === l ? "undefined" : U(l)) ? t instanceof l : t && "object" === (void 0 === t ? "undefined" : U(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName }, de = function (t, e, s) { pt[t] && h(pt[t], (function (t) { t.call(i, e, s, Kt) })) }, ue = function (t) { var e = void 0; if (de("beforeSanitizeElements", t, null), le(t)) return ae(t), !0; if (g(t.nodeName, /[\u0080-\uFFFF]/)) return ae(t), !0; var s = m(t.nodeName); if (de("uponSanitizeElement", t, { tagName: s, allowedTags: kt }), !ce(t.firstElementChild) && (!ce(t.content) || !ce(t.content.firstElementChild)) && y(/<[/\w]/g, t.innerHTML) && y(/<[/\w]/g, t.textContent)) return ae(t), !0; if (!kt[s] || Et[s]) { if (Rt && !Dt[s]) for (var a = it(t), n = et(t), r = n.length - 1; r >= 0; --r)a.insertBefore(Q(n[r], !0), tt(t)); return ae(t), !0 } return t instanceof c && !se(t) ? (ae(t), !0) : "noscript" !== s && "noembed" !== s || !y(/<\/no(script|embed)/i, t.innerHTML) ? ($t && 3 === t.nodeType && (e = t.textContent, e = v(e, bt, " "), e = v(e, mt, " "), t.textContent !== e && (b(i.removed, { element: t.cloneNode() }), t.textContent = e)), de("afterSanitizeElements", t, null), !1) : (ae(t), !0) }, he = function (t, e, i) { if (jt && ("id" === e || "name" === e) && (i in a || i in Gt)) return !1; if (St && y(gt, e)); else if (At && y(vt, e)); else { if (!Ct[e] || Lt[e]) return !1; if (Ft[e]); else if (y(yt, v(i, xt, ""))); else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== f(i, "data:") || !Vt[t]) if (Tt && !y(ft, v(i, xt, ""))); else if (i) return !1 } return !0 }, pe = function (t) { var e = void 0, s = void 0, a = void 0, n = void 0; de("beforeSanitizeAttributes", t, null); var r = t.attributes; if (r) { var o = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Ct }; for (n = r.length; n--;) { var l = e = r[n], c = l.name, d = l.namespaceURI; if (s = x(e.value), a = m(c), o.attrName = a, o.attrValue = s, o.keepAttr = !0, o.forceKeepAttr = void 0, de("uponSanitizeAttribute", t, o), s = o.attrValue, !o.forceKeepAttr && (ne(c, t), o.keepAttr)) if (y(/\/>/i, s)) ne(c, t); else { $t && (s = v(s, bt, " "), s = v(s, mt, " ")); var u = t.nodeName.toLowerCase(); if (he(u, a, s)) try { d ? t.setAttributeNS(d, c, s) : t.setAttribute(c, s), p(i.removed) } catch (t) { } } } de("afterSanitizeAttributes", t, null) } }, be = function t(e) { var i = void 0, s = oe(e); for (de("beforeSanitizeShadowDOM", e, null); i = s.nextNode();)de("uponSanitizeShadowNode", i, null), ue(i) || (i.content instanceof r && t(i.content), pe(i)); de("afterSanitizeShadowDOM", e, null) }; return i.sanitize = function (t, a) { var n = void 0, o = void 0, c = void 0, d = void 0, u = void 0; if (t || (t = "\x3c!--\x3e"), "string" != typeof t && !ce(t)) { if ("function" != typeof t.toString) throw k("toString is not a function"); if ("string" != typeof (t = t.toString())) throw k("dirty is not a string, aborting") } if (!i.isSupported) { if ("object" === U(e.toStaticHTML) || "function" == typeof e.toStaticHTML) { if ("string" == typeof t) return e.toStaticHTML(t); if (ce(t)) return e.toStaticHTML(t.outerHTML) } return t } if (Mt || Xt(a), i.removed = [], "string" == typeof t && (Ot = !1), Ot); else if (t instanceof l) 1 === (o = (n = re("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === o.nodeName || "HTML" === o.nodeName ? n = o : n.appendChild(o); else { if (!qt && !$t && !It && -1 === t.indexOf("<")) return at && Ht ? at.createHTML(t) : t; if (!(n = re(t))) return qt ? null : nt } n && Bt && ae(n.firstChild); for (var h = oe(Ot ? t : n); c = h.nextNode();)3 === c.nodeType && c === d || ue(c) || (c.content instanceof r && be(c.content), pe(c), d = c); if (d = null, Ot) return t; if (qt) { if (zt) for (u = dt.call(n.ownerDocument); n.firstChild;)u.appendChild(n.firstChild); else u = n; return Nt && (u = ut.call(s, u, !0)), u } var p = It ? n.outerHTML : n.innerHTML; return $t && (p = v(p, bt, " "), p = v(p, mt, " ")), at && Ht ? at.createHTML(p) : p }, i.setConfig = function (t) { Xt(t), Mt = !0 }, i.clearConfig = function () { Kt = null, Mt = !1 }, i.isValidAttribute = function (t, e, i) { Kt || Xt({}); var s = m(t), a = m(e); return he(s, a, i) }, i.addHook = function (t, e) { "function" == typeof e && (pt[t] = pt[t] || [], b(pt[t], e)) }, i.removeHook = function (t) { pt[t] && p(pt[t]) }, i.removeHooks = function (t) { pt[t] && (pt[t] = []) }, i.removeAllHooks = function () { pt = {} }, i }() }() }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-text--bold{font-weight:700}.c-text--italic{font-style:italic}.c-text--underline{text-decoration:underline}.c-text--uppercase{text-transform:uppercase}.c-text--color-part{color:var(--color-text-part,var(--color-primary,#b62737))}.c-text--color-pro{color:var(--color-text-pro,var(--color-secondary,#51bbc9))}.c-text--color-success{color:var(--color-success,#a8d81f)}.c-text--color-error{color:var(--color-error,#b62737)}.c-text--xs{font-size:var(--text-font-size-xs,10px)}.c-text--sm{font-size:var(--text-font-size-sm,12px)}.c-text--md{font-size:var(--text-font-size-md,16px)}.c-text--lg{font-size:var(--text-font-size-lg,18px)}.c-text--xl{font-size:var(--text-font-size-xl,24px)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-row{position:relative;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;width:100%;min-height:40px;padding:5px 10px;box-sizing:border-box}.c-row--border-top{border-top:1px solid #eaeaea}.c-row--border-bottom{border-bottom:1px solid #eaeaea}.c-row--border-full{border:1px solid #ddd}.c-row--margin-bottom{margin-bottom:10px}.c-row--background{border-radius:var(--border-radius-sm);background-color:#fff}.c-row--push-right{margin-left:auto}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-text{margin:0}.c-text--xs{font-size:var(--text-font-size-xs);line-height:var(--text-line-height-xs)}.c-text--sm{font-size:var(--text-font-size-sm);line-height:var(--text-line-height-sm)}.c-text--md{font-size:var(--text-font-size-md);line-height:var(--text-line-height-md)}.c-text--lg{font-size:var(--text-font-size-lg);line-height:var(--text-line-height-lg)}.c-text--xl{font-size:var(--text-font-size-xl);line-height:var(--text-line-height-xl)}.c-text--xxl{font-size:var(--text-font-size-xxl);line-height:var(--text-line-height-xxl)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-theme--part{color:var(--color-theme-part)!important}.c-theme--pro{color:var(--color-theme-pro)!important}.c-theme--light{color:var(--color-theme-light)!important}.c-theme--dark{color:var(--color-theme-dark)!important}.c-theme--success{color:var(--color-success)!important}.c-theme--error{color:var(--color-error)!important}.c-theme--white{color:var(--color-white)!important}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".m-background-hover{transition:background-color .25s ease-in-out}.m-background-hover:hover{background-color:var(--color-background-hover)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-amount--negative{color:var(--color-error)!important}.c-amount--background,.c-amount--background-light{padding:5px 10px;border-radius:3px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".m-btn-no-style{border:none;margin:0;padding:0;background-color:initial;cursor:pointer;color:inherit;min-width:0}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{width:100%;max-width:230px}.c-btn{display:inline-flex;justify-content:center;align-items:center;vertical-align:middle;font:inherit;text-align:center;margin:0;cursor:pointer;height:35px;width:100%;min-width:230px;line-height:1.2;padding:0 var(--spacing-sm);border:1px solid #000;border-radius:var(--border-radius-sm);background-color:initial;color:var(--color-text);font-weight:700;font-size:13px;box-sizing:border-box}@media (min-width:74rem){.c-btn{font-size:14px}}.c-btn--primary{background-color:var(--color-primary);border-color:var(--color-primary);color:#fff}.c-btn--secondary{background-color:var(--color-secondary);border-color:var(--color-secondary);color:#fff}.c-btn--disabled{background-color:var(--color-disabled);border-color:var(--color-disabled);color:#fff;cursor:not-allowed}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{--checkbox-checked-color:var(--color-text);--checkbox-border-color:var(--color-text);--checkbox-radius:4px;position:relative;display:inline-block;background-size:contain;width:25px;height:25px;border:2px solid var(--checkbox-border-color);border-radius:var(--checkbox-radius);cursor:pointer;vertical-align:middle;margin-right:var(--spacing-xs)}:host(:focus){outline:2px auto Highlight!important;outline:5px auto -webkit-focus-ring-color!important;-moz-outline-radius:6px}:host([hidden]){display:none}:host:after{content:\"\";position:absolute;top:-3px;left:0;width:0;height:25px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.183' height='20.497' viewBox='0 0 6.928 5.423'%3E%3Cpath d='M6.015.265a.659.659 0 00-.47.186l-3.22 3.107-.923-.962a.66.66 0 10-.955.915l1.368 1.427c.005.005.008.012.014.018.127.132.295.2.464.202 0 0 0 0 0 0a.665.665 0 00.472-.184c.006-.005.01-.012.015-.017l3.682-3.554A.66.66 0 006.015.265z' fill='%23616161' fill-opacity='.914' stroke='%23fff' stroke-width='.529' stroke-linejoin='round' paint-order='stroke markers fill'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:1px 2px;transition:transform .125s ease-in-out,width .125s ease-in-out}:host([checked=checked]):after,:host([checked=true]):after{width:30px}:host([checked=checked][disabled]),:host([checked=true][disabled]),:host([disabled]){cursor:not-allowed;background-color:var(--color-disabled);opacity:.5}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-stack{display:flex;justify-content:flex-start}.c-stack--vertical{flex-direction:column}.c-stack--horizontal{flex-direction:row;align-items:center}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-checkbox-group{display:flex;flex-flow:column}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:inline-block;z-index:1}img{max-width:100%;font-style:italic;vertical-align:middle}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".a11y-hidden{border:0!important;clip:rect(0 0 0 0)!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, "#wrap{display:flex;position:relative;align-items:center;font-size:13px;width:100%}#input{box-sizing:border-box;display:inline-block;height:35px;padding:5px;line-height:1.5;color:var(--color-text);background-color:#fff;vertical-align:middle;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--border-radius-md);box-shadow:none;border:1px solid var(--color-text)}#input,:host{flex-grow:1}#input:focus{border:1px solid orange}#input.empty{border:1px solid var(--color-text)}#input.valid{border:1px solid var(--color-success)}#input.error{border:1px solid var(--color-error)}#icon-left,#icon-right{position:absolute;font-size:16px}#icon-left{left:10px}#icon-right{right:10px}#input.has-icon-left{padding-left:35px}#input.has-icon-right{padding-right:35px}.c-input-number{-moz-appearance:textfield}.c-input-number:not(.c-input-noval){text-align:right}@media (min-width:46.25em){#wrap{font-size:14px}}.c-reset-btn{position:absolute;right:1rem;width:2.4rem;height:2.4rem;border-radius:50%;padding:0;border:none;cursor:pointer;background-color:var(--color-background-light)}.c-reset-btn:focus,.c-reset-btn:hover{background-color:var(--color-background)}.c-input-error{color:var(--color-error);font-size:var(--text-font-size-sm)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,transparent,#444);z-index:150;opacity:0;cursor:pointer}.c-overlay.is-visible{display:block;animation-name:fadeIn;animation-duration:.35s;animation-timing-function:ease-in-out;opacity:1}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-notification{display:flex;justify-content:center;align-items:center;border-radius:var(--border-radius-circle);width:1.5rem;height:1.5rem;background-color:var(--color-primary);color:#fff;font-size:var(--text-font-size-xs)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-progress{display:flex;width:100%;background-color:var(--color-background);color:color(grey-50);color:#fff;text-align:center;font-weight:600}.c-progress,.c-progress__bar{height:20px;border-radius:5px}.c-progress__bar{display:inline-block;transition-property:width;transition-duration:.5s;transition-timing-function:ease-in-out}.c-progress__bar--primary{background-color:var(--color-primary)}.c-progress__bar--secondary{background-color:var(--color-secondary)}.c-progress--xs,.c-progress--xs .c-progress__bar{height:2px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ':host{--radio-button-height:30px;display:inline-block;position:relative;cursor:default;line-height:var(--radio-button-height);padding-left:var(--spacing-lg);box-sizing:border-box}:host(:focus){outline:0}:host:before{display:block;width:var(--radio-button-height);height:var(--radio-button-height);border:1px solid #e6e6e6;left:0;transform:translateY(-50%);border-radius:50%}:host:after,:host:before{content:"";position:absolute;top:50%;box-sizing:border-box;cursor:pointer}:host:after{left:6px;width:20px;height:20px;opacity:0;background-color:var(--color-text);transform:translateY(-50%) scale(0);border-radius:50%;transition:transform .125s ease-in-out,opacity .125s ease-in-out}:host([aria-checked=true]):after{opacity:1;transform:translateY(-50%) scale(1)}', ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:flex;flex-direction:column;align-items:flex-start}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:inline-block}.c-svg2{font-size:var(--size-svg2);width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}.c-svg2--sm{--size-svg2:1.4rem}.c-svg2--md{--size-svg2:1.8rem}.c-svg2--lg{--size-svg2:2.5rem}.c-svg2--xl{--size-svg2:5rem}.c-svg2--center{display:block;margin:0 auto}.c-svg2--circle{border:1px solid;border-color:inherit;border-radius:var(--border-radius-circle)}svg>*{fill:var(--color-fill-svg,none);stroke-width:var(--svg-stroke-width);stroke:var(--color-svg,currentColor);vector-effect:non-scaling-stroke}.filled,.svg-rectangle-hidden{stroke:none}.svg-rectangle-hidden{fill:none}.filled{fill:var(--color-svg,currentColor)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-tel{speak-as:digits}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, "h1,h2,h3,h4,h5,h6{font-weight:400}.c-text--background,.c-text--background-light{padding:5px 10px;border-radius:3px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-trigger-modal{border:none;margin:0;padding:0;background-color:initial;cursor:pointer}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-flex{display:flex;justify-content:center;margin-left:calc(var(--spacing-xs)*-1);margin-right:calc(var(--spacing-xs)*-1)}.c-flex--column{flex-direction:column}::slotted(*){flex-grow:1;flex-basis:0;margin:var(--spacing-xs)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{--grid-column-gap:var(--spacing-md)}.grid-masonry{display:flex;flex-flow:column}@media (min-width:740px){.grid-masonry{display:grid;grid-column-gap:var(--grid-column-gap,20px);grid-row-gap:2px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}}::slotted(.grid-item){display:block;width:100%}::slotted(.grid-item:not(:last-child)){padding-bottom:9px}@media (min-width:740px){::slotted(.grid-item){display:table}::slotted(.grid-item:not(:last-child)){padding-bottom:19px}}.flex-masonry{display:flex;flex-flow:column nowrap;width:60%;margin:0 auto}::slotted(.layout-item){width:100%;margin-bottom:20px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, "", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-accordion-item__button{display:flex;flex-flow:row nowrap;justify-content:space-between;width:100%;text-align:left;padding:var(--spacing-xs) 0;border:none;border-bottom:2px solid var(--color-secondary);background:transparent;cursor:pointer}.c-accordion-item__content{display:none;padding-top:var(--spacing-sm)}.c-accordion-item__content--visible{display:block}.c-accordion-item__icon{width:14px;height:14px;fill:currentColor;transform:rotate(-90deg);transition:transform .25s ease-in-out;margin-left:var(--spacing-xs);margin-bottom:-3px}.c-accordion-item__button--expanded .c-accordion-item__icon{transform:rotate(90deg)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-btn-group{display:flex;flex-flow:column nowrap;align-items:center;width:100%}@media (max-width:74rem){::slotted(bux2-btn){margin-bottom:var(--spacing-sm)}::slotted(bux2-btn:last-of-type){margin-bottom:0}}@media (min-width:74rem){.c-btn-group{flex-flow:row nowrap;justify-content:space-around}.c-btn-group--vertical{flex-flow:column nowrap}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, "@media (max-width:770px){.is-desktop:not(.is-mobile),.is-tablet:not(.is-mobile),:host(.is-desktop:not(.is-mobile)),:host(.is-tablet:not(.is-mobile)){display:none!important}}@media (min-width:771px) and (max-width:1089px){.is-desktop:not(.is-tablet),.is-mobile:not(.is-tablet),:host(.is-desktop:not(.is-tablet)),:host(.is-mobile:not(.is-tablet)){display:none!important}}@media (min-width:1090px){.is-mobile:not(.is-desktop),.is-tablet:not(.is-desktop),:host(.is-mobile:not(.is-desktop)),:host(.is-tablet:not(.is-desktop)){display:none!important}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-card{position:relative;display:flex;flex-flow:column nowrap;justify-content:space-between;background-color:#fff;border-radius:var(--border-radius-md);border:1px solid #dedede;overflow:hidden}.c-card:focus-within{border:3px solid #868686}@media (min-width:740px){.c-card{box-shadow:0 0 5px 0 #999;border:none}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-card-header{display:flex;justify-content:center;align-items:center;flex-flow:column wrap;padding:var(--spacing-sm);position:relative;border-top-left-radius:var(--border-radius-sm);border-top-right-radius:var(--border-radius-sm);overflow:hidden}@media (min-width:49rem){.c-card-header{padding:var(--spacing-sm)}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-card-body{position:relative;font-size:var(--text-font-size-md,16px);padding:var(--spacing-sm)}@media (min-width:49rem){.c-card-body{padding:var(--spacing-sm) var(--spacing-lg)}}@media (max-width:49rem){::slotted(bux2-message-info){max-width:85%;margin:0 auto}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-card-footer{position:relative;padding:var(--spacing-sm);border-bottom-right-radius:var(--border-radius-md);border-bottom-left-radius:var(--border-radius-md)}@media (min-width:49rem){.c-card-footer{padding:var(--spacing-sm) var(--spacing-md)}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-card-tile{position:relative;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;padding:var(--spacing-xs);border-radius:var(--border-radius-sm)}::slotted(bux2-notification){position:relative;top:-55px;right:-25px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-border-top{border-top:1px solid var(--color-border)}.c-border-right{border-right:1px solid var(--color-border)}.c-border-bottom{border-bottom:1px solid var(--color-border)}.c-border-left{border-left:1px solid var(--color-border)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-card-bar{display:flex;flex-flow:row nowrap;justify-content:space-around}.c-card-bar--center{justify-content:center}.c-card-bar--border-top{padding-top:var(--spacing-sm)}::slotted(bux2-card-tile){flex:1 1 0}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-card-scroller{display:flex;justify-content:center}.c-card-scroller__wrapper{display:flex;flex-flow:row nowrap;margin:0 auto;overflow-x:auto;padding:var(--spacing-xs) var(--spacing-xs) var(--spacing-md) var(--spacing-xs);touch-action:pan-x}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-datatable{width:100%}.c-datatable__caption{border:0!important;clip:rect(0 0 0 0)!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.c-datatable__row{display:flex;flex-flow:row nowrap;justify-content:space-around}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-datatable-head{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;margin-bottom:var(--spacing-sm);padding-bottom:var(--spacing-xs);border-bottom:1px solid #dedede}::slotted(bux2-amount),::slotted(bux2-text),::slotted(div){flex:1 1 0}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-datatable-row{display:flex;flex-flow:row nowrap;justify-content:space-around;align-items:center;margin-bottom:var(--spacing-sm);padding-bottom:var(--spacing-xs);border-bottom:1px solid #dedede}::slotted(bux2-amount),::slotted(bux2-text),::slotted(div){flex:1 1 0}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-datalisting{width:100%}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-data-listing-head{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;margin-bottom:var(--spacing-sm);background-color:var(--color-background-light)}::slotted(bux2-text:first-child){padding:2px 5px 2px 10px}::slotted(bux2-text:first-child),::slotted(bux2-text:nth-child(2)){flex:0 0 8rem;min-width:9.5rem;border-right:1px solid var(--color-border)}::slotted(bux2-text:nth-child(2)){padding:2px 5px;display:none}::slotted(bux2-text:nth-child(3)){flex:1 0 0;padding:2px 5px}::slotted(bux2-text:nth-child(4)){flex:0 0 10rem;min-width:10.5rem;padding:0 10px 0 5px}@media screen and (min-width:600px){::slotted(bux2-text:nth-child(2)){display:initial}}@media screen and (min-width:784px){::slotted(bux2-text:first-child),::slotted(bux2-text:nth-child(2)){min-width:10.5rem}::slotted(bux2-text:nth-child(4)){min-width:11.5rem}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-data-listing-row{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;margin-bottom:var(--spacing-xs);padding-bottom:var(--spacing-xs);border-bottom:1px solid #dedede}::slotted(bux2-amount),::slotted(bux2-text),::slotted(div){line-height:1.1}::slotted(bux2-text:first-child){flex:0 0 8rem;min-width:9.5rem;padding:.2rem .5rem .2rem 1rem}::slotted(bux2-text:nth-child(2)){flex:0 0 8rem;min-width:9.5rem;padding:.2rem .5rem;display:none}::slotted(bux2-text:nth-child(3)){flex:1 0 0;padding:.2rem .5rem}::slotted(bux2-amount:nth-child(4)){flex:0 0 10rem;min-width:10.5rem;padding:0 1rem 0 .5rem}@media screen and (min-width:600px){::slotted(bux2-text:nth-child(2)){display:initial}}@media screen and (min-width:784px){::slotted(bux2-text:first-child),::slotted(bux2-text:nth-child(2)){min-width:10.5rem}::slotted(bux2-amount:nth-child(4)){min-width:11.5rem}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-heading{margin:0;padding:0;font-size:var(--font-size-md);font-weight:700;display:flex;align-items:center}.c-heading:focus{outline:none}.c-heading-0{margin-bottom:20px;margin-top:20px}.c-heading-0,.c-heading-1{color:#616161;font-size:2.8rem;line-height:1;text-transform:uppercase}.c-heading-1,.c-heading-2{border-bottom:2px solid}.c-heading-2{font-size:1.4rem;line-height:2.5rem}.c-heading-s1{flex-grow:1}.c-heading--border-colored{border-bottom:2px solid #a8d81f}@media (min-width:49rem){.c-heading--border-colored{border-bottom:2px solid}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, "#wrap-input{display:flex;align-items:center}#label-left-wrap ::slotted([slot=label-left]){margin-right:10px}#label-right-wrap ::slotted([slot=label-right]){margin-left:10px}@media (min-width:740px){#wrap-input{font-size:14px}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-key-value-item{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:flex-end;padding:var(--spacing-xs) 0;border-bottom:1px solid var(--color-border);width:95%}.c-key-value-item__wrapper{position:relative}.c-key-value-item__slot{padding-right:.5rem}.c-key-value-item__slot+.c-key-value-item__slot{padding-right:0;padding-left:.5rem}.c-level--2{margin-left:var(--spacing-sm)}.c-key-value-item--background{border-radius:var(--border-radius-sm);overflow:hidden}.c-key-value-item--background .c-key-value-item{padding:var(--spacing-xs) var(--spacing-sm);border-bottom:none}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-key-value-edit-item{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:var(--spacing-sm) var(--spacing-md) var(--spacing-sm) var(--spacing-sm);border:1px solid var(--color-text);border-radius:var(--border-radius-sm);margin:0 var(--spacing-sm) 0 0}.c-key-value-edit-item__multiple{flex-flow:column nowrap;justify-content:flex-start}@media (min-width:740px){.c-key-value-edit-item{margin:0}}.c-key-value-item__wrapper{position:relative}.c-key-value-item__value-slot{margin-top:.5rem}.c-key-value-edit-item__edit-slot{position:absolute;right:.4rem;top:50%;height:2.4rem;transform:translate(1rem,-50%);background-color:#fff}@media (min-width:740px){.c-key-value-edit-item__edit-slot{right:-.1rem}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-list{margin-top:0;margin-bottom:0;padding:0}.c-list--bullet{padding-left:20px;list-style:disc}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-message{display:flex;position:relative;align-items:center}.c-message-content{display:block;position:relative;width:100%;margin-left:13px;border-radius:3px;padding:10px 5px 10px 20px}.c-message-icon{position:absolute;display:flex;z-index:2;align-items:center;justify-content:center}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-message-content{background-color:var(--color-background-light)}.c-message-icon{--color-svg:#fff;background-color:#606060;border-radius:var(--border-radius-circle);width:25px;height:25px}.c-message-icon--oval{height:21px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-message-content{background-color:var(--color-background-light);border:1px solid var(--color-error)}.c-message-icon{--color-svg:#fff;background-color:var(--color-error);border-radius:var(--border-radius-circle);width:25px;height:25px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-message-content{background-color:none;border:2px solid var(--color-error)}.c-message-icon{--color-svg:#fff;background-color:var(--color-error);border-radius:var(--border-radius-circle);width:25px;height:25px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:block}.c-steps{position:relative;margin-bottom:var(--spacing-md);padding:var(--spacing-sm) 0;background-color:#fff;box-shadow:0 0 5px 0 #999}.c-steps__wrapper{display:flex;flex-flow:row nowrap;justify-content:space-around;z-index:2}::slotted(bux2-step-item){flex:1 0 0}.c-steps__progress{position:absolute;max-width:100%;top:27px;left:50%;transform:translateX(-50%);z-index:1}@media (max-width:1090px){.c-steps{width:100vw;margin-left:-10px;margin-top:-10px;box-shadow:0 0 5px 0 #999,inset 0 5px 5px -5px #999}}@media (min-width:1090px){.c-steps{padding-top:var(--spacing-md);border-radius:var(--border-radius-md)}.c-steps__progress{top:37px}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-row-icon{display:flex;justify-content:flex-start;align-items:center;width:100%}.c-row-icon__circle{border-radius:50%;min-height:50px;min-width:50px;border:3px solid var(--color-success);display:flex;justify-content:center;align-items:center;background:#fff;z-index:1}.c-row-icon__content{height:45px;width:100%;border-radius:var(--border-radius-md);margin-left:-15px;padding-left:25px;background:var(--color-background-light);display:flex;flex-flow:column nowrap;justify-content:center}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-step-item{flex-flow:column nowrap}.c-step-item,.c-step-item__number{display:flex;justify-content:center;align-items:center}.c-step-item__number{height:30px;width:30px;font-weight:700;font-size:1.6rem;color:#fff;background-color:#bdbdbd;border:3px solid #fff;border-radius:var(--border-radius-circle);z-index:2}.c-step-item__number.is-active{background-color:var(--color-primary);border:3px solid var(--color-primary-lighter)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:none;position:fixed;z-index:200}.c-modal{position:fixed;width:100%;max-width:300px;top:50%;left:50%;background-color:#fff;box-shadow:0 0 5px 0 #999;border-radius:var(--border-radius-md);opacity:0;visibility:hidden;transform:scale(1.1) translate(-50%,-50%);transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;will-change:transform}@media (min-width:740px){.c-modal{max-width:520px}}.c-modal__close-btn{position:absolute;right:-.8rem;top:-1.2rem;width:2.5rem;height:2.5rem;margin:0;padding:0;background:#fff;border-radius:var(--border-radius-circle);border:none;box-shadow:0 0 5px 0 #999;cursor:pointer;z-index:1}.c-modal.is-open{opacity:1;visibility:visible;transform:scale(1) translate(-50%,-50%);transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s}.c-popin{text-align:center}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-modal-body{font-size:var(--text-font-size-md,16px);padding:0 var(--spacing-sm)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-disclosure__button{position:relative;padding:0;border:none;background:transparent;color:var(--color-text);cursor:pointer}.c-disclosure__button--center{display:block;margin:0 auto}.c-disclosure__content{display:none;padding-top:var(--spacing-sm)}.c-disclosure__content--visible{display:block}.c-disclosure__icon{position:absolute;right:-20px;top:1px;width:14px;height:14px;fill:currentColor;transform:rotate(90deg);transition:transform .25s ease-in-out;margin-left:var(--spacing-xs)}.c-disclosure__button--expanded .c-disclosure__icon{transform:rotate(-90deg)}.c-disclosure__svg{transform:rotate(90deg);margin-left:var(--spacing-xs)}.c-disclosure__icon-right{position:absolute;right:var(--spacing-sm);top:var(--spacing-xs)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, '.c-appfooter{margin-top:60px}@media (max-width:49rem){.c-appfooter{box-sizing:border-box;background-color:var(--color-background);position:relative;display:block;padding:0 var(--spacing-md) var(--spacing-xl) var(--spacing-md);border-bottom-left-radius:var(--border-radius-md);border-bottom-right-radius:var(--border-radius-md);margin-left:-10px;margin-right:-10px;max-width:100vw}.c-appfooter:before{content:"";width:100%;height:10rem;background:var(--color-background);position:absolute;left:0;top:-3rem;transform:skew(0,-3deg);z-index:-1}}', ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-bulle-item{--color-svg:var(--color-primary);display:flex;align-items:center;flex-flow:row;width:157px;min-height:42px;border-radius:20px 20px 0 20px;border:1px solid var(--color-primary);background:var(--white);font-size:12px;box-shadow:0 12px 16px 0 rgba(0,0,0,.1);cursor:pointer}.c-bulle-item,.c-bulle-item *{box-sizing:border-box}.bulle-item-svg{display:block;width:61px;padding-left:15px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:block;position:fixed;right:20px;bottom:60px;z-index:1}.c-bulle-btn{width:64px;height:64px;background-color:#333;box-shadow:0 12px 16px 0 rgba(0,0,0,.1);border-radius:50%;margin-top:10px;align-self:flex-end}.c-svg2--perso{--size-svg2:3rem}@media (min-width:46.25em){:host{right:20px;bottom:60px}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-frame{background-color:#fff}@media (min-width:740px){.c-frame{padding:var(--spacing-md)}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, "@media (min-width:49rem){.c-section--background{background-color:#fff;padding:var(--spacing-md)}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:block;width:100%}:host(.c-slider-item__unactive){display:none}:host(.c-slider-item__active){display:block}::slotted(*){pointer-events:none}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-slider-pagination__ul{display:flex;justify-content:center;list-style:none;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:0;padding-inline-start:0}.c-slider-pagination__li{position:relative;flex:0 1 auto;width:10px;max-width:10px;height:10px;max-height:10px;margin-right:3px;margin-left:3px;background-color:rgba(0,0,0,.5);border:2px solid #fff;border-radius:50%;opacity:.5;transition:all .3s}.c-slider-pagination__li.active{opacity:.9}.c-slider-pagination__btn{display:block;position:relative;height:100%;width:100%}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:block;position:relative}.c-slider__wrap{display:flex;position:relative;justify-content:center;align-items:center;min-height:30px;overflow:hidden;width:100%}.c-slider__content{display:block;position:relative;flex-grow:1;min-height:20px;margin:0 30px}.c-slider__left,.c-slider__right{position:absolute;opacity:0;transition:all 1s;height:100%;z-index:2}.c-slider__left{left:-30px}.c-slider__right{right:-30px}.c-slider__left:focus,.c-slider__wrap:hover .c-slider__left{opacity:1;left:0}.c-slider__right:focus,.c-slider__wrap:hover .c-slider__right{opacity:1;right:0}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-shortcut-wrap{position:fixed;display:block;width:100%;height:60px;bottom:-60px;left:0;right:auto;box-shadow:0 -2px 6px -2px rgba(0,0,0,.5);z-index:20}@media (max-width:68.125em){.c-shortcut-wrap.is-open-mobile{transition:bottom .4s;bottom:0}}.c-shortcut-nav,.c-shortcut-ul{position:relative;height:100%}.c-shortcut-ul{flex-direction:row;list-style:none;margin:0;padding:0;justify-content:space-around;background-color:#fff;border-top-left-radius:3px;border-bottom-left-radius:3px;z-index:5}.c-shortcut-a,.c-shortcut-ul{display:flex;align-items:center}.c-shortcut-a{flex-direction:column;text-decoration:none}.c-shortcut-label{font-size:12px;font-family:Maven Pro,sans-serif;color:#424242}.c-shortcut-icon{font-size:25px;margin-right:0;color:#424242}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-wmax-center{display:block;position:relative;max-width:auto;margin-left:auto;margin-right:auto}@media (min-width:46.25em){.c-wmax-center{max-width:480px}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-endprocess{padding:var(--spacing-lg) var(--spacing-md);background-color:#fff;border-radius:var(--border-radius-sm)}@media (min-width:74rem){.c-endprocess{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-widget-account{display:flex;flex-flow:column nowrap;align-items:center}.c-widget-account__top{box-sizing:border-box;width:100%}.c-widget-account__amount{position:relative;display:flex;justify-content:center;align-items:center;height:50px;width:100%;margin-bottom:10px;border-radius:var(--border-radius-sm);transition:all .3s ease-in}.c-widget-account__arrow{display:none;position:absolute;right:20px;top:50%;transform:translateY(-50%);width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;transition:all .3s ease-in;cursor:pointer}.c-widget-account--link .c-widget-account__arrow{display:block;opacity:0}.c-widget-account__amount:hover{background-color:#efefef}.c-widget-account--link .c-widget-account__amount:hover .c-widget-account__arrow{opacity:1}.c-widget-account__delayed-op{width:100%;margin-bottom:10px}.c-widget-account__nav{padding-top:5px;border-top:1px solid #dedede;width:100%}.placeholder{margin:0 auto;width:100%;height:100%;background-color:#eee;border-radius:var(--border-radius-sm)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-widget-card{flex-flow:column nowrap;box-shadow:inset 0 6px 9px -7px #999;background-color:#efefef;border-bottom-right-radius:var(--border-radius-sm);border-bottom-left-radius:var(--border-radius-sm)}.c-widget-card,.c-widget-card__content{display:flex;align-items:center;padding:0 10px}.c-widget-card__content{box-sizing:border-box;position:relative;justify-content:flex-start;min-height:50px;width:100%;border-radius:var(--border-radius-sm);transition:all .3s ease-in}.c-widget-card__nav{padding-top:5px;padding-bottom:10px;border-top:1px solid #dedede;width:100%}.c-widget-card__ops{width:100%;padding:0 10px;box-sizing:border-box}@media (min-width:740px){.c-widget-card__content,.c-widget-card__ops{padding:0 30px}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-widget-conseiller{display:flex;flex-flow:column nowrap;align-items:center}.c-widget-conseiller__content{box-sizing:border-box;position:relative;display:flex;align-items:center;justify-content:center;width:100%;padding:10px 20px}.c-widget-conseiller__phone{margin:0 auto 20px}.c-widget-conseiller__nav{padding-top:5px;border-top:1px solid #dedede;width:100%}::slotted(span){font-weight:700}", ""]), t.exports = e }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { (e = i(0)(!1)).push([t.i, '.u-hidden-visually{border:0!important;clip:rect(0 0 0 0)!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.c-amount{display:inline-flex;align-items:baseline;font-size:var(--text-font-size-md);line-height:inherit;color:var(--color-text);white-space:nowrap}.c-amount__period:before{content:"/";padding-left:.5rem;padding-right:.5rem}.c-amount--negative{color:var(--color-error)}.c-amount--sm,.c-currency--sm,.c-period--sm{font-size:13px}.c-amount--md,.c-currency--md,.c-period--md{font-size:16px}.c-amount--xl,.c-currency--xl,.c-period--xl{font-size:26px}.c-amount--xxl,.c-currency--xxl,.c-period--xxl{font-size:36px}.c-amount--align-top{align-items:flex-start}.c-amount--align-right{display:flex;justify-content:flex-end}.c-amount--bold{font-weight:700}.c-amount--inherit,.c-currency--inherit,.c-period--inherit{font-size:inherit}.c-amount--fade-in{animation-name:fadeIn;animation-duration:1s;animation-timing-function:ease-in-out}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}', ""]), t.exports = e }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-chat{font-family:Maven pro,sans-serif}.c-chat__date{text-align:center;display:block;margin-bottom:10px}.c-chat__list{list-style:none;padding-left:0;padding-bottom:10px;display:flex;flex-flow:column nowrap}@media (min-width:380px){.c-chat__list{padding-left:60px}}::slotted(.grid-item){display:table}", ""]), t.exports = e }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e) { var i; i = function () { return this }(); try { i = i || new Function("return this")() } catch (t) { "object" == typeof window && (i = window) } t.exports = i }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-datatable{width:100%;margin-bottom:20px;background-color:#fff;border-radius:5px;box-shadow:0 0 5px 1px #999}.c-datatable__caption{border:0!important;clip:rect(0 0 0 0)!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.c-datatable__thead{padding:10px;border-top-right-radius:5px;border-top-left-radius:5px;background-color:#efefef}.c-datatable__tbody{padding:5px 10px}.c-datatable__row{display:flex;flex-flow:row nowrap;justify-content:space-around}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}::slotted(div){flex:1 1 0;text-transform:uppercase;font-size:13px}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ":host{display:flex;flex-flow:row nowrap;justify-content:space-around;align-items:center;margin-bottom:5px;border-bottom:1px solid #dedede}::slotted(div){flex:1 1 0;text-transform:uppercase;font-size:13px}::slotted(bux-amount){flex:1 1 0}", ""]), t.exports = e }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-bux-sadsmiley-error{display:flex;flex-direction:column;align-items:stretch;position:relative;background-color:#fff;border-radius:3px;padding:1rem}.c-bux-sadsmiley-error svg{width:6rem;height:auto;margin:0 auto .5rem;fill:#616161}", ""]), t.exports = e }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e, i) { }, function (t, e) { const i = document.createElement("template"); i.innerHTML = '\n<style>\n  .c-link__arrow {\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .c-link--block {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  .c-link:focus {\n    outline-offset: -1px;\n  }\n</style>\n<a class="js-container c-link" href="">\n  <slot></slot>\n</a>\n'; class s extends HTMLElement { static get observedAttributes() { return ["data-link", "data-label", "a11y-label", "block", "block-arrow"] } connectedCallback() { this.appendChild(i.content.cloneNode(!0)), this.container = this.querySelector(".js-container"), this._setLinkPath(), this._setAriaLabel(), this._setTitle(), this._setBlock(), this._setArrowTpl() } attributeChangedCallback(t) { switch (t) { case "data-link": this.container && this._setLinkPath(); break; case "data-label": this.container && this._setTitle(); break; case "a11y-label": this.container && this._setAriaLabel(); break; case "block": this.container && this._setBlock(); break; case "block-arrow": this.container && (this._setBlock(), this._setArrowTpl()) } } get link() { return this.getAttribute("data-link") } set link(t) { this.setAttribute("data-link", t) } _setLinkPath() { this.container.setAttribute("href", this.link) } get ariaLabel() { return this.getAttribute("a11y-label") } set ariaLabel(t) { this.setAttribute("a11y-label", t) } _setAriaLabel() { this.hasAttribute("a11y-label") && this.container.setAttribute("aria-label", this.ariaLabel) } get dataLabel() { return this.getAttribute("data-label") } set dataLabel(t) { this.setAttribute("data-label", t) } _setTitle() { this.hasAttribute("data-label") && this.container.setAttribute("title", this.dataLabel) } set block(t) { Boolean(t) ? this.setAttribute("block", "") : this.removeAttribute("block") } get block() { return this.hasAttribute("block") } _setBlock() { this.hasAttribute("block") || this.hasAttribute("block-arrow") ? this.container.classList.add("c-link--block") : this.container.classList.remove("c-link--block") } set blockArrow(t) { Boolean(t) ? this.setAttribute("block-arrow", "") : this.removeAttribute("block-arrow") } get blockArrow() { return this.hasAttribute("block-arrow") } _setArrowTpl() { if (this.hasAttribute("block-arrow")) { const t = document.createElement("template"); t.innerHTML = '\n        <bux-svg data-icon="chevron" class="c-link__arrow"></bux-svg>\n      ', this.container.appendChild(t.content.cloneNode(!0)) } } } window.customElements.define("bux2-link", s) }, function (t, e, i) { const s = i(142), a = document.createElement("template"); a.innerHTML = `\n<style>\n${String(s)}\n</style>\n<div class="c-shortlink js-container">\n  <div class="c-shortlink__icon">\n    <slot name="icon"></slot>\n  </div>\n  <div class="c-shortlink__label">\n    <slot name="label"></slot>\n  </div>\n  <slot name="link"></slot>\n</div>\n`, window.ShadyCSS && ShadyCSS.prepareTemplate(a, "bux2-shortlink"); class n extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(a.content.cloneNode(!0)) } connectedCallback() { window.ShadyCSS && ShadyCSS.styleElement(this) } } window.customElements.define("bux2-shortlink", n) }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-shortlink{position:relative;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;width:70px;height:50px;border-radius:3px;color:var(--color-text);text-decoration:none;transition:all .25s ease-in-out}.c-shortlink:hover{background-color:#dedede}::slotted(bux-svg){font-size:24px}::slotted(div){font-size:12px;line-height:1;text-align:center}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-modal-header{display:flex;justify-content:flex-start;align-items:center;flex-flow:row wrap;padding:var(--spacing-sm);position:relative}.c-popin-header{justify-content:center}@media (min-width:49rem){.c-modal-header{padding:var(--spacing-sm)}}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, ".c-modal-footer{padding-bottom:var(--spacing-sm)}", ""]), t.exports = e }, function (t, e, i) { (e = i(0)(!1)).push([t.i, '.c-dualpanel{display:flex;flex-direction:column;align-items:stretch;position:relative;scroll-behavior:smooth}@media (prefers-reduced-motion:reduce){.c-dualpanel{scroll-behavior:auto}}.c-dualpanel__item{padding:2rem 2rem 1rem;position:relative;border:1px solid #efefef}.c-dualpanel__item:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.c-dualpanel__item:nth-child(2){background:#efefef;border-bottom-left-radius:3px;border-bottom-right-radius:3px}.c-dualpanel__item:nth-child(2):before{content:"";display:block;width:0;height:0;border-color:transparent transparent #efefef;border-style:solid;border-width:0 1.5rem 1.5rem;position:absolute;margin-top:-3.75rem;left:50%;transform:translateX(-50%)}@media (min-width:740px){.c-dualpanel{flex-direction:row}.c-dualpanel__item{width:50%;box-sizing:border-box}.c-dualpanel__item:first-child{border-top-right-radius:0;border-top-left-radius:3px;border-bottom-left-radius:3px;padding-right:40px}.c-dualpanel__item:nth-child(2){border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:3px;border-bottom-right-radius:3px}.c-dualpanel__item:nth-child(2):before{margin-left:-1.5rem;margin-top:0;top:50%;left:0;transform:translateX(0);transform:translateY(-50%);border-width:1.5rem 1.5rem 1.5rem 0;border-color:transparent #efefef transparent transparent}}', ""]), t.exports = e }, function (t, e, i) { "use strict"; i.r(e), i(75); const s = ["bold", "noborder", "nopadding", "nomarginbottom", "margintopmedium", "marginrightmedium", "marginbottommedium"]; let a = ""; document.currentScript && document.currentScript.src && (a = document.currentScript.src.replace("/bundle.js", "")); class n extends HTMLElement { static get observedAttributes() { return s } getObserved() { return s } get uxLibUrl() { return a } set bold(t) { Boolean(t) ? this.setAttribute("bold", "") : this.removeAttribute("bold") } get bold() { return this.hasAttribute("bold") } set noborder(t) { Boolean(t) ? this.setAttribute("noborder", "") : this.removeAttribute("noborder") } get noborder() { return this.hasAttribute("noborder") } set nopadding(t) { Boolean(t) ? this.setAttribute("nopadding", "") : this.removeAttribute("nopadding") } get nopadding() { return this.hasAttribute("nopadding") } toCamelCase(t) { const e = t.split("-"); return "data" === e[0] && e.shift(), e.reduce(((t, e, i) => t + (i > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)), "") } getBooleanAttribute(t) { return this.hasAttribute(t) && "false" !== this.getAttribute(t) } isTrue(t) { return "1" === t || 1 === t || !0 === t || "true" === t } toSnakeCase(t) { let e = t.replace(/([A-Z])/g, (t => " " + t)).replace(/^./, (t => t.toUpperCase())); return e = e.charAt(0).toLowerCase() + e.slice(1), e = e.split("-"), "data" === e[0] && e.shift(), e.join("-") } buxAttributeChangedCallback(t) { const e = this.childNodes && this.childNodes[0] && this.childNodes[0].classList; switch (t) { case "bold": e ? this.childNodes[0].classList.add("u-text-bold") : this.classList.add("u-text-bold"); break; case "noborder": e ? this.childNodes[0].classList.add("u-text-bold") : this.classList.add("u-noborder"); break; case "nopadding": e ? this.childNodes[0].classList.add("u-nopadding") : this.classList.add("u-nopadding"); break; case "margintopmedium": e ? this.childNodes[0].classList.add("u-margintopmedium") : this.classList.add("u-margintopmedium"); break; case "marginrightmedium": e ? this.childNodes[0].classList.add("u-marginrightmedium") : this.classList.add("u-marginrightmedium"); break; case "marginbottommedium": e ? this.childNodes[0].classList.add("u-marginbottommedium") : this.classList.add("u-marginbottommedium"); break; case "nomarginbottom": e ? this.childNodes[0].classList.add("u-nomarginbottom") : this.classList.add("u-nomarginbottom") } } attributeChangedCallback(t) { this.buxAttributeChangedCallback(t) } } i(76), customElements.define("bux-accordeon-item", class extends n { constructor() { super(), this.isInit = !1, this.isEventRemove = !1, this.idPrefixe = "bux-accordeon-item-" + (Math.floor(1e4 * Math.random()) + 2), this.clickEventHandler = this.clickEvent.bind(this), this.tabKeyDownEventHandler = this.tabKeyDownEvent.bind(this), this.transitionendEventHandler = this.transitionendEvent.bind(this) } static get observedAttributes() { return ["expanded", "data-label"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (s) { case "expanded": this.expanded ? this.expandSection() : this.collapseSection(); break; case "label": this.reRenderHeading() } } connectedCallback() { if (this.isInit && this.isEventRemove && this.addEvents(), this.isInit) return; this.isInit = !0, this.label = this.getAttribute("data-label") || "", this.icon = this.getAttribute("data-icon") || "", this.expanded = this.hasAttribute("expanded") && "false" !== this.getAttribute("expanded"), this.level = this.getAttribute("data-level") || "2"; const t = document.createElement("template"); for (t.innerHTML = this.template(), this.btn = t.content.querySelector("bux-heading"), this.cont = t.content.querySelector(".bux-accordeon-cont"); this.childNodes.length > 0;)this.cont.appendChild(this.childNodes[0]); this.addEvents(), this.appendChild(t.content), this.expanded || this.collapseSectionWithoutTransition() } reRenderHeading() { this.removeEvents(), this.btn.remove(); const t = document.createElement("template"); t.innerHTML = this.setHeadingHTML(), this.btn = t.content.querySelector("bux-heading"), this.insertBefore(t.content, this.cont), this.addEvents() } addEvents() { this.btn.addEventListener("click", this.clickEventHandler), this.btn.addEventListener("keydown", this.tabKeyDownEventHandler), this.isEventRemove = !1 } removeEvents() { this.btn.removeEventListener("click", this.clickEventHandler), this.btn.removeEventListener("keydown", this.tabKeyDownEventHandler), this.isEventRemove = !0 } disconnectedCallback() { this.removeEvents() } clickEvent() { "true" === this.btn.getAttribute("a11y-expanded") ? this.collapseSection() : this.expandSection() } tabKeyDownEvent(t) { switch (t.which) { case 13: case 32: case 37: case 109: case 54: case 39: case 187: case 107: t.preventDefault(), this.clickEventHandler() } } collapseSection() { this.btn.setAttribute("a11y-expanded", "false"); const t = this.cont.scrollHeight, e = this.cont.style.transition; this.cont.style.transition = "", requestAnimationFrame((() => { this.cont.style.height = t + "px", this.cont.style.transition = e, requestAnimationFrame((() => { this.cont.style.height = "0px", this.cont.setAttribute("aria-hidden", "true") })) })) } collapseSectionWithoutTransition() { this.btn.setAttribute("a11y-expanded", "false"), this.cont.style.transition = "", this.cont.style.height = "0px", this.cont.setAttribute("aria-hidden", "true") } expandSection() { this.btn.setAttribute("a11y-expanded", "true"); const t = this.cont.scrollHeight; this.cont.style.height = t + "px", this.cont.addEventListener("transitionend", this.transitionendEventHandler) } transitionendEvent() { this.cont.removeEventListener("transitionend", this.transitionendEventHandler), this.cont.style.height = null, this.cont.setAttribute("aria-hidden", "false") } setHeadingHTML() { return `<bux-heading\n          data-level="${this.level}" \n          type="dropdown" \n          a11y-expanded="true" \n          a11y-controls="${this.idPrefixe}"\n           ${"" === this.icon ? "" : `data-icon="${this.icon}"`}\n         >${this.label}</bux-heading>` } template() { return this.setHeadingHTML() + `<div class="bux-accordeon-cont" id="${this.idPrefixe}"></div>` } }); const r = i(77), o = document.createElement("template"); o.innerHTML = `\n<style>\n${String(r)}\n</style>\n<span class="js-container c-amount">\n  <span class="c-amount__value">\n  </span>\n</span>\n`, window.ShadyCSS && ShadyCSS.prepareTemplate(o, "bux-amount"), window.customElements.define("bux-amount", class extends n { static get observedAttributes() { return ["data-value", "data-currency", "size", "bold", "data-period", "period-size", "align-top", "fadein", "align-right"] } constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(o.content.cloneNode(!0)), this.container = this.shadowRoot.querySelector(".js-container"), this._slot = this.shadowRoot.querySelector("slot") } _upgradeProperty(t) { if (this.hasOwnProperty(t)) { const e = this[t]; delete this[t], this[t] = e } } attributeChangedCallback(t, e) { switch (t) { case "data-value": case "data-currency": this.container && this._updateValue(); break; case "data-period": this.container && this._updatePeriod(); break; case "size": this.container && this._setSize(e); break; case "period-size": this.container && this._setPeriodSize(e); break; case "bold": this.container && this._setBold(); break; case "align-top": this.container && this._setAlignTop(); break; case "align-right": this.container && this._setAlignRight(); break; case "fadein": this.container && this._setFadeIn() } } connectedCallback() { window.ShadyCSS && ShadyCSS.styleElement(this), this._upgradeProperty("data-value"), this._upgradeProperty("currency"), this._upgradeProperty("size"), this._upgradeProperty("bold"), this._upgradeProperty("period"), this._upgradeProperty("period-size"), this._upgradeProperty("align-top"), this._upgradeProperty("fade-in") } get value() { return this.getAttribute("data-value") } set value(t) { this.setAttribute("data-value", t) } _setValue() { this.container.setAttribute("data-value", this.value) } get currency() { return this.getAttribute("data-currency") || "EUR" } set currency(t) { this.setAttribute("data-currency", t) } get period() { return this.getAttribute("data-period") || "" } set period(t) { this.setAttribute("data-period", t) } get size() { return this.getAttribute("size") } set size(t) { this.setAttribute("size", t) } get periodSize() { return this.getAttribute("period-size") } set periodSize(t) { this.setAttribute("period-size", t) } get alignTop() { return this.hasAttribute("align-top") && "false" !== this.getAttribute("align-top") } set alignTop(t) { Boolean(t) ? this.setAttribute("align-top", "") : this.removeAttribute("align-top") } get bold() { return this.hasAttribute("bold") && "false" !== this.getAttribute("bold") } set bold(t) { Boolean(t) ? this.setAttribute("bold", "") : this.removeAttribute("bold") } get fadeIn() { return this.hasAttribute("fadein") && "false" !== this.getAttribute("fadein") } set fadeIn(t) { Boolean(t) ? this.setAttribute("fadein", "") : this.removeAttribute("fadein") } _updateValue() { const t = Number(this.value); let e = this.value; isNaN(t) || (e = "" + t.toLocaleString("fr", { minimumFractionDigits: 2, maximumFractionDigits: 2, style: "currency", currency: this.currency }), this.shadowRoot.querySelector(".c-amount__value").innerHTML = e, t < 0 ? this.container.classList.add("c-amount--negative") : this.container.classList.remove("c-amount--negative")) } _updatePeriod() { if (this.period) { const t = this.container.querySelector(".c-amount__period"); if (null === t) { const t = this.shadowRoot.querySelector(".c-amount"), e = document.createElement("span"); e.setAttribute("class", "u-hidden-visually"), e.textContent = " par " + this.period; const i = document.createElement("span"); i.setAttribute("aria-hidden", "true"), i.setAttribute("class", "c-amount__period"), i.textContent = this.period, t.appendChild(e), t.appendChild(i) } else t.textContent = this.period } } _setSize(t) { switch (t && this.container.classList.remove("c-amount--" + t), this.size) { case "sm": case "md": case "xl": case "xxl": case "inherit": this.container.classList.add("c-amount--" + this.size) } } _setCurrencySize(t) { switch (t && this.container.classList.remove("c-currency--" + t), this.currencySize) { case "sm": case "md": case "xl": case "xxl": this.container.classList.add("c-currency--sm" + this.currencySize) } } _setPeriodSize(t) { const e = this.container.querySelector(".c-amount__period"); switch (t && e.classList.remove("c-period--" + t), this.periodSize) { case "sm": case "md": case "xl": case "xxl": e.classList.add("c-period--" + this.periodSize) } } _setBold() { this.hasAttribute("bold") ? this.container.classList.add("c-amount--bold") : this.container.classList.remove("c-amount--bold") } _setAlignTop() { this.hasAttribute("align-top") ? this.container.classList.add("c-amount--align-top") : this.container.classList.remove("c-amount--align-top") } _setAlignRight() { this.hasAttribute("align-right") ? this.container.classList.add("c-amount--align-right") : this.container.classList.remove("c-amount--align-right") } _setFadeIn() { this.hasAttribute("fadein") ? this.container.classList.add("c-amount--fade-in") : this.container.classList.remove("c-amount-fade-in") } }), i(78), customElements.define("bux-back-link", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["data-label", "data-link"] } attributeChangedCallback(t, e, i) { if (this[this.toCamelCase(t)] = i, this.isInit) switch (t) { case "data-label": this.setLabel(); break; case "data-link": this.setLink() } } connectedCallback() { this.isInit || (this.innerHTML = '\n        <a class="c-back-link-a">\n          <bux-svg class="c-back-link-svg" data-icon="fleche-cercle" style="transform: rotate(180deg);"></bux-svg>\n          <span class="c-back-link-txt"></span>\n        </a>', this.setLabel(), this.setLink(), this.isInit = !0) } disconnectedCallback() { this.removeAttribute("data-link") } setLabel() { this.label ? (this.querySelector(".c-back-link-txt").textContent = this.label, this.children[0].setAttribute("aria-label", this.label)) : this.children[0].removeAttribute("aria-label") } setLink() { this.link ? (this.children[0].style.display = "", this.children[0].href = this.link) : (this.children[0].href = "", this.children[0].style.display = "none"), this.setBackLinkInHeader() } setBackLinkInHeader() { const t = document.querySelector("bux-header"), e = document.querySelector("ux-back-link"); t ? t.setAttribute("data-back-link", this.link ? this.link : "") : e && e.setAttribute("lib-link", this.link ? this.link : "") } }), i(79), customElements.define("bux-badge", class extends n { static get observedAttributes() { return ["large"] } constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this._large = this.hasAttribute("large") && "false" !== this.getAttribute("large"); const t = document.createElement("template"); for (t.innerHTML = '<span class="c-badge"></span>', this.wrapSlot = t.content.querySelector(".c-badge"); this.childNodes.length > 0;)this.wrapSlot.appendChild(this.childNodes[0]); this.setLarge(), this.appendChild(t.content), this.isInit = !0 } attributeChangedCallback(t) { const e = this.toCamelCase(t); this.isInit && "_large" === e && (this._large = this.hasAttribute("large") && "false" !== this.getAttribute("large"), this.setLarge()) } setLarge() { this._large ? this.wrapSlot.classList.add("c-badge--large") : this.wrapSlot.classList.remove("c-badge--large") } }), i(80), customElements.define("bux-big-heading", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["data-label", "center"] } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.label = this.getAttribute("data-label") || "", this.center = this.hasAttribute("center") && "false" !== this.getAttribute("center"); const t = document.createElement("template"); t.innerHTML = '<h1 class="c-big-heading"></h1>', this.wrapSlot = t.content.querySelector(".c-big-heading"), this.setText(), this.setClasses(), this.appendChild(t.content) } setText() { this.label && (this.wrapSlot.textContent = this.label) } setClasses() { !0 === this.center && this.wrapSlot.setAttribute("class", "c-big-heading c-big-heading--center") } }), i(81), customElements.define("bux-big-input", class extends n { constructor() { super(), this.idPrefixe = "bux-big-input-" + (Math.floor(1e4 * Math.random()) + 2), this.handleInputEvent = this.inputEvent.bind(this), this.value = "", this.state = "empty", this.required = "false", this.currency = "€", this.label = "", this.errorMsg = "" } static get observedAttributes() { return ["data-value", "state", "required", "data-currency", "data-label", "data-error-msg"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (s) { case "value": this.input.value = this.value; break; case "state": this.bigInputWrap.setAttribute("class", this.setClass()), this.bigError.innerHTML = this.displayError(); break; case "required": case "label": this.bigInputLabel.innerHTML = this.setLabel(); break; case "currency": this.bigInputCurrency.innerHTML = this.currency; break; case "errorMsg": this.bigError.innerHTML = this.displayError() } } connectedCallback() { this.render(), this.isInit = !0, this.input = this.querySelector("input"), this.bigInputWrap = this.querySelector(".big-input-wrap"), this.bigInputCurrency = this.querySelector(".big-input-currency-wrap span"), this.bigInputLabel = this.querySelector(".big-input-label"), this.bigError = this.querySelector(".big-input-error span"), this.input.addEventListener("input", this.handleInputEvent), this.initAttr("data-value"), this.initAttr("state"), this.initAttr("required"), this.initAttr("data-currency"), this.initAttr("data-label"), this.initAttr("data-error-msg") } disconnectedCallback() { this.input.removeEventListener("input", this.handleInputEvent) } inputEvent(t) { this.setAttribute("data-value", t.target.value) } initAttr(t) { const e = this.toCamelCase(t); "" === this.getAttribute(t) ? this[e] = this.getAttribute(e) : this.setAttribute(t, this[e]) } setClass() { switch (this.state) { case "valid": return "big-input-wrap big-input-state-valid"; case "error": return "big-input-wrap big-input-state-error"; default: return "big-input-wrap big-input-state-empty" } } setLabel() { return this.label + ("true" == this.required ? ` <span aria-hidden="true">*</span><span class="u-hidden-visually">. Note la devise est en ${this.currency}. Ce Champ est obligatoire</span>` : "") } displayError() { return "error" === this.state ? `<div tabindex="0">${this.errorMsg}</div>` : "" } render() { this.innerHTML = `\n      <div class="big-input-main">\n        <div class="big-input-sub-main">\n          <div class="${this.setClass()}">\n            <label for="${this.idPrefixe + "_biginput"}" class="big-input-label">${this.setLabel()}</label>\n            <div class="big-input-logo-wrap">\n              <input id="${this.idPrefixe + "_biginput"}" class="big-input-input" min="0" type="number">\n              <div class="big-input-currency-wrap" aria-hidden="true">\n                  <span>${this.currency}</span>\n              </div>\n            </div>\n          </div>\n          <span class="u-hidden-visually" tabindex="0"></span>\n          <div class="big-input-error">\n            <span>${this.displayError()}</span>\n          </div>\n        </div>\n      </div>` } }), i(82), customElements.define("bux-block", class extends n { static get observedAttributes() { return ["layout", "noshadow", "nomarginbottom", "center", "wmax480", "nopaddingbottom", "nobackground"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); switch (s) { case "layout": this[s] = i, this.setPadding(); break; case "noshadow": this.noshadow = this.hasAttribute("noshadow") && "false" !== this.getAttribute("noshadow"), this.setNoshadow(); break; case "nomarginbottom": this.nomarginbottom = this.hasAttribute("nomarginbottom") && "false" !== this.getAttribute("nomarginbottom"), this.setNoMarginBottom(); break; case "center": this.center = this.hasAttribute("center") && "false" !== this.getAttribute("center"), this.setCenter(); break; case "wmax480": this.wmax480 = this.hasAttribute("wmax480") && "false" !== this.getAttribute("wmax480"), this.setWmax480(); break; case "nopaddingbottom": this.nopaddingbottom = this.hasAttribute("nopaddingbottom") && "false" !== this.getAttribute("nopaddingbottom"), this.setPaddingBottom(); break; case "nobackground": this.nobackground = this.hasAttribute("nobackground") && "false" !== this.getAttribute("nobackground"), this.setBackground() } } connectedCallback() { this.classList.add("c-block"), this.initAttr("layout", "default"), this.noshadow = this.hasAttribute("noshadow") && "false" !== this.getAttribute("noshadow"), this.nomarginbottom = this.hasAttribute("nomarginbottom") && "false" !== this.getAttribute("nomarginbottom"), this.center = this.hasAttribute("center") && "false" !== this.getAttribute("center"), this.wmax480 = this.hasAttribute("wmax480") && "false" !== this.getAttribute("wmax480"), this.nopaddingbottom = this.hasAttribute("nopaddingbottom") && "false" !== this.getAttribute("nopaddingbottom"), this.nobackground = this.hasAttribute("nobackground") && "false" !== this.getAttribute("nobackground"), this.setNoshadow(), this.setPadding(), this.setNoMarginBottom(), this.setCenter(), this.setWmax480(), this.setPaddingBottom(), this.setBackground() } initAttr(t, e) { this.hasAttribute(t) ? this[t] = this.getAttribute(t) : void 0 === e ? this.setAttribute(t, "") : (this[t] = e, this.setAttribute(t, e)) } getPaddingClass() { switch (this.layout) { case "flat": return "c-block--padding-flat"; case "nopadding": return "c-block--nopadding"; case "small": return "c-block--padding-sm"; case "default": return "c-block--padding-default"; case "medium": return "c-block--padding-md"; case "large": return "c-block--padding-large" }return "c-block--padding-default" } setPadding() { this.classList.remove("c-block--nopadding"), this.classList.remove("c-block--padding-sm"), this.classList.remove("c-block--padding-default"), this.classList.remove("c-block--padding-md"), this.classList.remove("c-block--padding-large"), this.classList.add(this.getPaddingClass()) } setNoshadow() { this.noshadow ? this.classList.add("u-noshadow") : this.classList.remove("u-noshadow") } setNoMarginBottom() { this.nomarginbottom ? this.classList.add("u-nomarginbottom") : this.classList.remove("u-nomarginbottom") } setCenter() { this.center ? this.classList.add("c-block--center") : this.classList.remove("c-block--center") } setWmax480() { this.wmax480 ? this.classList.add("c-block--wmax480") : this.classList.remove("c-block--wmax480") } setPaddingBottom() { this.nopaddingbottom ? this.classList.add("c-block--nopaddingbottom") : this.classList.remove("c-block--nopaddingbottom") } setBackground() { this.nobackground ? this.classList.add("c-block--nobackground") : this.classList.add("c-block--background") } }), i(83), customElements.define("bux-btn", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["type", "disabled", "data-identifier", "a11y-label", "size"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (t) { case "type": case "size": this.btn.setAttribute("class", this.getClass()); break; case "disabled": this.disabled = this.hasAttribute("disabled") && "false" !== this.getAttribute("disabled"), this.btn.setAttribute("class", this.getClass()), this.disabled ? (this.btn.setAttribute("disabled", "true"), "link" !== this.role && "link-external" !== this.role || (this.btn.setAttribute("aria-label", "Indisponible"), this.btn.removeAttribute("href"))) : (this.btn.removeAttribute("disabled"), this.btn.setAttribute("aria-label", this.a11yLabel), "link" !== this.role && "link-external" !== this.role || this.btn.setAttribute("href", this.linkhref)); break; case "data-identifier": this.btn.setAttribute("id", this[s]); break; case "a11y-label": this.btn.setAttribute("aria-label", this.a11yLabel) } } connectedCallback() { if (this.isInit) return; this.type = this.getAttribute("type") || "primary", this.size = this.getAttribute("size") || "medium", this.disabled = this.hasAttribute("disabled") && "false" !== this.getAttribute("disabled"), this.role = this.getAttribute("data-role") || "button", this.a11yLabel = this.getAttribute("a11y-label") || "", this.linkhref = this.getAttribute("data-link") || "", this.identifier = this.getAttribute("data-identifier") || "", this.outlined = this.hasAttribute("outlined") && "false" !== this.getAttribute("outlined"), this.icon = this.getAttribute("data-icon"); const t = document.createElement("template"); if (t.innerHTML = this.template(), this.btn = t.content.querySelector(".btn-selector"), this.icon) { const t = document.createElement("template"); t.innerHTML = `<bux-svg\n          data-icon="${this.icon}"\n          data-class="c-btn--icon"></bux-svg>`, this.btn.appendChild(t.content) } for (; this.childNodes.length > 0;)this.btn.appendChild(this.childNodes[0]); this.appendChild(t.content), this.isInit = !0 } getClass() { let t = "c-btn "; return "validation" === this.type && (t += "c-btn--validation "), "primary" === this.type && (t += "c-btn--primary "), "secondary" === this.type && (t += "c-btn--secondary "), "novatio" === this.type && (t += "c-btn--novatio"), "svg" === this.type && (t += "c-btn--svg "), this.disabled && (t += "is-disabled "), this.outlined && (t += "c-btn--outlined "), "small" === this.size && (t += "c-btn--small "), "medium" === this.size && (t += "c-btn--medium "), "large" === this.size && (t += "c-btn--large "), t } template() { let t = ""; switch (this.role) { case "button": default: t = `<button class="btn-selector ${this.getClass()}"\n          ${"" === this.a11yLabel ? "" : `aria-label="${this.a11yLabel}"`}\n          ${this.disabled ? "disabled" : ""}\n          ${"" === this.identifier ? "" : `id="${this.identifier}"`}\n          >\n        </button>`; break; case "link": t = `<a class="btn-selector ${this.getClass()}"\n          ${"" === this.a11yLabel ? "" : this.disabled ? 'aria-label="Indisponible"' : `aria-label="${this.a11yLabel}"`}\n          ${"" === this.linkhref || this.disabled ? "" : `href="${this.linkhref}"`}\n          ${"" === this.identifier ? "" : `id="${this.identifier}"`}\n        >\n        </a>`; break; case "link-external": t = `<a class="btn-selector ${this.getClass()}"\n          ${"" === this.identifier ? "" : `id="${this.identifier}"`}\n          ${"" === this.linkhref || this.disabled ? "" : `href="${this.linkhref}"`}\n          ${"" === this.a11yLabel ? "" : this.disabled ? 'aria-label="Indisponible"' : `aria-label="${this.a11yLabel}"`}\n        target="_blank" rel="noopener"\n        >\n        </a>` }return t } }), i(84), customElements.define("bux-bulle-block", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.arrowPosition = this.getAttribute("arrow-position") || ""; const t = document.createElement("template"); for (t.innerHTML = '<div class="c-bulle-block"></div>', this.wrapSlot = t.content.querySelector(".c-bulle-block"); this.childNodes.length > 0;)this.wrapSlot.appendChild(this.childNodes[0]); this.setArrow(), this.appendChild(t.content) } setArrow() { if (this.arrowPosition) { const t = "c-bulle-block c-bulle-block--" + this.arrowPosition; this.wrapSlot.setAttribute("class", t) } else this.wrapSlot.setAttribute("class", "c-bulle-block c-bulle-block--2of3") } }), i(85); const l = document.createElement("template"); l.innerHTML = '<section class="c-card"></section>', customElements.define("bux-card", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; const t = l.content.cloneNode(!0), e = t.childNodes[0]; for (; this.childNodes.length > 0;)e.appendChild(this.childNodes[0]); this.appendChild(t), this.isInit = !0 } }), i(86); const c = document.createElement("template"); c.innerHTML = '\n  <div class="c-card__head">\n    <h3 class="c-card__title"></h3>\n  </div>', customElements.define("bux-card-header", class extends n { static get observedAttributes() { return ["left"] } constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0; const t = c.content.cloneNode(!0); for (this.wrapSlot = t.querySelector(".c-card__title"), this.container = t.querySelector(".c-card__head"); this.childNodes.length > 0;)this.wrapSlot.appendChild(this.childNodes[0]); this.setLeft(), this.hasAttribute("data-toast") && this.setToast(), this.appendChild(t), this.hasAttribute("data-toast") && this.querySelector(".btn-selector").setAttribute("aria-label", "Afficher l'information relative") } attributeChangedCallback() { this.isInit && this.setLeft() } get left() { return this.hasAttribute("left") && "false" !== this.getAttribute("left") } set left(t) { Boolean(t) ? this.setAttribute("left", "") : this.removeAttribute("left") } setToast() { this.container.classList.add("c-card__head--toast"); const t = document.createElement("bux-btn"), e = this.getAttribute("data-toast"); t.setAttribute("type", "svg"), t.setAttribute("data-icon", "interrogation-cercle"), t.setAttribute("id", e), this.container.appendChild(t) } setLeft() { this.hasAttribute("left") ? this.wrapSlot.classList.add("c-card__title--left") : this.wrapSlot.classList.remove("c-card__title--left") } }), i(87); const d = document.createElement("template"); d.innerHTML = '<div class="c-card__body"></div>', customElements.define("bux-card-body", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["layout"] } attributeChangedCallback(t, e, i) { if (!["grid-hero", "columns-medium", "default"].includes(i)) return this.layout = "default", void this.setAttribute("layout", "default"); this.layout = i, this.isInit && this.setLayout() } connectedCallback() { if (this.isInit) return; const t = d.content.cloneNode(!0); for (this.wrapSlot = t.childNodes[0]; this.childNodes.length > 0;)this.wrapSlot.appendChild(this.childNodes[0]); this.hasAttribute("layout") || this.setAttribute("layout", "default"), this.setLayout(), this.appendChild(t), this.isInit = !0 } setLayout() { switch (this.layout) { case "grid-hero": this.wrapSlot.classList.remove("columns-medium"), this.wrapSlot.classList.add("o-card-grid"), [...this.wrapSlot.children].forEach((t => { t.classList.add("o-card-grid__item") })); break; case "columns-medium": this.wrapSlot.classList.remove("o-card-grid"), [...this.wrapSlot.children].forEach((t => t.classList.remove("o-card-grid__item"))), this.wrapSlot.classList.add("o-card-columns@md"); break; case "default": this.wrapSlot.classList.remove("o-card-grid"), [...this.wrapSlot.children].forEach((t => t.classList.remove("o-card-grid__item"))), this.wrapSlot.classList.remove("o-card-columns@md") } } }), i(88); const u = document.createElement("template"); u.innerHTML = '<div class="c-card__footer"></div>', customElements.define("bux-card-footer", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; const t = u.content.cloneNode(!0), e = t.childNodes[0]; for (; this.childNodes.length > 0;)e.appendChild(this.childNodes[0]); this.appendChild(t), this.isInit = !0 } }), i(89); const h = i(90), p = document.createElement("template"); p.innerHTML = `\n<style>\n${h}\n</style>\n<section class="c-chat">\n  <small class="c-chat__date"></small>\n  <div class="c-chat__list">\n    <slot></slot>\n  </div>\n</section>\n`, window.ShadyCSS && ShadyCSS.prepareTemplate(p, "bux-chat"); class b extends HTMLElement { static get observedAttributes() { return ["data-date"] } constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(p.content.cloneNode(!0)), this._defaultSlot = this.shadowRoot.querySelector("slot"), this._defineItems() } attributeChangedCallback(t) { "data-date" === t && this._setDate(), this._defineItems() } connectedCallback() { window.ShadyCSS && ShadyCSS.styleElement(this) } get date() { return this.getAttribute("data-date") } set date(t) { this.setAttribute("data-date", t) } _allItems() { return Array.from(this.children) } _defineItems() { this._allItems().forEach((t => { t.classList.contains("c-chat__item") || t.classList.add("c-chat__item") })) } _setDate() { this.shadowRoot.querySelector(".c-chat__date").textContent = this.date } } customElements.define("bux-chat", b), i(91), customElements.define("bux-checkbox", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["data-name", "data-label", "data-sublabel", "checked", "self-padding"] } attributeChangedCallback(t, e, i) { switch (t) { case "data-name": if (this.name = i, !this.isInit) return; this.input.setAttribute("name", this.name); break; case "data-label": if (this.label = i, !this.isInit) return; this.labelEl.innerHTML = i; break; case "data-sublabel": if (this.sublabel = i, !this.isInit) return; this.sublabelEl.innerHTML = i; break; case "checked": if (this._checked = this.hasAttribute("checked") && "false" !== this.getAttribute("checked"), !this.isInit || this.fromInput) return; this.setCheck() } } set checked(t) { Boolean(t) ? this.setAttribute("checked", "") : this.removeAttribute("checked") } get checked() { return this._checked } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.idPrefixe = "bux-checkbox-" + (Math.floor(1e4 * Math.random()) + 2), this.label = this.getAttribute("data-label") || "", this.sublabel = this.getAttribute("data-sublabel") || "", this.name = this.getAttribute("data-name") || "", this.type = this.getAttribute("type") || "default", this.selfPadding = this.getAttribute("self-padding") || "", this._checked = this.hasAttribute("checked") && "false" !== this.getAttribute("checked"); const t = document.createElement("template"); for (t.innerHTML = this.template(), this.input = t.content.querySelector("input"), this.labelEl = t.content.querySelector(".c-checkbox__label-div"), this.sublabelEl = t.content.querySelector(".c-checkbox__sublabel-div"), this.input.addEventListener("change", (t => { this.fromInput = !0, t.target.checked ? this.setAttribute("checked", "true") : this.removeAttribute("checked"), this.fromInput = !1 })), this.cont = t.content.querySelector(".c-checkbox__label-div"); this.childNodes.length > 0;)this.cont.appendChild(this.childNodes[0]); this.setCheck(), this.appendChild(t.content) } setCheck() { this.input && (this.input.checked = this._checked, this.dispatchEvent(new Event("change"))) } isSelfPadding() { if (this.selfPadding) { let t = ""; switch (this.selfPadding) { case "sm": t = " c-self-padding--sm"; break; case "md": t = " c-self-padding--md" }return t } return "" } template() { return "cardstyle" === this.type ? `\n        <input class="c-checkbox__input" id="${this.idPrefixe}" type="checkbox" ${this.name ? `name="${this.name}"` : ""}>\n        <label class="c-checkbox__label c-checkbox__label--cardstyle" for="${this.idPrefixe}">\n          <div class="c-checkbox__animated"></div>\n          <div class="c-checkbox__content">\n            <div class="c-checkbox__label-div">${this.label}</div>\n            <div class="c-checkbox__sublabel-div">${this.sublabel}</div>\n          </div>\n        </label>\n        ` : `\n        <input class="c-checkbox__input" id="${this.idPrefixe}" type="checkbox" ${this.name ? `name="${this.name}"` : ""}>\n        <label class="c-checkbox__label${this.isSelfPadding()}" for="${this.idPrefixe}">\n          <div class="c-checkbox__animated"></div>\n          <div class="c-checkbox__label-div">${this.label}</div>\n          <div class="c-checkbox__sublabel-div">${this.sublabel}</div>\n        </label>\n      ` } }), i(92), customElements.define("bux-cnil", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.style.display = "none", this.link = this.getAttribute("data-link") || "/public/donneesPersonnelles/", this.content = this.getAttribute("data-content") || `En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies, notamment pour\n       nous permettre d'améliorer nos contenus et vous proposer des services adaptés. Pour en savoir plus <a\n       class="c-cnil-a"\n       href="${this.link}"\n       aria-label="Afficher la page sur vos données personnelles"\n     >\n       cliquer ici.\n     </a>`, this.cookieName = this.getAttribute("data-cookie-name") || "trackingAccepted", this.cookieDuration = this.getAttribute("data-cookie-duration") || "365", this.cookiePath = this.getAttribute("data-cookie-path") || "/"; const t = document.createElement("template"); t.innerHTML = `\n        <aside class="c-cnil-wrapper">\n          <p class="c-cnil-p">\n            ${this.content}\n          </p>\n          <button class="c-cnil-button" aria-label="Accepter les cookies et poursuivre votre navigation sur ce site">J'accepte</button>\n        </aside>\n      `, this.btn = t.content.querySelector(".c-cnil-button"), this.wrap = t.content.querySelector(".c-cnil-wrapper"), this.initCnil(), this.appendChild(t.content) } getCookie(t) { const e = t + "=", i = decodeURIComponent(document.cookie).split(";"); for (let t = 0; t < i.length; t++) { let s = i[t]; for (; " " == s.charAt(0);)s = s.substring(1); if (0 == s.indexOf(e)) return s.substring(e.length, s.length) } return !1 } deleteCookie(t) { document.cookie = t + "=false; Max-Age=-99999999;" } setCookie(t, e, i, s, a = null) { const n = new Date; n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3); let r = t + "=" + e + ";expires=" + n.toUTCString() + ";path=" + s; a && (r += ";domain=" + a), document.cookie = r } initCnil() { const t = this.getCookie(this.cookieName); t && "true" === t || this.show() } gtmUpdate(t, e) { t[e] = t[e] || [], t[e].push({ event: "click-accept-tracking" }) } show() { this.style.display = "", this.wrap.classList.add("is-visible"), this.btn.addEventListener("click", (() => { this.setCookie(this.cookieName, "true", this.cookieDuration, this.cookiePath), this.gtmUpdate(window, "dataLayer"), this.hide() })) } hide() { this.wrap.classList.remove("is-visible"), setTimeout((() => { this.style.display = "none" }), 400) } }), i(93), customElements.define("bux-container", class extends n { static get observedAttributes() { return ["type", "margin-top-md", "margin-bottom-md"] } attributeChangedCallback() { this.setClasses() } connectedCallback() { this.classList.add("c-container") } setClasses() { const t = this.getAttribute("type"), e = this.hasAttribute("margin-top-md") && !1 !== this.getAttribute("margin-top-md"), i = this.hasAttribute("margin-bottom-md") && !1 !== this.getAttribute("margin-bottom-md"); let s = "c-container c-container--" + t; t.indexOf("dropdown") > -1 && (s += " c-container--dropdown"), e && (s += " c-container--margin-top-md"), i && (s += " c-container--margin-bottom-md"), this.className = s } }), i(94), customElements.define("bux-footer-app", class extends n { static get observedAttributes() { return ["beveled", "beveled-mobile"] } constructor() { super(), this.isInit = !1 } attributeChangedCallback(t) { switch (t) { case "beveled": this.setBevel(); break; case "beveled-mobile": this.setBevelMobile() } } connectedCallback() { this.isInit || (this.isInit = !0, this.beveled = this.hasAttribute("beveled") && "false" !== this.getAttribute("beveled"), this.beveledMobile = this.hasAttribute("beveled-mobile") && "false" !== this.getAttribute("beveled-mobile"), this.classList.add("c-footer-app"), this.type = this.getAttribute("type"), this.setBevel(), this.setBevelMobile()) } setBevel() { this.beveled && this.classList.add("c-footer-app--beveled") } setBevelMobile() { this.beveledMobile && this.classList.add("c-footer-app--beveled-mobile") } }), i(95), customElements.define("bux-heading", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["a11y-expanded", "data-identifier", "data-label", "autofocus"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (t) { case "data-identifier": this.headingEl && (this.headingEl.id = this[s]); break; case "a11y-expanded": this.btn && this.btn.setAttribute("aria-expanded", i); break; case "data-label": this.label = i, this.setLabel(); break; case "autofocus": this.setAutofocus() } } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.level = this.getAttribute("data-level") || "1", this.identifier = this.getAttribute("data-identifier") || "", this.icon = this.getAttribute("data-icon") || "", this.type = this.getAttribute("type") || "default", this.label = this.getAttribute("data-label") || !1, this.toast = this.getAttribute("data-toast") || "", this.setHeading(this.level), this.templateDropDown(); const t = document.createElement("template"); if (t.innerHTML = this.template(), this.btn = t.content.querySelector(".bux-heading-btn"), this.headingEl = t.content.querySelector("h" + this.level), this.wrapSlot = t.content.querySelector(".bux-heading-label"), this.label) this.innerHTML = "", this.setLabel(); else for (; this.childNodes.length > 0;)this.wrapSlot.appendChild(this.childNodes[0]); this.appendChild(t.content), this.setAutofocus() } setHeading(t) { switch (t) { case "1": this.class = "c-heading-alpha"; break; case "2": this.class = "c-heading-bravo"; break; case "3": this.class = "c-heading-charlie"; break; case "4": this.class = "c-heading-dorie"; break; case "5": this.class = "c-heading-esther"; break; case "6": this.class = "c-heading-fanch" } } setLabel() { this.wrapSlot.innerHTML = this.label, this.label ? this.headingEl.removeAttribute("aria-hidden", "true") : this.headingEl.setAttribute("aria-hidden", "true") } setAutofocus() { this.autofocus = this.hasAttribute("autofocus") && "false" !== this.getAttribute("autofocus"), this.autofocus && (this.setAttribute("tabindex", "0"), this.focus()) } templateDropDown() { "dropdown" === this.type && (this.a11yExpanded = this.getAttribute("a11y-expanded") || "false", this.a11yControls = this.getAttribute("a11y-controls") || "false", this.template = () => `\n          <h${this.level} >\n            <div\n              class="bux-heading-btn ${this.class}"\n              role="button"\n              aria-expanded="${this.a11yExpanded}"\n              aria-controls="${this.a11yControls}"\n              tabindex="0"\n              ${"" === this.identifier ? "" : `id="${this.identifier}"`}\n            >\n              <span>\n                ${"" === this.icon ? "" : `<bux-svg data-icon="${this.icon}"></bux-svg>`}\n                <span class="bux-heading-label">${this.label ? this.label : ""}</span>\n              </span>\n              <bux-svg data-icon="chevron" class="bux-drop-down"></bux-svg>\n            </div>\n          </h${this.level}>\n        `) } template() { return `\n          <h${this.level}\n            ${"" === this.identifier ? "" : `id="${this.identifier}"`}\n            class="${this.class}">\n            ${"" === this.icon ? "" : `<bux-svg data-icon="${this.icon}"></bux-svg>`}\n            <span class="bux-heading-label"></span>\n            ${"" === this.toast ? "" : `<bux-btn id="${this.toast}Btn" type="svg" a11y-label="En savoir plus sur ${this.label ? this.label : ""}"><bux-svg data-icon="interrogation-cercle" data-class="c-icon"></bux-svg></bux-btn>`}\n          </h${this.level}>\n        ` } }), i(96), customElements.define("bux-input", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["layout", "data-value", "state", "data-label", "data-label-right", "required", "data-input-width", "data-error-msg", "type", "data-value-min", "data-value-max", "data-step", "data-placeholder", "data-list", "data-icon-left", "data-icon-right", "data-icon-left-ay11", "data-icon-right-ay11", "data-autocomplete", "show-password"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if ("data-value" !== t && (this[s] = i), this.isInit) switch (s) { case "autocomplete": this.setAutocomplete(); break; case "layout": this.setClass(); break; case "state": this.setState(); break; case "required": case "label": case "labelRight": this.setLabelAndAccess(); break; case "inputWidth": this.setWidth(); break; case "errorMsg": this.errorSpan.innerHTML = this.errorMsg, this.displayError(); break; case "valueMin": case "valueMax": case "valueStep": this.setMinMaxStep(); break; case "value": this.setValue(); break; case "iconLeft": case "iconRight": case "iconLeftAy11": case "iconRightAy11": this.setIcon(); break; case "type": this.setType(); break; case "show-password": this.querySelector(".bux-input-ico-right") && this._showPassword() } } set value(t) { this.setAttribute("data-value", t) } get value() { return this.getAttribute("data-value") } connectedCallback() { if (this.isInit) return; this.idPrefixe = "bux-input-" + Math.floor(1e4 * Math.random()) + 2, this.layout = this.getAttribute("layout") || null, this.state = this.getAttribute("state") || "empty", this.label = this.getAttribute("data-label") || null, this.labelRight = this.getAttribute("data-label-right") || null, this.inputWidth = this.getAttribute("data-input-width") || null, this.type = this.getAttribute("type") || "text", this.placeholder = this.getAttribute("data-placeholder") || null, this.errorMsg = this.getAttribute("data-error-msg") || null, this.valueMin = this.getAttribute("data-value-min") || null, this.valueMax = this.getAttribute("data-value-max") || null, this.valueStep = this.getAttribute("data-step") || null, this.list = this.getAttribute("data-list") || null, this.iconLeft = this.getAttribute("data-icon-left") || null, this.iconRight = this.getAttribute("data-icon-right") || null, this.required = this.hasAttribute("required") && "false" !== this.getAttribute("required"), this.stepIn = this.hasAttribute("a11y-step-in") && "false" !== this.getAttribute("a11y-step-in"), this.stepOut = this.hasAttribute("a11y-step-out") && "false" !== this.getAttribute("a11y-step-out"); const t = document.createElement("template"); t.innerHTML = this.template(), this.IIwrap = t.content.querySelector(".bux-input-input-wrap"), this.wrap = t.content.querySelector(".bux-input-wrap"), this.labelRightEl = t.content.querySelector(".bux-input-unit"), this.errorDiv = t.content.querySelector(".bux-input-error-msg"), this.errorSpan = t.content.querySelector("#error-" + this.idPrefixe), this.inputEl = t.content.querySelector(".bux-input-input"), this.labelEl = t.content.querySelector(".bux-input-label"), this.isPasswordType = "password" === this.type, this.setState(), this.setLabelAndAccess(), this.setWidth(), this.setMinMaxStep(), this.setValue(), this.setSteps(), this.setIcon(), this.setType(), this.setAutocomplete(), this.hasAttribute("show-password") && this._showPassword(), this.addListener(), this.displayError(), this.appendChild(t.content), this.isInit = !0 } addListener() { this.inputEl.addEventListener("focus", (() => { this.dispatchEvent(new Event("focus")) })), this.inputEl.addEventListener("input", (t => { this.setAttribute("data-value", t.target.value) })) } setAutocomplete() { this.autocomplete ? this.inputEl.setAttribute("autocomplete", this.autocomplete) : this.inputEl.removeAttribute("autocomplete") } setType() { this.inputEl.setAttribute("type", this.type) } setValue() { this.inputEl.value = this.value } setState() { this.setClass(), "error" === this.state ? this.inputEl.setAttribute("aria-describedby", "error-" + this.idPrefixe) : this.inputEl.removeAttribute("aria-describedby"), this.displayError() } setClass() { let t = "bux-input-wrap "; switch ("align" === this.layout && (t += "bux-input-align "), this.state) { case "valid": t += "bux-input-valid"; break; case "error": t += "bux-input-error"; break; default: t += "bux-input-wrap bux-input-empty" }this.wrap.className = t } setLabelAndAccess() { this.required = this.hasAttribute("required") && "false" !== this.getAttribute("required"); let t = "", e = null; this.label && (t += this.label), this.required && (e = document.createElement("span"), e.setAttribute("aria-hidden", !0), e.textContent = " *"), this.labelEl.textContent = t, null !== e && this.labelEl.appendChild(e), this.labelRight ? (this.labelRightEl.textContent = this.labelRight, this.labelRightEl.style.display = "") : (this.labelRightEl.textContent = "", this.labelRightEl.style.display = "none"); let i = ""; this.label && (i += this.label), this.labelRight && (i += this.labelRight), this.required && (i += ". Ce champ est obligatoire."), i && this.labelEl.setAttribute("aria-label", i), this.inputEl.required = this.required } setMinMaxStep() { "number" !== this.type && "range" !== this.type && "date" !== this.type || (this.valueMin && this.inputEl.setAttribute("min", this.valueMin), this.valueMax && this.inputEl.setAttribute("max", this.valueMax), this.valueStep && this.inputEl.setAttribute("step", this.valueStep)) } setWidth() { Number(this.inputWidth) ? this.inputEl.setAttribute("style", `width:${this.inputWidth}px;flex-grow:inherit;`) : this.inputEl.removeAttribute("style") } displayError() { "error" === this.state && this.errorMsg ? this.errorDiv.style.display = "" : this.errorDiv.style.display = "none" } setSteps() { if (!0 === this.stepIn) { const t = document.createElement("span"); t.setAttribute("class", "u-hidden-visually"), t.setAttribute("tabindex", 0), t.setAttribute("aria-label", "Début de la zone de saisie"), this.wrap.insertBefore(t, this.labelEl) } if (!0 === this.stepOut) { const t = document.createElement("span"); t.setAttribute("class", "u-hidden-visually"), t.setAttribute("tabindex", 0), t.setAttribute("aria-label", "Fin de la zone de saisie"), this.wrap.appendChild(t) } } setIcon() { if (this.iconLeft) { this.inputEl.classList.add("has-icon-left"); let t = this.querySelector(".bux-input-ico-left"); t ? t.setAttribute("data-icon", this.iconLeft) : (t = document.createElement("bux-svg"), t.setAttribute("data-icon", this.iconLeft), t.classList.add("bux-input-ico-left"), this.IIwrap.insertBefore(t, this.inputEl)), t.setAttribute("aria-label", this.iconLeftAy11 ? this.iconLeftAy11 : "") } else this.inputEl.classList.remove("has-icon-left"); if (this.iconRight) { this.inputEl.classList.add("has-icon-right"); let t = this.querySelector(".bux-input-ico-right"); if (!0 === this.isPasswordType) if (t) t.setAttribute("data-icon", this.iconRight); else { let e = document.createElement("bux-btn"); e.setAttribute("type", "svg"), e.classList.add("btn-ico-right"), t = document.createElement("bux-svg"), t.setAttribute("data-icon", this.iconRight), t.classList.add("bux-input-ico-right"), e.appendChild(t), this.IIwrap.insertBefore(e, this.inputEl.nextSibling) } else t ? t.setAttribute("data-icon", this.iconRight) : (t = document.createElement("bux-svg"), t.setAttribute("data-icon", this.iconRight), t.classList.add("bux-input-ico-right"), this.IIwrap.insertBefore(t, this.inputEl.nextSibling)); t.setAttribute("aria-label", this.iconRightAy11 ? this.iconRightAy11 : "") } else this.inputEl.classList.remove("has-icon-right") } template() { return `\n        <div class="bux-input-wrap">\n            <label class="bux-input-label" for="${this.idPrefixe}"></label>\n            <div class="bux-input-input-wrap">\n              <input\n                class="bux-input-input"\n                id="${this.idPrefixe}"\n                ${this.placeholder ? `placeholder="${this.placeholder}"` : ""}\n                ${this.list ? `list="${this.list}"` : ""}\n                ></input>\n                <span class="bux-input-unit" aria-hidden="true"></span>\n            </div>\n  \n            <div class="bux-input-error-msg">\n              <span tabindex="0" id="error-${this.idPrefixe}">${this.errorMsg}</span>\n            </div>\n        </div>` } set showpassword(t) { Boolean(t) ? this.setAttribute("show-password", "") : this.removeAttribute("show-password") } get showpassword() { return this.hasAttribute("show-password") } _toggleShowHidePassword() { "password" === this.getAttribute("type") ? (this.setAttribute("type", "text"), this.querySelector(".bux-input-ico-right").setAttribute("data-icon", "oeil-barre")) : (this.setAttribute("type", "password"), this.querySelector(".bux-input-ico-right").setAttribute("data-icon", "oeil")) } _showPassword() { "password" === this.inputEl.getAttribute("type") ? this.setAttribute("data-icon-right", "oeil") : "text" === this.inputEl.getAttribute("type") && this.setAttribute("data-icon-right", "oeil-barre"), this.setIcon(), setTimeout((() => { const t = this.querySelector(".btn-ico-right"); t && t.addEventListener("click", (() => { this.querySelector(".c-btn").setAttribute("type", "button"), this._toggleShowHidePassword() })) }), 0) } }), i(97); const m = document.createElement("template"); m.innerHTML = '\n<div class="c-link-tile">\n    <div class="c-link-tile__content"></div>\n\n    <bux-svg data-icon="chevron" data-class="c-svg c-link-tile__arrow"></bux-svg>\n    <a class="c-link-tile__link" href=""></a>\n</div>\n', customElements.define("bux-link-tile", class extends n { static get observedAttributes() { return ["data-icon", "data-image", "data-label", "data-sublabel", "data-link", "data-badges", "data-title", "a11y-label", "bold", "shadow", "colored"] } constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0; const t = m.content.cloneNode(!0); this.container = t.querySelector(".c-link-tile"), this.contentContainer = t.querySelector(".c-link-tile__content"), this.linkEl = t.querySelector(".c-link-tile__link"), this._upgradeProperty("icon"), this._upgradeProperty("image"), this._upgradeProperty("label"), this._upgradeProperty("subLabel"), this._upgradeProperty("link"), this._upgradeProperty("bold"), this._upgradeProperty("shadow"), this._upgradeProperty("colored"), this._upgradeProperty("ariaLabel"), this._setIcon(), this._setImage(), this._setLabel(), this._setSubLabel(), this._setLink(), this._setTitle(), this._setAriaLabel(), this._setBadges(), this._setBold(), this._setShadow(), this._setColored(), this.appendChild(t) } _upgradeProperty(t) { if (this.hasOwnProperty(t)) { const e = this[t]; delete this[t], this[t] = e } } attributeChangedCallback(t) { switch (t) { case "data-icon": this._updateIcon(); break; case "data-image": this._updateImage(); break; case "data-label": this._updateLabel(); break; case "data-sublabel": this._updateSubLabel(); break; case "data-link": this.linkEl && this._setLink(); break; case "data-badges": this.contentContainer && this._setBadges(); break; case "data-title": this.linkEl && this._setTitle(); break; case "a11y-label": this.linkEl && this._setAriaLabel(); break; case "bold": this.container && this._setBold(); break; case "shadow": this.container && this._setShadow(); break; case "colored": this.container && this._setColored() } } get icon() { return this.getAttribute("data-icon") } set icon(t) { this.setAttribute("data-icon", t) } get image() { return this.getAttribute("data-image") } set image(t) { this.setAttribute("data-image", t) } get label() { return this.getAttribute("data-label") } set label(t) { this.setAttribute("data-label", t) } get subLabel() { return this.getAttribute("data-sublabel") } set subLabel(t) { this.setAttribute("data-sublabel", t) } get link() { return this.getAttribute("data-link") } set link(t) { this.setAttribute("data-link", t) } get title() { return this.getAttribute("data-title") } set title(t) { this.setAttribute("data-title", t) } get ariaLabel() { return this.getAttribute("a11y-label") } set ariaLabel(t) { this.setAttribute("a11y-label", t) } get badges() { return this.getAttribute("data-badges") } set badges(t) { this.setAttribute("data-badges", t) } get bold() { return this.hasAttribute("bold") && "false" !== this.getAttribute("bold") } set bold(t) { Boolean(t) ? this.setAttribute("bold", "") : this.removeAttribute("bold") } get shadow() { return this.hasAttribute("shadow") && "false" !== this.getAttribute("shadow") } set shadow(t) { Boolean(t) ? this.setAttribute("shadow", "") : this.removeAttribute("shadow") } get colored() { return this.hasAttribute("colored") && "false" !== this.getAttribute("colored") } set colored(t) { Boolean(t) ? this.setAttribute("colored", "") : this.removeAttribute("colored") } _setIcon() { if (this.icon && "undefined" !== this.icon) { const t = document.createElement("bux-svg"); t.setAttribute("data-icon", this.icon), t.setAttribute("data-class", "c-link-tile__icon"), this.container.insertBefore(t, this.container.firstChild) } } _updateIcon() { const t = this.querySelector("bux-svg"); t && t.setAttribute("data-icon", this.icon) } _setImage() { if (this.image && "undefined" !== this.image) { const t = document.createElement("bux2-image"); t.setAttribute("src", this.image), t.setAttribute("width", "30"), t.style.marginRight = "10px", this.container.insertBefore(t, this.container.firstChild) } } _updateImage() { const t = this.querySelector("bux2-image"); t && t.setAttribute("src", this.image) } _setLabel() { if (this.label && "undefined" !== this.label) { const t = document.createElement("div"); t.classList.add("c-link-tile__label"), t.textContent = this.label, this.contentContainer.appendChild(t) } } _updateLabel() { const t = this.querySelector(".c-link-tile__label"); t && (t.textContent = this.label) } _setSubLabel() { if (this.subLabel && "undefined" !== this.subLabel) { const t = document.createElement("div"); t.classList.add("c-link-tile__sublabel"), t.textContent = this.subLabel, this.contentContainer.appendChild(t) } } _updateSubLabel() { const t = this.querySelector(".c-link-tile__sublabel"); t && (t.textContent = this.subLabel) } _setLink() { this.link && "undefined" !== this.link && this.linkEl.setAttribute("href", this.link) } _setTitle() { this.link && "undefined" !== this.link && this.title && this.linkEl.setAttribute("title", this.title) } _setAriaLabel() { this.link && "undefined" !== this.link && this.ariaLabel && this.linkEl.setAttribute("aria-label", this.ariaLabel) } _setBadges() { if (this.badges && "undefined" !== this.badges) { const t = document.createElement("div"); t.classList.add(".c-link-tile__badges"), t.innerHTML = this.badges, this.contentContainer.appendChild(t) } } _setBold() { this.hasAttribute("bold") ? this.container.classList.add("c-link-tile--bold") : this.container.classList.remove("c-link-tile--bold") } _setShadow() { this.hasAttribute("shadow") ? this.container.classList.add("c-link-tile--shadow") : this.container.classList.remove("c-link-tile--shadow") } _setColored() { this.hasAttribute("colored") ? this.container.classList.add("c-link-tile--colored") : this.container.classList.remove("c-link-tile--colored") } }), i(98), customElements.define("bux-list", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["type", "marginbottommedium"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this.isInit) switch (s) { case "type": this.type = i, this.setType(); break; case "marginbottommedium": this.marginbottommedium = this.hasAttribute("marginbottommedium") && "false" !== this.getAttribute("marginbottommedium"), this.setMarginBottom() } } connectedCallback() { if (!this.isInit) { for (this.isInit = !0, this.marginbottommedium = this.hasAttribute("marginbottommedium") && "false" !== this.getAttribute("marginbottommedium"), this.label = this.getAttribute("data-label") || !1, this.initAttr("type", "nostyle"), this.layout = this.getAttribute("layout") || "default", this.ul = document.createElement("ul"); this.children.length > 0;) { const t = document.createElement("li"); t.appendChild(this.children[0]), this.ul.appendChild(t) } this.setType(), this.setLayout(), this.setLabel(), this.setMarginBottom(), this.appendChild(this.ul) } } initAttr(t, e) { this.hasAttribute(t) ? this[t] = this.getAttribute(t) : void 0 === e ? this.setAttribute(t, "") : (this[t] = e, this.setAttribute(t, e)) } setType() { if (this.ul) switch (this.type) { case "nostyle": this.ul.className = "c-list c-list--nostyle"; break; case "disc": this.ul.className = "c-list c-list--disc"; break; case "circle": this.ul.className = "c-list c-list--circle"; break; case "square": this.ul.className = "c-list c-list--square"; break; case "tablesimplelist": this.ul.className = "c-list c-list--tablesimplelist" } } setLayout() { if (this.ul) switch (this.layout) { case "2-columns-md": this.ul.classList.add("o-columns@md", "o-columns--2"); break; case "4-columns-md": this.ul.classList.add("o-columns@md", "o-columns--4") } } setLabel() { this.label && !this.querySelector(".c-list__title") && (this.h3 = document.createElement("h3"), this.h3.classList.add("c-list__title"), this.h3.textContent = this.label, this.appendChild(this.h3)) } setMarginBottom() { this.ul && (this.marginbottommedium ? this.ul.classList.add("u-marginbottommedium") : this.ul.classList.remove("u-marginbottommedium")) } }), i(99); var g = i(1), v = i.n(g); customElements.define("bux-loader", class extends n { constructor() { super(), this.isInit = !1, this.oldState = !1 } static get observedAttributes() { return ["loading"] } connectedCallback() { this.isInit || (this.innerHTML = '\n      <div class="c-loader" role="status" aria-busy="true" aria-live="polite">\n        <div class="c-loader__wrapper">\n          <bux-progress-ring loading class="c-loader__progress"></bux-progress-ring>\n        </div>\n      </div>', this.container = this.querySelector(".c-loader"), this._toggleLoading(this.loading), this.isInit = !0) } attributeChangedCallback() { this.isInit && v()((() => this._toggleLoading(this.loading)), 150)() } set loading(t) { Boolean(t) ? this.setAttribute("loading", "") : this.removeAttribute("loading") } get loading() { return this.hasAttribute("loading") && "false" !== this.getAttribute("loading") } _toggleLoading(t) { t ? (this.container.style.display = "", setTimeout((() => { this.container.classList.add("is-loading") }), 250)) : (this.container.classList.remove("is-loading"), setTimeout((() => { this.container.style.display = "none" }), 250)) } }), i(101), customElements.define("bux-message", class extends n { constructor() { super(), this.type = "info", this.isInit = !1 } connectedCallback() { if (!this.isInit) { for (this.type = this.getAttribute("type") || this.type, this.setMessage(this.type), this.tpl = document.createElement("template"), this.tpl.innerHTML = this.template(), this.wrap = this.tpl.content.querySelector(".c-message__content"); this.children.length > 0;)this.wrap.appendChild(this.children[0]); this.appendChild(this.tpl.content), this.isInit = !0 } } setMessage(t) { switch (t) { case "warning": this.icon = "exclamation-triangle", this.class = "c-message--" + this.type; break; case "info": this.icon = "info-cercle", this.class = "c-message--" + this.type; break; case "error": this.icon = "croix-suppr", this.class = "c-message--" + this.type; break; case "alert": this.class = "c-message--" + this.type } } template() { return `\n        <div class="c-message ${this.class}" role="alert" aria-live="assertive">\n\n        ${this.icon ? `\n        <bux-svg data-icon="${this.icon}" data-class="c-icon c-message__icon"></bux-svg>\n        ` : ""}\n          <div class="c-message__content"></div>\n        </div>\n      ` } }), i(102), customElements.define("bux-nav-bar", class extends n { constructor() { super(), this.isInit = !1, this.isDataSet = !1, this.isEventRemove = !1, this._data = null, this._dataOld = null, this.activeItem = null, this.activeItemIndex = null, this.eventFunct = null } get data() { return this._data } checkIfDataChange(t, e) { if (!t || !e) return !1; if (t.length !== e.length) return !1; let i = !0; return t.some(((t, s) => t.label === e[s].label && t.sublabel === e[s].sublabel && t.path === e[s].path || (i = !1, !1))), i } resetComponent() { this.container.style.display = "none", this.isDataSet = !1, this.list.innerHTML = "" } set data(t) { if (this._dataOld = this._data, this._data = t, this.isInit) if (this.isDataSet) { if (!this._data) return void this.resetComponent(); if (!this.checkIfDataChange(this._data, this._dataOld)) return this.resetComponent(), void this.setData(); const t = this.findActiveInData(this._data); if (this.activeItemIndex === t) return void (this._data[this.activeItemIndex] && this._data[this.activeItemIndex].submenu && (this.activeItem.querySelector("bux-nav-bar").data = this._data[this.activeItemIndex].submenu)); this.removeActive(), this.setActive(t) } else this.setData() } connectedCallback() { if (this.isInit && this.isEventRemove && this.addEvent(), this.isInit) return; this.type = this.getAttribute("type"), this.noBorderBottom = this.hasAttribute("noborderbottom"); const t = document.createElement("template"); if (t.innerHTML = '\n        <nav class="c-nav" role="navigation" style="display:none">\n          <ul class="c-nav__list"></ul>\n        </nav>', this.container = t.content.querySelector(".c-nav"), this.list = t.content.querySelector(".c-nav__list"), this.hasAttribute("bubble-effect")) { const t = document.createElement("div"); t.classList.add("elastic-element"), this.elasticElement = t, this.container.appendChild(t), this.addEvent() } this.setStyle(), this.setData(), this.appendChild(t.content), this.isInit = !0 } findActiveInData(t) { let e = 0; const i = t.length; for (; e < i; e++)if (t[e].isActive) return e; return -1 } setActive(t) { -1 !== t && (this.activeItem = this.items[t], this.activeItem.setAttribute("active", "true"), this.activeItemIndex = t, this.hasAttribute("bubble-effect") && this.setPosAndWidthBubble(), this._data[t].submenu) && (this.activeItem.querySelector("bux-nav-bar").data = this._data[t].submenu) } removeActive() { this.activeItem && (this.activeItem.removeAttribute("active"), this._data[this.activeItemIndex].submenu) && (this.activeItem.querySelector("bux-nav-bar").data = this._data[this.activeItemIndex].submenu), this.activeItemIndex = -1, this.activeItem = null } setData() { this._data && (this.container.removeAttribute("style"), this.list.appendChild(this.fillData(this._data)), this.items = this.list.querySelectorAll("bux-nav-bar-item"), this.setActive(this.findActiveInData(this._data)), this.isDataSet = !0) } fillData(t) { const e = document.createElement("template").content, i = t.length - 1; return t.forEach(((s, a) => { if (s.submenu && (!Array.isArray(s.submenu) || Array.isArray(s.submenu) && 0 === s.submenu.length) && (delete s.submenu, delete t[a].submenu), s.submenu) { const t = this.renderOneItem(s, 0 === a, a === i), n = document.createElement("bux-nav-bar"); n.setAttribute("type", "primarysub"), n.data = s.submenu, t.children[0].appendChild(n), e.appendChild(t) } else e.appendChild(this.renderOneItem(s, 0 === a, a === i)) })), e } renderOneItem(t, e = !1, i = !1) { const s = document.createElement("li"); s.classList.add("c-nav__list-li"), e && s.classList.add("c-nav__list-li--first"), i && s.classList.add("c-nav__list-li--last"); const a = document.createElement("bux-nav-bar-item"); let n = ""; return t.path ? n = t.path : t.navtop && t.navtop[0] && t.navtop[0].path && (n = t.navtop[0].path), a.setAttribute("data-path", n), t.type && a.setAttribute("type", t.type), t.icon && a.setAttribute("data-icon", t.icon), t.label && a.setAttribute("data-label", t.label), t.badge1 && a.setAttribute("data-badge-1", t.badge1), t.badge2 && a.setAttribute("data-badge-2", t.badge2), t.sublabel && a.setAttribute("data-sublabel", t.sublabel), t.a11yLabel && a.setAttribute("a11y-label", t.a11yLabel), t.isActive && a.setAttribute("active", "true"), t.externalLink && a.setAttribute("externalLink", "true"), t.identifier && a.setAttribute("data-identifier", t.identifier), s.appendChild(a), s } setStyle() { switch (this.type) { case "primary": this.container.classList.add("c-nav--primary"); break; case "primarysub": this.container.classList.add("c-nav--primary-sub"); break; case "secondary": this.container.classList.add("c-nav--secondary"); break; case "footer": this.container.classList.add("c-nav--footer"); break; case "footerauth": this.container.classList.add("c-nav--footer", "c-nav--footer__auth"); break; case "footermobile": this.container.classList.add("c-nav--footermobile"); break; case "sociaux": this.container.classList.add("c-nav--sociaux") }this.noBorderBottom && this.container.classList.add("c-nav--noborderbottom") } toogleActive(t) { this.activeItem && this.activeItem.removeAttribute("active"), t.setAttribute("active", "true"), this.activeItem = t } setCNavItem() { return this.activeItem ? (this.cNavActiveItem = this.activeItem.querySelector(".c-nav__item"), this.cNavActiveItem) : null } setPosAndWidthBubble() { this.setCNavItem() && (this.elasticElement.style.left = this.cNavActiveItem.offsetLeft + "px", this.elasticElement.style.width = this.cNavActiveItem.offsetWidth + "px") } disconnectedCallback() { this.removeEvent() } addEvent() { this.hasAttribute("bubble-effect") && (this.eventFunct = this.resizeDebounce((() => { this.setPosAndWidthBubble() })), window.addEventListener("resize", this.eventFunct), this.isEventRemove = !1) } removeEvent() { this.eventFunct && (window.removeEventListener("resize", this.eventFunct), this.isEventRemove = !0) } resizeDebounce(t) { let e = 0; return i => { e && clearTimeout(e), e = setTimeout(t, 100, i) } } }), customElements.define("bux-nav-bar-item", class extends n { constructor() { super(), this.isInit = !1, this.active = !1, this.transitionendEventHandler = this.transitionendEvent.bind(this), this.idPrefixe = "bux-nav-bar-item-" + (Math.floor(1e4 * Math.random()) + 2) } static get observedAttributes() { return ["active"] } attributeChangedCallback(t, e, i) { this[t] = i, this.isInit && (this.setActif(), this.setCurrentPage()) } setActif() { "true" == this.active ? (this.wrap.classList.add("is-active"), this.wrap.children[0].classList.add("is-active"), this.expandSection()) : (this.wrap.classList.remove("is-active"), this.wrap.children[0].classList.remove("is-active"), this.collapseSection()) } setCurrentPage() { this.anchor && ("true" == this.active ? this.anchor.setAttribute("aria-current", "page") : this.anchor.removeAttribute("aria-current")) } connectedCallback() { if (this.isInit) return; this.haveSlot = this.childNodes.length > 0, this.path = this.getAttribute("data-path") || !1, this.label = this.getAttribute("data-label"), this.sublabel = this.getAttribute("data-sublabel"), this.badge1 = this.getAttribute("data-badge-1"), this.badge2 = this.getAttribute("data-badge-2"), this.icon = this.getAttribute("data-icon"), this.a11yLabel = this.getAttribute("a11y-label"), this.identifier = this.getAttribute("data-identifier") || null, this.type = this.getAttribute("type") || "link", this.externalLink = this.hasAttribute("externalLink") && "false" != this.getAttribute("externalLink"); const t = document.createElement("template"); if (this.haveSlot) for (t.innerHTML = this.templateSlot(), this.btn = t.content.querySelector(".c-nav-bar-item--btn"), this.cont = t.content.querySelector(".c-nav-bar-item--cont"); this.childNodes.length > 0;)this.cont.appendChild(this.childNodes[0]); else t.innerHTML = this.templateWithoutSlot(); this.wrap = t.content.querySelector(".c-nav__item"), this.setActif(), this.anchor = t.content.querySelector("a"), this.setCurrentPage(), this.appendChild(t.content), this.isInit = !0, this.dispatchEvent(new CustomEvent("mount", { bubbles: !0, cancelable: !1, detail: { identifier: this.identifier } })) } collapseSection() { if (!this.haveSlot) return; this.btn.setAttribute("aria-expanded", "false"); const t = this.cont.scrollHeight, e = this.cont.style.transition; this.cont.style.transition = "", requestAnimationFrame((() => { this.cont.style.height = t + "px", this.cont.style.transition = e, requestAnimationFrame((() => { this.cont.style.height = "0px", this.cont.setAttribute("aria-hidden", "true"), this.cont.style.visibility = "hidden" })) })) } expandSection() { if (!this.haveSlot) return; this.btn.setAttribute("aria-expanded", "true"); const t = this.cont.scrollHeight; this.cont.style.height = t + "px", this.cont.addEventListener("transitionend", this.transitionendEventHandler) } transitionendEvent() { this.cont.removeEventListener("transitionend", this.transitionendEventHandler), this.cont.style.height = null, this.cont.setAttribute("aria-hidden", "false"), this.cont.style.visibility = "" } templateSlot() { return `\n        <div class="c-nav__item">\n          <button\n          aria-controls="${this.idPrefixe}"\n          class="c-nav-bar-item--btn c-nav-bar-item--btn-chevron"\n          aria-expanded="true"\n          ${this.identifier ? `id="${this.identifier}"` : ""}\n          >\n          ${this.templateIcon()}\n          ${this.templateLabel()}\n          ${this.templateSubLabel()}\n          </button>\n          <div class="c-nav-bar-item--cont" id="${this.idPrefixe}"></div>\n        </div>\n      ` } templateWithoutSlot() { return "button" === this.type ? this.templateBtn() : this.path ? this.templateA() : this.templateDiv() } templateIcon() { return this.icon ? `<bux-svg data-icon="${this.icon}" data-class="c-icon c-nav__icon"></bux-svg>` : "" } templateLabel() { return `\n        <span class="c-nav__item-label-wrap">\n            ${this.label ? `<span class="c-nav__item-label">${this.label}</span>` : ""}\n            ${this.badge1 ? `<span class="c-nav__item-label-badge c-nav__item-label-badge1">${this.badge1}</span>` : ""}\n            ${this.badge2 ? `<span class="c-nav__item-label-badge c-nav__item-label-badge2">${this.badge2}</span>` : ""}\n        </span>` } templateSubLabel() { return "\n        " + (this.sublabel ? `\n          <small class="c-nav-link__sublabel">${this.sublabel}</small>\n          ` : "") } templateBtn() { return `\n        <div class="c-nav__item">\n          <button class="nav-bar-item-a nav-bar-item-a-btn"\n          ${this.a11yLabel ? `aria-label="${this.a11yLabel}"` : ""}\n          ${this.identifier ? `id="${this.identifier}"` : ""}\n          >\n          ${this.templateIcon()}\n          ${this.templateLabel()}\n          ${this.templateSubLabel()}\n          </button>\n        </div>\n      ` } templateA() { return `\n        <div class="c-nav__item">\n          <a class="nav-bar-item-a" href="${this.path}"\n            ${this.externalLink ? 'target="_blank" rel="noopener"' : ""}\n            ${this.a11yLabel ? `aria-label="${this.a11yLabel}"` : ""}\n            ${this.identifier ? `id="${this.identifier}"` : ""}\n            >\n            ${this.templateIcon()}\n            ${this.templateLabel()}\n            ${this.templateSubLabel()}\n          </a>\n        </div>\n      ` } templateDiv() { return `\n          <div class="c-nav__item">\n            <div class="nav-bar-item-div"\n              ${this.a11yLabel ? `aria-label="${this.a11yLabel}"` : ""}\n              ${this.identifier ? `id="${this.identifier}"` : ""}\n              >\n              ${this.templateIcon()}\n              ${this.templateLabel()}\n              ${this.templateSubLabel()}\n              </div>\n          </div>\n        ` } }), i(103), customElements.define("bux-progress-bar", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.value = this.getAttribute("data-value-primary") || this.getAttribute("data-value") || 0, this.valueSecond = this.getAttribute("data-value-secondary") || null, this.height = this.getAttribute("data-height") || null, this.hidevalues = this.hasAttribute("hidevalues") && "false" !== this.getAttribute("hidevalues"), this.nomargin = this.hasAttribute("nomargin") && "false" !== this.getAttribute("nomargin"), this.hidemobile = this.hasAttribute("hidemobile") && "false" !== this.getAttribute("hidemobile"), this.size = this.getAttribute("size") || "md", this.state = this.getAttribute("state") || "empty"; const t = document.createElement("template"); for (t.innerHTML = this.template(), this.progressBarPrimary = t.content.querySelector(".c-progress__bar--primary"), this.progressBarSecondary = t.content.querySelector(".c-progress__bar--secondary"), this.heightEl = t.content.querySelector(".c-progress"); this.childNodes.length > 0;)this.progressBarPrimary.appendChild(this.childNodes[0]); this.setProgressPrimary(this.value), this.setProgressSecondary(this.valueSecond), this.setHeight(this.height), this.setClasses(), this.hideValues(), this.appendChild(t.content), this.setLabel(), this.isInit = !0 } static get observedAttributes() { return ["data-value", "data-value-primary", "data-value-secondary", "data-height", "hidevalues", "nomargin", "hidemobile", "data-label", "state"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (s) { case "state": this.setClasses(); break; case "label": this.setLabel(); break; case "value": case "value-primary": this.setProgressPrimary(i); break; case "value-secondary": this.setProgressSecondary(i); break; case "height": this.setHeight(i); break; case "hidevalues": this.hidevalues = this.hasAttribute("hidevalues") && "false" !== this.getAttribute("hidevalues"), this.hideValues(); break; case "nomargin": this.nomargin = this.hasAttribute("nomargin") && "false" !== this.getAttribute("nomargin"), this.setClasses(); break; case "hidemobile": this.hidemobile = this.hasAttribute("hidemobile") && "false" !== this.getAttribute("hidemobile"), this.setClasses() } } setProgressPrimary(t) { this.progressBarPrimary && (this.progressBarPrimary.style.width = t + "%", this.progressBarPrimary.setAttribute("aria-valuenow", t), !1 === this.hidevalues && (this.progressBarPrimary.textContent = t)) } setProgressSecondary(t) { this.progressBarSecondary && (this.progressBarSecondary.style.width = t + "%", this.progressBarSecondary.setAttribute("aria-valuenow", t), !1 === this.hidevalues && (this.progressBarSecondary.textContent = t)) } setHeight(t) { this.heightEl && (this.heightEl.style.height = t + "px", this.progressBarPrimary.style.height = t + "px", this.progressBarSecondary && (this.progressBarSecondary.style.height = t + "px")) } hideValues() { !1 === this.hidevalues ? (this.progressBarPrimary.textContent = this.value, this.progressBarSecondary && (this.progressBarSecondary.textContent = this.valueSecond)) : (this.progressBarPrimary.textContent = null, this.progressBarSecondary && (this.progressBarSecondary.textContent = null)) } setClasses() { let t = "c-progress"; this.nomargin && (t += " c-progress--no-margin"), this.hidemobile && (t += " c-progress--no-mobile"), "xs" === this.size && (t += " c-progress--size-xs"), this.heightEl.setAttribute("class", t), this.setState() } setState() { switch (this.classList.remove("c-progress--state__valid", "c-progress--state__error", "c-progress--state__warning"), this.getAttribute("state")) { case "valid": this.classList.add("c-progress--state__valid"); break; case "error": this.classList.add("c-progress--state__error"); break; case "warning": this.classList.add("c-progress--state__warning") } } setLabel() { const t = this.querySelector(".c-progress-label"), e = this.getAttribute("data-label"); t && e ? (t.innerHTML = e, t.style.display = "") : t.style.display = "none" } template() { return `\n      <div class="c-progress-label" style="display:none;"></div>\n      <div class="c-progress">\n        <div aria-hidden="true" class="c-progress__bar c-progress__bar--primary" role="progressbar" aria-valuenow="${this.value}" \n        aria-valuemin="0" aria-valuemax="100"></div>\n        ${this.valueSecond ? `<div aria-hidden="true" class="c-progress__bar c-progress__bar--secondary" role="progressbar" aria-valuenow="${this.valueSecond}" aria-valuemin="0" aria-valuemax="100"></div>` : ""}\n      </div>\n      ` } }), i(104), customElements.define("bux-progress-ring", class extends n { constructor() { super(), this.value = 0, this.radius = 50, this.stroke = 8, this.normalizedRadius = this.radius - this.stroke / 2, this.circumference = 2 * this.normalizedRadius * Math.PI, this.circle = null, this.progessContent = null, this.isInit = !1 } connectedCallback() { if (this.value = this.getAttribute("data-value") || 0, this.a11yLabel = this.getAttribute("a11y-label") || "", this.isInit) return; const t = document.createElement("template"); for (t.innerHTML = this.template(), this.circle = t.content.querySelector("circle"), this.progessContent = t.content.querySelector(".c-progress-ring__content"), this.progressRing = t.content.querySelector(".c-progress-ring"), this.hasAttribute("loading") && this.setLoading(); this.childNodes.length > 0;)this.progessContent.appendChild(this.childNodes[0]); this.setProgress(this.value), this.appendChild(t.content), this.isInit = !0 } static get observedAttributes() { return ["data-value", "a11y-label", "loading"] } attributeChangedCallback(t, e, i) { this.setProgress(i), "a11y-label" == t && this.progressRing && this.progressRing.setAttribute("aria-label", i), "loading" == t && (this.value = 25, this.progressRing && this.progressRing.classList.add("c-progress-ring--loading")) } setProgress(t) { const e = this.circumference - t / 100 * this.circumference; this.circle && (this.circle.style.strokeDashoffset = e) } setLoading() { this.value = 25, this.stroke = 12, this.progressRing && this.progressRing.classList.add("c-progress-ring--loading") } template() { return `\n        <div class="c-progress-ring" aria-label="${this.a11yLabel}">\n          <svg\n            class="c-progress-ring__svg"\n            viewBox="0 0 100 100"\n            width="40" height="40"\n            aria-hidden="true"\n          >\n            <circle\n              class="c-progress-ring__circle"\n              stroke-dasharray="${this.circumference} ${this.circumference}"\n              style="stroke-dashoffset:${this.circumference}"\n              stroke-width="${this.stroke}"\n              fill="transparent"\n              r="${this.normalizedRadius}"\n              cx="${this.radius}"\n              cy="${this.radius}"\n            />\n          </svg>\n          <svg class="c-progress-ring__svg c-progress-ring__svg--shadow" viewBox="0 0 100 100" width="40" height="40" aria-hidden="true">\n            <circle class="c-progress-ring__shadow" stroke-dasharray="301.59289474462014 301.59289474462014" style="stroke-dashoffset: 0;" stroke-width="${this.stroke}" fill="transparent" r="${this.normalizedRadius}" cx="${this.radius}" cy="${this.radius}"></circle>\n          </svg>\n          <div class="c-progress-ring__content"></div>\n        </div>\n      ` } }), i(105), customElements.define("bux-radio-button", class extends n { constructor() { super(), this.isInit = !1, this.idPrefixe = "bux-radio-" + (Math.floor(1e4 * Math.random()) + 2) } static get observedAttributes() { return ["data-name", "checked", "data-value"] } attributeChangedCallback(t, e, i) { if (this.isInit) switch (t) { case "data-name": this.name = i, this.input.setAttribute("name", this.name); break; case "data-value": this.value = i, this.input.setAttribute("value", this.value); break; case "checked": if (this._checked = this.hasAttribute("checked") && "false" !== this.getAttribute("checked"), !this.isInit || this.fromInput) return; this.setCheck() } } set checked(t) { Boolean(t) ? this.setAttribute("checked", "") : this.removeAttribute("checked") } get checked() { return this._checked } setCheck() { this.input && (this.input.checked = this._checked) } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.label = this.getAttribute("data-label") || "", this.name = this.getAttribute("data-name") || "", this.value = this.getAttribute("data-value") || "", this._checked = this.hasAttribute("checked") && "false" !== this.getAttribute("checked"); const t = document.createElement("template"); t.innerHTML = `\n          <input class="c-radio__input" id="${this.idPrefixe}" type="radio" ${this.name ? `name="${this.name}"` : ""}\n      ${this.value ? `value="${this.value}"` : ""}\n      >\n          <label class="c-radio__label" for="${this.idPrefixe}">${this.label}</label>\n        `, this.input = t.content.querySelector("input"), this.input.addEventListener("change", (t => { this.fromInput = !0, t.target.checked ? this.setAttribute("checked", "true") : this.removeAttribute("checked"), this.fromInput = !1 })), this.setCheck(), this.appendChild(t.content) } }), i(106); const f = ["-moz-range-track", "-webkit-slider-runnable-track", "-ms-fill-lower", "-ms-fill-upper"]; customElements.define("bux-range", class extends n { constructor() { super(), this.isInit = !1, this.idPrefixe = "buxrange" + (Math.floor(1e4 * Math.random()) + 2), this.handleKeyEvent = this.keyEvent.bind(this), this.handleChangeEvent = this.changeEvent.bind(this) } static get observedAttributes() { return ["data-label-left", "data-label-right", "data-label-middle", "data-label-middle-position", "data-value-min", "data-value-max", "data-value", "data-step", "data-dash-position"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (s) { case "labelLeft": this.labelLeftElm.innerHTML = this.labelLeft; break; case "labelRight": this.labelRightElm.innerHTML = this.labelRight; break; case "labelMiddle": this.labelMiddleElm.innerHTML = this.labelMiddle; break; case "valueMin": this.input.setAttribute("data-value-min", this.valueMin), this.input.setAttribute("aria-label", this.setAriaLabel()); break; case "valueMax": this.input.setAttribute("data-value-max", this.valueMax), this.input.setAttribute("aria-label", this.setAriaLabel()); break; case "step": this.input.setAttribute("data-step", this.step); break; case "value": if ("" == this.value) return void (this.value = e); this.input.value = this.value, this.input.setAttribute("data-value", this.value), this.input.setAttribute("aria-label", this.setAriaLabel()); break; case "labelMiddlePosition": this.setMiddleLabelPos(); break; case "dashPosition": this.setDash() } } connectedCallback() { if (this.isInit) return; this.initAttr("data-label-left"), this.initAttr("data-label-right"), this.initAttr("data-value-min"), this.initAttr("data-value-max"), this.initAttr("data-value"), this.initAttr("data-step"), this.initAttr("data-label-middle", ""), this.initAttr("data-label-middle-position", ""), this.initAttr("data-dash-position", ""); const t = document.createElement("template"); t.innerHTML = this.template(), this.input = t.content.querySelector("input"), this.labelLeftElm = t.content.querySelector(".c-bux-range__value--min"), this.labelRightElm = t.content.querySelector(".c-bux-range__value--max"), this.labelMiddleElm = t.content.querySelector(".c-bux-range__value--middle"), this.setMiddleLabelPos(), this.setDash(), this.input.addEventListener("input", this.handleChangeEvent), this.input.addEventListener("keydown", this.handleKeyEvent), this.appendChild(t.content), this.isInit = !0 } disconnectedCallback() { this.isInit && (this.input.removeEventListener("input", this.handleChangeEvent), this.input.removeEventListener("keydown", this.handleKeyEvent)) } initAttr(t, e) { const i = this.toCamelCase(t); this.hasAttribute(t) ? this[i] = this.getAttribute(t) : void 0 === e ? this.setAttribute(t, "") : this.setAttribute(t, e) } changeEvent(t) { this.setAttribute("data-value", t.target.value), this.input.setAttribute("data-value", t.target.value) } keyEvent(t) { let e = 0; switch (t.which) { case 37: case 109: case 54: e = Number(this.value) - Number(this.step), e >= this.valueMin && this.setAttribute("data-value", e); break; case 39: case 107: case 187: e = Number(this.value) + Number(this.step), e <= this.valueMax && this.setAttribute("data-value", e) } } setAriaLabel() { return `La valeur actuelle est de ${this.value}. Le minimun est ${this.labelLeft} et le maximum est de ${this.labelRight}` } setMiddleLabelPos() { this.labelMiddleElm && (this.labelMiddleElm.style.left = this.labelMiddlepos) } makeStyleDashRule(t) { return "#" + this.input.id + ".c-bux-range__input.c-bux-range__input--dash::" + t + " { background-size: " + this.dashPos + " 10px, auto !important }" } setRangeSheet() { if (this.rangeSheet) for (; this.rangeSheet.cssRules.length > 0;)this.rangeSheet.deleteRule(0); else this.rangeSheet = document.head.appendChild(document.createElement("style")).sheet } setDash() { this.dashPos && (this.setRangeSheet(), f.forEach((t => { try { this.rangeSheet.insertRule(this.makeStyleDashRule(t), 0) } catch (t) { } }))) } template() { return `\n        <div class="c-bux-range">\n          <div class="c-bux-range__input_wrap">\n            <input \n              type="range"\n              class="c-bux-range__input ${this.dashPos ? "c-bux-range__input--dash" : ""}"\n              min="${this.valueMin}"\n              max="${this.valueMax}"\n              value="${this.value}"\n              step="${this.step}"\n              aria-label="${this.setAriaLabel()}"\n              id="${this.idPrefixe}"\n            >\n          </div>\n          <div class="c-bux-range__value_wrap" aria-hidden="true">\n            <span class="c-bux-range__value c-bux-range__value--min">${this.labelLeft}</span>\n            ${"" === this.labelMiddle ? "" : `<span class="c-bux-range__value c-bux-range__value--middle">${this.labelMiddle}</span>`}\n            <span class="c-bux-range__value c-bux-range__value--max">${this.labelRight}</span>\n          </div>\n        </div>\n      ` } }), i(107), customElements.define("bux-row", class extends n { static get observedAttributes() { return ["link", "radio", "data-amount", "data-currency", "data-date", "data-label", "data-sublabel"] } constructor() { super(), this.isInit = !1 } attributeChangedCallback(t, e, i) { if (this.isInit) switch (this[this.toCamelCase(t)] = i, t) { case "radio": this.container && this._setAsRadio(); break; case "link": this.container && this._setAsLink(); break; case "data-amount": this._setAmount(); break; case "data-currency": this._setCurrency(); break; case "data-date": this._setDate(); break; case "data-label": this._setLabel(); break; case "data-sublabel": this._setSubLabel() } } connectedCallback() { if (!this.isInit) { for (this.amount = this.getAttribute("data-amount") || "", this.currency = this.getAttribute("data-currency") || "", this.date = this.getAttribute("data-date") || "", this.label = this.getAttribute("data-label") || "", this.sublabel = this.getAttribute("data-sublabel") || "", this.link = this.getAttribute("data-link") || "", this.a11yLabel = this.getAttribute("a11y-label") || "", this.noborderbottom = this.hasAttribute("noborderbottom") && "false" !== this.getAttribute("noborderbottom"), this.nopaddingleft = this.hasAttribute("nopaddingleft") && "false" !== this.getAttribute("nopaddingleft"), this.nopaddingright = this.hasAttribute("nopaddingright") && "false" !== this.getAttribute("nopaddingright"), this.tpl = document.createElement("template"), this.tpl.innerHTML = this.template(), this.slotsWrap = this.tpl.content.querySelector(".slot"); this.children.length > 0;)this.slotsWrap.appendChild(this.children[0]); this.container = this.tpl.content.querySelector(".c-row"), this._setAsLink(), this._setAsRadio(), this.appendChild(this.tpl.content), this.isInit = !0 } } renderDate() { return this.date ? `\n      <div class="c-row__cell c-row__cell--date">\n        ${this.date}\n      </div>\n      ` : "" } _setDate() { if (!this.date) return; const t = this.querySelector(".c-row__cell--date"); t && (t.innerHTML = this.date) } renderLabel() { return this.label ? `<div class="c-row__label">${this.label}</div>` : "" } _setLabel() { if (!this.label) return; const t = this.querySelector(".c-row__label"); t && (t.innerHTML = this.label) } renderSubLabel() { return this.sublabel ? `<div class="c-row__sublabel">${this.sublabel}</div>` : "" } _setSubLabel() { if (!this.sublabel) return; const t = this.querySelector(".c-row__sublabel"); t && (t.innerHTML = this.sublabel) } renderAmount() { return this.amount ? `\n        <div class="c-row__cell c-row__cell--amount">\n          <bux-amount data-value=${this.amount} ${this.currency ? `data-currency="${this.currency}"` : ""}></bux-amount>\n        </div>\n      ` : "" } _setAmount() { if (!this.amount) return; const t = this.querySelector(".c-row__cell--amount bux-amount"); t && t.setAttribute("data-value", this.amount) } _setCurrency() { if (!this.currency) return; const t = this.querySelector(".c-row__cell--amount bux-amount"); t && t.setAttribute("data-currency", this.currency) } renderLink() { if (!this.link) return ""; let t = ""; return this.a11yLabel ? t = 'aria-label="' + this.a11yLabel + '"' : this.label && (t = 'aria-label="Voir le détail de : ' + this.label + '"'), `\n        <bux-svg data-icon="chevron" data-class="c-svg c-row__icon-link"></bux-svg>\n        <a class="c-row__anchor" href="${this.link}" ${t}></a>\n      ` } _setAsLink() { if (this.hasAttribute("link") && !this.hasAttribute("data-link")) { const t = document.createElement("bux-svg"); t.setAttribute("data-icon", "chevron"), t.setAttribute("data-class", "c-svg c-row__icon-link"), this.container.classList.add("c-row--link"), this.container.appendChild(t) } } renderRadio() { if (this.hasAttribute("radio") && "false" != this.getAttribute("radio")) { const t = this.label + this.sublabel, e = "bux-radio-" + (Math.floor(1e4 * Math.random()) + 2); return `\n      <div class="c-row__cell--input-wrap">\n        <input id="${e}" type="radio" class="c-row__cell--input" name=${this.getAttribute("radio")}></input>\n        <label for=${e} class="c-row__cell--label" >\n          <span class="accessi">${t}</span>\n        </label>\n      </div>\n      ` } return "" } _setAsRadio() { this.hasAttribute("radio") && !this.hasAttribute("data-radio") && (this.container.classList.add("c-row--radio"), this.addEventListener("click", (() => { const t = this.querySelector(".c-row__cell--input"); t && !t.checked && (t.checked = !0) }))) } template() { return `\n      <div class="c-row ${this.radio ? "c-row--radio" : ""} ${this.link ? "c-row--link" : ""} ${this.noborderbottom ? "c-row--noborderbottom" : ""} ${this.nopaddingleft ? "u-nopaddingleft" : ""} ${this.nopaddingright ? "u-nopaddingright" : ""}">\n        ${this.renderRadio()}\n        ${this.renderDate()}\n        <div class="c-row__cell c-row__cell--content">\n            ${this.renderLabel()}\n            ${this.renderSubLabel()}\n          <div class="slot"></div>\n        </div>\n        ${this.renderAmount()}\n        ${this.renderLink()}\n      </div>\n      ` } }), i(108), customElements.define("bux-row-edit", class extends n { constructor() { super(), this.isInit = !1, this.helpEventFunction = () => this.dispatchEvent(new CustomEvent("help")), this.editEventFunction = () => this.dispatchEvent(new CustomEvent("edit")) } static get observedAttributes() { return ["nomarginbottom", "data-label-left", "data-label-right", "data-help", "editable", "data-amount"] } attributeChangedCallback(t, e, i) { this[this.toCamelCase(t)] = i, this.isInit && this.render() } connectedCallback() { this.isInit || (this.labelleft = this.getAttribute("data-label-left") || this.labelLeft, this.labelright = this.getAttribute("data-label-right") || this.labelRight, this.helpleft = this.getAttribute("data-help") || this.help, this.amount = this.getAttribute("data-amount") || this.amount, this.editable = this.getAttribute("editable") || this.editable, this.editableLink = this.getAttribute("data-editable-link") || this.editableLink, this.nomarginbottom = this.hasAttribute("nomarginbottom") && "false" !== this.getAttribute("nomarginbottom"), this.render(), this.isInit = !0) } disconnectedCallback() { this.removeEvent() } addEvent() { this.helpleftBtn = this.querySelector(".row-edit-left-help"), this.helpleftBtn && this.helpleftBtn.addEventListener("click", this.helpEventFunction), this.editBtn = this.querySelector(".row-edit-edit-btn"), this.editBtn && this.editBtn.addEventListener("click", this.editEventFunction) } removeEvent() { this.helpleftBtn && this.helpleftBtn.removeEventListener("click", this.helpEventFunction), this.editBtn && this.editBtn.removeEventListener("click", this.editEventFunction) } render() { this.removeEvent(), this.innerHTML = `<div class="row-edit-wrap row-edit-wrap-entouree ${"button" === this.editable || "link" === this.editable ? "row-edit-wrap-ico-ext" : ""}\n      ${this.nomarginbottom ? "u-nomarginbottom" : ""}">\n        <div class="row-edit">\n            <div class="row-edit-item">\n                <div class="row-edit-item-left">\n                    <span>${this.labelLeft}</span>\n                    ${"true" === this.help ? `\n                    <button aria-label="Accéder à l'aide pour ${this.labelLeft}" class="row-edit-btn row-edit-left-help">\n                        <bux-svg data-icon="interrogation-cercle" data-class="row-edit-action-svg"></bux-svg>\n                    </button>\n                    ` : ""}\n                </div>\n                <div class="row-edit-item-right ${this.amount ? "" : "row-edit-item-right-bold"}">\n                    ${this.labelRight ? `<span>${this.labelRight}</span>` : ""}\n                    ${this.amount ? `<bux-amount data-value="${this.amount}"></bux-amount>` : ""}\n                </div>\n            </div>\n            ${"link" === this.editable ? `\n            <div class="row-edit-edit">\n              <a href="${this.editableLink}" aria-label="aller vers la page d'édition de ${this.labelLeft}" class="row-edit-btn row-edit-edit-btn">\n              <bux-svg data-icon="crayon" data-class="row-edit-action-svg"></bux-svg>\n              </a>\n            </div>\n            ` : ""}\n            ${"button" === this.editable ? `\n            <div class="row-edit-edit">\n              <button aria-label="Editer ${this.labelLeft}" class="row-edit-btn row-edit-edit-btn">\n              <bux-svg data-icon="crayon" data-class="row-edit-action-svg"></bux-svg>\n              </button>\n            </div>\n            ` : ""}\n        </div>\n      </div>`, this.addEvent() } }), i(109), customElements.define("bux-row-icon", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.icon = this.getAttribute("data-icon") || "", this.label = this.getAttribute("data-label") || "", this.value = this.getAttribute("data-value") || "", this.classList.add("c-row-icon"); const t = document.createElement("template"); t.innerHTML = `\n        <div class="c-row-icon__circle">\n          <bux-svg data-icon="${this.icon}" data-class="c-btn--icon"></bux-svg>\n        </div>\n        `, this.appendChild(t.content); const e = document.createElement("div"); e.setAttribute("class", "c-row-icon__content"), e.innerHTML = `\n          <small>${this.label}</small>\n          <small>${this.value}</sp>\n      `, this.appendChild(e) } }), i(110), customElements.define("bux-row-simple", class extends n { static get observedAttributes() { return ["outline", "data-editable", "data-editable-label"] } constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0; const t = document.createElement("template"); for (t.innerHTML = '<div class="c-row-simple"></div>', this.container = t.content.querySelector(".c-row-simple"), this.children && this.children[1] && this.children[1].classList.add("c-row-simple-right"); this.children.length > 0;)this.container.appendChild(this.children[0]); this._setType(), this._setOutline(), this._setEditableLink(), this.appendChild(t.content) } attributeChangedCallback(t) { if (this.isInit) switch (t) { case "outline": this._setOutline(); break; case "data-editable": this._setEditableLink() } } get outline() { return this.hasAttribute("outline") && "false" !== this.getAttribute("outline") } set outline(t) { Boolean(t) ? this.setAttribute("outline", "") : this.removeAttribute("outline") } _setOutline() { this.hasAttribute("outline") ? this.container.classList.add("c-row-simple--outline") : this.container.classList.remove("c-row-simple--outline") } get editableLink() { return this.getAttribute("data-editable") } set editableLink(t) { this.setAttribute("data-editable", t) } get editableLinkLabel() { return this.getAttribute("data-editable-label") } set editableLinkLabel(t) { this.setAttribute("data-editable-label", t) } _setEditableLink() { if (this.hasAttribute("data-editable")) { const t = `\n          <a href="${this.editableLink}" title="${this.editableLinkLabel}">\n            <bux-svg data-icon="crayon"></bux-svg>\n          </a>\n        `, e = document.createElement("div"); e.innerHTML = t, e.classList.add("c-row-simple__edit"), this.container.appendChild(e), this.container.classList.add("c-row-simple--edit") } } _setType() { switch (this.type = this.getAttribute("type"), this.type) { case "small": this.container.classList.add("c-row-simple--small"); break; case "background": this.container.classList.add("c-row-simple--background") } } }), i(111), customElements.define("bux-select", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["layout", "data-value", "state", "data-label", "data-label-right", "required", "data-select-width", "data-error-msg", "nomargin"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if ("data-value" !== t && (this[s] = i), this.isInit) switch (s) { case "state": case "layout": case "nomargin": this.setClass(); break; case "value": this._value = i, this.selectEl.value = i; break; case "required": case "label": case "labelRight": this.setLabelAndAccess(); break; case "selectWidth": this.setWidth(); break; case "errorMsg": this.errorSpan.innerHTML = this.errorMsg, this.displayError() } } set value(t) { this.setAttribute("data-value", t) } get value() { return this._value } connectedCallback() { if (this.isInit) return; this.idPrefixe = "bux-select-" + (Math.floor(1e4 * Math.random()) + 2), this._value = this.getAttribute("data-value"), this.state = this.getAttribute("state") || "empty", this.label = this.getAttribute("data-label") || null, this.labelRight = this.getAttribute("data-label-right") || null, this.selectWidth = this.getAttribute("data-select-width") || null, this.errorMsg = this.getAttribute("data-error-msg") || null, this.nomargin = this.hasAttribute("nomargin") && "false" !== this.getAttribute("nomargin"), this.required = this.hasAttribute("required") && "false" !== this.getAttribute("required"), this.stepIn = this.hasAttribute("a11y-step-in") && "false" !== this.getAttribute("a11y-step-in"), this.stepOut = this.hasAttribute("a11y-step-out") && "false" !== this.getAttribute("a11y-step-out"); const t = document.createElement("template"); for (t.innerHTML = this.template(), this.wrap = t.content.querySelector(".bux-select-wrap"), this.labelEl = t.content.querySelector(".bux-select-label"), this.labelRightEl = t.content.querySelector(".bux-select-label-right"), this.errorDiv = t.content.querySelector(".bux-input-error-msg"), this.errorSpan = t.content.querySelector("#error-" + this.idPrefixe), this.selectEl = t.content.querySelector(".bux-select-select"); this.children.length > 0;)this.selectEl.appendChild(this.children[0]); this.selectEl.addEventListener("change", (t => { this.setAttribute("data-value", t.target.value) })), this.setLabelAndAccess(), this.setClass(), this.displayError(), this.setWidth(), this.setSteps(), this.appendChild(t.content), this.isInit = !0, this._instantiateOption() } displayError() { "error" === this.state && this.errorMsg ? this.errorDiv.style.display = "" : this.errorDiv.style.display = "none" } setClass() { let t = "bux-select-wrap "; switch ("align" === this.layout && (t += "bux-select-align "), this.state) { case "valid": t += "bux-select-valid "; break; case "error": t += "bux-select-error "; break; default: t += "bux-select-empty " }this.nomargin && (t += "c-select-wrap-nomargin "), this.wrap.className = t } setLabelAndAccess() { this.required = this.hasAttribute("required") && "false" !== this.getAttribute("required"), this.label && (this.required ? this.labelEl.innerHTML = this.label + '<span aria-hidden="true"> *</span>' : this.labelEl.innerHTML = this.label), this.labelRight ? (this.labelRightEl.textContent = this.labelRight, this.labelRightEl.style.display = "") : (this.labelRightEl.textContent = "", this.labelRightEl.style.display = "none"); let t = ""; this.label && (t += this.label), this.labelRight && (t += this.labelRight), this.required && (t += ". Ce champ est obligatoire."), t && this.labelEl.setAttribute("aria-label", t), this.selectEl.required = this.required } setWidth() { this.selectWidth && this.selectEl.setAttribute("style", `width:${this.selectWidth}px`) } setSteps() { if (!0 === this.stepIn) { const t = document.createElement("span"); t.setAttribute("class", "u-hidden-visually"), t.setAttribute("tabindex", 0), t.setAttribute("aria-label", "Début de la zone de saisie"), this.wrap.insertBefore(t, this.labelEl) } if (!0 === this.stepOut) { const t = document.createElement("span"); t.setAttribute("class", "u-hidden-visually"), t.setAttribute("tabindex", 0), t.setAttribute("aria-label", "Fin de la zone de saisie"), this.wrap.appendChild(t) } } _instantiateOption() { const t = Array.from(this.querySelectorAll("option")); return void 0 === this._value || null === this._value || 0 === this._value.length ? this.selectEl.value = t[0].value : this.selectEl.value = this._value } template() { return `\n        <div class="bux-select-wrap">\n          <label class="bux-select-label" for="${this.idPrefixe}"></label>\n          <select id="${this.idPrefixe}" class="bux-select-select"></select>\n          <span class="bux-select-label-right" aria-hidden="true"></span>\n\n            <div class="bux-input-error-msg">\n              <bux-message type="error" tabindex="0" id="error-${this.idPrefixe}">\n                <p>${this.errorMsg}</p>\n              </bux-message>\n            </div>\n          </div>\n        ` } }), customElements.define("bux-shortlink", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; const t = document.createElement("template"); if (t.innerHTML = this.template(), this.appendChild(t.content), "function" == typeof this.data.path) { const t = this.getElementsByTagName("a")[0]; t.href = window.location + "#", t.onclick = this.data.path } } template() { return `\n        <a class="c-widget-nav__link" href="${this.data.path}">\n          <bux-svg data-icon="${this.data.icon}" data-class="c-widget-nav__icon"></bux-svg>\n          <div class="c-widget-nav__link-text">${this.data.label}</div>\n        </a>\n        ` } }), i(112), customElements.define("bux-step", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["data-state", "data-label", "data-number"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (s) { case "state": this.setState(); break; case "label": this.setLabel(); break; case "number": this.setNumber() } } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.label = this.getAttribute("data-label") || "", this.state = this.getAttribute("data-state") || "", this.number = this.getAttribute("data-number") || ""; const t = document.createElement("template"); t.innerHTML = this.template(), this.numberEl = t.content.querySelector(".c-step__number"), this.labelEl = t.content.querySelector(".c-step__label"), this.stateLabelEl = t.content.querySelector(".c-step__a11y-label"), this.setNumber(), this.setLabel(), this.setState(), this.appendChild(t.content) } setLabel() { this.labelEl.textContent = this.label } setNumber() { if ("valid" === this.state) { this.numberEl.childNodes[1].textContent = null; const t = document.createElement("bux-svg"); t.setAttribute("data-icon", "coche"), this.numberEl.childNodes[1].appendChild(t) } else this.numberEl.childNodes[1].textContent = this.number, this.numberEl.childNodes[3].textContent = "Étape " + this.number } setState() { let t = "c-step__number c-step__number--", e = "c-step__label c-step__label--"; switch (this.numberEl.setAttribute("class", t += this.state), this.labelEl.setAttribute("class", e += this.state), this.state) { case "current": this.stateLabelEl.textContent = "Étape en cours"; break; case "valid": this.stateLabelEl.textContent = "Étape terminée"; break; case "upcoming": this.stateLabelEl.textContent = "Étape à venir" }this.setNumber() } template() { return '\n      <div class="c-step">\n        <div class="c-step__number">\n          <span aria-hidden=\'true\'></span>\n          <span class=\'u-hidden-visually\'></span>\n        </div>\n        <span class="c-step__label"></span>\n        <span class="u-hidden-visually c-step__a11y-label"></span>\n      </div>\n      ' } }), i(113), window.customElements.define("bux-svg", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["data-icon", "data-class"] } attributeChangedCallback(t, e, i) { this[this.toCamelCase(t)] = i, this.render() } connectedCallback() { this.isInit || (this.isInit = !0, this.icon = "deprecated-" + this.getAttribute("data-icon") || 0, this.classname = this.getAttribute("data-class") || "", this.render()) } render() { "" === this.icon ? this.innerHTML = "" : this.innerHTML = `\n        <svg width="40" height="40" aria-hidden="true" class="c-svg ${this.classname}">\n          <use xlink:href="#${this.icon}"></use>\n        </svg>` } }), i(114), customElements.define("bux-table", class extends n { static get observedAttributes() { return ["data-label-header", "data-title-footer", "data-label-footer", "data-link-footer"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (s) { case "labelHeader": this.setLabelHeader(); break; case "titleFooter": this.setTitleFooter(); break; case "labelFooter": this.setLabelFooter(); break; case "linkFooter": this.setLinkFooter() } } connectedCallback() { if (this.isInit) return; this.labelHeader = this.getAttribute("data-label-header"), this.titleFooter = this.getAttribute("data-title-footer"), this.labelFooter = this.getAttribute("data-label-footer"), this.linkFooter = this.getAttribute("data-link-footer"); const t = document.createElement("template"); t.innerHTML = this.template(); const e = t.content.querySelector(".c-table__container"); for (; this.childNodes.length > 0;)e.appendChild(this.childNodes[0]); this.appendChild(t.content), this.setLabelHeader(), this.setTitleFooter(), this.setLabelFooter(), this.setLinkFooter(), this.isInit = !0 } setLabelHeader() { const t = this.querySelector(".c-table__header"); this.labelHeader ? (t.innerHTML = this.labelHeader, t.style.display = "") : t.style.display = "none" } setTitleFooter() { const t = this.querySelector(".c-table__footer-title"); this.titleFooter ? (t.innerHTML = this.titleFooter, t.style.display = "") : t.style.display = "none", this.displayOrNotFooter() } setLabelFooter() { const t = this.querySelector(".c-table__footer-label"); this.labelFooter ? (t.innerHTML = this.labelFooter, t.style.display = "") : t.style.display = "none", this.displayOrNotFooter() } setLinkFooter() { const t = this.querySelector(".c-table__footer-link"); this.linkFooter ? (t.innerHTML = `\n        <bux-svg data-icon="chevron" data-class="c-svg c-table__footer-arrow"></bux-svg>\n        <a class="c-table__footer-anchor" href="${this.linkFooter}" title="Aller vers la page"><a>\n        `, t.style.display = "") : t.style.display = "none", this.displayOrNotFooter() } displayOrNotFooter() { const t = this.querySelector(".c-table__footer"); this.titleFooter || this.labelFooter || this.linkFooter ? t.style.display = "" : t.style.display = "none" } template() { return '\n        <div class="c-table">\n          <div class="c-table__header"></div>\n          <div class="c-table__container"></div>\n          <div class="c-table__footer">\n              <div class="c-table__footer-title"></div>\n              <div class="c-table__footer-label"></div>\n              <div class="c-table__footer-link"></div>\n            </div>\n        </div>' } }), i(115), customElements.define("bux-tabs", class extends HTMLElement { constructor() { super(), this.handleTabClickEvent = this.tabClickEvent.bind(this), this.handleTabKeyDownEvent = this.tabKeyDownEvent.bind(this), this.handleTabFocusEvent = this.tabFocusEvent.bind(this), this.idPrefixe = "bux-tabs-" + (Math.floor(1e4 * Math.random()) + 2), this.isInit = !1, this.isEventRemove = !1, this.keys = { end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, delete: 46 } } static get observedAttributes() { return ["tabactive"] } attributeChangedCallback(t, e, i) { this.isInit && this.switchTab(i) } get tabactive() { return this._tabactive } set tabactive(t) { this.setAttribute("tabactive", t) } connectedCallback() { if (this.neutralStart = this.hasAttribute("neutral-start") && "false" !== this.getAttribute("neutral-start"), !0 === this.neutralStart ? (this._tabactive = null, this.setAttribute("tabactive", "null")) : (this.hasAttribute("tabactive") ? this._tabactive = this.getAttribute("tabactive") : this._tabactive = 0, this.setAttribute("tabactive", "0")), this.isInit && this.isEventRemove && this.addEvents(), this.isInit) return; this.isInit = !0, this.type = this.getAttribute("type") || "default", this.noshadow = this.hasAttribute("noshadow") && "false" !== this.getAttribute("noshadow"), this.nocontainer = this.hasAttribute("nocontainer") && "false" !== this.getAttribute("nocontainer"), this.label = this.getAttribute("data-label") || null; const t = document.createElement("template"); "default" === this.type ? t.innerHTML = '\n        <div class="c-tabs">\n         <ul class="c-tabs__list" role="tablist"></ul>\n         <div class="c-tabs__cont"></div>\n        </div>\n      ' : "transparent" === this.type ? t.innerHTML = `\n        <div class="c-tabs c-tabs-dropdown">\n         ${this.label ? `<span>${this.label}</span>` : ""}\n         <ul class="c-tabs__list c-tabs__list-dropdown" role="tablist"></ul>\n         <div class="c-tabs__cont c-tabs__cont-transparent"></div>\n        </div>\n        ` : t.innerHTML = `\n        <div class="c-tabs c-tabs-dropdown">\n          ${this.label ? `<span>${this.label}</span>` : ""}\n         <ul class="c-tabs__list c-tabs__list-dropdown" role="tablist"></ul>\n         <div class="c-tabs__cont c-tabs__cont-dropdown"></div>\n        </div>\n      `, this.noshadow && t.content.querySelector(".c-tabs").classList.add("c-tabs--noshadow"), this.tablist = t.content.querySelector(".c-tabs__list"), this.cont = t.content.querySelector(".c-tabs__cont"); const e = this.querySelectorAll(".c-tabs__data"), i = e.length - 1; e.forEach(((t, e) => { this.makeOneEl(t, e, 0 === e, e === i, i) })), this.appendChild(t.content), this.tabs = this.tablist.querySelectorAll("a"), this.tabactiveElm = this.tabs[this._tabactive], this.panels = this.cont.querySelectorAll(".c-tabs__panel"), this.addEvents() } disconnectedCallback() { this.removeEvent() } tabClickEvent(t) { t.preventDefault(), this.switchTab(t.currentTarget) } tabFocusEvent(t) { t.target && "A" === t.target.tagName && !t.target.classList.contains("is-active") && this.switchTab(t.target, !1) } tabKeyDownEvent(t) { let e = null; switch (t.which) { case this.keys.end: event.preventDefault(), this.switchTab(this.tabs.length - 1); break; case this.keys.home: event.preventDefault(), this.switchTab(0); break; case this.keys.left: e = 0 === this._tabactive ? this.tabs.length - 1 : this._tabactive - 1, t.preventDefault(), this.tabs[e] && this.switchTab(this.tabs[e]); break; case this.keys.right: e = this._tabactive >= this.tabs.length - 1 ? 0 : this._tabactive + 1, t.preventDefault(), this.tabs[e] && this.switchTab(this.tabs[e]) } } addEvents() { this.tabs.forEach((t => { t.addEventListener("click", this.handleTabClickEvent), t.addEventListener("keydown", this.handleTabKeyDownEvent), t.addEventListener("focus", this.handleTabFocusEvent) })), this.isEventRemove = !1 } removeEvent() { this.tabs.forEach((t => { t.removeEventListener("click", this.handleTabClickEvent), t.removeEventListener("keydown", this.handleTabKeyDownEvent), t.removeEventListener("focus", this.handleTabFocusEvent) })), this.isEventRemove = !0 } getNewsTabEl(t) { let e = null, i = -1; if ("string" == typeof t || "number" == typeof t) this.tabs[t] && (e = this.tabs[t], i = t); else { const s = [...this.tabs].indexOf(t); -1 !== s && (e = t, i = s) } return { newTabElm: e, newTabIndex: i } } switchTab(t, e = !0) { const { newTabElm: i, newTabIndex: s } = this.getNewsTabEl(t); return null === i ? (this.tabactiveElm && (this.tabactiveElm.setAttribute("tabindex", "-1"), this.tabactiveElm.classList.remove("is-active"), this.tabactiveElm.parentElement.classList.remove("is-active")), this.panels[this._tabactive] && (this.panels[this._tabactive].hidden = !0, this.panels[this._tabactive].classList.remove("is-active")), this._tabactive = null, this.tabactiveElm = null, !1) : i !== this.tabactiveElm && (i.setAttribute("tabindex", "0"), i.setAttribute("aria-selected", "true"), i.classList.add("is-active"), i.parentElement.classList.add("is-active"), null !== this._tabactive && null !== this.tabactiveElm && (this.tabactiveElm.removeAttribute("aria-selected"), this.tabactiveElm.setAttribute("tabindex", "-1"), this.tabactiveElm.classList.remove("is-active"), this.tabactiveElm.parentElement.classList.remove("is-active"), this.panels[this._tabactive].hidden = !0, this.panels[this._tabactive].classList.remove("is-active")), this.panels[s].hidden = !1, this.panels[s].classList.add("is-active"), this._tabactive = s, this.tabactiveElm = i, this.setAttribute("tabactive", this._tabactive), document.activeElement !== i && e && i.focus(), !0) } makeOneEl(t, e, i = !1, s = !1, a) { this.tablist.appendChild(this.makeLi(t, e, i, s)), this.cont.appendChild(this.makeSection(t, e, i, s, a)) } makeLi(t, e, i = !1, s = !1) { const a = document.createElement("template"); let n = t.getAttribute("data-icon"); return n = n && "null" !== n ? `<bux-svg data-icon="${n}" data-class="c-icon"></bux-svg>` : "", a.innerHTML = `\n        <li\n          role="presentation"\n          class="c-tabs__item ${e == this._tabactive ? "is-active" : ""} ${i ? "c-tabs__item-first" : ""} ${s ? "c-tabs__item-last" : ""}"\n        >\n          <a\n            id="${this.idPrefixe}_${e}"\n            href="#section_${this.idPrefixe}_${e}"\n            role="tab"\n            tabindex="${e == this._tabactive ? "0" : "-1"}"\n            aria-selected="${e == this._tabactive}"\n            class="${e == this._tabactive ? "is-active" : ""}">\n              ${n}\n              <span>${t.title}</span>\n          </a>\n        </li>\n      `, a.content } makeSection(t, e, i = !1, s = !1, a) { const n = document.createElement("template"); if (n.innerHTML = `\n        <section\n          id="section_${this.idPrefixe}_${e}"\n          role="tabpanel"\n          aria-labelledby="${this.idPrefixe}_${e}"\n          tabindex="0"\n          class="c-tabs__panel ${i ? "c-tabs__panel-first" : ""} ${s ? "c-tabs__panel-last" : ""}"\n          ${e == this._tabactive ? "" : "hidden"}\n        >\n        </section>\n      `, "dropdown" !== this.type || this.nocontainer) n.content.querySelector("section").appendChild(t); else { const i = document.createElement("bux-container"); i.setAttribute("type", `dropdown-${e + 1}${a + 1}`), i.appendChild(t), n.content.querySelector("section").appendChild(i) } return n.content } }), i(116), customElements.define("bux-text", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.size = this.getAttribute("size") || "md", this.colorblack = this.hasAttribute("colorblack") && "false" !== this.getAttribute("colorblack"); const t = document.createElement("template"); for (t.innerHTML = '<span class="c-text"></span>', this.wrapSlot = t.content.querySelector(".c-text"); this.childNodes.length > 0;)this.wrapSlot.appendChild(this.childNodes[0]); this.setSize(), this.setColor(), this.appendChild(t.content), this.isInit = !0 } setColor() { this.colorblack ? this.wrapSlot.classList.add("c-text--black") : this.wrapSlot.classList.remove("c-text--black") } setSize() { switch (this.size) { case "sm": this.wrapSlot.classList.add("c-text--sm"); break; case "md": this.wrapSlot.classList.add("c-text--md"); break; case "xl": this.wrapSlot.classList.add("c-text--xl") } } }), customElements.define("bux-accordeon", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { this.isInit || (this.setAttribute("role", "list"), this.buxAccorItems = this.querySelectorAll("bux-accordeon-item"), this.buxAccorItems.forEach((t => { t.setAttribute("role", "listitem") })), this.isInit = !0) } }), i(117), customElements.define("bux-account-info", class extends HTMLElement { constructor() { super(), this.accountLabel = "", this.accountCoholder = "" } connectedCallback() { this.isInit || (this.render(), this.setAccountInfo(), this.isInit = !0) } static get observedAttributes() { return ["account-label", "account-holder", "account-coholder"] } attributeChangedCallback() { this.setAccountInfo() } getAccountInfo() { this.accountLabelWrapper = this.querySelector(".c-account-info__label"), this.accountHolderWrapper = this.querySelector(".c-account-info__holder"), this.accountCoHolderWrapper = this.querySelector(".c-account-info__coholder"), this.accountLabel = this.getAttribute("account-label"), this.accountHolder = this.getAttribute("account-holder"), this.accountCoHolder = this.getAttribute("account-coholder") } setAccountInfo() { this.getAccountInfo(), this.accountLabelWrapper && (this.accountLabelWrapper.textContent = this.accountLabel), this.accountHolderWrapper && (this.accountHolderWrapper.textContent = this.accountHolder), this.accountCoHolderWrapper && (this.accountCoHolderWrapper.textContent = this.accountCoHolder) } render() { this.innerHTML = this.template() } template() { return `\n      <section class="c-account-info u-text-center o-card-grid__item">\n        <div class="c-account-info__label u-text-body"></div>\n        <small class="u-text-smallprint">\n          <span class="c-account-info__holder"></span>${this.accountCoHolder ? ' & <span class="c-account-info__coholder"></span>' : ""}\n        </small>\n      </section>\n    ` } }), i(118), customElements.define("bux-account-tile", class extends HTMLElement { static get observedAttributes() { return ["data-account-model", "data-account-switch-account-id-btn", "data-account-type", "data-account-label", "data-account-label-level", "data-account-brand", "data-account-holder", "data-account-coholder", "data-account-details", "data-account-details-to-come-up", "data-account-details-number-of-versements", "data-account-details-amount-scheduled-payment", "data-account-details-amount-scheduled-currency", "data-account-details-amount-scheduled-payment-period", "data-account-amount", "data-account-currency", "data-account-link-transfert-url", "data-account-link-url", "data-updated-on", "data-account-warning", "shadow"] } constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.model = this.getAttribute("data-account-model"), this.linkBtnSwitch = this.getAttribute("data-account-switch-account-id-btn"), this.type = this.getAttribute("data-account-type"), this.label = this.getAttribute("data-account-label"), this.labelLevel = this.getAttribute("data-account-label-level"), this.brand = this.getAttribute("data-account-brand"), this.holder = this.getAttribute("data-account-holder"), this.coholder = this.getAttribute("data-account-coholder"), this.details = this.getAttribute("data-account-details"), this.detailsToComeUp = this.getAttribute("data-account-details-to-come-up"), this.detailsNumberVersements = this.getAttribute("data-account-details-number-of-versements"), this.detailsAmountScheduledPayment = this.getAttribute("data-account-details-amount-scheduled-payment"), this.detailsAmountScheduledCurrency = this.getAttribute("data-account-details-amount-scheduled-currency"), this.detailsAmountScheduledPaymentPeriod = this.getAttribute("data-account-details-amount-scheduled-payment-period"), this.transfertLinkUrl = this.getAttribute("data-account-link-transfert-url"), this.linkUrl = this.getAttribute("data-account-link-url"), this.isShadow = this.getAttribute("shadow"), this.updatedOn = this.getAttribute("data-updated-on"), this.warningMessage = this.getAttribute("data-account-warning"); const t = document.createElement("template"); "simple" === this.model ? t.innerHTML = `\n        <div class="c-account-tile c-account-tile__simple${this.renderWithLink()}${this.renderShadow()}">\n        <div>\n          ${this.label}\n        </div>\n        <div>\n          ${this.renderBuxAmount("xl")}\n        </div>\n        ${this.renderBuxLink()}\n      </div>` : "simple-link" === this.model ? t.innerHTML = `\n        <div class="c-account-tile c-account-tile__simple${this.renderWithLink()}${this.renderShadow()}">\n        <div>\n          ${this.label}\n        </div>\n        <div></div>\n        ${this.renderBuxLink()}\n      </div>` : "simple-2" === this.model ? t.innerHTML = `\n        <div class="c-account-tile c-account-tile__simple-2${this.renderWithLink()}${this.renderShadow()}">\n          <div class="c-account-tile__simple-2__label">\n            ${this.label}\n          </div>\n          <div class="c-account-tile__simple-2__amount">\n            ${this.renderBuxAmount("xl")}\n          </div>\n          ${this.renderBuxLink()}\n        </div>` : "heading" === this.model ? t.innerHTML = `\n        <div class="c-account-tile c-account-tile__heading${this.renderTypeAccountClass()}${this.linkBtnSwitch ? " c-account-tile--with-switch-btn" : ""}${this.renderShadow()}">\n        <p class="accessi">Informations du compte sélectionné : </p>\n          ${this.labelLevel ? "<h" + this.labelLevel + ' class="c-account-tile__heading__label">' : "<div>"}\n          ${this.label}\n          ${this.labelLevel ? "</h" + this.labelLevel + ">" : "</div>"}\n          ${this.updatedOn ? '<p class="c-account-tile__heading__updated-on">Solde actualisé le ' + this.updatedOn + "</p>" : ""}\n          ${this.brand ? '<div class="c-account-tile__brand">' + this.brand + "</div>" : ""}\n          <div class="c-account-tile__heading__holder">${this.renderHolderAndCoHolder()}</div>\n          ${this.renderSwitchCptBtn()}\n          <hr role="presentation" class="c-account-tile__line">\n          <div class="c-account-tile__heading__footer">\n            <div class="c-account-tile__heading__footer__row">\n              <div>Solde</div>\n              <div><div>${this.renderBuxAmount("xl")}</div></div>\n            </div>\n              ${this.renderBuxDetails("flexRow")}\n          </div>\n        </div>\n        ` : "heading-print" === this.model ? t.innerHTML = `\n        <div class="c-account-tile c-account-tile__heading${this.renderTypeAccountClass()}${this.linkBtnSwitch ? " c-account-tile--with-switch-btn" : ""}${this.renderShadow()}">\n        <p class="accessi">Informations du compte sélectionné : </p>\n          ${this.labelLevel ? "<h" + this.labelLevel + ' class="c-account-tile__heading__label">' : "<div>"}\n          ${this.label}\n          ${this.labelLevel ? "</h" + this.labelLevel + ">" : "</div>"}\n          ${this.updatedOn ? '<p class="c-account-tile__heading__updated-on__print">Solde actualisé le ' + this.updatedOn + "</p>" : ""}\n          <div class="c-account-tile__heading__print">\n            <button class="btn c-account-tile__heading__print-btn" type="button">\n            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n            width="100" height="100"\n            viewBox="0 0 172 172"\n            style=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3e3e3e"><path d="M37.84,6.88v44.72h-20.64c-5.6587,0 -10.32,4.6613 -10.32,10.32v61.92c0,5.6587 4.6613,10.32 10.32,10.32h20.64v30.96h96.32v-30.96h20.64c5.6587,0 10.32,-4.6613 10.32,-10.32v-61.92c0,-5.6587 -4.6613,-10.32 -10.32,-10.32h-20.64v-44.72zM44.72,13.76h82.56v37.84h-82.56zM17.2,58.48h23.50219c0.37149,0.0614 0.75054,0.0614 1.12203,0h88.31797c0.37149,0.0614 0.75054,0.0614 1.12203,0h23.53578c1.9437,0 3.44,1.4963 3.44,3.44v61.92c0,1.9437 -1.4963,3.44 -3.44,3.44h-20.64v-30.96h-3.44h-92.88v30.96h-20.64c-1.9437,0 -3.44,-1.4963 -3.44,-3.44v-61.92c0,-1.9437 1.4963,-3.44 3.44,-3.44zM141.04,68.8c-3.79972,0 -6.88,3.08028 -6.88,6.88c0,3.79972 3.08028,6.88 6.88,6.88c3.79972,0 6.88,-3.08028 6.88,-6.88c0,-3.79972 -3.08028,-6.88 -6.88,-6.88zM44.72,103.2h82.56v26.94219c-0.0614,0.37149 -0.0614,0.75054 0,1.12203v26.97578h-82.56v-26.94219c0.0614,-0.37149 0.0614,-0.75054 0,-1.12203zM58.48,113.52c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h55.04c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM58.48,127.28c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h41.28c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM58.48,141.04c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h55.04c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058z"></path></g><path d="" fill="none"></path></g></g></svg>\n          </div>\n          ${this.brand ? '<div class="c-account-tile__brand">' + this.brand + "</div>" : ""}\n          <div class="c-account-tile__heading__holder">${this.renderHolderAndCoHolder()}</div>\n          ${this.renderSwitchCptBtn()}\n          <hr role="presentation" class="c-account-tile__line">\n          <div class="c-account-tile__heading__footer">\n            <div class="c-account-tile__heading__footer__row">\n              <div>Solde</div>\n              <div><div>${this.renderBuxAmount("xl")}</div></div>\n            </div>\n              ${this.renderBuxDetails("flexRow")}\n          </div>\n        </div>\n        ` : "complete" === this.model ? t.innerHTML = `\n        <div class="c-account-tile c-account-tile__complete${this.renderWithLink()}${this.renderShadow()}">\n        <div class="c-account-tile__header">\n          <p class="accessi">Informations compte : </p>\n          <div class="c-account-tile__complete__label">${this.label}</div>\n        </div>\n        <div class="c-account-tile__body">\n          <div>\n            ${this.brand ? '<div class="c-account-tile__brand">' + this.brand + "</div>" : ""}\n            <div class="c-account-tile__heading__holder">${this.renderHolderAndCoHolder()}</div>\n            <div class="c-account-tile__warning-message">${this.renderWarningMessage()}</div>\n          </div>\n          <div>\n            <div class="c-account-tile__amount">\n            ${this.renderBuxAmount()}\n            </div>\n            ${this.renderBuxDetails()}\n            ${this.renderBuxLink()}\n          </div>\n        </div>\n      </div>` : "azb-epargne" === this.model ? t.innerHTML = `\n        <div class="c-account-tile c-account-tile__complete${this.renderWithLink()} c-account-tile--tablet-variant${this.renderTypeAccountClass()}${this.renderShadow()}">\n        <div class="c-account-tile__header">\n          <p class="accessi">Informations compte : </p>\n          <div class="c-account-tile__complete__label">${this.label}</div>\n          <div class="c-account-tile__button__holder">${this.renderSwitchCptBtnEpargne()}</div>\n          ${this.renderBuxTransfert()}\n        </div>\n        <div class="c-account-tile__body">\n          <div>\n            ${this.brand ? '<div class="c-account-tile__brand">' + this.brand + "</div>" : ""}\n            <div class="c-account-tile__heading__holder">${this.renderHolderAndCoHolder()}</div>\n          </div>\n          <div>\n            <div class="c-account-tile__amount">\n            Solde : ${this.renderBuxAmount("xxl")}\n            </div>\n            ${this.renderBuxDetails()}\n            ${this.renderBuxLink()}\n          </div>\n        </div>\n      </div>\n        ` : t.innerHTML = `\n        <div class="c-account-tile c-account-tile__complete${this.renderWithLink()} c-account-tile--model-variant c-account-tile--tablet-variant${this.renderShadow()}">\n        <div class="c-account-tile__header">\n          <p class="accessi">Informations compte : </p>\n          <div class="c-account-tile__complete__label">${this.label}</div>\n          ${this.renderBuxTransfert()}\n        </div>\n        <div class="c-account-tile__body">\n          <div>\n            ${this.brand ? '<div class="c-account-tile__brand">' + this.brand + "</div>" : ""}\n            <div class="c-account-tile__heading__holder">${this.renderHolderAndCoHolder()}</div>\n            <div class="c-account-tile__warning-message">${this.renderWarningMessage()}</div>\n          </div>\n          <div>\n            <div class="c-account-tile__amount">\n            ${this.renderBuxAmount()}\n            </div>\n            ${this.renderBuxDetails()}\n            ${this.renderBuxLink()}\n          </div>\n        </div>\n      </div>`, this.appendChild(t.content), this.isInit = !0, this.amountEl = this.querySelector("bux2-amount"), "variant" === this.model && this.type && this.addTypeAccountClass() } renderSwitchCptBtn() { return this.hasAttribute("data-account-switch-account-id-btn") ? '\n        <div class="c-switch-btn">\n          <bux-btn type="svg" id="modalSwitchComptesBtn" data-icon="chevron-double" a11y-label="Afficher la liste et sélectionner un autre compte"></bux-btn>\n        </div>' : "" } renderSwitchCptBtnEpargne() { return this.hasAttribute("data-account-switch-account-id-btn") ? '\n      <div class="c-switch-btn">\n        <bux-btn type="svg" id="modalSwitchComptesBtn" a11y-label="Afficher la liste et sélectionner un autre compte">\n        <bux-svg aria-hidden="true" data-icon="chevron-double" data-class="c-icon"></bux-svg>\n      </bux-btn></div>' : "" } renderBuxLink() { if (this.hasAttribute("data-account-link-url")) { let t = ""; return t += `<bux2-link data-link="${this.linkUrl}" data-label="Afficher le ${this.label}"`, (this.brand || this.holder) && (t += ' a11y-label="Afficher le détail de ' + this.label, this.brand ? t += ", " + this.brand : t += "", t += this.renderHolderAndCoHolder() + '"'), t += " block-arrow></bux2-link>", t } return "" } renderBuxTransfert() { return this.hasAttribute("data-account-link-transfert-url") ? `<div aria-hidden="true" class="c-transfert-link"><bux2-link data-link="${this.transfertLinkUrl}" data-label="Effectuer un virement depuis ce compte" block>Virement</bux2-link></div>` : "" } renderWithLink() { return this.hasAttribute("data-account-link-url") ? " c-account-tile--with-link" : "" } renderShadow() { return this.hasAttribute("shadow") && "false" !== this.getAttribute("shadow") ? " c-account-tile--shadow" : "" } renderHolderAndCoHolder() { let t = ""; return this.hasAttribute("data-account-holder") && this.hasAttribute("data-account-coholder") ? t += " " + this.holder + " et " + this.coholder : this.hasAttribute("data-account-holder") ? t += " " + this.holder : t += "", t } renderBuxAmount(t = "md") { return this.hasAttribute("data-account-amount") ? "nodisplay" === this.amount ? "" : `\n          <bux2-amount\n            value="${this.amount}"\n            size="${t}"\n            ${this.currency ? `currency="${this.currency}"` : ""}>\n          </bux2-amount>` : "<em>Solde momentanément indisponible</em>" } renderWarningMessage() { return this.hasAttribute("data-account-warning") ? `\n          <bux-svg data-icon="exclamation-triangle" data-class="c-icon"></bux-svg>\n          <span>${this.warningMessage}</span>\n          ` : "" } get amount() { return this.getAttribute("data-account-amount") } set amount(t) { this.setAttribute("data-account-amount", t) } updateAmount() { this.amountEl.value = this.amount } get currency() { return this.getAttribute("data-account-currency") } set currency(t) { this.setAttribute("data-account-currency", t) } updateCurrency() { this.amountEl.currency = this.currency } renderBuxDetailAmount() { let t = `<bux2-amount size="sm" value="${this.detailsAmountScheduledPayment}"`; return this.hasAttribute("data-account-details-amount-scheduled-currency") && (t += ` currency="${this.detailsAmountScheduledCurrency}"`), this.hasAttribute("data-account-details-amount-scheduled-payment-period") ? t += ` suffix=" / ${this.detailsAmountScheduledPaymentPeriod}"` : t += ' suffix=" / mois"', t += "></bux2-amount>", t } renderBuxDetails(t) { let e = ""; return this.hasAttribute("data-account-details-amount-scheduled-payment") ? e += `<span class="c-account-tile__note"><span>Versement programmé : </span>${this.renderBuxDetailAmount()}</span>` : this.hasAttribute("data-account-details-number-of-versements") ? e += `<span class="c-account-tile__note"><span>${this.detailsNumberVersements} versements programmés</span></span>` : this.hasAttribute("data-account-details-to-come-up") ? e += t ? `<div class="c-account-tile__note c-account-tile__heading__footer__row"><span>À venir : </span><bux2-amount value="${this.detailsToComeUp}"></bux2-amount></div>` : `<span class="c-account-tile__note"><span>À venir : </span><bux2-amount value="${this.detailsToComeUp}"></bux2-amount></span>` : this.hasAttribute("data-account-details") && (e += `<span class="c-account-tile__note"><span>${this.details}</span></span>`), e } renderTypeAccountClass() { let t = ""; switch (this.type) { case "account": t = " c-account-tile--account"; break; case "saving": t = " c-account-tile--saving"; break; case "saving-mt": t = " c-account-tile--saving-mt"; break; case "saving-lt": t = " c-account-tile--saving-lt"; break; case "revolving": t = " c-account-tile--revolving"; break; default: t = "" }return t } addTypeAccountClass() { const t = this.querySelector(".c-account-tile--model-variant"); t && ("account" === this.type ? t.classList.add("c-account-tile--account") : t.classList.remove("c-account-tile--account"), "saving" === this.type ? t.classList.add("c-account-tile--saving") : t.classList.remove("c-account-tile--saving"), "saving-mt" === this.type ? t.classList.add("c-account-tile--saving-mt") : t.classList.remove("c-account-tile--saving-mt"), "saving-lt" === this.type ? t.classList.add("c-account-tile--saving-lt") : t.classList.remove("c-account-tile--saving-lt"), "revolving" === this.type ? t.classList.add("c-account-tile--revolving") : t.classList.remove("c-account-tile--revolving")) } renderPopinSwitchCompte() { let t = ""; t += '<bux-modal id="modalSwitchComptes"> </bux-modal>', t += '<button id="modalSwitchComptesBtn" title="Sélectionner un autre compte" aria-label="Afficher un autre compte dans la liste de tous vos comptes" >Switch compte</button>'; const e = document.querySelector("#modalSwitchComptes"), i = document.querySelector("#modalSwitchComptesBtn"); return customElements.whenDefined("bux-modal").then((() => { i.addEventListener("click", (() => e.init({ label: "Mon Titre", content: "<p>Je suis un contenu</p><p>deuxièmeligne</p>", labelFailure: "annuler", labelSuccess: "ok", onFailure: () => e.close(), onSuccess: () => e.close(), closable: !0, autoOpen: !0, focusBackElement: document.getElementById("focusEl") }))) })), '<bux-modal id="modalSwitchComptes"> </bux-modal><button id="modalSwitchComptesBtn" title="Sélectionner un autre compte" aria-label="Afficher un autre compte dans la liste de tous vos comptes" >Switch compte</button>' } attributeChangedCallback(t) { switch (t) { case "data-account-amount": this.amountEl && this.updateAmount(); break; case "data-account-currency": this.amountEl && this.updateCurrency(); break; case "data-account-type": this.type = this.getAttribute("data-account-type"), "variant" === this.model && this.type && this.addTypeAccountClass() } } }), i(119), customElements.define("bux-btn-group", class extends n { connectedCallback() { this.isInit || (this.ul = document.createElement("ul"), this.ul.classList.add("bux-btn-group"), this.hasAttribute("nomarginbottom") && "false" !== this.getAttribute("nomarginbottom") && this.ul.classList.add("bux-btn-group-nomarginbottom"), this.hasAttribute("vertical") && "false" !== this.getAttribute("vertical") ? this.ul.classList.add("bux-btn-group-vertical") : this.ul.classList.add("bux-btn-group-horizontal"), this.slots = this.querySelectorAll("bux-btn"), this.slots.forEach((t => { this.makeOneEl(t) })), this.appendChild(this.ul), this.isInit = !0) } makeOneEl(t) { const e = document.createElement("li"); e.classList.add("bux-btn-group-item"), e.appendChild(t), this.ul.appendChild(e) } }), i(120); const x = document.createElement("template"); x.innerHTML = '\n<div class="c-card-info">\n  <img class="c-card-info__img" src="" alt="">\n  <div class="c-card-info__container"></div>\n  <a class="c-card-info__path" href="" title="Accéder au détail de la carte" aria-label="accéder au détail de la carte"></a>\n</div>\n\n', customElements.define("bux-card-information", class extends n { static get observedAttributes() { return ["data-label", "data-holder", "data-number", "data-image-path", "data-detail-path"] } constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0; const t = x.content.cloneNode(!0); this.infoContainer = t.querySelector(".c-card-info__container"), this.imgEl = t.querySelector(".c-card-info__img"), this.detailLinkEl = t.querySelector(".c-card-info__path"), this._upgradeProperty("label"), this._upgradeProperty("holder"), this._upgradeProperty("number"), this._upgradeProperty("imagePath"), this._upgradeProperty("detailPath"), this._setLabel(), this._setHolder(), this._setNumber(), this._setImagePath(), this._setDetailPath(), this.appendChild(t) } _upgradeProperty(t) { if (this.hasOwnProperty(t)) { const e = this[t]; delete this[t], this[t] = e } } attributeChangedCallback(t) { switch (t) { case "data-label": this.infoContainer && this._updateLabel(); break; case "data-holder": this.infoContainer && this._updateHolder(); break; case "data-number": this.infoContainer && this._updateNumber(); break; case "data-image-path": this.imgEl && this._setImagePath(); break; case "data-detail-path": this.detailLinkEl && this._setDetailPath() } } set label(t) { this.setAttribute("data-label", t) } get label() { return this.getAttribute("data-label") } set holder(t) { this.setAttribute("data-holder", t) } get holder() { return this.getAttribute("data-holder") } set number(t) { this.setAttribute("data-number", t) } get number() { return this.getAttribute("data-number") } set imagePath(t) { this.setAttribute("data-image-path", t) } get imagePath() { return this.getAttribute("data-image-path") } set detailPath(t) { this.setAttribute("data-detail-path", t) } get detailPath() { return this.getAttribute("data-detail-path") } _setLabel() { if (this.label && "undefined" !== this.label) { const t = document.createElement("div"); t.classList.add("c-card-info__label"), t.textContent = this.label, this.infoContainer.appendChild(t) } } _updateLabel() { const t = this.querySelector(".c-card-info__label"); t && (t.textContent = this.label) } _setHolder() { if (this.holder && "undefined" !== this.holder) { const t = document.createElement("div"); t.classList.add("c-card-info__holder"), t.textContent = this.holder, this.infoContainer.appendChild(t) } } _updateHolder() { const t = this.querySelector(".c-card-info__holder"); t && (t.textContent = this.holder) } _setNumber() { if (this.number && "undefined" !== this.number) { const t = document.createElement("div"); t.classList.add("c-card-info__number"), t.textContent = this.number, this.infoContainer.appendChild(t) } } _updateNumber() { const t = this.querySelector(".c-card-info__number"); t && (t.textContent = this.number) } _setImagePath() { this.imagePath && "undefined" !== this.imagePath && this.imgEl.setAttribute("src", this.imagePath) } _setDetailPath() { this.detailPath && "undefined" !== this.detailPath && this.detailLinkEl.setAttribute("href", this.detailPath) } }), i(121), customElements.define("bux-checkbox-group", class extends n { constructor() { super(), this.isInit = !1, this.checkboxName = "bux-checkbox-group-" + (Math.floor(1e4 * Math.random()) + 2), this.handleClick = this.clickEvent.bind(this) } static get observedAttributes() { return ["layout"] } attributeChangedCallback(t, e, i) { this.layout = i, this.isInit && this.setLayout() } connectedCallback() { if (this.isInit) return; this.a11yLabel = this.getAttribute("a11y-label") || !1, this.layout = this.getAttribute("layout") || "default", this.state = this.getAttribute("data-state") || "unchecked", this.hidebtn = this.hasAttribute("hide-button") && "false" !== this.getAttribute("hide-button"), this.stepIn = this.hasAttribute("a11y-step-in") && "false" !== this.getAttribute("a11y-step-in"), this.stepOut = this.hasAttribute("a11y-step-out") && "false" !== this.getAttribute("a11y-step-out"), this.randomId = Math.floor(1e4 * Math.random()); const t = document.createElement("template"); for (t.innerHTML = `\n          <div class="c-checkbox-group-parent">\n            <button class="c-checkbox-group-btn-all"></button>\n\n              ${this.a11yLabel ? `\n            <div class="c-checkbox-group" role="group" aria-labelledby="legend-${this.randomId}">\n              <div id="legend-${this.randomId}" class="c-checkbox-group__legend u-hidden-visually">${this.a11yLabel}</div>\n              ` : '<div class="c-checkbox-group">'}\n            </div>\n          </div>\n        `, this.parent = t.content.querySelector(".c-checkbox-group-parent"), this.container = t.content.querySelector(".c-checkbox-group"); this.childNodes.length > 0;)this.container.appendChild(this.childNodes[0]); this.checkboxItems = t.content.querySelectorAll("bux-checkbox"), this.btnEl = t.content.querySelector(".c-checkbox-group-btn-all"), this.getState(), this.setLayout(), this.setButtonMsg(), this.setSteps(), this.hideButton(), this.checkboxItems.forEach((t => { t.setAttribute("data-name", this.checkboxName), t.addEventListener("change", (() => { [...this.checkboxItems].every((t => t.checked)) ? (this.state = "checked", this.setButtonMsg()) : [...this.checkboxItems].every((t => !t.checked)) && (this.state = "unchecked", this.setButtonMsg()) })) })), this.btnEl.addEventListener("click", this.handleClick), this.appendChild(t.content), this.isInit = !0 } setLayout() { switch (this.layout) { case "2-columns-md": this.container.classList.remove("o-columns--4"), this.container.classList.add("o-columns@md", "o-columns--2"); break; case "4-columns-md": this.container.classList.remove("o-columns--2"), this.container.classList.add("o-columns@md", "o-columns--4"); break; case "default": this.container.classList.remove("o-columns@md", "o-columns--2", "o-columns--4") } } setButtonMsg() { "unchecked" === this.state ? this.btnEl.textContent = "Tout sélectionner" : this.btnEl.textContent = "Tout désélectionner" } hideButton() { this.hidebtn && (this.btnEl.setAttribute("aria-hidden", !0), this.btnEl.setAttribute("class", "c-checkbox-group-btn-all u-hidden")) } getState() { const t = []; this.checkboxItems.forEach((e => { t.push(e.checked) })), this.state = "unchecked", 1 === [...new Set(t)].length && !0 === t[0] && (this.state = "checked") } clickEvent() { this.checkboxItems = this.querySelectorAll("bux-checkbox"), this.getState(), "unchecked" === this.state ? (this.checkboxItems.forEach((t => { t.setAttribute("checked", "true") })), this.state = "checked", this.setButtonMsg()) : (this.checkboxItems.forEach((t => { t.removeAttribute("checked") })), this.state = "unchecked", this.setButtonMsg()) } setSteps() { if (!0 === this.stepIn) { const t = document.createElement("span"); t.setAttribute("class", "u-hidden-visually"), t.setAttribute("tabindex", 0), t.setAttribute("aria-label", "Début de la zone de saisie"), this.parent.insertBefore(t, this.btnEl) } if (!0 === this.stepOut) { const t = document.createElement("span"); t.setAttribute("class", "u-hidden-visually"), t.setAttribute("tabindex", 0), t.setAttribute("aria-label", "Fin de la zone de saisie"), this.parent.appendChild(t) } } }); const y = i(122), k = document.createElement("template"); k.innerHTML = `\n<style>${y}</style>\n<div role="table" aria-describedby="caption_description" class="c-datatable">\n  <div id="caption_description" class="c-datatable__caption"></div>\n  <div class="c-datatable__thead" role="rowgroup">\x3c!-- /thead --\x3e\n      <slot name="thead"></slot>\n  </div>\n  <div class="c-datatable__tbody" role="rowgroup">\x3c!-- /tbody --\x3e\n    <slot name="tbody"></slot>\n  </tbody>\n</div>\n`, window.ShadyCSS && ShadyCSS.prepareTemplate(k, "bux-datatable"), customElements.define("bux-datatable", class extends n { static get observedAttributes() { return ["data-caption"] } constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.captionElement = this.shadowRoot.querySelector("#caption_description") } connectedCallback() { window.ShadyCSS && ShadyCSS.styleElement(this), this._upgradeProperty("caption") } _upgradeProperty(t) { if (this.hasOwnProperty(t)) { const e = this[t]; delete this[t], this[t] = e } } attributeChangedCallback(t) { "data-caption" === t && (this.captionElement.textContent = this.caption) } get caption() { return this.getAttribute("data-caption") } set caption(t) { this.setAttribute("data-caption", t) } }); const w = i(123), C = document.createElement("template"); C.innerHTML = `\n<style>\n ${w}\n</style>\n<slot></slot>\n`, window.ShadyCSS && ShadyCSS.prepareTemplate(C, "bux-datatable-head"), customElements.define("bux-datatable-head", class extends n { constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(C.content.cloneNode(!0)), this._defaultSlot = this.shadowRoot.querySelector("slot") } connectedCallback() { window.ShadyCSS && ShadyCSS.styleElement(this), this.hasAttribute("slot") || this.setAttribute("slot", "thead"), this.hasAttribute("role") || this.setAttribute("role", "row"), this._defineCells() } __allCells() { return Array.from(this.children) } _defineCells() { window.HTMLSlotElement && this.__allCells().forEach((t => { t.setAttribute("role", "columnheader"), t.setAttribute("aria-sort", "none") })) } }); const _ = i(124), E = document.createElement("template"); E.innerHTML = `\n<style>\n ${_}\n</style>\n<slot></slot>\n`, window.ShadyCSS && ShadyCSS.prepareTemplate(E, "bux-datatable-row"), customElements.define("bux-datatable-row", class extends n { constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(E.content.cloneNode(!0)), this._defaultSlot = this.shadowRoot.querySelector("slot") } connectedCallback() { window.ShadyCSS && ShadyCSS.styleElement(this), this.hasAttribute("slot") || this.setAttribute("slot", "tbody"), this.hasAttribute("role") || this.setAttribute("role", "row"), window.HTMLSlotElement && this._defineCells() } __allCells() { return Array.from(this.children) } _defineCells() { this.__allCells().forEach((t => { t.setAttribute("role", "cell") })) } }), i(125), customElements.define("bux-file-download", class extends n { connectedCallback() { this.labelTitle = this.getAttribute("data-label") || "", this.labelSubtitle = this.getAttribute("data-sublabel") || "", this.filePath = this.getAttribute("data-path") || "", this.fileName = this.getAttribute("data-filename") || "", this.fileType = this.getAttribute("data-filetype") || "", this.fileSize = this.getAttribute("data-filesize") || "", this.fileLang = this.getAttribute("data-filelang") || "", this.a11yLabel = this.getAttribute("a11y-label") || "", this.horizontal = this.hasAttribute("horizontal") && "false" !== this.getAttribute("horizontal"), this.nomarginbottom = this.hasAttribute("nomarginbottom") && "false" !== this.getAttribute("nomarginbottom"), this.innerHTML = this.template(), this.querySelector(".c-file-operation__action-button").addEventListener("click", (t => { this.dispatchEvent(new CustomEvent("dlclick", { detail: { target: ".c-file-operation__action-button", originalEvent: t } })) })), this.items = this.querySelectorAll("bux-text"), this.items.forEach((t => { t.setAttribute("aria-hidden", !0) })), this.parentEl = this.querySelector(".c-file-operation"), this.labelEl = this.querySelector(".c-file-operation__title"), this.subLabelEl = this.querySelector(".c-file-operation__sublabel"), this.iconEl = this.querySelector(".c-file-operation__icon"), this.buttonEl = this.querySelector(".c-file-operation__action-button"), this.setStyle() } setStyle() { !1 === this.horizontal ? (this.parentEl.classList.add("c-file-operation--tile"), this.labelEl.classList.add("c-file-operation__title--tile"), this.buttonEl.classList.add("c-file-operation__action-button--tile")) : (this.parentEl.classList.add("c-file-operation--inline"), this.labelEl.classList.add("c-file-operation__title--inline"), this.buttonEl.classList.add("c-file-operation__action-button--inline")), this.nomarginbottom && this.parentEl.classList.add("c-file-operation--nomarginbottom") } template() { return `\n      <span class="c-file-operation">\n        ${this.labelTitle ? `<div class="c-file-operation__title"> ${this.labelTitle} </div>` : ""}\n        ${this.labelSubtitle ? `<div class="c-file-operation__sublabel"> ${this.labelSubtitle}  </div>` : ""}\n        ${!1 === this.horizontal ? '<bux-svg aria-hidden="true"  data-icon="fichier"  data-class="c-file-operation__icon c-icon"></bux-svg>' : ""}\n        <span>\n        ${this.fileSize ? `<bux-text size="sm">${this.fileSize}</bux-text>` : ""}\n        ${this.fileLang ? `<bux-text size="sm">${this.fileLang}</bux-text>` : ""}\n        ${this.fileType ? `<bux-text size="sm">${this.fileType}</bux-text>` : ""}\n        </span>\n        <a class="c-file-operation__action-button" href="${this.filePath}" ${this.fileName ? `download="${this.fileName}"` : ""} title="${this.a11yLabel}">\n          <bux-svg\n          data-icon="telecharger"\n          data-class="c-file-operation__action-icon c-icon">\n          </bux-svg>\n        </a>\n      </div>\n      ` } }), i(126), customElements.define("bux-footer", class extends n { constructor() { super(), this.isInit = !1, this._data = null } get data() { return this._data } set data(t) { this._data = t, this.isInit && this.setData() } connectedCallback() { const t = "auth" === this.getAttribute("type"); this.innerHTML = `\n      <footer class="c-footer ${t ? "c-footer__auth" : ""}" role="contentinfo">\n        <bux-nav-bar type="${t ? "footerauth" : "footer"}"></bux-nav-bar>\n      </footer>\n      `, this.navBar = this.querySelector("bux-nav-bar"), this.setData(), this.isInit = !0 } setData() { this._data && (this.navBar.data = this._data) } }), i(127), customElements.define("bux-header", class extends n { constructor() { super(), this.isInit = !1, this.goTo = this.goTo.bind(this) } static get observedAttributes() { return ["data-logo-url", "data-profil-url", "data-advisor-url", "data-settings-link", "data-label", "data-message", "data-connected", "type", "data-mobile-state", "data-gender", "data-first-name", "data-last-name", "data-last-connection", "data-espace", "active", "data-back-link"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (t) { case "data-settings-link": this.changeSettingsLink(); break; case "data-logo-url": this.changeLogoUrl(); break; case "data-advisor-url": this.changeAdvisorUrl(); break; case "data-label": this.changeLabel(); break; case "data-message": this.changeMsg(); break; case "data-connected": this.toggleLogin(); break; case "type": this.changeType(); break; case "data-mobile-state": this.changeMobileState(); break; case "data-gender": case "data-first-name": case "data-last-name": case "data-last-connection": case "data-profil-url": this[s] = this.initVar(t, i), this.changeProfile(); break; case "data-espace": this.espace = this.initVar("data-espace", i), this.changeEspace(); break; case "active": this.changeActive(); break; case "data-back-link": this.backLink = "false" !== i && "" !== i && i, this.changeBackLink() } } connectedCallback() { if (this.isInit) return; this.gender = this.initVar("data-gender"), this.firstName = this.initVar("data-first-name"), this.lastName = this.initVar("data-last-name"), this.lastConnection = this.initVar("data-last-connection"), this.espace = this.initVar("data-espace", !1), this.connected = this.initVar("data-connected", !1), this.active = this.initVar("active", !1), this.backLink = this.initVar("data-back-link", !1), this.settingsLink = this.initVar("data-settings-link", !1), this.linkConnect = this.initVar("data-link-connect"), this.linkUnconnect = this.initVar("data-link-unconnect"), this.type = this.initVar("type", "default"), this.label = this.initVar("data-label", !1); const t = document.createElement("template"); t.innerHTML = this.render(), this.selector(t), this.toChangeEl = [this.wrapProfil, this.wrapEspace, this.wrapConseiller, this.wrapParam], this.changeEspace(), this.changeLabel(), this.changeMsg(), this.toggleLogin(), this.changeType(), this.changeActive(), this.changeBackLink(), this.appendChild(t.content), this.changeLogoUrl(), this.changeProfile(), this.changeAdvisorUrl(), this.changeSettingsLink(), this.isInit = !0 } changeAdvisorUrl() { const t = this.getAttribute("data-advisor-url"); this.wrapConseiller && (t && "null" !== t ? (this.wrapConseiller.classList.remove("c-visible-hidden"), this.wrapConseiller.removeAttribute("aria-hidden"), this.wrapConseiller.querySelector("a").href = t) : (this.wrapConseiller.classList.add("c-visible-hidden"), this.wrapConseiller.setAttribute("aria-hidden", !0))) } changeLogoUrl() { const t = this.getAttribute("data-logo-url"); this.wLogo && (this.wLogo.innerHTML = t && "null" !== t ? `\n        <a href="${t}" aria-label="Aller à l'accueil" title="Accueil" class="c-header__logo-container">\n          <bux-svg data-icon="logo" data-class="c-header__logo-svg"></bux-svg>\n        </a>\n        ` : '\n        <div aria-hidden="true" class="c-header__logo-container">\n          <bux-svg aria-hidden="true" data-icon="logo" data-class="c-header__logo-svg"></bux-svg>\n        </div>\n        ') } changeSettingsLink() { const t = this.getAttribute("data-settings-link"); this.wrapParam && (t && "null" !== t && "false" !== t ? (this.wrapParam.classList.remove("c-visible-hidden"), this.wrapParam.removeAttribute("aria-hidden"), this.wrapParam.querySelector("a").href = t) : (this.wrapParam.classList.add("c-visible-hidden"), this.wrapParam.setAttribute("aria-hidden", !0))) } initVar(t, e) { return this.hasAttribute(t) ? "false" !== this.getAttribute(t) && this.getAttribute(t) : void 0 === e ? (this.setAttribute(t, ""), "") : !1 === e ? (this.setAttribute(t, "false"), !1) : (this.setAttribute(t, e), e) } selector(t) { this.wLogo = t.content.querySelector(".c-header-wrap-logo"), this.labelElm = t.content.querySelector(".c-header-wrap-label"), this.msgElm = t.content.querySelector(".c-header-wrap-message"), this.msgAElm = t.content.querySelector(".c-header-a-message"), this.aLogin = t.content.querySelector(".c-header-a-login"), this.liLogin = t.content.querySelector(".c-header-wrap-login"), this.wrapEspace = t.content.querySelector(".c-header-wrap-espace"), this.wrapProfil = t.content.querySelector(".c-header-wrap-profile"), this.wrapConseiller = t.content.querySelector(".c-header-wrap-mon-conseiller"), this.wrapParam = t.content.querySelector(".c-header-wrap-param"), this.backLinkEl = t.content.querySelector(".c-header-back-link"), this.menuBtnMobile = t.content.querySelector(".c-header-li-menu-mobile"), this.titleMobile = t.content.querySelector(".c-header-li-title-mobile"), this.rightBtnMobile = t.content.querySelector(".c-header-right-svg-mobile") } changeMobileState() { const t = this.querySelector("#c-header-mobile"); "menu-open" === this.mobileState ? t.classList.add("is-open") : t.classList.remove("is-open") } changeTypePublic() { this.wLogo.style.borderRight = "none", this.liLogin.style.marginLeft = "auto", this.liLogin.style.borderLeft = "solid 1px #efefef", this.menuBtnMobile.style.display = "none", this.titleMobile.style.margin = "0 auto", this.rightBtnMobile.setAttribute("data-icon", "connexion"), this.rightBtnMobile.parentElement.classList.add("c-header-btn-public-mobile"), this.rightBtnMobile.parentElement.setAttribute("aria-label", "Se connecter"), this.rightBtnMobile.parentElement.setAttribute("title", "Se connecter"), this.rightBtnMobile.parentElement.addEventListener("click", this.goTo) } changeTypePseudoAuth() { this.wLogo.style.borderRight = "none", this.wLogo.classList.add("is-empty"), this.liLogin.style.marginLeft = "auto", this.liLogin.style.borderLeft = "solid 1px #efefef", this.menuBtnMobile.style.display = "none", this.titleMobile.style.margin = "0 auto", this.rightBtnMobile.setAttribute("data-icon", "connexion"), this.rightBtnMobile.parentElement.classList.add("c-header-btn-public-mobile"), this.rightBtnMobile.parentElement.setAttribute("aria-label", "Se connecter"), this.wLogo.querySelector(".c-header__logo-container").addEventListener("click", (t => (t.stopPropagation(), t.preventDefault(), !1))), this.rightBtnMobile.parentElement.addEventListener("click", this.goTo), this.rightBtnMobile.parentElement.setAttribute("title", "Se connecter") } goTo(t) { return t.stopPropagation(), t.preventDefault(), window.location.href = this.linkConnect, !1 } changeType() { this.toChangeEl.forEach((t => { t && ("empty" === this.type || "public" === this.type || "pseudoauth" === this.type ? t.style.display = "none" : t.removeAttribute("style")) })), "empty" === this.type ? (this.wLogo.style.borderRight = "none", this.liLogin.style.marginLeft = "auto", this.liLogin.style.borderLeft = "solid 1px #efefef") : "public" === this.type ? this.changeTypePublic() : "pseudoauth" === this.type ? this.changeTypePseudoAuth() : (this.wLogo.removeAttribute("style"), this.liLogin.removeAttribute("style")) } toggleLogin() { this.isTrue(this.connected) && "public" !== this.type ? (this.aLogin.href = this.linkUnconnect, this.aLogin.title = "Déconnexion", this.aLogin.setAttribute("aria-label", "Déconnexion")) : (this.aLogin.href = this.linkConnect, this.aLogin.title = "Connexion", this.aLogin.setAttribute("aria-label", "Connexion")) } changeLabel() { "" == this.label || "false" == this.label || "null" == this.label ? this.labelElm.innerHTML = "" : this.labelElm.innerHTML = `<h1 class="c-header-wrap-label-h1">${this.label}</h1>` } changeMsg() { "" == this.message || "false" == this.message ? (this.msgElm.innerHTML = "", this.msgAElm.setAttribute("aria-label", "Mon conseiller : Messagerie, contacts, prise de rendez-vous")) : (this.msgElm.innerHTML = `<span class="c-header-message">${this.message}</span>`, this.msgAElm.setAttribute("aria-label", `Visitez lien mon conseiller, ma messagerie, vous avez ${this.message} messages non lus`)) } changeEspace() { this.espace ? (this.wrapEspace.removeAttribute("aria-hidden"), this.wrapEspace.classList.remove("is-empty"), this.wrapEspace.innerHTML = `\n          <a href="/espace/filter" aria-label="Changer d'espace. L'espace actuel est : ${this.espace}" title="Changer d'espace" class="c-header-a">\n            <div class="c-header-a-div c-header-a-div-space-bt">\n              <div class="c-header-espace-name">${this.espace}</div>\n              <bux-svg class="c-header-espace-ico" data-icon="switcher"></bux-svg>\n            </div>\n          </a>`) : (this.wrapEspace.innerHTML = "", this.wrapEspace.setAttribute("aria-hidden", "true"), this.wrapEspace.classList.add("is-empty")) } changeActive() { switch ([this.wrapProfil, this.wrapEspace, this.wrapConseiller, this.wrapParam].forEach((t => t.classList.remove("is-active"))), this.active) { case "profil": this.wrapProfil.classList.add("is-active"); break; case "espace": this.wrapEspace.classList.add("is-active"); break; case "conseiller": this.wrapConseiller.classList.add("is-active"); break; case "parametrage": this.wrapParam.classList.add("is-active") } } changeProfile() { if (!1 === this.gender && !1 === this.firstName && !1 === this.lastName && !1 === this.lastConnection) this.wrapProfil.innerHTML = "", this.wrapProfil.setAttribute("aria-hidden", "true"), this.wrapProfil.classList.add("is-empty"), this.wrapProfil.classList.add("c-header-no-border"); else { const t = `Connecté en tant que ${this.gender ? this.gender : ""} ${this.firstName ? this.firstName : ""} ${this.lastName ? this.lastName : ""}, ${this.lastConnection ? this.lastConnection : ""}`, e = this.getAttribute("data-profil-url"); this.wrapProfil.innerHTML = e && "null" !== e ? `\n          <a href="${e}" aria-label="${t}, accédez à votre profil" title="Modifier mon profil" class="c-header-a c-header-a-profil">\n            <div class="c-header-a-profil__img">\n              <bux2-image src="profil.png" aria-hidden="true" width="32" height="32"></bux2-image>\n            </div>\n            <div class="c-header-a-div c-header-a-div-space-bt c-header-div-1" aria-hidden="true">\n              <div class="c-header-div-2" aria-hidden="true">\n                <div class="c-header-profile-name" aria-hidden="true">${this.gender ? this.gender : ""} ${this.firstName ? this.firstName : ""} ${this.lastName ? this.lastName : ""}\n                <bux-svg data-icon="pen-wo-circle" aria-hidden="true"></bux-svg>\n            </div>\n              <div class="c-header-profile-date" aria-hidden="true">${this.lastConnection ? this.lastConnection : ""}</div>\n              </div>\n            </div>\n          </a>` : `\n          <div aria-label="${t}" class="c-header-a c-header-a-profil">\n            <div class="c-header-a-profil__img">\n              <bux2-image src="profil.png" aria-hidden="true" width="32" height="32"></bux2-image>\n            </div>\n            <div class="c-header-a-div c-header-a-div-space-bt c-header-div-1" aria-hidden="true">\n              <div class="c-header-div-2" aria-hidden="true">\n                <div class="c-header-profile-name" aria-hidden="true">${this.gender ? this.gender : ""} ${this.firstName ? this.firstName : ""} ${this.lastName ? this.lastName : ""}\n                \n            </div>\n              <div class="c-header-profile-date" aria-hidden="true">${this.lastConnection ? this.lastConnection : ""}</div>\n              </div>\n            </div>\n          </div>`, this.wrapProfil.classList.remove("is-empty"), this.wrapProfil.removeAttribute("aria-hidden"), this.wrapProfil.classList.remove("c-header-no-border") } } changeBackLink() { this.backLink ? (this.backLinkEl.style.display = "", this.backLinkEl.href = this.backLink) : (this.backLinkEl.style.display = "none", this.backLinkEl.href = "") } render() { return `\n      <header class="c-header" role="banner">\n        ${this.templateDesktop()}\n        ${this.templateMobile()}\n      </header>\n      ` } templateDesktop() { return `\n        <div id="c-header-desktop">\n          <ul class="c-header-ul">\n            <li class="c-header-li c-header-wrap-logo">\n              <a href="/" aria-label="Aller à l'accueil" title="Accueil" class="c-header__logo-container">\n                <bux-svg data-icon="logo" data-class="c-header__logo-svg"></bux-svg>\n              </a>\n            </li>\n            <li class="c-header-li c-header-wrap-profile"></li>\n            <li class="c-header-li c-header-wrap-espace"></li>\n            <li class="c-header-li c-header-no-border-bottom c-header-wrap-mon-conseiller">\n              <a href="/messagerie/" title="Mon conseiller, ma messagerie" class="c-header-a c-header-a-message">\n                <div class="c-header-a-div">\n                  <bux-svg data-icon="conseiller" class="c-header-ico"></bux-svg>\n                  <div>\n                    <div class="c-header-item-conseiller"><span class="c-header-item-con">MON CONSEILLER</span><span class="c-header-wrap-message"></span></div>\n                    <div class="c-header-item-subtitle">Messagerie, contacts, prise de rendez-vous</div>\n                  </div>\n                </div>\n              </a>\n            </li>\n            <li class="c-header-li c-header-no-border-bottom c-header-wrap-param">\n              <a href="${this.settingsLink}" aria-label="Paramétrage. Gérer ma sécurité bancaire, mes alertes" title="Paramétrage" class="c-header-a">\n                <div class="c-header-a-div">\n                  <bux-svg data-icon="engrenage" class="c-header-ico"></bux-svg>\n                  <div>\n                    <div class="c-header-item-title">PARAMÉTRAGE</div>\n                    <div class="c-header-item-subtitle">Gérer ma sécurité bancaire, mes alertes</div>\n                  </div>\n                </div>\n              </a>\n            </li>\n            <li class="c-header-li c-header-no-border-bottom c-header-wrap-login">\n              <a aria-label="Déconnexion" title="Déconnexion" class="c-header-a c-header-a-login" href="${this.linkUnconnect}" >\n                <div class="c-header-a-div">\n                  <bux-svg data-icon="connexion" class="c-header-ico"></bux-svg>\n                  <div>\n                    <div class="c-header-item-title">DÉCONNEXION</div>\n                  </div>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>` } templateMobile() { return '\n      <div id="c-header-mobile">\n        <ul class="c-header-ul">\n          <li class="c-header-li c-header-li-menu-mobile">\n            <button id="header-btn-menu" class="c-header-btn" aria-label="Afficher le menu">\n              <bux-svg data-icon="trigger" data-class="c-header-ico"></bux-svg>\n            </button>\n            <a class="c-header-back-link" aria-label="revenir à l\'étape précédente">\n              <bux-svg data-icon="back-link" data-class="c-header-ico"></bux-svg>\n            </a>\n          </li>\n          <li class="c-header-li c-header-li-title-mobile">\n            <div class="c-header-wrap-label"></div>\n            <bux-svg data-icon="logo" data-class="c-header__logo-svg-mobile"></bux-svg>\n          </li>\n          <li class="c-header-li c-header-ico">\n            <button id="header-btn-profil" aria-label="Mon profil" class="c-header-btn">\n              <bux-svg class="c-header-right-svg-mobile" data-icon="user-circle"></bux-svg>\n            </button>\n          </li>\n      </div>\n      ' } }), i(128), window.customElements.define("bux-modal", class extends n { constructor() { super(), this.isInit = !1, this.isEventRemove = !0, this.clickCrossEventHandler = this.clickCrossEvent.bind(this), this.clickOverlayEventHandler = this.clickOverlayEvent.bind(this), this.keyUpTabEventHandler = this.keyUpTabEvent.bind(this), this.loopFocusEventHandler = this.loopFocusEvent.bind(this) } disconnectedCallback() { this.removeCloseEvents() } open() { this.visible = !0, this.setVisibleOrNot() } close() { this.visible = !1, this.setVisibleOrNot(), this.resolve("Closed!") } destroy() { this.removeCloseEvents(), this.innerHTML = "", this.isInit = !1, this.focusBackElement && this.focusBackElement.focus() } update() { this.removeCloseEvents(), this.setLabel(), this.setContent(), this.setBtn(), this.setCross(), this.setType(), this.modalFirst.focus() } init({ label: t, content: e, labelFailure: i, labelSuccess: s, type: a, onFailure: n, onSuccess: r, closable: o, autoOpen: l, focusBackElement: c }) { this.destroy(), this.label = t || "", this.content = e || "", this.labelFailure = i || "", this.labelSuccess = s || "", this.onFailure = n, this.onSuccess = r, this.type = a || "modal", this.closable = !1 !== o, this.autoOpen = !1 !== l, this.visible = !1, c instanceof Element ? this.focusBackElement = c : "string" == typeof c && (this.focusBackElement = document.querySelector(c) || !1); const d = document.createElement("template"); return d.innerHTML = this.template(), this.modalWrapEl = d.content.querySelector(".c-modal-wrapper"), this.modal = d.content.querySelector(".c-modal"), this.modalHeader = d.content.querySelector(".c-modal__header"), this.labelEl = d.content.querySelector(".c-modal__label"), this.contentEl = d.content.querySelector(".c-modal__content"), this.btnsEl = d.content.querySelector(".c-modal__btns"), this.navbar = document.querySelector("novatio-navbar"), this.header = document.querySelector("novatio-header"), this.footer = document.querySelector("bux-footer"), this.main = document.querySelector("novatio-page"), this.modalFirst = d.content.querySelector(".c-modal-first"), this.modalLast = d.content.querySelector(".c-modal-last"), this.setLabel(), this.setContent(), this.setBtn(), this.setCross(), this.setType(), this.setPClass(), this.appendChild(d.content), this.closable && (this.crossEl = this.querySelector(".c-modal__close"), this.crossEl.addEventListener("click", this.clickCrossEventHandler)), this.autoOpen && setTimeout((() => this.open()), 50), this.isInit = !0, new Promise((t => { this.resolve = t })) } setPClass() { this.contentEl.querySelectorAll("p").forEach((t => { t.classList.add("c-modal__text") })) } setLabel() { this.labelEl.textContent = this.label } setContent() { this.contentEl.innerHTML = this.content } setBtn() { this.btnsEl.innerHTML = this.labelFailure || this.labelSuccess ? `<bux-btn-group>\n            ${this.labelFailure ? `<bux-btn class="c-modal-btn-failure" type="secondary">${this.labelFailure}</bux-btn>` : ""}\n            ${this.labelSuccess ? `<bux-btn class="c-modal-btn-success">${this.labelSuccess}</bux-btn>` : ""}\n          </bux-btn-group>` : "", this.btnsEl.querySelector("bux-btn-group") && (this.labelFailure && (this.koBtn = this.btnsEl.querySelector(".c-modal-btn-failure"), this.onFailure && (this.koBtn.onclick = this.onFailure)), this.labelSuccess && (this.okBtn = this.btnsEl.querySelector(".c-modal-btn-success"), this.onSuccess && (this.okBtn.onclick = this.onSuccess))) } setCross() { if (this.closable) { const t = document.createElement("button"); t.classList.add("c-modal__close"), t.innerHTML = '<bux2-svg icon="croix-fermer" size="xs" aria-hidden="true"></bux2-svg>', t.setAttribute("aria-label", "Cliquer ici pour fermer cette fenêtre de dialogue"); const e = this.modalHeader; e.parentNode.insertBefore(t, e.nextSibling), this.addCloseEvents() } } saveAttribute(t, e) { t.hasAttribute("save-" + e) || t.hasAttribute(e) && t.setAttribute("save-" + e, t.getAttribute(e)) } restoreAttribute(t, e, i) { return t.hasAttribute("save-" + e) ? (t.setAttribute(e, t.getAttribute("save-" + e)), t.removeAttribute("save-" + e), !0) : (i && t.setAttribute(e, i), !1) } hideEl(t) { "string" == typeof t && (t = document.querySelector(t)), t instanceof Element && (this.saveAttribute(t, "aria-hidden"), t.setAttribute("aria-hidden", "true"), this.saveAttribute(t, "tabindex"), t.setAttribute("tabindex", "-1")) } unHideEl(t) { "string" == typeof t && (t = document.querySelector(t)), t instanceof Element && (this.restoreAttribute(t, "aria-hidden") || t.removeAttribute("aria-hidden"), this.restoreAttribute(t, "tabindex") || t.removeAttribute("tabindex")) } removeHideToAllParents(t) { t && t.parentElement && (this.unHideEl(t.parentElement), this.removeHideToAllParents(t.parentElement)) } setVisibleOrNot() { this.visible ? (this.setAttribute("visible", "true"), this.modalWrapEl.classList.add("c-modal-visible"), this.modalWrapEl.classList.add("is-visible"), this.modal.classList.add("c-modal-visible"), this.hideEl("bux-skip-nav"), this.hideEl(this.navbar), this.hideEl(this.header), this.hideEl(this.footer), this.main && this.main.querySelectorAll("*").forEach((t => { t === this || this.contains(t) || this.hideEl(t) })), this.removeHideToAllParents(this), setTimeout((() => { document.querySelector(".c-modal__label").focus() }), 50), document.body.addEventListener("focus", this.loopFocusEventHandler, !0)) : (this.setAttribute("visible", "false"), this.modalWrapEl.classList.remove("c-modal-visible"), this.modalWrapEl.classList.remove("is-visible"), this.modal.classList.remove("c-modal-visible"), this.unHideEl("bux-skip-nav"), this.unHideEl(this.navbar), this.unHideEl(this.header), this.unHideEl(this.footer), this.main && this.main.querySelectorAll("*").forEach((t => { t === this || this.contains(t) || this.unHideEl(t) })), document.body.removeEventListener("focus", this.loopFocusEventHandler, !0), this.focusBackElement && setTimeout((() => { this.focusBackElement.focus() }), 50)) } setType() { "toast" === this.type ? (this.modalWrapEl.classList.add("c-modal-wrapper__toast"), this.modal.classList.add("c-modal__toast")) : (this.modalWrapEl.classList.add("c-modal-wrapper__modal"), this.modal.classList.add("c-modal__modal")) } addCloseEvents() { this.isEventRemove && (this.modalWrapEl.addEventListener("click", this.clickOverlayEventHandler), window.addEventListener("keyup", this.keyUpTabEventHandler), this.isEventRemove = !1) } removeCloseEvents() { this.isEventRemove || (this.modalWrapEl.removeEventListener("click", this.clickOverlayEventHandler), this.crossEl.removeEventListener("click", this.clickCrossEventHandler), window.removeEventListener("keyup", this.keyUpTabEventHandler), this.isEventRemove = !0) } clickOverlayEvent(t) { t.target === this.modalWrapEl && this.close() } clickCrossEvent() { this.close() } keyUpTabEvent(t) { 27 === t.which && this.close() } loopFocusEvent(t) { this.visible && !this.contains(t.target) && this.modalFirst.focus() } template() { return '\n      <div class="c-modal-wrapper" role="dialog" aria-modal="true">\n          <div class="c-modal">\n            <div class="u-hidden-visually c-modal-first" tabindex="0">Début de la fenêtre modale</div>\n            <div class="c-modal__header">\n              <h2 class="c-modal__label" tabindex="0"></h2>\n            </div>\n            <div class="c-modal__content">\n            </div>\n            <div class="c-modal__btns">\n            </div>\n            <div class="u-hidden-visually c-modal-last" tabindex="0">Fin de la fenêtre modale</div>\n          </div>\n      </div>\n    ' } }), i(129); const L = document.createElement("template"); L.innerHTML = '\n  <section class="c-reserve o-card-grid__item">\n    <bux-progress-ring>\n      <bux-text></bux-text>\n    </bux-progress-ring>\n    <div class="c-reserve__label"></div>\n    <bux-amount class="js-reserve-amount" align-right size="xl"></bux-amount>\n  </section>\n', customElements.define("bux-progress-reserve", class extends n { connectedCallback() { this.isInit || (this.appendChild(L.content.cloneNode(!0)), this.setReserveDisponible(), this.isInit = !0) } setReserveDisponible() { this.reserveLabel = this.getAttribute("data-label"), this.value = this.getAttribute("data-value"), this.reserveAmount = this.getAttribute("data-amount"), this.progressRingAriaLabel = this.getAttribute("a11y-label"), this.reserveAmountWrapper = this.querySelector(".js-reserve-amount"), this.progressRing = this.querySelector("bux-progress-ring"), this.progressText = this.querySelector("bux-text"), this.reserveLabelWrapper = this.querySelector(".c-reserve__label"), this.progressRing && (this.progressRing.setAttribute("a11y-label", this.progressRingAriaLabel), this.progressRing.setAttribute("data-value", this.value)), this.progressText && (this.progressText.textContent = this.value + "%"), this.reserveLabelWrapper && (this.reserveLabelWrapper.textContent = this.reserveLabel), this.reserveAmountWrapper && this.reserveAmountWrapper.setAttribute("data-value", this.reserveAmount) } }), i(130), customElements.define("bux-radio-group", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["data-value"] } attributeChangedCallback(t, e, i) { this.isInit && (this.value = i, this.setValue()) } setValue() { this.radioItems.forEach((t => { t.getAttribute("data-value") === this.value ? t.setAttribute("checked", "true") : t.removeAttribute("checked") })) } connectedCallback() { if (this.isInit) return; this.a11yLabel = this.getAttribute("a11y-label") || !1, this.type = this.getAttribute("type") || "list", this.radioName = "bux-radio-group-" + (Math.floor(1e4 * Math.random()) + 2), this.stepIn = this.hasAttribute("a11y-step-in") && "false" !== this.getAttribute("a11y-step-in"), this.stepOut = this.hasAttribute("a11y-step-out") && "false" !== this.getAttribute("a11y-step-out"), this.noMarginBottom = this.hasAttribute("no-margin-bottom") && "false" !== this.getAttribute("no-margin-bottom"); const t = document.createElement("template"); for (t.innerHTML = `\n        <div class="c-radio-group">\n          ${this.a11yLabel ? `\n          <legend class="c-radio-group__legend">${this.a11yLabel}</legend>\n          ` : ""}\n        </div>`, this.container = t.content.querySelector(".c-radio-group"), this.legend = t.content.querySelector("legend"); this.children.length > 0;)this.container.appendChild(this.children[0]); this.radioItems = t.content.querySelectorAll("bux-radio-button"), this.setType(), this.radioItems.forEach((t => { t.setAttribute("data-name", this.radioName), t.addEventListener("change", (t => { this.radioItems.forEach((e => { e === t.target.parentElement ? (e.checked = !0, this.setAttribute("data-value", e.getAttribute("data-value"))) : e.checked = !1 })) })) })), this.setSteps(), this.setMarginBottom(), this.appendChild(t.content), this.isInit = !0 } setType() { "row" === this.type && (this.container.classList.add("c-radio-group--row"), this.radioItems.forEach((t => t.classList.add("c-radio-group__item")))) } setMarginBottom() { if (!0 === this.noMarginBottom) { const t = "row" === this.type ? "c-radio-group--row--no-margin-bottom" : "c-radio-group--no-margin-bottom"; this.container.classList.add(t) } } setSteps() { if (!0 === this.stepIn) { const t = document.createElement("span"); t.setAttribute("class", "u-hidden-visually"), t.setAttribute("tabindex", 0), t.setAttribute("aria-label", "Début de la zone de saisie"), this.container.insertBefore(t, this.legend) } if (!0 === this.stepOut) { const t = document.createElement("span"); t.setAttribute("class", "u-hidden-visually"), t.setAttribute("tabindex", 0), t.setAttribute("aria-label", "Fin de la zone de saisie"), this.container.appendChild(t) } } }), customElements.define("bux-range-select", class extends n { constructor() { super(), this.isInit = !1, this.isEventRemove = !1, this.state = "empty", this.required = "false", this.selectLabel = "", this.selectLabelRight = "", this.selectWidth = "", this.rangeLabelLeft = "", this.rangeLabelRight = "", this.value = "0", this.valueMin = "0", this.valueMax = "12", this.step = "1", this.handleChangeEvent = this.changeEvent.bind(this) } static get observedAttributes() { return ["state", "required", "data-select-label", "data-select-label-right", "data-select-width", "data-range-label-left", "data-range-label-right", "data-value", "data-value-min", "data-value-max", "data-step"] } attributeChangedCallback(t, e, i) { const s = this.toCamelCase(t); if (this[s] = i, this.isInit) switch (s) { case "state": case "required": case "selectLabelRight": case "selectWidth": case "selectLabel": this.buxSelect.setAttribute(t, this[s]); break; case "rangeLabelLeft": case "rangeLabelRight": this.buxRange.setAttribute(t, this[s]); break; case "valueMin": case "valueMax": case "step": this.removeEvents(), this.innerHTML = this.template(), this.buxSelect = this.querySelector("bux-select"), this.buxRange = this.querySelector("bux-range"), this.addEvents(); break; case "value": this.buxSelect.setAttribute(t, this[s]), this.buxRange.setAttribute(t, this[s]) } } connectedCallback() { if (this.isInit && this.isEventRemove && this.addEvents(), this.isInit) return; this.initAttr("state"), this.initAttr("required"), this.initAttr("data-select-label"), this.initAttr("data-select-label-right"), this.initAttr("data-select-width"), this.initAttr("data-range-label-right"), this.initAttr("data-range-label-left"), this.initAttr("data-value-min"), this.initAttr("data-value-max"), this.initAttr("data-value"), this.initAttr("data-step"); const t = document.createElement("template"); t.innerHTML = this.template(), this.buxSelect = t.content.querySelector("bux-select"), this.buxRange = t.content.querySelector("bux-range"), this.addEvents(), this.appendChild(t.content), this.isInit = !0 } disconnectedCallback() { this.isInit && (this.removeEvents(), this.isEventRemove = !0) } changeEvent(t) { this.setAttribute("data-value", t.target.value) } removeEvents() { this.buxRange.removeEventListener("input", this.handleChangeEvent), this.buxSelect.removeEventListener("change", this.handleChangeEvent), this.isEventRemove = !1 } addEvents() { this.buxRange.addEventListener("input", this.handleChangeEvent), this.buxSelect.addEventListener("change", this.handleChangeEvent), this.isEventRemove = !0 } initAttr(t) { const e = this.toCamelCase(t); "" === this.getAttribute(t) ? this[e] = "" : this.setAttribute(t, this[e]) } makeArr(t, e, i) { const s = [], a = Number(t), n = Number(e), r = Number(i), o = Math.floor((n - a) / r) + 1; for (let t = 0; t < o; t++)s.push(t * i + a); return s } makeOption() { return this.makeArr(this.valueMin, this.valueMax, this.step).reduce(((t, e) => t + `<option value="${e}">${e}</option>`), []) } template() { return `\n          <div class="bux-range-w-select">\n            <bux-select\n              state="${this.state}"\n              required="${this.required}"\n              data-label="${this.selectLabel}"\n              data-label-right="${this.selectLabelRight}"\n              data-select-width="${this.selectWidth}"\n            >\n              ${this.makeOption()}\n            </bux-select>\n            <bux-range\n              data-label-left="${this.rangeLabelLeft}"\n              data-label-right="${this.rangeLabelRight}"\n              data-value="${this.value}"\n              data-value-min="${this.valueMin}"\n              data-value-max="${this.valueMax}"\n              data-step="${this.step}"\n            >\n            </bux-range>\n          </div>\n        ` } }); const A = t => { let e = [], i = null; for (; i = null === i ? t : Object.getPrototypeOf(i), i && i.constructor && i.constructor !== HTMLElement && i.constructor !== Function && i.constructor !== Object && i.constructor !== i.constructor.constructor;)e.push(i); return e }; let S = ""; document.currentScript && document.currentScript.src && (S = document.currentScript.src.replace("/bundle.js", "")); class T extends HTMLElement { setBooleanClass(t, e, i) { const s = i || this.container; t ? s.classList.add(e) : s.classList.remove(e) } get uxLibUrl() { return S } get navigator() { return i = (e = navigator.userAgent).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(i[1]) ? { name: "IE " + ((t = /\brv[ :]+(\d+)/g.exec(e) || [])[1] || "") } : "Chrome" === i[1] && null != (t = e.match(/\b(OPR|Edge)\/(\d+)/)) ? { name: t.slice(1).join(" ").replace("OPR", "Opera") } : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = e.match(/version\/(\d+)/i)) && i.splice(1, 1, t[1]), { name: i[0], version: i[1] }); var t, e, i } } function $(t) { return "checked" === t || "selected" === t || "disabled" === t || "open" === t } function I(t) { const e = t.split("-"); return "data" === e[0] && e.shift(), e.reduce(((t, e, i) => t + (i > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)), "") } function M(t) { return t.split(/(?=[A-Z])/).join("-").toLowerCase() } class B extends (function (t) { return class extends t { constructor() { super(); let t = (t => { let e = []; for (let i of [...t].reverse()) i.hasOwnProperty("template") && e.push(i.template); return e })(A(Object.getPrototypeOf(this))); 0 !== t.length && (this.$ ? (this.$.appendChild(t[t.length - 1].bind(this)().content.cloneNode(!0)), this.container = this.$.querySelector(".js-container"), this._slots = this.$.querySelectorAll("slot")) : (this.appendChild(t[t.length - 1].bind(this)().content.cloneNode(!0)), this.container = this.querySelector(".js-container"))) } } }(function (t) { return class extends t { constructor() { super(); let t = (t => { let e = []; for (let i of [...t].reverse()) i.constructor.hasOwnProperty("style") && e.push(i.constructor.style); return e })(A(Object.getPrototypeOf(this))); const e = document.createElement("template"); e.innerHTML = `<style>${t.join("")}</style>`, this.$ && (window.ShadyCSS && ShadyCSS.prepareTemplate(e, this.tagName.toLowerCase()), this.$.appendChild(e.content.cloneNode(!0))) } connectedCallback() { super.connectedCallback && super.connectedCallback(), window.ShadyCSS && ShadyCSS.styleElement(this) } } }(function (t) { return class extends t { constructor() { super(), this.attachShadow({ mode: "open" }), this.$ = this.shadowRoot } } }(function (t, e = "properties") { return class extends t { static get observedAttributes() { let t = []; const i = function (t, e) { let i = {}; for (let s of [...e].reverse()) s.hasOwnProperty(t) && (i = Object.assign(i, s[t])); return i }(e, (t => { let e = [], i = null; for (; i = null === i ? t : Object.getPrototypeOf(i), i && i !== HTMLElement && i !== Function && i !== Object && i !== i.constructor;)e.push(i); return e })(this)); return Object.keys(i).filter((e => { let s = i[e].attributeName; s ? e !== s && t.push(s) : t.push(M(e)) })).concat(t, super.observedAttributes || []) } constructor() { super(), this.protoTree = A(Object.getPrototypeOf(this)), this.propsConfig = function (t, e) { let i = {}; for (let s of [...e].reverse()) s.constructor.hasOwnProperty(t) && (i = Object.assign(i, s.constructor[t])); return i }(e, this.protoTree), Object.keys(this.propsConfig).forEach((t => { const e = this[t]; Object.defineProperty(this, t, function (t, e, i) { switch (i) { case "boolean": return { get: () => { if (!t.hasAttribute(e)) return !1; const i = t.getAttribute(e); return i === e || "true" === i || "" === i }, set: i => { t[e] != i && ("false" === i || !1 === i || null == i || 0 === i || "0" === i ? $(e) ? t.removeAttribute(e) : t.setAttribute(e, !1) : "true" === i || !0 === i || "1" === i || 1 === i || "" === i || i == e ? $(e) ? t.setAttribute(e, e) : t.setAttribute(e, !0) : console.error("Error when you set value")) } }; case "string": case "number": return { get: () => t.getAttribute(e), set: i => { t.getAttribute(e) != i && t.setAttribute(e, i) } } } }(this, this.getAttrNameFromJs(t), this.propsConfig[t].type)), void 0 !== e && (this[t] = e) })) } connectedCallback() { super.connectedCallback && super.connectedCallback(), Object.keys(this.propsConfig).forEach((t => { const e = this.getAttribute(this.getAttrNameFromJs(t)); null != e ? this[t] != e && (this[t] = e) : !this.propsConfig[t].defaultValue && 0 !== this.propsConfig[t].defaultValue && "" !== this.propsConfig[t].defaultValue || this[t] == this.propsConfig[t].defaultValue || (this[t] = this.propsConfig[t].defaultValue) })) } getJsNameFromAttr(t) { if (this.propsConfig[I(t)]) return I(t); const e = Object.keys(this.propsConfig); for (let i = 0, s = e.length; i < s; i++)if (this.propsConfig[e[i]].attributeName && this.propsConfig[e[i]].attributeName === t) return e[i] } getAttrNameFromJs(t) { return this.propsConfig[t].attributeName ? this.propsConfig[t].attributeName : M(t) } } }(T))))) { } const q = i(131), z = document.createElement("template"); z.innerHTML = '\n<div class="c-bux-sadsmiley-error" role="alert">\n  <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 1024 1024"><path d="M512 0C229.688 0 0 229.688 0 512s229.688 512 512 512c282.335 0 512-229.688 512-512S794.335 0 512 0zm0 979.478C254.22 979.478 44.522 769.781 44.522 512 44.522 254.22 254.219 44.522 512 44.522c257.759 0 467.478 209.697 467.478 467.478 0 257.78-209.72 467.478-467.478 467.478z"/><path d="M400.696 422.957c0-36.82-29.963-66.783-66.783-66.783s-66.783 29.963-66.783 66.783c0 36.819 29.964 66.782 66.783 66.782 36.82 0 66.783-29.963 66.783-66.782zm-89.044 0c0-12.266 9.995-22.261 22.261-22.261s22.26 9.995 22.26 22.26c0 12.266-9.994 22.261-22.26 22.261-12.266 0-22.26-9.995-22.26-22.26zM690.087 356.174c-36.82 0-66.783 29.963-66.783 66.783 0 36.819 29.963 66.782 66.783 66.782s66.783-29.963 66.783-66.782c0-36.82-29.964-66.783-66.783-66.783zm0 89.043c-12.288 0-22.26-9.995-22.26-22.26 0-12.266 9.972-22.261 22.26-22.261 12.288 0 22.26 9.995 22.26 22.26 0 12.266-9.972 22.261-22.26 22.261zM512 623.304c-82.989 0-162.06 35.15-216.932 96.457-8.192 9.171-7.413 23.24 1.736 31.432 9.172 8.214 23.24 7.413 31.433-1.736 46.436-51.89 113.419-81.63 183.763-81.63 70.344 0 137.327 29.74 183.763 81.63 4.386 4.92 10.485 7.413 16.585 7.413 5.276 0 10.618-1.87 14.848-5.677 9.149-8.192 9.928-22.26 1.736-31.432C674.06 658.477 595.011 623.304 512 623.304z"/></svg>\n  <slot></slot>\n</div>\n', window.customElements.define("bux-sadsmiley-error", class extends B { constructor() { super() } static get style() { return q.toString() } template() { return z } }), i(132), customElements.define("bux-skip-nav", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; const t = document.createElement("template"); t.innerHTML = '\n        <nav id="skipnav" aria-labelledby="main-title">\n          <ul class="c-skipnav-ul">\n              <li><a class="c-skipnav-a" href="#left-nav">Accéder au menu principal</a></li>\n              <li><a class="c-skipnav-a" href="#main">Accéder au contenu</a></li>\n              <li><a class="c-skipnav-a" href="#c-header-desktop">Accéder au menu personnel</a></li>\n              <li><a class="c-skipnav-a" href="/public/accessibilite">Accéder à la page accessibilité</a></li>\n          </ul>\n        </nav>'; const e = t.content.querySelectorAll(".c-skipnav-a"), i = t.content.querySelector("#skipnav"); e.forEach((t => { t.addEventListener("focus", (() => { i.classList.add("c-skipnav-open") })), t.addEventListener("blur", (() => { i.classList.remove("c-skipnav-open") })), t.addEventListener("click", (e => { e.preventDefault(); const i = document.getElementById(t.href.split("#").pop()); i.setAttribute("tabindex", "-1"), i && i.focus() })) })), this.appendChild(t.content), this.isInit = !0 } }), i(133), customElements.define("bux-steps", class extends n { constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0; const t = document.createElement("template"); for (t.innerHTML = '<div class="c-steps"></div>', this.wrapSlot = t.content.querySelector(".c-steps"); this.childNodes.length > 0;)this.wrapSlot.appendChild(this.childNodes[0]); this.appendChild(t.content) } }), i(134); const N = document.createElement("template"); N.innerHTML = '\n  <div class="c-user-card">\n    <div class="c-user-card__img">\n      <bux2-image src="profil.png" aria-hidden="true" width="82" height="82"></bux2-image>\n    </div>\n  </div>\n  ', customElements.define("bux-user-card", class extends n { static get observedAttributes() { return ["data-label", "data-sublabel", "profil"] } constructor() { super(), this.isInit = !1 } connectedCallback() { if (this.isInit) return; this.isInit = !0; const t = N.content.cloneNode(!0); this.container = t.querySelector(".c-user-card"), this._upgradeProperty("label"), this._upgradeProperty("sublabel"), this._upgradeProperty("profil"), this._setLabel(), this._setSubLabel(), this._setProfil(), this.appendChild(t) } _upgradeProperty(t) { if (this.hasOwnProperty(t)) { const e = this[t]; delete this[t], this[t] = e } } attributeChangedCallback(t) { switch (t) { case "data-label": this.container && this._setLabel(); break; case "data-sublabel": this.container && this._setSubLabel(); break; case "profil": this.container && this._setProfil() } } set label(t) { this.setAttribute("data-label", t) } get label() { return this.getAttribute("data-label") } set subLabel(t) { this.setAttribute("data-sublabel", t) } get subLabel() { return this.getAttribute("data-sublabel") } get profil() { return this.hasAttribute("profil") } set profil(t) { Boolean(t) ? this.setAttribute("profil", "") : this.removeAttribute("profil") } _setLabel() { if (this.container.querySelector(".c-user-card__label")) this.container.querySelector(".c-user-card__label").textContent = this.label; else { const t = document.createElement("div"); t.classList.add("c-user-card__label"), t.textContent = this.label, this.container.appendChild(t) } } _setSubLabel() { if (this.container.querySelector(".c-user-card__sublabel")) this.container.querySelector(".c-user-card__sublabel").textContent = this.subLabel; else { const t = document.createElement("small"); t.classList.add("c-user-card__sublabel"), t.textContent = this.subLabel, this.container.appendChild(t) } } _setProfil() { !0 === this.profil ? this.container.classList.add("c-user-card--profil") : this.container.classList.remove("c-user-card--profil") } }), i(135), customElements.define("bux-widget", class extends n { static get observedAttributes() { return ["data-label"] } constructor() { super(), this.isInit = !1 } attributeChangedCallback(t) { "data-label" === t && this._updateLabel() } connectedCallback() { this.isInit || (this.isInit = !0, this.classList.add("c-widget"), this._setLabel()) } set label(t) { this.setAttribute("data-label", t) } get label() { return this.getAttribute("data-label") } _setLabel() { this.label && (this.labelCont = document.createElement("h2"), this.labelCont.classList.add("c-widget__label"), this.labelCont.textContent = this.label, this.insertBefore(this.labelCont, this.firstChild)) } _updateLabel() { this.isInit && !this.label && (this.labelCont || this._setLabel(), this.labelCont.textContent = this.label) } }); var H = i(2), j = i.n(H); i(136); const R = j()(window); customElements.define("bux-sitemap", class extends n { constructor() { super(), this.isInit = !1, this.arrMenu = [], this.tags = {}, this.els = {}, this.elsActive = {}, this.elsUnActive = {}, this.first = !0 } get data() { return this._data } set data(t) { this._data = t, this.isInit && this.init() } connectedCallback() { this.isInit || (this.isInit = !0, this.innerHTML = '\n      <div id="sitemapinputwrap">\n        <bux-input data-icon-left="loupe" data-list="sitemapdatalist" data-placeholder="Recherche une fonctionnalité" id="sitemapinput"></bux-input>\n        <datalist id="sitemapdatalist"></datalist>\n        <bux-btn id="sitemapbtn">Rechercher</bux-btn>\n      </div>\n      <bux-block id="sitemapblock"></bux-block>\n      <bux-end-process id="sitemapblockerror"\n        data-icon="loupe"\n        autofocus="false"\n        style="display:none;"\n      >\n      </bux-end-process>\n    ', this.block = this.querySelector("#sitemapblock"), this.input = this.querySelector("#sitemapinput"), this.btn = this.querySelector("#sitemapbtn"), this.datalist = this.querySelector("#sitemapdatalist"), this.hasAttribute("nosearch") ? (this.querySelector("#sitemapinputwrap").style.display = "none", this.querySelector("#sitemapblockerror").style.display = "none") : (this.btn.addEventListener("click", (() => this.toogleDisplay(this.input.value))), this.input.addEventListener("keypress", (t => { 13 == t.which && this.btn.click(), "" === this.input.value ? this.input.setAttribute("data-icon-right", "aaaaaa") : (this.input.setAttribute("data-icon-right", "croix-fermer"), this.input.value && (this.input.value = ("" + this.input.value).toLowerCase()), this.first && (this.querySelector(".bux-input-ico-right").addEventListener("click", (() => { this.input.value = "", this.btn.click(), this.input.setAttribute("data-icon-right", "aaaaaa") })), this.first = !1)) }))), this.init()) } toogleDisplay(t) { "" === t || null == t ? (this.setError(!1), this.removeActive()) : Object.prototype.hasOwnProperty.call(this.tags, t) ? (this.setError(!1), this.removeActive(), this.fillActiveUnactiveEl(t), this.setActive()) : (this.setError(!0), this.removeActive()), this.toggleEmptySiteMapBlock() } toggleEmptySiteMapBlock() { this.arrMenu.forEach((t => { const e = [...this["sitemap" + t].children]; e.forEach((t => this.toggleEmptyBlock(t))), 0 === e.filter((t => !t.classList.contains("c-sitemap__unactive"))).length ? this["sitemap" + t].classList.add("c-sitemap__unactive") : this["sitemap" + t].classList.remove("c-sitemap__unactive") })); for (let t = this.arrMenu.length; t > 0; t--) { const e = this.arrMenu[t - 1]; if (!this["sitemap" + e].classList.contains("c-sitemap__unactive")) { this["sitemap" + e].classList.add("c-sitemap-item-wrap__last-visible"); break } } } toggleEmptyBlock(t) { const e = [...t.querySelectorAll(".c-sitemap-item-li")]; 0 !== e.length && (0 === e.filter((t => !t.classList.contains("c-sitemap__unactive"))).length ? t.classList.add("c-sitemap__unactive") : t.classList.remove("c-sitemap__unactive")) } fillActiveUnactiveEl(t) { Object.keys(this.tags).forEach((e => { const i = this.tags[e]; e === t ? i.forEach((t => { this.els[t] && (this.elsActive[t] = this.els[t]) })) : i.forEach((t => { this.els[t] && (this.elsUnActive[t] = this.els[t]) })) })), Object.keys(this.elsUnActive).forEach((t => { Object.keys(this.elsActive).forEach((e => { t === e && delete this.elsUnActive[e] })) })) } removeActive() { Object.keys(this.elsActive).forEach((t => { this.elsActive[t].classList.remove("c-sitemap__active") })), this.elsActive = {}, Object.keys(this.elsUnActive).forEach((t => { this.elsUnActive[t].classList.remove("c-sitemap__unactive") })), this.elsUnActive = {} } setActive() { Object.keys(this.elsActive).forEach((t => { this.elsActive[t].classList.add("c-sitemap__active") })), Object.keys(this.elsUnActive).forEach((t => { this.elsUnActive[t].classList.add("c-sitemap__unactive") })) } getAllEl() { Object.keys(this.els).forEach((t => { this.els[t] = this.querySelector("#" + t) })) } getEl(t) { return this.querySelector("#" + t) } init() { this._data && (this.splitData(), this.makeTagsObject(), this.fillDataList(), this.createHTML(), this.getAllEl(), this.toogleDisplay()) } fillDataList() { Object.keys(this.tags).forEach((t => { if ("notag" === t || "" === t) return; const e = document.createElement("option"); e.value = t, this.datalist.appendChild(e) })) } splitData() { this._data.forEach((t => { if (void 0 === this["dataMenu" + t.menu]) { this.arrMenu.push(t.menu); const e = document.createElement("div"); e.id = "sitemap" + t.menu, e.classList.add("c-sitemap-item-wrap"), this["sitemap" + t.menu] = e, this.block.appendChild(e), this["dataMenu" + t.menu] = [] } this["dataMenu" + t.menu].push(t) })) } createHTML() { this.arrMenu.forEach((t => { this["sitemap" + t].innerHTML = this.makeOneGroup(this["dataMenu" + t], "dataMenu" + t) })) } makeOneGroup(t, e) { let i = ""; return t.forEach(((t, s) => { const a = e + "-" + s; this.els[a] = null, i += `\n        <section id="${a}" class="c-sitemap-item-section"><div class="c-sitemap-item-div">\n          ${t.path ? `\n                  <a href="${t.path}" class="c-sitemap-item-header">\n                  ${t.icon ? `<bux-svg data-icon=${t.icon} data-class="c-sitemap-item-header-icon"></bux-svg>` : ""}\n                    <span class="c-sitemap-item-label-wrap">${t.label}</span>\n                    <bux-svg data-icon="chevron" data-class="c-sitemap-chevron">\n                </a>\n                ${this.makeChildrenItem(t, a)}\n              ` : `\n                  <div class="c-sitemap-item-header">\n                  ${t.icon ? `<bux-svg data-icon=${t.icon} data-class="c-sitemap-item-header-icon"></bux-svg>` : ""}\n                    <span class="">${t.label}</span>\n                </div>\n                ${this.makeChildrenItem(t, a)}\n              `}\n        </div></section>\n        ` })), i } makeChildrenItem(t, e) { let i = "", s = e; const a = (t, e) => { const a = t.path || t.navtop[0].path; this.els[s + "-" + e] = null, i += `\n        <li id="${s}-${e}" class="c-sitemap-item-li">\n          <a class="c-sitemap-item-a" href="${a}">\n            <div class="c-sitemap-item-label-wrap">\n              <span class="c-sitemap-item-label">${t.label}</span>\n              ${t.sublabel ? `<span class="c-sitemap-item-sublabel">${t.sublabel}</span>` : ""}\n            </div>\n            <bux-svg data-icon="chevron" data-class="c-sitemap-chevron">\n          </a>\n        </li>` }; return t.submenu && (s = e + "-submenu", i += '<ul class="u-list c-sitemap-item-ul">', t.submenu.forEach(a), i += "</ul>"), t.navtop && (s = e + "-navtop", i += '<ul class="u-list c-sitemap-item-ul">', t.navtop.forEach(a), i += "</ul>"), i } makeTagsObject() { const t = e => i => { const s = e.split("-").length; i.forEach(((i, a) => { let n = !1; i.tags && (n = !0, i.tags.forEach((t => { Object.prototype.hasOwnProperty.call(this.tags, t) || (this.tags[t] = []), this.tags[t].push(`${e}-${a}`) }))), i.submenu && (n = !0, t(`${e}-${a}-submenu`)(i.submenu)), i.navtop && (n = !0, t(`${e}-${a}-navtop`)(i.navtop)), (!n || s >= 3 && !i.tags) && (Object.prototype.hasOwnProperty.call(this.tags, "notag") || (this.tags.notag = []), this.tags.notag.push(`${e}-${a}`)) })) }; this.tags[""] = [], this.arrMenu.forEach((e => { t("dataMenu" + e)(this["dataMenu" + e]) })) } setError(t) { const e = this.querySelector("#sitemapblockerror"), i = this.querySelector("#sitemapblock"); t ? (e.setAttribute("data-html", `<p>Nous n'avons pas trouvé de fonctionnalité correspondant à la recherche<br/>\n            <strong>"${R.sanitize(this.input.value, { ALLOWED_TAGS: ["#text"], KEEP_CONTENT: !1 })}"\n            </strong>\n          </p>\n      <bux-message type="info"><p>Vérifiez l'orthographe ou relancer une recherche avec de nouveaux termes</p></bux-message>\n      `), e.style.display = "", i.style.display = "none") : (e.style.display = "none", i.style.display = "") } }), i(137), customElements.define("bux-end-process", class extends n { constructor() { super(), this.isInit = !1 } static get observedAttributes() { return ["data-html"] } attributeChangedCallback() { this.setHtml() } setHtml() { const t = this.getAttribute("data-html") || null, e = this.querySelector(".c-end-process__html"); e && t && (e.innerHTML = t, e.style.display = "") } connectedCallback() { if (this.isInit) return; this.isInit = !0, this.type = this.getAttribute("type") || null; const t = document.createElement("template"); if (t.innerHTML = `\n        <section class="c-end-process${this.type ? " c-end-process--" + this.type : ""}"\n         ${"smi" === this.type ? 'role="alert" aria-live="assertive"' : ""}\n        >\n          ${this.setIcon()}\n          ${this.setLabel()}\n          ${this.setSubLabel()}\n          <div class="c-end-process__html" style="display:none;"></div>\n          ${this.setBtn()}\n        </section>\n      `, this.appendChild(t.content), this.setEvent(), this.setHtml(), "false" !== this.getAttribute("autofocus")) { const t = this.querySelector(".c-end-process__label"), e = this.querySelector(".c-end-process__sublabel"); t ? t.focus() : e && (e.setAttribute("tabindex", "0"), e.focus()) } } setIcon() { const t = this.getAttribute("data-icon") || null, e = this.getAttribute("data-img") || null; return t ? `<bux-svg data-icon=${t} data-class="c-end-process__icon"></bux-svg>` : e ? `<img aria-hidden="true" alt="" src=${e} class="c-end-process__img" />` : "success" === this.type ? '<bux-svg data-icon="coche" data-class="c-end-process__icon"></bux-svg>' : "error" === this.type ? '<bux-svg data-icon="croix-suppr" data-class="c-end-process__icon"></bux-svg>' : "underConstruction" === this.type ? `<img aria-hidden="true" alt="" height="205" widht="175" src="${this.uxLibUrl}/./assets/images/construction.png" class="c-end-process__img" />` : "debranchement" === this.type ? '<bux-svg data-icon="fleches-chargement" data-class="c-icon c-icon--huge"></bux-svg>' : "pending" === this.type ? '<div class="rotating-icon__wrapper"><bux-svg data-icon="fleches-chargement" data-class="c-end-process__icon"></bux-svg></div>' : "smi" === this.type ? `<img aria-hidden="true" alt="" height="205" widht="175" src="${this.uxLibUrl}/./assets/images/broken-screen.png" class="c-end-process__img" />` : "redirection" === this.type ? `<img aria-hidden="true" alt="" height="205" widht="175" src="${this.uxLibUrl}/./assets/images/redirection.png" class="c-end-process__img" />` : "" } setLabel() { const t = this.getAttribute("data-label") || null; return t ? `<p class="c-end-process__label" tabindex="0">${t}</p>` : "smi" === this.type ? '<p class="c-end-process__label" tabindex="0">Cette fonctionnalité est momentanément indisponible</p>' : "debranchement" === this.type ? '<p class="c-end-process__label" tabindex="0">Redirection en cours</p>' : "" } setSubLabel() { const t = this.getAttribute("data-sublabel") || null; return t ? `<p class="c-end-process__sublabel" tabindex="0">${t}</p>` : "smi" === this.type ? '<p tabindex="0">Nous mettons en oeuvre les moyens nécessaires pour rétablir ce service dans les meilleurs délais. Nous vous remercions par avance de votre compréhension.</p><p class="c-end-process__sublabel" tabindex="0">Vous pouvez accéder aux autres fonctionnalités en sélectionnant le menu de votre choix.</p>' : "underConstruction" === this.type ? '<p class="c-end-process__sublabel" tabindex="0">Cette fonctionnalité n\'est pas encore disponible sur cette nouvelle version du site.<strong>Vous allez être dirigés vers l\'ancien site</strong> pour réaliser votre opération.</p>' : "debranchement" === this.type ? '<p class="c-end-process__sublabel" tabindex="0">Cette fonctionnalité n\'est pas encore disponible sur cette nouvelle version du site.<br aria-hidden="true"><strong>Vous allez être dirigés vers l\'ancien site</strong> pour réaliser votre opération.</p>' : "" } setBtn() { const t = this.getAttribute("data-url") || null, e = this.getAttribute("data-type-button") || "link", i = this.getAttribute("data-label-button") || null; return t && i ? `<bux-btn data-role="${e}" data-link="${t}">${i}</bux-btn>` : i ? `<bux-btn data-role="${e}">${i}</bux-btn>` : "smi" === this.type ? `<bux-btn data-role="link" data-link="${t}">Revenir à l'accueil</bux-btn>` : "underConstruction" === this.type && t || "debranchement" === this.type && t ? `<bux-btn data-role="link" data-link="${t}">Accéder à la fonctionnalité</bux-btn>` : "" } setEvent() { const t = this.querySelector("bux-btn"); t && t.addEventListener("click", (() => this.dispatchEvent(new CustomEvent("end")))) } }), i(138), i(139); var O = i(3), P = i.n(O); const D = document.createElement("template"); D.innerHTML = '<span class="js-container c-text"><slot></slot></span>', window.customElements.define("bux2-font", class extends B { static get properties() { return { size: { type: "string", attributeName: "data-size" }, bold: { type: "boolean" }, italic: { type: "boolean" }, underline: { type: "boolean" }, uppercase: { type: "boolean" }, color: { type: "string", attributeName: "data-color" } } } static get style() { return P.a.toString() } constructor() { super() } template() { return D } attributeChangedCallback(t, e, i) { switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "data-size": this._setSize(); break; case "bold": this._setBold(); break; case "italic": this._setItalic(); break; case "underline": this._setUnderline(); break; case "uppercase": this._setUppercase(); break; case "data-color": this._setColor() } } _setSize() { switch (this.size) { case "xs": case "sm": case "md": case "lg": case "xl": this.container.classList.add("c-text--" + this.size) } } _setBold() { this.bold ? this.container.classList.add("c-text--bold") : this.container.classList.remove("c-text--bold") } _setItalic() { this.italic ? this.container.classList.add("c-text--italic") : this.container.classList.remove("c-text--italic") } _setUnderline() { this.underline ? this.container.classList.add("c-text--underline") : this.container.classList.remove("c-text--underline") } _setUppercase() { this.uppercase ? this.container.classList.add("c-text--uppercase") : this.container.classList.remove("c-text--uppercase") } _setColor() { switch (this.container.classList.remove("c-text--color-part", "c-text--color-pro", "c-text--color-success", "c-text--color-error"), this.container.style.color = "", this.color) { case "part": case "pro": case "success": case "error": this.container.classList.add("c-text--color-" + this.color); break; default: /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.color) && (this.container.style.color = this.color) } } }), i(140); var V = i(4), U = i.n(V); const F = document.createElement("template"); F.innerHTML = '\n<div class="js-container c-row">\n  <slot></slot>\n  <slot name="link"></slot>\n</div>\n', customElements.define("bux2-row", class extends B { static get properties() { return { background: { type: "boolean" }, backgroundLight: { type: "boolean", attributeName: "background-light" }, borderTop: { type: "boolean", attributeName: "border-top" }, borderBottom: { type: "boolean", attributeName: "border-bottom" }, borderFull: { type: "boolean", attributeName: "border-full" }, marginBottom: { type: "boolean", attributeName: "margin-bottom" } } } static get style() { return U.a.toString() } template() { return F } constructor() { super(), this._checkIfLink = this._checkIfLink.bind(this) } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container) switch (t) { case "background": this._setbackground(); break; case "background-light": this._setbackgroundLight(); break; case "border-top": this._setborderTop(); break; case "border-bottom": this._setborderBottom(); break; case "border-full": this._setborderFull(); break; case "margin-bottom": this._setmarginBottom() } } connectedCallback() { this._slots.forEach((t => { t.addEventListener("slotchange", this._checkIfLink) })); const t = this.children; for (var e = 0; e < t.length; e++)t[e].hasAttribute("push-right") && t[e].setAttribute("style", "margin-left: auto") } disconnectedCallback() { this._slots.forEach((t => { t.removeEventListener("slotchange", this._checkIfLink) })) } _setbackground() { this.background ? this.container.classList.add("c-row--background") : this.container.classList.remove("c-row--background") } _setbackgroundLight() { this.backgroundLight ? this.container.classList.add("c-row--background-light") : this.container.classList.remove("c-row--background-light") } _setborderTop() { this.borderTop ? this.container.classList.add("c-row--border-top") : this.container.classList.remove("c-row--border-top") } _setborderBottom() { this.borderBottom ? this.container.classList.add("c-row--border-bottom") : this.container.classList.remove("c-row--border-bottom") } _setborderFull() { this.borderFull ? this.container.classList.add("c-row--border-full") : this.container.classList.remove("c-row--border-full") } _setmarginBottom() { this.marginBottom ? this.container.classList.add("c-row--margin-bottom") : this.container.classList.remove("c-row--margin-bottom") } _checkIfLink() { this.querySelector("bux2-link") && (this.querySelector("bux2-link").style.flex = "0 0 100%") } }), i(141); var W = i(5), K = i.n(W); function G(t) { return class extends t { static get properties() { return { size: { type: "string" } } } constructor() { super() } static get style() { return K.a.toString() } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container && "size" === t) switch (this.container.className = this.container.className.replace(/c-text--\w*/g, ""), this.size) { case "xs": case "sm": case "md": case "lg": case "xl": case "xxl": this.container.classList.add("c-text--" + this.size) } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.container && this.container.classList.add("c-text") } } } function X(t) { return class extends t { static get properties() { return { bold: { type: "boolean" } } } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container && "bold" === t && (this.bold ? this.container.style.fontWeight = "bold" : this.container.style.fontWeight = "") } } } function Y(t) { return class extends t { static get properties() { return { center: { type: "boolean" }, left: { type: "boolean" }, right: { type: "boolean" } } } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container) switch (t) { case "center": this.center ? (this.container.style.textAlign = "center", this.container.style.display = "block") : (this.container.style.textAlign = "normal", this.container.style.display = ""); break; case "left": this.left ? (this.container.style.textAlign = "left", this.container.style.display = "block") : (this.container.style.textAlign = "normal", this.container.style.display = ""); break; case "right": this.right ? (this.container.style.textAlign = "right", this.container.style.display = "block") : (this.container.style.textAlign = "normal", this.container.style.display = "") } } } } var J = i(6), Z = i.n(J); function Q(t) { return class extends t { static get properties() { return { theme: { type: "string" } } } constructor() { super() } static get style() { return Z.a.toString() } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container && "theme" === t) switch (this.theme) { case "part": case "pro": case "light": case "dark": case "white": case "error": case "success": this.container.classList.add("c-theme--" + this.theme) } } } } function tt(t) { return class extends t { static get properties() { return { tag: { type: "string" } } } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "tag" === t) { const t = this.$.querySelector(".m-tag"); if (t) { if (t.tagName.toLowerCase() === this.tag) return; const e = t.parentNode, i = document.createElement(this.tag); for (let e = 0, s = t.attributes.length; e < s; e++) { const s = t.attributes[e]; i.setAttribute(s.nodeName, s.nodeValue) } for (; t.childNodes.length > 0;)i.appendChild(t.childNodes[0]); e.replaceChild(i, t), this.container = this.$.querySelector(".js-container"), this.container || (this.container = this) } } } } } var et = i(7), it = i.n(et); function st(t) { return class extends t { static get properties() { return { background: { type: "boolean" }, backgroundLight: { type: "boolean" }, backgroundHover: { type: "boolean" } } } static get style() { return it.a.toString() } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container && ("background" === t ? this.background ? this.container.style.backgroundColor = "var(--color-background)" : this.container.style.backgroundColor = this.container.style.backgroundColor.replace("var(--color-background)", "") : "background-light" === t ? this.backgroundLight ? this.container.style.backgroundColor = "var(--color-background-light)" : this.container.style.backgroundColor = this.container.style.backgroundColor.replace("var(--color-background-light)", "") : "background-hover" === t && (this.backgroundHover ? this.container.classList.add("m-background-hover") : this.container.classList.remove("m-background-hover"))) } } } var at = i(8), nt = i.n(at); const rt = tt(Q(G(X(Y(st(B)))))), ot = document.createElement("template"); ot.innerHTML = '<span class="js-container m-tag"><slot></slot></span>', customElements.define("bux2-amount", class extends rt { static get properties() { return { value: { type: "number" }, currency: { type: "string" }, round: { type: "boolean" }, suffix: { type: "string" }, minFractionDigits: { type: "number" }, maxFractionDigits: { type: "number" } } } template() { return ot } constructor() { super() } static get style() { return nt.a.toString() } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i) switch (t) { case "value": case "currency": case "round": case "suffix": case "min-fraction-digits": case "max-fraction-digits": let e = Number(this.value); if (!isNaN(e)) { let t; if (t = this.round ? 0 : 2, this.textContent = "" + e.toLocaleString("fr", { minimumFractionDigits: null !== this.minFractionDigits ? Number(this.minFractionDigits) : t, maximumFractionDigits: null !== this.maxFractionDigits ? Number(this.maxFractionDigits) : t, style: "currency", currency: this.currency || "EUR" }), !this.container) return; e < 0 ? this.container.classList.add("c-amount--negative") : this.container.classList.remove("c-amount--negative"), this.suffix && (this.textContent = this.textContent + this.suffix) } break; case "background": case "background-light": if (!this.container) return; this.background || this.backgroundLight ? this.container.classList.add("c-amount--" + t) : this.container.classList.remove("c-amount--" + t) } } }); var lt = i(9), ct = i.n(lt); function dt(t) { return class extends t { static get style() { return ct.a.toString() } } } const ut = dt(B), ht = document.createElement("template"); ht.innerHTML = '<button class="c-btn js-container"><slot></slot></button>'; class pt extends ut { static get properties() { return { type: { type: "string" }, disabled: { type: "boolean" }, size: { type: "string" }, nostyle: { type: "boolean" }, a11yLabel: { type: "string" } } } template() { return ht } constructor() { super(), this._btn = this.$.querySelector(".c-btn") } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container) switch (t) { case "type": this._setType(); break; case "disabled": this._setDisabled(); break; case "size": this._setSize(); break; case "nostyle": this._setNoStyle(); break; case "a11y-label": this._setLabel() } } _setType() { switch (this.type) { case "primary": this.container.classList.add("c-btn--primary"); break; case "secondary": this.container.classList.add("c-btn--secondary"); break; case "tertiary": this.container.classList.add("c-btn--tertiary") } } _setDisabled() { this.hasAttribute("disabled") && "false" !== this.getAttribute("disabled") ? (this.container.classList.add("c-btn--disabled"), this._btn.setAttribute("disabled", "true")) : (this.container.classList.remove("c-btn--disabled"), this._btn.removeAttribute("disabled")) } _setSize() { switch (this.size) { case "small": this.container.classList.add("c-btn--small"); break; case "medium": this.container.classList.add("c-btn--medium"); break; case "large": this.container.classList.add("c-btn--large") } } _setNoStyle() { this.hasAttribute("nostyle") ? (this.container.classList.remove("c-btn"), this.container.classList.add("m-btn-no-style")) : (this.container.classList.add("c-btn"), this.container.classList.remove("m-btn-no-style")) } _setLabel() { this.hasAttribute("a11y-label") ? this.container.setAttribute("aria-label", this.a11yLabel) : this.container.removeAttribute("aria-label") } } var bt = i(10), mt = i.n(bt); window.customElements.define("bux2-btn", class extends pt { static get style() { return mt.a.toString() } }); const gt = B; class vt extends gt { static get properties() { return { checked: { type: "boolean" }, disabled: { type: "boolean" } } } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i) switch (t) { case "checked": this.checked ? this.setAttribute("aria-checked", !0) : this.setAttribute("aria-checked", !1); break; case "disabled": this.disabled ? (this.setAttribute("aria-disabled", !0), this.removeAttribute("tabindex"), this.blur()) : (this.setAttribute("tabindex", "0"), this.setAttribute("aria-disabled", !1)) } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "checkbox"), this.hasAttribute("tabindex") || this.setAttribute("tabindex", 0), this.addEventListener("keyup", this._onKeyUp), this.addEventListener("click", this._onClick) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("keyup", this._onKeyUp), this.removeEventListener("click", this._onClick) } _onKeyUp(t) { t.altKey || 32 === t.keyCode && (t.preventDefault(), this._toggleChecked()) } _onClick() { this._toggleChecked() } _toggleChecked() { this.disabled || (this.checked = !this.checked, this.dispatchEvent(new CustomEvent("change", { detail: { checked: this.checked }, bubbles: !0 }))) } } var ft = i(11), xt = i.n(ft); customElements.define("bux2-checkbox", class extends vt { static get style() { return xt.a.toString() } }); var yt = i(12), kt = i.n(yt); function wt(t) { return class extends t { static get properties() { return { verticalSpace: { type: "string", attributeName: "space-v" }, horizontalSpace: { type: "string", attributeName: "space-h" }, spaceAll: { type: "boolean", attributeName: "space-all" } } } static get style() { return kt.a.toString() } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container) switch (t) { case "space-v": this.container.classList.add("c-stack"), this.container.classList.add("c-stack--vertical"); const t = this._getVerticalSpaceValue(); this._setStack(t); break; case "space-h": this.container.classList.add("c-stack"), this.container.classList.add("c-stack--horizontal"); const e = this._getHorizontalSpaceValue(); this._setStack(e) } } _allChildren() { return Array.from(this.children) } _getVerticalSpaceValue() { return `var(--spacing-${this.verticalSpace})` } _getHorizontalSpaceValue() { return `var(--spacing-${this.horizontalSpace})` } _setStack(t) { const e = this._allChildren(), i = e.some((function (t) { return t.hasAttribute("block-arrow") || t.hasAttribute("block") })); let s; s = this.spaceAll ? e : i ? e.slice(0, -2) : e.slice(0, -1), s.forEach((e => { this.verticalSpace && (e.style.marginBottom = t), this.horizontalSpace && (e.style.marginRight = t), e.style.display || (e.style.display = "block") })) } } } const Ct = wt(B); let _t = 0; const Et = document.createElement("template"); Et.innerHTML = '\n<section class="c-checkbox-group js-container">\n  <slot name="group-label"></slot>\n  <slot></slot>\n</section>'; class Lt extends Ct { template() { return Et } constructor() { super(), this.count = _t++ } connectedCallback() { this.setAttribute("role", "group"), this.setAttribute("aria-labelledby", "group-checkbox-" + this.count), this.querySelector('[slot="group-label"]').id = "group-checkbox-" + this.count } } var At = i(13), St = i.n(At); function Tt(t) { return class extends t { static get properties() { return { center: { type: "boolean" }, left: { type: "boolean" }, right: { type: "boolean" } } } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container) switch (t) { case "center": this.center ? (this.container.style.marginLeft = "auto", this.container.style.marginRight = "auto", this.container.style.display = "block") : (this.container.style.marginLeft = "", this.container.style.marginRight = "", this.container.style.display = ""); break; case "left": this.left ? (this.container.style.marginRight = "auto", this.container.style.display = "block") : (this.container.style.marginRight = "", this.container.style.display = ""); break; case "right": this.right ? (this.container.style.marginLeft = "auto", this.container.style.display = "block") : (this.container.style.marginLeft = "", this.container.style.display = "") } } } } customElements.define("bux2-checkbox-group", class extends Lt { static get style() { return St.a.toString() } }); var $t = i(14), It = i.n($t); const Mt = document.createElement("template"); Mt.innerHTML = '<img class="js-container" alt=""/>'; class Bt extends (Tt(B)) { static get properties() { return { src: { type: "string" }, alt: { type: "string" }, height: { type: "number" }, width: { type: "number" }, a11yHidden: { type: "boolean" } } } template() { return Mt } static get style() { return It.a.toString() } constructor() { super() } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container) switch (t) { case "src": this._setSrc(); break; case "alt": this.container.setAttribute("alt", this.alt); break; case "height": this.container.setAttribute("height", this.height); break; case "width": this.container.setAttribute("width", this.width); break; case "a11y-hidden": this.container.setAttribute("aria-hidden", !0) } } _setSrc() { const t = this.uxLibUrl + "/assets/images/"; let e = this.src; e.startsWith("http") || e.startsWith("https") || e.startsWith("//") || (e = e.startsWith("/") ? e.substr(1) : e, e = e.startsWith("./") ? e.substr(2) : e, e = t + e), this.container.setAttribute("src", e) } } window.customElements.define("bux2-image", Bt); let qt = /Edge/.test(navigator.userAgent); function zt(t) { return class extends t { constructor() { super() } fineSlotChange(t, e) { this.wrapFunction = () => { t.dispatchEvent(new CustomEvent("bux-fine-slot-change", { bubbles: !1, cancelable: !0 })), e && "function" == typeof e && e() }, qt ? this._mutationObserver(t, this.wrapFunction) : t.addEventListener("slotchange", this.wrapFunction) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("slotchange", this.wrapFunction) } _mutationObserver(t, e) { new MutationObserver(e).observe(t, { attributes: !1, childList: !0, subtree: !0, characterData: !1, attributeOldValue: !1, characterDataOldValue: !1 }) } } } var Nt = i(15), Ht = i.n(Nt); function jt(t) { return class extends t { static get style() { return Ht.a.toString() } } } var Rt = i(16), Ot = i.n(Rt); const Pt = jt(zt((Dt = B, class extends Dt { constructor() { super(), this.delegateFocusElement = this.$.querySelector(".js-delegate-focus"), this._delegateFocus = this._delegateFocus.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.addEventListener("focus", this._delegateFocus) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("focus", this._delegateFocus) } _delegateFocus() { this.delegateFocusElement.focus() } }))); var Dt; const Vt = document.createElement("template"); Vt.innerHTML = '\n<div id="wrap">\n  <div id="icon-left"><slot name="icon-left"></slot></div>\n  <input id="input" type="text" class="c-input-noval js-delegate-focus"></input>\n  <div id="icon-right"><slot name="icon-right"></slot></div>\n</div>\n<div style="display:none;" class="a11y-desc a11y-hidden"></div>\n<slot class="c-input-error" id="error" style="display:none;" name="error"></slot>\n'; let Ut = 0; function Ft(t) { let e = t.split("."); return 1 === e.length && (e = t.split(",")), 1 === e.length ? 0 : e[1].length } function Wt(t) { return t = (t = "" + t).slice(0, -1), parseFloat(t) } customElements.define("bux2-input", class extends Pt { static get properties() { return { required: { type: "boolean" }, type: { type: "string" }, state: { type: "string" }, placeholder: { type: "string" }, min: { type: "number" }, max: { type: "number" }, value: { type: "string" }, round: { type: "number" }, maxlength: { type: "number" }, minlength: { type: "number" }, a11ylabel: { type: "string" }, autocomplete: { type: "string" }, reset: { type: "boolean" }, noCopyPaste: { type: "boolean" }, disabled: { type: "boolean" } } } static get style() { return Ot.a.toString() } template() { return Vt } constructor() { super(), this.input = this.$.querySelector("#input"), this.errorSlot = this.$.querySelector(".c-input-error"), this.setValueListener = this.setValueListener.bind(this), this.dispatchListener = this.dispatchListener.bind(this), this.resetInputOnClick = this.resetInputOnClick.bind(this), this.displayInputReset = this.displayInputReset.bind(this), this.setClassFromIco = this.setClassFromIco.bind(this), this.a11yEl = this.$.querySelector(".a11y-desc"), this.slotLeft = this.$.querySelector("#icon-left slot"), this.slotRight = this.$.querySelector("#icon-right slot"), this.fineSlotChange(this.slotLeft, this.setClassFromIco), this.fineSlotChange(this.slotRight, this.setClassFromIco) } setResetBtn() { this.resetBtn = document.createElement("button"), this.resetBtn.classList.add("c-reset-btn"), this.resetBtn.style.display = "none", this.resetBtn.innerHTML = '<bux2-svg icon="croix-suppr" size="xs" aria-hidden="true"></bux2-svg>', this.resetBtn.setAttribute("aria-label", "Effacer la saisie du champ de recherche"), this.$.querySelector("#wrap").appendChild(this.resetBtn) } resetInputOnClick() { this.input.value = "", this.input.focus(), this.resetBtn.style.display = "none", this.dispatchEvent(new Event("clear")) } displayInputReset() { this.value.length ? this.resetBtn.style.display = "block" : this.resetBtn.style.display = "none" } setValueListener(t) { const e = this.input.value.length; let i = 0; "range" != this.input.type && (i = this.input.selectionStart), this.setValue(t.target.value), this.dispatchEvent(new Event("change")), "range" != this.input.type && (this.input.value.length > e && i++, this.input.selectionStart = i, this.input.selectionEnd = i) } dispatchListener() { this.dispatchEvent(new Event("focus")) } connectedCallback() { this.hasAttribute("tabindex") || (this.tabIndex = 0), super.connectedCallback && super.connectedCallback(), this.setClassFromIco(), this.type || (this.type = "text"), this.input.addEventListener("input", this.setValueListener), this.input.addEventListener("focus", this.dispatchListener), this.resetBtn && (this.resetBtn.addEventListener("click", this.resetInputOnClick), this.input.addEventListener("input", this.displayInputReset)), this.setRequired() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("input", this.setValueListener), this.input.removeEventListener("focus", this.dispatchListener) } attributeChangedCallback(t, e, i) { switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "required": this.setRequired(); break; case "state": this.setClassFromState(), this.setLabelState(); break; case "type": this.input.classList.add("c-input-" + this.type), "number" !== this.type && (this.input.type = this.type); break; case "placeholder": this.placeholder ? this.input.setAttribute("placeholder", this.placeholder) : this.input.removeAttribute("placeholder"); break; case "value": this.formItSelf ? this.formItSelf = !1 : this.setValue(this.value); break; case "maxlength": this.input.setAttribute("maxlength", this.maxlength); break; case "minlength": this.input.setAttribute("minlength", this.minlength); break; case "a11ylabel": this.input.setAttribute("aria-label", this.a11ylabel); break; case "autocomplete": this.input.setAttribute("autocomplete", this.autocomplete); break; case "reset": this.setResetBtn(); break; case "no-copy-paste": this.preventCopyPaste(); break; case "disabled": this.disabled ? this.input.setAttribute("disabled") : this.input.removeAttribute("disabled") } } preventCopyPaste() { this.noCopyPaste ? (this.input.oncopy = () => !1, this.input.onpaste = () => !1) : (this.input.oncopy = () => { }, this.input.onpaste = () => { }) } setValue(t) { this.formItSelf = !0, null != t ? "number" === this.type ? this.setValueForNumber(t) : "tel" === this.type ? this.setValueForTel(t) : (this.input.value = t, this.value = t) : this.clearInput() } setValueForTel(t) { let e = ""; e = t.replace(/[^0-9]/g, ""), e = e.substring(0, 19), e = e.replace(/(\d{2})/g, "$1 ").replace(/(^\s+|\s+$)/, ""), this.input.value = e, this.value = e } setClassFromIco() { if (!this.input) return; let t; this.slotLeft && this.slotLeft.assignedElements && (t = 0 !== this.slotLeft.assignedElements().length), t ? this.input.classList.add("has-icon-left") : this.input.classList.remove("has-icon-left"), this.slotRight && this.slotRight.assignedElements && (t = 0 !== this.slotRight.assignedElements().length), this.input.classList.remove("has-icon-right") } setLabelState() { [...document.querySelectorAll(`[for="${this.id}"]`)].forEach((t => { "BUX2-LABEL" === t.tagName && t.setAttribute("state", this.state) })) } setRequired() { document.querySelector(`[for="${this.id}"]`) && (this.required ? this.input.setAttribute("required", "") : this.input.removeAttribute("required")) } clearInput() { this.input.classList.add("c-input-noval"), this.value = "", this.input.value = "" } setClassFromState() { switch (this.state) { case "valid": this.input.classList.remove("error", "empty"), this.input.classList.add("valid"), this.a11yEl.style.display = "none", this.input.removeAttribute("aria-describedby"), this.errorSlot && (this.errorSlot.style.display = "none"); break; case "error": if (this.errorSlot) { if (this.errorSlot && "function" == typeof this.errorSlot.assignedElements && this.errorSlot.assignedElements().length > 0) { const t = this.errorSlot.assignedElements().reduce(((t, e) => t + e.innerHTML), ""); this.a11yEl.innerHTML = t, this.a11yEl.style.display = ""; const e = "c-input-error" + Ut++; this.a11yEl.id = e, this.input.setAttribute("aria-describedby", e), this.a11yEl.style.display = "" } this.errorSlot.style.display = "" } this.input.classList.remove("valid", "empty"), this.input.classList.add("error"); break; default: this.input.classList.remove("valid", "error"), this.input.classList.add("empty"), this.input.removeAttribute("aria-describedby"), this.a11yEl.style.display = "none", this.errorSlot && (this.errorSlot.style.display = "none") } } setValueForNumber(t) { let e = ""; if (null == t) this.clearInput(); else { if (e = t.replace(/\s/g, ""), e = e.replace(/,/g, "."), 3 === e.split(".").length && "." === e.slice(-1)) return void (this.input.value = this.input.value.slice(0, -1)); if ("-" === e.slice(-1) || "+" === e.slice(-1)) return e.length > 1 ? void (this.input.value = this.input.value.slice(0, -1)) : "-" === e.slice(-1) && this.min && this.min >= 0 ? void (this.input.value = null) : void 0; if ("." === e.slice(-1) && Number.isInteger(parseInt(e.slice(-2, -1))) && 0 != this.round) return; const i = Ft(e); if (e = parseFloat(e), isNaN(e)) this.clearInput(); else { this.min && e < this.min && (e = Wt(e)), this.max && e > this.max && (e = Wt(e)), e = e.toLocaleString("fr-FR"); const t = Ft(e); if (i > t) { 0 === t && (e += ","); let s = i - t; for (; s > 0;)e += "0", s-- } const s = Ft(e); if (this.round && s > this.round && (e = "" + e, e = e.slice(0, this.round - s)), 0 == this.round && "," === e.slice(-1) && (e = e.slice(0, -1)), "NaN" === e) return void this.clearInput(); this.input.value = e, e = e.replace(/\s/g, ""), e = e.replace(/,/g, "."), this.setAttribute("value", parseFloat(e)), this.input.classList.remove("c-input-noval") } } } }); let Kt = 0; const Gt = document.createElement("template"); Gt.innerHTML = "<label><slot></slot></label>", customElements.define("bux2-label", class extends B { static get properties() { return { for: { type: "string" } } } constructor() { super(), this._slot = this.$.querySelector("slot"), this._slot.addEventListener("slotchange", this._onSlotChange.bind(this)), this.addEventListener("click", this._onClick) } template() { return Gt } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this._updateLabel() } _updateLabel() { Promise.resolve().then((() => { this.id || (this.id = "bux2-label-generated-" + Kt++); let t = this._currentLabelTarget(), e = this._findTarget(); e && t !== e && (t && t.removeAttribute("aria-labelledby"), e.setAttribute("aria-labelledby", this.id)) })) } _onSlotChange() { this._updateLabel() } _onClick(t) { let e = this._currentLabelTarget(); e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), e && t.target !== e && (e.focus(), e.click()) } _currentLabelTarget() { return this.getRootNode().querySelector(`[aria-labelledby="${this.id}"]`) } _findTarget() { if (this.for) return this.getRootNode().getElementById(this.for); let t = this._slot.assignedNodes({ flatten: !0 }).filter((t => t.nodeType !== Node.TEXT_NODE)); return t.find((t => t.hasAttribute("bux-label-target"))) || t[0] } }); var Xt = i(17), Yt = i.n(Xt); const Jt = B, Zt = document.createElement("template"); Zt.innerHTML = '<div class="c-overlay js-container"></div>', window.customElements.define("bux2-overlay", class extends Jt { static get properties() { return { visible: { type: "boolean" }, modalId: { type: "string" } } } static get style() { return Yt.a.toString() } template() { return Zt } constructor() { super(), this.handleClick = this.handleClick.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.container.addEventListener("click", this.handleClick) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.container.removeEventListener("click", this.handleClick) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container && "visible" === t && this._showOverlay() } handleClick() { this._closeOverlay(), this._closeModal() } _showOverlay() { this.visible ? this.container.classList.add("is-visible") : this.container.classList.remove("is-visible") } _closeOverlay() { this.visible = !1 } _closeModal() { document.getElementById(this.modalId).open = !1 } }); const Qt = jt(B), te = document.createElement("template"); te.innerHTML = '\n<div class="c-notification js-container"></div>\n<span class="a11y-hidden"></span>\n'; class ee extends Qt { static get properties() { return { value: { type: "number" }, a11yLabel: { type: "string" } } } template() { return te } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container) switch (t) { case "value": this._setValue(); break; case "a11y-label": this._setA11yLabel() } } _setValue() { this.container.textContent = this.value } _setA11yLabel() { this.a11yLabel ? this.$.querySelector(".a11y-hidden").innerHTML = this.a11yLabel : this.$.querySelector(".a11y-hidden").innerHTML = "" } } var ie = i(18), se = i.n(ie); window.customElements.define("bux2-notification", class extends ee { static get style() { return se.a.toString() } }); var ae = i(19), ne = i.n(ae); const re = B, oe = document.createElement("template"); oe.innerHTML = '\n<div class="c-progress js-container">\n  <div class="c-progress__bar c-progress__bar--primary js-pb-primary"\n    role="progressbar"\n    aria-valuemin="0"\n    aria-valuemax="100">\n  </div>\n</div>\n', window.customElements.define("bux2-progressbar", class extends re { static get properties() { return { value: { type: "string" }, valuePrimary: { type: "string", attributeName: "value-primary" }, valueSecondary: { type: "string", attributeName: "value-secondary" }, size: { type: "string" } } } static get style() { return ne.a.toString() } template() { return oe } constructor() { super(), this.progressBar = this.$.querySelector(".js-pb-primary"), this.progressContainer = this.$.querySelector(".c-progress") } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i) switch (t) { case "value": case "value-primary": this._updateValuePrimary(); break; case "value-secondary": if (!this.progressBarSecondary) { const t = document.createElement("template"); t.innerHTML = '\n          <div class="c-progress__bar c-progress__bar--secondary js-pb-secondary"\n            role="progressbar"\n            aria-valuemin="0"\n            aria-valuemax="100">\n          ', this.progressContainer.appendChild(t.content.cloneNode(!0)), this.progressBarSecondary = this.$.querySelector(".js-pb-secondary") } this.progressBarSecondary.style.width = this.valueSecondary + "%", this.progressBarSecondary.setAttribute("aria-valuenow", this.valueSecondary); break; case "size": switch (this.size) { case "xs": case "sm": case "md": case "lg": case "xl": this.container.classList.add("c-progress--" + this.size) } } } _updateValuePrimary() { const t = this.value || this.valuePrimary; this.progressBar.style.width = t + "%", this.progressBar.setAttribute("aria-valuenow", t) } }); class le extends B { static get properties() { return { value: { type: "string" }, checked: { type: "boolean" } } } connectedCallback() { this.hasAttribute("role") || this.setAttribute("role", "radio"), this.hasAttribute("tabindex") || this.setAttribute("tabindex", -1) } } var ce = i(20), de = i.n(ce); const ue = document.createElement("template"); ue.innerHTML = "<slot></slot>", customElements.define("bux2-radio-button", class extends le { static get style() { return de.a.toString() } template() { return ue } }); const he = wt(B); class pe extends he { static get properties() { return { value: { type: "string" } } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "radiogroup"); let t = this.checkedRadioButton; t ? (this._uncheckAll(), this._checkNode(t), this._setValue()) : this.querySelector('[role="radio"]').setAttribute("tabindex", 0), this.addEventListener("keydown", this._onKeyDown), this.addEventListener("click", this._onClick) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("keydown", this._onKeyDown), this.removeEventListener("click", this._onClick) } _onKeyDown(t) { switch (t.keyCode) { case 38: case 37: t.preventDefault(), this._setCheckedToPrevButton(); break; case 40: case 39: t.preventDefault(), this._setCheckedToNextButton(); break; case 36: t.preventDefault(), this._setChecked(this.firstRadioButton); break; case 35: t.preventDefault(), this._setChecked(this.lastRadioButton); break; case 32: t.preventDefault(), "howto-radio-button" === t.target.tagName.toLowerCase() && this._setChecked(t.target) } } get checkedRadioButton() { return this.querySelector('[aria-checked="true"]') || this.querySelector("[checked]") } get firstRadioButton() { return this.querySelector('[role="radio"]:first-of-type') } get lastRadioButton() { return this.querySelector('[role="radio"]:last-of-type') } _prevRadioButton(t) { let e = t.previousElementSibling; for (; e;) { if ("radio" === e.getAttribute("role")) return e; e = e.previousElementSibling } return null } _nextRadioButton(t) { let e = t.nextElementSibling; for (; e;) { if ("radio" === e.getAttribute("role")) return e; e = e.nextElementSibling } return null } _setCheckedToPrevButton() { let t = this.checkedRadioButton || this.firstRadioButton; t === this.firstRadioButton ? this._setChecked(this.lastRadioButton) : this._setChecked(this._prevRadioButton(t)) } _setCheckedToNextButton() { let t = this.checkedRadioButton || this.firstRadioButton; t === this.lastRadioButton ? this._setChecked(this.firstRadioButton) : this._setChecked(this._nextRadioButton(t)) } _setChecked(t) { this._uncheckAll(), this._checkNode(t), this._focusNode(t), this._setValue(), this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value }, bubbles: !0 })) } _uncheckAll() { const t = this.querySelectorAll('[role="radio"]'); for (let e = 0; e < t.length; e++) { let i = t[e]; i.setAttribute("aria-checked", "false"), i.hasAttribute("checked") && (i.checked = !1), i.tabIndex = -1 } } _checkNode(t) { t.setAttribute("aria-checked", "true"), t.tabIndex = 0 } _focusNode(t) { t.focus() } _setValue() { this.value = this.checkedRadioButton.value } _onClick(t) { "radio" === t.target.getAttribute("role") && this._setChecked(t.target) } } var be = i(21), me = i.n(be); const ge = document.createElement("template"); ge.innerHTML = '<div class="js-container"><slot></slot></div>', customElements.define("bux2-radio-group", class extends pe { static get style() { return me.a.toString() } template() { return ge } }); const ve = Q(Tt(B)), fe = document.createElement("template"); fe.innerHTML = '<svg aria-hidden="true" class="js-container c-svg2" width="40" height="40"></svg>'; class xe extends ve { static get properties() { return { icon: { type: "string" }, size: { type: "string" }, circle: { type: "boolean" }, rotate: { type: "number" }, fill: { type: "string" }, stroke: { type: "string" } } } constructor() { super() } template() { return fe } attributeChangedCallback(t, e, i) { switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "icon": const t = window.uxLib.svgEl.getElementById(this.icon); t ? ([...t.children].forEach((t => this.container.appendChild(t.cloneNode(!0)))), this.container.setAttribute("viewBox", t.getAttribute("viewBox"))) : console.error(`Icon : ${this.icon} doesn't exists`); break; case "size": this.container.classList.remove("c-svg2--sm", "c-svg2--lg", "c-svg2--xl"), this.container.classList.add("c-svg2--" + this.size); break; case "circle": this.setBooleanClass(this.circle, "c-svg2--circle"); break; case "rotate": this.rotate ? this.container.style.transform = `rotate(${this.rotate}deg)` : this.container.style.transform = ""; break; case "fill": this.container.style.fill = this.fill; break; case "stroke": this.container.style.stroke = this.stroke } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("size") || this.container.classList.add("c-svg2--lg"), this.container.style.fill = this.fill, this.container.style.stroke = this.stroke } } let ye = !1; function ke() { window.uxLib || (window.uxLib = {}) } var we, Ce, _e = i(22), Ee = i.n(_e); we = class extends xe { static get style() { return Ee.a.toString() } attributeChangedCallback(t, e, i) { switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "fill": this.fill ? this.container.style.setProperty("--color-fill-svg", this.fill) : this.container.style.setProperty("--color-fill-svg", ""); break; case "stroke": this.stroke ? this.container.style.setProperty("--color-svg", this.stroke) : this.container.style.setProperty("--color-svg", "") } } }, Ce = "bux2-svg", new Promise(((t, e) => { if (customElements.get(Ce)) return t(!0); const i = document.querySelector("#uxlibsvg"); if (i) return ke(), window.uxLib.svgEl = i, customElements.get(Ce) || customElements.define(Ce, we), t(!0); var s; ye ? window.addEventListener("svgOnFetch", (() => (customElements.get(Ce) || customElements.define(Ce, we), t(!0)))) : (ye = !0, (s = void 0, ke(), new Promise(((t, e) => { void 0 === s && (void 0 !== window.uxLib.iconsSvgUrl ? s = window.uxLib.iconsSvgUrl : document.body.hasAttribute("data-icons-svg-url") ? s = document.body.getAttribute("data-icons-svg-url") : document.currentScript && document.currentScript.src && ((s = document.currentScript.src).endsWith(".js") && (s = s.split("/").slice(0, -1).join("/")), s += "/assets/images/icons.svg")), fetch(s, { method: "GET", headers: new Headers, mode: "cors", cache: "default" }).then((t => { if (200 !== t.status) throw new Error; return t.text() })).then((e => t({ url: s, data: e }))).catch((t => (console.error("Error when loading svg for ux-lib", t), e(t)))) }))).then((t => (({ url: t, data: e }) => new Promise(((i, s) => { ke(); const a = document.createElement("template"); a.innerHTML = e; const n = a.content.querySelector("svg"); return n ? (n.style.display = "none", window.uxLib.svgEl = n, document.body.appendChild(window.uxLib.svgEl), i(!0)) : s("No svg el : " + t) })))(t))).then((() => (customElements.define(Ce, we), window.dispatchEvent(new CustomEvent("svgOnFetch", { bubbles: !0 })), t(!0)))).catch((t => e(t)))) })); var Le = i(23), Ae = i.n(Le); const Se = B, Te = document.createElement("template"); Te.innerHTML = '\n<span class="c-tel"><slot aria-hidden="true"></slot></span>', window.customElements.define("bux2-tel", class extends Se { static get style() { return Ae.a.toString() } template() { return Te } constructor() { super() } connectedCallback() { super.connectedCallback && super.connectedCallback(); let t = this.innerHTML.replace(/ /g, ". "); this.shadowRoot.querySelector(".c-tel").setAttribute("aria-label", t) } }); var $e = i(24), Ie = i.n($e); const Me = st(tt(Y(Q(function (t) { return class extends t { static get properties() { return { uppercase: { type: "boolean" } } } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container && "uppercase" === t && (this.uppercase ? this.container.style.textTransform = "uppercase" : this.container.style.textTransform = "") } } }(function (t) { return class extends t { static get properties() { return { italic: { type: "boolean" } } } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container && "italic" === t && (this.italic ? this.container.style.fontStyle = "italic" : this.container.style.fontStyle = "") } } }(X(G(B)))))))), Be = document.createElement("template"); Be.innerHTML = '<span class="js-container m-tag"><slot></slot></span>', window.customElements.define("bux2-text", class extends Me { static get properties() { return { a11yHidden: { type: "boolean" } } } static get style() { return Ie.a.toString() } template() { return Be } constructor() { super() } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container) switch (t) { case "background": if (!this.container) return; this.background ? this.container.classList.add("c-text--background") : this.container.classList.remove("c-text--background"); break; case "background-light": if (!this.container) return; this.backgroundLight ? this.container.classList.add("c-text--background-light") : this.container.classList.remove("c-text--background-light"); break; case "a11y-hidden": this.container.setAttribute("aria-hidden", !0) } } }); var qe = i(25), ze = i.n(qe); const Ne = B, He = document.createElement("template"); He.innerHTML = '\n<button class="c-trigger-modal js-trigger"><slot></slot></button>', window.customElements.define("bux2-trigger-modal", class extends Ne { static get properties() { return { modalId: { type: "string" }, label: { type: "string" } } } static get style() { return ze.a.toString() } template() { return He } constructor() { super(), this.triggerBtn = this.shadowRoot.querySelector(".js-trigger"), this.handleClick = this.handleClick.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.triggerBtn.addEventListener("click", this.handleClick) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.triggerBtn.removeEventListener("click", this.handleClick) } handleClick() { this._triggermodal(this.modalId) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.triggerBtn && this._setLabel() } _triggermodal(t) { const e = document.getElementById(t), i = document.querySelector("bux2-overlay"); e.open = !0, i.visible = !0, i.setAttribute("modal-id", t) } _setLabel() { this.label ? this.triggerBtn.setAttribute("aria-label", this.label) : this.triggerBtn.removeAttribute("aria-label") } }); var je = i(26), Re = i.n(je); const Oe = B; window.customElements.define("bux2-layout-flex", class extends Oe { static get properties() { return { column: { type: "boolean" } } } static get style() { return Re.a.toString() } constructor() { super(), this.container = this.$.querySelector(".c-flex"), this.container ? this.container.setAttribute("role", "list") : this.setAttribute("role", "list"), Array.from(this.children).forEach((t => { t.setAttribute("role", "listitem") })) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "column" === t && this.setBooleanClass(this.column, "c-flex--column") } template() { const t = document.createElement("template"); return t.innerHTML = '\n    <div class="c-flex">\n      <slot></slot>\n    </div>\n    ', t } }); var Pe = i(27), De = i.n(Pe); const Ve = document.createElement("template"); Ve.innerHTML = '<section class="js-container grid-masonry">\n<slot></slot>\n</section>'; class Ue extends (zt(B)) { template() { return Ve } static get style() { return De.a.toString() } constructor() { super(), this.onMutation = !1, this._onSlotChange = this._onSlotChange.bind(this); const t = this.$.querySelector("slot"); this.resizeEv = v()((() => { this._onSlotChange() }), 100), this.fineSlotChange(t, this.resizeEv), window.addEventListener("resize", this.resizeEv) } attributeChangedCallback() { super.attributeChangedCallback && super.attributeChangedCallback() } connectedCallback() { super.connectedCallback && super.connectedCallback(), window.addEventListener("load", this.resizeEv), this.resizeEv(), setTimeout(this.resizeEv, 100), setTimeout(this.resizeEv, 202), setTimeout(this.resizeEv, 303), setTimeout(this.resizeEv, 404), setTimeout(this.resizeEv, 505), setTimeout(this.resizeEv, 606), setTimeout(this.resizeEv, 707), setTimeout(this.resizeEv, 808), setTimeout(this.resizeEv, 909), setTimeout(this.resizeEv, 1010) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), window.removeEventListener("load", this.resizeEv) } _defineItems() { [...this.children].forEach((t => { t.classList.contains("grid-item") || t.classList.add("grid-item") })) } _getHeighItem(t) { const e = this.$.querySelector(".grid-masonry"), i = parseInt(window.getComputedStyle(e).getPropertyValue("grid-row-gap")); let s; return this.navigator.name.includes("Edge") || "Firefox" === this.navigator.name && this.navigator.version <= "62" || "Chrome" === this.navigator.name && this.navigator.version >= "91" ? (s = t.getBoundingClientRect().height, "BUX2-CARD" !== t.tagName && "UX-CARD" !== t.tagName || (s = t.container.getBoundingClientRect().height + 20)) : (e.style.gridAutoRows = 0, s = t.getBoundingClientRect().height), Math.ceil((s + i) / (0 + i)) } _resizeAllGridItems() { const t = this.getElementsByClassName("grid-item"), e = [], i = t.length; for (let s = 0; s < i; s++)e[s] = this._getHeighItem(t[s]); for (let s = 0; s < i; s++)t[s].style.gridRowEnd = "span " + e[s] } _onSlotChange() { this.onMutation || (this.onMutation = !0, this._defineItems(), this._resizeAllGridItems(), this.onMutation = !1) } } customElements.define("bux-layout", Ue); var Fe = i(28), We = i.n(Fe); const Ke = wt(B), Ge = document.createElement("template"); function Xe(t) { let e = 0; return class extends t { static get properties() { return { expanded: { type: "boolean" } } } constructor() { super(), this._toggleExpanded = this._toggleExpanded.bind(this), this.button || (this.button = this.$.querySelector(".js-button")), this.content || (this.content = this.$.querySelector(".js-content")) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "expanded" === t && (this.expanded ? (this.button.setAttribute("aria-expanded", "true"), this.content.style.display = "block") : (this.button.setAttribute("aria-expanded", "false"), this.content.style.display = "none")) } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = e++, i = this.tagName.toLowerCase(); this.content.setAttribute("id", `${i}-${t}`), this.button.setAttribute("aria-controls", `${i}-${t}`), this.button.addEventListener("click", this._toggleExpanded) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.button.removeEventListener("click", this._toggleExpanded) } _toggleExpanded() { this.expanded ? this.removeAttribute("expanded") : this.setAttribute("expanded", "") } } } Ge.innerHTML = '\n<section class="c-accordion js-container">\n  <slot></slot>\n</section>\n', window.customElements.define("bux2-accordion", class extends Ke { static get style() { return We.a.toString() } template() { return Ge } constructor() { super() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.verticalSpace || (this.verticalSpace = "sm") } }); var Ye = i(29), Je = i.n(Ye); const Ze = Xe(B), Qe = document.createElement("template"); Qe.innerHTML = '\n<section class="c-accordion-item js-container">\n  <button class="c-accordion-item__button js-button"\n          aria-expanded="false">\n        <slot name="header">Afficher le détail</slot>\n        <slot name="extra"></slot>\n        <svg aria-hidden="true" width="40" height="40" class="c-accordion-item__icon" viewbox="0 0 50 50"><path d="M16 49l-6-7 17-17L10 8l6-7 25 24-25 24z"/></svg>\n  </button>\n  <div role="region" class="c-accordion-item__content js-content">\n    <slot name="content"></slot>\n  </div>\n</section>\n', window.customElements.define("bux2-accordion-item", class extends Ze { static get style() { return Je.a.toString() } constructor() { super() } template() { return Qe } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "expanded" === t && (this.expanded ? this.button.classList.add("c-accordion-item__button--expanded") : this.button.classList.remove("c-accordion-item__button--expanded")) } }); const ti = wt(B), ei = document.createElement("template"); ei.innerHTML = '\n<section class="c-btn-group js-container" role="group">\n<slot></slot>\n</section>\n'; class ii extends ti { static get properties() { return { vertical: { type: "boolean" } } } template() { return ei } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "vertical" === t && this.hasAttribute("vertical")) { this.container.classList.add("c-btn-group--vertical"), this.verticalSpace || (this.verticalSpace = "sm"); const t = `var(--spacing-${this.verticalSpace})`; this._setStack(t) } } } var si = i(30), ai = i.n(si); window.customElements.define("bux2-btn-group", class extends ii { static get style() { return ai.a.toString() } }); var ni = i(31), ri = i.n(ni); function oi(t) { return class extends t { static get properties() { return { isMobile: { type: "boolean" }, isTablet: { type: "boolean" }, isDesktop: { type: "boolean" } } } static get style() { return ri.a.toString() } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i) switch (t) { case "is-mobile": this.setBooleanClass(this.isMobile, "is-mobile", this), this.setBooleanClass(this.isMobile, "is-mobile", this.container); break; case "is-tablet": this.setBooleanClass(this.isTablet, "is-tablet", this), this.setBooleanClass(this.isTablet, "is-tablet", this.container); break; case "is-desktop": this.setBooleanClass(this.isDesktop, "is-desktop", this), this.setBooleanClass(this.isDesktop, "is-desktop", this.container) } } } } const li = oi(B), ci = document.createElement("template"); ci.innerHTML = '\n<section class="c-card js-container">\n  <slot name="card-header"></slot>\n  <slot name="card-body"></slot>\n  <slot name="card-footer"></slot>\n</section>\n'; class di extends li { constructor() { super() } template() { return ci } } var ui = i(32), hi = i.n(ui); window.customElements.define("bux2-card", class extends di { static get style() { return hi.a.toString() } }); const pi = document.createElement("template"); pi.innerHTML = '<div class="c-card-header"><slot></slot></div>'; class bi extends B { constructor() { super() } template() { return pi } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("slot") || this.setAttribute("slot", "card-header") } } var mi = i(33), gi = i.n(mi); window.customElements.define("bux2-card-header", class extends bi { static get style() { return gi.a.toString() } }); let vi = /Edge/.test(navigator.userAgent); function fi(t) { return class extends t { constructor() { super(), this.buxSlotChangeEvent = this.buxSlotChangeEvent.bind(this), vi ? this._mutationObserver() : this._slots.forEach((t => { t.addEventListener("slotchange", this.buxSlotChangeEvent) })) } buxSlotChangeEvent() { this.dispatchEvent(new CustomEvent("bux-slot-change", { bubbles: !1, cancelable: !0 })) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("slotchange", this.buxSlotChangeEvent) } _mutationObserver() { new MutationObserver((() => { this.buxSlotChangeEvent() })).observe(this, { attributes: !1, childList: !0, subtree: !0, characterData: !1, attributeOldValue: !1, characterDataOldValue: !1 }) } } } const xi = st(fi(wt(B))), yi = document.createElement("template"); yi.innerHTML = '<div class="c-card-body js-container"><slot></slot></div>'; class ki extends xi { constructor() { super(), this._handleSlotChange = this._handleSlotChange.bind(this) } _handleSlotChange() { let t; this.verticalSpace && (t = `var(--spacing-${this.verticalSpace})`), this.horizontalSpace && (t = `var(--spacing-${this.horizontalSpace})`), this._setStack(t) } template() { return yi } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("slot") || this.setAttribute("slot", "card-body"), this._handleSlotChange(), this.addEventListener("bux-slot-change", this._handleSlotChange) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("bux-slot-change", this._handleSlotChange) } } var wi = i(34), Ci = i.n(wi); window.customElements.define("bux2-card-body", class extends ki { static get style() { return Ci.a.toString() } }); const _i = st(wt(B)), Ei = document.createElement("template"); Ei.innerHTML = '<div class="c-card-footer js-container"><slot></slot></div>'; class Li extends _i { constructor() { super() } template() { return Ei } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("slot") || this.setAttribute("slot", "card-footer") } } var Ai = i(35), Si = i.n(Ai); window.customElements.define("bux2-card-footer", class extends Li { static get style() { return Si.a.toString() } }); var Ti = i(36), $i = i.n(Ti); const Ii = st(wt(B)), Mi = document.createElement("template"); Mi.innerHTML = '<div class="c-card-tile js-container"><slot></slot></div>', window.customElements.define("bux2-card-tile", class extends Ii { constructor() { super() } static get style() { return $i.a.toString() } template() { return Mi } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("space-v") || this.setAttribute("space-v", "xs") } }); var Bi = i(37), qi = i.n(Bi), zi = i(38), Ni = i.n(zi); const Hi = wt(function (t) { return class extends t { static get properties() { return { borderTop: { type: "boolean" }, borderRight: { type: "boolean" }, borderBottom: { type: "boolean" }, borderLeft: { type: "boolean" } } } static get style() { return qi.a.toString() } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container && (this.hasAttribute(t) ? this.container.classList.add("c-" + t) : this.container.classList.remove("c-" + t)) } } }(B)), ji = document.createElement("template"); ji.innerHTML = '<div class="c-card-bar js-container"><slot></slot></div>', window.customElements.define("bux2-card-bar", class extends Hi { static get properties() { return { center: { type: "boolean" } } } constructor() { super() } static get style() { return Ni.a.toString() } template() { return ji } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && this.container) switch (t) { case "border-top": this.borderTop ? this.container.classList.add("c-card-bar--border-top") : this.container.classList.remove("c-card-bar--border-top"); break; case "center": this.center ? this.container.classList.add("c-card-bar--center") : this.container.classList.remove("c-card-bar--center") } } }); var Ri = i(39), Oi = i.n(Ri); const Pi = oi(B), Di = document.createElement("template"); Di.innerHTML = '\n<div class="c-card-scroller js-container">\n<div class="c-card-scroller__wrapper">\n<slot></slot>\n</div>\n</div>', window.customElements.define("bux2-card-scroller", class extends Pi { constructor() { super() } static get style() { return Oi.a.toString() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this._defineLayout() } template() { return Di } _getAllItems() { return Array.from(this.children) } _defineLayout() { this._getAllItems().forEach((t => { t.style.flexBasis = "16rem", t.style.minWidth = "16rem", t.style.marginRight = "var(--spacing-sm)" })) } }); var Vi = i(40), Ui = i.n(Vi); const Fi = oi(B), Wi = document.createElement("template"); Wi.innerHTML = '\n<div role="table" aria-describedby="caption_description" class="c-datatable js-container">\n  <div id="caption_description" class="c-datatable__caption"></div>\n  <div class="c-datatable__thead" role="rowgroup">\n      <slot name="thead"></slot>\n  </div>\n  <div class="c-datatable__tbody" role="rowgroup">\n    <slot name="tbody"></slot>\n  </tbody>\n</div>\n', window.customElements.define("bux2-datatable", class extends Fi { static get properties() { return { caption: { type: "string" } } } static get style() { return Ui.a.toString() } template() { return Wi } constructor() { super(), this.captionElement = this.shadowRoot.querySelector("#caption_description") } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "caption" === t && (this.captionElement.textContent = this.caption) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("space-v") || this.setAttribute("space-v", "sm") } }); var Ki = i(41), Gi = i.n(Ki); const Xi = B, Yi = document.createElement("template"); Yi.innerHTML = '\n<div class="c-datatable-head">\n<slot><slot>\n</div>\n', window.customElements.define("bux2-datatable-head", class extends Xi { static get properties() { return { caption: { type: "string" } } } static get style() { return Gi.a.toString() } template() { return Yi } constructor() { super(), this._defaultSlot = this.shadowRoot.querySelector("slot") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("slot") || this.setAttribute("slot", "thead"), this.hasAttribute("role") || this.setAttribute("role", "row"), this._defineCells() } __allCells() { return [...this.children] } _defineCells() { this.__allCells().forEach((t => { t.hasAttribute("role") || t.setAttribute("role", "columnheader"), t.setAttribute("aria-sort", "none") })) } }); var Ji = i(42), Zi = i.n(Ji); const Qi = B, ts = document.createElement("template"); ts.innerHTML = '\n<div class="c-datatable-row">\n  <slot><slot>\n</div>\n', window.customElements.define("bux2-datatable-row", class extends Qi { static get properties() { return { caption: { type: "string" } } } static get style() { return Zi.a.toString() } template() { return ts } constructor() { super(), this._defaultSlot = this.shadowRoot.querySelector("slot") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("slot") || this.setAttribute("slot", "tbody"), this.hasAttribute("role") || this.setAttribute("role", "row"), this._defineCells() } __allCells() { return Array.from(this.children) } _defineCells() { this.__allCells().forEach((t => { t.hasAttribute("role") || t.setAttribute("role", "cell") })) } }); var es = i(43), is = i.n(es); const ss = jt(oi(wt(B))), as = document.createElement("template"); as.innerHTML = '\n<div role="table" aria-describedby="caption_description" class="c-datalisting">\n  <div id="caption_description" class="a11y-hidden"></div>\n  <div class="c-datalisting__thead" role="rowgroup">\n      <slot name="thead"></slot>\n  </div>\n  <div class="c-datalisting__tbody" role="rowgroup">\n    <slot name="tbody"></slot>\n  </tbody>\n</div>\n', window.customElements.define("bux2-datalisting", class extends ss { static get properties() { return { caption: { type: "string" } } } static get style() { return is.a.toString() } template() { return as } constructor() { super(), this.captionElement = this.shadowRoot.querySelector("#caption_description") } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && (this.caption ? (this.captionElement.textContent = this.caption, this.removeAttribute("aria-hidden")) : (this.captionElement.textContent = "", this.captionElement.setAttribute("aria-hidden", "true"))) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("space-v") || this.setAttribute("space-v", "sm") } }); var ns = i(44), rs = i.n(ns); const os = st(B), ls = document.createElement("template"); ls.innerHTML = '<div class="js-container c-data-listing-head"><slot><slot></div>', customElements.define("bux2-datalisting-head", class extends os { static get style() { return rs.a.toString() } template() { return ls } constructor() { super() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("slot") || this.setAttribute("slot", "thead"), this.hasAttribute("role") || this.setAttribute("role", "row"), Array.from(this.children).forEach((t => { t.setAttribute("role", "columnheader"), t.setAttribute("aria-sort", "none") })) } }); var cs = i(45), ds = i.n(cs); const us = B, hs = document.createElement("template"); hs.innerHTML = '<div class="js-container c-data-listing-row"><slot><slot></div>', window.customElements.define("bux2-datalisting-row", class extends us { static get style() { return ds.a.toString() } template() { return hs } constructor() { super() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("slot") || this.setAttribute("slot", "tbody"), this.hasAttribute("role") || this.setAttribute("role", "row"), Array.from(this.children).forEach((t => { t.setAttribute("role", "cell") })) } }); var ps = i(46), bs = i.n(ps); const ms = B; window.customElements.define("bux2-heading", class extends ms { static get properties() { return { level: { type: "number" }, borderColored: { type: "boolean" }, styleLevel: { type: "number" } } } static get style() { return bs.a.toString() } constructor() { super(), this.container = this.$.querySelector(".js-container") } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container && "border-colored" === t && (this.hasAttribute("border-colored") ? this.container.classList.add("c-heading--border-colored") : this.container.classList.remove("c-heading--border-colored")) } template() { const t = this.level || "2", e = this.styleLevel || this.level, i = document.createElement("template"); return i.innerHTML = `\n    <h${t} class="js-container c-heading c-heading-${e}">\n      <span class="c-heading-s1">\n        <slot name="left"></slot>\n        <slot></slot>\n      </span>\n      <span><slot name="right"></slot></span>\n    </h${t}>`, i } }); var gs = i(47), vs = i.n(gs); const fs = document.createElement("template"); fs.innerHTML = '<div id="wrap">\n<slot name="label-top"></slot>\n<div id="wrap-input">\n  <div id="label-left-wrap"><slot name="label-left"></slot></div>\n  <slot></slot>\n  <div id="label-right-wrap"><slot name="label-right"></slot></div>\n</div>\n<slot name="label-bottom"></slot>\n<slot name="error"></slot>\n</div>', customElements.define("bux2-input-w-label", class extends B { static get style() { return vs.a.toString() } constructor() { super() } template() { return fs } }); var xs = i(48), ys = i.n(xs); const ks = st(fi(B)), ws = document.createElement("template"); ws.innerHTML = '\n  <div class="js-container c-key-value-item__wrapper">\n    <div class="c-key-value-item">\n      <div class="c-key-value-item__slot">\n        <slot name="key"></slot>\n      </div>\n      <div class="c-key-value-item__slot">\n        <slot name="value"></slot>\n      </div>\n    </div>\n    <slot name="link"></slot>\n  </div>', customElements.define("bux2-key-value-item", class extends ks { static get properties() { return { level: { type: "number" } } } static get style() { return ys.a.toString() } template() { return ws } constructor() { super(), this._setValueSlottedElements = this._setValueSlottedElements.bind(this), this.addEventListener("bux-slot-change", this._setValueSlottedElements) } _setValueSlottedElements() { this.querySelectorAll('[slot="value"]').forEach((t => { t.hasAttribute("theme") || t.setAttribute("theme", "dark"), t.hasAttribute("right") || t.setAttribute("right", "") })) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this._setValueSlottedElements() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("bux-slot-change", this._setValueSlottedElements) } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i) switch (t) { case "level": this.level > 1 && this.container.classList.add("c-level--" + this.level); break; case "background": case "background-light": this.hasAttribute("background") || this.hasAttribute("background-light") ? this.container.classList.add("c-key-value-item--background") : this.container.classList.remove("c-key-value-item--background") } } }); var Cs = i(49), _s = i.n(Cs); const Es = st(fi(B)), Ls = document.createElement("template"); function As(t) { return class extends t { constructor() { super(), this.container ? this.container.setAttribute("role", "list") : this.setAttribute("role", "list"), Array.from(this.children).forEach((t => { t.setAttribute("role", "listitem") })) } } } Ls.innerHTML = '\n  <div class="js-container c-key-value-item__wrapper">\n    <div class="c-key-value-edit-item">\n      <div class="c-key-value-item__slot">\n        <slot name="key"></slot>\n      </div>\n      <div class="c-key-value-item__value-slot">\n        <slot name="value"></slot>\n      </div>\n    </div>\n    <div class="c-key-value-edit-item__edit-slot">\n      <slot name="edit"></slot>\n    </div>\n  </div>', customElements.define("bux2-key-value-edit-item", class extends Es { static get style() { return _s.a.toString() } constructor() { super(), this.editSlotElement = this.$.querySelector(".c-key-value-edit-item__edit-slot"), this._setValueSlottedElements = this._setValueSlottedElements.bind(this), this.addEventListener("bux-slot-change", this._setValueSlottedElements) } _setValueSlottedElements() { this.querySelectorAll('[slot="value"]').forEach((t => { t.hasAttribute("theme") || t.setAttribute("theme", "dark") })) } _multipleKeys() { const t = this.querySelectorAll("[slot=key]").length > 1, e = this.$.querySelector(".c-key-value-edit-item"); t && e.classList.add("c-key-value-edit-item__multiple") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this._setValueSlottedElements(), this.querySelector('[slot="edit"]') || this.editSlotElement.setAttribute("aria-hidden", "true"), this._multipleKeys() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("bux-slot-change", this._setValueSlottedElements) } template() { return Ls } }); var Ss = i(50), Ts = i.n(Ss); const $s = As(wt(B)), Is = document.createElement("template"); Is.innerHTML = '<ul class="c-list js-container"><slot></slot></ul>', window.customElements.define("bux2-list", class extends $s { static get properties() { return { bullet: { type: "boolean" } } } constructor() { super() } static get style() { return Ts.a.toString() } template() { return Is } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "bullet" === t && (this.container.classList.add("c-list--bullet"), Array.from(this.children).forEach((t => { t.style.display = "list-item" }))) } }); var Ms = i(51), Bs = i.n(Ms); const qs = document.createElement("template"); qs.innerHTML = '\n  <div class="js-container c-message">\n    <slot class="c-message-icon" name="icon"></slot>\n    <div class="c-message-content"><slot></slot></div>\n  </div>'; class zs extends B { static get style() { return Bs.a.toString() } template() { return qs } constructor() { super() } } customElements.define("bux2-message", zs); var Ns = i(52), Hs = i.n(Ns); const js = document.createElement("template"); js.innerHTML = '\n<div class="js-container c-message">\n    <bux2-svg class="c-message-icon"></bux2-svg>\n    <div class="c-message-content"><slot></slot></div>\n</div>\n', customElements.define("bux2-message-info", class extends zs { static get style() { return Hs.a.toString() } template() { return js } constructor() { super(); const t = this.$.querySelector(".c-message-icon"); t.setAttribute("icon", "info-cercle"), t.setAttribute("size", "lg") } }); var Rs = i(53), Os = i.n(Rs); const Ps = document.createElement("template"); Ps.innerHTML = '\n<div class="js-container c-message">\n    <bux2-svg class="c-message-icon" size="sm"></bux2-svg>\n    <div class="c-message-content"><slot></slot></div>\n</div>\n', customElements.define("bux2-message-error", class extends zs { static get style() { return Os.a.toString() } template() { return Ps } constructor() { super(), this.$.querySelector(".c-message-icon").setAttribute("icon", "croix-suppr") } }); var Ds = i(54), Vs = i.n(Ds); const Us = document.createElement("template"); Us.innerHTML = '\n<div class="js-container c-message">\n    <bux2-svg class="c-message-icon" size="sm"></bux2-svg>\n    <div class="c-message-content"><slot></slot></div>\n</div>\n', customElements.define("bux2-message-warning", class extends zs { static get style() { return Vs.a.toString() } template() { return Us } constructor() { super(), this.$.querySelector(".c-message-icon").setAttribute("icon", "exclamation-triangle") } }); var Fs = i(55), Ws = i.n(Fs); const Ks = B, Gs = document.createElement("template"); Gs.innerHTML = '\n<section class="c-steps js-container">\n    <div class="c-steps__wrapper">\n      <slot name="steps"></slot>\n    </div>\n    <div class="c-steps__progress js-progress-wrapper" aria-hidden="true">\n      <slot name="progress"></slot>\n    </div>\n</section>\n', window.customElements.define("bux2-steps", class extends Ks { static get style() { return Ws.a.toString() } constructor() { super(), this.progressBarWrapper = this.$.querySelector(".js-progress-wrapper"), this._setProgressBar = this._setProgressBar.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), setTimeout(this._setProgressBar, 150), window.addEventListener("resize", this._setProgressBar) } disconnectedCallback() { window.removeEventListener("resize", this._setProgressBar) } template() { return Gs } _setProgressBar() { const t = this.querySelectorAll("bux2-step-item"), e = t[0].getBoundingClientRect(), i = t[t.length - 1].getBoundingClientRect().x - e.x; this.progressBarWrapper.style.width = i + "px" } }); var Xs = i(56), Ys = i.n(Xs); const Js = document.createElement("template"); Js.innerHTML = '\n<div class="js-container c-row-icon">\n  <slot name="icon" class="c-row-icon__circle"></slot>\n  <slot class="c-row-icon__content"></slot>\n</div>\n', customElements.define("bux2-row-icon", class extends B { template() { return Js } static get style() { return Ys.a.toString() } }); var Zs = i(57), Qs = i.n(Zs); const ta = jt(B), ea = document.createElement("template"); ea.innerHTML = '\n<div class="c-step-item js-container">\n  <div class="c-step-item__number js-step-number" aria-hidden="true"></div>\n  <slot></slot>\n  <span class="a11y-hidden"></span>\n</div>\n', window.customElements.define("bux2-step-item", class extends ta { static get properties() { return { step: { type: "number" }, active: { type: "boolean" }, checked: { type: "boolean" }, a11yLabel: { type: "string" } } } static get style() { return Qs.a.toString() } template() { return ea } constructor() { super(), this.stepNumber = this.$.querySelector(".js-step-number") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.label = this.querySelector("bux2-text"), this.label && (this.label.setAttribute("center", ""), this.label.setAttribute("aria-hidden", "true")) } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i) switch (t) { case "step": this.stepNumber.textContent = this.step; break; case "active": this.hasAttribute("active") ? this.stepNumber.classList.add("is-active") : this.stepNumber.classList.remove("is-active"); break; case "checked": this.hasAttribute("checked") && "false" !== this.getAttribute("checked") ? this.container.classList.add("is-checked") : this.container.classList.remove("is-checked"); break; case "a11y-label": this.a11yLabel && this.active ? this.$.querySelector(".a11y-hidden").innerHTML = this.a11yLabel : this.$.querySelector(".a11y-hidden").innerHTML = "" } } }); var ia = i(58), sa = i.n(ia); const aa = B, na = document.createElement("template"); na.innerHTML = '\n<section class="c-modal js-container" aria-hidden="true" aria-modal="true" role="dialog">\n  <slot name="modal-header"></slot>\n  <button class="c-modal__close-btn js-close-btn" aria-label="fermer cette fenêtre de dialogue">\n    <bux2-svg icon="croix-fermer" size="lg"></bux2-svg>\n  </button>\n  <slot name="modal-body"></slot>\n  <slot name="modal-footer"></slot>\n</section>\n', window.customElements.define("bux2-modal", class extends aa { static get properties() { return { open: { type: "boolean" }, popin: { type: "boolean" } } } static get style() { return sa.a.toString() } template() { return na } constructor() { super(), this.closeBtn = this.$.querySelector(".js-close-btn"), this.handleClick = this.handleClick.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this) } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container) switch (t) { case "open": this._openModal(); break; case "popin": this._setStylePopin() } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.closeBtn.addEventListener("click", this.handleClick), window.addEventListener("keyup", this.handleKeyDown), this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0") } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.closeBtn.removeEventListener("click", this.handleClick), window.removeEventListener("keyup", this.handleKeyDown) } handleClick() { this._closeModal() } handleKeyDown(t) { this.open && !t.altKey && 27 === t.keyCode && this._closeModal() } _openModal() { this.open ? (this.style.display = "block", this.container.classList.add("is-open"), this.container.setAttribute("aria-hidden", "false"), this.focus()) : (this.style.display = "flex", this.container.classList.remove("is-open"), this.container.setAttribute("aria-hidden", "true")) } _closeModal() { const t = document.querySelector("bux2-overlay"), e = document.querySelector(`bux2-trigger-modal[modal-id="${this.id}"]`); this.open = !1, t.visible = !1, e.setAttribute("tabindex", "0"), e.focus(), e.removeAttribute("tabindex") } _setStylePopin() { if (this.hasAttribute("popin")) { this.container.classList.add("c-popin"); let t = this.querySelector("bux2-modal-header"); t && t.setAttribute("popin", "true") } else this.container.classList.remove("c-popin") } }); const ra = i(143), oa = document.createElement("template"); oa.innerHTML = '<div class="c-modal-header js-container"><slot></slot></div>', window.customElements.define("bux2-modal-header", class extends B { static get properties() { return { popin: { type: "boolean" } } } constructor() { super() } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container && "popin" === t && this._setStylePopin() } static get style() { return ra.toString() } template() { return oa } _setStylePopin() { this.hasAttribute("popin") ? this.container.classList.add("c-popin-header") : this.container.classList.remove("c-popin-header") } }); var la = i(59), ca = i.n(la); const da = st(wt(B)), ua = document.createElement("template"); ua.innerHTML = '<div class="c-modal-body js-container"><slot></slot></div>', window.customElements.define("bux2-modal-body", class extends da { constructor() { super() } static get style() { return ca.a.toString() } template() { return ua } }); const ha = i(144), pa = document.createElement("template"); pa.innerHTML = '<div class="c-modal-footer"><slot></slot></div>', window.customElements.define("bux2-modal-footer", class extends B { constructor() { super() } static get style() { return ha.toString() } template() { return pa } }); var ba = i(60), ma = i.n(ba); const ga = Xe(B), va = document.createElement("template"); va.innerHTML = '\n<section class="c-disclosure js-container">\n  <button class="c-disclosure__button js-button"\n          aria-expanded="false"\n          aria-controls="show-content">\n  </button>\n  <div class="c-disclosure__icon-right"><slot name="icon-right"></slot></div>\n  <div id="show-content" class="c-disclosure__content js-content">\n    <slot name="content"></slot>\n  </div>\n</section>\n', window.customElements.define("bux2-disclosure", class extends ga { static get properties() { return { label: { type: "string" }, labelExpanded: { type: "string" }, center: { type: "boolean" } } } static get style() { return ma.a.toString() } template() { return va } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i) switch (t) { case "label": this.button.innerHTML = this.label + '<bux2-svg icon="chevron" size="xs" class="c-disclosure__svg"></bux2-svg>'; break; case "expanded": this.expanded ? (this.button.classList.add("c-disclosure__button--expanded"), this.button.innerHTML = (this.labelExpanded ? this.labelExpanded : this.label) + '<bux2-svg icon="chevron" size="xs" rotate="180" class="c-disclosure__svg"></bux2-svg>') : (this.button.classList.remove("c-disclosure__button--expanded"), this.button.innerHTML = this.label + '<bux2-svg icon="chevron" size="xs" class="c-disclosure__svg"></bux2-svg>'); break; case "center": this.button.classList.add("c-disclosure__button--center") } } }); var fa = i(61), xa = i.n(fa); const ya = wt(B), ka = document.createElement("template"); ka.innerHTML = '\n<section class="c-appfooter js-container">\n  <slot></slot>\n</section>\n', window.customElements.define("bux2-appfooter", class extends ya { static get style() { return xa.a.toString() } template() { return ka } constructor() { super() } }); var wa = i(62), Ca = i.n(wa); const _a = document.createElement("template"); _a.innerHTML = '<div class="js-container c-bulle-item"><slot></slot></div>'; class Ea extends (function (t) { return class extends t { constructor() { super(), this.setAttribute("role", "button"), this.setAttribute("tabindex", "0"), this.handleBtnKeyUp = this.handleBtnKeyUp.bind(this) } handleBtnKeyUp(t) { 32 === t.keyCode && this.click() } connectedCallback() { this.addEventListener("keyup", this.handleBtnKeyUp) } disconnectedCallback() { this.removeEventListener("keyup", this.handleBtnKeyUp) } } }(st(B))) { static get properties() { return { icon: { type: "string" }, backgroundIcon: { type: "boolean" }, stroke: { type: "string" }, fill: { type: "string" } } } static get style() { return Ca.a.toString() } template() { return _a } constructor() { super() } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i); let s = this.container.querySelector(".bulle-item-svg"); this.icon ? (s ? s.icon = this.icon : (s = document.createElement("bux2-svg"), s.classList.add("bulle-item-svg"), s.setAttribute("icon", this.icon), this.container.insertAdjacentElement("afterbegin", s)), this.fill ? s.fill = this.fill : s.fill = "", this.stroke ? s.stroke = this.stroke : s.stroke = "") : s && s.parentNode.removeChild(s) } } customElements.define("bux2-bulle-item", Ea); var La = i(63), Aa = i.n(La); const Sa = oi(dt(wt(B))), Ta = document.createElement("template"); Ta.innerHTML = '<div class="js-container"><slot style="display: none;"></slot><button class="m-btn-no-style c-bulle-btn" aria-lable="ouvrir le menu"><bux2-svg size="perso" class="c-svg2--perso" icon="bulle-points" stroke="white" fill="none"></bux2-svg></button></div>', customElements.define("bux2-bulle", class extends Sa { static get properties() { return { icon: { type: "string" }, open: { type: "boolean" } } } static get style() { return Aa.a.toString() } template() { return Ta } constructor() { super() } connectedCallback() { [...this.children].forEach((t => { t.style.transform = "scale(0)", t.style.transition = "transform 200ms" })), super.connectedCallback && super.connectedCallback(), this.verticalSpace || (this.verticalSpace = "sm"), this._slots[0].style.display = "", this.$.querySelector(".m-btn-no-style").onclick = () => { this.open ? ([...this.children].forEach((t => { t.style.transform = "scale(0)" })), this.open = !1) : ([...this.children].forEach((t => { t.style.transform = "scale(1)" })), this.open = !0) } } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i) } disconnectedCallback() { super.connectedCallback && super.connectedCallback() } }); let $a = 0; const Ia = i(145), Ma = document.createElement("template"); Ma.innerHTML = '\n<div class="c-dualpanel">\n  <div class="c-dualpanel__item"><slot name="panel01"></slot></div>\n  <div class="c-dualpanel__item"><slot name="panel02"></slot></div>\n</div>\n', window.customElements.define("bux2-dualpanel", class extends B { constructor() { super(), this.count = $a++ } static get style() { return Ia.toString() } template() { return Ma } connectedCallback() { this.querySelector('[slot="panel02"]').id = "c-dualpanel__item-B" + this.count } }); var Ba = i(64), qa = i.n(Ba); const za = fi(wt(B)), Na = document.createElement("template"); Na.innerHTML = '<section class="c-frame js-container"><slot></slot></section>', window.customElements.define("bux2-frame", class extends za { static get properties() { return { background: { type: "string" }, tag: { type: "string" } } } static get style() { return qa.a.toString() } template() { return Na } constructor() { super(), this._handleSlotChange = this._handleSlotChange.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this._handleSlotChange(), this.addEventListener("bux-slot-change", this._handleSlotChange) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("bux-slot-change", this._handleSlotChange) } _handleSlotChange() { let t; this.verticalSpace && (t = `var(--spacing-${this.verticalSpace})`), this.horizontalSpace && (t = `var(--spacing-${this.horizontalSpace})`), this._setStack(t) } }); const Ha = wt(As(B)), ja = document.createElement("template"); ja.innerHTML = '<div class="js-container"><slot></slot></div>', customElements.define("bux2-key-value", class extends Ha { template() { return ja } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("space-v") || this.setAttribute("space-v", "xs") } }); var Ra = i(65), Oa = i.n(Ra); const Pa = fi(wt(B)); window.customElements.define("bux2-section", class extends Pa { static get properties() { return { tag: { type: "string" } } } static get style() { return Oa.a.toString() } constructor() { super(), this._handleSlotChange = this._handleSlotChange.bind(this) } _handleSlotChange() { let t; this.verticalSpace && (t = `var(--spacing-${this.verticalSpace})`), this.horizontalSpace && (t = `var(--spacing-${this.horizontalSpace})`), this._setStack(t) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this._handleSlotChange(), this.addEventListener("bux-slot-change", this._handleSlotChange) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("bux-slot-change", this._handleSlotChange) } template() { const t = this.tag || "div", e = document.createElement("template"); return e.innerHTML = `<${t} class="js-container"><slot></slot></${t}>`, e } }); var Da = i(66), Va = i.n(Da); const Ua = document.createElement("template"); Ua.innerHTML = "<slot></slot>", customElements.define("bux2-slider-item", class extends B { static get properties() { return { active: { type: "boolean", defaultValue: "false" } } } static get style() { return Va.a.toString() } template() { return Ua } constructor() { super() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("role", "listitem") } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "active" === t && (this.active ? (this.classList.add("c-slider-item__active"), this.classList.remove("c-slider-item__unactive"), this.removeAttribute("aria-hidden")) : (this.classList.remove("c-slider-item__active"), this.classList.add("c-slider-item__unactive"), this.setAttribute("aria-hidden", "true"))) } }); var Fa = i(67), Wa = i.n(Fa); const Ka = jt(dt(B)), Ga = document.createElement("template"); Ga.innerHTML = '<ul class="c-slider-pagination__ul"></ul>'; const Xa = document.createElement("template"); Xa.innerHTML = '<li class="c-slider-pagination__li"><button class="m-btn-no-style c-slider-pagination__btn"></button></li>', customElements.define("bux2-slider-pagination", class extends Ka { static get properties() { return { count: { type: "number" }, itemActive: { type: "number" } } } static get style() { return Wa.a.toString() } template() { return Ga } constructor() { super() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.resetItems() } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "count" === t ? this.resetItems() : "item-active" === t && this.gotoItem(e, i) } gotoItem() { this.items.forEach(((t, e) => { e == this.itemActive ? this.addCurrentItem(t, e) : this.removeCurrentItem(t, e) })) } resetItems() { const t = this.$.querySelector(".c-slider-pagination__ul"); t.innerHTML = "", this.items = []; for (let e = 0; e < this.count; e++) { const i = Xa.content.cloneNode(!0).querySelector("li"); i.addEventListener("click", (() => { this.itemActive = e })), this.items.push(i), t.appendChild(i) } } addCurrentItem(t, e) { t.classList.add("active"), t.querySelector(".c-slider-pagination__btn").innerHTML = `<span class="a11y-hidden">éléments actif (${e + 1} sur ${this.count})</span>`, this.dispatchEvent(new CustomEvent("change-active-item", { detail: { itemActive: e }, bubbles: !0 })) } removeCurrentItem(t, e) { t.classList.remove("active"), t.querySelector(".c-slider-pagination__btn").innerHTML = `<span class="a11y-hidden">éléments inactif (${e + 1} sur ${this.count})</span>` } }); var Ya = i(68), Ja = i.n(Ya); const Za = function (t) { return class extends t { constructor() { super(), this.x0 = null, this.y0 = null, this.onDrag = !1, this.element = null, this.dragStart = this.dragStart.bind(this), this.dragStop = this.dragStop.bind(this), this.drag = this.drag.bind(this), this.emitEvtHelper = this.emitEvtHelper.bind(this) } disconnectedCallback() { super.connectedCallback && super.connectedCallback(), this.removeSwipeEvt() } selector(t) { return "string" == typeof t ? document.querySelector(t) : t } unitEvent(t) { return t.changedTouches ? t.changedTouches[0] : t } calculateDiff(t) { return { dx: this.x0 - this.unitEvent(t).clientX, dy: this.y0 - this.unitEvent(t).clientY } } emitEvtHelper(t, e) { this.element.dispatchEvent(new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: { x0: this.x0, y0: this.y0, dx: e.dx, dy: e.dy } })) } addSwipeEvt(t, { mindx: e, mindy: i } = { mindx: 10, mindy: 10 }) { t || (t = this), this.element && (this.removeSwipeEvt(), this.x0 = null, this.y0 = null, this.onDrag = !1, this.element = null), this.mindx = e, this.mindy = i, this.element = this.selector(t), this.element.addEventListener("mousedown", this.dragStart, !1), this.element.addEventListener("touchstart", this.dragStart, !1) } removeSwipeEvt() { this.element.removeEventListener("mousedown", this.dragStart, !1), this.element.removeEventListener("touchstart", this.dragStart, !1), this.element.removeEventListener("mousemove", this.drag, !1), this.element.removeEventListener("touchmove", this.drag, !1), this.element.removeEventListener("mouseup", this.dragStop, !1), this.element.removeEventListener("touchend", this.dragStop, !1) } dragStart(t) { this.element.addEventListener("mousemove", this.drag, !1), this.element.addEventListener("touchmove", this.drag, !1), this.element.addEventListener("mouseup", this.dragStop, !1), this.element.addEventListener("touchend", this.dragStop, !1), this.x0 = this.unitEvent(t).clientX, this.y0 = this.unitEvent(t).clientY, this.onDrag = !0 } drag(t) { if (this.onDrag) { const e = this.calculateDiff(t); Math.abs(e.dx) > this.mindx && (e.dx < 0 ? this.emitEvtHelper("swipe-left", e) : this.emitEvtHelper("swipe-right", e)) } } dragStop(t) { if (this.onDrag) { const e = this.calculateDiff(t); Math.abs(e.dx) > this.mindx && (e.dx < 0 ? this.emitEvtHelper("swipe-left-end", e) : this.emitEvtHelper("swipe-right-end", e)), Math.abs(e.dy) > this.mindy && (e.dy < 0 ? this.emitEvtHelper("swipe-up-end", e) : this.emitEvtHelper("swipe-down-end", e)) } this.element.removeEventListener("mousemove", this.drag, !1), this.element.removeEventListener("touchmove", this.drag, !1), this.element.removeEventListener("mouseup", this.dragStop, !1), this.element.removeEventListener("touchend", this.dragStop, !1), this.x0 = null, this.y0 = null, this.onDrag = !1 } } }(jt(zt(dt(B)))), Qa = document.createElement("template"); Qa.innerHTML = '\n<span class="a11y-hidden" tabindex="0">Début du carousel</span>\n<div class="c-slider__wrap">\n  <button class="m-btn-no-style c-slider__left"><span class="a11y-hidden">élément précédent</span><bux2-svg icon="chevron" rotate="180" style="border-radius:50%;background-color:rgba(255,255,255,0.5);" aria-hidden></bux2-svg></button>\n  <div class="c-slider__content" role="list" tabindex="0" aria-label="contenue du carrousel"><slot></slot></div>\n  <button class="m-btn-no-style c-slider__right"><span class="a11y-hidden">élément suivant</span><bux2-svg icon="chevron" style="border-radius:50%;background-color:rgba(255,255,255,0.5);"></bux2-svg></button>\n</div>\n<bux2-slider-pagination></bux2-slider-pagination>'; const tn = document.createElement("template"); tn.innerHTML = '<div id="ariapolite" aria-live="polite" aria-atomic="true" class="a11y-hidden"></div>', customElements.define("bux2-slider", class extends Za { static get properties() { return { loop: { type: "boolean", defaultValue: !0 }, pagination: { type: "boolean", defaultValue: !0 }, navigation: { type: "boolean", defaultValue: !0 }, itemActive: { type: "number", defaultValue: 0 } } } static get style() { return Ja.a.toString() } template() { return Qa } nextItem() { this.itemActive++ } prevItem() { this.itemActive-- } constructor() { super(), this.items = this.querySelectorAll("bux2-slider-item"), this.nextItem = this.nextItem.bind(this), this.prevItem = this.prevItem.bind(this), this.changeActiveItemFormPagination = this.changeActiveItemFormPagination.bind(this), this.paginationEl = this.$.querySelector("bux2-slider-pagination"), this.paginationEl.addEventListener("change-active-item", this.changeActiveItemFormPagination), this.addEventListener("keyup", (t => { "ArrowRight" === t.key || "Right" === t.key ? this.nextItem() : "ArrowLeft" !== t.key && "Left" !== t.key || this.prevItem() })), this.handleSlotChange = this.handleSlotChange.bind(this), this.fineSlotChange(this.$.querySelector("slot"), this.handleSlotChange), this.addSwipeEvt(), this.addEventListener("swipe-left-end", this.prevItem), this.addEventListener("swipe-right-end", this.nextItem) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.items = this.querySelectorAll("bux2-slider-item"), this.tabIndex = 0, this.countItem = this.items.length, this.paginationEl.count = this.countItem, this.$.querySelector(".c-slider__left").addEventListener("click", this.prevItem), this.$.querySelector(".c-slider__right").addEventListener("click", this.nextItem), this.gotoItem(1, 0) } handleSlotChange() { this.items = this.querySelectorAll("bux2-slider-item"), this.countItem = this.items.length, this.paginationEl.count = this.countItem, this.itemActive = this.paginationEl.itemActive = this.itemActive } changeActiveItemFormPagination(t) { this.gotoItem(this.itemActive, t.detail.itemActive) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "item-active" === t && (this.gotoItem(e, i), this.polite || (this.$.appendChild(tn.content.cloneNode(!0)), this.polite = this.$.querySelector("#ariapolite")), this.polite.textContent = `élément ${+this.itemActive + 1} sur ${this.countItem}`) } disconnectedCallback() { super.connectedCallback && super.connectedCallback(), this.$.querySelector(".c-slider__left").removeEventListener("click", this.prevItem), this.$.querySelector(".c-slider__right").removeEventListener("click", this.nextItem), this.$.querySelector("bux2-slider-pagination").removeEventListener("change-active-item", this.changeActiveItemFormPagination) } gotoItem(t, e) { t != e && (e < 0 ? e = this.loop ? this.countItem - 1 : 0 : this.itemActive > this.countItem - 1 && (e = this.loop ? 0 : this.countItem - 1), (t || 0 === t) && this.items[t] && (this.items[t].active = !1), (e || 0 === e) && this.items[e] && (this.items[e].active = !0), this.itemActive = e, this.paginationEl.itemActive = e) } }); const en = document.createElement("template"); en.innerHTML = '\n<div class="c-shortcut-wrap" aria-hidden="true">\n  <nav class="c-shortcut-nav">\n    <ul class="c-shortcut-ul">\n    </ul>\n  </nav>\n</div>'; class sn extends B { static get properties() { return { isOpenMobile: { type: "boolean" }, hasScrollEd: { type: "boolean" } } } template() { return en } set data(t) { if (!t) return; this.ul.innerHTML = ""; const e = document.createElement("template").content, i = t.length - 1; t.forEach(((t, s) => { e.appendChild(this.renderOneItem(t, 0 === s, s === i)) })), this.ul.appendChild(e) } constructor() { super(), this.ul = this.$.querySelector(".c-shortcut-ul"), this.wrap = this.$.querySelector(".c-shortcut-wrap"), this.nav = this.$.querySelector(".c-shortcut-nav"), this.onScrollEvent = this.onScrollEvent.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), window.addEventListener("scroll", this.onScrollEvent) } onScrollEvent() { window.removeEventListener("scroll", this.onScrollEvent), this.setOpenMobile() } setOpenMobile() { this.ul.classList.add("is-open-mobile"), this.nav.classList.add("is-open-mobile"), this.wrap.classList.add("is-open-mobile"), this.wrap.removeAttribute("aria-hidden"), this.isOpenMobile = !0 } renderOneItem(t, e = !1, i = !1) { const s = document.createElement("li"); return s.classList.add("c-shortcut-li"), e && s.classList.add("c-shortcut-li--first"), i && s.classList.add("c-shortcut-li--last"), s.innerHTML = `\n      <a class="c-shortcut-a" href="${t.path}">\n        ${t.icon ? `\n            <bux2-svg icon="${t.icon}" class="c-icon c-shortcut-icon"></bux2-svg>\n            ` : ""}\n        <span class="c-shortcut-label">${t.label}</span>\n      </a>\n    `, s } } var an = i(69), nn = i.n(an); customElements.define("bux-shortcut", class extends sn { static get style() { return nn.a.toString() } }); var rn = i(70), on = i.n(rn); const ln = wt(B), cn = document.createElement("template"); cn.innerHTML = '<slot class="js-container c-wmax-center"></slot>', customElements.define("bux2-wmax-center", class extends ln { static get style() { return on.a.toString() } template() { return cn } constructor() { super() } }); var dn = i(71), un = i.n(dn); const hn = wt(B), pn = document.createElement("template"); pn.innerHTML = '\n<section class="c-endprocess js-container">\n<slot></slot>\n</section>\n', window.customElements.define("bux2-endprocess", class extends hn { template() { return pn } static get style() { return un.a.toString() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("space") || this.setAttribute("space-v", "md") } }); var bn = i(72), mn = i.n(bn); const gn = document.createElement("template"); gn.innerHTML = '\n<section class="js-container c-widget-account">\n  <div class="c-widget-account__top">\n    <div class="c-widget-account__amount">\n      <slot name="widget-amount">\n        <div class="placeholder"></div>\n      </slot>\n      <svg width="40" height="40" aria-hidden="true" class="c-widget-account__arrow" viewBox="0 0 50 50">\n        <path d="M16.419 49L9.5 42.1l17.16-17L9.5 7.8 16.419.944 40.5 24.808 16.419 48.944z"/>\n      </svg>\n    </div>\n    <div class="c-widget-account__delayed-op">\n      <slot name="widget-delayed-operations">\n        <div class="placeholder"></div>\n      </slot>\n    </div>\n  </div>\n</section>\n'; const vn = document.createElement("template"); vn.innerHTML = '\n<div class="c-widget-account__nav">\n  <slot name="widget-nav">\n    <div class="placeholder"></div>\n  </slot>\n</div>\n', window.customElements.define("bux2-widget-account", class extends B { static get properties() { return { link: { type: "boolean" }, libLink: { type: "boolean" }, shortcuts: { type: "string" } } } static get style() { return mn.a.toString() } template() { return gn } attributeChangedCallback(t, e, i) { switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "link": this._setLink(); break; case "lib-link": this._setLibLink(); break; case "shortcuts": this._setShortcuts() } } _setLink() { this.container && (this.link ? this.container.classList.add("c-widget-account--link") : this.container.classList.remove("c-widget-account--link")) } _setLibLink() { this.libLink ? this.container.classList.add("c-widget-account--link") : this.container.classList.remove("c-widget-account--link") } _setShortcuts() { this.$.querySelector(".c-widget-account__nav") || this.container.appendChild(vn.content.cloneNode(!0)) } }); var fn = i(73), xn = i.n(fn); document.createElement("template").innerHTML = '\n<section class="c-widget-card">\n  <div class="c-widget-card__content">\n    <slot name="widget-card-content">\n      <div class="placeholder"></div>\n    </slot>\n  </div>\n  <div class="c-widget-card__ops">\n    <slot name="widget-card-ops">\n      <div class="placeholder"></div>\n    </slot>\n  </div>\n  <div class="c-widget-card__nav">\n    <slot name="widget-card-nav">\n      <div class="placeholder"></div>\n    </slot>\n  </div>\n</section>\n', window.customElements.define("bux2-widget-card", class extends B { constructor() { super() } static get style() { return xn.a.toString() } }); var yn = i(74), kn = i.n(yn); const wn = B, Cn = document.createElement("template"); Cn.innerHTML = '\n<section class="c-widget-conseiller">\n  <div class="c-widget-conseiller__content">\n    <slot name="widget-conseiller-user">\n      <div class="placeholder"></div>\n    </slot>\n  </div>\n  <div class="c-widget-conseiller__phone">\n    <slot name="widget-conseiller-phone">\n      <div class="placeholder"></div>\n    </slot>\n  </div>\n  <div class="c-widget-conseiller__nav">\n    <slot name="widget-conseiller-nav">\n      <div class="placeholder"></div>\n    </slot>\n  </div>\n</section>\n', window.customElements.define("bux2-widget-conseiller", class extends wn { constructor() { super() } static get style() { return kn.a.toString() } template() { return Cn } }) }]) }, 6012: () => { window.uxLib || (window.uxLib = {}), window.uxLib.breakpoints = { smobile: 740, mobile: 1020, tablet: 1090 } }, 9253: (t, e, i) => { var s = { "./maven-pro-v13-latin-bold.woff": 8579, "./maven-pro-v13-latin-bold.woff2": 7209, "./maven-pro-v13-latin-regular.woff": 2513, "./maven-pro-v13-latin-regular.woff2": 1902, "apps/cmb/fonts/maven-pro-v13-latin-bold.woff": 8579, "apps/cmb/fonts/maven-pro-v13-latin-bold.woff2": 7209, "apps/cmb/fonts/maven-pro-v13-latin-regular.woff": 2513, "apps/cmb/fonts/maven-pro-v13-latin-regular.woff2": 1902 }; function a(t) { var e = n(t); return i(e) } function n(t) { if (!i.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] } a.keys = function () { return Object.keys(s) }, a.resolve = n, t.exports = a, a.id = 9253 }, 1664: (t, e, i) => { var s = { "./deprecated-chevron-double.svg": 8060, "./deprecated-chevron.svg": 4390, "./deprecated-coche.svg": 4499, "./deprecated-crayon.svg": 4967, "./deprecated-croix-suppr.svg": 4292, "./deprecated-enveloppe-ouverte.svg": 4288, "./deprecated-exclamation-triangle.svg": 4771, "./deprecated-fichier.svg": 1694, "./deprecated-fleche-cercle.svg": 8805, "./deprecated-fleches-chargement.svg": 4560, "./deprecated-info-cercle.svg": 1128, "./deprecated-interrogation-cercle.svg": 9006, "./deprecated-loupe.svg": 489, "./deprecated-mobile-cadenas.svg": 7731, "./deprecated-mobile-sms.svg": 351, "./deprecated-oeil-barre.svg": 8859, "./deprecated-oeil.svg": 9629, "./deprecated-personne-slash-personne.svg": 9856, "./deprecated-telecharger.svg": 2058, "./deprecated-telephone.svg": 5326, "apps/cmb/icons-deprecated/deprecated-chevron-double.svg": 8060, "apps/cmb/icons-deprecated/deprecated-chevron.svg": 4390, "apps/cmb/icons-deprecated/deprecated-coche.svg": 4499, "apps/cmb/icons-deprecated/deprecated-crayon.svg": 4967, "apps/cmb/icons-deprecated/deprecated-croix-suppr.svg": 4292, "apps/cmb/icons-deprecated/deprecated-enveloppe-ouverte.svg": 4288, "apps/cmb/icons-deprecated/deprecated-exclamation-triangle.svg": 4771, "apps/cmb/icons-deprecated/deprecated-fichier.svg": 1694, "apps/cmb/icons-deprecated/deprecated-fleche-cercle.svg": 8805, "apps/cmb/icons-deprecated/deprecated-fleches-chargement.svg": 4560, "apps/cmb/icons-deprecated/deprecated-info-cercle.svg": 1128, "apps/cmb/icons-deprecated/deprecated-interrogation-cercle.svg": 9006, "apps/cmb/icons-deprecated/deprecated-loupe.svg": 489, "apps/cmb/icons-deprecated/deprecated-mobile-cadenas.svg": 7731, "apps/cmb/icons-deprecated/deprecated-mobile-sms.svg": 351, "apps/cmb/icons-deprecated/deprecated-oeil-barre.svg": 8859, "apps/cmb/icons-deprecated/deprecated-oeil.svg": 9629, "apps/cmb/icons-deprecated/deprecated-personne-slash-personne.svg": 9856, "apps/cmb/icons-deprecated/deprecated-telecharger.svg": 2058, "apps/cmb/icons-deprecated/deprecated-telephone.svg": 5326 }; function a(t) { var e = n(t); return i(e) } function n(t) { if (!i.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] } a.keys = function () { return Object.keys(s) }, a.resolve = n, t.exports = a, a.id = 1664 }, 6682: (t, e, i) => { var s = { "./bouee.svg": 2891, "./enveloppe.svg": 3115, "./facebook.svg": 2349, "./linkedin.svg": 9808, "./logo.svg": 214, "./target-blank.svg": 4437, "./virtualis.svg": 4202, "./youtube.svg": 3739, "apps/cmb/icons-specifics/bouee.svg": 2891, "apps/cmb/icons-specifics/enveloppe.svg": 3115, "apps/cmb/icons-specifics/facebook.svg": 2349, "apps/cmb/icons-specifics/linkedin.svg": 9808, "apps/cmb/icons-specifics/logo.svg": 214, "apps/cmb/icons-specifics/target-blank.svg": 4437, "apps/cmb/icons-specifics/virtualis.svg": 4202, "apps/cmb/icons-specifics/youtube.svg": 3739 }; function a(t) { var e = n(t); return i(e) } function n(t) { if (!i.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] } a.keys = function () { return Object.keys(s) }, a.resolve = n, t.exports = a, a.id = 6682 }, 2069: (t, e, i) => { var s = { "./agence.svg": 1770, "./agenda-croix.svg": 7501, "./agenda.svg": 7937, "./ampoule.svg": 4250, "./arbres.svg": 2062, "./at.svg": 8797, "./banque-fleches.svg": 5193, "./banque.svg": 8633, "./bateau-papier.svg": 7598, "./billets.svg": 2477, "./bocal-euro.svg": 7774, "./boite-au-lettres.svg": 9582, "./bouclier.svg": 4633, "./bretagne.svg": 3609, "./bulle-aide.svg": 8920, "./bulle-euro.svg": 8376, "./bulle-exclamation.svg": 1690, "./bulle-faq.svg": 9835, "./bulle-info.svg": 8337, "./bulle-maison.svg": 8364, "./bulle-points.svg": 5170, "./bulles-reclamation.svg": 5273, "./cadenas.svg": 4552, "./calcul.svg": 9062, "./calculatrice.svg": 4172, "./camembert-euros.svg": 357, "./camembert.svg": 9581, "./camera.svg": 410, "./camping-car-bateau.svg": 4306, "./carte-compte.svg": 4601, "./carte-fleches.svg": 946, "./carte-id.svg": 8931, "./carte-interdit.svg": 3298, "./carte-mobile.svg": 1360, "./carte-pause.svg": 6458, "./carte-plafond.svg": 7426, "./carte.svg": 7964, "./cartes.svg": 5995, "./cercle-contour.svg": 6887, "./cercle.svg": 5599, "./cheque.svg": 5689, "./chequier-breton.svg": 2837, "./chequier-classique.svg": 7434, "./chequier-ferme.svg": 9011, "./chequier-portefeuille.svg": 2708, "./chevron-double.svg": 4846, "./chevron.svg": 5404, "./cible.svg": 7590, "./cloche.svg": 9697, "./coche-cercle-fin.svg": 3530, "./coche-cercle.svg": 7510, "./coche-disque.svg": 3254, "./coche-liste.svg": 7710, "./coche.svg": 2066, "./coffre-fort.svg": 1256, "./compte.svg": 9938, "./conseiller-cercle.svg": 668, "./conseiller.svg": 5077, "./conseillere.svg": 2303, "./contacts.svg": 2669, "./copier.svg": 7838, "./couple.svg": 9425, "./courbe-fleche.svg": 2269, "./crayon-barre.svg": 6487, "./crayon.svg": 2508, "./croix-cercle.svg": 7623, "./croix-fermer.svg": 3867, "./croix-suppr.svg": 1142, "./curseur.svg": 5677, "./deconnexion.svg": 6298, "./dossier.svg": 3607, "./drapeau-cercle.svg": 4046, "./drapeau-disque.svg": 1799, "./drapeau.svg": 5606, "./engrenages.svg": 4946, "./enveloppe-fleche.svg": 9109, "./enveloppe-ouverte.svg": 9934, "./enveloppe-recommande.svg": 6428, "./etiquette.svg": 6951, "./etoile-plein.svg": 6180, "./etoile.svg": 2491, "./euro.svg": 6593, "./excel.svg": 2157, "./exclamation-cercle.svg": 7332, "./exclamation-triangle.svg": 2251, "./famille-parapluie.svg": 7414, "./feuille-crayon.svg": 605, "./feuille-croix.svg": 6485, "./feuille-euro.svg": 6791, "./fichier.svg": 7546, "./fleche-cercle.svg": 7459, "./fleche-retour-droite.svg": 8483, "./fleches-chargement.svg": 5117, "./fleches-euro-rapide.svg": 6119, "./fleches-euro.svg": 1075, "./geolocalisation.svg": 5590, "./graph.svg": 6695, "./histogramme.svg": 6498, "./historique.svg": 2596, "./horloge.svg": 5481, "./hors-ligne.svg": 5243, "./imprimante.svg": 6178, "./info-cercle.svg": 9121, "./info-flash.svg": 7968, "./interrogation-cercle.svg": 4733, "./justice.svg": 1032, "./livret.svg": 9520, "./loupe.svg": 4753, "./lune-zzz.svg": 9400, "./main-bulle.svg": 5271, "./main-clic.svg": 9079, "./main-euro.svg": 4467, "./main-maison.svg": 3629, "./main-pourcentage.svg": 4947, "./mains-poignee.svg": 2359, "./mains.svg": 6917, "./maison-cle.svg": 6185, "./maison-marteau.svg": 112, "./maison-parapluie.svg": 7053, "./maison-voiture.svg": 1554, "./maison.svg": 4605, "./marteau-justice.svg": 4624, "./micro-ok.svg": 7533, "./micro-ondes.svg": 635, "./micro.svg": 645, "./mobile-appel.svg": 6529, "./mobile-cadenas.svg": 9084, "./mobile-notification.svg": 2809, "./mobile-sms.svg": 232, "./mobile.svg": 7953, "./moto.svg": 6294, "./navigation-burger-ferme-mobile.svg": 3323, "./navigation-burger-ouvert-mobile.svg": 6571, "./navigation-fermer.svg": 7158, "./navigation-retour-cercle.svg": 1984, "./navigation-retour-mobile.svg": 776, "./navigation-retour.svg": 5171, "./oeil-barre.svg": 4849, "./oeil.svg": 2921, "./oreille-barree.svg": 9438, "./outils.svg": 3648, "./panier.svg": 7352, "./parapluie.svg": 9229, "./personne-bouclier.svg": 7952, "./personne-bulle.svg": 6698, "./personne-cercle-fleche.svg": 4679, "./personne-cercle.svg": 6618, "./personne-check.svg": 8738, "./personne-cheveux.svg": 5139, "./personne-croix.svg": 7945, "./personne-etudiant.svg": 4119, "./personne-malette.svg": 9, "./personne-slash-personne.svg": 956, "./personne-souriez.svg": 4977, "./personne.svg": 3047, "./plage.svg": 4976, "./plus-cercle.svg": 8945, "./plus.svg": 1761, "./porte.svg": 5939, "./portefeuille.svg": 3438, "./poubelle.svg": 9112, "./pouce.svg": 6829, "./reco-faciale-empreinte.svg": 1060, "./reco-faciale.svg": 6709, "./reglages.svg": 7080, "./rib.svg": 8898, "./sablier.svg": 8582, "./smiley.svg": 8597, "./tablette-crayon.svg": 250, "./telecharger.svg": 3035, "./telephone-fleche.svg": 6369, "./telephone.svg": 1074, "./tirelire.svg": 1766, "./trombone.svg": 9089, "./twitter.svg": 266, "./upload.svg": 1679, "./voiture-moto.svg": 3058, "./voiture.svg": 5003, "apps/cmb/icons/agence.svg": 1770, "apps/cmb/icons/agenda-croix.svg": 7501, "apps/cmb/icons/agenda.svg": 7937, "apps/cmb/icons/ampoule.svg": 4250, "apps/cmb/icons/arbres.svg": 2062, "apps/cmb/icons/at.svg": 8797, "apps/cmb/icons/banque-fleches.svg": 5193, "apps/cmb/icons/banque.svg": 8633, "apps/cmb/icons/bateau-papier.svg": 7598, "apps/cmb/icons/billets.svg": 2477, "apps/cmb/icons/bocal-euro.svg": 7774, "apps/cmb/icons/boite-au-lettres.svg": 9582, "apps/cmb/icons/bouclier.svg": 4633, "apps/cmb/icons/bretagne.svg": 3609, "apps/cmb/icons/bulle-aide.svg": 8920, "apps/cmb/icons/bulle-euro.svg": 8376, "apps/cmb/icons/bulle-exclamation.svg": 1690, "apps/cmb/icons/bulle-faq.svg": 9835, "apps/cmb/icons/bulle-info.svg": 8337, "apps/cmb/icons/bulle-maison.svg": 8364, "apps/cmb/icons/bulle-points.svg": 5170, "apps/cmb/icons/bulles-reclamation.svg": 5273, "apps/cmb/icons/cadenas.svg": 4552, "apps/cmb/icons/calcul.svg": 9062, "apps/cmb/icons/calculatrice.svg": 4172, "apps/cmb/icons/camembert-euros.svg": 357, "apps/cmb/icons/camembert.svg": 9581, "apps/cmb/icons/camera.svg": 410, "apps/cmb/icons/camping-car-bateau.svg": 4306, "apps/cmb/icons/carte-compte.svg": 4601, "apps/cmb/icons/carte-fleches.svg": 946, "apps/cmb/icons/carte-id.svg": 8931, "apps/cmb/icons/carte-interdit.svg": 3298, "apps/cmb/icons/carte-mobile.svg": 1360, "apps/cmb/icons/carte-pause.svg": 6458, "apps/cmb/icons/carte-plafond.svg": 7426, "apps/cmb/icons/carte.svg": 7964, "apps/cmb/icons/cartes.svg": 5995, "apps/cmb/icons/cercle-contour.svg": 6887, "apps/cmb/icons/cercle.svg": 5599, "apps/cmb/icons/cheque.svg": 5689, "apps/cmb/icons/chequier-breton.svg": 2837, "apps/cmb/icons/chequier-classique.svg": 7434, "apps/cmb/icons/chequier-ferme.svg": 9011, "apps/cmb/icons/chequier-portefeuille.svg": 2708, "apps/cmb/icons/chevron-double.svg": 4846, "apps/cmb/icons/chevron.svg": 5404, "apps/cmb/icons/cible.svg": 7590, "apps/cmb/icons/cloche.svg": 9697, "apps/cmb/icons/coche-cercle-fin.svg": 3530, "apps/cmb/icons/coche-cercle.svg": 7510, "apps/cmb/icons/coche-disque.svg": 3254, "apps/cmb/icons/coche-liste.svg": 7710, "apps/cmb/icons/coche.svg": 2066, "apps/cmb/icons/coffre-fort.svg": 1256, "apps/cmb/icons/compte.svg": 9938, "apps/cmb/icons/conseiller-cercle.svg": 668, "apps/cmb/icons/conseiller.svg": 5077, "apps/cmb/icons/conseillere.svg": 2303, "apps/cmb/icons/contacts.svg": 2669, "apps/cmb/icons/copier.svg": 7838, "apps/cmb/icons/couple.svg": 9425, "apps/cmb/icons/courbe-fleche.svg": 2269, "apps/cmb/icons/crayon-barre.svg": 6487, "apps/cmb/icons/crayon.svg": 2508, "apps/cmb/icons/croix-cercle.svg": 7623, "apps/cmb/icons/croix-fermer.svg": 3867, "apps/cmb/icons/croix-suppr.svg": 1142, "apps/cmb/icons/curseur.svg": 5677, "apps/cmb/icons/deconnexion.svg": 6298, "apps/cmb/icons/dossier.svg": 3607, "apps/cmb/icons/drapeau-cercle.svg": 4046, "apps/cmb/icons/drapeau-disque.svg": 1799, "apps/cmb/icons/drapeau.svg": 5606, "apps/cmb/icons/engrenages.svg": 4946, "apps/cmb/icons/enveloppe-fleche.svg": 9109, "apps/cmb/icons/enveloppe-ouverte.svg": 9934, "apps/cmb/icons/enveloppe-recommande.svg": 6428, "apps/cmb/icons/etiquette.svg": 6951, "apps/cmb/icons/etoile-plein.svg": 6180, "apps/cmb/icons/etoile.svg": 2491, "apps/cmb/icons/euro.svg": 6593, "apps/cmb/icons/excel.svg": 2157, "apps/cmb/icons/exclamation-cercle.svg": 7332, "apps/cmb/icons/exclamation-triangle.svg": 2251, "apps/cmb/icons/famille-parapluie.svg": 7414, "apps/cmb/icons/feuille-crayon.svg": 605, "apps/cmb/icons/feuille-croix.svg": 6485, "apps/cmb/icons/feuille-euro.svg": 6791, "apps/cmb/icons/fichier.svg": 7546, "apps/cmb/icons/fleche-cercle.svg": 7459, "apps/cmb/icons/fleche-retour-droite.svg": 8483, "apps/cmb/icons/fleches-chargement.svg": 5117, "apps/cmb/icons/fleches-euro-rapide.svg": 6119, "apps/cmb/icons/fleches-euro.svg": 1075, "apps/cmb/icons/geolocalisation.svg": 5590, "apps/cmb/icons/graph.svg": 6695, "apps/cmb/icons/histogramme.svg": 6498, "apps/cmb/icons/historique.svg": 2596, "apps/cmb/icons/horloge.svg": 5481, "apps/cmb/icons/hors-ligne.svg": 5243, "apps/cmb/icons/imprimante.svg": 6178, "apps/cmb/icons/info-cercle.svg": 9121, "apps/cmb/icons/info-flash.svg": 7968, "apps/cmb/icons/interrogation-cercle.svg": 4733, "apps/cmb/icons/justice.svg": 1032, "apps/cmb/icons/livret.svg": 9520, "apps/cmb/icons/loupe.svg": 4753, "apps/cmb/icons/lune-zzz.svg": 9400, "apps/cmb/icons/main-bulle.svg": 5271, "apps/cmb/icons/main-clic.svg": 9079, "apps/cmb/icons/main-euro.svg": 4467, "apps/cmb/icons/main-maison.svg": 3629, "apps/cmb/icons/main-pourcentage.svg": 4947, "apps/cmb/icons/mains-poignee.svg": 2359, "apps/cmb/icons/mains.svg": 6917, "apps/cmb/icons/maison-cle.svg": 6185, "apps/cmb/icons/maison-marteau.svg": 112, "apps/cmb/icons/maison-parapluie.svg": 7053, "apps/cmb/icons/maison-voiture.svg": 1554, "apps/cmb/icons/maison.svg": 4605, "apps/cmb/icons/marteau-justice.svg": 4624, "apps/cmb/icons/micro-ok.svg": 7533, "apps/cmb/icons/micro-ondes.svg": 635, "apps/cmb/icons/micro.svg": 645, "apps/cmb/icons/mobile-appel.svg": 6529, "apps/cmb/icons/mobile-cadenas.svg": 9084, "apps/cmb/icons/mobile-notification.svg": 2809, "apps/cmb/icons/mobile-sms.svg": 232, "apps/cmb/icons/mobile.svg": 7953, "apps/cmb/icons/moto.svg": 6294, "apps/cmb/icons/navigation-burger-ferme-mobile.svg": 3323, "apps/cmb/icons/navigation-burger-ouvert-mobile.svg": 6571, "apps/cmb/icons/navigation-fermer.svg": 7158, "apps/cmb/icons/navigation-retour-cercle.svg": 1984, "apps/cmb/icons/navigation-retour-mobile.svg": 776, "apps/cmb/icons/navigation-retour.svg": 5171, "apps/cmb/icons/oeil-barre.svg": 4849, "apps/cmb/icons/oeil.svg": 2921, "apps/cmb/icons/oreille-barree.svg": 9438, "apps/cmb/icons/outils.svg": 3648, "apps/cmb/icons/panier.svg": 7352, "apps/cmb/icons/parapluie.svg": 9229, "apps/cmb/icons/personne-bouclier.svg": 7952, "apps/cmb/icons/personne-bulle.svg": 6698, "apps/cmb/icons/personne-cercle-fleche.svg": 4679, "apps/cmb/icons/personne-cercle.svg": 6618, "apps/cmb/icons/personne-check.svg": 8738, "apps/cmb/icons/personne-cheveux.svg": 5139, "apps/cmb/icons/personne-croix.svg": 7945, "apps/cmb/icons/personne-etudiant.svg": 4119, "apps/cmb/icons/personne-malette.svg": 9, "apps/cmb/icons/personne-slash-personne.svg": 956, "apps/cmb/icons/personne-souriez.svg": 4977, "apps/cmb/icons/personne.svg": 3047, "apps/cmb/icons/plage.svg": 4976, "apps/cmb/icons/plus-cercle.svg": 8945, "apps/cmb/icons/plus.svg": 1761, "apps/cmb/icons/porte.svg": 5939, "apps/cmb/icons/portefeuille.svg": 3438, "apps/cmb/icons/poubelle.svg": 9112, "apps/cmb/icons/pouce.svg": 6829, "apps/cmb/icons/reco-faciale-empreinte.svg": 1060, "apps/cmb/icons/reco-faciale.svg": 6709, "apps/cmb/icons/reglages.svg": 7080, "apps/cmb/icons/rib.svg": 8898, "apps/cmb/icons/sablier.svg": 8582, "apps/cmb/icons/smiley.svg": 8597, "apps/cmb/icons/tablette-crayon.svg": 250, "apps/cmb/icons/telecharger.svg": 3035, "apps/cmb/icons/telephone-fleche.svg": 6369, "apps/cmb/icons/telephone.svg": 1074, "apps/cmb/icons/tirelire.svg": 1766, "apps/cmb/icons/trombone.svg": 9089, "apps/cmb/icons/twitter.svg": 266, "apps/cmb/icons/upload.svg": 1679, "apps/cmb/icons/voiture-moto.svg": 3058, "apps/cmb/icons/voiture.svg": 5003 }; function a(t) { var e = n(t); return i(e) } function n(t) { if (!i.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] } a.keys = function () { return Object.keys(s) }, a.resolve = n, t.exports = a, a.id = 2069 }, 5725: (t, e, i) => { var s = { "./NCL.jpg": 1233, "./NCL.png": 1701, "./agence.png": 4500, "./bloc-marque.png": 9945, "./logo.png": 5349, "apps/cmb/images-specifics/NCL.jpg": 1233, "apps/cmb/images-specifics/NCL.png": 1701, "apps/cmb/images-specifics/agence.png": 4500, "apps/cmb/images-specifics/bloc-marque.png": 9945, "apps/cmb/images-specifics/logo.png": 5349 }; function a(t) { var e = n(t); return i(e) } function n(t) { if (!i.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] } a.keys = function () { return Object.keys(s) }, a.resolve = n, t.exports = a, a.id = 5725 }, 7213: (t, e, i) => { var s = { "./0969_360_220.png": 5938, "./acces-ag.jpg": 5347, "./acces-cashback.png": 4742, "./architech-habitat.jpg": 8545, "./architech-habitat.png": 5852, "./architech-projet.jpg": 8679, "./architech-projet.png": 6755, "./arkenvie.png": 4025, "./card_black.jpg": 5612, "./card_black.png": 7084, "./cni-ko.png": 8092, "./cni-ok.png": 1504, "./digiposte.jpg": 6594, "./digiposte.png": 5798, "./facture-ko.png": 6275, "./facture-ok.png": 2243, "./passeport-ko.png": 924, "./passeport-ok.png": 1838, "./payliblogo.png": 5946, "./personne-bouclier.png": 1955, "./profil.jpg": 1178, "./profil.png": 4701, "./responsive.jpg": 1368, "./responsive.png": 4594, "./tuto-pc.jpg": 4244, "./virtualis.jpg": 8560, "./virtualis.png": 5472, "./visuel-cashback.png": 6835, "apps/cmb/images/0969_360_220.png": 5938, "apps/cmb/images/acces-ag.jpg": 5347, "apps/cmb/images/acces-cashback.png": 4742, "apps/cmb/images/architech-habitat.jpg": 8545, "apps/cmb/images/architech-habitat.png": 5852, "apps/cmb/images/architech-projet.jpg": 8679, "apps/cmb/images/architech-projet.png": 6755, "apps/cmb/images/arkenvie.png": 4025, "apps/cmb/images/card_black.jpg": 5612, "apps/cmb/images/card_black.png": 7084, "apps/cmb/images/cni-ko.png": 8092, "apps/cmb/images/cni-ok.png": 1504, "apps/cmb/images/digiposte.jpg": 6594, "apps/cmb/images/digiposte.png": 5798, "apps/cmb/images/facture-ko.png": 6275, "apps/cmb/images/facture-ok.png": 2243, "apps/cmb/images/passeport-ko.png": 924, "apps/cmb/images/passeport-ok.png": 1838, "apps/cmb/images/payliblogo.png": 5946, "apps/cmb/images/personne-bouclier.png": 1955, "apps/cmb/images/profil.jpg": 1178, "apps/cmb/images/profil.png": 4701, "apps/cmb/images/responsive.jpg": 1368, "apps/cmb/images/responsive.png": 4594, "apps/cmb/images/tuto-pc.jpg": 4244, "apps/cmb/images/virtualis.jpg": 8560, "apps/cmb/images/virtualis.png": 5472, "apps/cmb/images/visuel-cashback.png": 6835 }; function a(t) { var e = n(t); return i(e) } function n(t) { if (!i.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] } a.keys = function () { return Object.keys(s) }, a.resolve = n, t.exports = a, a.id = 7213 }, 2755: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/broken-screen.png" }, 5162: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/construction.png" }, 9147: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/profil_chat.png" }, 6138: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/range.png" }, 7171: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/redirection.png" }, 1233: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/NCL.jpg" }, 1701: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/NCL.png" }, 4500: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/agence.png" }, 9945: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/bloc-marque.png" }, 5349: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/logo.png" }, 5938: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/0969_360_220.png" }, 5347: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/acces-ag.jpg" }, 4742: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/acces-cashback.png" }, 8545: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/architech-habitat.jpg" }, 5852: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/architech-habitat.png" }, 8679: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/architech-projet.jpg" }, 6755: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/architech-projet.png" }, 4025: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/arkenvie.png" }, 5612: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/card_black.jpg" }, 7084: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/card_black.png" }, 8092: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/cni-ko.png" }, 1504: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/cni-ok.png" }, 6594: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/digiposte.jpg" }, 5798: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/digiposte.png" }, 6275: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/facture-ko.png" }, 2243: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/facture-ok.png" }, 924: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/passeport-ko.png" }, 1838: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/passeport-ok.png" }, 5946: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/payliblogo.png" }, 1955: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/personne-bouclier.png" }, 1178: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/profil.jpg" }, 4701: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/profil.png" }, 1368: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/responsive.jpg" }, 4594: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/responsive.png" }, 4244: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/tuto-pc.jpg" }, 8560: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/virtualis.jpg" }, 5472: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/virtualis.png" }, 6835: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/visuel-cashback.png" }, 8060: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-chevron-double.svg" }, 4390: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-chevron.svg" }, 4499: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-coche.svg" }, 4967: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-crayon.svg" }, 4292: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-croix-suppr.svg" }, 4288: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-enveloppe-ouverte.svg" }, 4771: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-exclamation-triangle.svg" }, 1694: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-fichier.svg" }, 8805: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-fleche-cercle.svg" }, 4560: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-fleches-chargement.svg" }, 1128: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-info-cercle.svg" }, 9006: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-interrogation-cercle.svg" }, 489: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-loupe.svg" }, 7731: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-mobile-cadenas.svg" }, 351: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-mobile-sms.svg" }, 8859: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-oeil-barre.svg" }, 9629: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-oeil.svg" }, 9856: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-personne-slash-personne.svg" }, 2058: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-telecharger.svg" }, 5326: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/images/deprecated-telephone.svg" }, 5353: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/fonts/cmb_part.1.woff" }, 890: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/fonts/cmb_part.1.woff2" }, 8579: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/fonts/maven-pro-v13-latin-bold.woff" }, 7209: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/fonts/maven-pro-v13-latin-bold.woff2" }, 2513: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/fonts/maven-pro-v13-latin-regular.woff" }, 1902: (t, e, i) => { "use strict"; t.exports = i.p + "./assets/fonts/maven-pro-v13-latin-regular.woff2" } }, e = {}; function i(s) { var a = e[s]; if (void 0 !== a) return a.exports; var n = e[s] = { exports: {} }; return t[s](n, n.exports, i), n.exports } i.n = t => { var e = t && t.__esModule ? () => t.default : () => t; return i.d(e, { a: e }), e }, i.d = (t, e) => { for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: e[s] }) }, i.g = function () { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (t) { if ("object" == typeof window) return window } }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.p = ""; var s = {}; return (() => {
    "use strict"; i.r(s); var t = {}; function e(t) { t.keys().forEach(t) } i.r(t), i.d(t, { UxA11yPager: () => Xu, UxAccordionItem: () => Al, UxAmount: () => $h, UxBackLink: () => su, UxBtn: () => dl, UxBtnGroup: () => ll, UxBurger: () => ru, UxCard: () => jl, UxCardBody: () => Tl, UxCardFooter: () => Il, UxCardHeader: () => Bl, UxCardReduc: () => Nl, UxChatbox: () => Fo, UxChatboxItem: () => Ko, UxCheckbox: () => wc, UxCheckboxGroup: () => yc, UxChip: () => El, UxCollapse: () => Ol, UxContainer: () => Dl, UxDate: () => Mh, UxDropdown: () => Vl, UxEditableField: () => ad, UxEspace: () => du, UxFigure: () => Od, UxFilter: () => ld, UxFilterGroup: () => rd, UxFlex: () => xh, UxFooter: () => gu, UxFooterItem: () => pu, UxFooterMenu: () => fu, UxFootnoteLink: () => yu, UxFootnoteLinkback: () => wu, UxForm: () => cd, UxGrid: () => kh, UxHeader: () => Eu, UxHeading: () => qh, UxImg: () => Dd, UxInboxMsg: () => Fl, UxInputA11yAmount: () => ud, UxInputA11yCheckbox: () => md, UxInputA11yCheckboxGroup: () => pd, UxInputA11yDate: () => vd, UxInputA11yEmail: () => fd, UxInputA11yFile: () => yd, UxInputA11yNumber: () => kd, UxInputA11yPassword: () => wd, UxInputA11yRadio: () => Ld, UxInputA11yRadioGroup: () => _d, UxInputA11yRange: () => Ad, UxInputA11ySearch: () => Td, UxInputA11ySelect: () => Id, UxInputA11yTel: () => Md, UxInputA11yText: () => Bd, UxInputA11yTextarea: () => zd, UxInputAmount: () => Mc, UxInputCheckbox: () => Lc, UxInputCheckboxGroup: () => _c, UxInputDate: () => Bc, UxInputEmail: () => qc, UxInputFile: () => zc, UxInputItem: () => Hc, UxInputNumber: () => jc, UxInputPassword: () => Rc, UxInputRadio: () => $c, UxInputRadioGroup: () => Sc, UxInputRange: () => Dc, UxInputRangeNative: () => Pc, UxInputSearch: () => Uc, UxInputTel: () => Fc, UxInputText: () => Wc, UxKeyValue: () => Ch, UxLabel: () => Gc, UxLink: () => pl, UxLinkBlank: () => ml, UxLinkBtn: () => gl, UxLinkTile: () => uc, UxList: () => Yd, UxLoader: () => Xo, UxLogin: () => Au, UxLogo: () => Tu, UxMain: () => _h, UxManageFile: () => jd, UxMenu: () => Ru, UxMenuIcon: () => Ou, UxMenuIconTitle: () => Du, UxMenuItem: () => Hu, UxMenuItemDropdown: () => Iu, UxMenuItemHr: () => Bu, UxMenuItemJump: () => zu, UxMenuSociaux: () => Uu, UxMenuSociauxItem: () => Vu, UxMessage: () => Jo, UxMessagerie: () => Fu, UxModal: () => Qo, UxPager: () => Ku, UxPagerItem: () => Wu, UxParametrage: () => Yu, UxPatch: () => el, UxProcessus: () => Zu, UxProcessusItem: () => th, UxProfil: () => ih, UxProfilBtn: () => nh, UxProgressBar: () => il, UxProgressRing: () => al, UxPulseRing: () => rl, UxRadioButton: () => Yc, UxRadioGrid: () => Zc, UxRadioGroup: () => td, UxRow: () => Ah, UxRowCell: () => Eh, UxScrollback: () => oh, UxSection: () => Sh, UxSelect: () => id, UxShortcut: () => ch, UxShortlink: () => fl, UxShowMore: () => Kl, UxSidebar: () => dh, UxSkipNav: () => hh, UxSkipNavItem: () => uh, UxSref: () => Rd, UxSteps: () => bh, UxStepsItem: () => gh, UxSticky: () => fh, UxSummary: () => Jl, UxSummaryItem: () => Xl, UxSvg: () => Ud, UxSwitchBtn: () => kl, UxTable: () => eu, UxTableCell: () => Zd, UxTableHeader: () => Qd, UxTableRow: () => tu, UxTabs: () => lc, UxTabsBtn: () => sc, UxTabsBtnRetroRetro: () => ac, UxTabsOnePanel: () => ic, UxTabsOnePanelBtn: () => Ql, UxTabsOnePanelPanel: () => tc, UxTabsPanel: () => nc, UxTabsPanelRetroBux: () => rc, UxTabsSpecial: () => cc, UxText: () => Nh, UxTile: () => pc, UxTileOperation: () => fc, UxTileOperation2: () => gc, UxVideo: () => Gd, UxVirtualis: () => Vh, UxWidgetlink: () => Cl }), i(6012); const a = t => { const e = []; let i = null; for (; i = null === i ? t : Object.getPrototypeOf(i), i && i.constructor && i.constructor !== HTMLElement && i.constructor !== Function && i.constructor !== Object && i.constructor !== i.constructor.constructor;)e.push(i); return e }; function n(t, ...e) { let i = ""; return e.forEach(((e, s) => { i += t[s] + e })), t.length > e.length && (i += t[t.length - 1]), i } function r(t, e = "properties") { return class extends t { static get observedAttributes() { const t = function (t, e) { let i = {}; for (const s of [...e].reverse()) s.hasOwnProperty(t) && (i = Object.assign(i, s[t])); return i }(e, (t => { const e = []; let i = null; for (; i = null === i ? t : Object.getPrototypeOf(i), i && i !== HTMLElement && i !== Function && i !== Object && i !== i.constructor;)e.push(i); return e })(this)); return Object.keys(t).reduce(((e, i) => { const s = t[i].attributeName; return s ? i !== s && e.push(s) : e.push(c(i)), e }), []).concat(super.observedAttributes || []) } constructor() { super(), this.toUpgrade = new Map, this.protoTree = a(Object.getPrototypeOf(this)), this.propsConfig = function (t, e) { let i = {}; for (const s of [...e].reverse()) s.constructor.hasOwnProperty(t) && (i = Object.assign(i, s.constructor[t])); return i }(e, this.protoTree), Object.keys(this.propsConfig).forEach((t => { this.hasOwnProperty(t) && this.toUpgrade.set(t, this[t]), Object.defineProperty(this, t, function (t, e, i) { switch (i) { case "boolean": return { get: h.bind(t, e), set: p.bind(t, e) }; case "string": return { get: b.bind(t, e), set: m.bind(t, e) }; case "number": return { get: g.bind(t, e), set: v.bind(t, e) }; default: return void console.error(`${this.getCustomName()}: erreur sur la déclaration du type ${e}`) } }(this, o(this.propsConfig, t), this.propsConfig[t].type)) })) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.toUpgrade.forEach(((t, e) => { this[e] = t })), Object.keys(this.propsConfig).forEach((t => { const e = this.getAttribute(o(this.propsConfig, t)); null != e ? this[t] !== e && (this[t] = e) : !this.propsConfig[t].defaultValue && 0 !== this.propsConfig[t].defaultValue && "" !== this.propsConfig[t].defaultValue || this[t] === this.propsConfig[t].defaultValue || (this[t] = this.propsConfig[t].defaultValue) })) } attributeChangedCallback(t, e, i) { if (e !== i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i); const s = l(t); this.propsConfig[s] && void 0 !== this.propsConfig[s].defaultValue && !this.hasAttribute(t) && (this[s] = this.propsConfig[s].defaultValue) } } } } function o(t, e) { return t[e].attributeName ? t[e].attributeName : c(e) } function l(t) { const e = t.split("-"); return "data" === e[0] && e.shift(), e.reduce(((t, e, i) => t + (i > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)), "") } function c(t) { return t.split(/(?=[A-Z])/).join("-").toLowerCase() } function d(t) { return "undefined" != typeof angular && ("checked" === t || "selected" === t || "disabled" === t || "open" === t) } function u(t) { let e = t; return e += "", "false" === e || "0" === e || "undefined" === e || "null" === e } function h(t) { if (this.hasAttribute(t)) { const e = this.getAttribute(t); return e === t || "true" === e || "" === e } return !1 } function p(t, e) { e += "", "" + this[t] !== e && (u(e) ? d(t) ? this.removeAttribute(t) : this.setAttribute(t, !1) : d(t) ? this.setAttribute(t, t) : this.setAttribute(t, !0)) } function b(t) { return this.getAttribute(t) } function m(t, e) { e += "", this.getAttribute(t) !== e && ("null" === e ? this.removeAttribute(t) : this.setAttribute(t, e)) } function g(t) { return this.hasAttribute(t) ? Number(this.getAttribute(t)) : null } function v(t, e) { e += "", this.getAttribute(t) !== e && ("null" === e || "" === e || "NaN" === e ? this.removeAttribute(t) : this.setAttribute(t, e)) } let f = ""; document.currentScript && document.currentScript.src && (f = document.currentScript.src, f.endsWith(".js") && (f = f.substring(0, f.lastIndexOf("/")))); const x = t => t.endsWith("Base") ? x(t.slice(0, -4)) : t; class y extends HTMLElement { static define(t = null) { const e = this.getCustomName(t); try { i = e, void 0 === window.customElements.get(i) && window.customElements.define(e, this) } catch (t) { console.warn(`WebC ${e} is already defined or class as been already used \n`, t) } var i } static getCustomName(t = null) { return t || this.customName || c(x(this.prototype.constructor.name)) } setBooleanClass(t, e, i) { const s = i || this.container; t ? s.classList.add(e) : s.classList.remove(e) } setOrRemoveAttr(t, e, i, s = !1) { const a = i || this.container; s ? a.setAttribute(t, e) : !e && 0 !== e || "null" === e ? a.removeAttribute(t) : a.setAttribute(t, e) } setBooleanStyleProp(t, e, i, s = this.container) { t ? s.style.setProperty(e, i) : s.style.removeProperty(e) } get uxLibUrl() { return f } get navigator() { return i = (e = navigator.userAgent).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(i[1]) ? { name: "IE " + ((t = /\brv[ :]+(\d+)/g.exec(e) || [])[1] || "") } : "Chrome" === i[1] && null != (t = e.match(/\b(OPR|Edge)\/(\d+)/)) ? { name: t.slice(1).join(" ").replace("OPR", "Opera") } : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = e.match(/version\/(\d+)/i)) && "Chrome" !== i[0] && i.splice(1, 1, t[1]), { name: i[0], version: i[1] }); var t, e, i } get screenType() { return window.matchMedia(`(max-width: ${window.uxLib.breakpoints.mobile}px)`).matches ? "mobile" : window.matchMedia(`(max-width: ${window.uxLib.breakpoints.tablet}px)`).matches ? "tablet" : "desktop" } get libInfos() { return window.uxLib.infos } } function k(t) { return class extends t { constructor() { super(), this.$ ? this._buildTemplateShadow() : this._buildTemplateNoShadow() } _changeTemplate(t, e) { this._buildTemplateShadow(), e && e(), [...this.attributes].forEach((e => { if (t !== e.name) { const t = e.value; this.setAttribute(e.name, ""), this.setAttribute(e.name, t) } })) } _buildTemplateShadow() { const t = a(Object.getPrototypeOf(this)), e = w(t); 0 !== e.length && this.$ && ([...this.$.querySelectorAll(":not(style)")].forEach((t => t.remove())), this.$.appendChild(e[e.length - 1].bind(this)().content.cloneNode(!0)), this.container = this.$.querySelector(".js-container") || this, this._slots = this._buildSlots(this.$.querySelectorAll("slot"))) } _buildTemplateNoShadow() { const t = a(Object.getPrototypeOf(this)), e = w(t); 0 !== e.length && (this.appendChild(e[e.length - 1].bind(this)().content.cloneNode(!0)), this.container = this.querySelector(".js-container") || this) } _buildSlots(t) { const e = {}; return t.forEach((t => { "" === t.name ? e.default = t : e[t.name] = t })), e } } } const w = t => { const e = []; for (const i of [...t].reverse()) i.hasOwnProperty("template") && e.push(i.template); return e }; class C extends (k(r(y))) { } window.uxLib || (window.uxLib = {}), window.uxLib.breakpoints || (window.uxLib.breakpoints = { smobile: 740, mobile: 740, tablet: 1090 }); const _ = `\n@media (max-width: ${window.uxLib.breakpoints.mobile}px) {\n  :host(.is-desktop:not(.is-mobile)) {\n    display: none !important;\n  }\n  .is-desktop:not(.is-mobile) {\n    display: none !important;\n  }\n  :host(.is-tablet:not(.is-mobile)) {\n    display: none !important;\n  }\n  .is-tablet:not(.is-mobile) {\n    display: none !important;\n  }\n}\n@media (min-width: ${window.uxLib.breakpoints.mobile + 1}px) and (max-width: ${window.uxLib.breakpoints.tablet - 1}px) {\n  :host(.is-mobile:not(.is-tablet)) {\n    display: none !important;\n  }\n  .is-mobile:not(.is-tablet) {\n    display: none !important;\n  }\n  :host(.is-desktop:not(.is-tablet)) {\n    display: none !important;\n  }\n  .is-desktop:not(.is-tablet) {\n    display: none !important;\n  }\n}\n@media (min-width: ${window.uxLib.breakpoints.tablet}px) {\n  :host(.is-mobile:not(.is-desktop)) {\n    display: none !important;\n  }\n  .is-mobile:not(.is-desktop) {\n    display: none !important;\n  }\n  :host(.is-tablet:not(.is-desktop)) {\n    display: none !important;\n  }\n  .is-tablet:not(.is-desktop) {\n    display: none !important;\n  }\n}`; if (!window.uxLib || !window.uxLib.breakpointsInserted) { window.uxLib || (window.uxLib = {}), window.uxLib.breakpointsInserted = !0; const t = document.createElement("style"); t.innerHTML = _, document.head.appendChild(t) } function E(t) { return class extends t { static get properties() { return { isMobile: { type: "boolean" }, isTablet: { type: "boolean" }, isDesktop: { type: "boolean" } } } static get style() { return _ } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "is-mobile": this.setBooleanClass(this.isMobile, "is-mobile", this), this.setBooleanClass(this.isMobile, "is-mobile", this.container); break; case "is-tablet": this.setBooleanClass(this.isTablet, "is-tablet", this), this.setBooleanClass(this.isTablet, "is-tablet", this.container); break; case "is-desktop": this.setBooleanClass(this.isDesktop, "is-desktop", this), this.setBooleanClass(this.isDesktop, "is-desktop", this.container) } } } } const L = "Consultez le storybook pour en savoir plus."; class A extends (function (t) { return class extends t { connectedCallback() { super.connectedCallback && super.connectedCallback(), this.deprecatedComponent(), this.deprecatedSlot() } attributeChangedCallback(t, e, i) { if (e !== i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i); const s = function (t, e) { if (t[l(e)] && !t[l(e)].attributeName) return l(e); const i = Object.keys(t); let s = 0; for (; s < i.length;) { if (t[i[s]] && t[i[s]].attributeName && t[i[s]].attributeName === e) return i[s]; s++ } }(this.propsConfig, t); this.propsConfig[s].deprecated && console.warn(`La propriété ${t} sur le composant ${this.tagName} est dépréciée. ${L}`) } } deprecatedComponent() { this.deprecated && console.warn(`Le composant ${this.tagName} est déprécié. ${L}`) } deprecatedSlot() { this.$.querySelectorAll("slot").forEach((t => { t.deprecated && t.assignedElements().length > 0 && console.warn(`Le slot ${t.name || "default"} sur le composant ${this.tagName} est déprécié. ${L}`) })) } } }(E(k(function (t) { return class extends t { constructor() { super(); const t = (t => { const e = []; for (const i of [...t].reverse()) i.constructor.hasOwnProperty("style") && e.push(i.constructor.style); return e })(a(Object.getPrototypeOf(this))), e = document.createElement("template"); e.innerHTML = `<style class="m-style">${t.join("")}</style>`, this.$ && (window.ShadyCSS && ShadyCSS.prepareTemplate(e, this.tagName.toLowerCase()), this.$.appendChild(e.content.cloneNode(!0)), this.customStyle = this.$.querySelector(".m-style")) } connectedCallback() { super.connectedCallback && super.connectedCallback(), window.ShadyCSS && ShadyCSS.styleElement(this) } } }(function (t) { return class extends t { constructor() { super(), this.attachShadow({ mode: "open" }), this.$ = this.shadowRoot } } }(r(y))))))) { } const S = n`
  .c-stack {
    display: flex;
    justify-content: flex-start;
  }

  .c-stack--vertical {
    flex-direction: column;
  }

  .c-stack--horizontal {
    flex-direction: row;
    align-items: center;
  }

  .c-stack--vertical ::slotted(*:not(:last-child):not(ux-heading):not([visually-hidden])),
  .c-stack--vertical.c-stack--all ::slotted(*:not(ux-heading)) {
    margin-bottom: var(--stack-size);
    display: block;
  }

  .c-stack--horizontal ::slotted(*:not(:last-child)),
  .c-stack--horizontal.c-stack--all ::slotted(*) {
    margin-right: var(--stack-size);
    display: block;
  }

  /* Si un composant a un attribut 'column' ou 'column-m', l'espacement horizontal doit se transformer en espacement vertical */
  :host([column]:not([column='false'])) .c-stack--horizontal ::slotted(*:not(:last-child)),
  :host([column]:not([column='false'])) .c-stack--horizontal.c-stack--all ::slotted(*) {
    margin-right: 0;
    margin-bottom: var(--stack-size);
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([column-m]:not([column-m='false'])) .c-stack--horizontal ::slotted(*:not(:last-child)),
    :host([column-m]:not([column-m='false'])) .c-stack--horizontal.c-stack--all ::slotted(*) {
      margin-right: 0;
      margin-bottom: var(--stack-size);
    }
  }
`; function T(t) { return class extends t { static get properties() { return { spaceV: { type: "string" }, spaceH: { type: "string" }, spaceAll: { type: "boolean" } } } static get style() { return S } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "space-v" !== t && "space-h" !== t && "space-all" !== t || this.spaceApply()) } spaceApply() { const t = this.$.querySelector(".m-stack") || this.container; this.setBooleanClass(this.spaceV, "c-stack--vertical", t), this.spaceV && t.style.setProperty("--stack-size", `var(--spacing-${this.spaceV})`), this.setBooleanClass(this.spaceH, "c-stack--horizontal", t), this.spaceH && t.style.setProperty("--stack-size", `var(--spacing-${this.spaceH})`), this.setBooleanClass(this.spaceAll, "c-stack--all", t), this.setBooleanClass(this.spaceV || this.spaceH || this.spaceAll, "c-stack", t) } } } function $(t) { return class extends t { static get properties() { return { icon: { type: "string" }, iconSize: { type: "string" }, iconColor: { type: "string" } } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.icon && this.updateIcon(), this.iconSize && this.updateIconSize(), this.iconColor && this.updateIconColor() } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "icon": this.updateIcon(); break; case "icon-size": this.updateIconSize(); break; case "icon-color": this.updateIconColor() } } updateIcon() { [...this.iconTarget].forEach((t => { this.setOrRemoveAttr("icon", this.icon, t) })) } updateIconSize() { [...this.iconTarget].forEach((t => { this.setOrRemoveAttr("lib-size", this.iconSize, t) })) } updateIconColor() { [...this.iconTarget].forEach((t => { this.setOrRemoveAttr("lib-color", this.iconColor, t) })) } get iconTarget() { const t = this.$.querySelectorAll(".m-icon"); return 0 === t.length ? [this.$.querySelector("ux-svg")] : t } } } const I = document.createElement("template"); I.innerHTML = '\n<div class="c-chatbox js-container">\n  <div class="c-chatbox__icon">\n    <ux-svg class="m-icon"></ux-svg>\n  </div>\n  <div class="c-chatbox__content" role="status">\n    <slot></slot>\n  </div>\n</div>\n'; class M extends ($(T(A))) { template() { return I } } const B = n`
  :host([background-base]:not([background-base='false'])) .js-container,
  :host([background-light]:not([background-light='false'])) .js-container,
  :host([no-background]:not([no-background='false'])) .js-container,
  :host([lib-bg-color]:not([lib-bg-color=''])) .js-container {
    background-color: var(--m-background-color) !important;
  }

  .m-background-hover {
    transition: background-color 250ms ease-in-out;
  }

  .m-background-hover:hover {
    background-color: var(--color-background-hover);
  }
`; function q(t) { return class extends t { static get properties() { return { backgroundBase: { type: "boolean" }, backgroundLight: { type: "boolean" }, backgroundHover: { type: "boolean" }, noBackground: { type: "boolean" }, libBgColor: { type: "string" } } } static get style() { return B } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "background-base": this.setBooleanStyleProp(this.backgroundBase, "--m-background-color", "var(--color-background)", this); break; case "background-light": this.setBooleanStyleProp(this.backgroundLight, "--m-background-color", "var(--color-background-light)", this); break; case "background-hover": this.setBooleanClass(this.backgroundHover, "m-background-hover"); break; case "no-background": this.setBooleanStyleProp(this.noBackground, "--m-background-color", "unset", this); break; case "lib-bg-color": this._setBgColor() } } _setBgColor() { switch (this.libBgColor) { case "primary": this.setBooleanStyleProp("primary" === this.libBgColor, "--m-background-color", "var(--color-primary)", this); break; case "secondary": this.setBooleanStyleProp("secondary" === this.libBgColor, "--m-background-color", "var(--color-secondary)", this); break; case "tertiary": this.setBooleanStyleProp("tertiary" === this.libBgColor, "--m-background-color", "var(--color-tertiary)", this); break; default: this.setBooleanStyleProp("" !== this.libBgColor, "--m-background-color", this.libBgColor, this) } } } } const z = document.createElement("template"); z.innerHTML = '\n<div class="c-chatbox-item js-container">\n  <div class="c-chatbox-item__status"></div>\n  <div class="c-chatbox-item__content">\n    <slot></slot>\n  </div>\n  <div class="c-chatbox-item__footer">\n    <slot name="footer"></slot>\n  </div>\n</div>\n'; class N extends (q(A)) { static get properties() { return { model: { type: "string" } } } template() { return z } constructor() { super(), this.statusEl = this.$.querySelector(".c-chatbox-item__status") } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "model" === t && this._setModel()) } _setModel() { switch (this.model) { case "alert": this.statusEl.innerHTML = "<p>Alerte</p>"; break; case "urgent": this.statusEl.innerHTML = "<p>Urgent</p>"; break; default: this.statusEl.innerHTML = "" } } } const H = n`
  /* La classe .a11y-hidden est dépréciée */
  .visually-hidden,
  .a11y-hidden {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
  }

  .caption-hidden {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: static !important;
    top: -100000px;
    white-space: nowrap !important;
    font-size: 0 !important;
  }

  @media (max-width: 1019px) {
    /* La classe .a11y-hidden-mt est dépréciée */
    .visually-hidden-mt,
    .a11y-hidden-mt {
      border: 0 !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      white-space: nowrap !important;
      width: 1px !important;
    }
  }
`; function j(t) { return class extends t { static get style() { return H } } } function R(t) { return class extends t { static get properties() { return { a11yLabel: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "a11y-label" === t && (this.a11yLabel ? this.$.querySelector(".m-hidden-label").innerHTML = this.a11yLabel : this.$.querySelector(".m-hidden-label").innerHTML = "")) } } } n`
  .c-layer {
    position: relative;
  }

  :host(:not([blur])) .c-layer--text {
    display: none;
  }

  :host([blur]:not([blur='false'])) .c-layer--text {
    position: absolute;
  }
`; const O = document.createElement("template"); O.innerHTML = '\n<div class="js-container c-layer" aria-live="polite" status="non caché">\n  <div class="c-layer--background">\n    <slot></slot>\n  </div>\n  <p class="visually-hidden m-hidden-label"></p>\n  <div class="c-layer--text" aria-hidden>\n    <slot name="text"></slot>\n  </div>\n</div>'; class P extends (T(R(j(A)))) { static get properties() { return { blur: { type: "boolean", defaultValue: !1 } } } template() { return O } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.layerText = this.$.querySelector(".c-layer--text"), this.layerBackground = this.$.querySelector(".c-layer--background"), this._blur() } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "blur" === t && this._blur()) } _blur() { this.setOrRemoveAttr("aria-hidden", !this.blur, this.layerText), this.setOrRemoveAttr("aria-hidden", this.blur, this.layerBackground), this.container.setAttribute("status", this.blur ? "caché" : "non caché") } } var D = i(1), V = i.n(D); const U = document.createElement("template"); U.innerHTML = '\n  <div class="c-loader js-container" role="status" aria-live="assertive">\n    <div class="c-loader__overlay" part="ux-loader__overlay">\n      <div class="c-loader__animated" aria-hidden="true" part="ux-loader__animated"></div>\n      <p class="c-loader__vocal visually-hidden">La page est en cours de chargement, veuillez patienter</p>\n    </div>\n  </div>\n  '; class F extends (j(A)) { static get properties() { return { loading: { type: "boolean" } } } template() { return U } constructor() { super(), this.loaderEl = this.$.querySelector(".c-loader__overlay"), this.tmpEl = document.createElement("template") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this._toggleLoading() } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "loading" === t && V()((() => this._toggleLoading(this.loading)), 150)()) } _toggleLoading(t) { t ? this.container.appendChild(this.loaderEl) : this.tmpEl.content.appendChild(this.loaderEl) } } const W = document.createElement("template"); W.innerHTML = '\n<div class="c-message js-container">\n  <div class="c-message--icon">\n    <slot name="icon"></slot>\n  </div>\n  <div class="c-message--content">\n    <slot></slot>\n  </div>\n</div>\n'; class K extends A { static get properties() { return { type: { type: "string" } } } template() { return W } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "type" === t && this._setType() } _setType() { console.error("Should be overwrite in child component") } } const G = n`
  .m-btn-no-style {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    color: inherit;
    min-width: 0;
    width: 100%;
    height: 100%;
    font-family: var(--font-family);
  }
`; function X(t) { return class extends t { static get style() { return G } } } const Y = document.createElement("template"); Y.innerHTML = '\n<div class="c-modal js-container" aria-hidden="true">\n  <section class="c-modal__inner" aria-modal="true" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-desc" tabindex="-1" part="ux-modal__inner">\n  <div id="modal-start" class="visually-hidden" tabindex="0">Début de la fenêtre modale : </div>\n    <div class="c-modal__header">\n      <h2 id="modal-title">\n        <slot name="modal-title"></slot>\n        <slot name="title"></slot>\n      </h2>\n      <button class="c-modal__close-btn js-close-btn m-btn-no-style" title="fermer cette fenêtre de dialogue" part="ux-modal__close-btn">\n        <span class="visually-hidden">fermer cette fenêtre de dialogue</span>\n        <ux-svg lib-size="modalico"></ux-svg>\n      </button>\n    </div>\n    <div class="c-modal__body m-stack">\n      <slot></slot>\n    </div>\n    <div class="c-modal__footer" part="ux-modal__footer">\n      <slot name="modal-footer"></slot>\n      <slot name="footer"></slot>\n    </div>\n    <div id="modal-end" class="visually-hidden" tabindex="0">Fin de la fenêtre modale : </div>\n    <p id="modal-desc" class="visually-hidden"></p>\n    </section>\n\n  <div class="c-modal__overlay"></div>\n</div>\n'; class J extends (function (t) { return class extends t { isFocusable(t) { if (t.hidden || t.disabled) return !1; if (!t.tagName.startsWith("UX-") && (t.offsetWidth <= 0 || t.offsetHeight <= 0)) return !1; if (t.getAttribute("tabindex")) return !0; if (t.delegateFocusElement) return !0; if ("true" === t.getAttribute("contenteditable")) return !0; switch (t.tagName) { case "SELECT": case "TEXTAREA": case "INPUT": case "BUTTON": case "IFRAME": case "DETAILS": return !0; case "AREA": case "A": return "" !== t.href }return !1 } } }($(j(T(X(A)))))) { static get properties() { return { open: { type: "boolean" }, focusBackElement: { type: "string" }, noCross: { type: "boolean" } } } template() { return Y } constructor() { super(), this._slots["modal-title"].deprecated = !0, this._slots["modal-footer"].deprecated = !0, this.closeBtn = this.$.querySelector(".js-close-btn"), this.overlay = this.$.querySelector(".c-modal__overlay"), this.modal = this.$.querySelector(".c-modal__inner"), this.modalStart = this.$.querySelector("#modal-start"), this.modalEnd = this.$.querySelector("#modal-end"), this.tmpEl = document.createElement("template"), this.sendClose = this.sendClose.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "open": this.open ? this._openModal() : this._closeModal(); break; case "no-cross": this.setNoCross() } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.noCross || (this.closeBtn.addEventListener("click", this.sendClose), this.overlay.addEventListener("click", this.sendClose)), this.open || (this.tmpEl.content.appendChild(this.overlay), this.tmpEl.content.appendChild(this.modal)), window.addEventListener("keydown", this.handleKeyDown) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.noCross || (this.closeBtn.removeEventListener("click", this.sendClose), this.overlay.removeEventListener("click", this.sendClose)), window.removeEventListener("keydown", this.handleKeyDown) } handleKeyDown(t) { this.open && !t.altKey && ("Escape" !== t.key && "Escape" !== t.code && 27 !== t.keyCode || this.noCross || this.sendClose(), "Tab" !== t.key && "Tab" !== t.code && 9 !== t.keyCode || this._tabTrapping(t)) } sendClose() { this.closeModalCallBack ? this.closeModalCallBack() : this.open = !1 } setNoCross() { this.noCross ? (this.closeBtn.style.display = "none", this.overlay.removeEventListener("click", this.sendClose), this.closeBtn.removeEventListener("click", this.sendClose)) : (this.closeBtn.style.display = "", this.closeBtn.addEventListener("click", this.sendClose), this.overlay.addEventListener("click", this.sendClose)) } _openModal() { const t = this.querySelector("[modal-desc]"), e = this.modal.querySelector("#modal-desc"); t && (e.innerHTML = t.textContent), this.container.appendChild(this.modal), this.container.appendChild(this.overlay), this.container.setAttribute("aria-hidden", "false"), this.modal.focus(), setTimeout((() => { e.innerHTML = "" }), 3e3) } _closeModal() { this.tmpEl.content.appendChild(this.overlay), this.tmpEl.content.appendChild(this.modal), this.container.setAttribute("aria-hidden", "true"); let t = null; t = this.focusBackElement ? document.querySelector(`#${this.focusBackElement}`) : document.querySelector(`[target-id="${this.id}"`), t && (this.isFocusable(t) ? t.focus() : (t.setAttribute("tabindex", "-1"), t.focus(), t.addEventListener("blur", (t => { t.target.removeAttribute("tabindex") }), { once: !0 }))), this.dispatchEvent(new Event("change")) } _tabTrapping(t) { const e = document.activeElement; e && (this.open && e !== this && !this.contains(e) && this.modal.focus(), this.$.activeElement === this.modalStart && t.shiftKey ? (this.modalEnd.focus(), t.preventDefault()) : this.$.activeElement !== this.modalEnd || t.shiftKey || (this.modalStart.focus(), t.preventDefault())) } } const Z = n`
  :host(.m-align) {
    display: block;
    width: fit-content;
    /* firefox */
    width: -moz-fit-content;
  }

  :host(.m-center) {
    margin-left: auto;
    margin-right: auto;
  }

  :host(.m-left) {
    margin-right: auto;
  }

  :host(.m-right) {
    margin-left: auto;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host(.m-center-m) {
      margin-left: auto;
      margin-right: auto;
    }

    :host(.m-left-m) {
      margin-right: auto;
    }

    :host(.m-right-m) {
      margin-left: auto;
    }
  }
`; function Q(t) { return class extends t { static get properties() { return { center: { type: "boolean" }, left: { type: "boolean" }, right: { type: "boolean" }, centerM: { type: "boolean" }, leftM: { type: "boolean" }, rightM: { type: "boolean" } } } static get style() { return Z } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "center": case "left": case "right": case "center-m": case "left-m": case "right-m": this._changeClass(t, i) } } _changeClass(t, e) { "true" !== e && "" !== e || this.classList.add("m-align"), this.setBooleanClass("true" === e || "" === e, `m-${t}`, this), this.classList.contains("m-center") || this.classList.contains("m-left") || this.classList.contains("m-right") || this.classList.contains("m-center-m") || this.classList.contains("m-left-m") || this.classList.contains("m-right-m") || this.classList.remove("m-align") } } } function tt(t) { return class extends t { static get properties() { return { shadow: { type: "boolean" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "shadow" === t && this.setBooleanClass(this.shadow, "has-shadow", this.$.querySelector(".m-shadow"))) } } } const et = document.createElement("template"); et.innerHTML = '\n  <div class="c-patch js-container">\n    <div class="c-patch--top">\n      <slot name="top"></slot>\n    </div>\n    <div class="c-patch--bottom">\n      <slot name="bottom"></slot>\n    </div>\n  </div>'; class it extends (tt(Q(T(A)))) { template() { return et } } const st = n`
  /*
 * @todo virer les !important, pour ça revoir l'ordre
 * de chargement des CSS
 * @warning bux2-amount c-amount--negative
 */

  .c-theme--part {
    color: var(--color-theme-part) !important;
  }

  .c-theme--pro {
    color: var(--color-theme-pro) !important;
  }

  .c-theme--light {
    color: var(--color-theme-light) !important;
  }

  .c-theme--dark {
    color: var(--color-theme-dark) !important;
  }

  .c-theme--success {
    color: var(--color-success) !important;
  }

  .c-theme--error {
    color: var(--color-error) !important;
  }

  .c-theme--white {
    color: var(--color-white) !important;
  }

  /**
*/
  .c-theme-color--primary {
    color: var(--color-primary) !important;
  }

  .c-theme-color--secondary {
    color: var(--color-secondary) !important;
  }

  .c-theme-color--success {
    color: var(--color-success) !important;
  }

  .c-theme-color--positive {
    color: var(--color-positive) !important;
  }

  .c-theme-color--negative {
    color: var(--color-error) !important;
  }

  .c-theme-color--error {
    color: var(--color-error) !important;
  }

  .c-theme-color--white {
    color: var(--color-white) !important;
  }

  .c-theme-color--text-light {
    color: var(--color-text-light) !important;
  }

  .c-theme-color--text {
    color: var(--color-text) !important;
  }
`; function at(t) { return class extends t { static get properties() { return { theme: { type: "string", deprecated: !0 }, libColor: { type: "string" } } } static get style() { return st } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "theme" === t ? (this.container.className = this.container.className.replace(/c-theme--\w*/g, ""), this.theme && this.container.classList.add("c-theme--" + this.theme)) : "lib-color" === t && this.setLibColor()) } setLibColor() { switch (this.container.style.color = "", this.container.className = this.container.className.replace(/c-theme-color--\w*/g, ""), this.libColor) { case "primary": case "secondary": case "success": case "positive": case "negative": case "error": case "white": case "text-light": case "text": this.libColor && this.container.classList.add("c-theme-color--" + this.libColor); break; default: this.container.style.color = this.libColor } } } } const nt = n`
  :host {
    --c-progress-color: var(--color-primary);
  }

  .c-progress {
    position: relative;
    display: block;
    height: 20px;
    width: 100%;
    background-color: #e6e6e6;
    font-weight: 600;
    border-radius: var(--c-progress-radius, 5px);
  }

  .c-progress__bar {
    position: absolute;
    height: 20px;
    max-width: 100%;
    transition-property: width, color;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    border-radius: var(--c-progress-radius, 5px);
    background-color: var(--c-progress-color);
  }

  :host([lib-size='xs']) .c-progress,
  :host([lib-size='xs']) .c-progress__bar {
    height: 2px;
  }

  :host([lib-size='sm']) .c-progress,
  :host([lib-size='sm']) .c-progress__bar {
    height: 1rem;
  }

  .c-progress__bar-txt {
    position: absolute;
    bottom: 0;
    transition-property: margin-left, transform, color;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    white-space: nowrap;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .c-progress__bar-txt-left {
    color: var(--color-text);
  }

  .c-progress__bar-txt-right {
    color: white;
    transform: translateX(-100%);
  }

  .c-theme-color--secondary {
    --c-progress-color: var(--color-secondary);
  }

  .c-theme-color--success {
    --c-progress-color: var(--color-success);
  }

  .c-theme-color--positive {
    --c-progress-color: var(--color-positive);
  }

  .c-theme-color--error {
    --c-progress-color: var(--color-error);
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-progress__bar-txt {
      line-height: 1.5;
    }
  }
`, rt = document.createElement("template"); rt.innerHTML = '\n<div class="c-progress js-container" part="ux-progress-bar">\n  <div class="c-progress__bar"\n    role="progressbar"\n    aria-hidden="true"\n    aria-valuemin="0"\n    aria-valuemax="100">\n  </div>\n</div>\n'; class ot extends (at(A)) { static get properties() { return { value: { type: "string" }, withTxt: { type: "string" }, a11yLabel: { type: "string" } } } template() { return rt } constructor() { super(), this.progressBar = this.$.querySelector(".c-progress__bar"), this.progressContainer = this.$.querySelector(".c-progress") } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "value": this._updateValue(); break; case "with-txt": this.setTxt(); break; case "a11y-label": this._setAccessibilityValueText() } } setTxt() { this.txtEl || (this.txtEl = document.createElement("div"), this.txtEl.classList.add("c-progress__bar-txt"), this.txtEl.setAttribute("part", "ux-progress-bar__txt"), this.container.appendChild(this.txtEl)), null === this.withTxt ? (this.txtEl.remove(), this.txtEl = null) : ("" === this.withTxt ? this.txtEl.innerHTML = `REMPLI À ${this.value} %` : this.txtEl.innerHTML = `${this.withTxt} ${this.value} %`, this.value > 100 ? this.txtEl.style.marginLeft = "100%" : this.txtEl.style.marginLeft = `${this.value}%`, this.setBooleanClass(this.value < 50, "c-progress__bar-txt-left", this.txtEl), this.setBooleanClass(this.value >= 50, "c-progress__bar-txt-right", this.txtEl)) } _setAccessibilityValueText() { this.setOrRemoveAttr("aria-valuetext", this.a11yLabel, this.progressBar) } _updateValue() { this.progressBar.style.width = this.value + "%", this.progressBar.setAttribute("aria-valuenow", this.value), this.setTxt() } } const lt = document.createElement("template"); lt.innerHTML = '\n<div class="c-progress-ring">\n  <p class="visually-hidden m-hidden-label"></p>\n  <svg class="c-progress-ring__svg" viewBox="0 0 100 100" width="70" height="70" aria-hidden="true">\n    <circle\n      class="c-progress-ring__circle"\n      fill="transparent"\n    />\n  </svg>\n  <svg class="c-progress-ring__svg c-progress-ring__svg--shadow" viewBox="0 0 100 100" width="70" height="70" aria-hidden="true">\n    <circle\n      class="c-progress-ring__shadow"\n      fill="transparent"\n      stroke-dashoffset="0"\n    />\n  </svg>\n  <div class="c-progress-ring--icon">\n    <slot name="icon"></slot>\n  </div>\n</div>\n<div class="c-progress-ring--content">\n  <slot name="content"></slot>\n</div>\n'; class ct extends (R(j(A))) { static get properties() { return { value: { type: "number" }, libStroke: { type: "number", defaultValue: 8 }, radius: { type: "number", defaultValue: 50 } } } template() { return lt } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), ["value", "lib-stroke", "radius"].includes(t) && this.radius && this._setProgress(this.value)) } _setProgress(t) { const e = 2 * this.radius, i = 70 * this.radius / 50; this.$.querySelector(".c-progress-ring").style.maxWidth = `${i}px`, [...this.$.querySelectorAll("svg")].forEach((t => { t.setAttribute("viewBox", `0 0 ${e} ${e}`), t.setAttribute("width", i), t.setAttribute("height", i) })); const s = this.radius - this.libStroke / 2, a = 2 * s * Math.PI, n = a - t / 100 * a, r = this.$.querySelectorAll("circle"); r[0].style.strokeDashoffset = n, r[0].setAttribute("stroke-dasharray", `${a} ${a}`), [...r].forEach((t => { t.setAttribute("stroke-width", this.libStroke), t.setAttribute("r", s), t.setAttribute("cx", this.radius), t.setAttribute("cy", this.radius) })) } } const dt = document.createElement("template"); dt.innerHTML = '\n  <div class="c-pulse-ring" role="alert">\n    <div class="c-pulse-ring__circle">\n      <div class="visually-hidden">\n        <slot></slot>\n        <p class="m-hidden-label"></p>\n      </div>\n    </div>\n  </div>\n'; class ut extends (R(j(A))) { template() { return dt } constructor() { super(), this._slots.default.deprecated = !0 } } const ht = /Edge/.test(navigator.userAgent); function pt(t) { return class extends t { constructor() { super(), this.saveList = {} } slotChange(t, e) { if ("SLOT" !== t.tagName) return void console.error("UxSlotChangeMixin: Cette fonction ne doit s'appliquer qu'à un slot"); if ("function" != typeof e) return void console.error("UxSlotChangeMixin: Merci de donner une fonction valide"); const i = this.getSlotName(t); this.saveList.hasOwnProperty(i) || (this.saveList[i] = { el: t, func: {} }), "function" == typeof this.saveList[i].func[e.name] ? console.error(`Cette fonction a déjà été ajouté au slotChange ${e.name}`) : (this.saveList[i].func[e.name] = this.wrapFunction = () => { t.dispatchEvent(new CustomEvent("bux-fine-slot-change", { bubbles: !1, cancelable: !0 })), t.dispatchEvent(new CustomEvent("ux-slot-change", { bubbles: !1, cancelable: !0 })), e && "function" == typeof e && e() }, ht ? this._mutationObserver(t, this.saveList[i].func[e.name]) : t.addEventListener("slotchange", this.saveList[i].func[e.name])) } getSlotName(t) { return t.getAttribute("name") ? t.getAttribute("name") : "default" } _removeSlotChangeEvent_NoEl_NoCB(t, e) { if (null === t && null === e) { for (const t in this.saveList) for (const e in this.saveList[t].func) this.saveList[t].el.removeEventListener("slotchange", this.saveList[t].func[e]); this.saveList = {} } } _removeSlotChangeEvent_El_NoCB(t, e) { if (null !== t && null === e) { if ("SLOT" !== t.tagName) return void console.error("UxSlotChangeMixin: Cette fonction ne doit s'appliquer qu'à un slot"); const e = this.getSlotName(t); if (void 0 === this.saveList[e]) return void console.error("UxSlotChangeMixin: Cette élément n'a pas de fonction attaché"); for (const i in this.saveList[e].func) t.removeEventListener("slotchange", this.saveList[e].func[i]); this.saveList[e].func = {} } } _removeSlotChangeEvent_El_CB(t, e) { if ("function" == typeof e && null !== t) { if ("SLOT" !== t.tagName) return void console.error("UxSlotChangeMixin: Cette fonction ne doit s'appliquer qu'à un slot"); const i = this.getSlotName(t); if (void 0 === this.saveList[i]) return void console.error("UxSlotChangeMixin: Cette élément n'a pas de fonction attaché"); if (this.saveList[i].el !== t) return void console.error("UxSlotChangeMixin: l'élément slot a été changé depuis sa sauvegarde"); for (const s in this.saveList[i].func) s === e.name && (t.removeEventListener("slotchange", this.saveList[i].func[e.name]), delete this.saveList[i].func[e.name]) } } removeSlotChangeEvent(t = null, e = null) { 0 !== Object.keys(this.saveList).length && (this._removeSlotChangeEvent_NoEl_NoCB(t, e), this._removeSlotChangeEvent_El_NoCB(t, e), this._removeSlotChangeEvent_El_CB(t, e)) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeSlotChangeEvent() } _mutationObserver(t, e) { new MutationObserver(e).observe(t, { attributes: !1, childList: !0, subtree: !0, characterData: !1, attributeOldValue: !1, characterDataOldValue: !1 }) } } } n`
  .c-toast__overlay {
    position: fixed;
    width: 100%;
    z-index: 1000;
  }

  :host([position='top']) .c-toast__overlay {
    top: 0;
  }

  :host([position='bottom']) .c-toast__overlay {
    bottom: 0;
  }
`; const bt = document.createElement("template"); bt.innerHTML = '\n<div class="c-toast__overlay">\n  <div class="c-toast js-container" role="status">\n    <slot></slot>\n  </div>\n<div>\n'; class mt extends (pt(A)) { static get properties() { return { position: { type: "string", defaultValue: "top" } } } template() { return bt } constructor() { super(), this.forceToastItemsNumber = this.forceToastItemsNumber.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.slotChange(this._slots.default, this.forceToastItemsNumber), this.resizeEv = debounce((() => { this.forceToastItemsNumber() }), 100), window.addEventListener("resize", this.resizeEv) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "position" === t && [...this.allToastItems].forEach((t => { this.setOrRemoveAttr("position", this.position, t) }))) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), window.removeEventListener("resize", this.resizeEv) } forceToastItemsNumber() { this.allToastItems.length > this.authorizedToastItemsNumber && this.allToastItems.splice(0, this.allToastItems.length - this.authorizedToastItemsNumber).forEach((t => { window.innerWidth > window.uxLib.breakpoints.tablet ? t.removeToastItem() : t.remove() })) } get allToastItems() { return [...this.querySelectorAll(":scope ux-toast-item")] } get authorizedToastItemsNumber() { return window.innerWidth > window.uxLib.breakpoints.tablet ? 3 : 1 } } const gt = document.createElement("template"); gt.innerHTML = '\n<div class="c-toast-item js-container">\n  <div class="c-toast-item__icon">\n    <slot name="icon"></slot>\n  </div>\n  <div class="c-toast-item__content">\n    <div class="c-toast-item__title">\n      <slot></slot>\n      <div class="c-toast-item__close">\n        <button class="c-toast-item__close-btn js-close-btn m-btn-no-style" title="fermer cette fenêtre de notification">\n          <span class="visually-hidden">fermer cette fenêtre de notification</span>\n          <ux-svg class="c-toast-item__close-btn-svg" lib-size="toastico"></ux-svg>\n        </button>\n      </div>\n    </div>\n    <div class="c-toast-item__subtitle">\n      <slot name="subtitle"></slot>\n    </div>\n  </div>\n</div>\n'; class vt extends (j(X(A))) { template() { return gt } constructor() { super(), this.removeToastItem = this.removeToastItem.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setOrRemoveAttr("position", this.closest("ux-toast").getAttribute("position"), this), setTimeout((() => { this.removeToastItem() }), 1e4), this.$.querySelector(".c-toast-item__close-btn").addEventListener("click", this.removeToastItem) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.$.querySelector(".c-toast-item__close-btn").removeEventListener("click", this.removeToastItem) } removeToastItem() { this.style.animation = "var(--toast-fadeout-animation)", setTimeout((() => { this.remove() }), this.animationDelay) } get animationDelay() { return window.innerWidth > window.uxLib.breakpoints.tablet ? 200 : 300 } } const ft = document.createElement("template"); ft.innerHTML = '\n<div class="c-btn-group js-container" part="ux-btn-group">\n  <slot></slot>\n</div>\n'; class xt extends (pt(T(A))) { static get properties() { return { vertical: { type: "boolean" } } } template() { return ft } constructor() { super(), this._wrapChildren = this._wrapChildren.bind(this), this.slotChange(this._slots.default, this._wrapChildren) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.vertical && (this.spaceV = this.spaceV || "xs") } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "vertical" === t && this.setOrRemoveAttr("space-v", this.vertical ? this.spaceV || "xs" : "", this)) } _wrapChildren() { const t = this.$.querySelector(".c-btn-group"), e = this.querySelectorAll("ux-btn"); this.setOrRemoveAttr("role", this.children.length > 2 ? "list" : "", t), e.forEach((t => { this.setOrRemoveAttr("role", this.children.length > 2 ? "listitem" : "", t) })) } } function yt(t) { return class extends t { static get properties() { return { libTitle: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-title" === t && (this._setLibTitle(), this._setAriaText())) } _setLibTitle() { const t = this.$.querySelector(".m-lib-link") || this.container; this.setOrRemoveAttr("title", this.libTitle, t) } _setAriaText() { const t = this.$.querySelector(".m-link-aria-text"); t && (t.innerHTML = this.libTitle ? this.libTitle : "") } } } function kt(t) { return class extends t { static get properties() { return { targetId: { type: "string" } } } constructor() { super(), this.triggerTarget = this.triggerTarget.bind(this), this.onWire = !1 } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.onWire || (this.container.addEventListener("click", this.triggerTarget), this.onWire = !0) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.container.removeEventListener("click", this.triggerTarget), this.onWire = !1 } triggerTarget(t) { const e = document.getElementById(this.targetId); this.targetId && e && (t.preventDefault(), e.open = !e.open, e.dispatchEvent(new Event("change"))) } } } function wt(t) { return class extends t { connectedCallback() { this.delegateFocusElement = this.$.querySelector(".js-delegate-focus"), super.connectedCallback && super.connectedCallback() } focus() { this.delegateFocusElement = this.$.querySelector(".js-delegate-focus"), this.delegateFocusElement && this.delegateFocusElement.focus() } } } function Ct(t) { return class extends t { static get properties() { return { a11yLabel: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "a11y-label" === t && this.setOrRemoveAttr("aria-label", this.a11yLabel, this.$.querySelector(".m-a11y-label"))) } } } class _t extends (wt(Q(X(kt(j(Ct(A))))))) { static get properties() { return { model: { type: "string", defaultValue: "primary" }, noStyle: { type: "boolean", deprecated: !0 }, disabled: { type: "boolean", deprecated: !0 } } } attributeChangedCallback(t, e, i) { e !== i && this.container && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "model" !== t && "no-style" !== t || this._setModel()) } _setModel() { this.setBooleanClass("nostyle" === this.model || this.noStyle, "m-btn-no-style"), this.setBooleanClass("nostyle" !== this.model && !this.noStyle, "c-btn") } } const Et = document.createElement("template"); Et.innerHTML = '<button class="c-btn js-container js-delegate-focus" part="ux-btn"><span class="visually-hidden m-link-aria-text"></span><slot></slot></button>'; class Lt extends (yt(_t)) { static get properties() { return { ...super.properties, type: { type: "string" } } } template() { return Et } constructor() { super(), this.handleClick = this.handleClick.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.addEventListener("click", this.handleClick) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("click", this.handleClick) } attributeChangedCallback(t, e, i) { e !== i && this.container && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "type" === t && this.setOrRemoveAttr("type", this.type)) } handleClick() { if ("submit" === this.type) { const t = this.closest("FORM"); t && t.dispatchEvent(new Event("submit")) } } } function At(t) { class e extends (yt(t)) { static get properties() { return { ...super.properties, libLink: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-link" === t && this._setLibLink()) } _setLibLink() { const t = this.$.querySelector(".m-lib-link"); t && ("" === this.libLink ? t.setAttribute("href", "") : this.setOrRemoveAttr("href", this.libLink, t)) } } return e } function St(t) { class e extends (At(t)) { static get properties() { return { ...super.properties, targetBlank: { type: "boolean" }, a11yLabel: { type: "string" } } } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "lib-link": this._setTargetBlank(); break; case "target-blank": this._setTargetBlank(), this._setLibTitle(), this._setA11yLabel(), this._setAriaText(); break; case "a11y-label": this._setA11yLabel() } } _setTargetBlank() { const t = this.$.querySelector(".m-lib-link"); t && (this.setOrRemoveAttr("rel", this.targetBlank && this.libLink ? "noopener noreferrer nofollow" : "", t), this.setOrRemoveAttr("target", this.targetBlank && this.libLink ? "_blank" : "", t)) } _setLibTitle() { const t = this.$.querySelector(".m-lib-link") || this.container, e = this.targetBlank && this.libLink ? `${this.libTitle}, (nouvelle fenêtre)` : this.libTitle; this.setOrRemoveAttr("title", this.libTitle ? e : "", t) } _setA11yLabel() { const t = this.$.querySelector(".m-a11y-label"), e = this.targetBlank && this.libLink ? `${this.a11yLabel}, (nouvelle fenêtre)` : this.a11yLabel; this.setOrRemoveAttr("aria-label", this.a11yLabel ? e : "", t) } _setAriaText() { const t = this.$.querySelector(".m-link-aria-text"); t && (this.libTitle ? this.targetBlank && this.libLink ? t.innerHTML = `${this.libTitle}, (nouvelle fenêtre)` : t.innerHTML = this.libTitle : t.innerHTML = "") } } return e } function Tt(t) { class e extends (St(t)) { static get properties() { return { ...super.properties, download: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-link" !== t && "download" !== t && "target-blank" !== t || this._setLibLink()) } _setLibLink() { super._setLibLink(); const t = this.$.querySelector(".m-lib-link"); t && (!this.libLink || this.targetBlank || "" !== this.download && !this.download ? t.removeAttribute("download") : t.setAttribute("download", this.download)) } } return e } const $t = n`
  .c-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
  }

  .c-link__icon {
    position: absolute;
    width: var(--c-link-width);
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .c-link:active + .c-link__icon {
    color: var(--color-primary-active);
  }

  :host([nofocus]:not([nofocus='false'])) .c-link:focus-within,
  :host([nofocus]:not([nofocus='false'])) .c-link:focus,
  :host([nofocus]:not([nofocus='false'])) .c-link:hover,
  :host([nofocus]:not([nofocus='false'])) .c-link:active {
    border: none;
    outline: none;
  }
`, It = n`
  .m-link {
    position: relative;
    padding-right: calc(var(--c-link-width) + var(--spacing-sm));
  }

  @media (min-width: ${window.uxLib.breakpoints.tablet}px) {
    .m-link__is-desktop {
      position: relative;
      padding-right: calc(var(--c-link-width) + var(--spacing-sm));
    }
  }

  @media (min-width: ${window.uxLib.breakpoints.mobile + 1}px) and (max-width: ${window.uxLib.breakpoints.tablet - 1}px) {
    .m-link__is-tablet {
      position: relative;
      padding-right: calc(var(--c-link-width) + var(--spacing-sm));
    }
  }

  @media (max-width: ${window.uxLib.breakpoints.mobile}px) {
    .m-link__is-mobile {
      position: relative;
      padding-right: calc(var(--c-link-width) + var(--spacing-sm));
    }
  }
`, Mt = document.createElement("template"); Mt.innerHTML = '<button class="c-link js-container js-delegate-focus m-btn-no-style" part="ux-link">\n  <span class="visually-hidden m-link-aria-text"></span>\n  <slot></slot>\n</button>\n<ux-svg class="c-link__icon" lib-size="sm" part="ux-link__icon"></ux-svg>'; const Bt = document.createElement("template"); Bt.innerHTML = '<a class="c-link js-container js-delegate-focus m-lib-link" part="ux-link">\n  <span class="visually-hidden m-link-aria-text"></span>\n  <slot></slot>\n</a>\n<ux-svg class="c-link__icon m-icon" lib-size="sm" part="ux-link__icon"></ux-svg>', window.uxLib || (window.uxLib = {}), window.uxLib.breakpoints || (window.uxLib.breakpoints = { smobile: 740, mobile: 740, tablet: 1090 }); class qt extends (wt(kt($(X(j(Tt(A))))))) { static get properties() { return { btn: { type: "boolean", defaultValue: !1 }, icon: { type: "string", defaultValue: "link" }, injectStyle: { type: "boolean", defaultValue: !0 }, arrow: { type: "boolean", defaultValue: !1, deprecated: !0 } } } template() { return this.btn ? Mt : Bt } constructor() { super(), this.iconEl = this.$.querySelector(".c-link__icon"), this.injectStyleEl = null } connectedCallback() { super.connectedCallback && super.connectedCallback(), window.setTimeout((() => { this.handleIcon(), this.fixMarginWithStackMixin() }), 0) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "icon": this.handleIcon(); break; case "btn": this._changeTemplate("btn") } } fixMarginWithStackMixin() { this.parentElement && this.parentElement.container && this.parentElement.hasAttribute("space-v") && (this.previousElementSibling.style.marginBottom = 0) } handleIcon() { this.parentElement && ("none" === this.icon ? this.removeIcon() : this.insertIcon()) } removeIcon() { this.iconEl && (this.iconEl.remove(), this.iconEl = null), this.injectStyleEl && (this.injectStyleEl.remove(), this.injectStyleEl = null), this.parentElement.container && this.parentElement.container.classList.remove("m-link"), "UX-CONTAINER" === this.parentElement.tagName && this.parentElement.classList.remove("b") } insertIcon() { if (null == this.iconEl) { const t = document.createElement("ux-svg"); t.classList.add(["c-link__icon", "m-icon"]), Object.assign(t, { icon: this.icon, libSize: "md", ariaHidden: !0 }), this.$.appendChild(t), this.iconEl = this.$.querySelector(".c-link__icon") } this.parentElement.container && (this.setLinkClass(), this.setLinkPart()), this.parentElement.$ && !this.injectStyleEl && !1 !== this.injectStyle && this._injectStyle(), "UX-CONTAINER" === this.parentElement.tagName && this.parentElement.classList.add("b") } _injectStyle() { this.injectStyleEl = document.createElement("style"), this.injectStyleEl.innerHTML = It, this.parentElement.$.insertBefore(this.injectStyleEl, this.parentElement.$.childNodes[1]) } setLinkClass() { this.hasAttribute("is-desktop") || this.hasAttribute("is-tablet") || this.hasAttribute("is-mobile") ? (this.setBooleanClass(this.hasAttribute("is-desktop"), "m-link__is-desktop", this.parentElement.container), this.setBooleanClass(this.hasAttribute("is-tablet"), "m-link__is-tablet", this.parentElement.container), this.setBooleanClass(this.hasAttribute("is-mobile"), "m-link__is-mobile", this.parentElement.container)) : this.parentElement.container.classList.add("m-link") } setLinkPart() { let t = ""; this.parentElement.container.hasAttribute("part") && (this.parentElement.container.getAttribute("part").includes("m-link") || (t = "m-link "), t += this.parentElement.container.getAttribute("part")), this.parentElement.container.setAttribute("part", `${t}`) } } const zt = n`
  .c-link-blank {
    display: inline-block;
  }

  :host([no-underline]:not([no-underline='false'])) a {
    text-decoration: none;
  }

  :host([model='primary']) .c-link-blank {
    color: var(--color-primary);
  }

  :host([model='secondary']) .c-link-blank {
    color: var(--color-secondary);
  }

  :host([model='primary']) .c-link-blank:hover,
  :host([model='primary']) .c-link-blank:focus {
    color: var(--color-primary-hover);
  }

  :host([model='secondary']) .c-link-blank:hover,
  :host([model='secondary']) .c-link-blank:focus {
    color: var(--color-secondary-hover);
  }

  .c-link-blank--icon {
    margin-left: 5px;
  }
`, Nt = document.createElement("template"); Nt.innerHTML = '\n  <a class="c-link-blank js-container m-lib-link m-a11y-label" part="ux-link-blank">\n    <slot></slot><ux-svg class="c-link-blank--icon" lib-size="sm"></ux-svg>\n  </a>'; class Ht extends (at($(j(St(A))))) { static get properties() { return { targetBlank: { type: "boolean", defaultValue: !0 }, model: { type: "string", defaultValue: "primary" }, libColor: { type: "string", deprecated: !0 } } } template() { return Nt } } const jt = document.createElement("template"); jt.innerHTML = '<a class="c-btn c-btn-lib-link js-container js-delegate-focus m-lib-link" href><span class="visually-hidden m-link-aria-text"></span><slot></slot></a>'; class Rt extends (Tt(_t)) { template() { return jt } constructor() { super(), this.handleClick = t => { t.preventDefault() }, this.container.addEventListener("click", this.handleClick) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-link" === t && (this.libLink ? this.container.removeEventListener("click", this.handleClick) : this.container.addEventListener("click", this.handleClick))) } } function Ot(t) { return class extends t { static get properties() { return { active: { type: "boolean" } } } attributeChangedCallback(t, e, i) { e !== i && this.container && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "active" === t && this.setBooleanClass(this.active, "is-active", this.$.querySelector(".m-is-active"))) } } } function Pt(t) { return class extends t { static get properties() { return { inverted: { type: "boolean" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "inverted" === t && this.setBooleanClass(this.inverted, "is-inverted", this.$.querySelector(".m-inverted"))) } } } const Dt = document.createElement("template"); Dt.innerHTML = '\n<a class="c-shortlink js-container js-delegate-focus m-lib-link" href="" part="ux-shortlink">\n  <ux-svg lib-size="lg"></ux-svg>\n  <span class="c-shortlink__label" part="ux-shortlink__label">\n    <slot></slot>\n  </span>\n</a>\n'; const Vt = document.createElement("template"); Vt.innerHTML = '\n<button class="c-shortlink js-container m-btn-no-style js-delegate-focus" part="ux-shortlink">\n  <ux-svg lib-size="lg"></ux-svg>\n  <span class="c-shortlink__label" part="ux-shortlink__label">\n    <slot></slot>\n  </span>\n</button>'; class Ut extends (wt(kt(X(Pt($(Tt(Ot(A)))))))) { static get properties() { return { btn: { type: "boolean" } } } template() { return this.btn ? Vt : Dt } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "btn" === t && this._changeTemplate("btn")) } } const Ft = n`
  .c-switch-btn--on.active,
  .c-switch-btn--off.active {
    border: 2px solid lawngreen;
  }
`, Wt = document.createElement("template"); Wt.innerHTML = '\n<button role="switch" class="c-btn c-switch-btn js-container js-delegate-focus" part="ux-switch-btn">\n  <span class="c-switch-btn--on">\n    <slot name="on"></slot>\n  </span>\n  <span class="c-switch-btn--off">\n    <slot name="off"></slot>\n  </span>\n</button>'; class Kt extends (wt(yt(Ct(A)))) { static get properties() { return { onlabel: { type: "string" }, offlabel: { type: "string" }, onLabel: { type: "string", deprecated: "true" }, offLabel: { type: "string", deprecated: "true" }, checked: { type: "boolean" }, disabled: { type: "boolean", deprecated: "true" } } } template() { return Wt } constructor() { super(), this.OnSpan = this.$.querySelector(".c-switch-btn--on"), this.OffSpan = this.$.querySelector(".c-switch-btn--off"), this._handleClick = this._handleClick.bind(this), this._setChecked = this._setChecked.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.OnSlot = this.querySelector("[slot=on]"), this.OffSlot = this.querySelector("[slot=off]"), this.addEventListener("click", this._handleClick), this._setChecked(this.checked) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "checked": this._setChecked(this.checked); break; case "onlabel": case "on-label": this._setLabel(i, this.OnSlot, "on"), this._setA11yLabel(); break; case "offlabel": case "off-label": this._setLabel(i, this.OffSlot, "off"), this._setA11yLabel(); break; case "disabled": this.setOrRemoveAttr("aria-disabled", this.disabled); break; case "a11y-label": this._setA11yLabel() } } _setLabel(t, e, i) { if (t) if (e) e.innerHTML = t; else { const e = document.createElement("span"); e.innerHTML = t, e.setAttribute("slot", i), this.appendChild(e) } } _setChecked(t) { this.setOrRemoveAttr("aria-checked", t, this.container, !0), this.checked = t, this.setBooleanClass(t, "active", this.OnSpan), this.setBooleanClass(!t, "active", this.OffSpan), this._setA11yLabel(), this.dispatchEvent(new Event("change")) } _handleClick() { this.disabled || this._setChecked(!this.checked) } _setA11yLabel() { const t = this.onlabel || this.onLabel, e = this.offlabel || this.offLabel; this.checked && null !== t ? this.container.setAttribute("aria-label", this.a11yLabel ? this.a11yLabel + " " + t : t) : this.checked || null === e || this.container.setAttribute("aria-label", this.a11yLabel ? this.a11yLabel + " " + e : e) } } const Gt = n`
  /**
 * Justify content
 */

  .m-flex-justify-content--start,
  .m-flex-justify-content--flex-start {
    justify-content: flex-start !important;
  }

  .m-flex-justify-content--end,
  .m-flex-justify-content--flex-end {
    justify-content: flex-end !important;
  }

  .m-flex-justify-content--center {
    justify-content: center !important;
  }

  .m-flex-justify-content--left {
    justify-content: left !important;
  }

  .m-flex-justify-content--right {
    justify-content: right !important;
  }

  .m-flex-justify-content--normal {
    justify-content: normal !important;
  }

  .m-flex-justify-content--space-between {
    justify-content: space-between !important;
  }

  .m-flex-justify-content--space-around {
    justify-content: space-around !important;
  }

  .m-flex-justify-content--space-evenly {
    justify-content: space-evenly !important;
  }

  .m-flex-justify-content--stretch {
    justify-content: stretch !important;
  }

  /**
 * Align items
 */

  .m-flex-align-items--start,
  .m-flex-align-items--flex-start {
    align-items: flex-start !important;
  }

  .m-flex-align-items--end,
  .m-flex-align-items--flex-end {
    align-items: flex-end !important;
  }

  .m-flex-align-items--center {
    align-items: center !important;
  }

  .m-flex-align-items--normal {
    align-items: normal !important;
  }

  .m-flex-align-items--stretch {
    align-items: stretch !important;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    /**
  * Justify content
  */

    .m-flex-justify-content--start-m,
    .m-flex-justify-content--flex-start-m {
      justify-content: flex-start !important;
    }

    .m-flex-justify-content--end-m,
    .m-flex-justify-content--flex-end-m {
      justify-content: flex-end !important;
    }

    .m-flex-justify-content--center-m {
      justify-content: center !important;
    }

    .m-flex-justify-content--left-m {
      justify-content: left !important;
    }

    .m-flex-justify-content--right-m {
      justify-content: right !important;
    }

    .m-flex-justify-content--normal-m {
      justify-content: normal !important;
    }

    .m-flex-justify-content--space-between-m {
      justify-content: space-between !important;
    }

    .m-flex-justify-content--space-around-m {
      justify-content: space-around !important;
    }

    .m-flex-justify-content--space-evenly-m {
      justify-content: space-evenly !important;
    }

    .m-flex-justify-content--stretch-m {
      justify-content: stretch !important;
    }

    /**
  * Align items
  */

    .m-flex-align-items--start-m,
    .m-flex-align-items--flex-start-m {
      align-items: flex-start !important;
    }

    .m-flex-align-items--end-m,
    .m-flex-align-items--flex-end-m {
      align-items: flex-end !important;
    }

    .m-flex-align-items--center-m {
      align-items: center !important;
    }

    .m-flex-align-items--normal-m {
      align-items: normal !important;
    }

    .m-flex-align-items--stretch-m {
      align-items: stretch !important;
    }
  }
`; function Xt(t) { return class extends t { static get properties() { return { justifyContent: { type: "string" }, alignItems: { type: "string" }, justifyContentM: { type: "string" }, alignItemsM: { type: "string" } } } static get style() { return Gt } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), (t.startsWith("justify-content") || t.startsWith("align-items")) && this._handleFlexAlignmentMixinProperties(t, e, i)) } flexAlignmentMixinTarget() { return this.container } _handleFlexAlignmentMixinProperties(t, e, i) { const s = this.flexAlignmentMixinTarget(), a = t.replace("-m", ""), n = t.endsWith("-m") ? "-m" : ""; s.classList.remove(`m-flex-${a}--${e}${n}`), s.classList.add(`m-flex-${a}--${i}${n}`) } } } const Yt = n`
  .c-widgetlink {
    box-sizing: border-box;
  }

  .c-widgetlink a {
    color: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .c-widgetlink a svg {
    display: flex;
    width: var(--icon-size-sm);
    height: var(--icon-size-sm);
  }
`, Jt = document.createElement("template"); Jt.innerHTML = '\n<div class="c-widgetlink js-container" part="ux-widgetlink">\n  <a class="m-lib-link m-a11y-label" href="" part="ux-widgetlink__link">\n    <span class="c-widgetlink-content"><slot></slot></span>\n    <span class="m-link-aria-text visually-hidden"></span>\n    <ux-svg icon="arrow" lib-size="sm" class="c-widgetlink__icon m-icon"></ux-svg>\n  </a>\n</div>\n'; class Zt extends ($(j(q(Xt(Q(Tt(A))))))) { template() { return Jt } } const Qt = n`
  .c-gelule {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  [name='left']::slotted(*) {
    margin-right: var(--spacing-xs);
  }

  [name='right']::slotted(*) {
    margin-left: var(--spacing-xs);
  }
`, te = n`
  .m-tag {
    margin: 0;
    padding: 0;
  }
`; function ee(t) { return class extends t { static get properties() { return { tag: { type: "string" } } } static get style() { return te } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "tag" === t && this.setTag()) } setTag() { const t = this.$.querySelector(".m-tag"); if (!t || t.tagName.toLowerCase() === this.tag) return; const e = t.parentNode, i = document.createElement(this.tag); for (let e = 0, s = t.attributes.length; e < s; e++) { const s = t.attributes[e]; i.setAttribute(s.nodeName, s.nodeValue) } for (; t.childNodes.length > 0;)i.appendChild(t.childNodes[0]); e.replaceChild(i, t), this.container = this.$.querySelector(".js-container"), this.container || (this.container = this) } } } const ie = document.createElement("template"); ie.innerHTML = '\n  <div class="js-container c-chip m-tag">\n    <slot name="left"></slot>\n    <slot></slot>\n    <slot name="right"></slot>\n    <span class="visually-hidden">;</span>\n  </div>'; class se extends (ee(j(q(A)))) { template() { return ie } } const ae = document.createElement("template"); ae.innerHTML = '\n  <div class="c-chip js-container">\n    <div class="c-chip--wrapper">\n      <span class="c-chip--img">\n        <slot name="left"></slot>\n      </span>\n      <p class="c-chip--label" id="chip-label">\n        <slot></slot>\n      </p>\n    </div>\n    <button id="chip-btn" class="c-chip--btn m-btn-no-style" title="supprimer" aria-labelledby="chip-btn chip-label">\n      <ux-svg icon="croix-fermer" lib-size="chipico"></ux-svg>\n      <span class="visually-hidden c-chip--btn--visually-hidden-text">supprimer</span>\n    </button>\n  </div>'; const ne = document.createElement("template"); ne.innerHTML = '\n  <div class="c-chip js-container">\n    <a class="c-chip--wrapper m-lib-link">\n      <span class="c-chip--img">\n        <slot name="left"></slot>\n      </span>\n      <p class="c-chip--label" id="chip-label">\n        <slot></slot>\n      </p>\n    </a>\n    <button id="chip-btn" class="c-chip--btn m-btn-no-style" title="supprimer" aria-labelledby="chip-btn chip-label">\n      <ux-svg icon="croix-fermer" lib-size="chipico"></ux-svg>\n      <span class="visually-hidden c-chip--btn--visually-hidden-text">supprimer</span>\n    </button>\n  </div>'; class re extends (j(At(X(A)))) { static get properties() { return { model: { type: "string", defaultValue: "filled" }, btnTitle: { type: "string" } } } constructor() { super(), this.btn = this.$.querySelector(".c-chip--btn"), this.delete = this.delete.bind(this) } template() { return this.libLink ? ne : ae } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-link" === t ? (this._changeTemplate(t), this._setLibLink()) : "btn-title" === t && (this.setOrRemoveAttr("title", this.btnTitle || "supprimer", this.btn), this.$.querySelector(".c-chip--btn--visually-hidden-text").innerHTML = this.btnTitle || "supprimer")) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.btn.addEventListener("click", this.delete) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.btn.removeEventListener("click", this.delete) } delete() { this.dispatchEvent(new Event("change")), this.parentElement.removeChild(this) } } const oe = n`
  :host {
    --container-height: fit-content;
    /* firefox */
    /* stylelint-disable-next-line declaration-block-no-duplicate-custom-properties */
    --container-height: -moz-fit-content;
  }
`; function le(t) { return class extends t { static get style() { return oe } static get properties() { return { expanded: { type: "boolean" } } } constructor() { super(), this.trigger || (this.trigger = this.$.querySelector(".js-trigger")), this.content || (this.content = this.$.querySelector(".js-content")), this.handleClick = this.handleClick.bind(this) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "expanded" === t && (this.setOrRemoveAttr("aria-expanded", this.expanded, this.trigger, !0), this.setOrRemoveAttr("aria-hidden", !this.expanded, this.content, !0))) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.trigger.addEventListener("click", this.handleClick) } handleClick() { this.disabled || (this.expanded = !this.expanded) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.trigger.removeEventListener("click", this.handleClick) } } } const ce = document.createElement("template"); ce.innerHTML = '\n<div class="c-accordion js-container">\n  <div role="heading" part="ux-accordion-item__heading">\n    <button class="c-accordion__trigger js-trigger m-btn-no-style" aria-expanded="false">\n      <slot name="accordion-header"></slot>\n      <ux-svg lib-size="sm" class="c-accordion__icon"></ux-svg>\n    </button>\n  </div>\n  <section class="c-accordion__content js-content" aria-hidden="true">\n    <slot></slot>\n  </section>\n</div>\n'; let de = 0; class ue extends ($(X(le(A)))) { static get properties() { return { a11yLevel: { type: "number" } } } template() { return ce } constructor() { super(), this.iconEl = this.$.querySelector(".c-accordion__icon"), this.headingEl = this.$.querySelector('[role="heading"]') } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "expanded" === t && this.iconEl && this.setBooleanClass(this.expanded, "c-accordion__icon--rotate", this.iconEl)) } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = de; de++, this.trigger.id = `ID-BTN-ITEM-${t}`, this.trigger.setAttribute("aria-controls", `ID-ACC-ITEM-${t}`), this.content.id = `ID-ACC-ITEM-${t}`, this.content.setAttribute("aria-labelledby", `ID-BTN-ITEM-${t}`), this._setHeadingAriaLevel() } _setHeadingAriaLevel() { this.headingEl.setAttribute("aria-level", this.a11yLevel ? this.a11yLevel : "3") } } const he = document.createElement("template"); he.innerHTML = '<div class="c-card-body js-container"><slot></slot></div>'; class pe extends (T(A)) { template() { return he } } const be = document.createElement("template"); be.innerHTML = '<div class="c-card-footer js-container"><slot></slot></div>'; class me extends (T(A)) { template() { return be } } const ge = document.createElement("template"); ge.innerHTML = '<div class="c-card-header js-container"><slot></slot></div>'; class ve extends (T(A)) { template() { return ge } } const fe = n`
  .m-focusable:focus-within,
  .m-focusable:focus,
  .m-focusable:hover {
    border: var(--m-border-focus);
  }

  .m-focusable:active {
    border: var(--m-border-active);
  }
`; function xe(t) { return class extends t { static get properties() { return { focusable: { type: "boolean" } } } static get style() { return fe } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "focusable" === t && this.setBooleanClass(this.focusable, "m-focusable")) } } } const ye = document.createElement("template"); ye.innerHTML = '<div class="c-card js-container" part="ux-card"><slot></slot></div>'; class ke extends (xe(Q(T(A)))) { template() { return ye } } const we = n`
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :host {
    --collapse-triangle-width: 16px;
  }

  .c-collapse {
    display: none;
    position: relative;
    visibility: hidden;
    opacity: 0;
    width: initial;
    max-width: 100%;
    background-color: var(--color-container);
    border-radius: var(--border-radius-xs);
    margin-top: var(--spacing-md);
    padding: var(--spacing-sm);
  }

  :host([open]:not([open='false'])) .c-collapse {
    display: block;
    visibility: visible;
    opacity: 1;
    animation: fade-in-up 0.6s;
  }

  /* L'intérieur du triangle */
  .c-collapse::before {
    content: '';
    position: absolute;
    top: calc(1px - var(--collapse-triangle-width));
    background-color: transparent;
    width: 0;
    height: 0;
    border-left: var(--collapse-triangle-width) solid transparent;
    border-right: var(--collapse-triangle-width) solid transparent;

    /* La couleur du triangle peut être supplantée par la couleur apportée par la background-mixin */
    border-bottom: var(--collapse-triangle-width) solid var(--m-background-color);
    left: calc(50% - calc(var(--collapse-triangle-width) * 3 / 2));
    z-index: 1;
  }

  :host([arrow-position]:not([arrow-position='false'])) .c-collapse::before {
    left: calc(var(--collapse-arrow-position) - var(--collapse-triangle-width));
  }

  /* La bordure du triangle */
  .c-collapse::after {
    content: '';
    position: absolute;
    top: calc(0px - var(--collapse-triangle-width));
    background-color: transparent;
    width: 0;
    height: 0;
    border-left: calc(var(--collapse-triangle-width) + 1px) solid transparent;
    border-right: calc(var(--collapse-triangle-width) + 1px) solid transparent;
    border-bottom: var(--collapse-triangle-width) solid var(--color-container-border);
    left: calc(50% - calc(var(--collapse-triangle-width) * 3 / 2));
    z-index: 0;
  }

  :host([arrow-position]:not([arrow-position='false'])) .c-collapse::after {
    left: calc(var(--collapse-arrow-position) - var(--collapse-triangle-width) - 1px);
  }
`, Ce = document.createElement("template"); Ce.innerHTML = '\n  <div class="c-collapse js-container" aria-hidden="true">\n      <slot></slot>\n  </div>'; class _e extends (q(A)) { static get properties() { return { open: { type: "boolean", defaultValue: !1 }, arrowPosition: { type: "string" } } } template() { return Ce } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "open" === t ? this.setOrRemoveAttr("aria-hidden", !this.open, this.container, !0) : "arrow-position" === t && this.style.setProperty("--collapse-arrow-position", this.arrowPosition)) } } const Ee = n`
  .m-border-top {
    border-top: solid 1px var(--color-border);
  }

  .m-border-right {
    border-right: solid 1px var(--color-border);
  }

  .m-border-bottom {
    border-bottom: solid 1px var(--color-border);
  }

  .m-border-left {
    border-left: solid 1px var(--color-border);
  }

  .m-border-none {
    border: none !important;
  }

  .m-border-all {
    border: solid 1px var(--color-border);
  }
`; function Le(t) { return class extends t { static get properties() { return { borderTop: { type: "boolean" }, borderRight: { type: "boolean" }, borderBottom: { type: "boolean" }, borderLeft: { type: "boolean" }, borderNone: { type: "boolean" }, borderAll: { type: "boolean" }, borderColor: { type: "string" } } } static get style() { return Ee } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "border-top": case "border-right": case "border-bottom": case "border-left": case "border-none": case "border-all": this.setBooleanClass(this.hasAttribute(t) && ("true" === i || i === t || !i), `m-${t}`); break; case "border-color": this.container.style.borderColor = this.borderColor ? this.borderColor : "" } } } } function Ae(t) { return class extends t { static get properties() { return { radiusTopLeft: { type: "boolean" }, radiusTopRight: { type: "boolean" }, radiusBottomLeft: { type: "boolean" }, radiusBottomRight: { type: "boolean" }, radiusNone: { type: "boolean" }, radius: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "radius" !== t && "radius-none" !== t && "radius-top-left" !== t && "radius-top-right" !== t && "radius-bottom-left" !== t && "radius-bottom-right" !== t || this.setRadius(t)) } setRadius() { this.radiusNone ? this.container.style.setProperty("border-radius", 0) : this.radius ? !this.radius || this.radiusTopLeft || this.radiusTopRight || this.radiusBottomLeft || this.radiusBottomRight ? (this.container.style.setProperty("border-radius", 0), this.radiusTopLeft && this.container.style.setProperty("border-top-left-radius", `var(--border-radius-${this.radius})`), this.radiusTopRight && this.container.style.setProperty("border-top-right-radius", `var(--border-radius-${this.radius})`), this.radiusBottomLeft && this.container.style.setProperty("border-bottom-left-radius", `var(--border-radius-${this.radius})`), this.radiusBottomRight && this.container.style.setProperty("border-bottom-right-radius", `var(--border-radius-${this.radius})`)) : this.container.style.setProperty("border-radius", `var(--border-radius-${this.radius})`) : this.container.style.removeProperty("border-radius") } } } const Se = document.createElement("template"); Se.innerHTML = '<div class="js-container c-container" part="ux-container"><slot></slot></div>'; class Te extends (Ae(Le(ee(q(xe(T(tt(A)))))))) { template() { return Se } } class $e extends (j(X(A))) { static get properties() { return { open: { type: "boolean", defaultValue: !1 }, openedLabel: { type: "string" }, closedLabel: { type: "string" } } } constructor() { super(), this.button = this.$.querySelector("button"), this._handleClick = this._handleClick.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = this.$.querySelector('slot[name="content"]').assignedElements()[0], e = document.createElement("p"); e.classList.add("visually-hidden"), e.textContent = "Début du contenu développé", e.setAttribute("tabindex", "-1"), e.setAttribute("slot", "content"), this.insertBefore(e, t), this._setOpen(this.open), this.button.addEventListener("click", this._handleClick) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.button.removeEventListener("click", this._handleClick) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "open" === t && this._setOpen(this.open)) } _setLabel(t) { this.button.innerHTML = t } _setOpen(t) { this.setOrRemoveAttr("open", t, this._slots.content, !0), this.setOrRemoveAttr("aria-hidden", !t, this._slots.content, !0), this.setOrRemoveAttr("aria-expanded", t, this.button, !0), t && this.openedLabel ? this._setLabel(this.openedLabel) : !t && this.closedLabel && this._setLabel(this.closedLabel) } _handleClick() { this.open = !this.open, this.$.querySelector('slot[name="content"]').assignedElements()[0].focus() } } const Ie = n`
  @keyframes fade-in-right {
    0% {
      opacity: 0;
      transform: translateX(40px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .c-dropdown {
    display: inline;
    position: relative;
    cursor: pointer;
  }

  slot[name='content'] {
    position: absolute;
    display: block;
    visibility: hidden;
    width: max-content;
    max-width: 100vh;
    opacity: 0;
    background-color: #fff;
    border-radius: 3px;
    border: solid 1px var(--color-text);
    padding: 3px;
  }

  slot[name='content'][open='true'],
  slot[name='content'][open='open'] {
    animation: fade-in-right 1s;
    visibility: visible;
    opacity: 1;
    z-index: 1000;
  }
`, Me = document.createElement("template"); Me.innerHTML = '\n  <span class="c-dropdown js-container">\n    <button class="c-dropdown--trigger m-btn-no-style" aria-controls="content-1">\n      <slot></slot>\n      <span class="visually-hidden">Cliquer ici pour afficher le contenu</span>\n    </button>\n    <slot id="content-1" name="content"></slot>\n  </span>'; class Be extends $e { template() { return Me } } const qe = document.createElement("template"); qe.innerHTML = '\n<div class="js-container c-inbox-msg" part="ux-inbox-msg">\n  <div class="c-inbox-msg--state">\n    <slot name="state-icon">\n      <p class="visually-hidden">Statut :</p>\n      <ux-svg class="c-inbox-msg--state-icon" lib-size="lg"></ux-svg>\n      <p class="c-input-msg--state-vocal visually-hidden">Message non lu</p>\n    </slot>\n  </div>\n  <div class="c-inbox-msg--content">\n    <div class="c-inbox-msg--content-date">\n      <p class="visually-hidden">Date de réception</p>\n      <slot name="date"></slot>\n    </div>\n    <div class="c-inbox-msg--content-more">\n      <p class="visually-hidden">Objet :</p>\n      <slot name="subject"></slot>\n      <p class="visually-hidden">Emetteur :</p>\n      <slot name="from"></slot>\n    </div>\n  </div>\n  <div class="c-inbox-msg--icons">\n    <div class="c-inbox-msg--icons__file">\n      <ux-svg lib-size="sm"></ux-svg>\n      <p class="visually-hidden">Message avec pièce jointe</p>\n    </div>\n    <div class="c-inbox-msg--icons__expire">\n      <ux-svg lib-size="sm"></ux-svg>\n      <p class="visually-hidden">Message bientôt supprimé</p>\n    </div>\n  </div>\n  <slot></slot>\n</div>'; class ze extends (xe(j(A))) { static get properties() { return { state: { type: "string", defaultValue: "unread" }, attachment: { type: "boolean" }, expire: { type: "boolean" } } } template() { return qe } constructor() { super(), this.attachmentIconEl = this.$.querySelector(".c-inbox-msg--icons__file"), this.expireIconEl = this.$.querySelector(".c-inbox-msg--icons__expire"), this.stateIcons = { unread: "enveloppe", read: "enveloppe-ouverte", replied: "enveloppe-fleche", color: "var(--color-primary)" }, this.attachmentIcon = "trombone", this.expireIcon = "historique", this.stateVocal = { unread: "Message non lu", read: "Message lu", replied: "Message répondu", soonDeleted: "Message bientôt supprimé, " } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.attachmentIconEl.querySelector("ux-svg").icon = this.attachmentIcon, this.expireIconEl.querySelector("ux-svg").icon = this.expireIcon, this._setAttachement(), this._setExpire() } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "state": this._setState(); break; case "attachment": this._setAttachement(); break; case "expire": this._setExpire() } } _setState() { switch (this.state) { case "unread": case "read": case "replied": const t = this.$.querySelector(".c-inbox-msg--state-icon"), e = this.$.querySelector(".c-input-msg--state-vocal"); t.icon = this.stateIcons[this.state], e.innerHTML = this.stateVocal[this.state], t.libColor = this.stateIcons.color } } _setAttachement() { const t = this.$.querySelector(".c-inbox-msg--icons"); this.attachment ? t.insertBefore(this.attachmentIconEl, t.firstChild) : t.removeChild(this.attachmentIconEl) } _setExpire() { const t = this.$.querySelector(".c-inbox-msg--icons"), e = this._slots.default.assignedElements()[0]; e && "UX-LINK" === e.tagName && (this.expire ? (t.appendChild(this.expireIconEl), e.getAttribute("lib-title").startsWith(this.stateVocal.soonDeleted) || e.setAttribute("lib-title", `${this.stateVocal.soonDeleted}${e.getAttribute("lib-title")}`)) : (t.removeChild(this.expireIconEl), e.getAttribute("lib-title").startsWith(this.stateVocal.soonDeleted) && e.setAttribute("lib-title", e.getAttribute("lib-title").substring(this.stateVocal.soonDeleted.length)))) } } const Ne = n`
  .c-show-more {
    display: inline;
    position: relative;
    cursor: pointer;
  }

  slot[name='content'] {
    display: block;
  }

  slot[name='content']:not([open='true']) {
    display: none;
  }
`, He = document.createElement("template"); He.innerHTML = '\n  <div class="c-show-more js-container" part="ux-show-more">\n    <slot id="content-1" name="content"></slot>\n    <div class="wrap">    \n      <button class="c-show-more--trigger m-btn-no-style m-align-text" aria-controls="content-1">\n        <slot name="pre-icon"></slot>\n        <span class="c-show-more--label">\n          <slot></slot>\n        </span>\n        <slot name="post-icon"></slot>\n      </button>\n    </div>\n  </div>'; class je extends $e { template() { return He } _setLabel(t) { this.$.querySelector(".c-show-more--label").textContent = t } } const Re = document.createElement("template"); Re.innerHTML = '\n<div class="c-summary-item js-container" part="ux-summary-item">\n  <div class="c-summary-item__icon m-icon">\n    <slot name="icon"></slot>\n  </div>\n  <div class="c-summary-item__content--wrapper" part="ux-summary-item__wrap">\n    <slot name="title"></slot>\n    <div class="c-summary-item__content">\n      <slot name="content"></slot>\n    </div>\n  </div>\n</div>\n'; class Oe extends (j(A)) { template() { return Re } } function Pe(t) { return class extends t { connectedCallback() { super.connectedCallback && super.connectedCallback(), this._setListRole() } _setListRole() { let t = this.$.querySelectorAll(".m-list"); 0 === t.length && (t = [this.container]), t.forEach((t => { t.setAttribute("role", "list"), Array.from(t.children).forEach((t => { if ("SLOT" === t.tagName) { const e = t.assignedNodes(); Array.from(e).forEach((t => { 1 === t.nodeType && t.setAttribute("role", "listitem") })) } else t.setAttribute("role", "listitem") })) })) } } } const De = document.createElement("template"); De.innerHTML = '\n<div class="c-summary js-container">\n    <div class="c-summary__wrapper m-list">\n      <slot></slot>\n    </div>\n</div>\n'; class Ve extends (Pe(A)) { template() { return De } } const Ue = document.createElement("template"); Ue.innerHTML = "<slot></slot>"; class Fe extends A { static get properties() { return { selected: { type: "boolean" } } } constructor() { super(), this.click = this.click.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this) } template() { return Ue } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.addEventListener("click", this.click), this.addEventListener("keydown", this.handleKeyDown), this.setAttribute("role", "tab"), this.setAttribute("slot", "tab"), this.setSelected() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("click", this.click), this.removeEventListener("keydown", this.handleKeyDown) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "selected" === t && this.setSelected()) } setSelected() { this.setOrRemoveAttr("aria-selected", this.selected, this, !0), this.tabIndex = this.selected ? 0 : -1 } click() { ["uxTabBtnClick", "ux-tab-btn-click"].forEach((t => { this.dispatchEvent(new CustomEvent(t, { detail: { tab: this }, bubbles: !0 })) })) } handleKeyDown(t) { 13 !== t.keyCode && 32 !== t.keyCode || this.click() } } const We = document.createElement("template"); We.innerHTML = '\n<div class="js-container">\n  <p class="visually-hidden">Début du contenu de l\'onglet</p> \n    <slot></slot>\n  <p class="visually-hidden">Fin du contenu de l\'onglet</p> \n</div>\n'; class Ke extends (T(j(A))) { template() { return We } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("role", "tabpanel"), this.setAttribute("slot", "panel"), this.tabIndex = 0 } } const Ge = document.createElement("template"); Ge.innerHTML = '\n<div class="c-tabs">\n    <div class="c-tabs__list" role="tablist">\n        <slot name="tab"></slot>\n        <div class="c-tabs-elastic" aria-hidden="true"></div>\n    </div>\n    <div class="c-tabs__content">\n        <slot name="panel"></slot>\n    </div>\n</div>\n'; let Xe = 0; class Ye extends (pt(T(A))) { static get properties() { return { tabActive: { type: "number" }, a11yTablistLabel: { type: "string" } } } template() { return Ge } constructor() { super(), this.initIds(), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this.elasticEl = this.$.querySelector(".c-tabs-elastic"), this.resizeEv = V()((() => { this.resize() }), 100), this.initIds = this.initIds.bind(this), window.addEventListener("resize", this.resizeEv) } connectedCallback() { super.connectedCallback() && super.connectedCallback(), this.initIds(), this.slotChange(this._slots.tab, this.initIds), this._slots.tab.addEventListener("keydown", this._onKeyDown), this._slots.tab.addEventListener("uxTabBtnClick", this._onClick), this.hasAttribute("tab-active") || (this.tabActive = 0), this.setTabActive(), setTimeout((() => { if (this.allTabs && this.allTabs.length > 0) { const t = 100 / this.allTabs.length; this.elasticEl.style.width = t + "%" } }), 0) } disconnectedCallback() { super.disconnectedCallback() && super.disconnectedCallback(), window.removeEventListener("resize", this.resizeEv), this._slots.tab.removeEventListener("keydown", this._onKeyDown), this._slots.tab.removeEventListener("uxTabBtnClick", this._onClick) } attributeChangedCallback(t, e, i) { if (e !== i) if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "tab-active" !== t || !this.tabActive && 0 !== this.tabActive) { if ("a11y-tablist-label" === t) { const t = this.$.querySelector(".c-tabs__list"); this.setOrRemoveAttr("aria-label", this.a11yTablistLabel ? this.a11yTablistLabel : "", t) } } else this.setTabActive() } setTabActive() { if (this.isInitTabs) { const t = this.allTabs[this.tabActive]; t && (this.formItSelf || (this._linkPanels && this._linkPanels(), this._activeTab(t)), this.formItSelf = !1) } } initIds() { this.initTabsId(), this.initPanelsId(), this.isInitTabs = !0 } initTabsId() { this.allTabs.forEach((t => { t.id || (t.id = `${this.getIdPart()}-btn-${Xe}`, Xe++) })) } initPanelsId() { this.allPanels.forEach((t => { t.id || (t.id = `${this.getIdPart()}-panel-${Xe}`, Xe++) })) } getIdPart() { return this.tagName.toLowerCase() } _getTabByNumber(t) { return this.allTabs.length - 1 >= t && this.allTabs[t] } _getNumberOfTab(t) { let e; const i = this.allTabs, s = i.length; let a = !1; for (e = 0; e < s; e++)if (t === i[e]) { a = e; break } return a } _firstTab() { return this.allTabs[0] } _lastTab() { const t = this.allTabs; return t[t.length - 1] } _prevTab() { const t = this.allTabs, e = t.findIndex((t => t === this.tabFocus)) - 1; return t[(e + t.length) % t.length] } _nextTab() { const t = this.allTabs, e = t.findIndex((t => t === this.tabFocus)) + 1; return t[e % t.length] } _focusTab(t) { this.tabFocus = t, t.focus() } _activeTab(t) { this.formItSelf = !0, this.allTabs.forEach((t => t.selected = !1)), t.selected = !0, this.tabActive = this._getNumberOfTab(t), this.tabFocus = t, this._animateSelected(t), ["uxTabActive", "ux-tab-active"].forEach((e => { this.dispatchEvent(new CustomEvent(e, { detail: { tab: t, tabNumber: this._getNumberOfTab(t) }, bubbles: !0 })) })) } _onKeyDown(t) { if ("tab" === t.target.getAttribute("role") && !t.altKey) { switch (t.keyCode) { case 37: case 38: this._focusTab(this._prevTab()); break; case 39: case 40: this._focusTab(this._nextTab()); break; case 36: this._focusTab(this._firstTab()); break; case 35: this._focusTab(this._lastTab()); break; case 32: break; default: return }t.preventDefault() } } _onClick(t) { this._activeTab(t.detail.tab) } _animateSelected() { Promise.resolve().then((() => { const t = 100 / this.allTabs.length * this.tabActive; this.elasticEl.style.left = t + "%" })) } resize() { this._animateSelected(this._getTabByNumber(this.tabActive)) } } class Je extends Fe { } class Ze extends Ke { } class Qe extends Ye { _activeTab(t) { super._activeTab(t); const e = this.allPanels, i = this.allTabs; e.length && (e[0].setAttribute("aria-labelledby", t.id), i.forEach((t => t.removeAttribute("aria-controls"))), t.setAttribute("aria-controls", e[0].id)), Promise.resolve().then((() => { e.length && (e[0].setAttribute("aria-labelledby", t.id), i.forEach((t => t.removeAttribute("aria-controls"))), t.setAttribute("aria-controls", e[0].id)) })) } get allTabs() { return [...this.querySelectorAll("ux-tabs-one-panel-btn")] } get allPanels() { return [...this.querySelectorAll("ux-tabs-one-panel-panel")] } } class ti extends Fe { } class ei extends Ke { } class ii extends Ye { constructor() { super(), this._linkPanels = this._linkPanels.bind(this) } connectedCallback() { super.connectedCallback() && super.connectedCallback(), this.slotChange(this.$.querySelector("slot[name=tab]"), this._linkPanels), this.slotChange(this.$.querySelector("slot[name=panel]"), this._linkPanels) } _linkPanels() { this.allTabs.forEach((t => { const e = t.nextElementSibling; ("ux-tabs-panel" === e.tagName.toLowerCase() || "bux-tabs-panel" === e.tagName.toLowerCase()) && e.id && t.id && (t.setAttribute("aria-controls", e.id), e.setAttribute("aria-labelledby", t.id)) })) } _panelForTab(t) { const e = t.getAttribute("aria-controls"); return e ? this.querySelector(`#${e}`) : null } _activeTab(t) { super._activeTab(t), [...this.querySelectorAll("ux-tabs-panel, bux-tabs-panel")].forEach((t => t.hidden = !0)); const e = this._panelForTab(t); e && (e.hidden = !1) } get allTabs() { return [...this.querySelectorAll("ux-tabs-btn")] } get allPanels() { return [...this.querySelectorAll("ux-tabs-panel")] } } const si = document.createElement("template"); si.innerHTML = '<div class="c-tile js-container" part="ux-tile"><slot></slot></div>'; class ai extends (at(q(T(tt(A))))) { static get properties() { return { bgImg: { type: "string" }, bgAlt: { type: "string" } } } template() { return si } constructor() { super(), this._tile = this.$.querySelector(".c-tile") } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "bg-img" === t && this._setBgImg()) } _setBgImg() { this.bgImg ? (this.bgImgEl = document.createElement("ux-img"), this.bgImgEl.classList.add("c-tile--img"), this.bgImgEl.src = this.bgImg, this.bgImgEl.alt = this.bgAlt, this.container.appendChild(this.bgImgEl)) : null != this.bgImgEl && this.bgImgEl.remove() } } const ni = document.createElement("template"); ni.innerHTML = '<a class="c-link-tile js-container m-lib-link" part="ux-link-tile">\n  <span class="c-tile">\n    <slot></slot>\n    <span class="c-link-tile--arrow">\n      <ux-svg lib-size="md"></ux-svg>\n    </span>\n  </span>\n</a>'; const ri = document.createElement("template"); ri.innerHTML = '<button class="c-link-tile js-container m-btn-no-style" part="ux-link-tile">\n  <span class="c-tile">\n    <slot></slot>\n    <span class="c-link-tile--arrow">\n      <ux-svg lib-size="md"></ux-svg>\n    </span>\n  </span>\n</button>'; class oi extends ($(X(Tt(ai)))) { static get properties() { return { ...super.properties, btn: { type: "boolean", defaultValue: !1 } } } template() { return this.btn ? ri : ni } constructor() { super(), this._linkTile = this.$.querySelector(".c-link-tile") } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "btn" === t && this._changeTemplate("btn")) } } const li = n`
  :host {
    position: relative;
    box-sizing: border-box;

    --tile-op-2-padding-bottom-d: 10px;
    --tile-op-2-padding-bottom-m: 10px;
    --tile-op-2-progress-height: 20px;
    --c-progress-radius: 0;
  }

  :host * {
    box-sizing: border-box;
  }

  .c-tile-operation-progress {
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  :host([progress-value]) .c-tile-operation-base {
    padding-bottom: calc(var(--tile-op-2-padding-bottom-m) + var(--tile-op-2-progress-height));
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([progress-value]) .c-tile-operation-2 {
      padding-bottom: calc(var(--tile-op-2-padding-bottom-d) + var(--tile-op-2-progress-height));
    }
  }
`; class ci extends (Le(q(xe(A)))) { static get properties() { return { progressValue: { type: "number" }, progressTxt: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "progress-value" !== t && "progress-txt" !== t || this.setProgressValue()) } setProgressValue() { this.progressEl || (this.progressEl = document.createElement("ux-progress-bar"), this.progressEl.classList.add("c-tile-operation-progress"), this.progressEl.setAttribute("exportparts", "ux-progress-bar"), this.progressEl.withTxt = "", this.progressEl.libColor = "positive", this.$.querySelector(".c-tile-operation-items").appendChild(this.progressEl)), null === this.progressValue ? (this.progressEl.remove(), this.progressEl = null) : (this.progressEl.value = this.progressValue, this.progressTxt && (this.progressEl.withTxt = this.progressTxt)) } } const di = li + n`
  .c-tile-operation-2 {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    background-color: #fff;
    border: solid 1px #e6e6e6;
    padding: 10px;
    padding-bottom: var(--tile-op-2-padding-bottom-m);
    border-radius: 20px;
  }

  .c-tile-operation-2--none {
    border: initial;
    background-color: initial;
  }

  .c-tile-operation-items {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    align-items: center;
  }

  :host([column]:not([column='false'])) .c-tile-operation-items {
    flex-direction: column;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-tile-operation-items {
      justify-content: space-between;
    }
  }

  .c-tile-operation-items slot {
    display: flex;
  }

  ::slotted([slot='2']) {
    margin-top: 10px;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-tile-operation-2 {
      padding: 10px 20px;
      padding-bottom: var(--tile-op-2-padding-bottom-d);
    }

    :host([progress-value]) .c-tile-operation-2 {
      padding-bottom: calc(var(--tile-op-2-padding-bottom-d) + var(--tile-op-2-progress-height));
    }

    .c-tile-operation-items {
      flex-direction: row;
    }

    ::slotted([slot='2']) {
      flex: 1 0 0;
      margin-top: 0;
    }
  }
`, ui = document.createElement("template"); ui.innerHTML = '\n<div class="js-container c-tile-operation-base c-tile-operation-2" part="ux-tile-operation-2">\n  <div class="c-tile-operation-items">\n    <slot name="1"></slot><slot name="2"></slot>\n  </div>\n  <slot></slot>\n</div>\n'; class hi extends ci { static get customName() { return "ux-tile-operation-2" } template() { return ui } } const pi = n`
  :host {
    position: relative;
  }

  .c-tile-operation {
    position: relative;
    display: flex;
    min-height: 40px;
    flex-flow: row wrap;
    background-color: #fff;
    border: solid 1px #e6e6e6;
    border-radius: var(--border-radius-md);
    padding: 0 var(--spacing-sm);
    overflow: hidden;
  }

  .c-tile-operation-items {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }

  ::slotted(ux-row-cell) {
    display: inline;
  }

  ::slotted([slot='1']) {
    margin-right: 30px;
  }

  ::slotted([slot='2']) {
    order: 1;
    flex: 1 0 100%;
    margin-top: var(--spacing-xxs);
  }

  ::slotted([slot='3']) {
    margin: 0 0 0 auto;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    ::slotted([slot='2']) {
      order: 0;
      flex: 1 0 0;
      margin-top: 0;
    }

    ::slotted([slot='3']) {
      margin: 0;
    }
  }
`, bi = document.createElement("template"); bi.innerHTML = '\n<div class="js-container c-tile-operation-base c-tile-operation" part="ux-tile-operation">\n  <div class="c-tile-operation-items" part="ux-tile-operation__items">\n    <slot name="1"></slot><slot name="2"></slot><slot name="3"></slot>\n  </div>\n  <slot></slot>\n</div>'; class mi extends ci { template() { return bi } } const gi = n`
  .c-checkbox-error::slotted(*) {
    margin-top: 0.5rem;
    color: var(--color-error);
  }
`; let vi = 0; const fi = document.createElement("template"); fi.innerHTML = '\n<section class="c-checkbox-group js-container">\n  <slot name="group-label"></slot>\n  <span style="display:none;" class="a11y-desc visually-hidden"></span>\n  <slot></slot>\n  <slot aria-hidden="true" class="c-checkbox-error" style="display:none;" name="error"></slot>\n</section>'; class xi extends (j(T(A))) { static get properties() { return { state: { type: "string" } } } template() { return fi } constructor() { super(), this.deprecated = !0, this.count = vi, vi++, this.errorSlot = this.$.querySelector(".c-checkbox-error"), this.a11yEl = this.$.querySelector(".a11y-desc") } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "state" === t) switch (this.state) { case "valid": this.container.classList.remove("error", "empty"), this.container.classList.add("valid"), this.errorSlot.style.display = "none", this.a11yEl.style.display = "none"; break; case "error": if (this.container.classList.remove("valid", "empty"), this.container.classList.add("error"), this.errorSlot.style.display = "", "function" == typeof this.errorSlot.assignedElements && this.errorSlot.assignedElements().length > 0) { const t = this.errorSlot.assignedElements().reduce(((t, e) => t + e.innerHTML), ""); this.a11yEl.innerHTML = t, this.a11yEl.style.display = "" } break; default: this.container.classList.remove("valid", "error"), this.container.classList.add("empty"), this.errorSlot.style.display = "none" } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("role", "group"), this.querySelector('[slot="group-label"]') && (this.setAttribute("aria-labelledby", "group-checkbox-" + this.count), this.querySelector('[slot="group-label"]').id = "group-checkbox-" + this.count) } } class yi extends A { static get properties() { return { checked: { type: "boolean" }, disabled: { type: "boolean" } } } constructor() { super(), this.deprecated = !0, this._onKeyUp = this._onKeyUp.bind(this), this._toggleChecked = this._toggleChecked.bind(this) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "checked": this.checked ? this.setAttribute("aria-checked", !0) : this.setAttribute("aria-checked", !1); break; case "disabled": this.setDisabled() } } setDisabled() { this.disabled ? (this.setAttribute("aria-disabled", !0), this.removeAttribute("tabindex"), this.blur(), this.id && document.querySelector(`ux-label[for=${this.id}]`).setAttribute("disabled", "true")) : (this.tabIndex = 0, this.setAttribute("aria-disabled", !1), this.id && document.querySelector(`ux-label[for=${this.id}]`).removeAttribute("disabled")) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "checkbox"), this.hasAttribute("tabindex") || this.setAttribute("tabindex", 0), this.addEventListener("keyup", this._onKeyUp), this.addEventListener("click", this._toggleChecked) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("keyup", this._onKeyUp), this.removeEventListener("click", this._toggleChecked) } _onKeyUp(t) { t.altKey || 32 === t.keyCode && (t.preventDefault(), this._toggleChecked()) } _toggleChecked() { this.disabled || (this.checked = !this.checked, this.dispatchEvent(new CustomEvent("change", { detail: { checked: this.checked }, bubbles: !0 }))) } } const ki = n`
  .c-checkbox-error ::slotted(*) {
    margin-top: 0.5rem;
    color: var(--color-error);
  }
`; let wi = 0; const Ci = document.createElement("template"); Ci.innerHTML = '\n<div id="group-legend" class="c-checkbox-group--legend">\n  <slot name="group-legend"></slot>\n</div>\n<slot name="group-header"></slot>\n<div role="group" aria-labelledby="group-legend" class="c-checkbox-group js-container">\n  <span style="display:none;" class="a11y-desc visually-hidden"></span>\n  <div role="list" class="c-checkbox-group-checkboxes">\n    <slot></slot>\n  </div>\n</div>\n<div class="c-checkbox-error">\n  <slot aria-hidden="true" style="display:none;" name="error"></slot>\n</div>\n<slot name="group-footer"></slot>'; class _i extends (pt(j(T(A)))) { static get properties() { return { state: { type: "string" } } } template() { return Ci } constructor() { super(), this.deprecated = !0, this.count = wi, wi++, this.a11yEl = this.$.querySelector(".a11y-desc"), this.legendEl = this.$.querySelector(".c-checkbox-group--legend"), this._wrapChildren = this._wrapChildren.bind(this), this.slotChange(this._slots.default, this._wrapChildren) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "state" === t && this.setState() } connectedCallback() { super.connectedCallback && super.connectedCallback() } _wrapChildren() { this._slots.default.assignedElements().length > 2 ? this._slots.default.assignedElements().forEach((t => { t.$.querySelector(".js-container").setAttribute("role", "listitem") })) : (this.$.querySelector(".c-checkbox-group-checkboxes").removeAttribute("role"), this._slots.default.assignedElements().forEach((t => { t.$.querySelector(".js-container").removeAttribute("role") }))) } setState() { switch (this.state) { case "valid": this.setValidState(); break; case "error": this.setErrorState(); break; default: this.setEmptyState() } } setValidState() { this.container.classList.remove("error", "empty"), this.container.classList.add("valid"), this._slots.error.style.display = "none", this.a11yEl.style.display = "none" } setErrorState() { if (this.container.classList.remove("valid", "empty"), this.container.classList.add("error"), this._slots.error.style.display = "", "function" == typeof this._slots.error.assignedElements && this._slots.error.assignedElements().length > 0) { const t = this._slots.error.assignedElements().reduce(((t, e) => t + e.innerHTML), ""); this.a11yEl.innerHTML = t, this.a11yEl.style.display = "" } } setEmptyState() { this.container.classList.remove("valid", "error"), this.container.classList.add("empty"), this._slots.error.style.display = "none" } } const Ei = document.createElement("template"); Ei.innerHTML = '\n<div class="c-checkbox-wrap js-container">\n  <input type="checkbox" id="checkbox" class="c-checkbox visually-hidden"></input>\n  <label class="c-checkbox-label" for="checkbox"><slot></slot></label>\n</div>'; const Li = document.createElement("template"); Li.innerHTML = '\n<div class="c-checkbox-wrap js-container">\n  <input type="checkbox" id="checkbox" class="c-checkbox visually-hidden"></input>\n  <label for="checkbox">\n    <div class="c-checkbox__unchecked active">\n      <slot name="unchecked"></slot>\n    </div>\n    <div class="c-checkbox__checked">\n      <slot name="checked"></slot>\n    </div>\n  </label>\n</div>'; class Ai extends (Ct(j(A))) { static get properties() { return { checked: { type: "boolean" }, disabled: { type: "boolean" }, img: { type: "boolean" } } } template() { return this.img ? Li : Ei } constructor() { super(), this.deprecated = !0, this.input = this.$.querySelector("input"), this.label = this.$.querySelector("label"), this.setChecked = this.setChecked.bind(this), this.fixChecked = this.fixChecked.bind(this), this.avoidInputClick = this.avoidInputClick.bind(this), this.valueWhenDisabled = !1, this.imgChecked = this.$.querySelector(".c-checkbox__checked"), this.imgUnchecked = this.$.querySelector(".c-checkbox__unchecked") } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "checked": this._isChecked(this.checked) === this.input.checked || this.disabled || (this.input.checked = this._isChecked(this.checked)), this.setOrRemoveAttr("aria-checked", this.checked, this.input, !0), this.img && (this.setBooleanClass(this.checked, "active", this.imgChecked), this.setBooleanClass(!this.checked, "active", this.imgUnchecked)); break; case "disabled": this.disableCheckBox() } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.input.checked = this._isChecked(this.checked), this.input.addEventListener("change", this.setChecked), this.label.addEventListener("click", this.avoidInputClick) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("change", this.setChecked), this.input.removeEventListener("change", this.fixChecked), this.label.removeEventListener("click", this.avoidInputClick) } disableCheckBox() { this.setOrRemoveAttr("aria-disabled", this.disabled, this.input, !0), this.disabled ? (this.valueWhenDisabled = this.input.checked, this.input.removeEventListener("change", this.setChecked), this.input.addEventListener("change", this.fixChecked), this.input.addEventListener("click", this.avoidInputClick)) : (this.input.removeEventListener("change", this.fixChecked), this.input.addEventListener("change", this.setChecked), this.input.removeEventListener("click", this.avoidInputClick)) } fixChecked(t) { this.input.checked = this.valueWhenDisabled, t.preventDefault() } avoidInputClick(t) { t.stopPropagation() } _isChecked(t) { return !!t || "checked" === t } setChecked() { this._isChecked(this.checked) === this.input.checked || this.disabled || (this.checked = this.input.checked), this.dispatchEvent(new Event("change")) } } const Si = document.createElement("template"); Si.innerHTML = '\n<div class="visually-hidden" id="group-legend">\n  <slot name="group-legend"></slot>\n</div>\n<div role="radiogroup" aria-labelledby="group-legend" class="c-input-radio-group">\n  <div class="c-input-radio__error" id="error" aria-hidden="true">\n    <slot name="error"></slot>\n  </div>\n  <div role="list" class="c-input-radio-group__radios">\n    <slot></slot>\n  </div>\n</div>\n'; const Ti = ["ux-input-radio"]; class $i extends (j(A)) { static get properties() { return { value: { type: "string" }, segment: { type: "boolean" } } } template() { return Si } constructor() { super(), this.deprecated = !0 } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "value" === t ? this.fromItSelf ? this.fromItSelf = !1 : this.presetItem() : "segment" === t && this._isSegment() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleClick); const t = this.checkedRadioInput; if (t) this.setChecked(t, !1), this.presetItem(); else { const t = this.querySelector(Ti); t ? (this.presetItem(), t.setAttribute("tabindex", 0)) : this.presetItem() } } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleClick) } handleKeyDown(t) { const e = this.querySelectorAll("ux-input-amount, ux-input-date, ux-input-email, ux-input-file, ux-input-number, ux-input-password, ux-input-range, ux-input-search, ux-input-tel"); for (const t of e.length) if (t === document.activeElement) return; let i = !1; switch (t.keyCode) { case 38: case 37: this.setCheckedToPrevItem(), i = !0; break; case 40: case 39: this.setCheckedToNextItem(), i = !0; break; case 36: this.setChecked(this.firstRadioInput), i = !0; break; case 35: this.setChecked(this.lastRadioInput), i = !0; break; case 32: case 13: Ti.includes(t.target.tagName.toLowerCase()) && this.setChecked(t.target), i = !0 }i && (t.stopPropagation(), t.preventDefault()) } handleClick(t) { return t.stopPropagation(), Ti.includes(t.target.tagName.toLowerCase()) && this.setChecked(t.target), !1 } get checkedRadioInput() { return this.querySelector('[checked]:not([checked="false"])') } get firstRadioInput() { return this.querySelector('[role="listitem"]:first-of-type') } get lastRadioInput() { return this.querySelector('[role="listitem"]:last-of-type') } prevRadioInput(t) { let e = t.previousElementSibling; for (; e;) { if ("listitem" === e.getAttribute("role")) return e; e = e.previousElementSibling } return null } nextRadioInput(t) { let e = t.nextElementSibling; for (; e;) { if ("listitem" === e.getAttribute("role")) return e; e = e.nextElementSibling } return null } setCheckedToPrevItem() { const t = this.checkedRadioInput; t && t !== this.firstRadioInput ? this.setChecked(this.prevRadioInput(t)) : this.setChecked(this.lastRadioInput) } setCheckedToNextItem() { const t = this.checkedRadioInput; t && t !== this.lastRadioInput ? this.setChecked(this.nextRadioInput(t)) : this.setChecked(this.firstRadioInput) } setChecked(t, e = !0) { this.value !== t.value && (this.fromItSelf = !0), this.resetRadios(), this._checkNode(t), e && t.focus(), this._setValue(), this.dispatchEvent(new Event("change")) } resetRadios() { [...this.querySelectorAll('[role="listitem"]')].forEach((t => { t.setAttribute("checked", "false"), t.setAttribute("tabindex", "-1") })) } _checkNode(t) { t.setAttribute("checked", "true"), t.setAttribute("tabindex", "0") } _setValue() { this.value = this.checkedRadioInput.value } presetItem() { [...this.querySelectorAll(Ti)].forEach((t => { this.value && t.value === this.value && this.setChecked(t, !1) })), this.value || this.resetRadios() } _isSegment() { this.segment && this._slots.default.assignedElements().length < 5 ? (this.$.querySelector(".c-input-radio-group__radios").classList.add("c-input-radio-group--segment"), this._slots.default.assignedElements().forEach((t => { t.setAttribute("segmented", !0) })), this.spaceV = null) : (this.container.classList.remove("c-input-radio-group--segment"), this._slots.default.assignedElements().forEach((t => { t.removeAttribute("segmented") }))) } } const Ii = document.createElement("template"); Ii.innerHTML = '\n<div class="c-input-radio__wrap">\n  <input class="c-input-radio visually-hidden m-a11y-label" id="radio" type="radio"/>\n  <label class="c-input-radio__label" for="radio" aria-hidden="true"><slot></slot></label>\n  <div class="c-input-radio__more" aria-hidden="true">\n    <slot name="more"></slot>\n  </div>\n</div>\n'; class Mi extends (Ct(j(A))) { static get properties() { return { value: { type: "string" }, checked: { type: "boolean" }, segmented: { type: "boolean" } } } template() { return Ii } constructor() { super(), this.deprecated = !0, this.input = this.$.querySelector(".c-input-radio"), this.wrap = this.$.querySelector(".c-input-radio__wrap") } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "checked" === t ? this.setOrRemoveAttr("aria-checked", this.checked, this.input, !0) : "value" === t ? this.setOrRemoveAttr("value", this.value, this.input) : "segmented" === t && this.setBooleanClass(this.value, "c-input-radio-segmented", this.wrap)) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "listitem") } } const Bi = document.createElement("template"); Bi.innerHTML = '\n<div id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-wrap">\n  <input aria-labelledby="a11ylabel" id="input" class="c-input js-delegate-focus"><slot name="content-right"></slot>\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<div aria-hidden="true" class="c-input-error" style="display:none;">\n  <slot name="error"></slot>\n</div>\n'; class qi extends ($(j(wt(A)))) { static get properties() { return { required: { type: "boolean" }, state: { type: "string" }, placeholder: { type: "string" }, value: { type: "string" }, a11yLabel: { type: "string" }, autocomplete: { type: "string" }, readonly: { type: "boolean" }, disabled: { type: "boolean" }, erase: { type: "boolean" } } } template() { return Bi } constructor() { super(), this.deprecated = !0, this.input = this.$.querySelector(".c-input"), this.errorSlot = this.$.querySelector(".c-input-error"), this.wrap = this.$.querySelector(".c-input-wrap, .c-input-wrap-nostyle"), this.a11yLabelEl = this.$.querySelector("#a11ylabel"), this.a11yErrorEl = this.$.querySelector("#a11yerror"), this.setValueListener = this.setValueListener.bind(this), this.dispatchListener = this.dispatchListener.bind(this), this.clearInput = this.clearInput.bind(this) } setValueListener(t) { const e = this.input.value.length; let i = 0; "date" !== this.input.type && "range" !== this.input.type && "email" !== this.input.type && (i = this.input.selectionStart), this.setValue(t.target.value), this.dispatchEvent(new Event("change")), "date" !== this.input.type && "range" !== this.input.type && "email" !== this.input.type && (this.input.value.length > e && i++, this.input.selectionStart = i, this.input.selectionEnd = i) } dispatchListener() { this.dispatchEvent(new Event("focus")) } connectedCallback() { this.step = this.getAttribute("step") || 1, this.input = this.$.querySelector(".c-input"), this.wrap = this.$.querySelector(".c-input-wrap, .c-input-wrap-nostyle"), super.connectedCallback && super.connectedCallback(), this.type || (this.type = "text"), this.step || (this.step = 1), this.state || 0 !== this.input.value.length || (this.state = "empty"), this.input.addEventListener("input", this.setValueListener), this.input.addEventListener("focus", this.dispatchListener), this.setLabel() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("input", this.setValueListener), this.input.removeEventListener("focus", this.dispatchListener) } attributeChangedCallback(t, e, i) { switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "required": this.setOrRemoveAttr("required", this.required, this.input); break; case "readonly": this.setOrRemoveAttr("readonly", this.readonly, this.input); break; case "disabled": this.setBooleanClass(this.disabled, "c-input-disabled", this.wrap), this.setOrRemoveAttr("disabled", this.disabled, this.input); break; case "state": this.setState(); break; case "placeholder": this.placeholder ? this.input.setAttribute("placeholder", this.placeholder) : this.input.removeAttribute("placeholder"); break; case "value": this.formItSelf ? this.formItSelf = !1 : this.setValue(this.value); break; case "a11y-label": this.setLabel(); break; case "autocomplete": this.input.setAttribute("autocomplete", this.autocomplete); break; case "erase": this.setErase() } } setErase() { if (this.createEraseEl(), !this.erase || 0 === this.input.value.length) return this.wrap.classList.remove("c-input-w-erase"), void (this.eraseEl.style.display = "none"); this.wrap.classList.add("c-input-w-erase"), this.eraseEl.style.display = "" } createEraseEl() { if (this.eraseEl) return; this.wrap.classList.add("c-input-w-erase"); const t = document.createElement("template"); t.innerHTML = '\n    <ux-btn class="c-input-erase" lib-title="Effacer le champs" model="nostyle"><ux-svg class="c-input-erase--icon" lib-size="sm"></ux-svg></ux-btn>\n    ', this.input.parentNode.insertBefore(t.content.cloneNode(!0), this.input.nextSibling), this.eraseEl = this.$.querySelector(".c-input-erase"), this.eraseEl.addEventListener("click", this.clearInput) } setValue(t) { this.value !== t && (this.formItSelf = !0), this.input.value = t; const e = this.input.getAttribute("role"); "slider" !== e && "spinbutton" !== e && "progressbar" !== e || this.input.setAttribute("aria-valuenow", t), this.value = t, this.setErase() } clearInput() { this.input.classList.add("c-input-noval"), this.value = "", this.input.value = "" } get labels() { return [...document.querySelectorAll(`[for="${this.id}"]`)] } setLabel() { let t = this.labels.reduce(((t, e) => t + e.innerHTML), ""); this.a11yLabel && (t += this.a11yLabel), this.a11yLabelEl && (this.a11yLabelEl.innerHTML = t) } setValidState() { this.input.classList.remove("error", "empty"), this.wrap.classList.remove("error", "empty"), this.input.classList.add("valid"), this.wrap.classList.add("valid"), this.input.removeAttribute("aria-describedby"), this.a11yErrorEl && (this.a11yErrorEl.style.display = "none"), this.errorSlot && (this.errorSlot.style.display = "none") } setErrorState() { if (this.errorSlot) { if (this.errorSlot && "function" == typeof this.errorSlot.assignedElements && this.errorSlot.assignedElements().length > 0) { const t = this.errorSlot.assignedElements().reduce(((t, e) => t + e.innerHTML), ""); this.a11yErrorEl && (this.a11yErrorEl.innerHTML = t), this.a11yErrorEl && (this.a11yErrorEl.style.display = ""), this.input.setAttribute("aria-describedby", "a11yerror"), this.a11yErrorEl && (this.a11yErrorEl.innerHTML = t, this.a11yErrorEl.style.display = "") } this.errorSlot.style.display = "" } this.input.classList.remove("valid", "empty"), this.wrap.classList.remove("valid", "empty"), this.input.classList.add("error"), this.wrap.classList.add("error") } setDefaultState() { this.input.classList.remove("valid", "error"), this.wrap.classList.remove("valid", "error"), this.input.classList.add("empty"), this.wrap.classList.add("empty"), this.input.removeAttribute("aria-describedby"), this.a11yErrorEl && (this.a11yErrorEl.style.display = "none"), this.errorSlot && (this.errorSlot.style.display = "none") } setState() { switch (this.state) { case "valid": this.setValidState(); break; case "error": this.setErrorState(); break; default: this.setDefaultState() }this.setLabelState() } setLabelState() { this.labels.forEach((t => { "UX-LABEL" === t.tagName && t.setAttribute("state", this.state) })) } } function zi(t) { return class extends t { static get properties() { return { min: { type: "number" }, max: { type: "number" }, step: { type: "number" } } } constructor() { super(), this.input.type } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.step = this.getAttribute("step") || 1 } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "min": this.setOrRemoveAttr("min", this.min, this.input), this.setOrRemoveAttr("aria-valuemin", this.min, this.input); break; case "max": this.setOrRemoveAttr("max", this.max, this.input), this.setOrRemoveAttr("aria-valuemax", this.max, this.input); break; case "step": this.setOrRemoveAttr("step", this.step, this.input) } } } } class Ni extends (zi(qi)) { static get properties() { return { ...super.properties, round: { type: "number" } } } constructor() { super(), this.deprecated = !0, this.input.setAttribute("type", "text"), this.input.classList.add("c-input-number") } setValue(t) { let e = ""; if (null == t) this.clearInput(); else { if (e = t.replace(/\s/g, ""), e = e.replace(/,/g, "."), 3 === e.split(".").length && "." === e.slice(-1)) return void (this.input.value = this.input.value.slice(0, -1)); if ("-" === e.slice(-1) || "+" === e.slice(-1)) return e.length > 1 ? void (this.input.value = this.input.value.slice(0, -1)) : "-" === e.slice(-1) && this.min && this.min >= 0 ? void (this.input.value = null) : void 0; if (e.startsWith("-") && this.min && this.min >= 0 && (e = e.slice(1)), "." === e.slice(-1) && Number.isInteger(parseInt(e.slice(-2, -1))) && 0 != +this.round) return; const s = Hi(e); if (e = parseFloat(e), isNaN(e)) this.clearInput(); else { this.max && e > this.max && (i = (i = "" + (i = e)).slice(0, -1), e = parseFloat(i)), e = e.toLocaleString("fr-FR"); const t = Hi(e); if (s > t) { 0 === t && (e += ","); let i = s - t; for (; i > 0;)e += "0", i-- } const a = Hi(e); if (this.round && a > this.round && (e = "" + e, e = e.slice(0, this.round - a)), 0 == +this.round && "," === e.slice(-1) && (e = e.slice(0, -1)), "NaN" === e) return void this.clearInput(); this.input.value = e, e = e.replace(/\s/g, ""), e = e.replace(/,/g, "."), this.value = parseFloat(e), this.input.classList.remove("c-input-noval") } } var i } } function Hi(t) { let e = t.split("."); return 1 === e.length && (e = t.split(",")), 1 === e.length ? 0 : e[1].length } const ji = document.createElement("template"); ji.innerHTML = '\n<div style="display:none;" id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-wrap">\n  <input aria-labelledby="a11ylabel" class="c-input c-input-amount c-input-w-r-icon js-delegate-focus"><ux-text class="c-input-amount--txt" aria-hidden="true">€</ux-text>\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<slot aria-hidden="true" class="c-input-error" style="display:none;" name="error"></slot>\n'; class Ri extends Ni { static get properties() { return { ...super.properties, currency: { type: "string", defaultValue: "euro" } } } constructor() { super(), this.deprecated = !0 } attributeChangedCallback(t, e, i) { if (e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "currency" === t)) { const t = this.$.querySelector("ux-text"); switch (this.currency.toLowerCase()) { case "euro": case "eur": t.innerText = "€"; break; case "usd": t.innerText = "$"; break; default: t.innerText = this.currency } } } template() { return ji } } const Oi = document.createElement("template"); Oi.innerHTML = '\n<div id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-wrap">\n  <input aria-labelledby="a11ylabel" id="input" class="c-input js-delegate-focus"><slot name="content-right"></slot>\n  <input style="display: none;" placeholder="JJ/MM/AAAA" aria-labelledby="a11ylabel" type="text" class="c-input-text c-input-date-fake js-delegate-focus">\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<div aria-hidden="true" class="c-input-error" style="display:none;">\n  <slot class="c-input-error" style="display:none;" name="error"></slot>\n</div>\n'; class Pi extends (zi(qi)) { static get properties() { return { ...super.properties, disableUserKeyboard: { type: "boolean" }, outputDateFormat: { type: "string" } } } template() { return Oi } constructor() { super(), this.deprecated = !0, this.input.setAttribute("type", "date"), this.input.classList.add("c-input-date"), this.inputFake = this.$.querySelector(".c-input-date-fake"), this.setValueListener = this.setValueListener.bind(this), this.disableUserKeyboardFn = this.disableUserKeyboardFn.bind(this), this.setFakeValue = this.setFakeValue.bind(this) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "output-date-format" === t && this.setOutputValue() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.disableUserKeyboard && this.input.addEventListener("keydown", this.disableUserKeyboardFn), "safari" === this.navigator.name.toLowerCase() && (this.input.style.display = "none", this.inputFake.style.display = "", this.inputFake.addEventListener("keyup", this.setFakeValue)) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("keydown", this.disableUserKeyboardFn), this.inputFake.removeEventListener("keyup", this.setFakeValue) } disableUserKeyboardFn(t) { 1 === t.key.length && (t.preventDefault(), t.stopPropagation()) } setValue(t) { if (t.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)) { const e = t.split("-"), i = `${e[2]}/${e[1]}/${e[0]}`; this.inputFake.value = i } } setFakeValue() { /[0-9]|\//i.test(this.inputFake.value.slice(-1)) || (this.inputFake.value = "" + this.inputFake.value, this.inputFake.value = this.inputFake.value.slice(0, -1)), this.setOutputValue(this.inputFake.value) } setOutputValue(t) { if ("yyyy-mm-dd" === this.outputDateFormat) { if (null == t) return; const e = t.split("/"), i = `${e[2]}-${e[1]}-${e[0]}`; this.value = i, this.input.value = i, this.input.dispatchEvent(new Event("input")) } } } function Di(t) { return class extends t { static get properties() { return { minlength: { type: "number" }, maxlength: { type: "number" } } } constructor() { switch (super(), this.input.type) { case "number": case "range": case "date": case "month": case "week": case "time": case "datetime-local": throw "Minlength/Maxlength attribute used on numeric type" } } connectedCallback() { super.connectedCallback && super.connectedCallback() } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "minlength": this.input.setAttribute("minlength", this.minlength); break; case "maxlength": this.input.setAttribute("maxlength", this.maxlength) } } } } const Vi = document.createElement("template"); Vi.innerHTML = '\n<div style="display:none;" id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-wrap">\n  <input aria-labelledby="a11ylabel" type="email" class="c-input c-input-email c-input-w-r-icon js-delegate-focus"><ux-svg  class="m-icon" lib-size="sm"></ux-svg>\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<slot aria-hidden="true" class="c-input-error" style="display:none;" name="error"></slot>\n'; class Ui extends (Di(qi)) { template() { return Vi } constructor() { super(), this.deprecated = !0 } } const Fi = document.createElement("template"); Fi.innerHTML = '\n<div class="c-input-wrap-nostyle">\n  <div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n  <div class="c-input-icon">\n    <slot name="icon"></slot>\n  </div>\n  <input type="file" class="c-input c-input-file js-container">\n  <div id="a11ylabel" class="visually-hidden"></div>\n</div>\n<slot aria-hidden="true" class="c-input-error" style="display:none;" name="error"></slot>\n'; class Wi extends qi { static get properties() { return { ...super.properties, noDisplay: { type: "boolean" }, fileType: { type: "string" } } } template() { return Fi } constructor() { super(), this.deprecated = !0, this.inputIcon = this.$.querySelector(".c-input-icon"), this.setValueListener = this.setValueListener.bind(this) } setValueListener() { this.dispatchEvent(new Event("change")) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.inputIcon.addEventListener("click", (() => { this.input.click() })) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "no-display": this.container.style.display = "none"; break; case "file-type": this.setOrRemoveAttr("accept", this.fileType, this.container) } } } const Ki = document.createElement("template"); Ki.innerHTML = '<div class="c-input-item js-container"><slot></slot></div>'; class Gi extends A { template() { return Ki } static get properties() { return { inline: { type: "boolean" } } } constructor() { super(), this.deprecated = !0 } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container && "inline" === t && this.setBooleanClass(this.inline, "c-input-item--inline") } } const Xi = document.createElement("template"); Xi.innerHTML = '\n<div style="display:none;" id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-wrap">\n  <input aria-labelledby="a11ylabel" type="password" class="c-input c-input-password c-input-w-r-icon js-delegate-focus">\n  <ux-btn lib-title="Afficher le mot de passe" class="c-btn-show" model="nostyle"><ux-svg class="c-svg-eye" lib-size="md"></ux-svg></ux-btn>\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<slot aria-hidden="true" class="c-input-error" style="display:none;" name="error"></slot>\n'; class Yi extends (Di(qi)) { constructor() { super(), this.deprecated = !0, this._togglePassword = this._togglePassword.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.$.querySelector(".c-btn-show").addEventListener("click", this._togglePassword) } _togglePassword() { const t = this.$.querySelector(".c-svg-eye"), e = this.$.querySelector(".c-btn-show"); "password" === this.input.getAttribute("type") ? (this.input.setAttribute("type", "text"), t.icon = this.iconHide, e.setAttribute("lib-title", "Masquer le mot de passe")) : (this.input.setAttribute("type", "password"), t.icon = this.iconShow, e.setAttribute("lib-title", "Afficher le mot de passe")) } template() { return Xi } } const Ji = n`
  :host {
    --height: 8px;
    --border-radius: 6px;

    --track-color: #e6e6e6;
    --track-color-hover: #cdcbcb;

    --cursor-color: var(--color-primary);
    --cursor-color-hover: var(--color-primary-dark);

    --lower-shadow: none;
    --lower-color: var(--color-primary);
    --lower-color-hover: var(--color-primary-dark);

    --upper-shadow: none;
    --upper-color: black;
  }

  .c-input-range {
    display: block;
    position: relative;
    width: 100%;
    margin-bottom: 7px;
    margin-top: 7px;
    box-sizing: border-box;
  }

  .c-input-range * {
    box-sizing: border-box;
  }

  .c-input-range__input {
    display: block;
    position: absolute;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    width: 100%;
    -webkit-appearance: none;
  }

  .c-input-range__wrap {
    display: block;
    position: relative;
    padding-top: 30px;
  }

  .c-input-range__wrap2 {
    position: relative;
    display: flex;
    align-items: center;
  }

  /* La legende */
  .c-input-range__legend {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  /* La legende au milieu */
  .c-input-range__middle {
    transform: translateX(-25%);
  }

  /* Barre rouge qui suit le cursor */
  .c-input-range__lower {
    position: absolute;
    cursor: pointer;
    height: 8px;
    background-color: var(--lower-color);
    border-radius: var(--border-radius);
    pointer-events: none;
    z-index: 2;
  }

  .c-input-range:hover .c-input-range__lower,
  .c-input-range:focus-within .c-input-range__lower {
    background: var(--lower-color-hover);
  }

  /* La valeur actuelle */
  .c-input-range__val {
    position: relative;
    top: -35px;
    color: var(--color-primary);
    font-weight: bold;
  }

  .c-input-range:hover .c-input-range__val,
  .c-input-range:focus-within .c-input-range__val {
    color: var(--cursor-color-hover);
  }

  /* ////////////////////////////////////////// IE */

  /* la zone de déplacement */
  .c-input-range__input::-ms-track {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input::-ms-track,
  .c-input-range:focus-within .c-input-range__input::-ms-track {
    background: var(--track-color-hover);
  }

  /* barre progression avant */
  .c-input-range__input::-ms-fill-lower {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input::-ms-fill-lower,
  .c-input-range:focus-within .c-input-range__input::-ms-fill-lower {
    background: var(--track-color-hover);
  }

  /* barre progression après */
  .c-input-range__input::-ms-fill-upper {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input::-ms-fill-upper,
  .c-input-range:focus-within .c-input-range__input::-ms-fill-upper {
    background: var(--track-color-hover);
  }

  /* le curseur */
  .c-input-range__input::-ms-thumb {
    display: block;
    position: relative;
    cursor: pointer;
    z-index: 2;
    background: var(--cursor-color);
    border-radius: 50%;
    height: 26px;
    width: 26px;
    border: 4px solid white;
    margin-top: -9px;
  }

  .c-input-range:hover .c-input-range__input::-ms-thumb,
  .c-input-range:focus-within .c-input-range__input::-ms-thumb {
    background: var(--cursor-color-hover);
  }

  /* ////////////////////////////////////////// FIN IE */

  /* ////////////////////////////////////////// CHROME */

  /* la zone de déplacement */
  .c-input-range__input::-webkit-slider-runnable-track {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input::-webkit-slider-runnable-track,
  .c-input-range:focus-within .c-input-range__input::-webkit-slider-runnable-track {
    background: var(--track-color-hover);
  }

  /* le curseur */
  .c-input-range__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    display: block;
    position: relative;
    cursor: pointer;
    z-index: 2;
    background: var(--cursor-color);
    border-radius: 50%;
    height: 26px;
    width: 26px;
    border: 4px solid white;
    margin-top: -9px;
  }

  .c-input-range:hover .c-input-range__input::-webkit-slider-thumb,
  .c-input-range:focus-within .c-input-range__input::-webkit-slider-thumb {
    background: var(--cursor-color-hover);
    height: 30px;
    width: 30px;
    border: 4px solid white;
    margin-top: -11px;
  }

  /* /////////////////////////////////// FIREFOX */

  /* la zone de déplacement */
  .c-input-range__input::-moz-range-track {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input:hover::-moz-range-track,
  .c-input-range:focus-within .c-input-range__input:hover::-moz-range-track {
    background: var(--track-color-hover);
  }

  /* le curseur */
  .c-input-range__input::-moz-range-thumb {
    -webkit-appearance: none;
    display: block;
    position: relative;
    cursor: pointer;
    background: var(--color-primary);
    border-radius: 50%;
    height: 26px;
    width: 26px;
    border: 4px solid white;
    margin-top: -9px;
  }

  .c-input-range:hover .c-input-range__input::-moz-range-thumb,
  .c-input-range:focus-within .c-input-range__input::-moz-range-thumb {
    background: var(--cursor-color-hover);
    height: 30px;
    width: 30px;
    border: 4px solid white;
    margin-top: -11px;
  }

  /* .c-input-range__input::-moz-focus-outer {
  border: 0;
} */

  /* ////////////////////////////////// */
`, Zi = document.createElement("template"); Zi.innerHTML = '\n<div class="c-input-range">\n  <div class="c-input-range__wrap">\n    <div class="c-input-range__wrap2">\n      <span type="range" class="c-input-range__lower" aria-hidden="true"></span>\n      <input type="range" class="c-input c-input-range__input js-delegate-focus">\n    </div>\n    <span type="range" class="c-input-range__val" aria-hidden="true"></span>\n  </div>\n  <div class="c-input-range__legend" aria-hidden="true">\n      <span class="c-input-range__min"><slot name="left"></slot></span>\n      <span class="c-input-range__middle"><slot name="middle"></slot></span>\n      <span class="c-input-range__max"><slot name="right"></slot></span>\n  </div>\n</div>'; class Qi extends (zi(qi)) { static get properties() { return { ...super.properties, middlePosition: { type: "string" }, unit: { type: "string" } } } template() { return Zi } constructor() { super(), this.deprecated = !0, this.rangeLowerEl = this.$.querySelector(".c-input-range__lower"), this.rangeValEl = this.$.querySelector(".c-input-range__val"), this.keyEvent = this.keyEvent.bind(this), this.valueListener = this.valueListener.bind(this) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "middle-position" === t && (this.$.querySelector(".c-input-range__middle").style.left = this.middlePosition) } setValue(t) { let e = Number(t); this.formItSelf = !0, this.min && e < this.min && (e = this.min), this.max && e > this.max && (e = this.max), this.input.value = e, this.value = e, this.valueListener() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.input.addEventListener("keydown", this.keyEvent), this.input.addEventListener("input", this.valueListener), this.valueListener(), this.value || (this.value = this.min ? this.min : 0) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("keydown", this.keyEvent), this.input.removeEventListener("focus", this.valueListener) } valueListener() { const t = this.min || 0, e = this.max || 100, i = (this.input.value - t) / (e - t) * 100; this.rangeLowerEl.style.width = i + "%", this.rangeValEl.innerText = this.unit ? `${this.value} ${this.unit}` : this.value; const s = i * this.rangeValEl.offsetWidth / 100; this.rangeValEl.style.left = `calc( ${i}% - ${s}px )` } keyEvent(t) { let e = 0; switch (t.which) { case 37: case 109: case 54: e = Number(this.value) - Number(this.step), e >= this.valueMin && (this.value = e); break; case 39: case 107: case 187: e = Number(this.value) + Number(this.step), e <= this.valueMax && (this.value = e) } } } const ts = document.createElement("template"); ts.innerHTML = '\n<div style="display:none;" id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-range">\n  <div class="c-input-range__wrap c-input-wrap">\n    <div class="c-input-range__wrap2">\n      <div type="range" aria-hidden="true" class="c-input-range__rail"></div>\n      <div type="range" aria-hidden="true" class="c-input-range__lower"></div>\n      <div type="range" aria-hidden="true" class="c-input-range__higher"></div>\n      <div \n        id="input"\n        role="slider"\n        tabindex="0"\n        class="c-input c-input-range__track js-delegate-focus"\n        aria-labelledby="a11ylabel"\n      >\n      </div>\n    </div>\n    <span type="range" class="c-input-range__val" aria-hidden="true"></span>\n  </div>\n  <div class="c-input-range__legend" aria-hidden="true">\n      <span class="c-input-range__min" aria-hidden="true"><slot aria-hidden="true" name="left"></slot></span>\n      <span class="c-input-range__middle" aria-hidden="true"><slot aria-hidden="true" name="middle"></slot></span>\n      <span class="c-input-range__max" aria-hidden="true"><slot aria-hidden="true" name="right"></slot></span>\n  </div>\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<slot aria-hidden="true" class="c-input-error" style="display:none;" name="error"></slot>\n'; class es extends (zi(qi)) { static get properties() { return { ...super.properties, middlePosition: { type: "string" }, unit: { type: "string" } } } template() { return ts } constructor() { super(), this.deprecated = !0, this.railEl = this.$.querySelector(".c-input-range__rail"), this.rangeLowerEl = this.$.querySelector(".c-input-range__lower"), this.rangeValEl = this.$.querySelector(".c-input-range__val"), this.keyEvent = this.keyEvent.bind(this), this.mouseClick = this.mouseClick.bind(this), this.mouseDown = this.mouseDown.bind(this), this.mouseUp = this.mouseUp.bind(this), this.mouseMove = this.mouseMove.bind(this) } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "middle-position" === t && (this.$.querySelector(".c-input-range__middle").style.left = this.middlePosition) } connectedCallback() { this.input = this.$.querySelector(".c-input"); const { min: t, value: e } = this.getAllNumbers(); e || (this.value = t), this.input.value = this.value.toString(), super.connectedCallback && super.connectedCallback(), this.addEventListener("keydown", this.keyEvent), this.input.addEventListener("mousedown", this.mouseDown), this.railEl.addEventListener("click", this.mouseClick), this.setVisualValue() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("keydown", this.keyEvent), this.input.removeEventListener("mousedown", this.mouseDown), this.railEl.removeEventListener("click", this.mouseClick) } getAllNumbers() { return { min: Number(this.min) || 0, max: Number(this.max) || 100, step: Number(this.step) || 1, value: Number(this.value), inputValue: Number(this.input.value) } } setValue(t) { const { step: e, min: i, max: s } = this.getAllNumbers(), a = Number(t) / e, n = Math.trunc(a); let r = Math.abs(a) - Math.floor(Math.abs(a)) < .5 ? n * e : n * e + e; void 0 !== i && r < i && (r = i), void 0 !== s && r > s && (r = s), this.input.value = r, this.input.setAttribute("aria-valuenow", r), this.input.setAttribute("aria-valuetext", `${r} ${this.unit}`), this.value = r, this.setVisualValue(), this.dispatchEvent(new Event("input")), this.dispatchEvent(new Event("change")) } setVisualValue() { const { min: t, max: e } = this.getAllNumbers(), i = (this.input.value - t) / (e - t) * 100; this.rangeLowerEl.style.width = i + "%", this.rangeValEl.innerText = this.unit ? `${this.value} ${this.unit}` : this.value; let s = i * this.rangeValEl.offsetWidth / 100; this.rangeValEl.style.left = `calc( ${i}% - ${s}px )`; const a = getComputedStyle(this); s = i * parseInt(a.getPropertyValue("--cursor-width")) / 100, this.input.style.left = `calc( ${i}% - ${s}px )` } mouseClick(t) { const { min: e, max: i } = this.getAllNumbers(), s = this.railEl.getBoundingClientRect(), a = t.pageX - s.left, n = Math.round(a / s.width * 100) / 100 * (i - e) + e; this.setValue(n), this.input.focus(), is(t) } mouseDown(t) { document.addEventListener("mousemove", this.mouseMove), document.addEventListener("mouseup", this.mouseUp), this.input.focus(), is(t) } mouseUp(t) { document.removeEventListener("mousemove", this.mouseMove), document.removeEventListener("mouseup", this.mouseUp), is(t) } mouseMove(t) { this.mouseClick(t) } keyEvent(t) { const { min: e, max: i, value: s, step: a } = this.getAllNumbers(); switch (t.which) { case 34: this.setValue(s - 2 * a), is(t); break; case 33: this.setValue(s + 2 * a), is(t); break; case 37: case 40: case 109: case 54: this.setValue(s - a), is(t); break; case 39: case 38: case 107: case 187: this.setValue(s + a), is(t); break; case 35: this.setValue(i), is(t); break; case 36: this.setValue(e), is(t) } } } const is = t => { t.preventDefault(), t.stopPropagation() }, ss = document.createElement("template"); ss.innerHTML = '\n<div style="display:none;" id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-wrap">\n  <input aria-labelledby="a11ylabel" type="text" class="c-input c-input-w-r-icon c-input-search js-delegate-focus">\n  <ux-btn lib-title="Lancer la recherche" model="nostyle"><ux-svg class="m-icon" lib-size="sm"></ux-svg></ux-btn>\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<slot aria-hidden="true" class="c-input-error" style="display:none;" name="error"></slot>\n'; class as extends (Di($(qi))) { template() { return ss } constructor() { super(), this.deprecated = !0 } } const ns = document.createElement("template"); ns.innerHTML = '\n<div style="display:none;" id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-wrap">\n  <input aria-labelledby="a11ylabel" type="tel" class="c-input c-input-tel c-input-w-r-icon js-delegate-focus"><ux-svg class="c-input-tel--svg" lib-size="sm"></ux-svg>\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<slot aria-hidden="true" class="c-input-error" style="display:none;" name="error"></slot>\n'; class rs extends qi { template() { return ns } constructor() { super(), this.deprecated = !0 } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "value" === t && (this.formItSelf ? this.formItSelf = !1 : this.setValue(this.value)) } setValue(t) { this.formItSelf = !0, null != t ? "tel" === this.input.type ? this._setValueForTel(t) : (this.input.value = t, this.value = t) : this.clearInput() } _setValueForTel(t) { let e = ""; e = t.replace(/[^0-9]/g, ""), e = e.substring(0, 19), e = e.replace(/(\d{2})/g, "$1 ").replace(/(^\s+|\s+$)/, ""), this.input.value = e } } const os = document.createElement("template"); os.innerHTML = '\n<div id="a11ylabel" class="visually-hidden"></div>\n<div class="c-input-wrap">\n  <input aria-labelledby="a11ylabel" type="text" class="c-input c-input-text js-delegate-focus">\n</div>\n<div style="display:none;" id="a11yerror" class="visually-hidden"></div>\n<div aria-hidden="true" class="c-input-error" style="display:none;">\n    <slot name="error"></slot>\n</div>\n'; class ls extends (Di(qi)) { template() { return os } constructor() { super(), this.deprecated = !0 } } let cs = 0; const ds = document.createElement("template"), us = '<label class="c-label js-container"><slot></slot></label>'; ds.innerHTML = us; class hs extends (j(pt(A))) { static get properties() { return { for: { type: "string" }, disabled: { type: "boolean" }, state: { type: "string" }, visuallyHidden: { type: "boolean" } } } template() { const t = this.getAttribute("tag"); if (t) { const e = document.createElement("template"); return e.innerHTML = us.replace(/<label/, `<${t}`).replace(/<\/label>/, `</${t}>`), e } return ds } constructor() { super(), this.deprecated = !0, this._updateLabel = this._updateLabel.bind(this), this._onClick = this._onClick.bind(this), this.slotChange(this._slots.default, this._updateLabel) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.addEventListener("click", this._onClick), this._updateLabel() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("click", this._onClick) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "for": this.setBooleanClass(this.for, "c-label--clickable"); break; case "disabled": this.setBooleanClass(this.disabled, "c-label--disabled"); break; case "state": this.container.className = this.container.className.replace(/c-label-state--\w*/g, ""), this.container.classList.add("c-label-state--" + this.state); break; case "visually-hidden": this.setBooleanClass(this.visuallyHidden, "visually-hidden") } } _updateLabel() { Promise.resolve().then((() => { this.id || (this.id = `ux-label-generated-${cs}`, cs++); const t = this._currentLabelTarget(), e = this._findTarget(); e && t !== e && (t && t.removeAttribute("aria-labelledby"), e.setAttribute("aria-labelledby", this.id)) })) } _currentLabelTarget() { return document.querySelector(`[aria-labelledby="${this.id}"]`) } _findTarget() { if (this.for) return document.getElementById(this.for); const t = this._slots.default.assignedNodes({ flatten: !0 }).filter((t => t.nodeType !== Node.TEXT_NODE)); return t.find((t => t.hasAttribute("ux-label-target"))) || t[0] } _onClick(t) { const e = this._currentLabelTarget(); e && t.target !== e && (e.hasAttribute("tabindex") || e.setAttribute("tabindex", 0), e.focus(), e.click()) } } const ps = document.createElement("template"); ps.innerHTML = '\n<slot></slot>\n<div class="c-radio--more">\n  <slot name="more" aria-hidden="true"></slot>\n</div>\n'; class bs extends A { static get properties() { return { value: { type: "string" }, checked: { type: "boolean" } } } template() { return ps } constructor() { super(), this.deprecated = !0 } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "checked" === t && this.setOrRemoveAttr("aria-checked", this.checked, null, !0)) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "radio"), this.hasAttribute("tabindex") || this.setAttribute("tabindex", -1), this.addEventListener("change", this.setChecked) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("change", this.setChecked) } setChecked(t) { this.checked = !u(t.target.checked), this.dispatchEvent(new Event("change")) } } const ms = n`
  .c-grid {
    display: grid;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([internal-borders]:not([internal-borders='false'])) ::slotted([border-right]) {
      border-right: 1px solid var(--color-secondary-light);
      padding-right: 15px;
    }

    :host([internal-borders]:not([internal-borders='false'])) ::slotted([border-left]) {
      border-left: 1px solid var(--color-secondary-light);
    }

    :host([internal-borders]:not([internal-borders='false'])) ::slotted([border-top]) {
      border-top: 1px solid var(--color-secondary-light);
    }

    :host([internal-borders]:not([internal-borders='false'])) ::slotted([border-bottom]) {
      border-bottom: 1px solid var(--color-secondary-light);
    }
  }

  /* align-items */
  :host([align-items='start']) .c-grid {
    align-items: start;
  }

  :host([align-items='end']) .c-grid {
    align-items: end;
  }

  :host([align-items='center']) .c-grid {
    align-items: center;
  }

  :host([columns]:not([columns='false'])) .c-grid {
    grid-template-columns: var(--templates-columns);
    grid-template-rows: auto;
  }

  /* gap */
  :host([gap]:not([gap='false'])) .c-grid {
    grid-gap: var(--gap-size);
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([columns]:not([columns='false'])) .c-grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
`, gs = document.createElement("template"); gs.innerHTML = '<div class="js-container c-grid" part="ux-grid"></div>'; class vs extends (T(A)) { static get properties() { return { columns: { type: "string" }, gap: { type: "string" } } } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "columns": this.setColumns(i); break; case "gap": this.setGap() } } setColumns(t) { const e = t.split("-"), i = e.length; if (i < 2) this.container.innerHTML = "Attention ! Ne pas utiliser ux-grid pour une seule colonne."; else if (i > 6) this.container.innerHTML = "Attention ! Ux-grid ne supporte que 6 colonnes !"; else { let t = ""; this.container.innerHTML = ""; for (let s = 1; s <= i; s++)this.container.innerHTML += `<slot name="${s}"></slot>`, t += `minmax(0, ${e[s - 1]}fr) `; this.container.style.setProperty("--templates-columns", t.trim()), this.container.innerHTML += "<slot></slot>" } } setGap() { this.setBooleanStyleProp(this.gap, "--gap-size", `var(--spacing-${this.gap})`) } template() { return gs } } const fs = document.createElement("template"); fs.innerHTML = '\n<div class="c-radio-grid">\n  <div class="js-container c-grid"></div>\n</div>'; class xs extends vs { static get properties() { return { ...super.properties, value: { type: "string" }, checked: { type: "boolean" } } } template() { return fs } constructor() { super(), this.deprecated = !0, this.radioBtn = this.$.querySelector(".c-radio-grid") } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "checked" === t && this.setBooleanClass(this.checked, "c-radio-grid--checked", this.radioBtn) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "radio"), this.hasAttribute("tabindex") || this.setAttribute("tabindex", -1) } } const ys = document.createElement("template"); ys.innerHTML = '\n<div class="c-radio-group--error">\n  <slot name="error"></slot>\n</div>\n<div class="js-container c-radio-group">\n  <slot></slot>\n</div>'; const ks = ["ux-radio-button", "ux-radio-grid"]; class ws extends (T(pt(A))) { static get properties() { return { value: { type: "string" }, segment: { type: "boolean" } } } template() { return ys } constructor() { super(), this.deprecated = !0, this._listenRadio = this._listenRadio.bind(this), this._isSegment = this._isSegment.bind(this), this._checkFirstRadioBtn = this._checkFirstRadioBtn.bind(this), this.eventHistory = {} } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "value" === t ? this.formItSelf ? this.formItSelf = !1 : this._presetItem() : "segment" === t && this._isSegment() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "radiogroup"), this.slotChange(this._slots.default, this._listenRadio), this.addEventListener("keydown", this._onKeyDown), this._listenRadio(), this._checkFirstRadioBtn(), this.slotChange(this._slots.default, this._checkFirstRadioBtn), this.slotChange(this._slots.default, this._isSegment) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("keydown", this._onKeyDown) } _onKeyDown(t) { let e = !1; if ("UX-RADIO-BUTTON" === document.activeElement.tagName) { switch (t.keyCode) { case 38: case 37: this._setCheckedToPrevButton(), e = !0; break; case 40: case 39: this._setCheckedToNextButton(), e = !0; break; case 36: this._setChecked(this.firstRadioButton), e = !0; break; case 35: this._setChecked(this.lastRadioButton), e = !0; break; case 32: ks.includes(t.target.tagName.toLowerCase()) && this._setChecked(t.target), e = !0 }e && (t.preventDefault(), t.stopPropagation()) } } get checkedRadioButton() { return this.querySelector('[checked]:not([checked="false"])') } get firstRadioButton() { return this.querySelector('[role="radio"]:first-of-type') } get lastRadioButton() { return this.querySelector('[role="radio"]:last-of-type') } _prevRadioButton(t) { let e = t.previousElementSibling; for (; e;) { if ("radio" === e.getAttribute("role")) return e; e = e.previousElementSibling } return null } _nextRadioButton(t) { let e = t.nextElementSibling; for (; e;) { if ("radio" === e.getAttribute("role")) return e; e = e.nextElementSibling } return null } _setCheckedToPrevButton() { const t = this.checkedRadioButton; t && t !== this.firstRadioButton ? this._setChecked(this._prevRadioButton(t)) : this._setChecked(this.lastRadioButton) } _setCheckedToNextButton() { const t = this.checkedRadioButton; t && t !== this.lastRadioButton ? this._setChecked(this._nextRadioButton(t)) : this._setChecked(this.firstRadioButton) } _setChecked(t, e = !0) { this.value !== t.value && (this.formItSelf = !0), this._uncheckAll(), this._checkNode(t), e && t.focus(), this._setValue(), this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value }, bubbles: !0 })) } _uncheckAll() { [...this.querySelectorAll('[role="radio"]')].forEach((t => { t.setAttribute("checked", "false"), t.setAttribute("tabindex", "-1") })) } _checkNode(t) { t.setAttribute("checked", "true"), t.setAttribute("tabindex", "0") } _setValue() { this.value = this.checkedRadioButton.value } _listenRadio() { [...this.querySelectorAll(ks)].forEach((t => { this.eventHistory[t] && t.removeEventListener("click", this.eventHistory[t]), this.eventHistory[t] = () => this._setChecked(t), t.addEventListener("click", this.eventHistory[t]) })) } _presetItem() { [...this.querySelectorAll(ks)].forEach((t => { this.value && t.value === this.value && this._setChecked(t, !1) })), this.value || this._uncheckAll() } _checkFirstRadioBtn() { const t = this.checkedRadioButton; if (t) this._setChecked(t, !1), this._presetItem(); else { const t = this.querySelector(ks); t ? (this._presetItem(), t.setAttribute("tabindex", 0)) : this._presetItem() } } _isSegment() { this.segment && this._slots.default.assignedElements().length < 5 && !this._containsRadioGrid() ? (this.container.classList.add("c-radio-group--segment"), this._slots.default.assignedElements().forEach((t => { t.classList.add("no-style") })), this.spaceV = null) : this.container.classList.remove("c-radio-group--segment") } _containsRadioGrid() { for (const t of this._slots.default.assignedElements()) if ("UX-RADIO-GRID" === t.nodeName) return !0; return !1 } } const Cs = n`
  :host(:not([disabled='false'])[disabled]) .c-select {
    cursor: not-allowed;
  }
`, _s = document.createElement("template"); _s.innerHTML = '\n<div id="a11ylabel" class="visually-hidden"></div>\n<select aria-labelledby="a11ylabel" id="select" class="c-select">\n</select>\n<div class="c-select-error-msg">\n  <slot name="error"></slot>\n</div>\n<slot style="display:none" class="c-select-option"></slot>\n'; class Es extends (j(pt(A))) { static get properties() { return { required: { type: "boolean" }, state: { type: "string", defaultValue: "empty" }, disabled: { type: "boolean" }, value: { type: "string" } } } template() { return _s } constructor() { super(), this.selectEl = this.$.querySelector(".c-select"), this.a11yLabelEl = this.$.querySelector("#a11ylabel"), this.moveAndInitOption = this.moveAndInitOption.bind(this), this._handleChange = this._handleChange.bind(this), this.valueWhenDisabled = "", this.placeholder = "", this.slotChange(this.$.querySelector(".c-select-option"), this.moveAndInitOption) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.selectEl.addEventListener("input", (() => { this.value = this.selectEl.value, this.dispatchEvent(new Event("change", { bubbles: !0 })) })), this.moveAndInitOption(), this.setPlaceholder(), this.setLabel() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.selectEl.removeEventListener("change", this._handleChange) } moveAndInitOption() { this.selectEl.innerHTML = "", [...this.children].forEach((t => { this.selectEl.appendChild(t.cloneNode(!0)) })), this.value && (this.selectEl.value = this.value), [...this.$.querySelectorAll("option")].some((t => !!t.hasAttribute("data-placeholder") && (this.placeholder = t.value, t.disabled = !0, !0))) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "state": this.setState(); break; case "disabled": this.disableSelect(); break; case "value": this.selectEl.value = i, this.setPlaceholder(); break; case "required": this.selectEl.required = this.required } } disableSelect() { this.setOrRemoveAttr("aria-disabled", this.disabled, this.selectEl), this.disabled ? (this.valueWhenDisabled = this.value, this.selectEl.addEventListener("change", this._handleChange)) : this.selectEl.removeEventListener("change", this._handleChange) } _handleChange(t) { this.value = this.valueWhenDisabled, t.preventDefault() } setState() { this.selectEl.classList.remove("c-select-success", "c-select-error", "c-select-empty"), this.selectEl.classList.add(`c-select-${this.state}`); const t = this.$.querySelector(".c-select-error-msg"); "error" === this.state ? t.style.display = "block" : t.style.display = "none" } get labels() { return [...document.querySelectorAll(`[for="${this.id}"]`)] } setLabel() { const t = this.labels.reduce(((t, e) => t + e.innerHTML), ""); this.a11yLabelEl && (this.a11yLabelEl.innerHTML = t) } setPlaceholder() { this.setBooleanClass(this.selectEl.value === this.placeholder, "c-select--placeholder", this.selectEl) } } const Ls = document.createElement("template"); Ls.innerHTML = '\n<div class="js-container c-editable-field" part="ux-editable-field">\n  <div class="c-editable-field--items">\n    <slot name="label"></slot>\n    <slot name="content"></slot>\n  </div>\n  <div class="c-editable-field--link">\n    <slot name="link"></slot>\n  </div>\n</div>\n<div class="c-editable-field--error" id="error">\n  <slot class="c-editable-field--slot-error" name="error"></slot>\n</div>'; class As extends A { static get properties() { return { state: { type: "string" } } } template() { return Ls } constructor() { super(), this.editableEl = this.$.querySelector(".c-editable-field"), this.errorEl = this.$.querySelector(".c-editable-field--error"), this.tmpEl = document.createElement("template"), this.createStatusIconEl() } createStatusIconEl() { this.statusIconEl = document.createElement("ux-svg"), this.statusIconEl.classList.add("c-label-icon"), this.statusIconEl.libSize = this.iconSize, this.statusIconEl.classList.add("c-editable-field--icon") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setState() } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "state" === t && this.setState()) } setState() { switch (this.state) { case "valid": this.setValidState(); break; case "error": this.setErrorState(); break; default: this.setNoState() } } setValidState() { this.tmpEl.content.appendChild(this.errorEl), this.editableEl.classList.remove("error"), this.editableEl.classList.add("valid"), this.editableEl.removeAttribute("aria-describedby"), this.labelIcon && (this.editableEl.prepend(this.statusIconEl), this.statusIconEl.icon = this.iconSuccess, this.statusIconEl.libColor = "var(--color-success)") } setErrorState() { this.editableEl.setAttribute("aria-describedby", "error"), this.editableEl.parentNode.insertBefore(this.errorEl, this.editableEl.nextSibling), this.editableEl.classList.remove("valid"), this.editableEl.classList.add("error"), this.labelIcon && (this.editableEl.prepend(this.statusIconEl), this.statusIconEl.icon = this.iconError, this.statusIconEl.libColor = "var(--color-error)") } setNoState() { this.editableEl.removeAttribute("aria-describedby"), this.tmpEl.content.appendChild(this.errorEl), this.editableEl.classList.remove("valid", "error"), this.statusIconEl && this.tmpEl.appendChild(this.statusIconEl) } } const Ss = document.createElement("template"); Ss.innerHTML = '\n  <div class="c-filter-group js-container" role="group" aria-labelledby="group-legend">\n    <div class="c-filter-group--title" id="group-legend">\n      <slot name="title"></slot>\n    </div>\n    <div class="c-filter-group--filter">\n      <slot></slot>\n    </div>\n  </div>'; class Ts extends A { template() { return Ss } } const $s = document.createElement("template"); $s.innerHTML = '\n  <div class="c-filter js-container" part="ux-filter">\n    <input type="checkbox" id="checkbox" class="visually-hidden m-a11y-label"></input>\n    <label for="checkbox">\n      <slot></slot>\n    </label>\n  </div>'; class Is extends (j(Ct(A))) { static get properties() { return { checked: { type: "boolean" } } } template() { return $s } constructor() { super(), this.input = this.$.querySelector("input"), this.setChecked = this.setChecked.bind(this) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "checked" === t && this.checked !== this.input.checked && (this.input.checked = this.checked)) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.input.checked = this.checked, this.input.addEventListener("change", this.setChecked) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("change", this.setChecked) } setChecked() { this.checked !== this.input.checked && (this.checked = this.input.checked), this.dispatchEvent(new Event("change")) } } const Ms = document.createElement("template"); Ms.innerHTML = '<form class="js-container"><slot></slot></form>'; class Bs extends (T(A)) { static get properties() { return { autocompleteOff: { type: "boolean", deprecated: !0 }, novalidate: { type: "boolean", deprecated: !0 } } } template() { return Ms } attributeChangedCallback(t, e, i) { if (e !== i && this.container) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "autocomplete-off": this.autocompleteOff ? this.container.setAttribute("autocomplete", "off") : this.container.removeAttribute("autocomplete"); break; case "novalidate": this.novalidate ? this.container.setAttribute("novalidate", "") : this.container.removeAttribute("novalidate") } } } const qs = n`
  :host([disabled]:not([disabled='false'])) .c-input,
  :host([disabled]:not([disabled='false'])) .c-input-btn {
    cursor: not-allowed;
  }
`; let zs = 0; class Ns extends (wt(X(j($(A))))) { static get properties() { return { required: { type: "boolean" }, autocomplete: { type: "string" }, placeholder: { type: "string" }, readonly: { type: "boolean" }, disabled: { type: "boolean" }, nopaste: { type: "boolean" }, value: { type: "string" }, erase: { type: "boolean" }, name: { type: "string" }, pattern: { type: "string" }, authorizedChar: { type: "string" }, inputmode: { type: "string" } } } constructor() { super(), this.input = this.$.querySelector(".c-input"), this.wrapEl = this.$.querySelector(".c-input-wrap, .c-input-wrap-nostyle"), this.setValueListener = this.setValueListener.bind(this), this.clearInput = this.clearInput.bind(this), this.isInit = !1, this.tmpEl = document.createElement("template"), this.createEraseEl(), this.createFocusBackEl() } createEraseEl() { this.eraseEl = document.createElement("button"), this.eraseEl.classList.add("c-input-btn", "c-input-erase", "m-btn-no-style"), this.eraseEl.title = "Effacer le champ", this.eraseEl.innerHTML = '<span class="visually-hidden">Effacer le champ</span><ux-svg class="c-input-erase--icon" lib-size="sm"></ux-svg>', this.eraseEl.addEventListener("click", this.clearInput) } createFocusBackEl() { this.focusBackEl = document.createElement("div"), this.focusBackEl.classList.add("visually-hidden"), this.focusBackEl.setAttribute("tabindex", "-1") } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "required": this.setOrRemoveAttr("required", this.required, this.input); break; case "readonly": this.setReadonly(); break; case "disabled": this.setDisabled(); break; case "placeholder": this.setOrRemoveAttr("placeholder", this.placeholder, this.input); break; case "nopaste": this.setNoPaste(); break; case "value": this.fromItSelf ? this.fromItSelf = !1 : this.disabled && this.isInit ? (this.fromItSelf = !0, this.value = e) : this.authorizedMatch(this.value) ? this.setValueBase("") : this.setValue(this.value); break; case "autocomplete": this.setAutocomplete(); break; case "erase": this.setErase(); break; case "name": this.setOrRemoveAttr("name", this.name, this.input); break; case "pattern": this.setOrRemoveAttr("pattern", this.pattern, this.input); break; case "authorized-char": this.setAuthorizedChar(); break; case "inputmode": this.setOrRemoveAttr("inputmode", this.inputmode, this.input) } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.isInit = !0, this.input.addEventListener("input", this.setValueListener), this.setNoPaste() } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("input", this.setValueListener), this.input.removeEventListener("paste", this.preventPaste) } setReadonly() { (["textarea"].includes(this.input.tagName.toLowerCase()) || ["date", "datetime-local", "email", "month", "number", "password", "search", "tel", "text", "time", "url", "week"].includes(this.input.type)) && (this.setOrRemoveAttr("readonly", this.readonly, this.input), this.eraseEl && this.setOrRemoveAttr("disabled", this.readonly, this.eraseEl)) } setDisabled() { this.eraseEl && this.setOrRemoveAttr("disabled", this.disabled, this.eraseEl), this.input.disabled = !!this.disabled || "" } setNoPaste() { this.nopaste ? this.input.addEventListener("paste", this.preventPaste) : this.input.removeEventListener("paste", this.preventPaste) } setAutocomplete() { (["textarea"].includes(this.input.tagName.toLowerCase()) || ["color", "date", "datetime-local", "email", "hidden", "month", "number", "password", "range", "search", "tel", "text", "time", "url", "week"].includes(this.input.type)) && this.setOrRemoveAttr("autocomplete", this.autocomplete, this.input) } preventPaste(t) { t.preventDefault() } setValueListener(t) { t && (t.stopPropagation(), t.preventDefault()), this.authorizedMatch(this.input.value) ? (this.fromItSelf = !0, this.setValueBase(this.value)) : (this.setValue(t.target.value), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input"))) } setValueBase(t) { this.input.value = t, this.value = t } setValue(t) { this.value !== t && (this.fromItSelf = !0), this.setValueBase(t), this.setErase() } setErase() { if (this.erase && 0 !== this.input.value.length) { this.hasAttribute("id") || (zs++, this.id = `ux-input-${zs}`), this.wrapEl.classList.add("c-input-w-erase"), this.input.parentNode.insertBefore(this.eraseEl, this.input.nextSibling); const t = this.$.querySelector(".c-input-erase--icon"); t && (t.icon = this.iconErase) } else this.wrapEl.classList.remove("c-input-w-erase"), this.tmpEl.appendChild(this.eraseEl) } clearInput(t) { t && (t.stopPropagation(), t.preventDefault()), this.input.classList.add("c-input-noval"), this.setValueBase(""), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input")), null != this.parentElement && this.parentElement.isConnected && (this.parentElement.insertBefore(this.focusBackEl, this), this.focusBackEl.focus(), setTimeout((() => { this.focus(), this.tmpEl.appendChild(this.focusBackEl) }), 100)) } authorizedMatch(t) { const e = new RegExp(this.authorizedChar); return this.authorizedChar && !e.test(t) } setAuthorizedChar() { const t = new RegExp(this.authorizedChar); !this.authorizedChar || t.test(this.input.value) && t.test(this.value) || this.setValueBase("") } get validity() { return this.input.validity } } function Hs(t) { return class extends t { static get properties() { return { labelIcon: { type: "boolean" }, state: { type: "string", defaultValue: "empty" } } } constructor() { super(), this.createLabelIconEl(), this.createTmpErrorEl() } createLabelIconEl() { this.labelIconEl = document.createElement("ux-svg"), this.labelIconEl.classList.add("c-label-icon") } createTmpErrorEl() { this.tmpErrorEl = document.createElement("span"), this.tmpErrorEl.classList.add("m-no-error"), this.tmpErrorEl.setAttribute("aria-hidden", "true") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setState() } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "state" !== t && "label-icon" !== t || this.setState()) } setState() { switch (this.state) { case "valid": this.setValidState(); break; case "error": this.setErrorState(); break; case "empty": this.setEmptyState(); break; default: this.setNoState() } } insertErrorEl() { this.$.querySelector(".m-no-error") && this.tmpErrorEl.replaceWith(this.errorEl) } removeErrorEl() { this.$.querySelector(".c-input-error") && this.errorEl.replaceWith(this.tmpErrorEl) } } } function js(t) { class e extends (Hs(t)) { constructor() { super(), this.errorEl = this.$.querySelector(".c-input-error"), this.wrapEl = this.$.querySelector(".c-input-wrap, .c-input-wrap-nostyle"), this.labelEl = this.$.querySelector(".c-label"), this.tmpEl = document.createElement("template") } createLabelIconEl() { this.labelIconEl = document.createElement("ux-svg"), this.labelIconEl.classList.add("c-label-icon") } setValidState() { this.removeErrorEl(), this.input.classList.remove("error", "empty"), this.wrapEl.classList.remove("error", "empty"), this.labelEl.classList.remove("error", "empty"), this.input.classList.add("valid"), this.wrapEl.classList.add("valid"), this.labelEl.classList.add("valid"), this.input.removeAttribute("aria-describedby"), this.labelIcon && (this.labelEl.querySelector("slot").insertAdjacentElement("afterend", this.labelIconEl), this.labelIconEl.icon = this.iconSuccess, this.labelIconEl.libColor = "var(--color-success)", this.labelIconEl.libSize = "sm") } setErrorState() { this.input.setAttribute("aria-describedby", "error"), this.insertErrorEl(), this.input.classList.remove("valid", "empty"), this.wrapEl.classList.remove("valid", "empty"), this.labelEl.classList.remove("valid", "empty"), this.input.classList.add("error"), this.wrapEl.classList.add("error"), this.labelEl.classList.add("error"), this.labelIcon && (this.labelEl.querySelector("slot").insertAdjacentElement("afterend", this.labelIconEl), this.labelIconEl.icon = this.iconError, this.labelIconEl.libColor = "var(--color-error)", this.labelIconEl.libSize = "sm") } setEmptyState() { this.input.removeAttribute("aria-describedby"), this.removeErrorEl(), this.input.classList.remove("valid", "error"), this.wrapEl.classList.remove("valid", "error"), this.labelEl.classList.remove("valid", "error"), this.input.classList.add("empty"), this.wrapEl.classList.add("empty"), this.labelEl.classList.add("empty"), this.labelIconEl && this.tmpEl.appendChild(this.labelIconEl) } setNoState() { this.input.removeAttribute("aria-describedby"), this.removeErrorEl(), this.input.classList.remove("valid", "error", "empty"), this.wrapEl.classList.remove("valid", "error", "empty"), this.labelEl.classList.remove("valid", "error", "empty"), this.labelIconEl && this.tmpEl.appendChild(this.labelIconEl) } } return e } const Rs = document.createElement("template"); Rs.innerHTML = '\n<label class="c-label" for="input"><slot name="label"></slot></label>\n<div class="c-input-wrap"> \n  <input inputmode="decimal" class="c-input c-input-number js-delegate-focus" id="input" autocomplete="off" type="text" part="ux-input-a11y-number__input">\n  <slot name="right"></slot>\n</div>\n<div class="c-input-error" id="error">\n  <slot class="c-input-slot-error" name="error"></slot>\n</div>\n'; class Os extends (js(Ns)) { static get properties() { return { ...super.properties, round: { type: "number" }, noFormat: { type: "boolean" } } } template() { return Rs } constructor() { super(), this.formatterOptions = {}, this.onKeyDown = this.onKeyDown.bind(this), this.numberParser = this.numberParser.bind(this), this.setValueBase = this.setValueBase.bind(this), this.setRound = this.setRound.bind(this) } connectedCallback() { this.setRound(), super.connectedCallback && super.connectedCallback(), this.input.addEventListener("keydown", this.onKeyDown) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("keydown", this.onKeyDown) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "round" === t && this.setRound()) } setRound() { parseInt(this.round) < 0 && (this.round = null), null != this.round ? ("" === this.getAttribute("round") && (this.round = 0), this.formatterOptions = { minimumFractionDigits: this.round, maximumFractionDigits: this.round }) : this.formatterOptions = {}, this.setValueBase(this.value) } onKeyDown(t) { 46 === t.keyCode ? "," === this.input.value[this.input.selectionStart] && "," !== this.input.value[this.input.value.length - 1] && (t.preventDefault(), this.setSelection(this.input.selectionStart + 1)) : 8 === t.keyCode && "," === this.input.value[this.input.selectionStart - 1] && "," !== this.input.value[this.input.value.length - 1] && (t.preventDefault(), this.setSelection(this.input.selectionStart - 1)) } setValueBase(t) { if (!t) return void (this.input.value = this.value = ""); const e = this.input.selectionStart; let i = t.replace(/[^-+\d\s.,]/g, ""); if (this.noFormat) this.input.value = this.value = i, this.setSelection(e); else { i = t.replace(/\./g, ",").trimStart(); const s = this.numberParser(i); this.input.value = s, "" === s && (this.value = s), this.setSelection(e); const a = this.input.selectionStart, n = parseFloat(this.removeLocale(this.input.value)); if (!isNaN(n)) { this.value = this.round ? Number(n.toFixed(this.round)) : n; const t = (this.input.value.match(/\s/g) || []).length; "," !== this.input.value[this.input.value.length - 1] && (this.input.value = n.toLocaleString("fr-FR", this.formatterOptions).replace(/\s/g, " ")); const e = (this.input.value.match(/\s/g) || []).length; this.setSelection(a + (e - t)) } } } removeLocale(t) { return t.replace(/\s/g, "").replace(/,/g, ".") } setSelection(t) { this.input.selectionStart = t, this.input.selectionEnd = this.input.selectionStart } numberParser(t) { const e = this; let i = 0, s = "", a = function (t) { switch (!0) { case /[-+]/.test(t): return n(t), r; case /[0-9]/.test(t): return r(t) }return null }; function n(t) { s += t } function r(t) { return "0" === t ? (n(t), l) : /[1-9]/.test(t) ? (n(t), o) : null } function o(t) { return "," === t ? l(t) : /[\s0-9]/.test(t) ? (n(t), o) : null } function l(t) { return "," === t && (null === e.round || parseInt(e.round) > 0) ? (n(t), c) : null } function c(t) { return /[0-9]/.test(t) ? (n(t), i++, c) : null } let d = 0; for (; null != a && d < t.length;)a = a(t[d]), d++; return null != this.round ? this.formatterOptions = { minimumFractionDigits: this.round, maximumFractionDigits: this.round } : this.formatterOptions = i > 0 ? { minimumFractionDigits: i, maximumFractionDigits: i } : {}, s } } const Ps = document.createElement("template"); Ps.innerHTML = '\n<label class="c-label" for="input"><slot name="label"></slot><span id="a11y-el" class="visually-hidden"></span></label>\n<div class="c-input-wrap js-container">\n  <input inputmode="decimal" class="c-input c-input-amount js-delegate-focus" id="input" autocomplete="off" type="text" part="ux-input-a11y-amount__input">\n  <span class="c-input-btn c-input-amount--txt" aria-hidden="true">€</span>\n  <slot name="right"></slot>\n</div>\n<div class="c-input-error" id="error">\n  <slot class="c-input-slot-error" name="error"></slot>\n</div>\n'; const Ds = { NUMS: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], DECIMAL: [110, 188, 190] }; class Vs extends Os { static get properties() { return { ...super.properties, currency: { type: "string", defaultValue: "euro" }, minlength: { type: "number" }, maxlength: { type: "number" } } } constructor() { super(), this.inputTxt = this.$.querySelector(".c-input-amount--txt"), this.a11yEl = this.$.querySelector("#a11y-el") } connectedCallback() { this.getAttribute("round") || (this.round = 2), super.connectedCallback && super.connectedCallback(), this.setCurrency(this.currency) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "currency": this.setCurrency(this.currency); break; case "minlength": case "maxlength": if (this[t]) { const e = this.getLengthWithSpacesAndComma(this[t]); this.input.setAttribute(t, e.toString()) } else this.input.removeAttribute(t) } } template() { return Ps } setCurrency(t) { switch (t.toLowerCase()) { case "euro": case "eur": this.inputTxt.innerHTML = "€"; break; case "usd": this.inputTxt.innerHTML = "$"; break; default: this.inputTxt.innerHTML = this.currency }"euro" === t.toLowerCase() || "eur" === t.toLowerCase() ? (this.a11yEl.innerHTML = " (valeur en euro)", this.inputTxt.setAttribute("data-currency", "eur")) : (this.a11yEl.innerHTML = ` (valeur en ${this.currency})`, this.inputTxt.setAttribute("data-currency", this.currency)) } getLengthWithSpacesAndComma(t) { const e = this.round > 0 ? 1 : 0; return t + e + Math.floor((t - this.round - e) / 3) } onKeyDown(t) { if (super.onKeyDown(t), this.input.value.length === this.input.maxLength) if (Ds.NUMS.includes(t.keyCode)) { if (" " === this.input.value[this.input.selectionStart]) { t.preventDefault(); const e = this.input.value.substr(0, this.input.selectionStart + 1) + t.key + this.input.value.substr(this.input.selectionStart + 2); this.setValueBase(e), this.setSelection(this.input.selectionStart + 2) } else if ("," !== this.input.value[this.input.selectionStart] && this.input.selectionStart !== this.input.value.length) { t.preventDefault(); const e = this.input.value.substr(0, this.input.selectionStart) + t.key + this.input.value.substr(this.input.selectionStart + 1); this.setValueBase(e), this.setSelection(this.input.selectionStart + 1) } } else Ds.DECIMAL.includes(t.keyCode) && "," === this.input.value[this.input.selectionStart] && (t.preventDefault(), this.setSelection(this.input.selectionStart + 1)) } } function Us(t) { class e extends (Hs(t)) { constructor() { super(), this.tmpEl = document.createElement("template"), this.labelEl = this.$.querySelector(".c-group-legend"), this.wrapEl = this.$.querySelector("#wrapel"), this.errorEl = this.$.querySelector(".c-input-error") } setValidState() { this.removeErrorEl(), "group" === this.wrapEl.getAttribute("role") ? this.wrapEl.setAttribute("aria-labelledby", "group-legend") : this.wrapEl.removeAttribute("aria-describedby"), this.labelIcon && (this.labelEl.appendChild(this.labelIconEl), this.labelIconEl.icon = this.iconSuccess, this.labelIconEl.libColor = "var(--color-success)", this.labelIconEl.libSize = "sm") } setErrorState() { this.insertErrorEl(), "group" === this.wrapEl.getAttribute("role") ? this.wrapEl.setAttribute("aria-labelledby", "group-legend error") : this.wrapEl.setAttribute("aria-describedby", "error"), this.labelIcon && (this.labelEl.appendChild(this.labelIconEl), this.labelIconEl.icon = this.iconError, this.labelIconEl.libColor = "var(--color-error)", this.labelIconEl.libSize = "sm") } setEmptyAndNoState() { this.removeErrorEl(), this.tmpEl.content.appendChild(this.labelIconEl), "group" === this.wrapEl.getAttribute("role") ? this.wrapEl.setAttribute("aria-labelledby", "group-legend") : this.wrapEl.removeAttribute("aria-describedby") } setEmptyState() { this.setEmptyAndNoState() } setNoState() { this.setEmptyAndNoState() } } return e } const Fs = document.createElement("template"); Fs.innerHTML = '\n<div id="group-legend" class="c-checkbox-group--legend c-group-legend">\n  <slot name="group-legend"></slot>\n</div>\n<div id="error" class="c-input-error">\n  <slot name="error"></slot>\n</div>\n<div>\n  <slot name="group-header"></slot>\n</div>\n<div id="wrapel" role="group" aria-labelledby="group-legend" class="c-checkbox-group js-container">\n    <div id="wraplist" role="list">\n      <slot></slot>\n    </div>\n</div>\n<div>\n  <slot name="group-footer"></slot>\n</div>\n'; class Ws extends (Us(T(pt(A)))) { static get properties() { return { value: { type: "string" }, disabled: { type: "boolean" }, required: { type: "boolean" }, boxAlign: { type: "string", defaultValue: "top" } } } template() { return Fs } constructor() { super(), this.wrapEl = this.$.querySelector("#wrapel"), this.setValueFromCheckBox = this.setValueFromCheckBox.bind(this), this.setRoleListToCheckboxes = this.setRoleListToCheckboxes.bind(this), this.createLabelIconEl(), this.wrapEl.addEventListener("change", this.setValueFromCheckBox, !0) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.value ? this.setValue() : this.setValueFromCheckBox(), this.setRoleListToCheckboxes(), this.slotChange(this._slots.default, this.setRoleListToCheckboxes) } attributeChangedCallback(t, e, i) { switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "value": this.fromItSelf || this.setValue(); break; case "disabled": case "required": case "box-align": this.setPropToCheckbox(t) } } setPropToCheckbox(t) { this.allCheckbox.forEach((e => { e.setAttribute(t, this[l(t)]) })) } disconnectedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.wrapEl.removeEventListener("change", this.setValueFromCheckBox) } get allCheckbox() { return [...this.querySelectorAll(":scope ux-input-a11y-checkbox")].filter((t => t.closest("ux-input-a11y-checkbox-group") === this)) } setRoleListToCheckboxes() { [...this.allCheckbox].forEach((t => { t.setAttribute("role", "listitem") })) } setValueFromCheckBox() { this.fromItSelf || (this.fromItSelf = !0, this.value = this.allCheckbox.reduce(((t, e) => e.hasAttribute("checked") && "false" !== e.getAttribute("checked") ? `${t}${e.getAttribute("value")};` : t), ""), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input")), this.fromItSelf = !1) } setValue() { if (null != this.value && "" !== this.value) { this.fromItSelf = !0; const t = this.value.split(";"); this.allCheckbox.forEach((e => { e.setAttribute("checked", t.includes(e.getAttribute("value"))) })), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input")), this.fromItSelf = !1 } } } const Ks = document.createElement("template"); Ks.innerHTML = '\n<div id="error" class="c-input-error c-label">\n  <slot name="error"></slot>\n</div>\n<div id="wrap" class="c-input-wrap" aria-labelledby="label" aria-disabled="false" role="checkbox" tabindex="0" part="ux-input-a11y-checkbox">\n  <div style="display:none;" aria-hidden="true">Etat de la case à cocher : <span class="status">empty</span><span class="is-disabled"></span></div>\n  <div id="label" part="ux-input-a11y-checkbox__label">\n    <slot name="label"></slot>    \n  </div>\n</div>\n'; const Gs = document.createElement("template"); Gs.innerHTML = '\n<div id="error" class="c-input-error c-label">\n  <slot name="error"></slot>\n</div>\n<div id="wrap" class="c-input-wrap" aria-labelledby="label" aria-disabled="false" role="checkbox" tabindex="0" part="ux-input-a11y-checkbox">\n  <div style="display:none;" aria-hidden="true">Etat de la case à cocher : <span class="status">empty</span><span class="is-disabled"></span></div>\n  <div id="label" part="ux-input-a11y-checkbox__label">\n    <div class="c-checkbox__unchecked">\n      <slot name="unchecked"></slot>\n    </div>\n    <div class="c-checkbox__checked">\n      <slot name="checked"></slot>\n    </div>\n    <slot name="label"></slot>\n  </div>\n</div>\n'; class Xs extends (js(j(pt(A)))) { static get properties() { return { checked: { type: "boolean" }, disabled: { type: "boolean" }, img: { type: "boolean" }, required: { type: "boolean" }, noLabel: { type: "boolean" }, boxAlign: { type: "string", defaultValue: "top" } } } template() { return this.img ? Gs : Ks } constructor() { super(), this.input = this.$.querySelector("#wrap"), this.statusWOCssEl = this.$.querySelector(".status"), this.isDisabledWOCssEl = this.$.querySelector(".is-disabled"), this.imgChecked = this.$.querySelector(".c-checkbox__checked"), this.imgUnchecked = this.$.querySelector(".c-checkbox__unchecked"), this.setChecked = this.setChecked.bind(this), this.handleClick = this.handleClick.bind(this), this.injectTitle = this.injectTitle.bind(this), this.createLabelIconEl() } focus() { this.input.focus() } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "checked": this.setChecked(), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input")); break; case "disabled": this.setDisabled(); break; case "required": this.setOrRemoveAttr("aria-required", this.required, this.input, !0); break; case "no-label": this.setNoLabel(); break; case "img": this._changeTemplate("img", (() => { this.errorEl = this.$.querySelector(".c-input-error"), this.labelEl = this.$.querySelector(".c-label"), this.input = this.$.querySelector("#wrap"), this.imgChecked = this.$.querySelector(".c-checkbox__checked"), this.imgUnchecked = this.$.querySelector(".c-checkbox__unchecked") })), this.img && this.setChecked() } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setChecked(), this.addEventListener("click", this.handleClick), this.addEventListener("keydown", this.handleKeyDown), this.slotChange(this._slots.label, this.injectTitle) } injectTitle() { if (this.noLabel) { let t = this._slots.label.assignedNodes().map((t => t.textContent)).join(" "); this.img && this.imgChecked && this.imgUnchecked && (t += this.checked ? " (coché)" : " (non coché)"), this.input.title = t } } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("click", this.handleClick), this.removeEventListener("keydown", this.handleKeyDown) } handleClick() { this.disabled || (this.checked = !this.checked, this.input.focus()) } handleKeyDown(t) { 32 === t.keyCode && (t.preventDefault(), this.disabled || (this.checked = !this.checked)) } setChecked() { this.setOrRemoveAttr("aria-checked", this.checked, this.input, !0), this.statusWOCssEl.innerHTML = this.checked ? "✅" : "❌", this.injectTitle(), this.img && (this.setOrRemoveAttr("hidden", !this.checked, this.imgChecked), this.setOrRemoveAttr("hidden", this.checked, this.imgUnchecked)) } setDisabled() { this.isDisabledWOCssEl.innerHTML = this.disabled ? " (désactivé)" : "", this.setOrRemoveAttr("tabindex", this.disabled ? "" : "0", this.input), this.setOrRemoveAttr("aria-disabled", this.disabled, this.input, !0) } setNoLabel() { this.setBooleanClass(this.noLabel, "visually-hidden", this._slots.label), this._slots.label.style.display = this.noLabel ? "block" : "inherit" } } function Ys(t) { return class extends t { static get properties() { return { min: { type: "number" }, max: { type: "number" }, step: { type: "number" } } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.step = this.getAttribute("step") || 1 } attributeChangedCallback(t, e, i) { if (e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), ["number", "date", "range"].includes(this.input.type))) switch (t) { case "min": this.setOrRemoveAttr("min", this.min, this.input); break; case "max": this.setOrRemoveAttr("max", this.max, this.input); break; case "step": this.step < 0 && (this.step = 1), this.setOrRemoveAttr("step", this.step, this.input) } } } } const Js = document.createElement("template"); Js.innerHTML = '\n<label class="c-label" for="input"><slot name="label"></slot></label>\n<div class="c-input-wrap">\n  <input class="c-input c-input-date js-delegate-focus" id="input" type="date" part="ux-input-a11y-date__input">\n  <ux-svg class="c-input-btn c-input-icon" lib-size="md"></ux-svg>\n  <slot name="right"></slot>\n</div>\n<div class="c-input-error" id="error">\n  <slot class="c-input-slot-error" name="error"></slot>\n</div>\n'; class Zs extends (js(Ys(Ns))) { constructor() { super(), this.blurHandler = this.blurHandler.bind(this) } static get properties() { return { ...super.properties, min: { type: "string" }, max: { type: "string" } } } blurHandler() { "" === this.input.value && (this.value = "", this.dispatchEvent(new Event("input"))) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.input.addEventListener("blur", this.blurHandler) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("blur", this.blurHandler) } template() { return Js } setValueListener(t) { "" === this.input.value && this.input.validity.badInput || super.setValueListener(t) } clearInput(t) { t && (t.stopPropagation(), t.preventDefault()), this.input.classList.add("c-input-noval"), this.input.value = "", this.value = "", null != this.parentElement && this.parentElement.isConnected && (this.parentElement.insertBefore(this.focusBackEl, this), this.focusBackEl.focus(), setTimeout((() => { this.focus(), this.tmpEl.appendChild(this.focusBackEl) }), 100)) } } function Qs(t) { return class extends t { static get properties() { return { minlength: { type: "number" }, maxlength: { type: "number" } } } connectedCallback() { super.connectedCallback && super.connectedCallback() } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "minlength": case "maxlength": this.setOrRemoveAttr(t, this[t], this.input) } } } } const ta = document.createElement("template"); ta.innerHTML = '\n<label class="c-label" for="input"><slot name="label"></slot></label>\n<div class="c-input-wrap">\n  <input class="c-input c-input-email js-delegate-focus" id="input" autocomplete="off" type="email" part="ux-input-a11y-email__input">\n  <ux-svg class="c-input-btn c-input-icon" lib-size="sm"></ux-svg>\n  <slot name="right"></slot>\n</div>\n<div class="c-input-error" id="error">\n  <slot class="c-input-slot-error" name="error"></slot>\n</div>\n'; class ea extends (js(Qs(Ns))) { constructor() { super() } template() { return ta } } const ia = document.createElement("template"); ia.innerHTML = '\n  <div id="header"><slot name="header"></slot></div>\n  <div droppable class="c-input-wrap m-btn-no-style js-container">    \n    <div class="c-input-icon">\n      <slot name="icon">\n        <ux-svg icon="upload" lib-size="sm" class="c-pre-icon"></ux-svg>\n      </slot>\n    </div>\n    <label for="input" class="c-label" id="label"><slot name="label"></slot></label>\n    <input id="input" class="c-input js-delegate-focus" type="file" part="ux-input-a11y-file__input">\n    <slot name="right"></slot>\n  </div>\n  <div class="c-input-error" id="error"><slot name="error"></slot></div>\n'; class sa extends (js(Ns)) { static get properties() { return { ...super.properties, noDisplay: { type: "boolean", deprecated: !0 }, fileType: { type: "string" }, multiple: { type: "boolean" } } } template() { return ia } constructor() { super(), this.preIconEl = this.$.querySelector(".c-pre-icon"), this.setValueListener = this.setValueListener.bind(this), this._onDrop = this._onDrop.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._onDragEnter.bind(this), this._onDragExitLeave = this._onDragExitLeave.bind(this) } setValueListener() { this.dispatchEvent(new Event("change")) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.input.addEventListener("drop", this._onDrop), this.input.addEventListener("dragover", this._onDragOver), this.input.addEventListener("dragenter", this._onDragEnter), this.input.addEventListener("dragexit", this._onDragExitLeave), this.input.addEventListener("dragleave", this._onDragExitLeave), this.setPreIconEl() } setPreIconEl() { this.preIcon && (this.preIconEl.icon = this.preIcon) } deleteFiles() { this.input.value = "" } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("drop", this._onDrop), this.input.removeEventListener("dragover", this._onDragOver), this.input.removeEventListener("dragenter", this._onDragEnter), this.input.removeEventListener("dragexit", this._onDragExitLeave), this.input.removeEventListener("dragleave", this._onDragExitLeave) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "no-display": this.noDisplay ? this.input.style.display = "none" : this.input.style.display = ""; break; case "file-type": this.setOrRemoveAttr("accept", this.fileType, this.input); break; case "multiple": this.setOrRemoveAttr("multiple", this.multiple, this.input) } } _containsFile(t) { return t.find((t => "Files" === t)) } _onDragEnter(t) { this.setBooleanClass(!0, "c-input-file--dragover", this.wrapEl), this._containsFile(t.dataTransfer.types) && t.preventDefault() } _onDragOver(t) { t.dataTransfer.dropEffect = "move", this._containsFile(t.dataTransfer.types) && t.preventDefault() } _onDrop(t) { t.preventDefault(), this._containsFile(t.dataTransfer.types) && (this.input.files = t.dataTransfer.files, this.dispatchEvent(new Event("change"))), this.setBooleanClass(!1, "c-input-file--dragover", this.wrapEl) } _onDragExitLeave() { this.setBooleanClass(!1, "c-input-file--dragover", this.wrapEl) } setNormalAriaLabel() { this.input.removeAttribute("aria-describedby"), this.input.setAttribute("aria-labelledby", "label header") } setValidState() { super.setValidState(), this.setNormalAriaLabel() } setErrorState() { super.setErrorState(), this.input.removeAttribute("aria-describedby"), this.input.setAttribute("aria-labelledby", "label error header") } setEmptyState() { super.setEmptyState(), this.setNormalAriaLabel() } setNoState() { super.setNoState(), this.setNormalAriaLabel() } } const aa = "Afficher le mot de passe", na = "Masquer le mot de passe", ra = document.createElement("template"); ra.innerHTML = '\n<label class="c-label" for="input"><slot name="label"></slot></label>\n<div class="c-input-wrap">\n  <input class="c-input c-input-password js-delegate-focus" id="input" type="password" autocomplete="off" part="ux-input-a11y-password__input">\n  <slot name="right"></slot>\n</div>\n<div class="c-input-error" id="error">\n  <slot class="c-input-slot-error" name="error"></slot>\n</div>\n'; class oa extends (js(Qs(Ns))) { static get properties() { return { ...super.properties, noShowBtn: { type: "boolean" } } } template() { return ra } constructor() { super(), this.togglePassword = this.togglePassword.bind(this), this.createEyeBtn() } attributeChangedCallback(t, e, i) { if (e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "no-show-btn" === t)) if (this.noShowBtn) this.tmpEl.appendChild(this.showBtn); else { this.input.parentNode.insertBefore(this.showBtn, this.input.nextSibling); const t = this.$.querySelector(".c-svg-eye"); "password" === this.input.getAttribute("type") ? t.icon = this.iconShow : t.icon = this.iconHide } } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.showBtn.removeEventListener("click", this.togglePassword) } setReadonly() { super.setReadonly(), this.setOrRemoveAttr("disabled", this.readonly, this.showBtn) } setDisabled() { super.setDisabled(), this.setOrRemoveAttr("disabled", this.disabled, this.showBtn) } createEyeBtn() { this.showBtn = document.createElement("button"), this.showBtn.classList.add("c-input-btn", "c-btn-show", "m-btn-no-style"), this.showBtn.title = aa, this.showBtn.innerHTML = `\n      <span id="btn-a11y" class="visually-hidden">${aa}</span>\n      <ux-svg class="c-svg-eye m-icon" lib-size="md"></ux-svg>`, this.showBtn.addEventListener("click", this.togglePassword), this.input.parentNode.insertBefore(this.showBtn, this.input.nextSibling) } togglePassword() { const t = this.$.querySelector(".c-svg-eye"), e = this.$.querySelector("#btn-a11y"); "password" === this.input.getAttribute("type") ? (this.input.setAttribute("type", "text"), t.icon = this.iconHide, this.showBtn.setAttribute("title", na), e.textContent = na) : (this.input.setAttribute("type", "password"), t.icon = this.iconShow, this.showBtn.setAttribute("title", aa), e.textContent = aa) } } const la = document.createElement("template"); la.innerHTML = '\n<div role="radiogroup" aria-labelledby="group-legend" id="wrapel" class="c-input-radio-group">\n  <div id="group-legend" class="c-group-legend">\n    <slot name="group-legend"></slot>\n  </div>\n  <div id="error" class="c-input-error">\n    <slot name="error"></slot>\n  </div>\n  <div id="radios">\n    <slot></slot>\n  </div>\n</div>\n'; const ca = "ux-input-a11y-radio"; class da extends (Us(pt(A))) { static get properties() { return { value: { type: "string" }, model: { type: "string" }, state: { type: "string" }, disabled: { type: "boolean" }, required: { type: "boolean" } } } template() { return la } constructor() { super(), this.wrapEl = this.$.querySelector("#wrapel"), this.radios = this.$.querySelector("#radios"), this.checkFirstRadioBtn = this.checkFirstRadioBtn.bind(this), this.setGridTemplate = this.setGridTemplate.bind(this), this.setOrRemoveModel = this.setOrRemoveModel.bind(this) } connectedCallback() { this.firstRadioInputNotDisabled && this.firstRadioInputNotDisabled.setAttribute("tabindex", 0), this.getAttribute("state") || (this.state = "empty"), super.connectedCallback && super.connectedCallback(), this.checkFirstRadioBtn(), this.slotChange(this._slots.default, this.checkFirstRadioBtn), this.slotChange(this._slots.default, this.setOrRemoveModel), this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleClick), this.resizeEv = V()((() => { this.setGridTemplate() }), 100), window.addEventListener("resize", this.resizeEv) } checkFirstRadioBtn() { const t = this.checkedRadioInput; if (t) this.setChecked(t, !1), this.presetItem(); else { const t = this.firstRadioInputNotDisabled; t ? (this.presetItem(), t.setAttribute("tabindex", 0), t.setAttribute("active", "")) : this.presetItem() } } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleClick), window.removeEventListener("resize", this.resizeEv) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "value": this.fromItSelf ? this.fromItSelf = !1 : this.presetItem(); break; case "model": this.setOrRemoveModel(); break; case "disabled": this.setDisabled(); break; case "required": this.setRequired() } } setDisabled() { this.allRadio.forEach((t => { this.setOrRemoveAttr("disabled", this.disabled, t) })), this.disabled ? this.allRadio.forEach((t => { t.removeAttribute("tabindex") })) : this.presetItem() } setRequired() { this.setOrRemoveAttr("aria-required", this.required, this.wrapEl, !0) } handleKeyDown(t) { let e = !1; switch (t.keyCode) { case 38: case 37: this.setCheckedToPrevItem(), e = !0; break; case 40: case 39: this.setCheckedToNextItem(), e = !0; break; case 36: this.setChecked(this.firstRadioInputNotDisabled), e = !0; break; case 35: this.setChecked(this.lastRadioInputNotDisabled), e = !0; break; case 32: case 13: ca === t.target.tagName.toLowerCase() && this.setChecked(t.target), e = !0 }e && (t.stopPropagation(), t.preventDefault()) } handleClick(t) { t.stopPropagation(); let e = t.target; for (; ;) { if (ca === e.tagName.toLowerCase()) { "true" !== e.getAttribute("disabled") && "true" !== this.getAttribute("disabled") && this.setChecked(e); break } if (!e.parentElement || e.parentElement === this) break; e = e.parentElement } return !1 } get allRadio() { return [...this.querySelectorAll(`:scope ${ca}`)].filter((t => t.closest(`${ca}-group`) === this)) } get activeRadio() { return this.allRadio.find((t => t.matches("[active]"))) } get checkedRadioInput() { return this.allRadio.find((t => t.matches('[checked]:not([checked="false"])'))) } get firstRadioInputNotDisabled() { const t = this.allRadio; for (let e = 0, i = t.length; e < i; e++)if (!t[e].hasAttribute("disabled") || "false" === t[e].getAttribute("disabled")) return t[e]; return null } get lastRadioInputNotDisabled() { const t = this.allRadio; for (let e = t.length - 1; e > 0; e--)if (!t[e].hasAttribute("disabled") || "false" === t[e].getAttribute("disabled")) return t[e]; return null } prevRadioInputNotDisabled(t) { const e = this.allRadio.indexOf(t); let i = this.allRadio[e - 1]; for (; i;) { if (i.tagName === ca.toUpperCase() && (!i.hasAttribute("disabled") || "false" === i.getAttribute("disabled"))) return i; i = i.previousElementSibling } return null } nextRadioInputNotDisabled(t) { const e = this.allRadio.indexOf(t); let i = this.allRadio[e + 1]; for (; i;) { if (i.tagName === ca.toUpperCase() && (!i.hasAttribute("disabled") || "false" === i.getAttribute("disabled"))) return i; i = i.nextElementSibling } return null } setCheckedToPrevItem() { const t = this.activeRadio; t && t !== this.firstRadioInputNotDisabled ? this.setChecked(this.prevRadioInputNotDisabled(t)) : this.setChecked(this.lastRadioInputNotDisabled) } setCheckedToNextItem() { const t = this.activeRadio; t && t !== this.lastRadioInputNotDisabled ? this.setChecked(this.nextRadioInputNotDisabled(t)) : this.setChecked(this.firstRadioInputNotDisabled) } setChecked(t, e = !0) { t && (this.value + "" !== t.getAttribute("value") && (this.fromItSelf = !0), this.resetRadios(), this._checkNode(t), e && t.focus(), this._setValue(), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input"))) } resetRadios() { this.allRadio.forEach((t => { t.removeAttribute("active"), t.setAttribute("checked", "false"), t.disabled || t.setAttribute("tabindex", "-1") })) } _checkNode(t) { this.disabled || t.setAttribute("tabindex", "0"), t.setAttribute("active", ""), t.setAttribute("checked", "true") } _setValue() { const t = this.checkedRadioInput; this.value = t ? this.checkedRadioInput.getAttribute("value") : "" } presetItem() { this.allRadio.forEach((t => { this.value && t.getAttribute("value") === this.value && this.setChecked(t, !1) })), this.value || this.resetRadios() } setOrRemoveModel() { this.removeSlotChangeEvent(this._slots.default, this.setGridTemplate), "segment" === this.model && this.allRadio.length < 5 ? (this.allRadio.forEach((t => { t.setAttribute("model", "segment") })), this.spaceV = null) : "selector" === this.model ? (this.allRadio.forEach((t => { t.setAttribute("model", "selector") })), this.slotChange(this._slots.default, this.setGridTemplate)) : "great-group" === this.model ? (this.allRadio.forEach((t => { "UX-INPUT-A11Y-RADIO" === t.nodeName && t.setAttribute("model", "great-group") })), this.querySelectorAll("hr").forEach((t => { "presentation" !== t.getAttribute("role") && t.setAttribute("role", "presentation") }))) : this.allRadio.forEach((t => { "segment" !== t.getAttribute("model") && "selector" !== t.getAttribute("model") && "great-group" !== t.getAttribute("model") || t.removeAttribute("model") })) } setGridTemplate() { if (this.radios.style.gridTemplateColumns = "", "selector" === this.model) for (const t of this._slots.default.assignedElements()) { let e = null; if (void 0 !== t.$) { if (e = t.$.querySelector(".label"), e && e.getBoundingClientRect().width >= this.radios.getBoundingClientRect().width / 2) { this.radios.style.gridTemplateColumns = "1fr"; break } this.radios.style.gridTemplateColumns = "1fr 1fr" } } } } let ua = 0; const ha = document.createElement("template"); ha.innerHTML = '\n<div id="wrap" class="wrap" part="ux-input-a11y-radio">\n  <div style="display:none;" aria-hidden="true">\n    Etat Bouton radio : <span class="status">empty</span><span class="is-disabled"></span></div>\n  <div class="label" part="ux-input-a11y-radio__label"><slot></slot></div>\n</div>\n'; class pa extends A { static get properties() { return { value: { type: "string" }, checked: { type: "boolean" }, disabled: { type: "boolean" } } } template() { return ha } constructor() { super(), this.statusWOCssEl = this.$.querySelector(".status"), this.isDisabledWOCssEl = this.$.querySelector(".is-disabled") } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "checked": this.setOrRemoveAttr("aria-checked", this.checked, this, !0), this.statusWOCssEl.innerHTML = this.checked ? "✅" : "❌"; break; case "value": this.setOrRemoveAttr("value", this.value, this.input); break; case "disabled": this.setDisabled() } } setChildId() { const t = this._slots.default.assignedElements()[0]; if (!t) return void console.warn("ux-input-a11y-radio: Merci de mettre un élément html (de préférence un p) et non un simple texte comme premier et unique enfant"); let e = ""; "" === t.id ? (ua++, e = `irad-${ua}`, t.id = e) : e = t.id, this.hasAttribute("aria-labelledby") || this.setAttribute("aria-labelledby", e), this.getAttribute("aria-labelledby") !== e && console.error("ux-input-a11y-radio: error bad id") } setDisabled() { this.disabled ? (this.isDisabledWOCssEl.innerHTML = " (désactivé)", this.hasAttribute("tabindex") && this.removeAttribute("tabindex")) : (this.isDisabledWOCssEl.innerHTML = "", this.closest("ux-input-a11y-radio-group").checkFirstRadioBtn()), this.setOrRemoveAttr("aria-disabled", this.disabled, this, !0) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "radio"), this.setChildId() } } const ba = n`
  :host {
    --height: 0.8rem;
    --border-radius: 0.6rem;

    --track-color: #e6e6e6;
    --track-color-hover: #cdcbcb;

    --cursor-color: var(--color-primary);
    --cursor-color-hover: var(--color-primary-dark);

    --lower-shadow: none;
    --lower-color: var(--color-primary);
    --lower-color-hover: var(--color-primary-dark);

    --upper-shadow: none;
    --upper-color: black;

    --cursor-width: 2.6rem;
    --cursor-height: 2.6rem;
    --cursor-width-hover: 3rem;
    --cursor-height-hover: 3rem;
    --cursor-border: 4px;
  }

  .c-label,
  .c-group-legend {
    display: block;
    margin-bottom: 0.5rem;
    font-size: var(--text-font-size-label);
    font-weight: var(--label-font-weight);
  }

  .c-input-range {
    display: block;
    position: relative;
    width: 100%;
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;
    box-sizing: border-box;
  }

  .c-input-range * {
    box-sizing: border-box;
  }

  .c-input-range__input {
    display: block;
    position: absolute;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    width: 100%;
    -webkit-appearance: none;
  }

  .c-input-range__wrap {
    display: block;
    position: relative;
    padding-top: 3rem;
  }

  .c-input-range__wrap2 {
    position: relative;
    display: flex;
    align-items: center;
  }

  /* La legende */
  .c-input-range__legend {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  /* La legende au milieu */
  .c-input-range__middle {
    transform: translateX(-25%);
  }

  /* Barre rouge qui suit le cursor */
  .c-input-range__lower {
    position: absolute;
    cursor: pointer;
    height: 0.8rem;
    pointer-events: none;
    z-index: 2;
    width: 100%;
    display: flex;
  }

  .c-input-range__lower-selected {
    background-color: var(--lower-color);
    border-radius: var(--border-radius);
  }

  .c-input-range:hover .c-input-range__lower-selected,
  .c-input-range:focus-within .c-input-range__lower-selected {
    background: var(--lower-color-hover);
  }

  /* La valeur actuelle */
  .c-input-range__val {
    position: relative;
    top: -3.5rem;
    color: var(--color-primary);
    font-weight: bold;
  }

  .c-input-range:hover .c-input-range__val,
  .c-input-range:focus-within .c-input-range__val {
    color: var(--cursor-color-hover);
  }

  /* ////////////////////////////////////////// IE */

  /* la zone de déplacement */
  .c-input-range__input::-ms-track {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input::-ms-track,
  .c-input-range:focus-within .c-input-range__input::-ms-track {
    background: var(--track-color-hover);
  }

  /* barre progression avant */
  .c-input-range__input::-ms-fill-lower {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input::-ms-fill-lower,
  .c-input-range:focus-within .c-input-range__input::-ms-fill-lower {
    background: var(--track-color-hover);
  }

  /* barre progression après */
  .c-input-range__input::-ms-fill-upper {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input::-ms-fill-upper,
  .c-input-range:focus-within .c-input-range__input::-ms-fill-upper {
    background: var(--track-color-hover);
  }

  /* le curseur */
  .c-input-range__input::-ms-thumb {
    display: block;
    position: relative;
    cursor: pointer;
    z-index: 2;
    background: var(--cursor-color);
    border-radius: 50%;
    height: var(--cursor-height);
    width: var(--cursor-width);
    border: var(--cursor-border) solid white;
    margin-top: -0.9rem;
  }

  .c-input-range:hover .c-input-range__input::-ms-thumb,
  .c-input-range:focus-within .c-input-range__input::-ms-thumb {
    background: var(--cursor-color-hover);
  }

  :host([disabled]:not([disabled='false'])) .c-input-range__input::-ms-thumb {
    cursor: not-allowed;
  }

  /* ////////////////////////////////////////// FIN IE */

  /* ////////////////////////////////////////// CHROME */

  /* la zone de déplacement */
  .c-input-range__input::-webkit-slider-runnable-track {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input::-webkit-slider-runnable-track,
  .c-input-range:focus-within .c-input-range__input::-webkit-slider-runnable-track {
    background: var(--track-color-hover);
  }

  /* le curseur */
  .c-input-range__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    display: block;
    position: relative;
    cursor: pointer;
    z-index: 2;
    background: var(--cursor-color);
    border-radius: 50%;
    height: var(--cursor-height);
    width: var(--cursor-width);
    border: var(--cursor-border) solid white;
    margin-top: -0.9rem;
  }

  .c-input-range:hover .c-input-range__input::-webkit-slider-thumb,
  .c-input-range:focus-within .c-input-range__input::-webkit-slider-thumb {
    background: var(--cursor-color-hover);
    height: var(--cursor-height-hover);
    width: var(--cursor-width-hover);
    border: var(--cursor-border) solid white;
    margin-top: -1.1rem;
  }

  :host([disabled]:not([disabled='false'])) .c-input-range__input::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  /* /////////////////////////////////// FIREFOX */

  /* la zone de déplacement */
  .c-input-range__input::-moz-range-track {
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__input:hover::-moz-range-track,
  .c-input-range:focus-within .c-input-range__input:hover::-moz-range-track {
    background: var(--track-color-hover);
  }

  /* le curseur */
  .c-input-range__input::-moz-range-thumb {
    -webkit-appearance: none;
    display: block;
    position: relative;
    cursor: pointer;
    background: var(--color-primary);
    border-radius: 50%;

    /* Le thumb firefox ne fonctionne pas comme celui de chrome */
    height: calc(var(--cursor-height) - 2 * var(--cursor-border));
    width: calc(var(--cursor-width) - 2 * var(--cursor-border));
    border: var(--cursor-border) solid white;
    margin-top: -0.9rem;
  }

  .c-input-range:hover .c-input-range__input::-moz-range-thumb,
  .c-input-range:focus-within .c-input-range__input::-moz-range-thumb {
    background: var(--cursor-color-hover);
    height: calc(var(--cursor-height-hover) - 2 * var(--cursor-border));
    width: calc(var(--cursor-width-hover) - 2 * var(--cursor-border));
    border: var(--cursor-border) solid white;
    margin-top: -1.1rem;
  }

  :host([disabled]:not([disabled='false'])) .c-input-range__input::-moz-range-thumb {
    cursor: not-allowed;
  }

  .c-input-error {
    font-size: var(--text-font-size-sm);
    color: var(--color-error);
  }

  .c-label-icon {
    margin-left: 5px;
  }
`, ma = document.createElement("template"); ma.innerHTML = '\n<label class="c-label" for="input"><slot name="label"></slot><span id="a11y-el" class="visually-hidden"></span></label>\n<div class="c-input-range c-input-wrap">\n  <div class="c-input-range__wrap">\n    <div class="c-input-range__wrap2">\n      <span class="c-input-range__lower c-input-range__lower-selected" aria-hidden="true"></span>\n      <input id="input" type="range" class="c-input c-input-range__input js-delegate-focus">\n    </div>\n    <span class="c-input-range__val" aria-hidden="true"></span>\n  </div>\n  <div class="c-input-range__legend" aria-hidden="true">\n      <span class="c-input-range__min"><slot name="left"></slot></span>\n      <span class="c-input-range__middle"><slot name="middle"></slot></span>\n      <span class="c-input-range__max"><slot name="right"></slot></span>\n  </div>\n</div>\n'; class ga extends (Ys(Ns)) { static get properties() { return { ...super.properties, unit: { type: "string" }, value: { type: "string" }, cursorLabel: { type: "string" }, a11yValuetext: { type: "string" }, a11yLabel: { type: "string" }, a11yValuemin: { type: "string" }, a11yValuemax: { type: "string" } } } template() { return ma } constructor() { super(), this.rangeLowerEl = this.$.querySelector(".c-input-range__lower"), this.rangeValEl = this.$.querySelector(".c-input-range__val"), this.a11yEl = this.$.querySelector("#a11y-el"), this.valueListener = this.valueListener.bind(this) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "min": case "max": this.setCursor(), this.setA11yEl(); break; case "unit": this.setCursorLabel(), this.setA11yEl(); break; case "step": case "a11y-label": this.setA11yEl(); break; case "cursor-label": this.setCursorLabel(); break; case "a11y-valuetext": this.setA11yValuetext(); break; case "a11y-valuemin": this.setOrRemoveAttr("aria-valuemin", this.a11yValuemin, this.input); break; case "a11y-valuemax": this.setOrRemoveAttr("aria-valuemax", this.a11yValuemax, this.input) } } setA11yEl() { if (this.a11yLabel) this.a11yEl.innerText = this.a11yLabel; else { const t = this.unit || "", e = null !== this.min ? this.min : "0", i = null !== this.max ? this.max : "100", s = null !== this.step ? this.step : "1"; this.a11yEl.innerText = `Valeur minimale ${e} ${t}, Valeur maximale ${i} ${t} par pas de ${s} ${t}` } } setValue(t) { let e = Number(t); this.formItSelf = !0, this.min && e < this.min && (e = this.min), this.max && e > this.max && (e = this.max), this.input.value = e, this.value = e, this.valueListener() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.input.addEventListener("input", this.valueListener), this.setValue(this.value), this.valueListener(), this.value || (this.value = this.min ? this.min : 0), this.setA11yEl(), this.state || (this.state = "empty") } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("focus", this.valueListener) } setCursorLabel() { this.cursorLabel ? this.rangeValEl.innerText = this.cursorLabel : this.rangeValEl.innerText = this.unit ? `${this.value} ${this.unit}` : this.value } setA11yValuetext() { this.a11yValuetext && (this.input.setAttribute("aria-valuetext", this.a11yValuetext), this.input.setAttribute("aria-valuenow", this.value)) } setCursor() { const t = this.min || 0, e = this.max || 100, i = (this.input.value - t) / (e - t) * 100; this.rangeLowerEl.style.width = i + "%"; const s = i * this.rangeValEl.offsetWidth / 100; this.rangeValEl.style.left = `calc( ${i}% - ${s}px )` } valueListener() { this.setCursor(), this.setCursorLabel(), this.setA11yValuetext() } } n`
  :host {
    --lower-color-hover: var(--lower-color);
    --interval-color: var(--color-secondary-dark);
  }

  :host([disabled]:not([disabled='false'])) .c-input-range {
    cursor: not-allowed;
  }

  .c-input-range__input {
    top: -1rem;
    pointer-events: none; /* let clicks pass through */
  }

  .c-input-range__legend {
    margin-top: 1.6rem;
  }

  .c-input-range__lower {
    margin-top: -0.3rem;
    border-radius: var(--border-radius);
    background-color: var(--track-color);
    z-index: unset;
    padding: 0 calc(var(--cursor-width) / 2);
  }

  .c-input-range__lower-selected {
    border-radius: 0;
  }

  :host([interval]) .c-input-range__lower:not(.c-input-range__lower-no-interval) > *:not(.c-input-range__lower-selected) {
    border-left: 1px solid var(--interval-color);
  }

  :host([interval]) .c-input-range__lower:not(.c-input-range__lower-no-interval) > *:last-child {
    border-right: 1px solid var(--interval-color);
  }

  .c-input-range:focus-within .c-input-range__lower,
  .c-input-range:hover .c-input-range__lower {
    background-color: var(--track-color-hover);
  }

  .c-input-range__val {
    position: absolute;
    text-align: center;
    width: 100%;
  }

  .c-input-range__input:hover ~ .c-input-range__val,
  .c-input-range__input:focus-within ~ .c-input-range__val {
    color: var(--cursor-color-hover);
  }

  /* Edge */
  .c-input-range__input:hover::-ms-thumb,
  .c-input-range__input:focus-within::-ms-thumb {
    margin-top: -1.1rem;
    background-color: var(--cursor-color-hover);
    height: var(--cursor-height-hover);
    width: var(--cursor-width-hover);
  }

  /*  Chrome */
  .c-input-range__input::-webkit-slider-runnable-track {
    background: none;
    margin-top: 0.5rem;
  }

  .c-input-range__input::-webkit-slider-thumb {
    margin-top: -0.9rem;
    pointer-events: auto; /* catch clicks */
  }

  .c-input-range__input:hover::-webkit-slider-thumb,
  .c-input-range__input:focus-within::-webkit-slider-thumb {
    margin-top: -1.1rem;
    background-color: var(--cursor-color-hover);
    height: var(--cursor-height-hover);
    width: var(--cursor-width-hover);
  }

  /* Mozila */
  .c-input-range__input::-moz-range-thumb {
    pointer-events: auto; /* catch clicks */
  }

  .c-input-range__input::-moz-range-track {
    background: none; /* get rid of Firefox track background */
  }

  .c-input-range__input:hover::-moz-range-thumb,
  .c-input-range__input:focus-within::-moz-range-thumb {
    background-color: var(--cursor-color-hover);
    height: calc(var(--cursor-height-hover) - 2 * var(--cursor-border));
    width: calc(var(--cursor-width-hover) - 2 * var(--cursor-border));
  }
`; const va = document.createElement("template"); va.innerHTML = '\n\n<div id="group-legend" class="c-group-legend">\n  <slot name="group-legend"></slot>\n  <span id="a11y-el" class="visually-hidden"></span>\n</div>\n<div role="group" aria-labelledby="group-legend" class="c-input-range c-input-wrap">\n  <div class="c-input-range__wrap">\n    <div class="c-input-range__wrap2">\n      <span class="c-input-range__val" aria-hidden="true"></span>\n      <span class="c-input-range__lower" aria-hidden="true"></span>\n      <span class="c-input-range__interval" aria-hidden="true"></span>\n      <slot></slot>\n    </div>\n  </div>\n  <div class="c-input-range__legend" aria-hidden="true">\n    <span class="c-input-range__min"><slot name="left"></slot></span>\n    <span class="c-input-range__middle"><slot name="middle"></slot></span>\n    <span class="c-input-range__max"><slot name="right"></slot></span>\n  </div>\n</div>\n'; class fa extends (j(A)) { static get properties() { return { min: { type: "number", defaultValue: 0 }, max: { type: "number", defaultValue: 100 }, step: { type: "number", defaultValue: 1 }, unit: { type: "string" }, value: { type: "string" }, cursorLabel: { type: "string" }, disabled: { type: "boolean" }, required: { type: "boolean" }, a11yLabel: { type: "string" } } } template() { return va } constructor() { super(), this.rangeLowerEl = this.$.querySelector(".c-input-range__lower"), this.rangeValEl = this.$.querySelector(".c-input-range__val"), this.wrapEl = this.$.querySelector(".c-input-range__wrap2"), this.a11yEl = this.$.querySelector("#a11y-el"), this.setValueFromItems = this.setValueFromItems.bind(this) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "value": this.fromItSelf || this.setValue(); break; case "unit": this.setCursorLabel(); case "step": case "min": case "max": this.createRangeLower(), this.setPropOnChildren(t); case "a11y-label": this.setA11yEl(); break; case "cursor-label": this.setCursorLabel(); break; case "disabled": case "required": this.setPropOnChildren(t) } } setPropOnChildren(t) { this.allRangeItems.forEach((e => { this.setOrRemoveAttr(t, this[t], e) })) } setA11yEl() { if (this.a11yLabel) this.a11yEl.innerText = this.a11yLabel; else { const t = this.unit || ""; this.a11yEl.innerText = `Valeur minimale ${this.min} ${t}, Valeur maximale ${this.max} ${t} par pas de ${this.step} ${t}` } } connectedCallback() { if (super.connectedCallback && super.connectedCallback(), this.value ? this.setValue() : this.setValueFromItems(), setTimeout(this.createRangeLower, 0), setTimeout(this.setRangeLower, 0), !this.value) { let t = ""; for (let t = 0; t < this.allRangeItems.length; t++)this.min ? (this.min, this.step) : this.step; this.value = t } this.setA11yEl(), this.wrapEl.addEventListener("change", this.setValueFromItems, !0) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.wrapEl.removeEventListener("change", this.setValueFromItems) } setValueFromItems() { this.fromItSelf = !0, this.value = this.allRangeItems.reduce(((t, e) => e.hasAttribute("value") ? `${t}${e.getAttribute("value")};` : t), ""), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input")), this.fromItSelf = !1, this.setRangeLower(), this.setCursorLabel() } setValue() { if (null != this.value && "" !== this.value) { this.fromItSelf = !0; const t = this.value.split(";").filter((t => t)); t.length !== this.allRangeItems.length && console.warn(`${this.tagName}: manque une valeur / une en trop`); for (let e = 0; e < this.allRangeItems.length - 1; e++)(Number(this.allRangeItems[e].value) && Number(this.allRangeItems[e].value) >= Number(this.allRangeItems[e + 1].value) || Number(t[e]) >= Number(t[e + 1])) && console.warn(`${this.tagName}: les valeurs ne sont pas croissantes`); this.allRangeItems.forEach(((e, i) => { e.setAttribute("value", t[i]) })), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input")), this.fromItSelf = !1, this.setRangeLower(), this.setCursorLabel() } } createRangeLower() { if (this.rangeLowerEl) { this.rangeLowerEl.innerHTML = ""; const t = Number(this.min), e = Number(this.max), i = Number(this.step || 1), s = 100 / ((e - t) / i); for (let a = t; a < e; a += i) { const t = document.createElement("span"); t.style.width = s + "%", this.rangeLowerEl.appendChild(t) } (e - t) % i != 0 && console.warn(`${this.tagName}: certaines valeurs ne sont pas accessibles à cause du step`), this.setBooleanClass((e - t) / i > 10, "c-input-range__lower-no-interval", this.rangeLowerEl) } } setRangeLower() { if (this.value) { const t = this.value.split(";").filter((t => t)).map((t => Number(t) - Number(this.min))); let e = !1; this.allLowerItems.forEach(((i, s) => { s * Number(this.step) >= t[0] && t.shift(), this.setBooleanClass(e, "c-input-range__lower-selected", i) })) } } setCursorLabel() { if (this.cursorLabel) this.rangeValEl.innerText = this.cursorLabel; else if (this.value) { const [t, e] = this.value.split(";"); this.rangeValEl.innerText = this.unit ? `${t} à ${e} ${this.unit}` : `${t} à ${e}` } } get allLowerItems() { return [...this.$.querySelectorAll(".c-input-range__lower span")] } get allRangeItems() { return [...this.querySelectorAll(":scope ux-input-a11y-range-item")] } } const xa = document.createElement("template"); xa.innerHTML = '\n<label class="c-label visually-hidden" for="input"><slot name="label"></slot><span id="a11y-el"></span></label>\n<div class="c-input-wrap">\n  <input id="input" type="range" class="c-input c-input-range__input js-delegate-focus">\n</div>\n'; class ya extends (Ys(Ns)) { static get properties() { return { ...super.properties, min: { type: "number", defaultValue: 0 }, max: { type: "number", defaultValue: 100 }, step: { type: "number", defaultValue: 1 }, unit: { type: "string" }, value: { type: "number" }, a11yValuetext: { type: "string" }, a11yLabel: { type: "string" }, a11yValuemin: { type: "string" }, a11yValuemax: { type: "string" } } } template() { return xa } constructor() { super(), this.a11yEl = this.$.querySelector("#a11y-el") } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "step": case "unit": case "min": case "max": case "a11y-label": this.setA11yEl(); break; case "a11y-valuetext": this.setA11yValuetext(); break; case "a11y-valuemin": this.setOrRemoveAttr("aria-valuemin", this.a11yValuemin, this.input); break; case "a11y-valuemax": this.setOrRemoveAttr("aria-valuemax", this.a11yValuemax, this.input) } } setA11yEl() { if (this.a11yLabel) this.a11yEl.innerText = this.a11yLabel; else { const t = this.unit || "", e = null !== this.step ? this.step : "1"; this.a11yEl.innerText = `Valeur minimale ${this.min} ${t}, Valeur maximale ${this.max} ${t} par pas de ${e} ${t}` } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setA11yValuetext(), this.maxValue = this.max, this.minValue = this.min, this.previousRangeItem && (this.previousRangeItem.maxValue = this.value - this.step, this.minValue = this.previousRangeItem.value + this.step), this.value < this.minValue ? this.value = this.minValue : this.value > this.maxValue && (this.value = this.maxValue), this.setA11yEl() } setValue(t) { Number(t) >= this.minValue && Number(t) <= this.maxValue ? (super.setValue(t), this.previousRangeItem && (this.previousRangeItem.maxValue = this.value - this.step), this.nextRangeItem && (this.nextRangeItem.minValue = this.value + this.step)) : this.input.value = this.value } setA11yValuetext() { this.a11yValuetext && (this.input.setAttribute("aria-valuetext", this.a11yValuetext), this.input.setAttribute("aria-valuenow", this.value)) } setValueListener(t) { super.setValueListener(t), this.setA11yValuetext() } get previousRangeItem() { return this.previousElementSibling && this.previousElementSibling.tagName === this.tagName ? this.previousElementSibling : null } get nextRangeItem() { return this.nextElementSibling && this.nextElementSibling.tagName === this.tagName ? this.nextElementSibling : null } } const ka = document.createElement("template"); ka.innerHTML = '\n  <label class="c-label" for="input"><slot name="label"></slot></label>\n  <div class="c-input-wrap">\n    <input class="c-input c-input-search js-delegate-focus" id="input" autocomplete="off" type="search" part="ux-input-a11y-search__input">\n    <button class="c-input-btn c-input-search-btn m-btn-no-style" title="Lancer la recherche">\n      <span class="visually-hidden">Lancer la recherche</span>\n      <ux-svg class="c-svg-search m-icon" lib-size="sm"></ux-svg>\n    </button>\n    <slot name="right"></slot>\n  </div>\n  <slot hidden style="display:none" name="list" class="c-datalist-option"></slot>\n  <div class="c-input-error" id="error">\n    <slot class="c-input-slot-error" name="error"></slot>\n  </div>\n'; class wa extends (js(pt(Qs(Ns)))) { static get properties() { return { ...super.properties, autocompleteList: { type: "boolean" } } } template() { return ka } constructor() { super(), this.btnSearch = this.$.querySelector(".c-input-search-btn"), this.handleKeyUpSearch = this.handleKeyUpSearch.bind(this), this.onUxSearch = this.onUxSearch.bind(this), this.setAutocompleteDatalist = this.setAutocompleteDatalist.bind(this), this.slotChange(this._slots.list, this.setAutocompleteDatalist) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.btnSearch.addEventListener("click", this.onUxSearch), this.input.addEventListener("keyup", this.handleKeyUpSearch) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.btnSearch.removeEventListener("click", this.onUxSearch), this.input.removeEventListener("keyup", this.handleKeyUpSearch) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "autocomplete-list" === t && this.setAutocompleteDatalist()) } setReadonly() { super.setReadonly(), this.setOrRemoveAttr("disabled", this.readonly, this.btnSearch) } setDisabled() { super.setDisabled(), this.setOrRemoveAttr("disabled", this.disabled, this.btnSearch) } setAutocompleteDatalist() { if (this.autocompleteList) { const t = document.createElement("datalist"), e = this.querySelectorAll("option"); for (const i of e) t.appendChild(i.cloneNode(!0)); const i = this.wrapEl.querySelector("datalist"); i && this.wrapEl.removeChild(i), t.id = "autocomplete-list", this.input.setAttribute("list", t.id), this.wrapEl.appendChild(t) } else { const t = this.wrapEl.querySelector("datalist"); t && (this.wrapEl.removeChild(t), this.input.removeAttribute("list")) } } onUxSearch() { ["uxInputSearch", "ux-input-search"].forEach((t => { this.dispatchEvent(new CustomEvent(t)) })) } handleKeyUpSearch({ key: t }) { "Enter" === t && this.onUxSearch() } } const Ca = n`
  .c-input-select,
  .c-input-wrap {
    cursor: pointer;
  }

  :host([disabled]:not([disabled='false'])) .c-input-wrap {
    cursor: not-allowed;
  }
`, _a = document.createElement("template"); _a.innerHTML = '\n<label class="c-label" for="input"><slot name="label"></slot></label>\n<div class="c-input-wrap" part="ux-input-a11y-select">\n  <select class="c-input c-input-select js-delegate-focus" id="input" part="ux-input-a11y-select__input">\n  </select>\n  <slot name="right"></slot>\n</div>\n<div class="c-input-error" id="error">\n  <slot class="c-input-slot-error" name="error"></slot>\n</div>\n<slot hidden style="display:none" class="c-select-option"></slot>\n'; const Ea = document.createElement("template"); Ea.innerHTML = '<span id="a11y-el" class="visually-hidden">Cette liste déroulante est en lecture seule. Vous ne pouvez pas modifier sa valeur.</span>'; class La extends (js(pt(Ns))) { template() { return _a } constructor() { super(), this._handleChange = this._handleChange.bind(this), this.valueWhenReadOnlyOrDisabled = "", this.moveAndInitOption = this.moveAndInitOption.bind(this), this.slotChange(this.$.querySelector(".c-select-option"), this.moveAndInitOption) } attributeChangedCallback(t, e, i) { if (e !== i) switch ("value" !== t && super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "value": this.setValue(i), this.setPlaceholder(); break; case "readonly": this.setReadonly(); break; case "disabled": this.valueWhenReadOnlyOrDisabled = this.value } } get getValueTxt() { const t = this.querySelector(`option[value="${this.value}"]`); return t ? t.innerHTML : "" } setValueListener(t) { if (this.readonly || this.disabled) return this.fromItSelf = !0, void this.setValueBase(this.valueWhenReadOnlyOrDisabled); super.setValueListener(t) } setValue(t) { !0 === this.isInitSelect && (this.input.value !== t && (this.input.value = t), this.value !== t && (this.fromItSelf = !0, this.value = t), this.valueWhenReadOnlyOrDisabled = t) } _handleChange(t) { this.valueWhenReadOnlyOrDisabled !== this.input.value && (this.input.value = this.valueWhenReadOnlyOrDisabled), t.preventDefault() } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.moveAndInitOption() } setPlaceholder() { this.setBooleanClass(this.input.value === this.placeholder, "c-select--placeholder", this.input) } setReadonly() { this.readonly ? (this.tplA11yEl || (this.labelEl.appendChild(Ea.content.cloneNode(!0)), this.tplA11yEl = this.$.querySelector("#a11y-el")), this.valueWhenReadOnlyOrDisabled = this.value, this.input.addEventListener("change", this._handleChange)) : (this.tplA11yEl && (this.tplA11yEl.remove(), delete this.tplA11yEl), this.input.removeEventListener("change", this._handleChange)) } moveAndInitOption() { this.input.innerHTML = ""; const t = this.querySelectorAll("option"); this.getOptionsFromLightdom(), this.addDefaultPlaceholderIfRequired(), this.value && this.querySelectorAll(`[value="${this.value}"]`) ? this.input.value = this.value : t.length > 0 && ("" === t[0].value || "" === this.placeholder ? this.value = this.input.value = "" : this.value = t[0].value), this.isInitSelect = !0, this.valueWhenReadOnlyOrDisabled = this.input.value, this.setPlaceholder() } getOptionsFromLightdom() { [...this.children].forEach((t => { ["OPTION", "OPTGROUP"].includes(t.tagName) && (this.input.appendChild(t.cloneNode(!0)), t.hasAttribute("data-placeholder") && (this.placeholder = t.value, t.disabled = !0)) })) } addDefaultPlaceholderIfRequired() { if (!this.input.querySelector("option[data-placeholder]") && this.required) { const t = document.createElement("option"); this.placeholder = t.value = "", t.disabled = !0, t.setAttribute("data-placeholder", ""), t.innerHTML = "Sélectionner", this.input.insertBefore(t, this.input.firstChild), this.value || (this.input.value = "") } } } const Aa = document.createElement("template"); Aa.innerHTML = '\n<label for="button" class="c-label"><slot name="label"></slot></label>\n<div class="c-select-multiple--wrapper">\n  <div class="c-select-multiple js-container c-input-wrap">\n    <button id="button" class="c-select-multiple--background js-trigger m-btn-no-style c-input" aria-expanded="false" aria-controls="content">\n      <span class="visually-hidden">Sélectionner</span>\n    </button>\n    <p role="status" aria-atomic="true" class="c-select-multiple--status visually-hidden"></p>\n    <div class="c-select-multiple--list" role="list"></div>\n  </div>\n  <div id="content" class="c-select-multiple-dropdown js-content" role="listbox" aria-hidden="true" aria-labelledby="button" aria-multiselectable="true" tabindex="0"></div>\n  <div class="c-input-error" id="error">\n    <slot name="error"></slot>\n  </div>\n</div>\n<slot hidden style="display:none" class="c-select-option"></slot>\n'; class Sa extends (js(j(X(le(pt(A)))))) { template() { return Aa } static get properties() { return { disabled: { type: "boolean" }, readonly: { type: "boolean" }, required: { type: "boolean" }, placeholder: { type: "string" }, value: { type: "string" } } } constructor() { super(), this.input = this.$.querySelector(".c-input"), this.background = this.$.querySelector(".c-select-multiple--background"), this.selectedItems = this.$.querySelector(".c-select-multiple--list"), this.dropdown = this.$.querySelector(".c-select-multiple-dropdown"), this.errorEl = this.$.querySelector(".c-input-error"), this.tmpEl = document.createElement("template"), this.dropdownMaxHeight = 300, this.toggleDropdown = this.toggleDropdown.bind(this), this.handleOption = this.handleOption.bind(this), this.handleClickChip = this.handleClickChip.bind(this), this.handleKeyDownChip = this.handleKeyDownChip.bind(this), this.clearSelection = this.clearSelection.bind(this), this.determineDropdownPosition = this.determineDropdownPosition.bind(this), this.setDropdownWidth = this.setDropdownWidth.bind(this), this.initDropdownItems = this.initDropdownItems.bind(this), this._clickOutsideDropdown = this._clickOutsideDropdown.bind(this), this.initDropdownNode(), this.createPlaceholderEl(), this.createEraseEl(), this.createFocusBackEl(), this.createLabelIconEl(), this.valueWhenReadOnlyOrDisabled = "" } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.disabled || this.background.addEventListener("keydown", this.toggleDropdown), this.dropdown.addEventListener("click", this.handleOption, !0), this.dropdown.addEventListener("keydown", this.handleOption, !0), this.selectedItems.addEventListener("click", this.handleClickChip, !0), this.selectedItems.addEventListener("keydown", this.handleKeyDownChip, !0), this.slotChange(this.$.querySelector(".c-select-option"), this.initDropdownItems), setTimeout(this.determineDropdownPosition, 0), this.scrollEv = debounce((() => { this.determineDropdownPosition() }), 0), window.addEventListener("scroll", this.scrollEv), this.setDropdownWidth(), this.resizeEv = debounce((() => { this.setDropdownWidth() }), 0), window.addEventListener("resize", this.resizeEv) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "disabled": this.setDisabled(); break; case "placeholder": this.placeholderEl.innerHTML = i; break; case "readonly": this.setReadonly(); break; case "required": this.setOrRemoveAttr("aria-required", this.required, this.background); break; case "value": this.fromItSelf ? this.fromItSelf = !1 : this.disabled || this.readonly || this.setValue(i) } } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.background.removeEventListener("keydown", this.toggleDropdown), this.dropdown.removeEventListener("click", this.handleOption), this.dropdown.removeEventListener("keydown", this.handleOption), this.trigger.removeEventListener("blur", this.onBLur), window.removeEventListener("scroll", this.scrollEv), window.removeEventListener("resize", this.resizeEv), document.removeEventListener("click", this._clickOutsideDropdown), this.selectedItems.removeEventListener("click", this.handleClickChip), this.selectedItems.removeEventListener("keydown", this.handleKeyDownChip) } createPlaceholderEl() { this.placeholderEl = document.createElement("p"), this.placeholderEl.classList.add("c-select-multiple--placeholder"), this.placeholderEl.setAttribute("role", "listitem"), this.placeholderEl.setAttribute("aria-hidden", "true"), this.placeholderEl.style.pointerEvents = "none", this.placeholderEl.innerHTML = this.placeholder ? this.placeholder : "Sélectionner" } createEraseEl() { this.eraseEl = document.createElement("button"), this.eraseEl.classList.add("c-select-multiple--erase", "m-btn-no-style"), this.eraseEl.title = "Effacer la sélection", this.eraseEl.innerHTML = '\n    <span class="visually-hidden">Effacer la sélection</span>\n    <ux-svg class="c-select-multiple-erase--icon" lib-size="sm" icon="croix-fermer"></ux-svg>', this.disabled || this.readonly || this.eraseEl.addEventListener("click", this.clearSelection) } createFocusBackEl() { this.focusBackEl = document.createElement("div"), this.focusBackEl.classList.add("visually-hidden"), this.focusBackEl.setAttribute("tabindex", "-1"), this.focusBackEl.setAttribute("aria-hidden", "true") } initDropdownNode() { !this.querySelector("optgroup") && this.querySelector("option") && "UL" !== this.dropdown.nodeName ? (this.replaceDropdownNode("ul"), this.content = this.dropdown) : !this.querySelector("optgroup") && this.querySelector("option") || "DIV" === this.dropdown.nodeName || (this.replaceDropdownNode("div"), this.content = this.dropdown) } replaceDropdownNode(t) { this.dropdown.removeEventListener("click", this.handleOption), this.dropdown.removeEventListener("keydown", this.handleOption); const e = document.createElement(t); e.className = this.dropdown.className, e.setAttribute("data-id", this.dropdown["data-id"]), e.setAttribute("role", "listbox"), e.setAttribute("aria-hidden", this.dropdown.getAttribute("aria-hidden")), e.setAttribute("aria-labelledby", "button"), e.innerHTML = this.dropdown.innerHTML, this.dropdown.parentNode.replaceChild(e, this.dropdown), this.dropdown = e, this.dropdown.addEventListener("click", this.handleOption, !0), this.dropdown.addEventListener("keydown", this.handleOption, !0) } initDropdownItems() { this.initDropdownNode(), this.dropdown.innerHTML = "", this.selectedItems.innerHTML = ""; this.querySelectorAll("optgroup, option").forEach((t => { const e = this.createNodeFromLightdom(t); if (Array.from(t.attributes).forEach((t => { "value" === t.nodeName ? e.setAttribute("data-value", t.nodeValue) : "label" !== t.nodeName && e.setAttribute("id" === t.nodeName ? "sm-item-id" : t.nodeName, t.nodeValue) })), e.setAttribute("role", "OPTGROUP" === t.nodeName ? "group" : "option"), "option" === e.getAttribute("role")) e.setAttribute("tabindex", "-1"), e.innerHTML = t.innerHTML; else { const i = document.createElement("li"); i.innerHTML = t.getAttribute("label"), i.setAttribute("role", "presentation"), e.appendChild(i) } t.parentNode === this ? ("group" === e.getAttribute("role") && (e.firstChild.setAttribute("data-id", "pres0-0"), e.setAttribute("aria-labelledby", "pres0-0")), this.dropdown.appendChild(e)) : this.dropdown.querySelector('[aria-labelledby="pres0-0"]').appendChild(e), e.setAttribute("sm-order", "0-0") })), this.setValue(this.value), this.addOrRemovePlaceholderOrErase() } createNodeFromLightdom(t) { "OPTGROUP" === t.nodeName ? document.createElement("ul") : "OPTGROUP" !== t.parentNode.nodeName && this.querySelector("optgroup") ? document.createElement("div") : document.createElement("li") } setReadonly() { this.readonly ? (this.value && (this.valueWhenReadOnlyOrDisabled = this.value), this.eraseEl.removeEventListener("click", this.clearSelection)) : this.eraseEl.addEventListener("click", this.clearSelection), this.addOrRemovePlaceholderOrErase() } setDisabled() { this.disabled ? (this.value && (this.valueWhenReadOnlyOrDisabled = this.value), this.background.removeEventListener("keydown", this.toggleDropdown), this.eraseEl.removeEventListener("click", this.clearSelection)) : (this.background.addEventListener("keydown", this.toggleDropdown), this.eraseEl.addEventListener("click", this.clearSelection)), this.addOrRemovePlaceholderOrErase() } setValueBase(t) { this.value = t } setValueListener(t) { this.fromItSelf = !0, this.setValue(t), this.setValueBase(t), this.dispatchEvent(new Event("change")), this.dispatchEvent(new Event("input")), "" === t && this._setStatusText(t) } setValue(t) { const e = t ? t.split(";") : []; this.allSelectedItems.forEach((t => { e.find((e => e.trim() === t.getAttribute("data-value"))) || this.removeSelectedItem(t) })), this.allDropdownItems.forEach((t => { "option" === t.getAttribute("role") && e.find((e => e.trim() === t.getAttribute("data-value"))) && this.addSelectedItem(t) })), this.addOrRemovePlaceholderOrErase() } clearSelection(t) { t && (t.stopPropagation(), t.preventDefault()), this.fromItself = !0, this.setValueListener(""), null !== this.selectedItems.parentElement && this.selectedItems.parentElement.isConnected && (this.selectedItems.parentElement.insertBefore(this.focusBackEl, this.selectedItems), this.focusBackEl.focus(), setTimeout((() => { this.background.focus(), this.tmpEl.appendChild(this.focusBackEl) }), 100)) } addOrRemovePlaceholderOrErase() { 0 === this.allSelectedItems.length ? (this.selectedItems.appendChild(this.placeholderEl), this.tmpEl.content.appendChild(this.eraseEl)) : (this.tmpEl.content.appendChild(this.placeholderEl), this.disabled || this.readonly ? this.tmpEl.content.appendChild(this.eraseEl) : this.container.appendChild(this.eraseEl)) } toggleDropdown(t) { if (!this.disabled && !this.readonly) { const e = this.dropdownOptions; "Enter" === t.key ? (t.preventDefault(), this.expanded = !this.expanded, e.length > 0 && e[0].focus()) : "Escape" === t.key ? (t.preventDefault(), this.expanded = !1) : "ArrowDown" === t.key && e.length > 0 ? (t.preventDefault(), this.expanded = !0, e[0].focus()) : "ArrowDown" !== t.key && "ArrowUp" !== t.key || t.preventDefault() } } _clickOutsideDropdown(t) { t.target !== this && (this.expanded = !1) } handleOption(t) { this.disabled || this.readonly || (t.key ? (t.preventDefault(), " " === t.key ? this._handleKeydownSpaceOption(t.target) : "ArrowUp" === t.key ? this._handleKeydownArrowUpOption(t.target) : "ArrowDown" === t.key ? this._handleKeydownArrowDownOption(t.target) : "Home" === t.key ? this._handleKeydownHomeOption(t.target) : "End" === t.key ? this._handleKeydownEndOption(t.target) : "Escape" === t.key && (this.expanded = !1, this.background.focus())) : this.addValue(t.target.getAttribute("data-value"))) } _handleKeydownSpaceOption(t) { const e = this.dropdownOptions, i = e.find((e => e.getAttribute("sm-order") > t.getAttribute("sm-order"))); if (i) i.focus(); else { const i = e.indexOf(t); i > 0 ? e[i - 1].focus() : (this.background.focus(), this.dropdown.setAttribute("aria-hidden", "true")) } this.addValue(t.getAttribute("data-value")) } _handleKeydownArrowUpOption(t) { const e = this.dropdownOptions; e[0] !== t && e[e.indexOf(t) - 1].focus() } _handleKeydownArrowDownOption(t) { const e = this.dropdownOptions; e[e.length - 1] !== t && e[e.indexOf(t) + 1].focus() } _handleKeydownHomeOption(t) { const e = this.dropdownOptions; e[0] !== t && e[0].focus() } _handleKeydownEndOption(t) { const e = this.dropdownOptions; e[e.length - 1] !== t && e[e.length - 1].focus() } addValue(t) { this.value ? this.setValueListener(this.value + (this.value.length > 0 ? ";" + t : t)) : this.setValueListener(t), this._setStatusText(this.querySelector(`option[value="${t}"]`).innerHTML) } addSelectedItem(t) { const e = document.createElement("div"); e.setAttribute("class", "c-select-multiple--item"), e.setAttribute("role", "listitem"), e.setAttribute("data-value", t.getAttribute("data-value")), e.setAttribute("sm-order", t.getAttribute("sm-order")); const i = t.getAttribute("aria-label"); i && e.setAttribute("aria-label", i), e.innerHTML = `\n    <p class="c-select-multiple--item__text">${t.innerHTML}</p>\n    <button class="c-select-multiple--item__close-btn m-btn-no-style">\n      <span class="visually-hidden">Désélectionner l'élément ${t.innerHTML}</span>\n      <ux-svg icon="croix-fermer" lib-size="sm" style="pointer-events: none;"></ux-svg>\n    </button>`, this.selectedItems.appendChild(e); const s = t.parentElement; t.remove(), "group" === s.getAttribute("role") && 1 === s.children.length && s.remove(), 0 === this.allDropdownItems.length && this.dropdown.setAttribute("aria-hidden", "true"), this.determineDropdownPosition() } handleClickChip(t) { this.disabled || this.readonly || this.removeValue(t.target.parentNode.getAttribute("data-value")) } handleKeyDownChip(t) { if (!this.disabled && !this.readonly && "Enter" === t.key) { t.preventDefault(); const e = t.target.parentNode, i = e.nextElementSibling ? e.nextElementSibling : e.previousElementSibling; null != i ? i.querySelector("button").focus() : this.background.focus(), this.removeValue(e.getAttribute("data-value")) } } removeValue(t) { if (this.value) { const e = this.value.split(";"); let i = ""; e.forEach(((i, s) => { i.trim() !== t && e.length })), this.setValueListener(i) } this._setStatusText("") } removeSelectedItem(t) { const e = this.querySelector(`[value="${t.getAttribute("data-value")}"]`), i = t.getAttribute("sm-order"), [s, a] = i.split("-"); let n; "0" === a && this.querySelector("optgroup") ? document.createElement("div") : document.createElement("li"), Array.from(e.attributes).forEach((t => { "value" === t.nodeName ? n.setAttribute("data-value", t.nodeValue) : n.setAttribute("data-id" === t.nodeName ? "sm-item-id" : t.nodeName, t.nodeValue) })), n.setAttribute("role", "OPTGROUP" === t.nodeName ? "group" : "option"), n.innerHTML = t.querySelector(".c-select-multiple--item__text").innerHTML, n.setAttribute("tabindex", "-1"), n.setAttribute("sm-order", i), this.addGroup(n); const r = this.allDropdownItems; this.setOption(false, r, s, n, a), this.dropdown.appendChild(n), t.remove(), this.determineDropdownPosition() } setOption(t, e, i, s, a) { for (let n = 0; !t && n < e.length; n++) { const t = e[n], [r, o] = t.getAttribute("sm-order").split("-"); if (i < r) this.dropdown.insertBefore(s, t); else if (i === r) { const e = t.parentNode; a < o ? e.insertBefore(s, t) : "group" === t.getAttribute("role") && 1 === t.children.length ? t.appendChild(s) : "group" === e.getAttribute("role") && e.lastElementChild === t && e.appendChild(s) } } return !!t } addGroup(t) { const [e, i] = t.getAttribute("sm-order").split("-"); if ("0" !== i && !this.allDropdownItems.find((t => t.getAttribute("sm-order") === `${e}-0`))) { const i = this.querySelector(`[value=${t.getAttribute("data-value")}]`).parentElement, s = document.createElement("ul"); Array.from(i.attributes).forEach((t => { s.setAttribute("data-id" === t.nodeName ? "sm-item-id" : t.nodeName, t.nodeValue) })), s.setAttribute("role", "group"), s.setAttribute("sm-order", `${e}-0`); const a = document.createElement("li"); a.innerHTML = i.getAttribute("label"), a.setAttribute("role", "presentation"), a.setAttribute("data-id", `pres${e}-0`), s.appendChild(a), s.setAttribute("aria-labelledby", `pres${e}-0`); const n = this.allDropdownItems.filter((t => t.getAttribute("sm-order").includes("-0"))); let r = !1; for (let t = 0; !r && t < n.length; t++)e < n[t].getAttribute("sm-order")[0] && this.dropdown.insertBefore(s, n[t]); r || this.dropdown.appendChild(s) } } determineDropdownPosition() { const t = this.container.getBoundingClientRect(), e = t.top + t.height, i = this.getWindowHeight() - t.bottom + t.height, s = t.bottom + t.height + this.dropdownMaxHeight > this.getWindowHeight(); this.setBooleanStyleProp(!s, "top", `${e}px`, this.dropdown), this.setBooleanStyleProp(s, "bottom", `${i}px`, this.dropdown), this.setBooleanClass(s, "c-inverted", this.dropdown) } getWindowHeight() { return void 0 !== window.innerHeight ? window.innerHeight : document.documentElement.clientHeight } setDropdownWidth() { this.dropdown.style.setProperty("--input-select-multiple-dropdown-width", `${this.container.getBoundingClientRect().width}px`) } _setStatusText(t) { this.$.querySelector(".c-select-multiple--status").innerHTML = "" === t ? "" : `L’option “${t}” a été sélectionnée` } handleClick() { super.handleClick(), this.expanded ? document.addEventListener("click", this._clickOutsideDropdown) : document.removeEventListener("click", this._clickOutsideDropdown) } get allSelectedItems() { return [...this.selectedItems.querySelectorAll(".c-select-multiple--item")] } get allDropdownItems() { return [...this.dropdown.querySelectorAll('[role="group"], [role="option"]')] } get dropdownOptions() { return [...this.dropdown.querySelectorAll('[role="option"]')] } } const Ta = document.createElement("template"); Ta.innerHTML = '\n  <label class="c-label" for="input"><slot name="label"></slot></label>\n  <div class="c-input-wrap" part="ux-input-a11y-tel">\n    <input class="c-input c-input-tel js-delegate-focus" id="input" autocomplete="off" type="tel" part="ux-input-a11y-tel__input">\n    <ux-svg class="c-input-btn c-input-icon" lib-size="sm"></ux-svg>\n    <slot name="right"></slot>\n  </div>\n  <div class="c-input-error" id="error">\n    <slot class="c-input-slot-error" name="error"></slot>\n  </div>\n'; class $a extends (js(Ns)) { static get properties() { return { ...super.properties, minlength: { type: "number" }, maxlength: { type: "number", defaultValue: 15 } } } template() { return Ta } setValueBase(t) { t += ""; const e = " ", i = t => { this.input.selectionStart = t, this.input.selectionEnd = t }, s = { initialValue: null, alteredValue: null, diffs: [], record(t, e) { this.initialValue = t, this.alteredValue = e, this.diffs = this.diff(t, e) }, diff(t, e) { const i = []; if (t === e) return i; const s = e.split(""), a = t.split(""); return s.map(((t, e) => { i.push({ position: e + 1, values: { previous: a[e], current: t }, isDifferent: t !== a[e] }) })), i } }, a = this.input.selectionStart; s.record(t, (t => null !== this.maxlength ? t.substring(0, this.maxlength) : t)(t.replace(/[^0-9]/g, "")).replace(/(\d{2})/g, `$1${e}`).replace(/(^\s+|\s+$)/, "")), setTimeout((() => { if (0 === a) i(0); else { const t = s.diffs[a - 1]; t && (t.isDifferent || t.values.previous === e ? (t => !isNaN(+t))(t.values.previous) ? t.values.previous === e ? i(t.position - 1) : t.values.current === e && i(t.position + 1) : i(t.position - 1) : i(t.position)) } })), super.setValueBase(s.alteredValue) } } const Ia = document.createElement("template"); Ia.innerHTML = '\n  <label class="c-label" for="input"><slot name="label"></slot></label>\n  <div class="c-input-wrap" part="ux-input-a11y-text">\n    <slot name="left"></slot>\n    <input class="c-input c-input-text js-delegate-focus" id="input" autocomplete="off" type="text" part="ux-input-a11y-text__input">\n    <slot name="right"></slot>\n  </div>\n  <div class="c-input-error" id="error">\n    <slot class="c-input-slot-error" name="error"></slot>\n  </div>\n'; class Ma extends (js(Qs(Ns))) { constructor() { super() } template() { return Ia } } function Ba(t) { return class extends t { static get properties() { return { height: { type: "string" }, width: { type: "string" } } } attributeChangedCallback(t, e, i) { if (e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "height" === t || "width" === t)) { const e = this.$.querySelector(".m-height-width") || this.container; "IMG" === e.tagName.toUpperCase() ? e.setAttribute(t, this[t]) : e.style[t] = this[t] } } } } const qa = document.createElement("template"); qa.innerHTML = '\n  <label class="c-label" for="input"><slot name="label"></slot></label>\n  <div class="c-input-wrap">\n    <textarea class="c-input c-input-textarea js-delegate-focus m-height-width" id="input" autocomplete="off" part="ux-input-a11y-textarea__input"></textarea>\n  </div>\n  <div class="c-input-error" id="error">\n    <slot class="c-input-slot-error" name="error"></slot>\n  </div>\n'; class za extends (js(Ba(Qs(Ns)))) { template() { return qa } } class Na extends A { static get properties() { return { href: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && "href" === t && (this.parentElement && this.parentElement.hasAttribute("sref") ? this.parentElement.libLink = this.href : this.dispatchEvent(new CustomEvent("liblink", { detail: { href: this.href }, bubbles: !0 }))) } connectedCallback() { this.hidden = !0, this.style.display = "none" } } const Ha = document.createElement("template"); Ha.innerHTML = '\n  <figure role="group" class="c-figure js-container">\n    <slot name="image"></slot>\n    <figcaption>\n      <slot name="legend"></slot>\n    </figcaption>\n  </figure>'; class ja extends A { template() { return Ha } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setLabel() } setLabel() { const t = !!this.querySelector("[slot=legend]") && this.querySelector("[slot=legend]").innerHTML; this.setOrRemoveAttr("aria-label", t) } } const Ra = n`
  :host([fit='cover']) .c-img {
    object-fit: cover;
  }

  :host([fit='contain']) .c-img {
    object-fit: contain;
  }

  :host([fit='fill']) .c-img {
    object-fit: fill;
  }
`, Oa = n`
  .c-img {
    font-style: italic;
    vertical-align: middle;
  }

  :host([mw100]:not([mw100='false'])) .c-img {
    max-width: 100%;
  }
`+ Ra, Pa = document.createElement("template"); Pa.innerHTML = '<img class="js-container c-img" alt=""/>'; class Da extends (Ae(Ba(Q(A)))) { static get properties() { return { src: { type: "string" }, alt: { type: "string" }, a11yHidden: { type: "boolean" }, mw100: { type: "boolean", defaultValue: !0 }, absSrc: { type: "boolean", defaultValue: !0 } } } template() { return Pa } attributeChangedCallback(t, e, i) { if (e !== i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i); const s = this.$.querySelector(".c-img"); switch (t) { case "src": case "abs-src": this.src && s && this._setSrc(s); break; case "alt": s.alt = this.alt; break; case "a11y-hidden": s.setAttribute("aria-hidden", this.a11yHidden, s) } } } _setSrc(t) { const e = `${this.uxLibUrl}/assets/images/`; let i = this.src || ""; this.absSrc ? i = this.src : i.startsWith("./assets/images/") ? (i = i.substr(2), i = `${this.uxLibUrl}/${i}`) : i.startsWith("http") || i.startsWith("https") || i.startsWith("//") || i.startsWith("data:") || (i = i.startsWith("/") ? i.substr(1) : i, i = i.startsWith("./") ? i.substr(2) : i, i = e + i), t.src = i } } let Va = !1; function Ua() { window.uxLib || (window.uxLib = {}) } const Fa = document.createElement("template"); Fa.innerHTML = '\n<svg aria-hidden="true" class="js-container c-svg" width="40" height="40" part="ux-svg"></svg>\n'; class Wa extends (Q(q(tt(A)))) { static get properties() { return { icon: { type: "string" }, libSize: { type: "string", defaultValue: "lg" }, circle: { type: "boolean", deprecated: !0 }, circleSize: { type: "string" }, circleColor: { type: "string" }, rotate: { type: "number" }, libColor: { type: "string" } } } template() { return Fa } constructor() { super(), this.countLoop = 0 } attributeChangedCallback(t, e, i) { if (e !== i || "icon" === t) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "icon": this.setIcon(e); break; case "lib-size": this.setSize(); break; case "circle": this.setBooleanClass(this.circle, "c-svg--circle"); break; case "circle-size": this.setBooleanClass(this.circleSize, "c-svg--circle"), this.setBooleanStyleProp(this.circleSize, "padding", `var(--spacing-${this.circleSize})`); break; case "circle-color": this.setCircleColor(); break; case "rotate": this.container.style.transform = this.rotate ? `rotate(${this.rotate}deg)` : ""; break; case "lib-color": this.setBooleanStyleProp(this.libColor, "--color-svg", this.libColor) } } setIcon(t) { if (!window.uxLib.svgEl) return void (this.countLoop < 3 && (this.countLoop++, setTimeout((() => { window.uxLib.svgEl || (window.uxLib.svgEl = document.querySelector("#uxlibsvg")), this.setIcon() }), 0))); this.countLoop = 0; const e = window.uxLib.svgEl.getElementById(this.icon); e ? (null !== t && (this.$.querySelector("svg").innerHTML = ""), [...e.children].forEach((t => this.container.appendChild(t.cloneNode(!0)))), this.container.setAttribute("viewBox", e.getAttribute("viewBox"))) : console.warn(`Icon : ${this.icon} doesn't exists`) } setSize() { let t = ""; if (this.container && this.container.className) { t = this.container.className.baseVal ? this.container.className.baseVal : this.container.className; const e = t.match(/c-svg-size--\w*/g); e && this.container.classList.remove([...e]) } this.container.classList.add(`c-svg-size--${this.libSize}`) } setCircleColor() { this.circleColor ? this.container.style.borderColor = "none" === this.circleColor ? "transparent" : this.circleColor : this.container.style.removeProperty("border-color") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.countLoop = 0 } } const Ka = n`
  .c-video {
    overflow: hidden;
    padding-bottom: var(--video-padding-bottom);
    position: relative;
    height: 0;
  }

  .c-video .c-iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    border: 0;
  }
`, Ga = document.createElement("template"); Ga.innerHTML = '\n<div class="c-video js-container">\n  <iframe class="c-iframe"></iframe>\n<div>'; class Xa extends (yt(Ae(A))) { static get properties() { return { src: { type: "string" }, libFormat: { type: "string", defaultValue: "16:9" } } } template() { return Ga } attributeChangedCallback(t, e, i) { if (e !== i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i); const s = this.$.querySelector(".c-iframe"); switch (t) { case "src": this.src && (s.src = this.src); break; case "lib-format": if (this.libFormat) { const t = this.libFormat.split(":"), e = t[1] / t[0] * 100 + "%"; this.container.style.setProperty("--video-padding-bottom", e) } } } } } const Ya = document.createElement("template"); Ya.innerHTML = '<div class="c-list js-container"><slot></slot></div>'; class Ja extends (Pe(T(A))) { static get properties() { return { bullet: { type: "boolean", deprecated: !0 } } } template() { return Ya } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "bullet" === t && (Array.from(this.children).forEach((t => { t.style.display = this.bullet ? "list-item" : "" })), this.setBooleanClass(this.bullet, "c-list--bullet"))) } } const Za = document.createElement("template"); Za.innerHTML = '\n<div role="cell" class="c-table-cell js-container">\n\t<slot></slot>\n</div>\n'; class Qa extends A { template() { return Za } } const tn = document.createElement("template"); tn.innerHTML = '\n<div role="columnheader" class="c-table-header js-container">\n\t<slot></slot>\n</div>\n'; class en extends A { template() { return tn } } const sn = document.createElement("template"); sn.innerHTML = '\n<div role="rowgroup" class="rowgroup">\n  <div role="row" class="c-table-row js-container">\n\t  <slot></slot>\n  </div>\n</div>\n'; class an extends A { template() { return sn } } const nn = document.createElement("template"); nn.innerHTML = '\n<div role="table" class="c-table js-container" aria-describedby="table-caption">\n\t<div id="table-caption">\n\t\t<slot name="caption"></slot>\n\t</div>\n\t<slot></slot>\n</div>\n'; class rn extends A { template() { return nn } } const on = n`
  :host {
    --notification-color: #fff;
    --notification-bg-color: var(--color-primary);
  }

  .c-notification {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--text-font-size-xs);
    background-color: var(--notification-bg-color);
    border-radius: 50%;
    color: var(--notification-color);
    width: 20px;
    height: 20px;
    font-weight: bold;
    animation-duration: 0.3s;
    animation-name: scalein;
    animation-timing-function: cubic-bezier(0.63, 2.01, 0.86, 0.87);
  }

  @keyframes scalein {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }
`, ln = document.createElement("div"); ln.classList.add("c-notification"), ln.setAttribute("part", "c-notification"), ln.setAttribute("aria-hidden", !0); const cn = n`
  .c-menu-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: currentcolor;
  }
`, dn = document.createElement("template"); dn.innerHTML = '\n<a class="c-menu-icon js-container m-lib-link" part="ux-menu-icon">\n<ux-svg></ux-svg>\n</a>'; class un extends (At(Ct(function (t) { return class extends t { static get properties() { return { notification: { type: "number" } } } static get style() { return on } constructor() { super() } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "notification" === t && this.setNotification()) } setNotification() { if (this.notification && 0 != +this.notification) this.notificationEl ? this.notificationEl.textContent = this.notification : (this.notificationEl = ln.cloneNode(!0), this.notificationEl.textContent = this.notification, (this.$.querySelector(".m-notif") || this.container).appendChild(this.notificationEl)); else { const t = this.$.querySelector(".c-notification"); t && t.remove(), this.notificationEl = null } } } }(Ot($(A)))))) { constructor() { super(), this.iconEl = this.$.querySelector("ux-svg") } template() { return dn } } const hn = n`
  .c-menu-icon {
    box-sizing: border-box; /** Do not remove this **/
    position: relative;
    width: var(--t-header-height);
    height: var(--t-header-height);
    transition: background-color 0.25s;
    text-decoration: none;
  }

  .c-menu-icon-wrap {
    display: flex;
    align-items: center;
  }
`, pn = cn + hn, bn = document.createElement("template"); bn.innerHTML = '\n<a class="c-menu-icon js-container" href="" aria-label="Retour à l\'étape précédente">\n  <div class="c-menu-icon-wrap">\n    <slot name="icon">\n      <ux-svg lib-size="sm" lib-color="var(--color-primary)" class="c-menu-icon-icon"></ux-svg>\n    </slot>\n    <span class="c-menu-info">Retour</span>\n  </div>\n</a>\n'; class mn extends un { static get properties() { return { libTxt: { type: "string" } } } template() { return bn } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setDisplay() } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-link" === t ? this.setDisplay() : "lib-txt" === t && (this.$.querySelector(".c-menu-info").innerHTML = this.libTxt)) } setDisplay() { this.libLink ? this.container.style.display = "" : this.container.style.display = "none" } } const gn = document.createElement("template"); gn.innerHTML = '<button class="js-container m-btn-no-style" aria-expanded="false">\n  <svg viewBox="0 0 32 32" class="c-burger" aria-hidden="true" width="40" height="40">\n    <path class="cb1" d="M 4,10 H 28 C 29.104,10 30,9.104 30,8 30,6.896 29.104,6 28,6 H 4 C 2.896,6 2,6.896 2,8 c 0,1.104 0.896,2 2,2 z"/>\n    <path class="cb2" d="M 28,14 H 4 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 h 24 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 z"/>\n    <path class="cb3" d="M 28,22 H 4 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 h 24 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 z"/>\n  </svg>\n</button>'; class vn extends (Ct(function (t) { return class extends t { static get properties() { return { a11yControls: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "a11y-controls" === t && this.setOrRemoveAttr("aria-controls", this.a11yControls)) } } }(X(kt(A))))) { static get properties() { return { open: { type: "boolean" } } } constructor() { super(), this.handleOpen = this.handleOpen.bind(this) } template() { return gn } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.addEventListener("click", this.handleOpen), this.a11yLabel || this.container.setAttribute("aria-label", "ouvrir le menu") } disconnectedCallback() { super.connectedCallback && super.connectedCallback(), this.removeEventListener("click", this.handleOpen) } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "open" === t && this.setOpen()) } setOpen() { this.setOrRemoveAttr("aria-expanded", this.open, this.container, !0), this.a11yLabel || this.container.setAttribute("aria-label", this.open ? "fermer le menu" : "ouvrir le menu") } handleOpen() { this.open = !this.open } } const fn = n`
  .c-espace {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--t-header-height);
    width: 217px;
    text-decoration: none;
    font-size: var(--text-font-size-sm);
    text-transform: uppercase;
    color: var(--color-primary);
    transition: background-color 0.25s;
  }

  .c-espace:hover,
  .is-active {
    background-color: #efefef;
  }

  :host([full]:not([full='false'])) .c-espace {
    width: 100%;
  }

  ux-svg {
    margin-left: 5px;
    color: var(--color-text);
  }
`, xn = document.createElement("template"); xn.innerHTML = '<a class="c-espace js-container m-lib-link" href title="Changer d\'espace" part="ux-espace">\n<span class="c-espace__label"></span>\n<ux-svg lib-size="sm"></ux-svg>\n</a>'; class yn extends ($(At(A))) { static get properties() { return { label: { type: "string" } } } template() { return xn } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "label" === t && this.label && (this.$.querySelector(".c-espace__label").textContent = this.label, this.container.setAttribute("aria-label", `L'espace actuel est : ${this.label}, changer d'espace.`))) } } const kn = n`
  :host {
    display: inline-flex;
  }
`, wn = document.createElement("template"); wn.innerHTML = '<div role="listitem" class="c-footer-item js-container"><slot></slot></div>'; class Cn extends A { template() { return wn } } const _n = n`
  :host {
    width: var(--t-footer-outer-width);
    height: var(--t-footer-height);
    background: var(--t-footer-background);
    border-top: var(--t-footer-border-top, none);
    border-right: var(--t-footer-border-right, none);
    border-bottom: var(--t-footer-border-bottom, none);
    border-left: var(--t-footer-border-left, none);
    box-shadow: var(--t-footer-box-shadow, none);
  }

  .c-footer {
    position: relative;
    display: flex;
    flex-flow: var(--t-footer-flex-flow, row);
    align-items: var(--t-footer-flex-align);
    justify-content: var(--t-footer-flex-justify);
    width: var(--t-footer-inner-width-m);
    height: var(--t-footer-height);
    color: var(--t-footer-color);
  }

  @media (min-width: 590px) {
    .c-footer {
      width: var(--t-footer-inner-width-d);
      margin: 0 auto;
    }
  }

  ::slotted(*) {
    font-size: var(--t-footer-link-font-size);
    margin-right: var(--spacing-md);
  }

  ::slotted(a:hover),
  ::slotted(a:focus) {
    color: var(--color-primary-hover) !important;
  }

  ::slotted(a:active) {
    color: var(--color-primary-active) !important;
  }

  [name='right'] {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
  }

  [name='right']::slotted(*) {
    margin-right: 0;
  }
`, En = document.createElement("template"); En.innerHTML = '<footer class="c-footer js-container"><slot role="list"></slot><slot name="right"></slot></footer>'; class Ln extends A { template() { return En } } const An = n`
  .c-footer-menu {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  ::slotted(*) {
    margin-bottom: var(--spacing-md);
  }
`, Sn = document.createElement("template"); Sn.innerHTML = '<div class="js-container c-footer-menu"><slot role="list"></slot><slot name="right"></slot></div>'; class Tn extends (Pt(A)) { template() { return Sn } } const $n = document.createElement("template"); $n.innerHTML = '\n  <span class="c-footnote-link js-container m-tag">\n    <a class="c-footnote-link--link m-a11y-label m-lib-link js-delegate-focus"><slot></slot></a>\n  </span>'; class In extends (j(wt(At(Ct(ee(A)))))) { static get properties() { return { putHash: { type: "boolean", defaultValue: !0 } } } template() { return $n } constructor() { super(), this._updateLinkbackHref = this._updateLinkbackHref.bind(this), this.footnoteLink = this.$.querySelector(".c-footnote-link--link") } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.footnoteLink.addEventListener("click", this._updateLinkbackHref) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.footnoteLink.removeEventListener("click", this._updateLinkbackHref) } _updateLinkbackHref(t) { const e = document.getElementById(this.libLink.substring(1)); e.querySelector("ux-footnote-linkback").libLink = `#${this.id}`, this.putHash || (t.preventDefault(), t.stopPropagation(), setTimeout((() => window.scroll(0, e.offsetTop)), 0)), setTimeout((() => e.focus()), 0) } } const Mn = document.createElement("template"); Mn.innerHTML = '\n  <a class="c-footnote-linkback js-container js-delegate-focus m-lib-link" part="ux-footnote-linkback">\n    <span class="visually-hidden m-link-aria-text"></span>\n    <slot></slot>\n  </a>'; class Bn extends (j(wt(At(Ct(A))))) { static get properties() { return { putHash: { type: "boolean", defaultValue: !0 } } } template() { return Mn } constructor() { super(), this.clickOnDelegEl = this.clickOnDelegEl.bind(this) } clickOnDelegEl(t) { const e = document.querySelector(this.libLink); this.putHash || (t.preventDefault(), t.stopPropagation(), setTimeout((() => window.scrollTo(0, e.offsetTop)))), setTimeout((() => e.focus()), 0) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("click", this.clickOnDelegEl) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.addEventListener("click", this.clickOnDelegEl) } } const qn = n`
  :host {
    width: var(--t-header-outer-width);
    height: var(--t-header-height);
    background-color: var(--t-header-background);
    box-shadow: var(--t-header-shadow, none);
  }

  .c-header {
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    height: var(--t-header-height);
    width: var(--t-header-inner-width);
    padding: var(--t-header-padding);
  }

  @media (min-width: ${window.uxLib.breakpoints.tablet}px) {
    .c-header {
      width: var(--t-header-inner-width-d);
      padding: var(--t-header-padding-d);
      margin: 0 auto;
    }
  }

  .c-header__nav {
    position: relative;
    height: var(--t-header-height);
    display: flex;
    align-items: center;
    padding-left: var(--t-header-padding-left, 0);
    width: 100%;
  }

  slot[name='center'] {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ::slotted(*:not(.no-border)) {
    color: var(--t-header-color);
    border-right: var(--t-header-border);
  }
`, zn = document.createElement("template"); zn.innerHTML = '\n<header class="c-header js-container" role="banner">\n  <nav class="c-header__nav" part="ux-header__nav">\n    <slot name="left"></slot>\n    <slot name="center"></slot>\n    <slot name="right"></slot>\n  </nav>\n</header>'; class Nn extends A { template() { return zn } static get properties() { return { model: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && this.container && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "model" === t && this.setModel()) } setModel() { "auth" === this.model && (document.body.style.setProperty("--t-header-height", "var(--t-header-height--auth)"), this.style.setProperty("--t-header-shadow", "var(--t-header-shadow--auth)")), this.setBooleanClass("auth" === this.model, "c-header-auth") } } const Hn = document.createElement("template"); Hn.innerHTML = '\n<a class="c-login js-container m-lib-link" href="" part="ux-login">\n  <div class="c-login-wrap">\n    <ux-svg class="c-login-logo" lib-size="xl"></ux-svg>\n    <span class="c-login-info"></span>\n    <span class="m-link-aria-text visually-hidden"></span>\n  </div>\n</a>\n'; class jn extends (j(At(Ct($(A))))) { static get properties() { return { libTxt: { type: "string", defaultValue: "Déconnexion" }, full: { type: "boolean" } } } template() { return Hn } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-txt" !== t && "full" !== t || (this.$.querySelector(".c-login-info").innerHTML = this.full ? this.libTxt : "", this.full || this.libTitle || (this.libTitle = this.libTxt))) } } const Rn = n`
  :host {
    --background-color: var(--logo-background-color);

    width: var(--t-header-width);
    min-width: var(--t-header-width);
    height: var(--t-header-height);
  }

  .c-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .c-logo-link {
    transition: background-color 0.25s;
  }

  .c-logo-link:hover,
  .c-logo-link:focus {
    background: #efefef;
  }

  .c-img {
    width: var(--t-logo-width);
    height: var(--t-logo-height);
    max-height: 100%;
  }

  @media (min-width: ${window.uxLib.breakpoints.tablet}px) {
    :root {
      width: var(--t-logo-width-d);
      height: var(--t-logo-height-d);
    }
  }
`+ Ra, On = document.createElement("template"); On.innerHTML = '\n<div class="c-logo js-container">\n  <img class="c-img" alt=""/>\n</div>\n'; const Pn = document.createElement("template"); Pn.innerHTML = '\n<a class="c-logo c-logo-link js-container m-lib-link">\n  <span class="visually-hidden m-link-aria-text"></span>\n  <img class="c-img" alt=""/>\n</a>\n'; class Dn extends (j(Ct(At(Da)))) { template() { return this.libLink ? Pn : On } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-link" === t && (this._changeTemplate("lib-link"), this._setLibLink())) } } class Vn extends (Ct(Ot(A))) { static get properties() { return { icon: { type: "string" }, iconSize: { type: "string" } } } constructor() { super(), this.iconEl = null } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "icon" !== t && "icon-size" !== t || this.setIcon()) } setIcon() { this.icon ? (this.iconEl ? (this.iconEl.icon = this.icon, this.iconEl.setAttribute("lib-size", this.iconSize || "md")) : (this.iconEl = document.createElement("ux-svg"), this.iconEl.setAttribute("icon", this.icon), this.iconEl.setAttribute("lib-size", this.iconSize || "md"), this.iconEl.classList.add("c-menu-item__icon")), this.container.insertBefore(this.iconEl, this.container.firstChild)) : this.iconEl && this.iconEl.remove() } } const Un = document.createElement("template"); Un.innerHTML = '\n<div class="c-menu-item-dropdown js-container">\n  <button aria-expanded="false" class="c-menu-item-dropdown__trigger js-trigger m-btn-no-style m-is-active m-a11y-label" aria-labelledby="1 2 3">\n    <span class="c-mid-slot-wrap">\n      <span>\n        <slot name="title" id="1"></slot>\n        <slot name="subtitle" id="2"></slot>\n      </span>\n      <slot name="badge" id="3"></slot>\n    </span>\n    <ux-svg lib-size="xs" class="c-menu-item-dropdown-arrow"></ux-svg>\n  </button>\n  <div class="c-menu-item-dropdown__content js-content m-list" aria-hidden="true">\n    <slot></slot>\n  </div>\n</div>\n'; let Fn = 0; class Wn extends (Pe(X(le(Vn)))) { template() { return Un } constructor() { super(), this.iconDropEl = this.$.querySelector(".c-menu-item-dropdown-arrow"), this.contentDropEl = this.$.querySelector(".c-menu-item-dropdown__content") } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = Fn; Fn++, this.trigger.setAttribute("aria-controls", `ID-ACC-ITEM-${t}`), this.content.id = `ID-ACC-ITEM-${t}` } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "expanded" === t && (this.iconDropEl && this.setBooleanClass(this.expanded, "c-menu-item-dropdown-arrow--rotate", this.iconDropEl), this.setContentSlot())) } setIcon() { if (this.icon) if (this.iconEl) this.iconEl.icon = this.icon, this.iconEl.setAttribute("lib-size", this.iconSize || "md"); else { this.iconEl = document.createElement("ux-svg"), this.iconEl.setAttribute("icon", this.icon), this.iconEl.setAttribute("lib-size", this.iconSize || "md"), this.iconEl.classList.add("c-menu-item-dropdown-icon"); const t = this.$.querySelector(".c-menu-item-dropdown__trigger"); t.insertBefore(this.iconEl, t.firstChild) } else this.iconEl && this.iconEl.remove() } setContentSlot() { const t = this.contentDropEl.querySelector("slot"); if (this.expanded && !t) { const t = document.createElement("slot"); this.contentDropEl.appendChild(t) } else !this.expanded && t && t.remove() } } const Kn = document.createElement("template"); Kn.innerHTML = '<div aria-hidden="true" class="js-container c-menu-item-hr"></div>'; class Gn extends (Pt(A)) { template() { return Kn } } const Xn = document.createElement("template"); Xn.innerHTML = '<span aria-hidden="true" class="js-container c-menu-item-jump"></span>'; class Yn extends A { template() { return Xn } } const Jn = n`
  .c-menu-item-flex {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`, Zn = document.createElement("template"); Zn.innerHTML = '<div class="js-container c-menu-item"><slot></slot><slot name="subtitle"><slot></div>'; const Qn = document.createElement("template"); Qn.innerHTML = '<div part="ux-menu-item__wrap">\n  <a class="js-container c-menu-item m-lib-link">\n    <div class="c-menu-item-flex">\n      <slot name="title"></slot>\n      <slot name="subtitle"></slot>\n    </div>\n    <slot name="badge"></slot>\n    <slot></slot>\n  </a>\n</div>'; class tr extends (At(Ct(Vn))) { template() { return this.libLink ? Qn : Zn } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "active" === t ? this.setOrRemoveAttr("aria-current", this.active ? "page" : "") : "lib-link" === t && (this._changeTemplate("lib-link"), this._setLibLink())) } } const er = n`
  :host {
    box-sizing: border-box;
    display: block;
    width: var(--t-menu-outer-width);
    height: var(--t-menu-height);
    background-color: var(--t-menu-background);
    border-radius: var(--t-menu-border-radius);
    box-shadow: var(--t-menu-box-shadow);
    border-top: var(--t-menu-border-top, none);
    border-right: var(--t-menu-border-right, none);
    border-bottom: var(--t-menu-border-bottom, none);
    border-left: var(--t-menu-border-left, none);
  }

  .c-menu {
    display: flex;
    justify-content: var(--t-menu-flex-justify);
    flex-direction: var(--t-menu-flex-direction);
    align-items: var(--t-menu-flex-align-items);
    width: var(--t-menu-inner-width-m);
    height: var(--t-menu-height);
    box-sizing: border-box;
  }

  @media (min-width: 590px) {
    .c-menu {
      width: var(--t-menu-inner-width-d);
      margin: 0 auto;
      padding-left: var(--t-menu-inner-padding);
    }
  }

  ::slotted(*) {
    flex: 1 1 auto;
  }
`, ir = document.createElement("template"); ir.innerHTML = '<nav class="c-menu js-container"><div class="m-list"><slot></slot></div></nav>'; class sr extends (Pe(Ct(function (t) { return class extends t { static get properties() { return { libRole: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-role" === t && this.setOrRemoveAttr("role", this.libRole, this.$.querySelector(".m-role"))) } } }(A)))) { template() { return ir } } const ar = n`
  .c-menu-icon-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-decoration: none;
    color: var(--color-text);
  }

  ux-svg {
    color: var(--color-primary);
    margin-right: 5px;
  }

  /* 
.c-menu-icon-title:hover,
.c-menu-icon-title:focus,
.c-menu-icon-title:hover ux-svg,
.c-menu-icon-title:focus ux-svg {
  text-decoration: underline;
  color: var(--color-primary-hover);
}

.c-menu-icon-title:active,
.c-menu-icon-title:active ux-svg {
  text-decoration: underline;
  color: var(--color-primary-active);
} 
*/
`, nr = document.createElement("template"); nr.innerHTML = '\n<a class="c-menu-icon-title js-container m-lib-link" part="ux-menu-icon-title">\n<ux-svg></ux-svg>\n<slot></slot>\n</a>'; const rr = cn + ar; class or extends (St(un)) { constructor() { super(), this.iconEl = this.$.querySelector("ux-svg") } template() { return nr } } const lr = n`
  .c-menu-sociaux-item {
    text-decoration: none;
    color: var(--t-menu-sociaux-item-color);
  }

  .c-menu-sociaux-item:hover,
  .c-menu-sociaux-item:focus {
    color: var(--t-menu-sociaux-item-color-hover);
  }

  .c-menu-sociaux-item:active {
    color: var(--t-menu-sociaux-item-color-active);
  }
`, cr = document.createElement("template"); cr.innerHTML = '\n<a class="c-menu-sociaux-item js-container m-lib-link" part="ux-menu-sociaux-item">\n  <ux-svg lib-size="lg"></ux-svg>\n</a>\n'; class dr extends (Pt($(St(Ot(A))))) { template() { return cr } } const ur = n`
  .c-menu-sociaux {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::slotted(*:not(:last-child)) {
    margin-right: 2rem;
  }
`, hr = document.createElement("template"); hr.innerHTML = '<div class="js-container c-menu-sociaux"><slot></slot></div>'; class pr extends (E(A)) { template() { return hr } } const br = n`
  .c-menu-icon {
    position: relative;
    width: var(--t-header-height);
    height: var(--t-header-height);
    transition: background-color 0.25s;
    text-decoration: none;
  }

  .c-menu-icon:hover,
  .c-menu-icon:focus,
  .is-active {
    background-color: #efefef;
  }

  .c-menu-icon-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-menu-info {
    display: none;
    position: relative;
  }

  .c-menu-info p {
    margin: 0;
  }

  .c-menu-info p:nth-of-type(2) {
    font-size: var(--text-font-size-sm);
  }

  .c-notification {
    position: absolute;
    top: -7px;
    right: -12px;
  }

  /** Affichage plein en ligne **/
  :host([full]:not([full='false'])) .c-menu-icon {
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }

  :host([full]:not([full='false'])) .c-menu-icon-wrap {
    width: 320px;
  }

  :host([full]:not([full='false'])) ux-svg {
    width: 50px;
  }

  :host([full]:not([full='false'])) .c-menu-info {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
  }

  :host([full]:not([full='false'])) .c-notification {
    position: absolute;
    top: 3px;
    right: 3px;
  }
`, mr = document.createElement("template"); mr.innerHTML = '\n<a class="c-menu-icon js-container m-lib-link" aria-label="Mon conseiller : Messagerie, contacts, prise de rendez-vous" title="Mon conseiller, ma messagerie" href part="ux-messagerie">\n  <div class="c-menu-icon-wrap m-notif" part="ux-messagerie__wrap">\n    <ux-svg lib-size="xl" part="ux-messagerie__ux-svg"></ux-svg>\n    <div class="c-menu-info" part="ux-messagerie__info">\n      <p>MON CONSEILLER</p>\n      <p>Messagerie, contacts, prise de rendez-vous</p>\n    </div>\n  </div>\n</a>\n'; const gr = cn + br; class vr extends un { static get properties() { return { full: { type: "boolean" } } } template() { return mr } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "notification" === t ? this.notification && 0 != +this.notification ? this.a11yLabel = `Mon conseiller : Messagerie, contacts, prise de rendez-vous. Vous avez ${this.notification} messages non lus` : this.a11yLabel = "Mon conseiller : Messagerie, contacts, prise de rendez-vous." : "full" === t && this.setOrRemoveAttr("title", this.full ? "" : "Mon conseiller, ma messagerie")) } } const fr = n`
  .c-pager-item-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .c-pager-item {
    width: 34px;
    height: 34px;
    background-color: white;
    border-radius: 50%;
    font-size: 16px;
    font-family: var(--font-family);
    color: var(--color-text);
  }

  .c-pager-item--first,
  .c-pager-item--prev,
  .c-pager-item--next,
  .c-pager-item--last {
    color: var(--color-primary);
    font-weight: bold;
  }

  .c-pager-item:hover {
    background-color: var(--color-primary-hover);
    color: white;
  }

  .c-pager-item:active {
    background-color: var(--color-primary-active);
    color: white;
  }

  .c-pager-item-selected {
    background-color: var(--color-primary);
    color: white;
  }

  .c-pager-item-disabled,
  .c-pager-item-disabled:hover {
    background-color: white;
    color: var(--color-disabled);
  }

  .c-pager-item--ellipsis,
  .c-pager-item--ellipsis:hover {
    background-color: transparent;
    color: var(--color-text);
  }
`, xr = document.createElement("template"); xr.innerHTML = '<button class="c-pager-item js-container m-btn-no-style"></button>'; const yr = document.createElement("template"); yr.innerHTML = '<a class="c-pager-item c-pager-item-link js-container m-lib-link"></a>'; const kr = document.createElement("template"); kr.innerHTML = '<span class="c-pager-item c-pager-item--ellipsis js-container" aria-label="Ellipsis">...</span>'; class wr extends (j(At(X(A)))) { static get properties() { return { type: { type: "string" }, value: { type: "string" }, selected: { type: "boolean" }, disabled: { type: "boolean" } } } constructor() { super(), this.deprecated = !0 } template() { return "ellipsis" === this.getAttribute("type") || "ellipsis" === this.getAttribute("value") ? kr : "link" === this.getAttribute("type") ? yr : xr } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("role", "listitem") } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "value": this.setValue(); break; case "selected": this.setBooleanClass(this.selected, "c-pager-item-selected"), this.selected ? this.container.setAttribute("title", `Page ${this.value} - active`) : this.container.setAttribute("title", `Page ${this.value}`); break; case "disabled": this.setBooleanClass(this.disabled, "c-pager-item-disabled"), this.disabled ? this.container.setAttribute("aria-disabled", "true") : this.container.removeAttribute("aria-disabled"); break; case "type": this._changeTemplate("type") } } setValue() { switch (this.container.className = this.container.className.replace(/c-pager-item--\w*/g, ""), this.value) { case "first": this.container.classList.add("c-pager-item--first"), this.setContainerInnerHtml("&lt;&lt;", "Afficher la première page"); break; case "prev": this.container.classList.add("c-pager-item--prev"), this.setContainerInnerHtml("&lt;", "Afficher la page précédente"); break; case "ellipsis": this.$.innerHTML = "", this.$.appendChild(kr.content.cloneNode(!0)), this.container = this.$.querySelector(".js-container"); break; case "next": this.container.classList.add("c-pager-item--next"), this.setContainerInnerHtml("&gt;", "Afficher la page suivante"); break; case "last": this.container.classList.add("c-pager-item--last"), this.setContainerInnerHtml("&gt;&gt;", "Afficher la dernière page"); break; default: this.container.setAttribute("title", `Page ${this.value}`), this.container.innerHTML = this.value } } setContainerInnerHtml(t, e) { this.container.innerHTML = `\n      <span aria-hidden="true">\n        ${t}\n      </span>\n      <span class="visually-hidden">\n        ${e}\n      </span>` } } const Cr = n`
  :host,
  .c-pager {
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  ::slotted(ux-pager-item) {
    margin-right: 10px;
  }

  @media (min-width: 320px) {
    .c-pager {
      white-space: nowrap;
    }
  }
`, _r = document.createElement("template"); _r.innerHTML = '<nav role="navigation" class="c-pager js-container"><div role="list"><slot></slot></div></nav>'; class Er extends (Ct(A)) { template() { return _r } constructor() { super(), this.deprecated = !0 } } const Lr = document.createElement("template"); Lr.innerHTML = '\n  <nav role="navigation" class="c-pager js-container">\n    <a href="" class="c-pager--btn c-pager--prev" title="Afficher la page précédente">\n      <ux-svg lib-size="size" rotate="180" part="ux-a11y-pager__btn-prev"></ux-svg>\n      <span class="visually-hidden">Afficher la page précédente</span>\n    </a>\n    <label for="input-pager" class="c-pager--label visually-hidden">Page 1 sur 1</label>\n    <input id="input-pager" type="number" class="c-pager--input" title="Saisir le numéro de page à atteindre" autocomplete="off" part="ux-a11y-pager__input"></input>\n    <span aria-hidden="true" class="c-pager--slash">/</span>\n    <span aria-hidden="true" class="c-pager--total">1</span>\n    <a href="" class="c-pager--btn c-pager--next" title="Afficher la page suivante" part="ux-a11y-pager__btn-next">\n      <ux-svg lib-size="size"></ux-svg>\n      <span class="visually-hidden">Afficher la page suivante</span>\n    </a>\n  </nav>'; class Ar extends (Ct(j(A))) { static get properties() { return { total: { type: "number", defaultValue: 1 }, value: { type: "number", defaultValue: 1 } } } template() { return Lr } constructor() { super(), this.input = this.$.querySelector(".c-pager--input"), this.label = this.$.querySelector(".c-pager--label"), this.prevBtn = this.$.querySelector(".c-pager--prev"), this.nextBtn = this.$.querySelector(".c-pager--next"), this.tmpEl = document.createElement("template"), this.minMaxValue = this.minMaxValue.bind(this), this.setValue = this.setValue.bind(this), this.setPreviousPage = this.setPreviousPage.bind(this), this.setNextPage = this.setNextPage.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.input.addEventListener("input", this.minMaxValue), this.input.addEventListener("keyup", this.setValue), this.input.addEventListener("blur", this.setValue), this.prevBtn.addEventListener("click", this.setPreviousPage), this.nextBtn.addEventListener("click", this.setNextPage), this.pageIcon && (this.prevBtn.querySelector("ux-svg").setAttribute("icon", this.pageIcon), this.nextBtn.querySelector("ux-svg").setAttribute("icon", this.pageIcon)) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.input.removeEventListener("input", this.minMaxValue), this.input.removeEventListener("keyup", this.setValue), this.input.removeEventListener("blur", this.setValue), this.prevBtn.removeEventListener("click", this.setPreviousPage), this.nextBtn.removeEventListener("click", this.setNextPage) } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "value": this.fromItSelf ? this.fromItSelf = !1 : this.value < 1 ? (this.fromItSelf = !0, this.setValueBase(1)) : this.value > this.total ? (this.fromItSelf = !0, this.setValueBase(this.total)) : this.setValueBase(this.value); break; case "total": this.$.querySelector(".c-pager--total").innerHTML = this.total, this.label.innerHTML = `Page ${this.value} sur ${this.total}`, this.updateBtns() } } setValueBase(t) { this.input.value = t, this.value = t, this.label.innerHTML = `Page ${this.value} sur ${this.total}`, this.updateBtns(), this.dispatchEvent(new Event("change")) } setValue(t) { if (13 === t.keyCode || "blur" === t.type) { const t = this.value + "", e = this.input.value; if (e === t) return; e >= 1 && e <= this.total ? (this.fromItSelf = !0, this.setValueBase(e)) : "" === e ? (this.fromItSelf = !0, this.setValueBase(1)) : (this.fromItSelf = !0, this.setValueBase(t)) } } minMaxValue(t) { t.target.value > this.total ? this.input.value = this.total : t.target.value < 1 && (this.input.value = 1) } setPreviousPage(t) { t.preventDefault(), this.fromItSelf = !0, this.setValueBase(this.value - 1), this.updateBtns() } setNextPage(t) { t.preventDefault(), this.fromItSelf = !0, this.setValueBase(this.value + 1), this.updateBtns() } updateBtns() { const t = this.$.querySelector(".c-pager--prev"), e = this.$.querySelector(".c-pager--next"); this.value < 2 ? this.tmpEl.content.appendChild(this.prevBtn) : t || this.container.insertBefore(this.prevBtn, this.container.firstChild), this.value > this.total - 1 ? this.tmpEl.content.appendChild(this.nextBtn) : e || this.container.appendChild(this.nextBtn) } } const Sr = n`
  .c-menu-icon {
    position: relative;
    width: var(--t-header-height);
    height: var(--t-header-height);
    transition: background-color 0.25s;
    text-decoration: none;
  }

  .c-menu-icon:hover,
  .c-menu-icon:focus,
  .is-active {
    background-color: #efefef;
  }

  .c-menu-icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-menu-info {
    display: none;
  }

  .c-menu-info span {
    margin: 0;
  }

  .c-menu-info span:nth-of-type(2) {
    font-size: var(--text-font-size-sm);
  }

  /** Affichage plein en ligne **/
  :host([full]:not([full='false'])) .c-menu-icon {
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }

  :host([full]:not([full='false'])) .c-menu-icon-wrap {
    width: 320px;
  }

  :host([full]:not([full='false'])) ux-svg {
    width: 50px;
  }

  :host([full]:not([full='false'])) .c-menu-info {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: 6px;
  }
`, Tr = document.createElement("template"); Tr.innerHTML = '\n<a class="c-menu-icon js-container" title="Accéder aux paramétrages" href part="ux-parametrage">\n  <span class="c-menu-icon-wrap" part="ux-parametrage__wrap">\n    <ux-svg lib-size="xl" part="ux-parametrage__ux-svg"></ux-svg>\n    <span class="c-menu-info" part="ux-parametrage__info" id="text"></span>\n  </span>\n</a>\n'; const $r = cn + Sr; class Ir extends (j(un)) { static get properties() { return { full: { type: "boolean" } } } template() { return Tr } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setMenuInfo() } attributeChangedCallback(t, e, i) { e !== i && this.container && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "full" === t && (this.setOrRemoveAttr("title", this.title), this.setOrRemoveAttr("aria-labelledby", "text"), this.setMenuInfo())) } setMenuInfo() { const t = this.$.querySelector(".c-menu-info"); this.full ? t.innerHTML = "<span>PARAMÉTRAGE</span><span>Gérer ma sécurité bancaire, mes alertes</span>" : t.innerHTML = '<span class="visually-hidden">Accéder aux paramétrages</span>' } } const Mr = document.createElement("template"); Mr.innerHTML = '\n<div class="c-processus js-container" part="ux-processus">\n  <slot></slot>\n</div>\n'; class Br extends (Pe(pt(A))) { template() { return Mr } constructor() { super(), this.setVocalisationChild = this.setVocalisationChild.bind(this), this.slotChange(this._slots.default, this.setVocalisationChild) } setVocalisationChild() { this.allProcessusItems.forEach((t => { t.setVocalisation() })) } get allProcessusItems() { return [...this.querySelectorAll("ux-processus-item")] } } const qr = document.createElement("template"); qr.innerHTML = '\n<div class="c-processus-item js-container">\n  <p class="visually-hidden c-processus-item__legend"></p>\n  <div class="c-processus-item__composite-icon" aria-hidden="true">\n    <div class="c-processus-item__number">\n      <slot name="number"></slot>\n    </div>\n    <div class="c-processus-item__icon">\n      <slot name="icon"></slot>\n    </div>\n  </div>\n  <div class="c-processus-item__composite-text">\n    <div class="c-processus-item__label">\n      <slot name="label"></slot>\n    </div>\n    <div class="c-processus-item__description">\n      <slot name="description"></slot>\n    </div>\n  </div>\n  <div class="c-processus-item__progress" aria-hidden="true"></div>\n</div>\n'; class zr extends (j(A)) { static get properties() { return { model: { type: "string" } } } template() { return qr } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.setVocalisation()) } setVocalisation() { if ("final" === this.model) this.$.querySelector(".c-processus-item__legend").innerHTML = "Étape finale"; else { const t = this.parentElement.allProcessusItems.findIndex((t => t === this)) + 1; this.$.querySelector(".c-processus-item__legend").innerHTML = "Étape " + t + " sur " + this.parentElement.allProcessusItems.length } } } const Nr = document.createElement("template"); Nr.innerHTML = '\n<div class="c-profil js-container" part="ux-profil">\n  <ux-svg class="c-profil__img"></ux-svg>\n  <div class="c-profil__content" aria-hidden="true">\n    <div class="c-profil__name"></div>\n    <div class="c-profil__connexion"></div>\n  </div>\n</div>\n'; const Hr = document.createElement("template"); Hr.innerHTML = '\n<a class="c-profil c-profil-link js-container m-lib-link" part="ux-profil">\n  <ux-svg class="c-profil__img"></ux-svg>\n  <div class="c-profil__content" aria-hidden="true">\n    <div class="c-profil__name"></div>\n    <div class="c-profil__connexion"></div>\n  </div>\n  <ux-svg class="c-profil-arrow" lib-size="xs"></ux-svg>\n</a>\n'; class jr extends (At(Ot(A))) { static get properties() { return { name: { type: "string" }, connexion: { type: "string" } } } template() { return this.libLink ? Hr : Nr } attributeChangedCallback(t, e, i) { if (e !== i) { switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "name": this.setName(); break; case "connexion": this.setConnexion(); break; case "lib-link": this.setLibLink() }this.setA11yLabel() } } setName() { this.$.querySelector(".c-profil__name").textContent = this.name } setConnexion() { this.$.querySelector(".c-profil__connexion").textContent = this.connexion } setLibLink() { this._changeTemplate("lib-link"), this._setLibLink(), this.setIco && this.setIco() } setA11yLabel() { const t = (this.name ? `Connecté en tant que ${this.name}` : "") + (this.connexion ? `, ${this.connexion}` : ""); if (this.libLink) { const e = this.$.querySelector(".c-profil-link"); e && e.setAttribute("aria-label", t + ", accédez à votre profil.") } else { const e = this.$.querySelector(".c-profil"); e && e.setAttribute("aria-label", t + ".") } } } const Rr = n`
  :host {
    --color: var(--color-text);

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;
    box-sizing: border-box;
  }

  button,
  ux-svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`, Or = document.createElement("template"); Or.innerHTML = '<button class="js-container m-btn-no-style">\n<ux-svg></ux-svg>\n</button>'; class Pr extends vn { template() { return Or } } const Dr = n`
  .c-scrollback {
    --color-svg: var(--color-border);

    z-index: 30;
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    transform: rotate(-90deg);
    display: none;
    border: 2px solid var(--color-border);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
`, Vr = document.createElement("template"); Vr.innerHTML = '<a href="#" class="js-container c-scrollback" title="Retourner en haut de la page">\n<span class="visually-hidden">Retourner en haut de la page</span>\n<ux-svg class="c-scrollback__icon"></ux-svg>\n</a>'; class Ur extends (j($(A))) { static get properties() { return { focusBackElement: { type: "string" } } } template() { return Vr } constructor() { super(), this.scrollToTop = this.scrollToTop.bind(this), this.scrollHandler = this.scrollHandler.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.container.addEventListener("click", this.scrollToTop), window.addEventListener("scroll", this.scrollHandler) } disconnectedCallback() { super.connectedCallback && super.connectedCallback(), this.container.removeEventListener("click", this.scrollToTop), window.removeEventListener("scroll", this.scrollHandler) } scrollHandler() { const t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; this.container.style.display = t > 20 ? "flex" : "none" } scrollToTop(t) { if (t.stopPropagation(), t.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" }), "nope" !== this.focusBackElement) { const t = document.getElementById(this.focusBackElement) || document.querySelector("ux-heading[tag=h1]") || document.querySelector("h1"); t && (t.getAttribute("tabindex") || (t.tabIndex = "-1"), t.focus()) } } } const Fr = document.createElement("template"); Fr.innerHTML = '\n  <nav class="c-shortcut-nav">\n    <div class="c-shortcut" role="list">\n    </div>\n  </nav>\n'; class Wr extends A { static get properties() { return { isOpenMobile: { type: "boolean" }, hasScrolled: { type: "boolean" } } } template() { return Fr } constructor() { super(), this.listEl = this.$.querySelector(".c-shortcut"), this.nav = this.$.querySelector(".c-shortcut-nav"), this.onScrollEvent = this.onScrollEvent.bind(this) } set data(t) { if (t) { this.listEl.innerHTML = ""; const e = document.createElement("template").content; t.forEach((t => { e.appendChild(this.renderOneItem(t)) })), this.listEl.appendChild(e) } } connectedCallback() { super.connectedCallback && super.connectedCallback(), window.addEventListener("scroll", this.onScrollEvent) } onScrollEvent() { window.removeEventListener("scroll", this.onScrollEvent), this.setOpenMobile() } setOpenMobile() { document.body.classList.add("ux-shortcut-open"), this.listEl.classList.add("is-open-mobile"), this.nav.classList.add("is-open-mobile"), this.isOpenMobile = !0 } renderOneItem(t) { const e = document.createElement("div"); e.classList.add("c-shortcut-item"), e.setAttribute("role", "listitem"); const i = t.icon ? `<ux-svg icon="${t.icon}" class="c-icon c-shortcut-icon"></ux-svg>` : ""; return e.innerHTML = `\n      <a class="c-shortcut-a" href="${t.path}">\n        ${i}\n        <span class="c-shortcut-label">${t.label}</span>\n      </a>\n    `, e } } const Kr = n`
  :host,
  :host([open='false']) {
    position: absolute;
    top: 10rem;
    height: var(--t-sidebar-height-m);
    width: var(--t-sidebar-inner-width-m);
    background: var(--t-sidebar-background-m);
    transform: translateX(0);
    transition: 300ms transform ease-in-out;
  }

  :host([open='true']),
  :host([open='open']) {
    transform: translateX(-100%);
  }

  @media (min-width: 590px) {
    :host,
    :host([open='false']) {
      position: relative;
      top: 0;
      height: var(--t-sidebar-height-d);
      width: var(--t-sidebar-inner-width-d);
      background: var(--t-sidebar-background-d);
    }
  }
`, Gr = document.createElement("template"); Gr.innerHTML = '<div class="c-sidebar"><slot></slot></div>'; class Xr extends A { static get properties() { return { open: { type: "boolean" } } } template() { return Gr } } const Yr = n`
  a {
    color: white;
    font-size: 15px;
    padding: 5px;
    text-decoration: none;
    min-height: 100%;
  }

  a:hover,
  a:focus,
  a:active {
    box-shadow: 0 0 3px 1px #4d90fe;
    color: white;
  }
`, Jr = document.createElement("template"); Jr.innerHTML = '<div class="js-container"><a class="m-lib-link m-a11y-label" part="ux-skip-nav__link"><slot></slot></a></div>'; class Zr extends (At(Ct(A))) { constructor() { super(), this.handleClick = this.handleClick.bind(this) } handleClick(t) { t.preventDefault(); const e = this.$.querySelector("[href]"), i = e.href.split("#").pop(), s = document.getElementById(i); if (s) { const t = s.getAttribute("tabindex"); s.setAttribute("tabindex", "-1"), s.focus(), null != t ? s.setAttribute("tabindex", t) : s.removeAttribute("tabindex") } else window.location.href = e.href } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.container.addEventListener("click", this.handleClick) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.container.removeEventListener("click", this.handleClick) } template() { return Jr } } const Qr = n`
  :host {
    position: absolute;
    display: block;
    width: 100vw;
    height: 40px;
    left: 0;
    padding: 6px;
    color: white;
    border-bottom: 1px solid white;
    background: #bf1722;
    transition: transform 0 ease-in-out;
    transform: translateY(-160px);
    z-index: 35;
  }

  :host(:focus-within) {
    transform: translateY(0);
    transition: transform 0.35s ease-in-out;
  }

  slot {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`, to = document.createElement("template"); to.innerHTML = '<div class="js-container m-list"><slot></slot></div>'; class eo extends (Pe(A)) { template() { return to } } const io = document.createElement("template"); io.innerHTML = '\n<div class="c-steps js-container">\n    <div class="c-steps__wrapper m-list">\n      <slot name="steps"></slot>\n      <slot></slot>\n    </div>\n    <div class="c-steps__progress" aria-hidden="true">\n      <slot name="progress"></slot>\n    </div>\n</div>\n'; class so extends (Pe(pt(A))) { constructor() { super(), this.progressBarWrapper = this.$.querySelector(".c-steps__progress"), this._setProgressBar = this._setProgressBar.bind(this), this._slots.steps.deprecated = !0 } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.slotChange(this._slots.steps, this._setProgressBar), this.slotChange(this._slots.default, this._setProgressBar), this._setProgressBar() } template() { return io } _setProgressBar() { const t = this.querySelectorAll("ux-steps-item"), e = (t.length - 1) / t.length * 100; this.progressBarWrapper.style.width = `${parseInt(e)}%` } } const ao = document.createElement("template"); ao.innerHTML = '\n<div class="c-steps-item js-container">\n  <slot name="number" class="c-steps-item__number" aria-hidden="true"></slot>\n  <slot name="label" class="c-steps-item__label" aria-hidden="true"></slot>\n  <slot class="c-steps-item__label" aria-hidden="true"></slot>\n  <p class="visually-hidden m-hidden-label"></p>\n</div>\n'; class no extends (R(j(A))) { template() { return ao } static get properties() { return { model: { type: "string" } } } constructor() { super(), this._slots.label.deprecated = !0 } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "model" === t && this._setModel()) } _setModel() { switch (this.model) { case "complete": this._setComplete(); break; case "ongoing": this._setOngoing(); break; case "upcoming": this._setUpcoming() } } _setComplete() { this._setNumber(), this._setAriaLabel("terminée") } _setOngoing() { this._setNumber(), this._setAriaLabel("en cours") } _setUpcoming() { this._setNumber(), this._setAriaLabel("à venir") } _setNumber() { this._slots.number.innerHTML = this.stepsItemIndex } _setAriaLabel(t) { if (this._slots.default && this._slots.default.assignedNodes()[0]) { const e = this._slots.default.assignedNodes()[0].textContent.trim(), i = `Étape ${this.stepsItemIndex} sur ${this.stepsItem.length}, ${e}, ${t}`; this.$.querySelector(".m-hidden-label").innerHTML = i } } get stepsItem() { return [...this.parentElement.querySelectorAll("ux-steps-item")] } get stepsItemIndex() { return this.stepsItem.findIndex((t => t === this)) + 1 } } const ro = n`
  :host {
    position: relative;
    display: flex;
    height: var(--sticky-height);
    --sticky-top-scrolling-pos: calc(var(--t-header-height) + var(--t-espace-height));
  }

  .c-sticky {
    position: relative;
    top: 0;
    z-index: 15;
  }

  .c-sticky--scrolling {
    position: fixed;
    top: var(--sticky-top-scrolling-pos);
  }

  :host([full]:not([full='false'])) .c-sticky--scrolling {
    right: 0;
    width: 100%;
  }

  .c-sticky__movable {
    width: var(--sticky-width-parent-element);
    padding: var(--spacing-sm);
  }

  .c-sticky--scrolling .c-sticky__movable {
    position: relative;
  }

  :host([full]:not([full='false'])) .c-sticky--scrolling .c-sticky__movable {
    left: var(--sticky-left-scrolling-pos);
  }

  @media (min-width: ${window.uxLib.breakpoints.tablet}px) {
    .c-sticky__movable {
      padding: var(--spacing-md) var(--spacing-sm);
    }
  }
`, oo = document.createElement("template"); oo.innerHTML = '\n<div class="c-sticky js-container">\n  <div class="c-sticky__movable">\n    <slot></slot>\n  </div>\n</div>'; class lo extends A { template() { return oo } static get properties() { return { full: { type: "boolean" } } } constructor() { super(), this.handleScroll = this.handleScroll.bind(this), this.handleResize = this.handleResize.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize), setTimeout(this.handleResize, 0) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize) } handleScroll() { const t = this.getBoundingClientRect().top < document.querySelector("ux-header").getBoundingClientRect().bottom; this.setBooleanClass(t, "c-sticky--scrolling", this.container), this.setBooleanStyleProp(t, "--sticky-height", `${this.container.offsetHeight}px`, this) } handleResize() { const t = this.parentElement.offsetWidth - (window.getComputedStyle(this.parentElement.container).getPropertyValue("padding-left") || 0) - (window.getComputedStyle(this.parentElement.container).getPropertyValue("padding-right") || 0); this.style.setProperty("--sticky-left-scrolling-pos", `${this.parentElement.getBoundingClientRect().left}px`), this.style.setProperty("--sticky-width-parent-element", `${t}px`) } } const co = n`
  :host {
    display: block;
    position: relative;
  }

  .c-flex {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  :host([h100]:not([h100='false'])),
  :host([h100]:not([h100='false'])) .c-flex {
    height: 100%;
  }

  .c-flex ::slotted([w100]) {
    width: 100%;
  }

  ::slotted(ux-svg) {
    line-height: 0;
  }

  :host([column]:not([column='false'])) .c-flex {
    flex-flow: column;
  }

  :host([nowrap]:not([nowrap='false'])) .c-flex {
    flex-wrap: nowrap;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([column-m]:not([column-m='false'])) .c-flex {
      flex-flow: column;
    }
  }
`, uo = document.createElement("template"); uo.innerHTML = '\n<div class="js-container c-flex m-tag" part="ux-flex">\n  <slot></slot>\n</div>\n'; class ho extends (ee(Xt(Ba(T(A))))) { template() { return uo } } const po = n`
  :host([line]:not([line='false'])) .c-key-value {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([line-d]:not([line-d='false'])) .c-key-value {
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`, bo = document.createElement("template"); bo.innerHTML = '\n  <div class="js-container c-key-value" part="ux-key-value">\n    <div class="c-key-value--key">\n      <slot name="key"></slot>\n    </div>\n    <div class="c-key-value--value">\n      <slot name="value"></slot>\n    </div>\n  </div>\n'; class mo extends A { template() { return bo } } document.createElement("template").innerHTML = '\n  <div class="js-container c-layout">\n    <div class="c-layout__top">\n      <slot name="top"></slot>\n    </div>\n    <div class="c-layout__main">\n      <slot name="left"></slot>\n      <slot></slot>\n      <slot name="right"></slot>\n    </div>\n    <div class="c-layout__bottom">\n      <slot name="bottom"></slot>\n    </div>\n  </div>'; const go = n`
  :host {
    --main-background-color: transparent;

    background-color: var(--main-background-color);
  }
`, vo = document.createElement("template"); vo.innerHTML = '<main role="main" class="js-container c-main"><slot></slot></main>'; class fo extends (T(A)) { template() { return vo } } const xo = n`
  .c-row-cell {
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column nowrap;
  }

  :host([align-x='start']) .c-row-cell {
    justify-content: flex-start;
  }

  :host([align-x='end']) .c-row-cell {
    justify-content: flex-end;
  }

  :host([align-x='center']) .c-row-cell {
    justify-content: center;
  }

  :host([align-x='between']) .c-row-cell {
    justify-content: space-between;
  }

  :host([align-x='around']) .c-row-cell {
    justify-content: space-around;
  }

  :host([align-x='evenly']) .c-row-cell {
    justify-content: space-evenly;
  }

  :host([align-y='start']) .c-row-cell {
    align-items: flex-start;
  }

  :host([align-y='end']) .c-row-cell {
    align-items: flex-end;
  }

  :host([align-y='center']) .c-row-cell {
    align-items: center;
  }

  :host([align-y='between']) .c-row-cell {
    align-items: space-between;
  }

  :host([align-y='around']) .c-row-cell {
    align-items: space-around;
  }

  :host([align-y='evenly']) .c-row-cell {
    align-items: space-evenly;
  }
`, yo = document.createElement("template"); yo.innerHTML = '<div class="js-container c-row-cell"><slot></slot></div>'; class ko extends A { static get properties() { return { width: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "width" === t && (this.container.style = "width: " + this.width)) } template() { return yo } } const wo = document.createElement("template"); wo.innerHTML = '<div class="js-container c-row" part="ux-row"><slot></slot></div>'; class Co extends (T(A)) { template() { return wo } } const _o = document.createElement("template"); _o.innerHTML = '<div class="js-container m-tag"><slot></slot></div>'; class Eo extends (ee(Q(T(A)))) { constructor() { super() } template() { return _o } } n`
  .c-verticalalign {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  ::slotted(div) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
`; function Lo(t) { return class extends t { static get properties() { return { libSize: { type: "string" } } } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.container.style.margin = 0 } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-size" === t && this.setBooleanStyleProp(this.libSize, "font-size", `var(--text-font-size-${this.libSize})`)) } } } function Ao(t) { return class extends t { static get properties() { return { bold: { type: "boolean" }, semiBold: { type: "boolean" }, normalWeight: { type: "boolean" } } } attributeChangedCallback(t, e, i) { if (e !== i) switch (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), t) { case "bold": this.setBooleanStyleProp(this.bold, "font-weight", "bold"); break; case "semi-bold": this.setBooleanStyleProp(this.semiBold, "font-weight", "600"); break; case "normal-weight": this.setBooleanStyleProp(this.normalWeight, "font-weight", "normal") } } } } document.createElement("template").innerHTML = '<div class="js-container c-verticalalign">\n                    <slot></slot>\n                </div>'; const So = n`
  :host([center]:not([center='false'])) .m-align-text {
    display: block;
    text-align: center;
  }

  :host([right]:not([right='false'])) .m-align-text {
    display: block;
    text-align: right;
  }

  :host([left]:not([left='false'])) .m-align-text {
    display: block;
    text-align: left;
  }

  :host([justify]:not([justify='false'])) .m-align-text {
    display: block;
    text-align: justify;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([center-m]:not([center-m='false'])) .m-align-text {
      display: block;
      text-align: center;
    }

    :host([right-m]:not([right-m='false'])) .m-align-text {
      display: block;
      text-align: right;
    }

    :host([left-m]:not([left-m='false'])) .m-align-text {
      display: block;
      text-align: left;
    }

    :host([justify-m]:not([justify-m='false'])) .m-align-text {
      display: block;
      text-align: justify;
    }
  }
`; function To(t) { return class extends t { static get style() { return So } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = "m-align-text"; this.$.querySelector(`.${t}`) || this.container.classList.add(t) } } } const $o = document.createElement("template"); $o.innerHTML = '<span class="js-container c-amount m-tag"></span>'; class Io extends (ee(j(at(Lo(Ao(To(A))))))) { static get properties() { return { value: { type: "number" }, currency: { type: "string" }, round: { type: "boolean" }, suffix: { type: "string" }, autocolor: { type: "boolean" } } } template() { return $o } constructor() { super(), this._a11yAmount = this.$.querySelector(".c-amount--a11y") } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), !this.value && 0 !== this.value || "value" !== t && "currency" !== t && "round" !== t && "suffix" !== t && "autocolor" !== t || this.setValue()) } setValue() { const t = this.value; this.locale = "fr-FR", this.currency = this.currency || "EUR"; const e = this.getCurrencyDisplay(); if (!isNaN(t)) { const i = Mo(this.round), s = { minimumFractionDigits: i, maximumFractionDigits: i, style: "currency", currency: this.currency, currencyDisplay: e }; this.container.textContent = Bo(`${t.toLocaleString(this.locale, s)}`.replace(/[ \u202F\u00A0]/g, " ")), this.suffix && this._buildSuffix(), this.autocolor && (this.setBooleanClass(t < 0, "c-amount--negative"), this.setBooleanClass(t > 0, "c-amount--positive")) } } _buildSuffix() { switch (this.suffix) { case "mois": case "an": this.container.innerHTML += '\n        <span aria-hidden="true"> /</span>\n        <span class="visually-hidden">par</span>\n        ' + this.suffix; break; default: this.suffix.includes("/") ? this._a11ySlash() : this.container.textContent += " " + this.suffix } } _a11ySlash() { this.container.innerHTML += '\n      <span aria-hidden="true"> /</span>\n      <span class="visually-hidden">par</span>\n    ' + this.suffix.replace("/", "") } getCurrencyDisplay() { return "symbol" } } const Mo = t => t ? 0 : 2, Bo = t => t.startsWith("-") ? t.replace("-", "−") : t, qo = (n`
  .c-date--a11y {
    font-size: 0;
  }
`, document.createElement("template")); qo.innerHTML = '<span aria-hidden="true" class="js-container c-date m-tag"></span><span class="c-date--a11y visually-hidden"></span>'; class zo extends (ee(j(at(Lo(Ao(To(A))))))) { static get properties() { return { value: { type: "string" }, formatIn: { type: "string", defaultValue: "dd-mm-yyyy" } } } template() { return qo } constructor() { super(), this._a11yDate = this.$.querySelector(".c-date--a11y") } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "value" !== t && "format-in" !== t || (this.value ? this.validateAndVerboseDate(this.value.replace(/\//g, "-")) : (this.container.innerHTML = "", this._a11yDate.innerHTML = ""))) } validateAndVerboseDate(t) { if (!function (t, e) { switch (e) { case "dd-mm-yyyy": case "dd/mm/yyyy": return /^\d{2}-\d{2}-\d{4}$/.test(t); case "dd-mm-yy": case "dd/mm/yy": return /^\d{2}-\d{2}-\d{2}$/.test(t); case "mm-yy": case "mm/yy": return /^\d{2}-\d{2}$/.test(t); default: return !1 } }(t, this.formatIn)) return void this.setErrorFormat(); const e = t.split("-"); let i = "", s = ""; switch (this.formatIn) { case "dd-mm-yyyy": case "dd/mm/yyyy": if (e[0] > 31 || e[1] > 12) return console.warn(`erreur valeur date : ${e[0]} > 31 OR ${e[1]} > 12`), void this.setErrorValue(); s = No(e[2], e[1], e[0]); break; case "dd-mm-yy": case "dd/mm/yy": if (e[0] > 31 || e[1] > 12) return console.warn(`erreur valeur date : ${e[0]} > 31 OR ${e[1]} > 12`), void this.setErrorValue(); s = No(`20${e[2]}`, e[1], e[0]); break; case "mm-yy": case "mm/yy": if (e[0] > 12) return console.warn(`erreur valeur date : ${e[0]} > 12`), void this.setErrorValue(); s = No(`20${e[1]}`, e[0]) }i = this.formatFinalValue(e), this.container.innerHTML = i, this.container.classList.remove("c-date--error"), this._a11yDate.innerHTML = "&nbsp;" + s } formatFinalValue(t) { return this.formatIn.includes("-") ? t.join("-") : t.join("/") } setErrorFormat() { this.container.innerHTML = "#DATE-FORMAT-ERROR!", this._a11yDate.innerHTML = "Erreur sur le format de date", this.container.classList.add("c-date--error") } setErrorValue() { this.container.innerHTML = "#DATE-VALUE-ERROR!", this._a11yDate.innerHTML = "Erreur sur la valeur de date", this.container.classList.add("c-date--error") } } function No(t, e, i) { return `${i || ""} ${["erreur", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"][parseInt(e)]} ${t}` } const Ho = n`
  :host {
    display: block;
    position: relative;
  }
`, jo = document.createElement("template"); jo.innerHTML = '<div class="js-container c-heading"><slot name="right"></slot></div>'; class Ro extends A { static get properties() { return { tag: { type: "string" } } } template() { return jo } constructor() { super(), this.tagEl = null } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.makeTagElement() } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "tag" === t && this.makeTagElement(e)) } makeTagElement(t) { this.tag && (/^h[1-6]$/.test(this.tag) || console.error(`${this.tagName} n'est prévu que pour avoir un tag h1, h2, h3, h4, h5 ou h6`), this.tagEl ? this.tagEl && this.tagEl.tagName.toLowerCase() !== this.tag && (t && this.container && this.container.classList.remove(`c-heading__${t}`), this.tagEl.remove(), this.tagEl = null, this.createTag()) : this.createTag()) } createTag() { this.tagEl = document.createElement(this.tag), this.container.classList.add(`c-heading__${this.tag}`), this.tagEl.classList.add("c-heading__title", `c-heading__title--${this.tag}`), this.tagEl.innerHTML = "<slot></slot>", this.container.insertBefore(this.tagEl, this.container.firstChild) } } const Oo = n`
  :host([block]:not([block='false'])) .c-text {
    display: block;
    word-break: break-word;
  }

  :host([flex]:not([flex='false'])) .c-text {
    display: flex;
  }

  :host([ellipsis]:not([ellipsis='false'])) .c-text {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: normal;
  }

  :host([ellipsis]:not([ellipsis='false'])) .c-text,
  :host([nowrap]:not([nowrap='false'])) .c-text {
    white-space: nowrap;
  }

  .c-theme--primary {
    color: var(--color-primary);
  }

  .c-theme--secondary {
    color: var(--color-secondary);
  }
`, Po = document.createElement("template"); Po.innerHTML = '<span class="js-container c-text m-tag" part="ux-text"><slot></slot></span>'; class Do extends (function (t) { return class extends t { static get properties() { return { letterSpacing: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "letter-spacing" === t && this.setBooleanStyleProp(this.letterSpacing, "letter-spacing", this.letterSpacing)) } } }(q(function (t) { return class extends t { static get properties() { return { underline: { type: "boolean" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "underline" === t && this.setBooleanStyleProp(this.underline, "text-decoration", "underline")) } } }(ee(at(To(function (t) { return class extends t { static get properties() { return { uppercase: { type: "boolean" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "uppercase" === t && this.setBooleanStyleProp(this.uppercase, "text-transform", "uppercase")) } } }(function (t) { return class extends t { static get properties() { return { italic: { type: "boolean" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "italic" === t && this.setBooleanStyleProp(this.italic, "font-style", "italic")) } } }(Ao(function (t) { return class extends t { static get properties() { return { lineHeight: { type: "string" } } } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "line-height" === t && this.setBooleanStyleProp(this.lineHeight, "line-height", `var(--text-line-height-${this.lineHeight})`)) } } }(Lo(j(tt(A)))))))))))))) { constructor() { super() } static get properties() { return { visuallyHidden: { type: "boolean" }, tag: { type: "string", defaultValue: "span" } } } template() { return Po } attributeChangedCallback(t, e, i) { e !== i && this.container && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "visually-hidden" === t && this.setBooleanClass(this.visuallyHidden, "visually-hidden")) } } n`
  :host {
    --grid-column-gap: var(--spacing-md);
  }

  @media (min-width: 740px) {
    :host {
      --row-gap: 10px;
    }
  }

  @media (min-width: 900px) {
    :host {
      --row-gap: 20px;
    }
  }

  .grid-masonry {
    display: flex;
    flex-flow: column;
  }

  @media (min-width: 740px) {
    .grid-masonry {
      display: grid;
      grid-gap: 1px var(--grid-column-gap, 20px);

      /* nous remonte un warning pour IE qu'on ne supporte pas */

      /* autoprefixer: off */
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  ::slotted(.grid-item) {
    display: table;
    width: 100%;
    padding-bottom: 9px;
  }

  ::slotted(.grid-item-no-padding) {
    padding-bottom: 0;
  }

  @media (min-width: 740px) {
    ::slotted(.grid-item:not(:last-child)) {
      padding-bottom: 19px;
    }

    ::slotted(.grid-item-no-padding) {
      padding-bottom: 0;
    }
  }

  .flex-masonry {
    display: flex;
    flex-flow: column nowrap;
    width: 60%;
    margin: 0 auto;
  }

  ::slotted(.layout-item) {
    width: 100%;
    margin-bottom: 20px;
  }
`, n`
  .m-list-no-style {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`, n`
  .c-no-padding {
    padding: 0 !important;
  }
`; const Vo = n`
  .mt-0 {
    margin-top: 0;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    /* top mobile */
    .mt-0--m {
      margin-top: 0;
    }
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    /* top desktop */
    .mt-0--d {
      margin-top: 0;
    }
  }

  /* bottom */
  .mb-30 {
    margin-bottom: 30px;
  }

  .mb-lg {
    margin-bottom: var(--spacing-lg);
  }

  .mb-0 {
    margin-bottom: 0;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    /* bottom mobile */
    .mb-xxs--m {
      margin-bottom: var(--spacing-xxs);
    }

    .mb-lg--m {
      margin-bottom: var(--spacing-lg);
    }

    .mb-0--m {
      margin-bottom: 0;
    }

    .mb-30--m {
      margin-bottom: 30px;
    }
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    /* bottom desktop */
    .mb-xxs--d {
      margin-bottom: var(--spacing-xxs);
    }

    .mb-lg--d {
      margin-bottom: var(--spacing-lg);
    }

    .mb-30--d {
      margin-bottom: 30px;
    }

    .mb-0--d {
      margin-bottom: 0;
    }
  }
`; i(502); const Uo = n`
  .c-chatbox {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
  }

  .c-chatbox__content {
    flex-grow: 1;
    margin-left: 0.8rem;
    margin-bottom: 0.6rem;
  }

  .c-chatbox__icon ux-svg {
    margin: 0.6rem;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-chatbox__content {
      margin-left: 2rem;
      margin-bottom: 1.1rem;
    }

    .c-chatbox__icon ux-svg {
      margin: 1.1rem;
    }
  }
`; class Fo extends M { static get customName() { return "ux-chatbox" } static get properties() { return { icon: { type: "string", defaultValue: "conseiller" }, spaceV: { type: "string", defaultValue: "sm" } } } static get style() { return Uo } } const Wo = n`
  .c-chatbox-item {
    position: relative;
    width: fit-content;
    /* firefox */
    width: -moz-fit-content;
    padding-bottom: 1rem;
    border-radius: var(--border-radius-md) var(--border-radius-xs);
  }

  .c-chatbox-item__content {
    padding: 1rem 2rem 0;
  }

  .c-chatbox-item__status {
    position: relative;
    left: 0;
    top: 0;
    width: fit-content;
    /* firefox */
    width: -moz-fit-content;
    border-top-left-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);
  }

  .c-chatbox-item__status p {
    margin: 0;
    padding: 1rem 2rem;
    font-weight: 700;
  }

  :host([model]) .c-chatbox-item__status {
    color: var(--color-white);
  }

  :host([model='alert']) .c-chatbox-item__status {
    background-color: var(--color-primary);
  }

  :host([model='urgent']) .c-chatbox-item__status {
    background-color: var(--color-secondary);
  }

  @media (min-width: 740px) {
    /* Le triangle */
    :host(*:last-child) .c-chatbox-item::before,
    :host(*:last-child) .c-chatbox-item::after {
      content: '';
      position: absolute;
      bottom: 1.1rem;
      background-color: transparent;
      width: 0;
      height: 0;
      border-right: 1.4rem solid var(--m-background-color);
      left: -1.4rem;
    }

    /* L'intérieur du triangle */
    :host(*:last-child) .c-chatbox-item::before {
      border-top: 0.6rem solid transparent;
      border-bottom: 0.6rem solid transparent;
      z-index: 1;
    }

    /* La bordure du triangle */
    :host(*:last-child) .c-chatbox-item::after {
      border-top: 0.7rem solid transparent;
      border-bottom: 0.7rem solid transparent;
      z-index: 0;
    }
  }
`; class Ko extends N { static get customName() { return "ux-chatbox-item" } static get properties() { return { backgroundLight: { type: "boolean", defaultValue: !0 } } } static get style() { return Wo } } const Go = n`
  .c-loader__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.25s ease-in;
    z-index: 100;
    background-color: hsla(0deg, 0%, 91.8%, 0.9);
  }

  .c-loader__animated {
    position: relative;
    width: 40px;
    height: 40px;
  }

  .c-loader__animated::before,
  .c-loader__animated::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 5px solid transparent;
    border-top-color: var(--color-primary);
  }

  .c-loader__animated::before {
    z-index: 100;
    animation: spin 0.5s infinite linear;
  }

  .c-loader__animated::after {
    border: 5px solid #ddd;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`; class Xo extends F { static get customName() { return "ux-loader" } static get style() { return Go } } const Yo = n`
  :host {
    --message-border-width: 1px;
    --message-border-radius: var(--tile-border-radius);
    --message-font-size: 1.3rem;
  }

  .c-message {
    display: flex;
    align-items: center;
    min-height: 30px;
    background-color: var(--message-bg-color);
    padding: var(--spacing-sm);
    border-width: var(--message-border-width);
    border-color: var(--message-border-color);
    border-style: solid;
    border-radius: var(--message-border-radius);
    font-size: var(--message-font-size);
  }

  .c-message--content {
    margin-left: var(--spacing-sm);
  }

  /* tablet + desktop */
  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-message {
      padding: var(--spacing-sm) var(--spacing-md);
    }
  }

  :host([type='error']) .c-message {
    --message-border-color: var(--color-error);
  }
`; class Jo extends K { static get customName() { return "ux-message" } static get style() { return Yo } _setType() { switch (this.type) { case "warning": this._slots.icon.innerHTML = '<ux-svg icon="exclamation-triangle"></ux-svg>'; break; case "info": this._slots.icon.innerHTML = '<ux-svg icon="info-cercle" lib-color="var(--message-icon-color)"></ux-svg>'; break; case "error": this._slots.icon.innerHTML = '<ux-svg icon="croix-cercle"></ux-svg>'; break; default: console.error("Unsupported type of message") } } } const Zo = n`
  ::-webkit-scrollbar {
    width: var(--spacing-sm);
  }

  ::-webkit-scrollbar-track {
    background: var(--scrollbar-background-color);
    border-radius: var(--border-radius-xs);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-secondary);
    border-radius: var(--border-radius-xs);
  }

  :host {
    --modal-background: #fff;
    --modal-border-radius: var(--border-radius-md);
    --modal-max-width: 63rem;
    --modal-min-height: 10rem;
    --modal-padding-top: 3rem;
    --modal-padding-bottom: 0;
    --modal-padding-right: var(--spacing-sm);
    --modal-padding-left: var(--spacing-sm);
    --modal-overlay-color: rgba(0, 0, 0, 0.5);
    --modal-heading-margin-bottom: var(--spacing-md);
    --modal-flou-height: 4rem;
  }

  .c-modal {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }

  :host(:not([no-cross])) .c-modal__overlay {
    cursor: pointer;
  }

  .c-modal__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    background-color: var(--modal-overlay-color);
  }

  .c-modal__inner {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%) scale(1.1);
    width: calc(100% - 70px);
    max-width: var(--modal-max-width);
    min-height: var(--modal-min-height);
    max-height: 95%;
    visibility: hidden;
    opacity: 0;
    overflow-y: auto;
    padding: var(--modal-padding-top) var(--modal-padding-right) var(--modal-padding-bottom) var(--modal-padding-left);
    background-color: var(--modal-background);
    border-radius: var(--modal-border-radius);
    z-index: 110;
  }

  :host([open]:not([open='false'])) .c-modal,
  :host([open]:not([open='false'])) .c-modal__overlay,
  :host([open]:not([open='false'])) .c-modal__inner {
    transition: visibility 0s linear 0s, opacity 0.25s 0s;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  .c-modal__inner:focus {
    outline: 1px dotted var(--color-secondary-hover);
  }

  .c-modal__header {
    margin-bottom: var(--modal-heading-margin-bottom);
  }

  .c-modal__header h2 {
    margin: 0 4rem;
    text-align: center;
    background-color: inherit;
    font-size: 2rem;
    font-weight: bold;
  }

  .c-modal__close-btn {
    color: var(--color-primary);
    position: absolute;
    top: 2.6rem;
    right: 1.5rem;
    --size-svg: 1.5rem;

    width: 3.3rem;
    height: 3.3rem;
  }

  .c-modal__close-btn:hover,
  .c-modal__close-btn:focus {
    background-color: var(--color-body-bg);
    border: 1px solid var(--color-secondary-darker);
    border-radius: 0.3rem;
  }

  :host([open]:not([open='false'])) .c-modal__inner {
    transition: transform 0.25s;
    transform: translate(-50%, -50%) scale(1);
  }

  :host([secondary]:not([secondary='false'])) {
    --modal-max-width: 71rem;
    --modal-heading-padding-bottom: var(--spacing-md);
    --modal-border-radius: 0;
    --modal-padding-top: 2rem;
    --modal-padding-right: 2rem;
    --modal-padding-left: 2rem;
  }

  :host([secondary]:not([secondary='false'])) .c-modal__header {
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--color-secondary-light);
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :host([secondary]:not([secondary='false'])) .c-modal__header h2 {
    margin: 0;
    background-color: inherit;
    color: var(--color-text);
    text-align: left;
    font-size: var(--heading-font-size-3);
    font-weight: bold;
  }

  :host([secondary]:not([secondary='false'])) .c-modal__inner {
    display: flex;
    flex: auto;
    flex-direction: column;
    max-height: 100%;
    height: calc(100% - 2rem);
    width: calc(100% - 3rem);
  }

  :host([secondary]:not([secondary='false'])[open]:not([open='false'])) .c-modal__inner {
    transform: translate(-50%, -50%) scale(1);
  }

  :host([secondary]:not([secondary='false'])) .c-modal__close-btn {
    --size-svg: 1.5rem;

    color: var(--color-text);
    position: static;
    margin-left: 1rem;
  }

  :host([secondary]:not([secondary='false'])) .c-modal__body {
    height: 100%;
    overflow: auto;
    max-height: none;
    padding: var(--modal-heading-margin-bottom) 1rem var(--spacing-lg) 2rem;
    margin-right: -1rem;
    margin-left: -2rem;
  }

  :host([secondary]:not([secondary='false'])) .c-modal__footer {
    position: relative;
    align-self: flex-end;
    width: 100%;
    box-shadow: 0 -1.8rem 1.8rem 0.8rem #fff;
    bottom: 0;
  }

  :host([secondary]:not([secondary='false'])) .c-modal__footer ::slotted(*) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  :host([secondary]:not([secondary='false'])) .c-modal__footer ::slotted(ux-btn-group) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :host([secondary]:not([secondary='false'])) .c-modal__footer::before {
    content: '';
    position: absolute;
    background: linear-gradient(transparent, var(--color-white));
    height: var(--modal-flou-height);
    width: 100%;
    top: -4rem;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host {
      --modal-padding-right: var(--spacing-md);
      --modal-padding-left: var(--spacing-md);
    }

    :host([secondary]:not([secondary='false'])) {
      --modal-padding-top: 5.5rem;
      --modal-padding-bottom: 5.5rem;
      --modal-padding-right: 7rem;
      --modal-padding-left: 7rem;
      --modal-heading-padding-bottom: 3rem;
      --modal-border-radius: var(--border-radius-md);
    }

    .c-modal__header h2 {
      font-size: 2.2rem;
    }

    :host([open]:not([open='false'])) .c-modal__inner {
      transform: translate(-50%, -50%) scale(1);
    }

    :host([secondary]:not([secondary='false'])[open]:not([open='false'])) .c-modal__inner {
      overflow-y: unset;
      max-height: 532px;
    }

    :host([secondary]:not([secondary='false'])) .c-modal__body {
      max-height: 38rem;
    }

    :host([secondary]:not([secondary='false'])) .c-modal__footer ::slotted(*) {
      margin-bottom: 0;
    }
  }

  /* espace pour la scroll bar */
  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([secondary]:not([secondary='false'])) .c-modal__body {
      margin-right: -2rem;
      padding-right: 2rem;
    }
  }
`; class Qo extends J { static get customName() { return "ux-modal" } static get style() { return Zo } connectedCallback() { this.icon || this.setAttribute("icon", "croix-fermer"), super.connectedCallback && super.connectedCallback() } } const tl = n`
  :host {
    --patch-diameter: 12rem;
    --base-white: #fff;
  }

  .c-patch {
    height: var(--patch-diameter);
    width: var(--patch-diameter);
    padding: var(--spacing-md);
    border-radius: var(--border-radius-circle);
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
  }

  :host([model='demi-radius']) .c-patch {
    --patch-diameter: 1rem;

    padding: calc(var(--spacing-sm) + var(--spacing-xxs));
    border-radius: var(--border-radius-sm) 0;
  }

  :host([model='circle']) .c-patch {
    --patch-diameter: 1rem;

    padding: calc(var(--spacing-sm) + var(--spacing-xxs));
    font-size: 1.6rem;
    color: var(--color-white);
  }

  .c-patch--top,
  .c-patch--bottom {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-patch--top ::slotted(*) {
    margin-bottom: var(--spacing-sm);
  }

  .has-shadow {
    box-shadow: var(--box-shadow-primary);
  }

  :host([lib-bg-color='primary']) .c-patch {
    background-color: var(--color-primary);
  }

  :host([lib-bg-color='secondary']) .c-patch {
    background-color: var(--color-theme-light);
    color: var(--base-white);
  }

  :host([lib-bg-color='secondary-dark']) .c-patch {
    background-color: var(--color-secondary);
    color: var(--base-white);
  }

  :host([lib-bg-color='secondary-light']) .c-patch {
    background-color: var(--color-secondary-light);
  }

  :host([lib-bg-color='tertiary']) .c-patch {
    background-color: var(--base-white);
  }

  @media (max-width: 49em) {
    :host:not([model='demi-radius']) .c-patch {
      margin-bottom: var(--spacing-md);
    }

    :host([model='circle']) .c-patch {
      padding: var(--spacing-sm);
      margin-bottom: 0;
    }
  }
`; class el extends it { static get customName() { return "ux-patch" } static get style() { return tl } } class il extends ot { static get customName() { return "ux-progress-bar" } static get style() { return nt } } const sl = n`
  :host {
    --color-circle: var(--color-success);
    --color-shadow: var(--color-secondary);
  }

  .c-progress-ring {
    position: relative;
    max-width: 70px;
    margin: 0 auto;
  }

  .c-progress-ring__svg {
    position: relative;
    font-size: 70px;
    max-width: 100%;
    max-height: 100%;
    z-index: 1;
  }

  .c-progress-ring__svg--shadow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .c-progress-ring__circle {
    stroke: var(--color-circle);
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .c-progress-ring__shadow {
    stroke: var(--color-shadow);
  }

  .c-progress-ring--content {
    text-align: center;
    margin-top: 28px;
  }

  .c-progress-ring--icon {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`; class al extends ct { static get customName() { return "ux-progress-ring" } static get style() { return sl } } const nl = n`
  .c-pulse-ring__circle {
    margin: 0 auto;
    width: 90px;
    height: 90px;
    border: 3px solid var(--color-success);
    border-radius: 50%;
    animation: pulse-black 2s infinite;
  }

  @keyframes pulse-black {
    0% {
      transform: scale(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 8px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`; class rl extends ut { static get customName() { return "ux-pulse-ring" } static get style() { return nl } } const ol = n`
  :host {
    display: block;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .c-btn-group {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
  }

  ::slotted(*) {
    margin-bottom: var(--spacing-sm);
  }

  ::slotted(ux-text) {
    margin-bottom: var(--spacing-md);
  }

  ::slotted(*:last-child, .c-btn-group--vertical) {
    margin-bottom: 0;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-btn-group {
      flex-flow: row nowrap;
      justify-content: center;
    }

    /* Le bouton tertiary ne doit pas avoir de taille et doit être ancré à gauche */
    .c-btn-group ::slotted(ux-btn[model='tertiary']) {
      min-width: 0;
      margin-right: auto;
    }

    :host([vertical]:not([vertical='false'])) .c-btn-group {
      flex-flow: column nowrap;
    }

    :host([justify-content='space-between']) .c-btn-group {
      justify-content: flex-end;
    }

    :host([justify-content='space-between']) ::slotted(*:first-child) {
      flex-basis: 100%;
    }

    ::slotted(ux-text) {
      margin-bottom: 0;
    }

    ::slotted(*) {
      margin-right: var(--spacing-md);
      margin-bottom: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    :host([vertical]:not([vertical='false'])) ::slotted(*) {
      margin-right: 0;
    }
  }
`; class ll extends xt { static get customName() { return "ux-btn-group" } static get style() { return ol } } const cl = n`
  :host {
    --button-height: 4rem;
    --button-width: 100%;
    --button-max-width: 26rem;
    --button-disabled: var(--color-secondary-medium);
  }

  /** CSS for focus on btn erase inside input a11y **/
  :host(.c-input-erase:focus-within) {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-secondary-darker);
  }

  /** CSS for focus on btn erase inside input a11y **/
  :host(.c-input-erase) button:focus {
    outline: none;
  }

  .c-btn {
    display: inline-flex;

    /* [1] */
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    /* [2] */
    font: inherit;

    /* [3] */
    text-align: center;

    /* [4] */
    margin: 0;

    /* [4] */
    cursor: pointer;

    /* [5] */
    height: var(--button-height);
    line-height: 1.2;
    padding: 0 var(--spacing-sm);
    background-color: var(--color-btn-primary);
    border-color: var(--color-btn-primary);
    border-width: 1px;
    border-style: solid;
    font-weight: bold;
    font-size: 1.6rem;
    transition: ease 300ms;
  }

  :host(:not([inline]):not([model='tertiary']):not([model='icon']):not([model='nostyle'])),
  :host(:not([inline]):not([model='tertiary']):not([model='icon']):not([model='nostyle'])) .c-btn {
    width: var(--button-width) !important;
    max-width: var(--button-max-width);
  }

  :host([inline]:not([inline='false'])),
  :host([inline]:not([inline='false'])) .c-btn,
  :host([inline]:not([inline='false'])) .m-btn-no-style {
    width: unset;
    max-width: unset;
  }

  /* Modifiers
  ============================================ */

  :host([model='primary']) .c-btn {
    color: var(--color-white);
    border-radius: var(--btn-border-radius);
  }

  :host([model='secondary']) .c-btn {
    color: var(--color-btn-secondary);
    background-color: var(--color-white);
    border-color: var(--btn-secondary-border-color);
    border-radius: var(--btn-border-radius);
    border-width: 1px;
  }

  :host([model='tertiary']) .c-btn {
    color: var(--color-btn-tertiary);
    background-color: transparent;
    border: none;
    font-weight: bold;
    padding: 0;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([model='tertiary']) .c-btn {
      width: unset;
      max-width: unset;
    }
  }

  :host([model='primary']) .c-btn:hover {
    background-color: var(--color-btn-primary-hover);
    border-color: var(--color-btn-primary-hover);
  }

  :host([model='secondary']) .c-btn:hover {
    color: var(--color-btn-secondary-txt-hover);
    background-color: var(--color-btn-secondary-bg-hover);
    border-color: var(--color-btn-secondary-hover);
  }

  :host([model='tertiary']) .c-btn:hover {
    color: var(--color-btn-tertiary-hover);
    text-decoration: underline;
  }

  :host([model='primary']) .c-btn:focus {
    background-color: var(--color-btn-primary-focus);
    border-color: var(--color-btn-primary-focus);
    outline: 1px dotted var(--color-btn-primary-focus);
  }

  :host([model='secondary']) .c-btn:focus {
    color: var(--color-btn-secondary-txt-focus);
    background-color: var(--color-btn-secondary-bg-focus);
    border-color: var(--color-btn-secondary-focus);
    outline: 1px dotted var(--color-btn-secondary-focus);
  }

  :host([model='tertiary']) .c-btn:focus {
    color: var(--color-btn-tertiary-focus);
    text-decoration: underline;
  }

  :host([model='icon']) .c-btn {
    height: unset;
    width: unset;
    max-width: unset;
    padding: 0 var(--spacing-xs);
    background-color: unset;
    border: unset;
  }

  /* Outlined style */
  :host([outlined]:not([outlined='false'])) .c-btn {
    background-color: var(--color-white);
  }

  :host([model='primary'][outlined]:not([outlined='false'])) .c-btn {
    border-color: var(--btn-outlined-border-color);
  }

  :host([model='primary'][outlined]:not([outlined='false'])) .c-btn,
  :host([model='secondary'][outlined]:not([outlined='false'])) .c-btn {
    color: var(--btn-outlined-color);
  }

  :host([model='primary'][outlined]:not([outlined='false'])) .c-btn:hover,
  :host([model='primary'][outlined]:not([outlined='false'])) .c-btn:focus {
    color: var(--color-btn-primary-outlined-txt-hover);
    background-color: var(--color-btn-primary-outlined-bg-hover);
    border-color: var(--color-btn-primary-outlined-hover);
  }

  :host([model='secondary'][outlined]:not([outlined='false'])) .c-btn:hover {
    color: var(--color-primary-dark);
  }

  :host([model='secondary'][outlined]:not([outlined='false'])) .c-btn:focus {
    color: var(--color-primary-darker);
  }

  /* Disabled state */
  :host([disabled]:not([disabled='false'])) .c-btn,
  :host([disabled]:not([disabled='false'])) .c-btn:hover,
  :host([disabled]:not([disabled='false'])) .c-btn:focus {
    color: var(--color-white);
    background-color: var(--button-disabled);
    border-color: var(--button-disabled);
    cursor: not-allowed;
  }

  .c-btn-lib-link {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: var(--button-width);
    text-decoration: none;
  }

  :host([center]:not([center='false'])) .c-btn-lib-link * {
    height: 100%;
    justify-content: center;
  }

  .c-btn-lib-link ::slotted(ux-svg:first-child) {
    padding: 0 var(--spacing-sm) 0 0;
  }

  .c-btn-lib-link ::slotted(ux-svg:last-child) {
    padding: 0 0 0 var(--spacing-sm);
  }
`; class dl extends Lt { static get customName() { return "ux-btn" } static get properties() { return { libStyles: { type: "string" } } } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-styles" === t && (this.customStyle.innerHTML += this.libStyles) } static get style() { return cl } } const ul = n`
  .c-link__icon {
    color: var(--color-primary);
    width: unset;
    padding: 0 var(--spacing-sm);
  }

  /* .c-link:focus,
.c-link:hover {
  color: var(--color-primary-hover);
}

.c-link:active {
  color: var(--color-primary-active);
} */

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-link__icon {
      padding: 0 var(--spacing-md);
    }
  }
`, hl = n`
  .m-link {
    position: relative;
    padding-right: calc(var(--c-link-width) + var(--spacing-sm)) !important;
  }

  @media (min-width: ${window.uxLib.breakpoints.tablet}px) {
    .m-link__is-desktop {
      position: relative;
      padding-right: calc(var(--c-link-width) + var(--spacing-md)) !important;
    }
  }

  @media (min-width: ${window.uxLib.breakpoints.mobile + 1}px) and (max-width: ${window.uxLib.breakpoints.tablet - 1}px) {
    .m-link__is-tablet {
      position: relative;
      padding-right: calc(var(--c-link-width) + var(--spacing-sm)) !important;
    }
  }

  @media (max-width: ${window.uxLib.breakpoints.mobile}px) {
    .m-link__is-mobile {
      position: relative;
      padding-right: calc(var(--c-link-width) + var(--spacing-sm)) !important;
    }
  }
`; class pl extends qt { static get properties() { return { icon: { type: "string", defaultValue: "chevron" } } } static get customName() { return "ux-link" } static get style() { return $t + ul } _injectStyle() { this.injectStyleEl = document.createElement("style"), this.injectStyleEl.innerHTML = hl, this.parentElement.$.insertBefore(this.injectStyleEl, this.parentElement.$.childNodes[1]) } } const bl = n`
  .c-link-blank {
    text-decoration: underline;
  }

  .c-link-blank:hover,
  .c-link-blank:focus {
    text-decoration: none;
  }

  :host([model='secondary']) .c-link-blank:hover,
  :host([model='secondary']) .c-link-blank:focus {
    color: var(--color-black);
  }
`; class ml extends Ht { static get customName() { return "ux-link-blank" } static get style() { return zt + bl } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "target-blank") } } class gl extends Rt { static get customName() { return "ux-link-btn" } static get style() { return cl } } const vl = n`
  :host {
    --color-svg: var(--color-text);

    flex: 1 1 0;
  }

  .c-shortlink {
    box-sizing: border-box;
    display: inline-flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    text-decoration: none;
    text-align: center;

    /*
   * gestion du padding basé sur l'utilisation des shortlink dans le TDB
   * probablement à revoir
   */
    padding: 10px 3px;
    border-radius: 5px;
    width: 100%;
  }

  .c-shortlink:hover,
  .c-shortlink:focus {
    box-shadow: 0 0 0 1px var(--color-secondary-hover);
  }

  .c-shortlink:active {
    --color-svg: var(--color-secondary-selected);
  }

  .c-shortlink__label {
    margin-top: 5px;
    font-size: 13px; /* fixed font size for shortlink */

    /* font-size: var(--text-font-size-sm); */
    line-height: 1.1;
  }

  .c-shortlink:active .c-shortlink__label {
    color: var(--color-secondary-selected);
  }
`; class fl extends Ut { static get customName() { return "ux-shortlink" } static get style() { return vl } } const xl = n`
  :host {
    --color-on: var(--color-positive);
    --color-off: var(--color-secondary);
  }

  .c-switch-btn--on.active,
  .c-switch-btn--off.active {
    display: inherit;
    border: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .c-switch-btn--on.active ::slotted(*) {
    padding-right: 1rem;
  }

  .c-switch-btn--off.active ::slotted(*) {
    padding-left: 0.5rem;
  }

  @keyframes from-left {
    0% {
      transform: translateX(-50%);
    }

    100% {
      transform: translateX();
    }
  }

  .c-switch-btn--on.active {
    animation-name: from-left;
    animation-duration: 1s;
  }

  @keyframes from-right {
    0% {
      transform: translateX(50%);
    }

    100% {
      transform: translateX();
    }
  }

  .c-switch-btn--off {
    animation-name: from-right;
    animation-duration: 1s;
  }

  .c-switch-btn--off .c-switch-btn-icon {
    color: var(--color-off);
  }

  .c-switch-btn--on .c-switch-btn-icon {
    color: var(--color-white);
  }

  .c-switch-btn--on,
  .c-switch-btn--off {
    display: none;
  }

  .c-switch-btn {
    border-radius: 3rem;
    min-width: initial;
    height: 2.5rem;
    padding: 0 1.2rem 0 0.5rem;
    display: flex;
    justify-content: space-around;
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
    color: var(--color-off);
    border-color: var(--color-off);
    background-color: var(--color-white);
    font-size: 1.4rem;
    font-weight: initial;
  }

  :host([no-label]:not([no-label='false'])) .c-switch-btn {
    min-width: 5rem;
  }

  :host([no-label]:not([no-label='false'])) .c-switch-btn--on {
    justify-content: flex-end;
  }

  :host([no-label]:not([no-label='false'])) .c-switch-btn--off {
    justify-content: flex-start;
  }

  .c-switch-btn[aria-checked='true'] {
    padding: 0 0.5rem 0 1.2rem;
    background-color: var(--color-on);
    color: var(--color-white);
    border-color: var(--color-on);
  }
`, yl = document.createElement("template"); yl.innerHTML = '\n<button role="switch" class="c-btn c-switch-btn js-container js-delegate-focus">\n  <span class="c-switch-btn--on">\n    <slot name="on"></slot>\n    <ux-svg class="c-switch-btn-icon" icon="coche-cercle" lib-size="sm"></ux-svg>\n  </span>\n  <span class="c-switch-btn--off">\n    <ux-svg class="c-switch-btn-icon" icon="cercle-contour" lib-size="sm"></ux-svg>\n    <slot name="off"></slot>\n  </span>\n</button>'; class kl extends Kt { static get customName() { return "ux-switch-btn" } static get style() { return Ft + cl + xl } template() { return yl } } const wl = n`
  .c-widgetlink {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 4rem;
    border: 1px solid transparent;
    border-radius: var(--tile-border-radius);
    background-color: #f4f4f4;
    min-width: 238px;
    text-decoration: none;
    color: var(--color-text);
    cursor: pointer;
  }

  @media (max-width: 321px) {
    .c-widgetlink {
      flex-direction: column;
      padding: var(--spacing-xs) 0;
    }
  }

  .c-widgetlink:hover,
  .c-widgetlink:focus-within {
    border-color: var(--color-secondary-hover);
  }

  .c-widgetlink:active {
    border-color: var(--color-secondary-selected);
  }

  ::slotted(*) {
    color: var(--color-text);
  }

  .c-widgetlink__icon {
    color: inherit;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }

  .c-widgetlink-content {
    /**
   * 1rem (the amount of pixels we want to keep it from ".c-svg")
   * + 1rem (.c-svg's width)
   * + 1rem (.c-widgetlink__icon's right value)
   */
    padding-right: 3rem;
    padding-left: 1rem;
  }
`; class Cl extends Zt { static get customName() { return "ux-widgetlink" } static get style() { return Yt + wl } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.$.querySelector("ux-svg").setAttribute("icon", "chevron") } } const _l = n`
  :host([model='gelule']) .c-chip {
    border-radius: var(--chip-border-radius);
    background-color: var(--chip-bg-color);
    color: var(--chip-color);
    padding: 0 var(--spacing-xs);
    display: inline-block;
    padding-bottom: 0.1rem; /* pour centrer le texte verticalement dans la gelule */
  }

  .c-chip ::slotted(*) {
    display: inline-flex;
  }
`; class El extends se { static get customName() { return "ux-chip" } static get properties() { return { ...super.properties, model: { type: "string", defaultValue: "gelule" } } } static get style() { return Qt + _l } } const Ll = n`
  :host {
    --accordion-transition-property: all;
    --accordion-transition-duration: 0.25s;
    --accordion-transition: var(--accordion-transition-property) var(--accordion-transition-duration);
    --accordion-content-margin-bottom: 1rem;
  }

  .c-accordion__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: var(--spacing-md);
    padding-right: var(--spacing-sm);
    cursor: pointer;
    border-top: 1px solid #e6e6e6;
    padding-top: var(--spacing-sm);
    font-size: var(--text-font-size-xl);
    font-weight: bold;
    font-family: var(--font-family);
  }

  .c-accordion__trigger:hover {
    color: var(--color-primary-dark);
  }

  .c-accordion__icon {
    will-change: auto;
    transform: rotate(90deg);
    transition: transform 0.25s;
    color: var(--color-primary);
    display: flex;
    justify-content: center;
  }

  .c-accordion__icon--rotate {
    transform: rotate(-90deg);
  }

  .c-accordion__content {
    transition: var(--accordion-transition);
    overflow: hidden;
    margin-bottom: var(--accordion-content-margin-bottom);
  }

  .c-accordion__content[aria-hidden='true'] {
    max-height: 0;
    opacity: 0;
    visibility: hidden;
  }

  /*
 * La valeur de la custom property --container-height
 * est définie en JS par la mixin UxAriaExpandedMixin
 */
  .c-accordion__content[aria-hidden='false'] {
    max-height: var(--container-height, 1000px);
    opacity: 1;
    visibility: visible;
  }

  /* tablet + desktop */
  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-accordion__trigger {
      padding-right: var(--spacing-md);
    }
  }

  /* Models
 ----------------------------------------------------------- */

  /* FAQ
 --------------------------- */

  :host([model='faq']) .c-accordion {
    --accordion-padding: var(--spacing-base);
    --accordion-border-width: 0.1rem;
    --accordion-border-radius: 0.5rem;
    --accordion-transition-property: border-color;

    padding: var(--accordion-padding);
    border: var(--accordion-border-width) solid var(--color-border);
    border-radius: var(--accordion-border-radius);
    background-color: var(--color-white);
    transition: var(--accordion-transition);
  }

  :host([model='faq']:not([expanded='true'])) .c-accordion:hover {
    border-color: var(--color-secondary-dark);
  }

  :host([model='faq']) .c-accordion:focus-within {
    border-color: var(--color-secondary-darker);
  }

  :host([model='faq']) .c-accordion__trigger {
    min-height: 65px;
    width: calc(100% + calc(calc(var(--accordion-padding) * 2) + calc(var(--accordion-border-width) * 2))); /* Ensuring the width is equal to that of ".c-accordion" */
    margin: calc(calc(var(--accordion-padding) * -1) - var(--accordion-border-width)); /* Negating the ".c-accordion"'s horizontal padding and all 4 border widths */
    padding: var(--spacing-xxs) var(--accordion-padding);
    text-align: left;
    font-size: var(--text-font-size-md);
    font-weight: normal;
    border: none;
    border-radius: var(--accordion-border-radius);
  }

  :host([model='faq']) .c-accordion__trigger:hover {
    color: inherit;
  }

  :host([model='faq']) .c-accordion__trigger:focus {
    outline: none;
  }

  :host([model='faq']) .c-accordion__trigger > * {
    pointer-events: none;
  }

  :host([model='faq']) .c-accordion__icon {
    margin-left: var(--spacing-xs);
    color: var(--color-secondary-dark);
    font-size: var(--text-font-size-md);
  }

  :host([model='faq']) .c-accordion__content[aria-hidden='true'] {
    margin: 0;
  }

  :host([model='faq']) .c-accordion__content[aria-hidden='false'] {
    margin: 2rem 0 0;
  }

  /* tablet + desktop */
  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([model='faq']) .c-accordion__icon {
      margin-left: var(--spacing-md);
    }
  }
`; class Al extends ue { static get customName() { return "ux-accordion-item" } static get style() { return Ll } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "chevron") } } const Sl = n`
  :host {
    display: block;
    position: relative;
  }
`; class Tl extends pe { static get customName() { return "ux-card-body" } static get style() { return Sl } } const $l = n`
  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host {
      display: block;
      position: relative;
    }
  }

  .c-card-footer ::slotted(ux-btn:last-child) {
    margin-bottom: var(--spacing-sm);
  }
`; class Il extends me { static get customName() { return "ux-card-footer" } static get style() { return $l } } const Ml = n`
  :host {
    display: block;
    position: relative;
  }

  :host([full-width]:not([full-width='false'])) .c-card-header {
    width: calc(100% + 40px);
    margin-top: -10px;
    margin-left: -20px;
    border-top-left-radius: var(--tile-border-radius);
    border-top-right-radius: var(--tile-border-radius);
    overflow: hidden;
  }
`; class Bl extends ve { static get customName() { return "ux-card-header" } static get style() { return Ml } } const ql = n`
  :host {
    position: absolute;
    top: 0;
    right: 0;
  }

  .c-card-reduc {
    color: var(--color-white);
    font-weight: bold;
    background-color: var(--color-primary);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 0 var(--tile-border-radius);
  }
`, zl = document.createElement("template"); zl.innerHTML = '<div class="c-card-reduc js-container"><slot></slot></div>'; class Nl extends (q(A)) { static get customName() { return "ux-card-reduc" } template() { return zl } static get style() { return ql } } const Hl = n`
  .c-card {
    position: relative;
    padding: var(--spacing-sm) var(--spacing-sm);
    background: #fff;
    border-radius: var(--tile-border-radius);
    border: 1px solid var(--color-secondary-light);
    box-sizing: border-box;
    width: 100%;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-card {
      padding: var(--spacing-sm) var(--spacing-md);
    }
  }

  ::slotted(ux-card-footer) {
    margin-top: auto;
  }

  :host([flat]:not([flat='false'])) .c-card {
    background: none;
    border: none;
  }

  /* clip content when not noclip
 only works with 2 rules */
  :host(:not([no-clip])) .c-card,
  :host([no-clip='false']) .c-card {
    overflow: hidden;
  }

  :host([no-padding]:not([no-padding='false'])) .c-card {
    padding: 0;
  }
`; class jl extends ke { static get customName() { return "ux-card" } static get style() { return Hl } } const Rl = n`
  :host {
    --container-shadow: var(--box-shadow-primary);
    --color-container: var(--color-white);
    --color-container-border: #dadce4;
    --color-background-hover: var(--color-body-bg);
    /* La couleur du triangle peut être supplantée par la couleur apportée par la background-mixin, elle est par défaut blanche */
    --m-background-color: var(--color-white);

    width: 100%;
  }

  .c-collapse {
    border: 1px solid var(--color-container-border);
    box-shadow: var(--container-shadow);
  }

  /* tablet + desktop */
  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-collapse {
      padding: var(--spacing-sm) var(--spacing-md);
    }
  }
`; class Ol extends _e { static get customName() { return "ux-collapse" } static get style() { return we + Rl } } const Pl = n`
  :host {
    --container-padding: var(--spacing-lg) var(--spacing-md);
    --container-radius: var(--tile-border-radius);
    --container-shadow: var(--box-shadow-teaser);
    --container-border: 1px solid var(--color-border);

    position: relative;
  }

  .c-container {
    overflow: hidden;
    background: white;
    padding: var(--container-padding);
    border: var(--container-border);
    border-radius: var(--container-radius);
    display: block;
    box-sizing: border-box;
    height: 100%;
  }

  .has-shadow {
    box-shadow: var(--container-shadow);
  }

  :host([nopadding]:not([nopadding='false'])) .c-container {
    --container-padding: 0;
  }

  :host([padding='sm']) .c-container {
    --container-padding: var(--spacing-sm);
  }

  :host([padding='md']) .c-container {
    --container-padding: var(--spacing-md);
  }

  :host([padding='lg']) .c-container {
    --container-padding: var(--spacing-lg);
  }

  /* tablet + desktop */
  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([padding='sm']) .c-container {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .c-container.m-link {
      padding-right: calc(var(--c-link-width) + var(--spacing-md)) !important;
    }
  }

  /**
 * -> .c-container[class*=" c-container-padding"]
 *
 * Target an ux-container with the "has-icon" attr
 * that also has an element with a class name starting with "c-container-padding".
 *
 * Ex.: <div class="c-container c-container-padding--sm ...">
 */
  :host([has-icon]:not([has-icon='false'])) .c-container[class*=' c-container-padding'],
  :host([has-icon]:not([has-icon='false'])) .c-container {
    padding-top: 0;
  }

  :host([has-icon]:not([has-icon='false'])) ::slotted(ux-svg) {
    --stack-size: 30px;

    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([has-icon]:not([has-icon='false'])) ::slotted(ux-svg) {
      --stack-size: 20px;

      margin-top: 30px;
      margin-bottom: 20px;
    }

    /* transfer padding value to video and img component to negate container padding */
    ::slotted(ux-video),
    ::slotted(ux-img) {
      --no-padding: var(--container-padding);
    }
  }
`; class Dl extends Te { static get customName() { return "ux-container" } static get style() { return Pl } } class Vl extends Be { static get customName() { return "ux-dropdown" } static get style() { return Ie } } const Ul = n`
  :host {
    width: 100%;
  }

  :host([expire]:not([expire='false']):not([attachment])),
  :host([expire]:not([expire='false'])[attachment='false']) {
    color: var(--color-primary);
  }

  .c-inbox-msg {
    display: flex;
    align-items: center;
    min-height: 40px;
    flex-direction: row;
    background-color: #fff;
    border: solid 1px #e6e6e6;
    border-radius: var(--tile-border-radius);
    padding: var(--spacing-sm);
    overflow: hidden;
  }

  .c-inbox-msg--state {
    min-width: var(--spacing-lg);
  }

  .c-inbox-msg--content-date {
    font-size: var(--text-font-size-xs);
    font-weight: 700;
  }

  slot[name='subject'] {
    font-size: var(--text-font-size-label);
  }

  :host([state='unread']) slot[name='subject'] {
    font-weight: 700;
  }

  slot[name='from'] {
    font-size: var(--text-font-size-xs);
  }

  .c-inbox-msg--icons {
    min-width: 1.6rem;
    padding-left: var(--spacing-xxxs);
    margin-left: auto;
  }

  .c-inbox-msg--icons > * {
    padding: var(--spacing-xxxs) 0 var(--spacing-xxxs) 0;
  }

  .c-inbox-msg--icons > :first-child {
    padding-top: 0;
  }

  .c-inbox-msg--icons > :last-child {
    padding-bottom: 0;
  }

  .c-inbox-msg--icons__expire {
    color: var(--color-primary);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-inbox-msg {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .c-inbox-msg--content {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .c-inbox-msg--content-date {
      margin: 0 var(--spacing-md) 0 var(--spacing-sm);
      font-size: var(--text-font-size-sm);
    }

    .c-inbox-msg--icons {
      display: flex;
      padding-right: var(--spacing-sm);
    }

    .c-inbox-msg--icons > * {
      padding: 0 var(--spacing-xxxs) 0 var(--spacing-xxxs);
    }

    .c-inbox-msg--icons > :first-child {
      padding-left: 0;
    }

    .c-inbox-msg--icons > :last-child {
      padding-right: 0;
    }
  }
`; class Fl extends ze { static get customName() { return "ux-inbox-msg" } static get style() { return Ul } connectedCallback() { this.stateIcons = { unread: "enveloppe", read: "enveloppe-ouverte", replied: "enveloppe-fleche", color: "var(--color-primary)" }, this.attachmentIcon = "trombone", this.expireIcon = "horloge", super.connectedCallback && super.connectedCallback() } } const Wl = n`
  slot[name='content'] {
    margin-bottom: var(--spacing-md);
  }

  .c-show-more--label {
    font-size: 1.2rem;
    text-decoration: underline;
  }
`; class Kl extends je { static get customName() { return "ux-show-more" } static get style() { return Wl + Ne } } const Gl = n`
  .c-summary-item {
    display: flex;
    margin-bottom: var(--spacing-md);
  }

  .c-summary-item__icon {
    color: var(--color-primary-contrast);
    min-width: 25px;
  }

  slot[name='title'] {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  slot[name='title']::slotted(*) {
    color: var(--color-primary-contrast);
    font-size: 1.8rem; /* taille identique en mobile et desktop */
    line-height: 2.6rem;
    font-weight: bold;
  }

  /* lien "modifier" */
  slot[name='title']::slotted(a) {
    color: var(--color-primary-contrast) !important;
    font-size: var(--text-font-size-xs);
    line-height: 2.6rem;
    font-weight: normal;
    text-decoration: underline !important;
  }

  slot[name='title']::slotted(a:hover),
  slot[name='title']::slotted(a:focus) {
    color: var(--color-primary-darker) !important;
    text-decoration: none !important;
  }

  .c-summary-item__content {
    position: relative;
  }

  .c-summary-item__content--filled {
    padding-top: var(--spacing-sm);
  }

  :host(*:not(:last-child)) .c-summary-item__content::before {
    content: '';
    position: absolute;
    border-left: 1px solid var(--color-primary-contrast);
    height: calc(100% + var(--spacing-md));
    left: -23px;
    top: 15px;
  }

  .c-summary-item__content--wrapper {
    display: flex;
    flex-grow: 1;
    flex-flow: column;
    padding-left: var(--spacing-sm);
  }

  :host(*:not(:last-child)) .c-summary-item__content--wrapper::after {
    content: '';
    border-bottom: 1px solid var(--color-secondary-light);
    width: 100%;
    margin-top: var(--spacing-md);
  }
`; class Xl extends Oe { static get customName() { return "ux-summary-item" } static get style() { return Gl } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = this.container.querySelector(".c-summary-item__content"); this.setBooleanClass(this._slots.content.assignedNodes().length > 0, "c-summary-item__content--filled", t) } } const Yl = n`
  :host {
    display: block;
  }

  .c-summary {
    border: 0 none;
  }

  @media (min-width: 770px) {
    .c-summary {
      border: 10px solid var(--color-white);
      border-radius: var(--border-radius-xs);
    }

    .c-summary__wrapper {
      padding: 0 var(--spacing-lg);
      margin-top: var(--spacing-lg);
      margin-bottom: var(--spacing-lg);
    }
  }
`; class Jl extends Ve { static get customName() { return "ux-summary" } static get style() { return Yl } } const Zl = n`
  :host {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    margin-right: var(--tab-margin-rigth);
    padding: 10px 0;
    border-bottom: var(--tab-bottom-border-color) var(--tab-bottom-border-height) solid;
    border-radius: 0;
    text-align: center;
    font-size: var(--tab-text-size);
    line-height: var(--text-line-height-sm);
    cursor: pointer;
  }

  :host(:hover) {
    color: var(--color-primary-contrast);
  }

  :host([aria-selected='true']) {
    color: var(--tab-text-color-selected);
    font-weight: 700;
  }
`; class Ql extends Je { static get customName() { return "ux-tabs-one-panel-btn" } static get style() { return Zl } } class tc extends Ze { static get customName() { return "ux-tabs-one-panel-panel" } } const ec = n`
  :host {
    display: flex;
    flex-wrap: wrap;

    --tab-bottom-border-height: 0.1rem;
    --tab-bottom-border-height-selected: 0.3rem;
    --tab-bottom-border-color: #cdcbcb;
    --tab-bottom-border-color-selected: var(--color-primary);

    --tab-padding: 1.25rem;
    --tab-margin-rigth: 0;
    --tab-margin-margin-bottom: 2rem;

    --tab-text-color: white;
    --tab-text-color-selected: var(--color-primary);
    --tab-text-size: var(--text-font-size-md);
  }

  .c-tabs {
    width: 100%;
  }

  .c-tabs__list {
    position: relative;
    display: flex;
    margin-bottom: var(--tab-margin-margin-bottom);
  }

  .c-tabs-elastic {
    display: block;
    position: absolute;
    bottom: 0;
    height: var(--tab-bottom-border-height-selected);
    background-color: var(--tab-bottom-border-color-selected);
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(1, -0.47, 0.28, 1.13);
  }
`; class ic extends Qe { static get customName() { return "ux-tabs-one-panel" } static get style() { return ec } } class sc extends ti { static get customName() { return "ux-tabs-btn" } static get style() { return Zl } } class ac extends ti { static get style() { return Zl } static get customName() { return "bux-tabs-button" } constructor() { super(), this.deprecated = !0 } } class nc extends ei { static get customName() { return "ux-tabs-panel" } } class rc extends ei { static get customName() { return "bux-tabs-panel" } constructor() { super(), this.deprecated = !0 } } const oc = n`
  :host {
    display: flex;
    flex-wrap: wrap;
    --tab-bottom: 0.5rem;
    --tab-padding: 0.5rem;
    --tab-text-color: white;
    --tab-text-size: 0.8rem;
    --tab-border-color: black;
    --tab-border-size: 0.1rem;
  }

  .c-tabs {
    width: 100%;
    margin-bottom: var(--spacing-base);
  }

  .c-tabs__list {
    display: flex;
    margin-top: var(--spacing-xs);
  }

  .c-tabs__list ::slotted([role='tab']) {
    padding: var(--tab-padding);
    position: relative;
    flex-grow: 1;
    flex-basis: 0;
    border: var(--tab-border-size) solid var(--tab-border-color);
    border-left: none;
    text-align: center;
    font-size: var(--text-font-size-sm);
    line-height: var(--text-line-height-sm);
    cursor: pointer;
  }

  .c-tabs__list ::slotted([role='tab']:first-child) {
    border-top-left-radius: var(--border-radius-md);
    border-bottom-left-radius: var(--border-radius-md);
    border-left: var(--tab-border-size) solid var(--tab-border-color);
  }

  /* element:last-child doesn't work properly && second child has to be triggered from the end of the "list" */
  .c-tabs__list ::slotted([role='tab']:nth-last-child(2)) {
    border-top-right-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);
  }

  .c-tabs__list ::slotted([aria-selected='true']) {
    background-color: var(--color-primary);
    color: var(--tab-text-color);
    font-weight: bold;
    --color-svg: var(--tab-text-color);
  }

  .c-tabs__content {
    display: flex;
    padding-top: var(--spacing-base);
  }

  .c-tabs__content ::slotted([role='tabpanel']) {
    flex-basis: 100%;
  }

  .c-tabs:not(:defined),
  .c-tabs__list:not(:defined),
  .c-tabs__content:not(:defined) {
    display: block;
  }

  .c-tabs-elastic {
    display: none;
  }
`; class lc extends ii { static get customName() { return "ux-tabs" } static get style() { return ec } } class cc extends ii { static get style() { return oc } static get customName() { return "bux3-tabs-special" } constructor() { super(), this.deprecated = !0 } get allTabs() { return [...this.querySelectorAll("bux-tabs-button")] } get allPanels() { return [...this.querySelectorAll("bux-tabs-panel")] } } const dc = n`
  :host {
    --tile-height: 12rem;
    --vertical-align-height: 10rem;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host {
      --tile-height: 16rem;
    }
  }

  .c-link-tile {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: var(--tile-height);
    padding: var(--spacing-sm);
    border-radius: var(--tile-border-radius);
    border: 1px solid var(--color-border);
    box-sizing: border-box;
    text-decoration: inherit;
    font-family: var(--font-family);
    color: inherit;
  }

  .c-link-tile:hover,
  .c-link-tile:focus {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
  }

  /* .c-link-tile {
  color: var(--color-secondary);
  background-color: var(--color-secondary-dark);
} */

  .c-tile {
    display: block;
    height: 100%;
    margin: auto;
  }

  .c-tile ::slotted(*) {
    height: auto;
  }

  .c-link-tile--arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .c-tile--img {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    align-items: center;
  }
`; class uc extends oi { static get customName() { return "ux-link-tile" } static get style() { return dc } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.icon || this.setAttribute("icon", "chevron") } } const hc = n`
  :host {
    --min-tile-height: 10rem;
    --base-white: #fff;
  }

  .c-tile {
    position: relative;
    min-height: var(--min-tile-height);
    padding: var(--spacing-md);
    border-radius: var(--tile-border-radius);
    overflow: hidden;
  }

  .has-shadow {
    box-shadow: var(--box-shadow-primary);
  }

  .c-tile--primary {
    background-color: var(--color-primary);
  }

  .c-tile--secondary {
    background-color: var(--color-secondary-dark);
  }

  .c-tile--tertiary {
    background-color: var(--base-white);
  }

  .c-tile--img {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    align-items: center;
  }
`; class pc extends ai { static get customName() { return "ux-tile" } static get style() { return hc } } const bc = n`
  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-tile-operation-2.m-link {
      padding-right: calc(var(--c-link-width) + var(--spacing-md)) !important;
    }
  }
`, mc = n`
  .c-tile-operation-progress {
    text-transform: uppercase;
  }

  .c-tile-operation-base {
    border-radius: var(--tile-border-radius);
  }
`; class gc extends hi { static get customName() { return "ux-tile-operation-2" } static get style() { return bc + di + mc } } const vc = n`
  .c-tile-operation-items {
    align-items: center;
  }

  ::slotted([slot='1']) {
    margin-right: var(--spacing-sm);
  }

  :host([row-m]:not([row-m='false'])) .c-tile-operation {
    padding-top: var(--spacing-sm);
    padding-bottom: var(--spacing-sm);
  }

  :host([row-m]:not([row-m='false'])) ::slotted([slot='1']) {
    margin-right: 5px;
  }

  :host([row-m]:not([row-m='false'])) ::slotted([slot='3']) {
    top: 0;
    position: absolute;
    right: 0;
    padding-right: calc(var(--c-link-width) + var(--spacing-sm));
    padding-top: var(--spacing-sm);
    margin-top: var(--spacing-xxs);
  }

  .c-tile-operation {
    padding: var(--spacing-sm) var(--spacing-sm);
    line-height: 1;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([row-m]:not([row-m='false'])) ::slotted([slot='3']) {
      margin: 0 0 0 auto;
      padding: 0;
      position: unset;
    }

    .c-tile-operation {
      padding: var(--spacing-sm) var(--spacing-md);
      border-radius: 27px;
      min-height: 40px;
    }

    .c-tile-operation.m-link {
      padding-right: calc(var(--c-link-width) + var(--spacing-md)) !important;
    }
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([row-m]:not([row-m='false'])) ::slotted([slot='2']) {
      order: unset;
      flex: unset;
    }
  }
`; class fc extends mi { static get customName() { return "ux-tile-operation" } static get style() { return pi + vc + mc } } const xc = n`
  .c-checkbox-group {
    display: flex;
    flex-flow: column;
  }

  @media (min-width: 590px) {
    .c-checkbox-group.c-checkbox-group--inline {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
    }

    .c-checkbox-group--inline ::slotted(*) {
      grid-column-start: 2;
    }

    .c-checkbox-group--inline ::slotted(ux-label) {
      grid-column: 1 / 2;
    }

    .c-checkbox-group--inline ::slotted(div) {
      grid-column: 2 / 5;
    }
  }
`; class yc extends xi { static get customName() { return "ux-checkbox-group" } static get properties() { return { inline: { type: "boolean" } } } static get style() { return gi + xc } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), this.container && "inline" === t && this._setInline() } _setInline() { this.inline ? this.container.classList.add("c-checkbox-group--inline") : this.container.classList.remove("c-checkbox-group--inline") } } const kc = n`
  :host {
    --checkbox-radius: 2px;

    position: relative;
    display: inline-block;
    background-size: contain;
    background-color: #fff;
    width: 28px;
    height: 28px;
    border: 1px solid var(--checkbox-border-color);
    border-radius: var(--checkbox-radius);
    cursor: pointer;
    vertical-align: middle;
    margin-right: var(--spacing-xs);
  }

  :host([hidden]:not([hidden='false'])) {
    display: none;
  }

  :host::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    background-color: var(--checkbox-checked-color);
    border-radius: var(--checkbox-radius);
    transition: transform 0.125s ease-in-out, opacity 0.125s ease-in-out;
  }

  :host([aria-checked='true'])::after,
  :host([aria-checked='checked'])::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  :host([disabled]:not([disabled='false'])),
  :host([aria-checked='true'][disabled]:not([disabled='false'])),
  :host([aria-checked='checked'][disabled]:not([disabled='false'])) {
    background: var(--checkbox-checked-color) no-repeat;
    background-size: contain;
    cursor: not-allowed;
  }
`; class wc extends yi { static get customName() { return "ux-checkbox" } static get style() { return kc } } const Cc = n`
  .c-checkbox-group {
    display: flex;
    flex-flow: column;
  }

  .c-checkbox-group-checkboxes {
    display: flex;
    flex-flow: column;
  }

  .c-checkbox-group-checkboxes ::slotted(*:not(:last-child)) {
    margin-bottom: var(--spacing-sm);
  }

  .c-checkbox-group-checkboxes ::slotted([img='true']) {
    margin-bottom: 0;
  }

  slot[name='group-legend']::slotted(:not(ux-heading)) {
    display: block;
    margin-bottom: var(--spacing-sm);
  }

  slot[name='group-header']::slotted(:not(:empty)) {
    display: block;
    margin-bottom: var(--spacing-md);
  }

  @media (min-width: 590px) {
    .c-checkbox-group--inline {
      flex-flow: row;
      justify-content: flex-start;
    }

    .c-checkbox-group--inline .c-checkbox-group-checkboxes {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }

    .c-checkbox-group--inline slot[name='group-label'] {
      margin-right: var(--spacing-md);
      margin-top: auto;
      margin-bottom: auto;
    }

    .c-checkbox-group--grid .c-checkbox-group-checkboxes {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: var(--spacing-sm);
    }

    .c-checkbox-group--grid .c-checkbox-group-checkboxes ::slotted(*) {
      margin-bottom: 0;
    }
  }
`; class _c extends _i { static get customName() { return "ux-input-checkbox-group" } static get properties() { return { model: { type: "string" } } } static get style() { return ki + Cc } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), i !== e && "model" === t && (this.container.classList.remove(`c-checkbox-group--${e}`), this.container.classList.add(`c-checkbox-group--${i}`)) } connectedCallback() { super.connectedCallback && super.connectedCallback(), "inline" !== this.model && "grid" !== this.model || this.container.classList.add(`c-checkbox-group--${this.model}`) } } const Ec = n`
  .c-checkbox-wrap {
    display: flex;
    --checkbox-radius: 2px;
  }

  .c-checkbox-label {
    padding-left: calc(28px + var(--spacing-md));
    padding-right: var(--spacing-sm);
    position: relative;
    min-height: 38px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .c-checkbox + .c-checkbox-label::before {
    content: '';
    position: absolute;
    top: 0;
    left: 4px;
    display: block;
    background-size: contain;
    background-color: #fff;
    width: 28px;
    height: 28px;
    border: 1px solid var(--checkbox-border-color);
    border-radius: var(--checkbox-radius);
  }

  .c-checkbox + .c-checkbox-label::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: 15px;
    left: 19px;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    background-color: var(--checkbox-checked-color);
    border-radius: var(--checkbox-radius);
    transition: transform 0.125s ease-in-out, opacity 0.125s ease-in-out;
  }

  .c-checkbox:checked + .c-checkbox-label::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  .c-checkbox[hidden] {
    display: none;
  }

  .c-checkbox[aria-disabled='true'] + .c-checkbox-label::after {
    background: var(--color-bg-disabled) no-repeat;
  }

  .c-checkbox[aria-disabled='true'] + .c-checkbox-label {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .c-checkbox:focus + .c-checkbox-label {
    outline: auto;
    outline-offset: 2px;
  }

  .c-checkbox__unchecked,
  .c-checkbox__checked {
    display: none;
  }

  .c-checkbox__unchecked.active,
  .c-checkbox__checked.active {
    display: inherit;
  }
`; class Lc extends Ai { static get customName() { return "ux-input-checkbox" } static get style() { return Ec } } const Ac = n`
  .c-input-radio__error {
    margin-bottom: var(--spacing-sm);
  }

  .c-input-radio-group,
  .c-input-radio-group__radios {
    width: 100%;
  }
`; class Sc extends $i { static get customName() { return "ux-input-radio-group" } static get style() { return Ac } } const Tc = n`
  .c-input-radio__wrap {
    display: flex;
    --radio-checked-color: var(--color-text);
    --radio-border-color: var(--color-secondary-light);
    --radio-radius: var(--border-radius-circle);

    background-color: var(--color-white);
    margin-top: var(--spacing-xs);
    padding: var(--spacing-xxs);
    border: 1px solid #e6e6e6;
    border-radius: var(--border-radius-xs);
    position: relative;
  }

  .c-input-radio__label {
    padding-left: calc(28px + var(--spacing-md));
    padding-right: var(--spacing-sm);
    position: relative;
    min-height: 38px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .c-input-radio + .c-input-radio__label::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 4px;
    display: block;
    transform: translateY(-50%);
    background-size: contain;
    background-color: #fff;
    width: 28px;
    height: 28px;
    border: 1px solid var(--radio-border-color);
    border-radius: var(--radio-radius);
  }

  .c-input-radio + .c-input-radio__label::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 19px;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    background-color: var(--radio-checked-color);
    border-radius: var(--radio-radius);
    transition: transform 0.125s ease-in-out, opacity 0.125s ease-in-out;
  }

  .c-input-radio[aria-checked='true'] + .c-input-radio__label::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  .c-input-radio:focus + .c-input-radio__label {
    outline: auto;
    outline-offset: 2px;
  }

  .c-input-radio__more {
    position: absolute;
    right: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
  }
`; class $c extends Mi { static get customName() { return "ux-input-radio" } static get style() { return Tc } } const Ic = n`
  .c-input-wrap {
    display: flex;
    position: relative;
    overflow: hidden;
    height: 4rem;
    border: 1px solid var(--color-secondary-light);
    border-radius: 5px;
    background-color: var(--color-white);
  }

  .c-input-wrap:hover,
  .c-input-wrap:focus-within {
    box-shadow: 0 0 0 2px black;
  }

  .c-input-wrap.error {
    border-color: var(--color-error);
  }

  .c-input-wrap.error:hover,
  .c-input-wrap.error:focus-within {
    box-shadow: 0 0 0 2px var(--color-error);
  }

  .c-input-error {
    color: var(--color-error);
    font-size: var(--text-font-size-sm);
  }

  input[disabled],
  .c-input-disabled {
    background-color: var(--color-bg-disabled);
  }

  .c-input-wrap.valid {
    border-color: var(--color-success);
  }

  .c-input-wrap.valid:hover,
  .c-input-wrap.valid:focus-within {
    box-shadow: 0 0 0 2px var(--color-success);
  }

  .c-input,
  .c-input-date-fake {
    font-family: var(--font-family);
    font-size: var(--text-font-size-md);
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    padding: 0 var(--spacing-sm);
    width: 100%;
    font-weight: bold;
    color: var(--color-secondary);
  }

  .c-input[type='password']:not(:placeholder-shown) {
    letter-spacing: var(--text-letter-spacing-lg);
  }

  .c-input::placeholder,
  .c-input-date-fake::placeholder {
    font-weight: normal;
  }

  .c-input-wrap > ux-btn,
  .c-input-wrap > ux-svg,
  .c-input-amount--txt {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 30px;
    margin-right: var(--spacing-sm);
  }

  /* Marge si 1 icone a droite */
  .c-input-w-r-icon {
    width: calc(100% - 30px);
    outline: none;
  }

  /* Marge si 1 icone a droite et le bouton d'effacement */
  .c-input-w-erase .c-input {
    width: calc(100% - 60px);
  }

  .empty.c-input-w-erase .c-input {
    width: calc(100% - 30px);
  }

  /* Marge si 1 icone a droite et PAS le bouton d'effacement */
  .c-input-w-erase .c-input:not(.c-input-w-r-icon) {
    width: calc(100% - 30px);
  }

  .empty.c-input-w-erase .c-input:not(.c-input-w-r-icon) {
    width: 100%;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-input-wrap {
      height: 6rem;
      font-size: 1.6rem;
    }

    .c-input,
    .c-input-date-fake {
      padding: 0 var(--spacing-md);
    }

    .c-input-wrap > ux-btn,
    .c-input-wrap > ux-svg,
    .c-input-amount--txt {
      margin-right: var(--spacing-md);
    }
  }

  .c-input-date::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: #fff
      url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2028%2028%22%3E%0A%09%3Cpath%20d%3D%22M%209.1745668%2C1.5650445%20A%200.47663365%2C0.47663365%200%200%200%208.7035657%2C2.0490771%20V%203.8493062%20H%203.7534011%20C%202.238212%2C3.8493062%201%2C5.0875181%201%2C6.6027074%20V%2023.681613%20c%200%2C1.51519%201.238212%2C2.753401%202.7534011%2C2.753401%20H%2024.246599%20C%2025.761788%2C26.435014%2027%2C25.196803%2027%2C23.681613%20V%206.6027074%20C%2027%2C5.0875181%2025.761788%2C3.8493062%2024.246599%2C3.8493062%20H%2019.294572%20V%202.0490771%20A%200.47663365%2C0.47663365%200%200%200%2018.81054%2C1.5650445%200.47663365%2C0.47663365%200%200%200%2018.3414%2C2.0490771%20V%203.8493062%20H%209.6567377%20V%202.0490771%20A%200.47663365%2C0.47663365%200%200%200%209.1745668%2C1.5650445%20Z%20M%203.7534011%2C4.8024782%20h%204.9501646%20v%201.8002292%20a%200.47663365%2C0.47663365%200%201%200%200.953172%2C0%20V%204.8024782%20H%2018.3414%20v%201.8002292%20a%200.47663365%2C0.47663365%200%201%200%200.953172%2C0%20V%204.8024782%20h%204.952027%20c%201.000056%2C0%201.800229%2C0.8001723%201.800229%2C1.8002292%20V%209.5422748%20H%201.953172%20V%206.6027074%20c%200%2C-1.0000569%200.8001723%2C-1.8002292%201.8002291%2C-1.8002292%20z%20M%201.953172%2C10.495447%20h%2024.093656%20v%2013.186166%20c%200%2C1.000057%20-0.800173%2C1.800229%20-1.800229%2C1.800229%20H%203.7534011%20c%20-1.0000568%2C0%20-1.8002291%2C-0.800172%20-1.8002291%2C-1.800229%20z%20m%2015.448088%2C2.462981%20a%200.47663365%2C0.47663365%200%200%200%20-0.180581%2C0.04096%20l%20-2.012459%2C0.899184%20a%200.47709543%2C0.47709543%200%201%200%200.389087%2C0.871258%20l%201.34226%2C-0.599455%20v%207.234427%20a%200.47663365%2C0.47663365%200%201%200%200.953172%2C0%20V%2013.435014%20A%200.47663365%2C0.47663365%200%200%200%2017.40126%2C12.958428%20Z%20m%20-6.476729%2C0.0056%20c%20-0.759047%2C-0.0029%20-1.4838705%2C0.322569%20-1.9752256%2C0.902907%20a%200.47685666%2C0.47685666%200%201%200%200.7279106%2C0.61621%20c%200.3152567%2C-0.372348%200.780004%2C-0.582923%201.267793%2C-0.573393%20a%200.47663365%2C0.47663365%200%200%200%200.07074%2C-0.0037%20c%200.345024%2C-0.04389%200.514805%2C0.06114%200.685092%2C0.292282%200.170288%2C0.23115%200.282973%2C0.617484%200.282974%2C1.009022%20-10e-7%2C0.391536%20-0.112686%2C0.777871%20-0.282974%2C1.009021%20-0.106015%2C0.143908%20-0.216852%2C0.233029%20-0.364885%2C0.273665%20-0.134904%2C-0.01109%20-0.270106%2C-0.02501%20-0.41329%2C-0.0074%20a%200.47663365%2C0.47663365%200%200%200%20-0.361163%2C0.230847%200.47663365%2C0.47663365%200%200%200%20-0.02048%2C0.03351%200.47671754%2C0.47671754%200%200%200%20-0.0037%2C0.0074%200.47671754%2C0.47671754%200%200%200%200.35744%2C0.699986%20c%200.178183%2C0.02267%200.348324%2C0.01276%200.511958%2C-0.01675%200.255036%2C0.04615%200.439424%2C0.185035%200.603179%2C0.407705%200.233506%2C0.317514%200.377918%2C0.822234%200.377918%2C1.332951%200%2C0.510717%20-0.144412%2C1.017299%20-0.377918%2C1.334813%20-0.233506%2C0.317514%20-0.499069%2C0.474787%20-0.969927%2C0.417013%20a%200.47663365%2C0.47663365%200%200%200%20-0.08005%2C-0.0037%20C%2010.112346%2C20.96418%209.3362884%2C20.470704%209.012602%2C19.686482%20a%200.47663365%2C0.47663365%200%201%200%20-0.8805671%2C0.363025%20c%200.4704913%2C1.139898%201.6035848%2C1.858967%202.8334521%2C1.820707%200.764381%2C0.07667%201.425176%2C-0.267894%201.8114%2C-0.793068%200.394054%2C-0.535822%200.564084%2C-1.220501%200.564084%2C-1.898898%200%2C-0.678397%20-0.17003%2C-1.361215%20-0.564084%2C-1.897035%20-0.111236%2C-0.151255%20-0.249868%2C-0.283439%20-0.40212%2C-0.400258%200.02964%2C-0.03402%200.06657%2C-0.06268%200.09308%2C-0.09867%200.331517%2C-0.450005%200.46914%2C-1.015739%200.46914%2C-1.574967%20-1e-6%2C-0.55923%20-0.137623%2C-1.123101%20-0.46914%2C-1.573106%20-0.326102%2C-0.442654%20-0.897972%2C-0.740143%20-1.543319%2C-0.670199%20z%22%20%2F%3E%0A%3C%2Fsvg%3E')
      no-repeat;
    width: 20px;
    height: 20px;
    padding-right: var(--spacing-xs);
  }

  .c-input-date::-webkit-inner-spin-button {
    display: none;
  }

  /* Style du "placeholder" */
  :host(:not([value])) .c-input-date,
  :host([value='']) .c-input-date {
    font-weight: normal;
  }

  .c-input-wrap slot[name='content-right'] {
    display: flex;
    align-items: center;
  }
`; class Mc extends Ri { static get customName() { return "ux-input-amount" } static get style() { return Ic } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = this.$.querySelector(".c-input-erase--icon"); t && t.setAttribute("icon", "croix-suppr") } } class Bc extends Pi { static get customName() { return "ux-input-date" } static get style() { return Ic } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = this.$.querySelector(".c-input-erase--icon"); t && t.setAttribute("icon", "croix-suppr") } } class qc extends Ui { static get customName() { return "ux-input-email" } static get style() { return Ic } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "at"); const t = this.$.querySelector(".c-input-erase--icon"); t && t.setAttribute("icon", "croix-suppr") } } class zc extends Wi { static get customName() { return "ux-input-file" } static get style() { return Ic } } const Nc = n`
  :host {
    display: block;
  }

  .c-input-item {
    display: flex;
    flex-flow: column nowrap;
    position: relative;
  }

  ::slotted(ux-label) {
    margin-bottom: 5px;
  }

  .c-input-item__error-msg {
    position: absolute;
    bottom: -2rem;
  }

  @media (min-width: 590px) {
    .c-input-item.c-input-item--inline {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: inherit;
      width: 100%;
    }

    .c-input-item--inline ::slotted(*) {
      grid-column-start: 2;
    }

    .c-input-item--inline ::slotted(ux-label) {
      align-self: center;
      padding-top: 6px;
      grid-column: 1 / 2;
    }

    .c-input-item--inline ::slotted(ux-select) {
      grid-column: 2 / 4;
    }

    .c-input-item--inline ::slotted(ux-input-text) {
      grid-column: 2 / 5;
    }

    .c-input-item--inline .c-input-item__error-msg {
      left: 25%;
      color: var(--color-error);
    }
  }
`; class Hc extends Gi { static get customName() { return "ux-input-item" } static get style() { return Nc } } class jc extends Ni { static get customName() { return "ux-input-number" } static get style() { return Ic } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = this.$.querySelector(".c-input-erase--icon"); t && t.setAttribute("icon", "croix-suppr") } } class Rc extends Yi { static get customName() { return "ux-input-password" } static get style() { return Ic } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.iconShow = "oeil", this.iconHide = "oeil-barre"; const t = this.$.querySelector(".c-svg-eye"); t && (t.icon = this.iconShow); const e = this.$.querySelector(".c-input-erase--icon"); e && e.setAttribute("icon", "croix-suppr") } } const Oc = n`
  :host {
    --height: 8px;
    --border-radius: 6px;

    --track-color: #e6e6e6;
    --track-color-hover: #cdcbcb;

    --cursor-color: var(--color-primary);
    --cursor-color-hover: var(--color-primary-dark);

    --lower-shadow: none;
    --lower-color: var(--color-primary);
    --lower-color-hover: var(--color-primary-dark);

    --upper-shadow: none;
    --upper-color: black;

    --cursor-width: 26px;
    --cursor-height: 26px;
    --cursor-width-hover: 30px;
    --cursor-height-hover: 30px;
  }

  .c-input-range {
    display: block;
    position: relative;
    width: 100%;
    margin-bottom: 7px;
    margin-top: 7px;
    box-sizing: border-box;
  }

  .c-input-range * {
    box-sizing: border-box;
  }

  .c-input-range__wrap {
    display: block;
    position: relative;
    padding-top: 30px;
  }

  .c-input-range__wrap2 {
    position: relative;
    display: flex;
    align-items: center;
  }

  /* le rail */
  .c-input-range__rail {
    display: block;
    position: absolute;
    width: 100%;
    background: var(--track-color);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    height: var(--height);
  }

  .c-input-range:hover .c-input-range__rail,
  .c-input-range:focus-within .c-input-range__rail {
    background: var(--track-color-hover);
  }

  /* le curseur */
  .c-input-range__track {
    display: block;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    background: var(--cursor-color);
    border-radius: 50%;
    height: var(--cursor-height);
    width: var(--cursor-width);
    border: 4px solid white;
  }

  .c-input-range:hover .c-input-range__track,
  .c-input-range:focus-within .c-input-range__track {
    background: var(--cursor-color-hover);
    height: var(--cursor-height-hover);
    width: var(--cursor-width-hover);
    border: 4px solid white;
    transform: translateX(-2px); /* 2 = (30px - 26px) / 2 */
  }

  /* Barre rouge qui suit le cursor */
  .c-input-range__lower {
    position: absolute;
    cursor: pointer;
    height: 8px;
    background-color: var(--lower-color);
    border-radius: var(--border-radius);
    pointer-events: none;
    z-index: 2;
  }

  .c-input-range:hover .c-input-range__lower,
  .c-input-range:focus-within .c-input-range__lower {
    background: var(--lower-color-hover);
  }

  /* La legende */
  .c-input-range__legend {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  /* La legende au milieu */
  .c-input-range__middle {
    transform: translateX(-25%);
  }

  /* La valeur actuelle */
  .c-input-range__val {
    position: relative;
    top: -35px;
    color: var(--color-primary);
    font-weight: bold;
  }

  .c-input-range:hover .c-input-range__val,
  .c-input-range:focus-within .c-input-range__val {
    color: var(--cursor-color-hover);
  }

  .c-input-error {
    color: var(--color-error);
  }
`; class Pc extends Qi { static get customName() { return "ux-input-range-native" } static get style() { return Ji + Oc } } class Dc extends es { static get customName() { return "ux-input-range" } static get style() { return Ji + Oc } } const Vc = n`
  :host([is-menu]:not([is-menu='false'])) .c-input-wrap {
    padding-right: 0;
    height: 4rem;
  }
`; class Uc extends as { static get customName() { return "ux-input-search" } static get style() { return Ic + Vc } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "loupe"); const t = this.$.querySelector(".m-icon"); t && (t.libColor = "var(--color-primary)"), "desktop" === this.screenType && (t.libSize = "md"); const e = this.$.querySelector(".c-input-erase--icon"); e && e.setAttribute("icon", "croix-suppr") } } class Fc extends rs { static get customName() { return "ux-input-tel" } static get style() { return Ic } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "telephone"); const t = this.$.querySelector(".c-input-erase--icon"); t && t.setAttribute("icon", "croix-suppr") } } class Wc extends ls { static get customName() { return "ux-input-text" } static get style() { return Ic } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = this.$.querySelector(".c-input-erase--icon"); t && t.setAttribute("icon", "croix-suppr") } } const Kc = n`
  .c-label {
    font-size: var(--text-font-size-label);
    font-weight: var(--label-font-weight);
  }

  .c-label--clickable {
    cursor: pointer;
  }

  .c-label-state--error::after {
    content: '';
    position: relative;
    display: inline-block;
    top: 3px;
    margin-left: 5px;
    width: var(--text-font-size-label);
    height: var(--text-font-size-label);
    background-image: var(--c-label-bg-error);
    background-size: var(--text-font-size-label) var(--text-font-size-label);
  }

  .c-label-state--valid::after {
    content: '';
    position: relative;
    display: inline-block;
    top: 3px;
    margin-left: 5px;
    height: var(--text-font-size-label);
    width: var(--text-font-size-label);
    background-image: var(--c-label-bg-valid);
    background-size: var(--text-font-size-label) var(--text-font-size-label);
  }
`; i.p, i.p; class Gc extends (Ao(hs)) { static get customName() { return "ux-label" } static get style() { return Kc } template() { const t = super.template(); return t.content.querySelector(".c-label").setAttribute("style", `--c-label-bg-valid:url(${this.uxLibUrl}/assets/images/valid.png);--c-label-bg-error:url(${this.uxLibUrl}/assets/images/cross.png)`), t } } const Xc = n`
  :host(:not(.no-style)) {
    --radio-button-size: 2.8rem;
    --radio-button-inner-size: 1.8rem;

    display: inline-block;
    position: relative;
    cursor: pointer;
    line-height: var(--radio-button-height);
    padding: 10px 10px 10px 46px;
    background-color: #fff;
    border: 1px solid var(--color-secondary-light);
    border-radius: var(--border-radius-xs);
    box-sizing: border-box;
    font-size: var(--text-font-size-md);
  }

  :host(:not(.no-style):hover),
  :host(:not(.no-style):focus),
  :host(:not(.no-style):focus-within),
  :host(:not(.no-style):active) {
    border: 1px solid var(--color-secondary-hover);
  }

  :host(:not(.no-style))::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 8px;
    display: block;
    transform: translateY(-50%);
    background-size: contain;
    background-color: #fff;
    width: var(--radio-button-size);
    height: var(--radio-button-size);
    border: 1px solid var(--color-secondary-light);
    border-radius: 50%;
    cursor: pointer;
  }

  :host(:not(.no-style))::after {
    content: '';
    position: absolute;
    width: var(--radio-button-inner-size);
    height: var(--radio-button-inner-size);
    top: 50%;
    left: 13px;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    background-color: var(--color-text);
    transition: transform 0.125s ease-in-out, opacity 0.125s ease-in-out;
    border-radius: 50%;
    cursor: pointer;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host(:not(.no-style)) {
      padding-left: 58px;
    }

    :host(:not(.no-style))::before {
      left: 20px;
    }

    :host(:not(.no-style))::after {
      left: 25px;
    }
  }

  :host([checked]:not([checked='false']))::after {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }

  .c-radio--more {
    position: absolute;
    right: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
  }
`; class Yc extends bs { static get customName() { return "ux-radio-button" } static get style() { return Xc } } const Jc = n`
  :host {
    --radio-button-height: 2rem;
    --radio-button-inside-height: 1.2rem;

    display: inline-block;
    position: relative;
    cursor: pointer;
    line-height: var(--radio-button-height);
    box-sizing: border-box;
    outline: none;
  }

  .c-grid {
    width: 100%;
    padding: 1rem;
    padding-left: 4rem;
    align-items: center;
  }

  .c-radio-grid {
    display: flex;
    flex-flow: row nowrap;
    border: 1px solid #ccc;
    border-radius: var(--border-radius-md);
    max-width: 100%;
    background-color: var(--color-white);
  }

  .c-radio-grid::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    display: block;
    height: var(--radio-button-height);
    width: var(--radio-button-height);
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: #fff;
  }

  .c-radio-grid::after {
    content: '';
    position: absolute;
    top: 50%;
    border-radius: 50%;
    height: var(--radio-button-inside-height);
    width: var(--radio-button-inside-height);
    transform: translateY(-50%) scale(0.8);
    left: 1.5rem;
    transition: all 0.2s ease-out;
  }

  :host(:hover) .c-radio-grid,
  :host(:focus) .c-radio-grid,
  :host(:focus-within) .c-radio-grid {
    border: 1px solid var(--color-secondary-hover);
  }

  :host(:active) .c-radio-grid {
    border: 1px solid var(--color-secondary-active);
  }

  .c-radio-grid.c-radio-grid--checked {
    border: 1px solid var(--color-secondary);
  }

  .c-radio-grid.c-radio-grid--checked::after {
    opacity: 1;
    transform: translateY(-50%) scale(1);
    background-color: #6f6f6f;
  }
`; class Zc extends xs { static get customName() { return "ux-radio-grid" } static get style() { return ms + Jc } } const Qc = n`
  :host {
    display: flex;
    flex-direction: column;
  }

  .c-radio-group {
    display: flex;
    flex-direction: column;
  }

  :not(.c-radio-group--segment) ::slotted(*:not(:last-of-type)) {
    margin-bottom: var(--spacing-sm);
  }

  .c-radio-group--segment {
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-white);
    border-radius: var(--border-radius-xs);
    border: 1px solid var(--color-secondary-light);
  }

  @media (min-width: 360px) {
    .c-radio-group--segment {
      height: 4rem;
    }
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-radio-group--segment {
      height: 6rem;
      font-size: 1.6rem;
    }
  }

  .c-radio-group--segment ::slotted(ux-radio-button)::before,
  .c-radio-group--segment ::slotted(ux-radio-button)::after {
    content: none;
  }

  .c-radio-group--segment ::slotted(ux-radio-button) {
    display: flex;
    padding-left: var(--spacing-xs);
    padding-right: var(--spacing-xs);
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    min-height: 4rem;
  }

  .c-radio-group--segment ::slotted(ux-radio-button:hover) {
    border: 1px solid var(--bordercolor-segment-hover) !important;
    color: var(--color-segment-hover);
  }

  .c-radio-group--segment ::slotted(ux-radio-button:first-of-type) {
    border-top-left-radius: var(--border-radius-xs);
    border-bottom-left-radius: var(--border-radius-xs);
    border-right: 1px solid var(--color-secondary-light);
  }

  .c-radio-group--segment ::slotted(ux-radio-button:last-of-type) {
    border-top-right-radius: var(--border-radius-xs);
    border-bottom-right-radius: var(--border-radius-xs);
    border-left: 1px solid var(--color-secondary-light);
  }

  .c-radio-group--segment ::slotted(ux-radio-button[checked='true']),
  .c-radio-group--segment ::slotted(ux-radio-button[checked='checked']) {
    background-color: var(--bgcolor-segment-checked);
    color: var(--color-segment-checked);
    font-weight: bold;
  }
`; class td extends ws { static get customName() { return "ux-radio-group" } static get style() { return Qc } } const ed = n`
  select {
    font-family: var(--font-family);
  }

  :host {
    --color-empty: var(--color-text);

    position: relative;
  }

  .c-select {
    display: inline-block;
    height: 4rem;
    font-size: var(--text-font-size-md);
    font-weight: bold;
    width: 100%;
    padding: var(--spacing-sm);
    box-sizing: border-box;
    color: var(--color-text);
    vertical-align: middle;
    background: #fff var(--background-select) no-repeat right 2px center;
    background-size: 20px 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 5px;
    border: 1px solid var(--color-secondary-light);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-select {
      height: 6rem;
      padding-left: var(--spacing-md);
      padding-right: var(--spacing-md);
      background: #fff var(--background-select) no-repeat right 10px center;
      background-size: 24px 24px;
    }
  }

  .c-select ::slotted(option) {
    padding: var(--spacing-sm) var(--spacing-xs);
  }

  .c-select--placeholder {
    font-weight: normal;
  }

  .c-select:hover {
    border: 1px solid var(--color-secondary-hover);
  }

  /* .c-select-empty {
  border: 1px solid var(--color-empty);
} */

  .c-select-success {
    border: solid 1px var(--color-success);
  }

  .c-select-error {
    border: solid 1px var(--color-error);
  }

  .c-select-error-msg {
    position: absolute;
    bottom: -2rem;
  }

  ::slotted([slot='error']) {
    color: var(--color-error);
    font-size: var(--text-font-size-sm);
  }
`; class id extends Es { static get customName() { return "ux-select" } static get style() { return Cs + ed } } const sd = n`
  :host {
    --c-link-width: 46px;
  }

  .c-editable-field.m-link {
    padding-right: calc(var(--c-link-width) - var(--spacing-sm)) !important;
  }

  .c-editable-field {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border: solid 1px var(--color-secondary-light);
    border-radius: var(--border-radius-xs);
    padding: var(--spacing-sm);
  }

  .c-editable-field:hover,
  .c-editable-field:focus-within {
    border: var(--m-border-focus);
  }

  .c-editable-field--items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .c-editable-field--items slot {
    display: flex;
  }

  .c-editable-field--link ::slotted(*:not(ux-link)) {
    padding-left: var(--spacing-md);
  }

  .c-editable-field--icon {
    padding-right: var(--spacing-sm);
  }

  /** couleur du message d'erreur **/
  .c-editable-field--error {
    margin-top: var(--spacing-xs);
    color: var(--color-error);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-editable-field {
      padding: var(--spacing-md);
    }

    .c-editable-field.m-link {
      padding-right: var(--c-link-width) !important;
    }

    .c-editable-field--items {
      flex-direction: row;
      justify-content: space-between;
      flex-grow: 1;
    }

    ::slotted(ux-link) {
      --padding-link: var(--spacing-md);
    }
  }
`; class ad extends As { static get customName() { return "ux-editable-field" } static get style() { return sd } connectedCallback() { this.labelIcon = "true", this.iconSize = "md", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", super.connectedCallback && super.connectedCallback() } } const nd = n`
  :host {
    --gap-h: var(--spacing-sm);
    --gap-v: var(--spacing-xs);
  }

  .c-filter-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .c-filter-group .c-filter-group--title {
    display: flex;
    flex: 1;
    padding-bottom: 0.4rem;
  }

  /* Trick de css pour gérer des gaps horizontaux et verticaux différenciés https://coryrylan.com/blog/css-gap-space-with-flexbox */
  .c-filter-group .c-filter-group--filter {
    display: flex;
    flex-wrap: wrap;
    margin: calc(-1 * var(--gap-v)) 0 0 calc(-1 * var(--gap-h));
    width: calc(100% + var(--gap-h));
  }

  .c-filter-group .c-filter-group--filter ::slotted(*) {
    margin: var(--gap-v) 0 0 var(--gap-h);
  }
`; class rd extends Ts { static get customName() { return "ux-filter-group" } static get style() { return nd } } const od = n`
  .c-filter {
    display: inline-flex;
    position: relative;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 0 var(--spacing-sm);
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1;
    transition: all ease 0.3s;
    color: var(--color-secondary);
    background-color: var(--color-white);
    border: 1px solid var(--color-secondary);
    border-radius: var(--border-radius-md);
    cursor: pointer;
  }

  :host(:focus-within) {
    outline: auto;
  }

  .c-filter:hover {
    box-shadow: unset;
    color: var(--color-white);
    background-color: var(--color-secondary);

    /* box-shadow: 1px 2px 3px 2px var(--color-secondary-dark); */
  }

  :host([checked]:not([checked='false'])) .c-filter {
    color: var(--color-white);
    background-color: var(--color-secondary);
  }

  /* .c-filter input {
    position: absolute;
    top: -2px;
    left: -4px;
    width: 100%;
    height: 100%;
    opacity: 0;
  } */

  .c-filter label {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: inherit;
    user-select: none;
  }
`; class ld extends Is { static get customName() { return "ux-filter" } static get style() { return od } } class cd extends Bs { static get customName() { return "ux-form" } } const dd = n`
  :host {
    box-sizing: border-box;
    --padding-input: var(--spacing-sm);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host {
      --padding-input: var(--spacing-md);
    }
  }

  .c-input {
    font-family: var(--font-family);
    font-size: var(--text-font-size-md);
    box-sizing: border-box;
    border: none;
    padding: 0 var(--padding-input);
    flex-grow: 1;
    font-weight: bold;
    color: var(--color-secondary);
  }

  /** Suppression du focus natif **/
  .c-input:focus {
    outline: none;
  }

  .c-input[type='password']:not(:placeholder-shown) {
    letter-spacing: var(--text-letter-spacing-lg);
  }

  .c-input::placeholder {
    font-weight: normal;
    color: var(--color-secondary);
  }

  .c-input-wrap {
    display: flex;
    position: relative;
    /* Hauteur 3.8rem + box-shadow = 4rem */
    height: 3.8rem;
    margin: 1px;
    border-radius: 5px;
    background-color: var(--color-white);
    box-shadow: 0 0 0 1px var(--color-input-border);
    overflow: hidden;
  }

  :host(:not([readonly]):not([disabled])) .c-input-wrap:hover,
  :host(:not([readonly]):not([disabled])) .c-input-wrap:focus-within:not(.c-input-btn) {
    box-shadow: 0 0 0 2px var(--color-input-hover);
  }

  /**
 * Partie concernant l'input a11y amount
 */
  :host([model='explicit']) .c-input-amount::placeholder,
  :host([model='explicit']) .c-input-amount {
    font-size: 3rem;
    width: 100%;
    font-weight: bold;
    color: var(--color-secondary);
  }

  :host([model='explicit']) .c-input-amount--txt {
    min-width: auto;
    font-size: 3rem;
    font-weight: bold;
  }

  :host([model='explicit']) .c-input-amount--txt::after {
    content: attr(data-currency);
    display: block;
    position: relative;
    margin-top: 1.7rem;
    margin-left: 0.2rem;
    color: var(--input-amount-explicit-after-color);
    font-size: 1.2rem;
    font-weight: initial;
    text-transform: uppercase;
  }

  /** ERREUR **/
  .c-input-wrap.error {
    box-shadow: 0 0 0 1px var(--color-error);
  }

  :host(:not([readonly]):not([disabled])) .c-input-wrap.error:hover,
  :host(:not([readonly]):not([disabled])) .c-input-wrap.error:focus-within {
    box-shadow: 0 0 0 2px var(--color-error);
  }

  /** couleur du message d'erreur **/
  .c-input-error {
    font-size: var(--text-font-size-sm);
    color: var(--color-error);
  }

  /** VALID **/
  .c-input-wrap.valid {
    box-shadow: 0 0 0 1px var(--color-success);
  }

  :host(:not([readonly]):not([disabled])) .c-input-wrap.valid:hover,
  :host(:not([readonly]):not([disabled])) .c-input-wrap.valid:focus-within {
    box-shadow: 0 0 0 2px var(--color-success);
  }

  /** MINIFIED **/
  :host([model='minified']) .c-input-wrap,
  :host([model='minified']) .c-input-error {
    width: 430px;
    max-width: calc(100vw - 4rem);
    margin: auto;
  }

  :host([model='minified']) .c-input-btn {
    width: auto;
  }

  /** LABEL **/
  .c-label {
    display: inline-block;
    margin-bottom: 5px;
    font-size: var(--text-font-size-label);
    font-weight: var(--label-font-weight);
  }

  /** icone à droite du label **/
  .c-label-icon {
    margin-left: 5px;
  }

  /** BOUTONS INTERNES AUX CHAMPS **/
  .c-input-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: inherit;
    min-width: 30px;
    margin-right: var(--padding-input);
  }

  /** DISABLED **/
  :host([disabled]:not([disabled='false'])) .c-input-wrap,
  :host([disabled]:not([disabled='false'])) .c-label {
    color: var(--color-disabled);
  }

  :host([disabled]:not([disabled='false'])) .c-input-wrap {
    background-color: #fafafa;
  }

  :host([disabled]:not([disabled='false'])) .c-input {
    background-color: #fafafa40;
  }

  /** hover et focus sur le bouton erase **/
  .c-input-erase:hover:not([disabled]),
  .c-input-erase:focus:not([disabled]) {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-input-hover);
  }

  /** BOUTON OU SVG dans le slot right **/
  slot[name='right']::slotted(*) {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    min-width: 30px;
    padding-right: var(--padding-input);
  }

  /** Texte dans le slot left **/
  slot[name='left']::slotted(*) {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    padding-left: var(--padding-input);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host(:not([model='minified'])) .c-input-wrap {
      /* Hauteur 5.8rem + box-shadow = 6rem */
      height: 5.8rem;
      font-size: 1.6rem;
    }

    :host([model='explicit']) .c-input-amount--txt::after {
      margin-right: 0;
    }
  }
`; class ud extends Vs { static get customName() { return "ux-input-a11y-amount" } static get style() { return qs + dd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr", super.connectedCallback && super.connectedCallback() } } const hd = n`
  slot[name='group-legend']::slotted(*) {
    display: inline-block;
    font-size: var(--text-font-size-label) !important;
    font-family: var(--font-family) !important;
    padding: 0 !important;
    font-weight: normal !important;
  }

  :host([disabled]:not([disabled='false'])) slot[name='group-legend']::slotted(*) {
    color: var(--color-disabled);
  }

  .c-input-error {
    font-size: var(--text-font-size-sm);
    color: var(--color-error);
  }

  .c-checkbox-group {
    margin-top: var(--spacing-xxs);
  }

  /* INLINE */
  :host([model='inline']) #wraplist {
    display: inline-flex;
    gap: var(--stack-size);
    flex-flow: row wrap;
  }

  :host([nowrap]:not([nowrap='false'])) #wraplist {
    flex-wrap: nowrap;
  }

  /* GRID */
  :host([model='grid2']) #wraplist,
  :host([model='grid3']) #wraplist,
  :host([model='grid4']) #wraplist {
    display: grid;
    grid-template-rows: auto;
    grid-gap: var(--spacing-sm);
  }

  @media (min-width: 590px) {
    :host([model='grid2']) #wraplist {
      grid-template-columns: 1fr 1fr;
    }

    :host([model='grid3']) #wraplist {
      grid-template-columns: 1fr 1fr 1fr;
    }

    :host([model='grid4']) #wraplist {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`; class pd extends Ws { static get customName() { return "ux-input-a11y-checkbox-group" } static get style() { return hd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "cross", super.connectedCallback && super.connectedCallback() } } const bd = n`
  /** couleur du message d'erreur **/
  /* stylelint-disable no-descending-specificity */
  :host {
    --checkbox-radius: 2px;

    /** Sans le wordbreak lorsque l'on zoome (juste le texte) ou si
  le label est trop long il dépasse du conteneur et n'affiche
  pas de scroll  **/
    word-break: break-word;
  }

  #error {
    display: flex; /** pour afficher l'icone a droite **/
    font-size: var(--text-font-size-sm);
    color: var(--color-error);
    margin-bottom: 0.5rem;
  }

  .c-label-icon {
    margin-left: 0.5rem;
  }

  #label {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 3rem;
    padding-left: calc(2rem + var(--spacing-md));
    cursor: pointer;
  }

  #wrap:focus {
    outline: auto;
    outline-offset: 2px;
  }

  #label::before {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    background-size: contain;
    background-color: #fff;
    width: 2.6rem;
    height: 2.6rem;
    border: 1px solid var(--checkbox-border-color);
    border-radius: var(--checkbox-radius);
  }

  :host(:not([disabled]):hover) #label::before {
    border: 1px solid var(--checkbox-checked-color);
  }

  #label::after {
    content: '';
    left: 0.55rem;
    width: 1.7rem;
    height: 1.7rem;
    opacity: 0;
    transform: scale(0);
    background-color: var(--checkbox-checked-color);
    border-radius: var(--checkbox-radius);
    transition: transform 0.125s ease-in-out, opacity 0.125s ease-in-out;
    position: absolute;
  }

  #wrap[aria-checked='true'] #label::after {
    opacity: 1;
    transform: scale(1);
  }

  :host([state='valid']) #label::before {
    border: 1px solid var(--color-success);
  }

  #wrap[aria-disabled='true'] #label {
    opacity: 0.6;
    cursor: not-allowed;
  }

  #wrap[aria-disabled='true'] #label::after {
    background: var(--color-bg-disabled) no-repeat;
  }

  /* Pour éviter que le contenu ne déborde dans certains cas */
  slot[name='label']::slotted(*) {
    width: 100%;
    max-width: 100%;
  }

  /** Affichage d'image **/
  :host([img]) #label {
    padding: 0;
    border: none;
  }

  :host([img]) #label::before,
  :host([img]) #label::after {
    display: none;
  }

  :host([box-align='top']) #label::before {
    top: 0;
  }

  :host([box-align='top']) #label::after {
    top: 0.55rem;
  }

  :host([box-align='bottom']) #label::before {
    bottom: 0;
  }

  :host([box-align='bottom']) #label::after {
    bottom: 0.55rem;
  }
`; class md extends Xs { static get customName() { return "ux-input-a11y-checkbox" } static get style() { return bd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", super.connectedCallback && super.connectedCallback() } } const gd = n`
  /* Change le padding pour laisser la place à l'icone */
  .c-input {
    padding: 0 3rem 0 var(--spacing-md);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-input {
      padding-right: 5rem;
    }
  }

  /* Met le svg du calendrier en absolute pour le supprimer du flux
 * et surtout pointer-events: none ce qui fait que le svg ne va pas
 * intercepter le click le laissant à l'élément de chrome
 */
  .c-input-btn {
    position: absolute;
    right: 0;
    pointer-events: none;
  }

  /* Rend invisible l'élément déclanchant l'ouverture du date picker
 * de chrome
 */
  .c-input-date::-webkit-calendar-picker-indicator {
    display: block;
    position: absolute;
    opacity: 0;
    margin: 0;
    right: 0;
    height: 100%;
    width: calc(var(--spacing-md) + 1rem);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-input-date::-webkit-calendar-picker-indicator {
      width: calc(var(--spacing-md) + 4rem);
    }
  }

  /* Ne pas afficher les touches haut bas sur chrome */
  .c-input-date::-webkit-inner-spin-button {
    display: none;
  }

  /* Style du "placeholder" */
  :host(:not([value])) .c-input-date,
  :host([value='']) .c-input-date {
    font-weight: normal;
  }
`; class vd extends Zs { static get customName() { return "ux-input-a11y-date" } static get style() { return qs + dd + gd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr"; const t = this.$.querySelector(".c-input-icon"); t && t.setAttribute("icon", "agenda"), super.connectedCallback && super.connectedCallback() } } class fd extends ea { static get customName() { return "ux-input-a11y-email" } static get style() { return qs + dd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr"; const t = this.$.querySelector(".c-input-icon"); t && t.setAttribute("icon", "at"), super.connectedCallback && super.connectedCallback() } } const xd = n`
  :host {
    width: 100%;
    box-sizing: border-box;
    --button-height: 4rem;
  }

  #input {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100% !important;
    width: 100% !important;
    opacity: 0;
    cursor: pointer;
  }

  /** couleur du message d'erreur **/
  .c-input-error {
    font-size: var(--text-font-size-sm);
    color: var(--color-error);
  }

  /** WRAP FILE **/
  .c-input-wrap {
    position: relative;
    height: var(--button-height);
    width: 100%;
    color: var(--color-primary);
    background-color: var(--color-white);
    border: 1px dashed var(--color-primary);
    border-radius: var(--btn-border-radius);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .c-input-wrap > .c-label {
    font-weight: bold;
  }

  :host(:not([disabled])) .c-input-file--dragover,
  :host(:not([disabled])) .c-input-wrap:focus-within,
  :host(:not([disabled])) .c-input-wrap:hover {
    color: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
    border-style: solid;
  }

  :host([readonly]:not([readonly='false'])),
  :host([disabled]:not([disabled='false'])),
  :host([readonly]:not([readonly='false'])) #input,
  :host([disabled]:not([disabled='false'])) #input,
  :host([readonly]:not([readonly='false'])) .c-input-wrap,
  :host([disabled]:not([disabled='false'])) .c-input-wrap,
  :host([readonly]:not([readonly='false'])) .c-label,
  :host([disabled]:not([disabled='false'])) .c-label,
  :host([readonly]:not([readonly='false'])) .c-input::-webkit-file-upload-button,
  :host([disabled]:not([disabled='false'])) .c-input::-webkit-file-upload-button {
    color: var(--color-disabled);
    font-weight: normal;
  }

  :host([disabled]:not([disabled='false'])),
  :host([disabled]:not([disabled='false'])) #input,
  :host([disabled]:not([disabled='false'])) .c-input-wrap,
  :host([disabled]:not([disabled='false'])) .c-label,
  :host([disabled]:not([disabled='false'])) .c-input::-webkit-file-upload-button {
    cursor: not-allowed;
  }

  /** LABEL **/
  .c-label {
    display: block;
    font-family: var(--font-family);
    font-size: var(--text-font-size-sm);
    margin-right: auto;
    padding-right: var(--spacing-xxs);
  }

  .c-label > ux-svg {
    margin-left: var(--spacing-xxs);
  }

  :host([readonly]:not([readonly='false'])) .c-label,
  :host([disabled]:not([disabled='false'])) .c-label {
    color: var(--color-disabled);
  }

  /** icone à gauche du label **/
  .c-input-icon {
    margin-left: auto;
    margin-right: var(--spacing-xxs);
    padding-left: var(--spacing-xxs);
  }

  /** BOUTON OU SVG dans le slot right **/
  slot[name='right']::slotted(*) {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    min-width: 3rem;
  }

  /** Slot HEADER (pseudo label visuel) **/
  #header {
    margin-bottom: var(--spacing-xxs);
  }
`; class yd extends sa { static get customName() { return "ux-input-a11y-file" } static get style() { return xd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr", this.preIcon = "upload", super.connectedCallback && super.connectedCallback() } } class kd extends Os { static get customName() { return "ux-input-a11y-number" } static get style() { return qs + dd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr", super.connectedCallback && super.connectedCallback() } } class wd extends oa { static get customName() { return "ux-input-a11y-password" } static get style() { return qs + dd } connectedCallback() { this.labelIcon = "true", this.iconShow = "oeil", this.iconHide = "oeil-barre", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr"; const t = this.$.querySelector(".c-svg-eye"); t && (t.icon = this.iconShow), super.connectedCallback && super.connectedCallback() } } const Cd = n`
  slot[name='group-legend']::slotted(*) {
    display: inline-block;
    font-size: var(--text-font-size-label) !important;
    font-family: var(--font-family) !important;
    padding: 0 !important;
    font-weight: normal !important;
  }

  :host([model='segment']) slot[name='group-legend']::slotted(*),
  :host([model='selector']) slot[name='group-legend']::slotted(*),
  :host([model='great-group']) slot[name='group-legend']::slotted(*) {
    margin: 0 0 0.5rem !important;
  }

  :host([disabled]:not([disabled='false'])) slot[name='group-legend']::slotted(*) {
    color: var(--color-disabled);
  }

  :host([model='great-group']) slot[name='error']::slotted(*) {
    font-weight: normal;
  }

  .c-input-error {
    font-size: var(--text-font-size-sm);
    color: var(--color-error);
  }

  /* SEGMENT */
  :host([model='segment']) #radios {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  /* GREAT GROUP */
  :host([model='great-group']) #radios {
    display: flex;
    flex-wrap: wrap;
  }

  /* SEGMENT */
  :host([model='segment']) ::slotted(ux-input-a11y-radio:first-of-type) {
    border-radius: var(--border-radius-xs) 0 0 var(--border-radius-xs);
  }

  :host([model='segment']) ::slotted(ux-input-a11y-radio:last-of-type) {
    border-radius: 0 var(--border-radius-xs) var(--border-radius-xs) 0;
  }

  :host([model='segment']) ::slotted(ux-input-a11y-radio:not(:first-of-type)) {
    margin-left: -1px;
  }

  /* SELECTOR */
  :host([model='selector']) #radios {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-sm);
  }

  /* INLINE */
  :host([model='inline']) #radios {
    display: inline-flex;
    gap: var(--spacing-sm);
  }

  /* GRID */
  @media (min-width: 590px) {
    :host([model='grid2']) #radios {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: var(--spacing-sm);
    }

    :host([model='grid3']) #radios {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: var(--spacing-sm);
    }

    :host([model='grid4']) #radios {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: var(--spacing-sm);
    }
  }
`; class _d extends da { static get customName() { return "ux-input-a11y-radio-group" } static get properties() { return { ...super.properties, boxAlign: { type: "string" } } } static get style() { return Cd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", super.connectedCallback && super.connectedCallback() } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "box-align" === t && this.setBoxAlign()) } setBoxAlign() { this.allRadio.forEach((t => { t.setAttribute("box-align", this.boxAlign) })) } } const Ed = n`
  :host {
    --padding-input: var(--spacing-sm);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host {
      --padding-input: var(--spacing-md);
    }
  }

  /* Section pas en segment */
  :host(:not([model])) .wrap {
    --radio-checked-color: var(--color-text);
    --radio-border-color: var(--color-input-border);
    --radio-radius: var(--border-radius-circle);

    display: flex;
    position: relative;
    cursor: pointer;
    background-color: var(--color-white);
    margin-top: var(--spacing-xxs);
    padding: var(--spacing-xxs) var(--padding-input);
    border: 1px solid #e6e6e6;
    border-radius: var(--border-radius-xs);
  }

  :host(:not([model]):focus) {
    outline: none;
  }

  :host(:not([model]):not([disabled]):hover) .wrap,
  :host(:not([model]):not([disabled]):focus) .wrap {
    border: 1px solid var(--color-input-hover);
  }

  :host(:not([model])) .label {
    width: 100%;
    padding-left: calc(2.8rem + var(--spacing-sm));
    position: relative;
    min-height: 3.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  :host(:not([model])) .label::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    transform: translateY(-50%);
    background-size: contain;
    background-color: #fff;
    width: 2.8rem;
    height: 2.8rem;
    border: 1px solid var(--radio-border-color);
    border-radius: var(--radio-radius);
  }

  :host(:not([model])) .label::after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 50%;
    left: 1.5rem;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    background-color: var(--radio-checked-color);
    border-radius: var(--radio-radius);
    transition: transform 0.125s ease-in-out, opacity 0.125s ease-in-out;
  }

  :host([aria-disabled='true']:not([model])) .label {
    color: var(--color-disabled);
    cursor: not-allowed;
  }

  :host([aria-disabled='true']:not([model])) .label::before {
    display: none;
  }

  :host([aria-checked='true']:not([model])) .label::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  /* SEGMENT & SELECTOR */
  :host([model='segment']),
  :host([model='selector']) {
    width: 100%;
    background-color: white;
    cursor: pointer;
  }

  :host([model='segment']) .wrap,
  :host([model='great-group']) .wrap,
  :host([model='selector']) .wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* SEGMENT */
  :host([model='segment']) {
    flex: 1 1 auto;
    border: 1px solid var(--color-input-border);
  }

  :host([model='segment']) .wrap {
    /* Hauteur 3.8rem + border = 4rem */
    min-height: 3.8rem;
    height: 100%;
    padding-left: var(--spacing-xs);
    padding-right: var(--spacing-xs);
    text-align: center;
  }

  :host([model='segment']) .label {
    margin: var(--spacing-sm) 0;
  }

  /* SELECTOR */
  :host([model='selector']) {
    flex: 0 1 auto;
    font-size: var(--text-font-size-md);
    min-width: max-content;
    min-height: 7rem;
    border: 1px solid var(--color-input-border);
    border-radius: var(--spacing-md);
  }

  :host([model='selector']) .wrap {
    min-height: 7rem;
  }

  :host([model='selector']) .label {
    margin: var(--spacing-sm);
  }

  /* SEGMENT & SELECTOR HOVER */
  :host([model='selector']:not([disabled]):hover),
  :host([model='selector']:not([disabled]):focus),
  :host([model='great-group']:not([disabled]):hover),
  :host([model='great-group']:not([disabled]):focus) {
    border: 1px solid var(--bordercolor-segment-hover) !important;
  }

  /* GREAT GROUP */
  :host([model='great-group']) {
    background-color: white;
    cursor: pointer;
    margin: 0 0.5rem 0.5rem 0;
    padding: 1rem;
    border: 1px solid var(--color-input-border);
    border-radius: var(--spacing-md);
    max-width: 100%;
  }

  :host([model='great-group']) .label {
    max-width: 100%;
  }

  :host([model='great-group']) ::slotted(p),
  :host([model='great-group']) ::slotted(ux-text) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host([model='great-group'][aria-disabled='true']) .label {
    color: var(--color-disabled) !important;
  }

  :host([model='great-group'][aria-disabled='true']) {
    cursor: not-allowed !important;
  }

  :host([model='segment']:hover),
  :host([model='segment'][aria-checked='true']:hover),
  :host([model='segment']:focus) {
    border: 1px solid var(--bordercolor-segment-hover) !important;
  }

  :host([model='segment'][aria-checked='true']) {
    background-color: var(--bgcolor-segment-checked);
    color: var(--color-segment-checked);
    border: 1px solid var(--bgcolor-segment-checked);
    font-weight: 700;
  }

  :host([model='selector'][aria-checked='true']) {
    border: 1px solid var(--bordercolor-segment-hover) !important;
    font-weight: 700;
  }

  :host([model='great-group'][aria-checked='true']) {
    border: 1px solid var(--bordercolor-segment-hover) !important;
    font-weight: 700;
  }

  :host([box-align='top']) .label::before {
    top: 1.9rem;
  }

  :host([box-align='top']) .label::after {
    top: 1.9rem;
  }

  :host([box-align='bottom']) .label::before {
    bottom: -1.1rem;
    top: auto;
  }

  :host([box-align='bottom']) .label::after {
    bottom: -0.1rem;
    top: auto;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([model='segment']) .wrap {
      /* Hauteur 5.8rem + border = 6rem */
      min-height: 5.8rem;
    }

    :host([model='segment']) .label {
      margin: 0;
    }

    :host([model='great-group']) {
      margin: 0 1rem 0.5rem 0;
    }
  }
`; class Ld extends pa { static get customName() { return "ux-input-a11y-radio" } static get style() { return Ed } } class Ad extends ga { static get customName() { return "ux-input-a11y-range" } static get style() { return qs + ba } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "cross", super.connectedCallback && super.connectedCallback() } } const Sd = n`
  :host([is-menu]:not([is-menu='false'])) .c-input-wrap {
    height: 4rem;
  }

  :host([is-menu]:not([is-menu='false'])) .c-input {
    font-size: var(--text-font-size-label);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([is-menu]:not([is-menu='false'])) {
      --padding-input: var(--spacing-sm);
    }
  }

  /* Style spécifique pour les petits écrans desktop (ou grandes tablettes), quand le menu est plus étroit */
  @media (min-width: 1020px) and (max-width: 1090px) {
    :host([is-menu]:not([is-menu='false'])) {
      --padding-input: 0.5rem 0;
    }

    :host([is-menu]:not([is-menu='false'])) .c-input {
      flex-grow: inherit;
    }

    :host([is-menu]:not([is-menu='false'])) .c-input-btn {
      margin-right: 0;
    }

    :host([is-menu]:not([is-menu='false'])) .c-input-erase {
      position: absolute;
      right: 2.5rem;
    }

    :host([is-menu]:not([is-menu='false'])) .c-input-search-btn {
      position: absolute;
      right: 0;
    }
  }

  /* clears the 'X' from Internet Explorer */
  .c-input-search::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  .c-input-search::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  /* clears the 'X' from Chrome */
  .c-input-search::-webkit-search-decoration,
  .c-input-search::-webkit-search-cancel-button,
  .c-input-search::-webkit-search-results-button,
  .c-input-search::-webkit-search-results-decoration {
    display: none;
  }
`; class Td extends wa { static get customName() { return "ux-input-a11y-search" } static get style() { return qs + dd + Sd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr"; const t = this.$.querySelector(".c-svg-search"); t && t.setAttribute("icon", "loupe"), t.libColor = "var(--color-primary)", "desktop" !== this.screenType || this.hasAttribute("is-menu") || (t.libSize = "md"), super.connectedCallback && super.connectedCallback() } } const $d = n`
  :host {
    --color-empty: var(--color-text);

    position: relative;
  }

  .c-input-select {
    display: inline-block;
    height: 4rem;
    font-family: var(--font-family);
    font-size: var(--text-font-size-md);
    font-weight: bold;
    line-height: 2rem;
    width: 100%;
    padding: var(--spacing-sm) 3rem var(--spacing-sm) var(--spacing-sm);
    box-sizing: border-box;
    color: var(--color-text);
    vertical-align: middle;
    background: #fff var(--background-select) no-repeat right 2px center;
    background-size: 20px 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* Dégradé qui masque la fin des textes trop longs */
  .c-input-wrap::after {
    content: '';
    position: absolute;
    right: 3rem;
    height: 100%;
    width: 1rem;
    background: linear-gradient(-90deg, var(--color-white) 0%, transparent 100%);
  }

  :host([disabled]:not([disabled='false'])) .c-input-wrap::after {
    background: linear-gradient(-90deg, rgba(250, 250, 250, 1) 0%, transparent 100%);
  }

  @media (min-width: 740px) {
    .c-input-select {
      height: 6rem;
      padding-left: var(--spacing-md);
      padding-right: 5rem;
      background: #fff var(--background-select) no-repeat right 10px center;
      background-size: 24px 24px;
    }

    /* Dégradé qui masque la fin des textes trop longs */
    .c-input-wrap::after {
      right: 5rem;
    }
  }

  .c-input-select ::slotted(option) {
    padding: var(--spacing-sm) var(--spacing-xs);
  }

  .c-select--placeholder {
    font-weight: normal;
  }
`; class Id extends La { static get customName() { return "ux-input-a11y-select" } static get style() { return qs + Ca + dd + $d } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", super.connectedCallback && super.connectedCallback() } } class Md extends $a { static get customName() { return "ux-input-a11y-tel" } static get style() { return qs + dd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr"; const t = this.$.querySelector(".c-input-icon"); t && t.setAttribute("icon", "telephone"), super.connectedCallback && super.connectedCallback() } } class Bd extends Ma { static get customName() { return "ux-input-a11y-text" } static get style() { return qs + dd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr", super.connectedCallback && super.connectedCallback() } } const qd = n`
  /* Spécificités du textarea */
  .c-input-textarea {
    padding: 1rem 1rem 4rem;
    height: 14.7rem;
    font-weight: normal;
  }

  /* Surcharge du style input de base pour pouvoir redimentionner le textarea */
  .c-input-wrap {
    height: auto;
  }

  .c-input-erase {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-input-textarea {
      padding: 2rem 2rem 4rem;
      height: 26.5rem;
    }

    :host(:not([model='minified'])) .c-input-wrap {
      height: auto;
    }
  }
`; class zd extends za { static get customName() { return "ux-input-a11y-textarea" } static get style() { return qs + dd + qd } connectedCallback() { this.labelIcon = "true", this.iconSuccess = "coche-cercle", this.iconError = "croix-cercle", this.iconErase = "croix-suppr", super.connectedCallback && super.connectedCallback() } } const Nd = n`
  :host {
    /* Override du background des ux-svg */
    --color-background: var(--color-primary);

    --container-shadow: var(--box-shadow-primary);
    --container-border: 1px solid #dadce4;
    --button-height: 4rem;
    --button-min-width: 28rem;
    --c-link-width: 40px;
  }

  @media (max-width: 359px) {
    :host {
      max-width: 28rem;
    }
  }

  .c-manage-file {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 4rem;
    background-color: var(--color-white);
    border: var(--container-border);
    border-radius: var(--tile-border-radius);
    padding-left: var(--spacing-sm);
  }

  .c-manage-file__content {
    padding: var(--spacing-xs) 0;
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-right: var(--spacing-md);
  }

  .c-manage-file__content--subtitle {
    display: flex;
    flex-direction: column;
  }

  .c-manage-file__status ::slotted(*) {
    margin-right: var(--spacing-sm);
  }

  .c-manage-file__content--title {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .c-manage-file__content--data {
    display: flex;
  }

  slot[name='icon']::slotted(*) {
    color: var(--color-primary);
    min-width: initial;
  }

  slot[name='date']::slotted(*) {
    font-size: var(--text-font-size-sm);
  }

  .c-manage-file__type {
    background: var(--manage-file-type-background-color);
    border-radius: 5rem;
    text-align: center;
    min-width: 5rem;
    max-height: 2rem;
    margin-left: 1rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-manage-file {
      padding-left: var(--spacing-md);
    }

    .c-manage-file__content {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`, Hd = document.createElement("template"); Hd.innerHTML = '\n  <div class="c-manage-file js-container" part="ux-manage-file">\n    <div class="c-manage-file__status m-a11y-label">\n        <slot name="status"></slot>\n    </div>\n    <div class="c-manage-file__content" part="ux-manage-file__content">\n      <div class="c-manage-file__content--main">\n        <div class="c-manage-file__content--title">\n          <slot name="title"></slot>\n        </div>\n        <div class="c-manage-file__content--subtitle">\n          <slot name="subtitle"></slot>\n          <slot name="file-size"></slot>\n        </div>\n      </div>\n      <div class="c-manage-file__content--data">\n        <slot name="date"></slot>\n        <div class="c-manage-file__type"></div>\n      </div>\n    </div>\n    <div class="c-manage-file__icon">\n      <slot name="icon"></slot>\n    </div>\n  </div>'; class jd extends (xe(Ct(A))) { static get customName() { return "ux-manage-file" } static get properties() { return { type: { type: "string" } } } static get style() { return Nd } attributeChangedCallback(t, e, i) { i !== e && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "type" === t && (this.$.querySelector(".c-manage-file__type").innerHTML = this.type)) } template() { return Hd } } class Rd extends Na { static get customName() { return "ux-sref" } } class Od extends ja { static get customName() { return "ux-figure" } } const Pd = n`
  :host {
    --no-padding: 0;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([no-padding-m]) .c-video {
      border-radius: 0 !important;
    }

    :host([no-padding-m]) {
      margin: calc(-1 * var(--no-padding) - 1px);
    }
  }
`; class Dd extends Da { static get properties() { return { absSrc: { type: "boolean", defaultValue: !1 } } } static get customName() { return "ux-img" } static get style() { return Pd + Oa } } const Vd = n`
  :host {
    display: inline-block;
  }

  .c-svg {
    /* Place the icon on the text baseline. */
    position: relative;
    vertical-align: -0.15em;

    /* Prevent the icon from shrinking inside a flex container. */
    flex-shrink: 0;

    /* Scale the icon to match the font-size of the parent element. */
    height: 1em;
    width: 1em;

    /* Let the icon take whatever color the parent has. */
    fill: currentcolor;
    overflow: hidden;
    font-size: var(--size-svg);
  }

  .c-svg-size--logo {
    height: auto;
  }

  .c-svg-size--xs {
    --size-svg: 1.2rem;
    --svg-stroke-width: 0.5px;
  }

  .c-svg-size--sm {
    --size-svg: var(--icon-size-sm);
  }

  .c-svg-size--md {
    --size-svg: var(--icon-size-md);
  }

  .c-svg-size--lg {
    --size-svg: var(--icon-size-lg);
  }

  .c-svg-size--xl {
    --size-svg: 3.7rem;
  }

  .c-svg-size--xxl {
    --size-svg: 5.5rem;
  }

  .c-svg-size--xxxl {
    --size-svg: 8rem;
  }

  .c-svg-size--auth {
    --size-svg: 5.5rem;
  }

  .c-svg--center {
    display: block;
    margin: 0 auto;
  }

  .c-svg--circle {
    border: 1px solid;
    border-color: transparent;
    border-radius: var(--border-radius-circle);
    padding: var(--spacing-md);
    overflow: visible;
  }

  svg > * {
    fill: var(--color-fill-svg, none);
    stroke-width: var(--svg-stroke-width);
    stroke: var(--color-svg, currentcolor);
    vector-effect: non-scaling-stroke;
  }

  .svg-rectangle-hidden,
  .filled {
    stroke: none;
  }

  .svg-rectangle-hidden {
    fill: none;
  }

  .filled {
    fill: var(--color-svg, currentcolor);
  }
`; class Ud extends Wa { static get customName() { return "ux-svg" } static get properties() { return { libFill: { type: "string" }, strokeWidth: { type: "number" } } } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "lib-fill" === t ? this.setBooleanStyleProp(this.libFill, "--color-fill-svg", this.libFill) : "stroke-width" === t && this.setBooleanStyleProp(this.strokeWidth, "--svg-stroke-width", this.strokeWidth) } static get style() { return Vd } } var Fd, Wd; (Fd = Ud, Wd = "ux-svg", new Promise((async (t, e) => { if (customElements.get(Wd)) return t(!0); const i = document.querySelector("#uxlibsvg"); if (i) return Ua(), window.uxLib.svgEl = i, Fd.define(Wd), t(!0); if (Va) return window.addEventListener("svgOnFetch", (() => { Fd.define(Wd) })), t(!0); Va = !0; try { const e = await (s = undefined, Ua(), new Promise(((t, e) => { void 0 === s && (void 0 !== window.uxLib.iconsSvgUrl ? s = window.uxLib.iconsSvgUrl : document.body.hasAttribute("data-icons-svg-url") ? s = document.body.getAttribute("data-icons-svg-url") : document.currentScript && document.currentScript.src && ((s = document.currentScript.src).endsWith(".js") && (s = s.split("/").slice(0, -1).join("/")), s = `${s}/assets/images/icons.svg`)), fetch(s, { method: "GET", headers: new Headers, mode: "cors", cache: "default" }).then((t => { if (200 !== t.status) throw new Error; return t.text() })).then((e => t({ url: s, data: e }))).catch((t => (console.error("Error when loading svg for ux-lib", t), e(t)))) }))); return (({ url: t, data: e }) => { new Promise(((i, s) => { Ua(); const a = document.createElement("template"); a.innerHTML = e; const n = a.content.querySelector("svg"); return n ? (n.style.display = "none", window.uxLib.svgEl = n, document.body.appendChild(window.uxLib.svgEl), i(!0)) : s("No svg el : " + t) })) })(e), Fd.define(Wd), window.dispatchEvent(new CustomEvent("svgOnFetch", { bubbles: !0 })), t(!0) } catch (t) { return e(t) } var s }))).catch((t => { console.error("Error when loading svg for ux-lib", t) })); const Kd = n`
  :host {
    --no-padding: 0;
  }

  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([no-padding-m]) .c-video {
      border-radius: 0 !important;
    }

    :host([no-padding-m]) {
      margin: calc(-1 * var(--no-padding) - 1px);
    }
  }
`; class Gd extends Xa { static get customName() { return "ux-video" } static get style() { return Kd + Ka } } const Xd = n`
  .c-list {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
  }

  .c-list--bullet,
  :host([deco-level='1']) .c-list {
    display: block;
    padding-left: var(--spacing-sm);
    list-style-type: none;
  }

  :host([bullet]:not([bullet='false'])) ::slotted(*),
  :host([deco-level='1']) ::slotted(*),
  :host([deco-level='2']) ::slotted(*) {
    display: block;
    position: relative;
  }

  :host([deco-level='1']) ::slotted(*:not(:last-child)),
  :host([deco-level='2']) ::slotted(*:not(:last-child)) {
    margin-bottom: var(--spacing-sm);
  }

  :host([bullet]:not([bullet='false'])) ::slotted(*)::before,
  :host([deco-level='1']) ::slotted(*)::before {
    content: '\\2022';
    position: absolute;
    left: -1rem;
    font-weight: bold;
    color: var(--color-primary);
  }

  :host([deco-level='2']) .c-list {
    margin-top: var(--stack-size);
    margin-left: 3rem;
  }

  :host([deco-level='2']) ::slotted(*)::before {
    content: '\\009B';
    display: block;
    position: absolute;
    top: 0.6rem;
    left: -1.5rem;
    width: 0.8rem;
    height: 0.8rem;
    background-color: transparent;
    border: 0.3rem solid var(--color-secondary-dark);
    border-bottom: none;
    border-left: none;
    transform: rotateZ(45deg);
  }

  @media screen and (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([deco-level='2']) ::slotted(*)::before {
      top: 0.8rem;
    }
  }
`; class Yd extends Ja { static get customName() { return "ux-list" } static get style() { return Xd } } const Jd = n`
  .c-table {
    display: block;
    width: 100%;
  }

  .c-table-row {
    display: grid;
    grid-template-columns: 40% 30% 30%;
    grid-template-rows: 100% auto;
  }

  .c-table-cell {
    margin: var(--spacing-sm) auto;
  }
`; class Zd extends Qa { static get customName() { return "ux-table-cell" } static get style() { return Jd } } class Qd extends en { static get customName() { return "ux-table-header" } static get style() { return Jd } } class tu extends an { static get customName() { return "ux-table-row" } static get style() { return Jd } } class eu extends rn { static get customName() { return "ux-table" } static get style() { return Jd } } const iu = n`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: var(--back-link-padding);
  }

  .c-menu-icon {
    width: 100%;
    height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    font-size: 1.2rem;
  }

  .c-menu-icon-wrap {
    flex-flow: column;
    justify-content: space-between;
    height: 5.4rem;
  }

  .c-menu-icon-icon {
    margin-top: 0.9rem;
  }

  .c-menu-info {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--color-text);
    font-family: var(--font-family);
  }
`; class su extends mn { static get customName() { return "ux-back-link" } static get style() { return pn + iu } connectedCallback() { const t = document.querySelector("bux-back-link"); t && (this.libLink = t.getAttribute("data-link")), super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "navigation-retour-mobile") } } const au = n`
  :host {
    --burger-color: var(--color-white);
    --burger-background: var(--header-btn-color);

    cursor: pointer;
    width: 8rem;
    height: 100%;
    box-sizing: border-box;
  }

  :host(:hover),
  :host(:focus) {
    --burger-background: var(--header-btn-color-focus);
  }

  :host(:active) {
    --burger-background: var(--color-primary-active);
  }

  .c-burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--burger-background);
  }

  .c-burger--text {
    font-size: 1.2rem;
    color: var(--burger-color);
  }

  .line1,
  .line2,
  .line3 {
    transition: all 0.25s;
    transform-origin: center;
    stroke: var(--burger-color);
    stroke-width: 1px;
    stroke-linecap: round;
  }

  :host([open]:not([open='false'])) .line1 {
    transform: rotate(45deg) scaleX(1.3) translateY(6px);
  }

  :host([open]:not([open='false'])) .line2 {
    opacity: 0;
  }

  :host([open]:not([open='false'])) .line3 {
    transform: rotate(-45deg) scaleX(1.3) translateY(-6px);
  }
`, nu = document.createElement("template"); nu.innerHTML = '\n  <button class="js-container m-btn-no-style c-burger" aria-expanded="false">\n    <svg viewBox="0 0 24 24" class="c-burger-icon" aria-hidden="true" width="24" height="24">\n      <line class="line1" x1="4" y1="6" x2="20" y2="6" stroke="black" />\n      <line class="line2" x1="4" y1="12" x2="20" y2="12" stroke="black" />\n      <line class="line3" x1="4" y1="18" x2="20" y2="18" stroke="black" />\n    </svg>\n    <span class="c-burger--text">Menu</span>\n  </button>'; class ru extends vn { static get customName() { return "ux-burger" } static get style() { return au } template() { return nu } } const ou = n`
  :host {
    --margin-right-svg: 1.5rem;
  }

  .c-espace {
    --color-svg: white;

    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 5rem;
    align-items: center;
    padding: 0 2rem;
    color: var(--color-white);
    background-color: var(--espace-background-color);
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .c-espace:hover,
  .c-espace:focus {
    --color-svg: var(--color-secondary-hover);

    color: var(--color-secondary-hover);
    background-color: var(--espace-hover-background-color);
    font-weight: bold;
  }

  .c-espace:active {
    --color-svg: var(--color-secondary-active);

    color: var(--color-secondary-active);
    font-weight: bold;
  }

  .c-espace__label {
    flex-grow: 1;
  }

  .c-espace__action {
    text-align: right;
    text-decoration: underline;
  }

  .c-espace__action ux-svg {
    margin-right: 1.5rem;
    transition-property: margin-right;
    transition-duration: 0.3s;
  }

  @media (min-width: ${window.uxLib.breakpoints.mobile}px) {
    .c-espace {
      height: 100%;
      background-color: var(--espace-background-color-desktop);
      font-weight: normal;
    }

    .c-espace__action {
      --color-svg: var(--espace-action-color);

      color: var(--espace-action-color);
    }

    .c-espace__label {
      color: var(--espace-label-color);
      transition: color 0.25s;
    }

    .c-espace:hover .c-espace__label,
    .c-espace:focus .c-espace__label {
      color: var(--espace-label-hover-color);
      transition: color 0.25s;
    }
  }
`, lu = document.createElement("template"); lu.innerHTML = '<a class="c-espace js-container m-lib-link" href title="Accéder à la page du choix de mon espace" part="ux-espace">\n    <span class="c-espace__label"></span>\n    <span class="c-espace__action"><ux-svg icon="fleche-retour-droite" lib-size="sm"></ux-svg>Changer d\'espace</span>\n  </a>'; const cu = document.createElement("template"); cu.innerHTML = '<a class="c-espace js-container m-lib-link" href title="Accéder à la page du choix de mon espace" part="ux-espace">\n    <span class="c-espace__label"></span>\n    <ux-svg icon="chevron" lib-size="xs"></ux-svg>\n  </a>'; class du extends (At(A)) { static get customName() { return "ux-espace" } static get properties() { return { label: { type: "string" } } } static get style() { return fn + ou } template() { return this.hasAttribute("is-mobile") ? cu : lu } attributeChangedCallback(t, e, i) { super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "label" === t && this.label && (this.$.querySelector(".c-espace__label").textContent = this.label, this.container.setAttribute("aria-label", `L'espace actuel est : ${this.label}, changer d'espace.`)) } } const uu = n`
  .c-footer-item-slash {
    margin: 0 1rem;
  }

  :host([no-border]:not([no-border='false'])) .c-footer-item-slash {
    display: none;
  }

  .c-footer-item:hover ::slotted(a),
  .c-footer-item:focus ::slotted(a) {
    color: var(--color-primary) !important;
    text-decoration: underline !important;
  }
`, hu = document.createElement("template"); hu.innerHTML = '<div class="c-footer-item js-container"><slot></slot><span aria-hidden="true" class="c-footer-item-slash">/</span></div>'; class pu extends Cn { static get customName() { return "ux-footer-item" } template() { return hu } static get style() { return kn + uu } } const bu = n`
  .c-footer {
    flex-wrap: wrap;
    line-height: 1.7;
    width: auto;
    max-width: var(--t-footer-inner-width-m);
  }

  slot[name='right'] {
    display: none;
  }

  ::slotted(*) {
    margin: initial;
  }
`, mu = document.createElement("template"); mu.innerHTML = '<footer class="c-footer js-container" role="contentinfo"><slot></slot><slot name="right"></slot></footer>'; class gu extends Ln { static get customName() { return "ux-footer" } template() { return mu } static get style() { return _n + bu } } const vu = n`
  .c-footer-menu {
    --color-text: white;

    background-color: var(--color-secondary);
    color: white;
    margin-bottom: 5px;
  }
`; class fu extends Tn { static get customName() { return "ux-footer-menu" } static get style() { return An + vu } } const xu = n`
  :host(:focus-within) {
    border: solid 2px black;
    border-radius: 3px;
  }

  :focus {
    border: none;
    outline: none;
  }

  .c-footnote-link--link {
    color: inherit;
  }
`; class yu extends In { static get customName() { return "ux-footnote-link" } static get style() { return xu } } const ku = n`
  .c-footnote-linkback {
    color: var(--color-text);
  }

  .c-footnote-linkback:visited {
    color: var(--color-text);
  }

  .c-footnote-linkback:focus {
    border: solid 2px black;
    border-radius: 3px;
  }
`; class wu extends Bn { static get customName() { return "ux-footnote-linkback" } static get style() { return ku } } const Cu = n`
  .c-header {
    flex-flow: column;
    padding: 0;
    height: auto;
    box-shadow: var(--t-header-shadow);
  }

  .c-header__nav {
    box-sizing: border-box;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-header__nav {
      padding: 0 2rem 0 0;
    }
  }

  @media (min-width: ${window.uxLib.breakpoints.mobile}px) {
    .c-header__nav {
      padding: 0 2rem;
    }
  }

  ::slotted(ux-espace) {
    width: 100%;
    height: 3rem;
    min-height: 3rem; /* FF */
    background-color: var(--color-secondary-light);
  }

  .c-header-auth slot[name='center'] {
    margin-left: 0;
  }
`, _u = document.createElement("template"); _u.innerHTML = '\n<header class="c-header js-container" role="banner">\n  <slot name="top"></slot>\n  <div class="c-header__nav" part="ux-header__nav">\n    <slot name="left"></slot>\n    <slot name="center"></slot>\n    <slot name="right"></slot>\n  </div>\n</header>'; class Eu extends Nn { static get customName() { return "ux-header" } template() { return _u } static get style() { return qn + Cu } } const Lu = n`
  :host([full]:not([full='false'])) .c-login-info {
    display: block;
  }

  .c-login {
    display: flex;
    height: 100%;
    box-sizing: border-box;
    font-size: 1.2rem;
    transition: background-color 0.25s;
    text-decoration: none;
    background-color: var(--login-background-color);
    color: var(--color-secondary);
    --color-svg: var(--color-primary);
  }

  .c-login:hover,
  .c-login:focus {
    background-color: var(--color-secondary-lighter);
    color: var(--header-btn-color-focus);
    --color-svg: var(--header-btn-color-focus);
  }

  .c-login:active {
    background-color: var(--color-secondary-light);
    color: var(--header-btn-color-focus);
    --color-svg: var(--header-btn-color-focus);
  }

  .c-login-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding: 0 0.5rem;
  }

  @media (min-width: ${window.uxLib.breakpoints.mobile}px) {
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 13.7rem;
      min-width: 13.7rem;
    }

    :host([full]:not([full='false'])) .c-login-logo {
      margin-right: var(--login-icon-margin-right);
    }

    .c-login {
      height: 4rem;
      border-radius: var(--header-btn-radius);
      font-size: 1.3rem;
      padding: 0 1.2rem;
      background-color: var(--header-btn-color);
      color: var(--color-white);
      --color-svg: var(--color-white);
    }

    .c-login:hover,
    .c-login:focus {
      background-color: var(--header-btn-color-focus);
      color: var(--color-white);
      --color-svg: var(--color-white);
    }

    .c-login:active {
      background-color: var(--color-primary-active);
      color: var(--color-white);
      --color-svg: var(--color-white);
    }

    .c-login-wrap {
      flex-flow: row;
      height: 100%;
    }
  }
`; class Au extends jn { static get properties() { return { a11yLabel: { type: "string", defaultValue: "Déconnexion de votre espace" } } } static get customName() { return "ux-login" } static get style() { return Lu } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "deconnexion"), this.setAttribute("icon-size", "md") } } const Su = n`
  .c-img {
    height: initial;
  }

  .c-logo-link:focus,
  .c-logo-link:hover {
    background: none;
  }
`; class Tu extends (j(Dn)) { static get customName() { return "ux-logo" } static get properties() { return { a11yLabel: { type: "string" }, absSrc: { type: "boolean", defaultValue: !1 } } } static get style() { return Rn + Su } attributeChangedCallback(t, e, i) { this.wasRemoved || (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i && "a11y-label" === t && (this.a11yLabelEl || (this.a11yLabelEl = document.createElement("span"), this.a11yLabelEl.classList.add("visually-hidden"), this.container.appendChild(this.a11yLabelEl)), this.a11yLabelEl.innerHTML = i, this.a11yLabelEl.style.display = i ? "" : "none")) } } const $u = n`
  .c-menu-item-dropdown__trigger {
    position: relative;
    display: flex;
    align-items: center;
    min-height: var(--t-menu-item-height, auto);
    width: 100%;
    color: var(--t-menu-item-color);
    font-family: var(--font-family);
    font-size: var(--t-menu-item-font-size);
    font-weight: bold;
    text-decoration: none;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-menu-item-dropdown__trigger {
      padding: 0 1rem;
    }
  }

  @media (min-width: 1090px) {
    .c-menu-item-dropdown__trigger {
      padding: 0 2rem;
    }
  }

  slot[name='subtitle'] {
    font-size: 1.2rem;
    font-weight: normal;
  }

  .is-active slot[name='subtitle'] {
    font-weight: normal;
  }

  /*
 * concerne la gestion du dropdown et son animation
 */
  .c-menu-item-dropdown__trigger:hover,
  .c-menu-item-dropdown__trigger:focus {
    color: var(--t-menu-item-color-hover);
  }

  .c-menu-item-dropdown__trigger:active {
    color: var(--t-menu-item-color-active);
  }

  .c-menu-item-dropdown-icon {
    margin-right: 1.5rem;
    min-width: 2.5rem;
    color: var(--t-menu-item-icon-color);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-menu-item-dropdown-icon {
      margin-right: 1rem;
    }
  }

  @media (min-width: 1090px) {
    .c-menu-item-dropdown-icon {
      margin-right: 1.5rem;
    }
  }

  .c-menu-item-dropdown-arrow {
    transition: transform 0.25s;
    transform: rotate(90deg);
    color: var(--t-menu-item-dropdown-arrow-color);
    margin-left: 0.5rem;
    margin-right: 1rem;
    min-height: 1.5rem;
    min-width: 1.5rem;
  }

  :host([rank='1']) .c-menu-item-dropdown__trigger,
  :host([rank='2']) .c-menu-item-dropdown__trigger {
    font-weight: normal;
  }

  :host([rank='2']) .c-menu-item-dropdown-icon {
    color: var(--color-text);
  }

  .c-menu-item-dropdown__trigger:hover .c-menu-item-dropdown-icon,
  .c-menu-item-dropdown__trigger:focus .c-menu-item-dropdown-icon,
  .c-menu-item-dropdown__trigger:hover .c-menu-item-dropdown-arrow,
  .c-menu-item-dropdown__trigger:focus .c-menu-item-dropdown-arrow {
    color: var(--t-menu-item-icon-color-hover);
  }

  .c-menu-item-dropdown__trigger:active .c-menu-item-dropdown-icon,
  .c-menu-item-dropdown__trigger:active .c-menu-item-dropdown-arrow {
    color: var(--t-menu-item-icon-color-active);
  }

  .c-menu-item-dropdown-arrow--rotate {
    transform: rotate(270deg);
  }

  /* .c-menu-item-dropdown__trigger:focus .c-menu-item-dropdown-arrow,
.c-menu-item-dropdown__trigger:hover .c-menu-item-dropdown-arrow {
  transform: rotate(180deg);
} */

  .c-menu-item-dropdown__content {
    position: relative;
    transition: all 0.25s;
  }

  .c-menu-item-dropdown__content[aria-hidden='true'] {
    max-height: 0;
    opacity: 0;
    visibility: hidden;
  }

  /*
 * La valeur de la custom property --container-height
 * est définie en JS par la mixin UxAriaExpandedMixin
 */
  .c-menu-item-dropdown__content[aria-hidden='false'] {
    max-height: var(--container-height, 1000px);
    opacity: 1;
    visibility: visible;
    margin-left: 2.2rem;
    margin-right: 1.8rem;
    background-color: var(--t-menu-item-bg-color);
    border-radius: 1rem;
  }

  .c-mid-slot-wrap {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .c-mid-slot-wrap slot {
    display: block;
    text-align: left;
  }

  .c-menu-item-dropdown__content[aria-hidden='false']::before {
    content: '';
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    transform: translateX(-50%) rotate(45deg);
    left: 50%;
    top: -6px;
    background-color: var(--t-menu-item-bg-color);
  }

  slot[name='badge']::slotted(*) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 1.7rem;
    min-width: 1.7rem;
    margin-left: 1rem;
    padding: 0.1rem;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: #fff;
    font-size: 1.2rem;
  }

  .c-menu-item-dropdown__trigger[aria-expanded='true']::before {
    content: '';
    display: block;
    position: absolute;
    height: 70%;
    width: 2px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--t-menu-item-icon-color);
  }

  .c-menu-item-dropdown__trigger:hover::before,
  .c-menu-item-dropdown__trigger:focus::before {
    content: '';
    display: block;
    position: absolute;
    height: 70%;
    width: 2px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--t-menu-item-icon-color-hover);
  }

  /* Mets la bordure bottom sur les items du menu */
  :host(:not(:last-child):not([expanded='true']):not([no-border]))::after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: calc(100% - 4rem);
    background-color: var(--t-menu-child-border-bottom-color);
    left: 50%;
    transform: translateX(-50%);
  }
`; class Iu extends Wn { static get customName() { return "ux-menu-item-dropdown" } connectedCallback() { const t = this.$.querySelector(".c-menu-item-dropdown-arrow"); t && t.setAttribute("icon", "chevron"), this.iconSize = "lg", super.connectedCallback && super.connectedCallback() } static get style() { return $u } } const Mu = n`
  :host {
    display: block;
    position: relative;
    width: 100%;
    height: 1px;
  }

  .c-menu-item-hr {
    display: block;
    position: relative;
    margin: 0 auto;
    width: calc(100% - 2.5rem);
    height: 100%;
    background: var(--t-menu-item-hr-color);
  }

  .c-menu-item-hr.is-inverted {
    background: #979797;
  }
`; class Bu extends Gn { static get customName() { return "ux-menu-item-hr" } static get style() { return Mu } } const qu = n`
  :host {
    display: block;
    position: relative;
    width: 100%;
    height: 2rem;
  }
`; class zu extends Yn { static get customName() { return "ux-menu-item-jump" } static get style() { return qu } } const Nu = n`
  .c-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    min-height: var(--t-menu-item-height, none);
    width: 100%;
    color: var(--t-menu-item-color);
    font-size: var(--t-menu-item-font-size);
    font-weight: bold;
    text-decoration: none;
    padding: 1rem 2rem;
    box-sizing: border-box;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-menu-item {
      padding: 0 1rem;
    }
  }

  @media (min-width: 1090px) {
    .c-menu-item {
      padding: 0 2rem;
    }
  }

  .c-menu-item:hover,
  .c-menu-item:focus {
    color: var(--t-menu-item-color-hover);
  }

  .c-menu-item:active {
    color: var(--t-menu-item-color-active);
  }

  .c-menu-item.is-active {
    color: var(--t-menu-item-color-selected);
  }

  .c-menu-item.is-active::before {
    content: '';
    display: block;
    position: absolute;
    height: 70%;
    width: 2px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--t-menu-item-icon-color);
  }

  .c-menu-item:hover::before,
  .c-menu-item:focus::before {
    content: '';
    display: block;
    position: absolute;
    height: 70%;
    width: 2px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--t-menu-item-icon-color-hover);
  }

  .c-menu-item__icon {
    margin-right: 1.5rem;
    min-width: 2.5rem;
    color: var(--t-menu-item-icon-color);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-menu-item__icon {
      margin-right: 1rem;
    }
  }

  @media (min-width: 1090px) {
    .c-menu-item__icon {
      margin-right: 1.5rem;
    }
  }

  :host([rank='1']) .c-menu-item,
  :host([rank='2']) .c-menu-item {
    font-weight: normal;
  }

  :host([rank='2']) .c-menu-item__icon {
    color: var(--color-text);
  }

  .c-menu-item:hover .c-menu-item__icon,
  .c-menu-item:focus .c-menu-item__icon {
    color: var(--t-menu-item-icon-color-hover);
  }

  .c-menu-item:active .c-menu-item__icon {
    color: var(--t-menu-item-icon-color-active);
  }

  .c-menu-item.is-active .c-menu-item__icon {
    color: var(--t-menu-item-icon-color-selected);
  }

  slot[name='subtitle'] {
    font-size: 1.3rem;
    font-weight: normal;
  }

  .c-menu-item.is-active slot[name='subtitle'] {
    font-weight: normal;
  }

  :host([level='2']) .c-menu-item {
    padding-left: 2rem;
    color: var(--t-menu-item-color);
    font-weight: var(--t-menu-child-level2-font-weight);
  }

  :host([level='2']) .c-menu-item:hover,
  :host([level='2']) .c-menu-item:focus {
    color: var(--t-menu-item-color-hover);
  }

  :host([level='2']) .c-menu-item:active {
    color: var(--t-menu-item-color-active);
  }

  :host([level='2']) .c-menu-item.is-active {
    color: var(--t-menu-item-color-selected);
  }

  /* Mets la bordure bottom sur les items du menu */
  :host(:not(:last-child):not([expanded='true']):not([no-border]))::after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: calc(100% - 4rem);
    background-color: var(--t-menu-child-border-bottom-color);
    left: 50%;
    transform: translateX(-50%);
  }

  :host([level='2']:not(:last-child):not([expanded='true']):not([no-border]))::after {
    background-color: var(--t-menu-child-level2-border-bottom-color);
  }

  slot[name='badge']::slotted(*) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 1.7rem;
    min-width: 1.7rem;
    margin-left: 1rem;
    padding: 0.1rem;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: #fff;
    font-size: 1.2rem;
  }
`; class Hu extends tr { static get customName() { return "ux-menu-item" } connectedCallback() { this.iconSize = "lg", super.connectedCallback && super.connectedCallback() } static get style() { return Jn + Nu } } const ju = n`
  :host {
    --t-menu-outer-width: 100%;
    --t-menu-inner-width: 100%;
    --t-menu-height: auto;
    --t-menu-margin: 0;
    --t-menu-padding: 0;
    --t-menu-inner-padding: 0;
    --t-menu-flex-justify: flex-start;
    --t-menu-flex-direction: column;
    --t-menu-flex-align-items: unset;

    --t-menu-background: transparent;
    --t-menu-border-radius: 0;

    background-color: var(--color-white);
  }

  ::slotted(ux-menu-item),
  ::slotted(ux-menu-item-dropdown) {
    --t-menu-item-height: 6rem;

    --t-menu-item-font-size: 1.6rem;
    --t-menu-item-color: var(--color-text);
    --t-menu-item-color-hover: var(--color-primary);
    --t-menu-item-color-active: var(--color-primary-active);
    --t-menu-item-color-selected: var(--color-primary);

    --t-menu-item-icon-color: var(--color-primary);
    --t-menu-item-icon-color-hover: var(--color-primary);
    --t-menu-item-icon-color-active: var(--color-primary-active);
    --t-menu-item-icon-color-selected: var(--color-primary);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    ::slotted(*:not(:last-child):not([expanded='true']))::after {
      width: calc(100% - 2rem);
    }
  }

  @media (min-width: 1090px) {
    ::slotted(*:not(:last-child):not([expanded='true']))::after {
      width: calc(100% - 4rem);
    }
  }
`; class Ru extends sr { static get customName() { return "ux-menu" } static get style() { return er + ju } } class Ou extends un { static get customName() { return "ux-menu-icon" } static get style() { return cn } } const Pu = n`
  .c-menu-icon-title:hover,
  .c-menu-icon-title:focus,
  .c-menu-icon-title:hover ux-svg,
  .c-menu-icon-title:focus ux-svg {
    color: var(--color-primary-hover);
  }

  .c-menu-icon-title:active,
  .c-menu-icon-title:active ux-svg {
    color: var(--color-primary-active);
  }

  .c-menu-icon-title:hover,
  .c-menu-icon-title:focus,
  .c-menu-icon-title:active {
    text-decoration: underline;
  }
`; class Du extends or { static get customName() { return "ux-menu-icon-title" } static get style() { return rr + Pu } } class Vu extends dr { static get customName() { return "ux-menu-sociaux-item" } static get style() { return lr } } class Uu extends pr { static get customName() { return "ux-menu-sociaux" } static get style() { return ur } } class Fu extends vr { static get customName() { return "ux-messagerie" } static get style() { return gr } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "conseiller") } } class Wu extends wr { static get customName() { return "ux-pager-item" } static get style() { return fr } } class Ku extends Er { static get customName() { return "ux-pager" } static get style() { return Cr } } const Gu = n`
  :host {
    --size-svg: var(--icon-size-sm);
    --size-btn: var(--spacing-lg);
    --gap: var(--spacing-sm);

    margin: 3rem 0 2rem;
  }

  .c-pager {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-pager > *:not(:last-child):not(.visually-hidden) {
    margin-right: var(--gap);
  }

  .c-pager--btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size-btn);
    height: var(--size-btn);
    border-radius: 50%;
    background-color: var(--color-white);
    --color-svg: var(--color-primary);
  }

  .c-pager--btn:hover,
  .c-pager--btn:focus {
    background-color: var(--color-primary-contrast);
    --color-svg: var(--color-white);
  }

  .c-pager--btn:active {
    background-color: var(--color-primary-darker);
    --color-svg: var(--color-white);
  }

  .c-pager--input {
    font-family: var(--font-family);
    font-size: var(--text-font-size-md);
    text-align: center;
    box-sizing: border-box;
    height: 4rem;
    width: 0;
    min-width: 4rem;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    color: var(--color-secondary);
    box-shadow: 0 0 0 1px var(--color-input-border);
    background-color: var(--color-white);
    appearance: textfield;
  }

  /** Suppression du focus natif **/
  .c-pager--input:focus {
    outline: none;
  }

  .c-pager--input:hover,
  .c-pager--input:focus-within {
    box-shadow: 0 0 0 2px var(--color-input-hover);
  }

  .c-pager--input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /** Permet de laisser la place des boutons quand ils ne sont pas affichés
https://developer.mozilla.org/fr/docs/Web/CSS/Attribute_selectors **/
  [class~='c-pager--label']:first-child + .c-pager--input {
    margin-left: calc(var(--size-btn) + var(--gap));
  }

  [class~='c-pager--total']:last-child {
    margin-right: calc(var(--size-btn) + var(--gap));
  }
`; class Xu extends Ar { static get customName() { return "ux-a11y-pager" } static get style() { return Gu } connectedCallback() { this.pageIcon = "chevron", super.connectedCallback && super.connectedCallback() } } class Yu extends Ir { static get customName() { return "ux-parametrage" } static get style() { return $r } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "engrenages") } } const Ju = n`
  .c-processus {
    display: flex;
    flex-flow: column nowrap;
  }

  ::slotted(*:not(:last-of-type)) {
    margin-bottom: var(--spacing-lg);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-processus {
      flex-flow: row nowrap;
    }

    ::slotted(*:not(:last-of-type)) {
      margin-bottom: 0;
    }
  }

  ::slotted(ux-processus-item) {
    flex: 1 0 0;
  }
`; class Zu extends Br { static get customName() { return "ux-processus" } static get style() { return Ju } } const Qu = n`
  .c-processus-item {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
  }

  .c-processus-item__composite-text {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    text-align: start;
    padding-top: 0.6rem;
  }

  .c-processus-item__composite-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    margin-left: 0.6rem;
    margin-right: 3rem;
    position: relative;
    flex-shrink: 0;
  }

  .c-processus-item__number {
    font-weight: bold;
    font-size: 4.8rem;
    color: var(--color-primary);
    position: absolute;
    top: -0.1rem;
    left: 0;
    z-index: 2;
  }

  .c-processus-item__icon {
    --size-svg: 4.8rem;

    position: absolute;
    right: 0;
    color: var(--color-primary);
    z-index: 1;
  }

  .c-processus-item__label {
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
  }

  .c-processus-item__description {
    line-height: 1.2;
  }

  :host([model='final']) .c-processus-item__composite-icon {
    border-radius: 6rem;
    background-color: var(--color-primary);
    margin-right: 3.6rem;
  }

  :host([model='final']) .c-processus-item__composite-text {
    padding-top: 0;
  }

  :host([model='final']) .c-processus-item__number {
    display: none;
  }

  :host([model='final']) .c-processus-item__icon {
    color: white;
    position: relative;
    --size-svg: 4.4rem;
  }

  :host(*:not(:last-child)) .c-processus-item__progress {
    position: absolute;
    top: 7rem;
    left: 3.5rem;
    border-left: 1px solid var(--color-secondary);
    height: calc(100% - 4.2rem);
    width: 0;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-processus-item {
      flex-flow: column nowrap;
      align-items: center;
      padding: 0 var(--spacing-sm);
    }

    :host(:last-child) .c-processus-item {
      padding-right: 0;
    }

    :host(:first-child) .c-processus-item {
      padding-left: 0;
    }

    :host(*:not(:last-child)) .c-processus-item__progress {
      position: absolute;
      top: 3rem;
      left: calc(50% + 4rem);
      width: calc(100% - 8rem);
      border-top: 1px solid var(--color-secondary);
      border-left: 0;
      height: 0;
    }

    .c-processus-item__composite-text {
      align-items: center;
      text-align: center;
      padding: 0;
    }

    .c-processus-item__composite-icon {
      margin-bottom: var(--spacing-md);
      margin-right: 0;
      margin-left: 0;
    }

    :host([model='final']) .c-processus-item__composite-icon {
      margin-right: 0;
    }
  }
`; class th extends zr { static get customName() { return "ux-processus-item" } static get style() { return Qu } } const eh = n`
  :host([is-mobile]) {
    width: 100%;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.8rem;
  }

  :host(:not([is-mobile])) {
    width: 29.1rem;
    min-width: 29.1rem;
    height: 4rem !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-profil {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-right: var(--header-profil-border-padding-right);
    border: solid 1px var(--header-profil-border-color);
    border-radius: var(--header-profil-border-radius);
    color: var(--header-profil-color);
    background-color: var(--color-white);
    text-decoration: none;
  }

  .c-profil:hover,
  .c-profil:focus,
  .c-profil:active {
    border: solid 1px var(--color-secondary-hover);
  }

  .c-profil__img {
    width: 2.4rem;
    min-width: 2.4rem;
    height: 2.4rem;
    margin: 0 0.8rem;
    color: var(--color-primary);
  }

  .c-profil__content {
    display: flex;
    flex-grow: 1;
    flex-flow: column nowrap;
  }

  .c-profil__name {
    font-size: 1.4rem;
    font-weight: bold;
    max-width: 22rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .c-profil__connexion {
    font-size: 1.3rem;
    color: var(--header-profil-connexion-color);
  }

  .c-profil-arrow {
    color: var(--color-primary);
    margin: 0 0.7rem;
  }
`; class ih extends jr { static get customName() { return "ux-profil" } static get style() { return eh } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setIco() } setIco() { const t = this.$.querySelector(".c-profil__img"); t && t.setAttribute("icon", "personne"); const e = this.$.querySelector(".c-profil-arrow"); e && e.setAttribute("icon", "chevron") } } const sh = n`
  .c-profil-btn--text {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--color-text);
    font-family: var(--font-family);
  }
`, ah = document.createElement("template"); ah.innerHTML = '<button class="js-container m-btn-no-style" part="ux-profil-btn">\n<ux-svg icon="personne-cercle" part="ux-profil-btn__icon"></ux-svg>\n  <span class="c-profil-btn--text" part="ux-profil-btn__text">Profil</span>\n</button>'; class nh extends Pr { static get customName() { return "ux-profil-btn" } static get style() { return Rr + sh } template() { return ah } } const rh = n`
  .c-scrollback {
    --color-svg: var(--color-primary);

    box-shadow: var(--box-shadow-primary);
    background-color: var(--color-white);
    width: 48px;
    height: 48px;
    line-height: 0;
    border: none;
  }
`; class oh extends Ur { static get customName() { return "ux-scrollback" } static get style() { return Dr + rh } connectedCallback() { super.connectedCallback && super.connectedCallback(), this.setAttribute("icon", "chevron"), this.setAttribute("icon-size", "xs") } } const lh = n`
  .c-shortcut-nav {
    position: fixed;
    display: block;
    width: 100%;
    height: 60px;
    bottom: -60px;
    left: 0;
    right: auto;
    box-shadow: 0 -2px 6px -2px rgba(0, 0, 0, 0.5);
    z-index: 20;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-shortcut-nav {
      display: none;
    }
  }

  /* Affiche le barre en bas en portable quand
   l'utilisateur a commencer à faire un défilement */
  @media (max-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-shortcut-nav.is-open-mobile {
      transition: bottom 0.4s;
      bottom: 0;
    }
  }

  .c-shortcut {
    position: relative;
    display: flex;
    flex-direction: row;
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    z-index: 5;
  }

  .c-shortcut-a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }

  .c-shortcut-label {
    font-size: 12px;
    font-family: 'Maven Pro', sans-serif;
    color: var(--color-text);
  }

  .c-shortcut-icon {
    font-size: 25px;
    margin-right: 0;
    color: var(--color-text);
  }
`; class ch extends Wr { static get customName() { return "ux-shortcut" } static get style() { return lh } } class dh extends Xr { static get customName() { return "ux-sidebar" } static get style() { return Kr } } class uh extends Zr { static get customName() { return "ux-skip-nav-item" } static get style() { return Yr } } class hh extends eo { static get customName() { return "ux-skip-nav" } static get style() { return Qr } } const ph = n`
  :host {
    display: block;
  }

  .c-steps {
    position: relative;
    padding: 0;
  }

  .c-steps__wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    z-index: 2;
  }

  ::slotted(ux-steps-item) {
    flex: 1 0 0;
  }

  .c-steps__progress {
    position: absolute;
    max-width: 100%;
    top: 37%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .c-steps__progress::before {
    content: '';
    position: absolute;
    border-top: 1px solid var(--color-primary);
    width: var(--progress-width);
    z-index: 1;
  }

  .c-steps__progress::after {
    content: '';
    position: absolute;
    border-top: 1px solid var(--color-secondary);
    width: 100%;
  }

  @media (max-width: 1090px) {
    .c-steps {
      margin-left: -10px;
      margin-right: -10px;
    }
  }
`; class bh extends so { static get customName() { return "ux-steps" } static get style() { return ph } constructor() { super(), this._updateProgress = this._updateProgress.bind(this) } connectedCallback() { super.connectedCallback && super.connectedCallback(), this._updateProgress(), this.addEventListener("steps-item", this._updateProgress) } disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("steps-item", this._updateProgress) } _updateProgress() { const t = this.querySelectorAll("ux-steps-item"), e = (this.querySelectorAll('ux-steps-item[model="complete"], ux-steps-item[model="ongoing"]').length - 1) / (t.length - 1) * 100; this.progressBarWrapper.style.setProperty("--progress-width", `${parseInt(e)}%`) } } const mh = n`
  .c-steps-item {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: var(--text-font-size-sm);
  }

  .c-steps-item__number {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--steps-item-size-mobile);
    width: var(--steps-item-size-mobile);
    margin: 0.4rem 0;
    line-height: 0;
    font-weight: bold;
    color: var(--color-white);
    border-radius: var(--border-radius-circle);

    /* set the z-index for this item to be over the progress bar in bux-steps context */
    z-index: 2;
  }

  :host(:not([model='upcoming'])) .c-steps-item__number {
    color: var(--color-white);
  }

  :host([model='upcoming']) .c-steps-item__number {
    color: var(--steps-item-upcoming-number-color);
    background-color: var(--steps-item-upcoming-background-color);
  }

  :host([model='complete']) .c-steps-item__number,
  :host([model='ongoing']) .c-steps-item__number {
    background-color: var(--color-primary);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-steps-item__number {
      height: var(--steps-item-size-desktop);
      width: var(--steps-item-size-desktop);
      margin: var(--spacing-xxs) 0;
    }
  }

  .c-steps-item__label {
    font-weight: 700;
  }

  /* Anneau d'accentuation de l'étape en cours */
  :host([model='ongoing']) .c-steps-item__number {
    height: calc(var(--steps-item-size-mobile) + 0.8rem);
    width: calc(var(--steps-item-size-mobile) + 0.8rem);
    margin: 0;
  }

  :host([model='ongoing']) .c-steps-item__number::after {
    content: '';
    height: var(--steps-item-size-mobile);
    width: var(--steps-item-size-mobile);
    position: absolute;
    top: 1px;
    left: 1px;
    border: var(--color-white) solid 0.3rem;
    border-radius: var(--border-radius-circle);
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    :host([model='ongoing']) .c-steps-item__number {
      height: calc(var(--steps-item-size-desktop) + 1rem);
      width: calc(var(--steps-item-size-desktop) + 1rem);
    }

    :host([model='ongoing']) .c-steps-item__number::after {
      height: var(--steps-item-size-desktop);
      width: var(--steps-item-size-desktop);
      border: var(--color-white) solid 0.4rem;
    }
  }
`; class gh extends no { static get customName() { return "ux-steps-item" } static get properties() { return { model: { type: "string" } } } static get style() { return mh } attributeChangedCallback(t, e, i) { e !== i && (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), "model" === t && this.dispatchEvent(new Event("steps-item", { bubbles: !0 }))) } _setComplete() { this._setIcon(), this._setAriaLabel("terminée") } _setIcon() { this._slots.number.innerHTML = '<ux-svg icon="coche" lib-size="md"></ux-svg>' } } const vh = n`
  .c-sticky {
    background: var(--color-secondary-lighter);
  }

  .c-sticky--scrolling {
    box-shadow: 0 2px #0000001a;
  }

  .c-sticky__movable {
    padding: var(--spacing-sm) 0;
  }

  @media (min-width: ${window.uxLib.breakpoints.smobile}px) {
    .c-sticky__movable {
      padding: var(--spacing-md) 0;
    }
  }
`; class fh extends lo { static get customName() { return "ux-sticky" } static get style() { return ro + vh } } class xh extends ho { static get customName() { return "ux-flex" } static get style() { return co } } const yh = n`
  :host {
    --interspace-padding: var(--spacing-xs);
  }

  .c-grid {
    align-items: stretch;
  }

  .c-grid ::slotted(ux-card) {
    display: flex;
  }
`; class kh extends vs { static get customName() { return "ux-grid" } static get style() { return ms + yh } } const wh = n`
  .c-key-value--value {
    font-weight: bold;
  }

  :host([line]:not([line='false'])) .c-key-value--value {
    text-align: right;
    min-width: 5rem;
  }

  @media (min-width: 770px) {
    :host([line-d]:not([line-d='false'])) .c-key-value--value {
      text-align: right;
      min-width: 5rem;
    }
  }
`; class Ch extends mo { static get customName() { return "ux-key-value" } static get style() { return po + wh } } class _h extends fo { static get customName() { return "ux-main" } static get style() { return go } } class Eh extends ko { static get customName() { return "ux-row-cell" } static get style() { return xo } } const Lh = n`
  .c-row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    border-radius: var(--tile-border-radius);
    border: 1px solid #ccc;
    padding: 1rem;
    background-color: #fff;
  }

  .c-row ::slotted(*:last-child) {
    flex-grow: 1;
    align-self: center;
  }
`; class Ah extends Co { static get customName() { return "ux-row" } static get style() { return Lh } } class Sh extends Eo { static get customName() { return "ux-section" } } const Th = n`
  /* .c-amount--negative {
  color: var(--color-error) !important;
} */

  .c-amount--positive {
    color: var(--color-positive) !important;
    font-weight: bold;
  }

  .c-amount--background,
  .c-amount--background-light {
    padding: 5px 10px;
    border-radius: 3px;
  }
`; class $h extends Io { static get customName() { return "ux-amount" } static get style() { return Th } static get properties() { return { autocolor: { type: "boolean", defaultValue: !1 } } } getCurrencyDisplay() { return "EUR" === this.currency ? "symbol" : "code" } } const Ih = n`
  .c-date--error {
    color: var(--color-error);
  }
`; class Mh extends zo { static get customName() { return "ux-date" } static get style() { return Ih } static get properties() { return { formatIn: { type: "string", defaultValue: "dd/mm/yyyy" } } } } const Bh = n`
  .c-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    font-weight: var(--heading-font-weight);
  }

  .c-heading__title--h1 {
    font-size: var(--heading-font-size-1);
  }

  .c-heading__title--h2 {
    font-size: var(--heading-font-size-2);
  }

  .c-heading__title--h3 {
    font-size: var(--heading-font-size-3);
  }

  .c-heading__title--h4 {
    font-size: var(--heading-font-size-4);
  }

  /* MARGIN MANAGEMENT */
  .c-heading__title--h1,
  .c-heading__title--h2,
  .c-heading__title--h3,
  .c-heading__title--h4 {
    margin: 0;
  }

  :host([tag='h1']),
  :host([tag='h2']) {
    margin: var(--spacing-md) 0;
  }

  :host([tag='h3']),
  :host([tag='h4']) {
    margin: var(--spacing-sm) 0;
  }

  @media (max-width: 770px) {
    :host([column-m]:not([column-m='false'])) .c-heading {
      flex-flow: column;
    }
  }

  @media (min-width: 770px) {
    .c-heading__title--h2 {
      text-align: left;
    }
  }
`; class qh extends Ro { static get customName() { return "ux-heading" } static get style() { return Ho + Bh } } const zh = n`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  ::slotted(a) {
    color: var(--color-a-link) !important;
    text-decoration: underline !important;
  }

  ::slotted(a:hover) {
    color: var(--color-a-link-hover) !important;
    text-decoration: none !important;
  }

  ::slotted(a:focus) {
    color: var(--color-a-link-focus) !important;
    text-decoration: none !important;
  }

  .c-text {
    position: relative;
    background-color: inherit;
  }

  .c-text--background {
    border-radius: var(--border-radius-md);
    padding: var(--spacing-sm);
  }
`; class Nh extends Do { static get customName() { return "ux-text" } static get style() { return Oo + zh } } const Hh = n`
  :host {
    display: block;
    position: relative;
    width: 350px;
    color: #fff;
  }

  .c-virtualis-name {
    position: absolute;
    left: 16px;
    bottom: 6%;
    text-transform: uppercase;
    font-size: 18px;
  }

  .c-virtualis-user {
    position: absolute;
    left: 16px;
    bottom: 15%;
    font-size: 18px;
  }

  .c-virtualis-card {
    position: absolute;
    top: 37%;
    left: 8px;
    font-family: ocraext, monospace;
    font-size: 29px;
  }

  .c-virtualis-wrap {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    top: 55%;
    font-size: 18px;
  }

  .c-virtualis-wrap > div {
    display: flex;
    flex-flow: column;
  }

  .c-virtualis-brand {
    position: absolute;
    width: 19%;
    bottom: 7%;
    right: 5%;
  }

  .c-virtualis-img {
    display: block;
    width: 100%;
  }

  @media (max-width: 400px) {
    :host {
      width: 300px;
    }

    .c-virtualis-name {
      font-size: 18px;
    }

    .c-virtualis-user {
      font-size: 16px;
      bottom: 10%;
    }

    .c-virtualis-wrap {
      font-size: 16px;
    }

    .c-virtualis-card {
      font-size: 24px;
    }
  }

  /* for 300% zoom */
  @media (max-width: 320px) {
    .c-virtualis-card {
      font-size: 20px;
    }
  }
`, jh = i.p + "./assets/images/card.jpg", Rh = i.p + "./assets/images/mastercard.png", Oh = i.p + "./assets/fonts/ocraext.woff", Ph = i.p + "./assets/fonts/ocraext.woff2", Dh = document.createElement("template"); Dh.innerHTML = `\n  <span class="visually-hidden">Début de l'image de la carte virtuelle</span>\n  <div class="c-virtualis-user"></div>\n  <div class="c-virtualis-name"></div>\n  <div class="c-virtualis-card"></div>\n\n  <div class="c-virtualis-wrap">\n    <div>\n      <span>Montant</span>\n      <ux-amount class="c-virtualis-amount"></ux-amount>\n    </div>\n    <div>\n      <span aria-hidden="true">Validité</span>\n      <span class="visually-hidden">Validité de la carte virtuelle : </span>\n      <ux-date class="c-virtualis-validity"></ux-date>\n    </div>\n    <div>\n      <span aria-hidden="true">Cryptogramme</span>\n      <span class="visually-hidden">Cryptogramme de la carte virtuelle : </span>\n      <span class="c-virtualis-crypto"></span>\n    </div>\n  </div>\n  <img class="c-virtualis-brand" src="${Rh}" alt="mastercard"></img>\n  <img a11y-hidden class="c-virtualis-img" src="${jh}"></img>\n<span class="visually-hidden">Fin de l'image de la carte virtuelle</span>\n`; class Vh extends (j(A)) { static get customName() { return "ux-virtualis" } static get properties() { return { name: { type: "string" }, user: { type: "string" }, card: { type: "string" }, amount: { type: "number" }, validity: { type: "string" }, crypto: { type: "string" }, brandSrc: { type: "string" }, brandAlt: { type: "string" }, cardSrc: { type: "string" } } } template() { return Dh } static get style() { return Hh } connectedCallback() { super.connectedCallback && super.connectedCallback(); const t = document.createElement("style"); t.innerHTML = `@font-face {\n      font-family: 'ocraext';\n      font-style: normal;\n      font-weight: 400;\n      src: local('ocraext'), url('${this.uxLibUrl}/${Ph}') format('woff2'),\n      url('${this.uxLibUrl}/${Oh}') format('woff');\n    }`, document.getElementsByTagName("head")[0].appendChild(t) } attributeChangedCallback(t, e, i) { if (super.attributeChangedCallback && super.attributeChangedCallback(t, e, i), e !== i) switch (t) { case "name": this.name ? this.$.querySelector(".c-virtualis-name").innerHTML = '<span class="visually-hidden">Type de carte virtuelle : </span>' + this.name : this.$.querySelector(".c-virtualis-name").innerHTML = ""; break; case "user": this.user ? this.$.querySelector(".c-virtualis-user").innerHTML = '<span class="visually-hidden">Titulaire de la carte virtuelle : </span>' + this.user : this.$.querySelector(".c-virtualis-user").innerHTML = ""; break; case "validity": this.validity && (this.$.querySelector(".c-virtualis-validity").formatIn = "mm/yy", this.$.querySelector(".c-virtualis-validity").value = this.validity); break; case "crypto": this.crypto && (this.$.querySelector(".c-virtualis-crypto").innerHTML = this.crypto); break; case "amount": this.amount && (this.$.querySelector(".c-virtualis-amount").value = this.amount); break; case "card": const e = this.card.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim().substring(0, 19); this.$.querySelector(`.c-virtualis-${t}`).innerHTML = '<span class="visually-hidden">Numéro de la carte virtuelle : </span>' + e; break; case "brand-src": this.$.querySelector(".c-virtualis-brand").setAttribute("src", this.brandSrc); break; case "brand-alt": this.$.querySelector(".c-virtualis-brand").setAttribute("alt", this.brandAlt); break; case "card-src": this.$.querySelector(".c-virtualis-img").setAttribute("src", this.cardSrc) } } } window.uxEfs = "cmb", e(i(206)), e(i(7493)), e(i(2069)), e(i(6682)), e(i(1664)), e(i(7213)), e(i(5725)), e(i(9253)); for (const e in t) "ux-svg" !== t[e].getCustomName() && t[e].define(); !function (t, e) { if (!document.getElementById(e)) { const i = document.createElement("style"); i.setAttribute("id", e), i.innerHTML = t, document.head.appendChild(i) } }(Vo, "margin-style"), window.uxLib.infos = { name: "@libui/ux-library cmb", version: "5.64.0" }, window.dispatchEvent(new CustomEvent("uxLibReady", { bubbles: !0 }))
  })(), s
})()));