//Fri Apr 04 2025 09:10:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("兰精灵");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a6) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a8) {
      {
        return typeof a8;
      }
    } : function (a8) {
      {
        return a8 && "function" == typeof Symbol && a8.constructor === Symbol && a8 !== Symbol.prototype ? "symbol" : typeof a8;
      }
    };
    return b(a6);
  }
  function c(a6, a7) {
    {
      var a9 = "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
      if (!a9) {
        {
          if (Array.isArray(a6) || (a9 = d(a6)) || a7 && a6 && "number" == typeof a6.length) {
            {
              a9 && (a6 = a9);
              var aa = 0;
              var ab = function () {};
              return {
                s: ab,
                n: function () {
                  {
                    var ai = {
                      done: true
                    };
                    return aa >= a6.length ? ai : {
                      done: false,
                      value: a6[aa++]
                    };
                  }
                },
                e: function (ah) {
                  {
                    throw ah;
                  }
                },
                f: ab
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ac;
      var ad = true;
      var ae = false;
      return {
        s: function () {
          {
            a9 = a9.call(a6);
          }
        },
        n: function () {
          {
            var ah = a9.next();
            ad = ah.done;
            return ah;
          }
        },
        e: function (ah) {
          {
            ae = true;
            ac = ah;
          }
        },
        f: function () {
          {
            try {
              {
                ad || null == a9.return || a9.return();
              }
            } finally {
              {
                if (ae) {
                  throw ac;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a6, a7) {
    {
      if (a6) {
        {
          if ("string" == typeof a6) {
            return f(a6, a7);
          }
          var a8 = {}.toString.call(a6).slice(8, -1);
          "Object" === a8 && a6.constructor && (a8 = a6.constructor.name);
          return "Map" === a8 || "Set" === a8 ? Array.from(a6) : "Arguments" === a8 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a8) ? f(a6, a7) : undefined;
        }
      }
    }
  }
  function f(a6, a7) {
    {
      (null == a7 || a7 > a6.length) && (a7 = a6.length);
      for (var a9 = 0, aa = Array(a7); a9 < a7; a9++) {
        aa[a9] = a6[a9];
      }
      return aa;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return a8;
      }
    };
    var a7;
    var a8 = {
      wrap: ah
    };
    var a9 = Object.prototype;
    var aa = a9.hasOwnProperty;
    var ab = Object.defineProperty || function (aD, aE, aF) {
      {
        aD[aE] = aF.value;
      }
    };
    var ac = "function" == typeof Symbol ? Symbol : {};
    var ad = ac.iterator || "@@iterator";
    var ae = ac.asyncIterator || "@@asyncIterator";
    var af = ac.toStringTag || "@@toStringTag";
    function ag(aD, aE, aF) {
      {
        var aG = {
          value: aF,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aD, aE, aG);
        return aD[aE];
      }
    }
    try {
      {
        ag({}, "");
      }
    } catch (aE) {
      {
        ag = function (aG, aH, aI) {
          {
            return aG[aH] = aI;
          }
        };
      }
    }
    function ah(aG, aH, aI, aJ) {
      {
        var aK = aH && aH.prototype instanceof ao ? aH : ao;
        var aL = Object.create(aK.prototype);
        var aM = new aB(aJ || []);
        ab(aL, "_invoke", {
          value: ax(aG, aI, aM)
        });
        return aL;
      }
    }
    function ai(aG, aH, aI) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aG.call(aH, aI)
            };
          }
        } catch (aM) {
          {
            var aK = {
              type: "throw",
              arg: aM
            };
            return aK;
          }
        }
      }
    }
    var aj = "suspendedStart";
    var ak = "suspendedYield";
    var al = "executing";
    var am = "completed";
    var an = {};
    function ao() {}
    function ap() {}
    function aq() {}
    var ar = {};
    ag(ar, ad, function () {
      return this;
    });
    var as = Object.getPrototypeOf;
    var at = as && as(as(aC([])));
    at && at !== a9 && aa.call(at, ad) && (ar = at);
    aq.prototype = ao.prototype = Object.create(ar);
    var au = aq.prototype;
    function av(aG) {
      {
        ["next", "throw", "return"].forEach(function (aJ) {
          {
            ag(aG, aJ, function (aM) {
              return this._invoke(aJ, aM);
            });
          }
        });
      }
    }
    function aw(aG, aH) {
      {
        function aK(aL, aM, aN, aO) {
          {
            var aQ = ai(aG[aL], aG, aM);
            if ("throw" !== aQ.type) {
              {
                var aR = aQ.arg;
                var aS = aR.value;
                return aS && "object" == b(aS) && aa.call(aS, "__await") ? aH.resolve(aS.__await).then(function (aV) {
                  {
                    aK("next", aV, aN, aO);
                  }
                }, function (aV) {
                  {
                    aK("throw", aV, aN, aO);
                  }
                }) : aH.resolve(aS).then(function (aV) {
                  {
                    aR.value = aV;
                    aN(aR);
                  }
                }, function (aV) {
                  {
                    return aK("throw", aV, aN, aO);
                  }
                });
              }
            }
            aO(aQ.arg);
          }
        }
        var aJ;
        ab(this, "_invoke", {
          value: function (aL, aM) {
            {
              function aO() {
                {
                  return new aH(function (aR, aS) {
                    aK(aL, aM, aR, aS);
                  });
                }
              }
              return aJ = aJ ? aJ.then(aO, aO) : aO();
            }
          }
        });
      }
    }
    function ax(aG, aH, aI) {
      {
        var aK = aj;
        return function (aM, aN) {
          {
            if (aK === al) {
              throw Error("Generator is already running");
            }
            if (aK === am) {
              {
                if ("throw" === aM) {
                  throw aN;
                }
                var aP = {
                  value: a7,
                  done: true
                };
                return aP;
              }
            }
            for (aI.method = aM, aI.arg = aN;;) {
              {
                var aQ = aI.delegate;
                if (aQ) {
                  {
                    var aR = ay(aQ, aI);
                    if (aR) {
                      {
                        if (aR === an) {
                          continue;
                        }
                        return aR;
                      }
                    }
                  }
                }
                if ("next" === aI.method) {
                  aI.sent = aI._sent = aI.arg;
                } else {
                  if ("throw" === aI.method) {
                    {
                      if (aK === aj) {
                        throw aK = am, aI.arg;
                      }
                      aI.dispatchException(aI.arg);
                    }
                  } else {
                    "return" === aI.method && aI.abrupt("return", aI.arg);
                  }
                }
                aK = al;
                var aS = ai(aG, aH, aI);
                if ("normal" === aS.type) {
                  {
                    if (aK = aI.done ? am : ak, aS.arg === an) {
                      continue;
                    }
                    var aT = {
                      value: aS.arg,
                      done: aI.done
                    };
                    return aT;
                  }
                }
                "throw" === aS.type && (aK = am, aI.method = "throw", aI.arg = aS.arg);
              }
            }
          }
        };
      }
    }
    function ay(aG, aH) {
      {
        var aK = aH.method;
        var aL = aG.iterator[aK];
        if (aL === a7) {
          aH.delegate = null;
          "throw" === aK && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aK && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aK + "' method"));
          return an;
        }
        var aN = ai(aL, aG.iterator, aH.arg);
        if ("throw" === aN.type) {
          aH.method = "throw";
          aH.arg = aN.arg;
          aH.delegate = null;
          return an;
        }
        var aM = aN.arg;
        return aM ? aM.done ? (aH[aG.resultName] = aM.value, aH.next = aG.nextLoc, "return" !== aH.method && (aH.method = "next", aH.arg = a7), aH.delegate = null, an) : aM : (aH.method = "throw", aH.arg = new TypeError("iterator result is not an object"), aH.delegate = null, an);
      }
    }
    function az(aG) {
      {
        var aI = {
          tryLoc: aG[0]
        };
        1 in aG && (aI.catchLoc = aG[1]);
        2 in aG && (aI.finallyLoc = aG[2], aI.afterLoc = aG[3]);
        this.tryEntries.push(aI);
      }
    }
    function aA(aG) {
      {
        var aH = aG.completion || {};
        aH.type = "normal";
        delete aH.arg;
        aG.completion = aH;
      }
    }
    function aB(aG) {
      {
        var aH = {
          tryLoc: "root"
        };
        this.tryEntries = [aH];
        aG.forEach(az, this);
        this.reset(true);
      }
    }
    function aC(aG) {
      {
        if (aG || "" === aG) {
          {
            var aI = aG[ad];
            if (aI) {
              return aI.call(aG);
            }
            if ("function" == typeof aG.next) {
              return aG;
            }
            if (!isNaN(aG.length)) {
              {
                var aJ = -1;
                var aK = function aL() {
                  {
                    for (; ++aJ < aG.length;) {
                      if (aa.call(aG, aJ)) {
                        aL.value = aG[aJ];
                        aL.done = false;
                        return aL;
                      }
                    }
                    aL.value = a7;
                    aL.done = true;
                    return aL;
                  }
                };
                return aK.next = aK;
              }
            }
          }
        }
        throw new TypeError(b(aG) + " is not iterable");
      }
    }
    ap.prototype = aq;
    ab(au, "constructor", {
      value: aq,
      configurable: true
    });
    ab(aq, "constructor", {
      value: ap,
      configurable: true
    });
    ap.displayName = ag(aq, af, "GeneratorFunction");
    a8.isGeneratorFunction = function (aG) {
      {
        var aJ = "function" == typeof aG && aG.constructor;
        return !!aJ && (aJ === ap || "GeneratorFunction" === (aJ.displayName || aJ.name));
      }
    };
    a8.mark = function (aG) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aG, aq) : (aG.__proto__ = aq, ag(aG, af, "GeneratorFunction"));
        aG.prototype = Object.create(au);
        return aG;
      }
    };
    a8.awrap = function (aG) {
      {
        var aI = {
          __await: aG
        };
        return aI;
      }
    };
    av(aw.prototype);
    ag(aw.prototype, ae, function () {
      return this;
    });
    a8.AsyncIterator = aw;
    a8.async = function (aG, aH, aI, aJ, aK) {
      {
        undefined === aK && (aK = Promise);
        var aM = new aw(ah(aG, aH, aI, aJ), aK);
        return a8.isGeneratorFunction(aH) ? aM : aM.next().then(function (aN) {
          {
            return aN.done ? aN.value : aM.next();
          }
        });
      }
    };
    av(au);
    ag(au, af, "Generator");
    ag(au, ad, function () {
      {
        return this;
      }
    });
    ag(au, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    a8.keys = function (aG) {
      {
        var aI = Object(aG);
        var aJ = [];
        for (var aK in aI) aJ.push(aK);
        aJ.reverse();
        return function aL() {
          {
            for (; aJ.length;) {
              {
                var aM = aJ.pop();
                if (aM in aI) {
                  aL.value = aM;
                  aL.done = false;
                  return aL;
                }
              }
            }
            aL.done = true;
            return aL;
          }
        };
      }
    };
    a8.values = aC;
    aB.prototype = {
      constructor: aB,
      reset: function (aG) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a7, this.done = false, this.delegate = null, this.method = "next", this.arg = a7, this.tryEntries.forEach(aA), !aG) {
            for (var aH in this) "t" === aH.charAt(0) && aa.call(this, aH) && !isNaN(+aH.slice(1)) && (this[aH] = a7);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aG = this.tryEntries[0].completion;
          if ("throw" === aG.type) {
            throw aG.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aG) {
        {
          if (this.done) {
            throw aG;
          }
          var aI = this;
          function aO(aP, aQ) {
            {
              aL.type = "throw";
              aL.arg = aG;
              aI.next = aP;
              aQ && (aI.method = "next", aI.arg = a7);
              return !!aQ;
            }
          }
          for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
            {
              var aK = this.tryEntries[aJ];
              var aL = aK.completion;
              if ("root" === aK.tryLoc) {
                return aO("end");
              }
              if (aK.tryLoc <= this.prev) {
                {
                  var aM = aa.call(aK, "catchLoc");
                  var aN = aa.call(aK, "finallyLoc");
                  if (aM && aN) {
                    {
                      if (this.prev < aK.catchLoc) {
                        return aO(aK.catchLoc, true);
                      }
                      if (this.prev < aK.finallyLoc) {
                        return aO(aK.finallyLoc);
                      }
                    }
                  } else {
                    if (aM) {
                      {
                        if (this.prev < aK.catchLoc) {
                          return aO(aK.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aN) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aK.finallyLoc) {
                          return aO(aK.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aG, aH) {
        {
          for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
            {
              var aL = this.tryEntries[aK];
              if (aL.tryLoc <= this.prev && aa.call(aL, "finallyLoc") && this.prev < aL.finallyLoc) {
                {
                  var aM = aL;
                  break;
                }
              }
            }
          }
          aM && ("break" === aG || "continue" === aG) && aM.tryLoc <= aH && aH <= aM.finallyLoc && (aM = null);
          var aN = aM ? aM.completion : {};
          aN.type = aG;
          aN.arg = aH;
          return aM ? (this.method = "next", this.next = aM.finallyLoc, an) : this.complete(aN);
        }
      },
      complete: function (aG, aH) {
        {
          if ("throw" === aG.type) {
            throw aG.arg;
          }
          "break" === aG.type || "continue" === aG.type ? this.next = aG.arg : "return" === aG.type ? (this.rval = this.arg = aG.arg, this.method = "return", this.next = "end") : "normal" === aG.type && aH && (this.next = aH);
          return an;
        }
      },
      finish: function (aG) {
        {
          for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
            {
              var aJ = this.tryEntries[aI];
              if (aJ.finallyLoc === aG) {
                this.complete(aJ.completion, aJ.afterLoc);
                aA(aJ);
                return an;
              }
            }
          }
        }
      },
      catch: function (aG) {
        {
          for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
            {
              var aI = this.tryEntries[aH];
              if (aI.tryLoc === aG) {
                {
                  var aJ = aI.completion;
                  if ("throw" === aJ.type) {
                    {
                      var aK = aJ.arg;
                      aA(aI);
                    }
                  }
                  return aK;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aG, aH, aI) {
        {
          this.delegate = {
            iterator: aC(aG),
            resultName: aH,
            nextLoc: aI
          };
          "next" === this.method && (this.arg = a7);
          return an;
        }
      }
    };
    return a8;
  }
  function h(a6, a7, a8, a9, aa, ab, ac) {
    {
      try {
        {
          var ae = a6[ab](ac);
          var af = ae.value;
        }
      } catch (ai) {
        {
          return void a8(ai);
        }
      }
      ae.done ? a7(af) : Promise.resolve(af).then(a9, aa);
    }
  }
  function i(a6) {
    return function () {
      var a9 = this;
      var aa = arguments;
      return new Promise(function (ab, ac) {
        var ae = a6.apply(a9, aa);
        function af(ah) {
          {
            h(ae, ab, ac, af, ag, "next", ah);
          }
        }
        function ag(ah) {
          {
            h(ae, ab, ac, af, ag, "throw", ah);
          }
        }
        af(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.LanJingLing : $.getdata("LanJingLing")) || "";
  var k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var l = undefined;
  var m = "";
  var n = "";
  var o = "";
  var p = "72";
  var q = "";
  var r = "10026";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "FR*r!isE5W";
  function C() {
    return D.apply(this, arguments);
  }
  function D() {
    {
      D = i(g().mark(function a8() {
        {
          var aa;
          var ab;
          var ac;
          var ad;
          var ae;
          var af;
          var ag;
          var ah;
          var ai;
          var aj;
          var ak;
          var al;
          var am;
          var an;
          var ao;
          var ap;
          var aq;
          var ar;
          var as;
          var at;
          var au;
          var av;
          var aw;
          var ax;
          var ay;
          var az;
          var aA;
          var aB;
          var aC;
          var aD;
          var aE;
          var aF;
          var aG;
          var aH;
          var aI;
          var aJ;
          var aK;
          var aL;
          var aM;
          var aN;
          var aO;
          var aP;
          var aQ;
          var aR;
          return g().wrap(function (aS) {
            {
              for (;;) {
                switch (aS.prev = aS.next) {
                  case 0:
                    if (j) {
                      {
                        aS.next = 5;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    aS.next = 4;
                    return a4("先去boxjs填写账号密码");
                  case 4:
                    return aS.abrupt("return");
                  case 5:
                    aS.next = 7;
                    return a0();
                  case 7:
                    l = aS.sent;
                    aa = j.split(" ");
                    ab = c(aa);
                    aS.prev = 10;
                    ab.s();
                  case 12:
                    if ((ac = ab.n()).done) {
                      {
                        aS.next = 213;
                        break;
                      }
                    }
                    af = ac.value;
                    console.log("随机生成UA");
                    ag = Z();
                    w = ag.ua;
                    x = ag.commonUa;
                    y = ag.uuid;
                    console.log(w);
                    console.log(x);
                    s = af.split("&")[0];
                    t = af.split("&")[1];
                    u = af.split("&")[2];
                    v = af.split("&")[3] || s;
                    console.log("用户：".concat(s, "开始任务"));
                    console.log("获取sessionId");
                    aS.next = 29;
                    return K("/api/account/init");
                  case 29:
                    ah = aS.sent;
                    o = ah.data.session.id;
                    console.log(o);
                    console.log("获取signature_key");
                    aS.next = 35;
                    return E("/web/init?client_id=".concat(r));
                  case 35:
                    ai = aS.sent;
                    m = ai.data.client.signature_key;
                    console.log(m);
                    console.log("获取code");
                    aS.next = 41;
                    return G("/web/oauth/credential_auth");
                  case 41:
                    if (aj = aS.sent, aj.data) {
                      {
                        aS.next = 45;
                        break;
                      }
                    }
                    console.log(aj.message);
                    return aS.abrupt("continue", 211);
                  case 45:
                    ak = aj.data.authorization_code.code;
                    console.log(ak);
                    console.log("登录");
                    aS.next = 50;
                    return K("/api/zbtxz/login", "check_token=&code=".concat(ak, "&token=&type=-1&union_id="));
                  case 50:
                    al = aS.sent;
                    console.log("登录成功");
                    q = al.data.session.account_id;
                    o = al.data.session.id;
                    console.log("————————————");
                    console.log("阅读抽奖");
                    console.log("获取token");
                    aS.next = 59;
                    return Q("/auth/userinfo_with_account?accountId=".concat(q, "&sessionId=").concat(o));
                  case 59:
                    am = aS.sent;
                    z = "Bearer " + am.result.userinfo.token;
                    console.log(z);
                    console.log("获取id");
                    aS.next = 65;
                    return Q("/tasks");
                  case 65:
                    if (an = aS.sent, ao = W(), A = null === (ad = an.result[ao.month][ao.day]) || undefined === ad ? undefined : ad.id, A) {
                      {
                        aS.next = 71;
                        break;
                      }
                    }
                    console.log("未找到活动");
                    return aS.abrupt("continue", 211);
                  case 71:
                    if (console.log(A), null === (ae = an.result[ao.month][ao.day]) || undefined === ae || !ae.is_fin) {
                      {
                        aS.next = 76;
                        break;
                      }
                    }
                    console.log("阅读已完成");
                    aS.next = 147;
                    break;
                  case 76:
                    console.log("开始阅读");
                    aS.next = 79;
                    return Q("/news?task_id=".concat(A, "&account_id=").concat(q, "&session_id=").concat(o, "&device=").concat(y));
                  case 79:
                    ap = aS.sent;
                    aq = c(ap.result);
                    aS.prev = 81;
                    aq.s();
                  case 83:
                    if ((ar = aq.n()).done) {
                      {
                        aS.next = 139;
                        break;
                      }
                    }
                    if (as = ar.value, console.log(as.name), !as.is_fin) {
                      {
                        aS.next = 89;
                        break;
                      }
                    }
                    console.log("已完成");
                    return aS.abrupt("continue", 137);
                  case 89:
                    at = as.task_config;
                    au = c(as.news);
                    aS.prev = 91;
                    au.s();
                  case 93:
                    if ((av = au.n()).done) {
                      {
                        aS.next = 129;
                        break;
                      }
                    }
                    if (aw = av.value, console.log("文章：".concat(aw.title)), !at.includes("read")) {
                      {
                        aS.next = 109;
                        break;
                      }
                    }
                    az = String(Date.parse(new Date()) / 1000);
                    aS.next = 100;
                    return S({
                      time: az
                    });
                  case 100:
                    if (aA = aS.sent, null !== (ax = aA) && undefined !== ax && ax.sign) {
                      {
                        aS.next = 105;
                        break;
                      }
                    }
                    var aU = {
                      time: az
                    };
                    aS.next = 104;
                    return S(aU);
                  case 104:
                    aA = aS.sent;
                  case 105:
                    aS.next = 107;
                    return Q("/news/record?t=am&news_id=".concat(aw.id, "&timestamp=").concat(az, "&sign=").concat(null === (ay = aA) || undefined === ay ? undefined : ay.sign, "&session_id=").concat(o, "&device=").concat(y, ")"));
                  case 107:
                    aB = aS.sent;
                    console.log("阅读：".concat(aB.msg));
                  case 109:
                    if (!at.includes("like") && !at.includes("vote")) {
                      {
                        aS.next = 114;
                        break;
                      }
                    }
                    aS.next = 112;
                    return K("/api/favorite/like", "action=true&id=".concat(aw.news_id));
                  case 112:
                    aC = aS.sent;
                    console.log("点赞：".concat(aC.message));
                  case 114:
                    if (!at.includes("share")) {
                      {
                        aS.next = 119;
                        break;
                      }
                    }
                    aS.next = 117;
                    return K("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id=".concat(aw.news_id));
                  case 117:
                    aD = aS.sent;
                    console.log("分享：".concat(aD.message));
                  case 119:
                    if (!at.includes("comment")) {
                      {
                        aS.next = 124;
                        break;
                      }
                    }
                    var aV = {
                      channel_article_id: aw.news_id,
                      content: "好"
                    };
                    aS.next = 122;
                    return M("/api/comment/create/v2", aV);
                  case 122:
                    aE = aS.sent;
                    console.log("评论：".concat(aE.message));
                  case 124:
                    aS.next = 126;
                    return Q("/news?task_id=".concat(A, "&account_id=").concat(q, "&session_id=").concat(o, "&device=").concat(y));
                  case 126:
                    aS.sent;
                  case 127:
                    aS.next = 93;
                    break;
                  case 129:
                    aS.next = 134;
                    break;
                  case 131:
                    aS.prev = 131;
                    aS.t0 = aS.catch(91);
                    au.e(aS.t0);
                  case 134:
                    aS.prev = 134;
                    au.f();
                    return aS.finish(134);
                  case 137:
                    aS.next = 83;
                    break;
                  case 139:
                    aS.next = 144;
                    break;
                  case 141:
                    aS.prev = 141;
                    aS.t1 = aS.catch(81);
                    aq.e(aS.t1);
                  case 144:
                    aS.prev = 144;
                    aq.f();
                    return aS.finish(144);
                  case 147:
                    aS.next = 149;
                    return Q("/draw/code");
                  case 149:
                    aF = aS.sent;
                    console.log("拥有".concat(aF.result.length, "次抽奖"));
                    aG = c(aF.result);
                    aS.prev = 152;
                    aG.s();
                  case 154:
                    if ((aH = aG.n()).done) {
                      {
                        aS.next = 162;
                        break;
                      }
                    }
                    aI = aH.value;
                    aS.next = 158;
                    return O("/draw/lottery", {
                      code: aI.code
                    });
                  case 158:
                    aJ = aS.sent;
                    6 == aJ.result ? console.log("抽奖获得：0.3元红包") : 7 == aJ.result ? console.log("谢谢参与") : console.log(JSON.stringify(aJ));
                  case 160:
                    aS.next = 154;
                    break;
                  case 162:
                    aS.next = 167;
                    break;
                  case 164:
                    aS.prev = 164;
                    aS.t2 = aS.catch(152);
                    aG.e(aS.t2);
                  case 167:
                    aS.prev = 167;
                    aG.f();
                    return aS.finish(167);
                  case 170:
                    if (console.log("开始提现"), v && u) {
                      {
                        aS.next = 174;
                        break;
                      }
                    }
                    console.log("请填写支付宝信息");
                    return aS.abrupt("continue", 211);
                  case 174:
                    aS.next = 176;
                    return Q("/order/profile");
                  case 176:
                    if (aK = aS.sent, aK.result.alipay_account) {
                      {
                        aS.next = 182;
                        break;
                      }
                    }
                    var aW = {
                      order_id: 0,
                      alipay_account: v,
                      username: u
                    };
                    aS.next = 180;
                    return O("/order/bind", aW);
                  case 180:
                    aL = aS.sent;
                    console.log("绑定支付宝：".concat(aL.result));
                  case 182:
                    if (console.log("余额：".concat(aK.result.unreceived)), !(aK.result.unreceived > 0)) {
                      {
                        aS.next = 189;
                        break;
                      }
                    }
                    var aX = {
                      order_id: 0,
                      alipay_account: v,
                      username: u
                    };
                    aS.next = 186;
                    return O("/order/receive", aX);
                  case 186:
                    aM = aS.sent;
                    console.log("提现：".concat(aM.result));
                    aM.msg && (n += "用户".concat(s, " 提现成功：").concat(aK.result.unreceived, "元\n"));
                  case 189:
                    aS.next = 191;
                    return I("/api/account_comment/comment_list?size=20");
                  case 191:
                    aN = aS.sent;
                    aO = c(aN.data.comment_list);
                    aS.prev = 193;
                    aO.s();
                  case 195:
                    if ((aP = aO.n()).done) {
                      {
                        aS.next = 203;
                        break;
                      }
                    }
                    aQ = aP.value;
                    aS.next = 199;
                    return K("/api/comment/delete", "comment_id=".concat(aQ.id));
                  case 199:
                    aR = aS.sent;
                    console.log("删除评论：".concat(aR.message));
                  case 201:
                    aS.next = 195;
                    break;
                  case 203:
                    aS.next = 208;
                    break;
                  case 205:
                    aS.prev = 205;
                    aS.t3 = aS.catch(193);
                    aO.e(aS.t3);
                  case 208:
                    aS.prev = 208;
                    aO.f();
                    return aS.finish(208);
                  case 211:
                    aS.next = 12;
                    break;
                  case 213:
                    aS.next = 218;
                    break;
                  case 215:
                    aS.prev = 215;
                    aS.t4 = aS.catch(10);
                    ab.e(aS.t4);
                  case 218:
                    aS.prev = 218;
                    ab.f();
                    return aS.finish(218);
                  case 221:
                    if (!n) {
                      {
                        aS.next = 224;
                        break;
                      }
                    }
                    aS.next = 224;
                    return a4(n);
                  case 224:
                  case "end":
                    return aS.stop();
                }
              }
            }
          }, a8, null, [[10, 215, 218, 221], [81, 141, 144, 147], [91, 131, 134, 137], [152, 164, 167, 170], [193, 205, 208, 211]]);
        }
      }));
      return D.apply(this, arguments);
    }
  }
  function E(a6) {
    return F.apply(this, arguments);
  }
  function F() {
    {
      F = i(g().mark(function a8(a9) {
        {
          return g().wrap(function (aa) {
            {
              for (;;) {
                switch (aa.prev = aa.next) {
                  case 0:
                    return aa.abrupt("return", new Promise(function (ac) {
                      {
                        var ae = {
                          url: "https://passport.tmuyun.com".concat(a9),
                          headers: {
                            Connection: "Keep-Alive",
                            "Cache-Control": "no-cache",
                            "X-REQUEST-ID": X(),
                            "Accept-Encoding": "gzip",
                            "user-agent": w
                          }
                        };
                        $.get(ae, function () {
                          {
                            var ag = i(g().mark(function ah(ai, aj, ak) {
                              {
                                return g().wrap(function (an) {
                                  {
                                    for (;;) {
                                      switch (an.prev = an.next) {
                                        case 0:
                                          try {
                                            {
                                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                                            }
                                          } catch (aq) {
                                            $.logErr(aq, aj);
                                          } finally {
                                            {
                                              ac();
                                            }
                                          }
                                        case 1:
                                        case "end":
                                          return an.stop();
                                      }
                                    }
                                  }
                                }, ah);
                              }
                            }));
                            return function (ai, aj, ak) {
                              {
                                return ag.apply(this, arguments);
                              }
                            };
                          }
                        }());
                      }
                    }));
                  case 1:
                  case "end":
                    return aa.stop();
                }
              }
            }
          }, a8);
        }
      }));
      return F.apply(this, arguments);
    }
  }
  function G(a6) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function a7(a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = U();
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  },
                  body: aa.body
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (am) {
                              $.logErr(am, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return H.apply(this, arguments);
  }
  function I(a6) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function a7(a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = V(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": aa.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": aa.uuid,
                  "X-SIGNATURE": aa.signature,
                  "X-TENANT-ID": p,
                  "X-ACCOUNT-ID": q,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": x
                };
                var ag = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: af
                };
                $.get(ag, function () {
                  var ai = i(g().mark(function aj(ak, al, am) {
                    return g().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            ad();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return J.apply(this, arguments);
  }
  function K(a6, a7) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function a7(a8, a9) {
      var ab;
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = V(a8);
              return ac.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ab.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ab.uuid,
                    "X-SIGNATURE": ab.signature,
                    "X-TENANT-ID": p,
                    "X-ACCOUNT-ID": q,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  },
                  body: a9
                };
                $.post(af, function () {
                  var ah = i(g().mark(function ai(aj, ak, al) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return L.apply(this, arguments);
  }
  function M(a6, a7) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function a6(a7, a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = V(a7);
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": aa.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": aa.uuid,
                  "X-SIGNATURE": aa.signature,
                  "X-TENANT-ID": p,
                  "X-ACCOUNT-ID": q,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/json; charset=utf-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": x
                };
                var af = {
                  url: "https://vapp.tmuyun.com".concat(a7),
                  headers: ae,
                  body: JSON.stringify(a8)
                };
                $.post(af, function () {
                  var ah = i(g().mark(function ai(aj, ak, al) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ac();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a6);
    }));
    return N.apply(this, arguments);
  }
  function O(a6, a7) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function a7(a8, a9) {
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://yuedulanxi.lxnews.cn/api".concat(a8),
                  headers: {
                    Connection: "keep-alive",
                    Authorization: z,
                    accept: "*/*",
                    "content-type": "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_lanjingling;xsb_lanjingling;2.0.9;native_app;6.9.0",
                    "x-requested-with": "com.shixian.lanxi",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a9)
                };
                $.post(af, function () {
                  var ah = i(g().mark(function ai(aj, ak, al) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return P.apply(this, arguments);
  }
  function Q(a6) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function a7(a8) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  Connection: "keep-alive",
                  Authorization: z,
                  accept: "*/*",
                  "content-type": "application/json",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_lanjingling;xsb_lanjingling;2.0.9;native_app;6.9.0",
                  "x-requested-with": "com.shixian.lanxi",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ae = {
                  url: "https://yuedulanxi.lxnews.cn/api".concat(a8),
                  headers: ad
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ai) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(ak));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, aj);
                          case 14:
                            al.prev = 14;
                            ab();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a7);
    }));
    return R.apply(this, arguments);
  }
  function S(a6) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function a7(a8) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ab) {
                var ad = {
                  "Content-Type": "application/json"
                };
                var ae = {
                  url: "https://lanjingling.beicin.eu.org/md5",
                  headers: ad,
                  body: JSON.stringify(a8)
                };
                $.post(ae, function (af, ag, ah) {
                  try {
                    af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(ah));
                  } catch (ai) {
                    $.logErr(ai, ag);
                  } finally {
                    ab();
                  }
                });
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return T.apply(this, arguments);
  }
  function U() {
    var aa = new (l.loadJSEncrypt())();
    aa.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    t = aa.encrypt(t);
    var ac = X();
    var ad = "client_id=".concat(r, "&password=").concat(t, "&phone_number=").concat(s);
    var ae = "post%%/web/oauth/credential_auth?".concat(ad, "%%").concat(ac, "%%");
    ad = "client_id=".concat(r, "&password=").concat(encodeURIComponent(t), "&phone_number=").concat(s);
    CryptoJS = l.createCryptoJS();
    var a8 = CryptoJS.HmacSHA256(ae, m);
    var a9 = CryptoJS.enc.Hex.stringify(a8);
    var ab = {
      uuid: ac,
      signature: a9,
      body: ad
    };
    return ab;
  }
  function V(a6) {
    var a7 = X();
    var a8 = Date.now();
    a6.indexOf("?") > 0 && (a6 = a6.substring(0, a6.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var a9 = CryptoJS.SHA256("".concat(a6, "&&").concat(o, "&&").concat(a7, "&&").concat(a8, "&&").concat(B, "&&").concat(p)).toString();
    var aa = {
      uuid: a7,
      time: a8,
      signature: a9
    };
    return aa;
  }
  function W() {
    var a6 = new Date();
    var a7 = a6.getFullYear();
    var a8 = String(a6.getMonth() + 1).padStart(2, "0");
    var a9 = String(a6.getDate()).padStart(2, "0");
    return {
      month: "".concat(a7, "-").concat(a8),
      day: "".concat(a7, "-").concat(a8, "-").concat(a9)
    };
  }
  function X() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a6) {
      var a7 = 16 * Math.random() | 0;
      var a8 = "x" === a6 ? a7 : 3 & a7 | 8;
      return a8.toString(16);
    });
  }
  function Y(a6) {
    return a6[Math.floor(Math.random() * a6.length)];
  }
  function Z() {
    var a6 = "1.1.9";
    var a7 = X();
    var a8 = Y(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a9 = "Xiaomi " + a8;
    var aa = "Android";
    var ab = "".concat(aa.toUpperCase(), ";").concat("11", ";").concat(r, ";").concat(a6, ";1.0;null;").concat(a8);
    var ac = "".concat(a6, ";").concat(a7, ";").concat(a9, ";").concat(aa, ";").concat("11", ";").concat("Release", ";").concat("6.11.0");
    var ad = {
      ua: ab,
      commonUa: ac,
      uuid: a7
    };
    return ad;
  }
  function a0() {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function a6() {
      var a8;
      return g().wrap(function a9(aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              if (a8 = $.getdata("Utils_Code") || "", !a8 || !Object.keys(a8).length) {
                aa.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a8);
              return aa.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aa.abrupt("return", new Promise(function () {
                var ac = i(g().mark(function ad(ae) {
                  return g().wrap(function ag(ah) {
                    for (;;) {
                      switch (ah.prev = ah.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aj) {
                            $.setdata(aj, "Utils_Code");
                            eval(aj);
                            console.log("✅ Utils加载成功, 请继续");
                            ae(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ah.stop();
                      }
                    }
                  }, ad);
                }));
                return function (ae) {
                  return ac.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return a1.apply(this, arguments);
  }
  function a2() {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function a7() {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(aj).notice);
                            } catch (al) {
                              $.logErr(al, ai);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return a3.apply(this, arguments);
  }
  function a4(a6) {
    return a5.apply(this, arguments);
  }
  function a5() {
    a5 = i(g().mark(function a7(a8) {
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (!$.isNode()) {
                ab.next = 5;
                break;
              }
              ab.next = 3;
              return notify.sendNotify($.name, a8);
            case 3:
              ab.next = 6;
              break;
            case 5:
              $.msg($.name, "", a8);
            case 6:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return a5.apply(this, arguments);
  }
  i(g().mark(function a6() {
    return g().wrap(function (a7) {
      for (;;) {
        switch (a7.prev = a7.next) {
          case 0:
            a7.next = 2;
            return a2();
          case 2:
            a7.next = 4;
            return C();
          case 4:
          case "end":
            return a7.stop();
        }
      }
    }, a6);
  }))().catch(function (a7) {
    $.log(a7);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}