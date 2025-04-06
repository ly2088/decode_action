//Sun Apr 06 2025 15:18:02 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("望潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ah) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ak) {
      {
        return typeof ak;
      }
    } : function (ak) {
      {
        return ak && "function" == typeof Symbol && ak.constructor === Symbol && ak !== Symbol.prototype ? "symbol" : typeof ak;
      }
    };
    return b(ah);
  }
  function c(ah, ai) {
    {
      var ak = "undefined" != typeof Symbol && ah[Symbol.iterator] || ah["@@iterator"];
      if (!ak) {
        {
          if (Array.isArray(ah) || (ak = d(ah)) || ai && ah && "number" == typeof ah.length) {
            {
              ak && (ah = ak);
              var al = 0;
              var am = function () {};
              return {
                s: am,
                n: function () {
                  {
                    var aq = {
                      done: true
                    };
                    return al >= ah.length ? aq : {
                      done: false,
                      value: ah[al++]
                    };
                  }
                },
                e: function (aq) {
                  {
                    throw aq;
                  }
                },
                f: am
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var an;
      var ao = true;
      var ap = false;
      return {
        s: function () {
          {
            ak = ak.call(ah);
          }
        },
        n: function () {
          {
            var at = ak.next();
            ao = at.done;
            return at;
          }
        },
        e: function (as) {
          {
            ap = true;
            an = as;
          }
        },
        f: function () {
          {
            try {
              {
                ao || null == ak.return || ak.return();
              }
            } finally {
              {
                if (ap) {
                  throw an;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ah, ai) {
    {
      if (ah) {
        if ("string" == typeof ah) {
          return f(ah, ai);
        }
        var ak = {}.toString.call(ah).slice(8, -1);
        "Object" === ak && ah.constructor && (ak = ah.constructor.name);
        return "Map" === ak || "Set" === ak ? Array.from(ah) : "Arguments" === ak || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ak) ? f(ah, ai) : undefined;
      }
    }
  }
  function f(ah, ai) {
    {
      (null == ai || ai > ah.length) && (ai = ah.length);
      for (var aj = 0, ak = Array(ai); aj < ai; aj++) {
        ak[aj] = ah[aj];
      }
      return ak;
    }
  }
  function g() {
    "use strict";

    var ah = {
      lfmVA: function (aO, aP, aQ, aR, aS) {
        return aO(aP, aQ, aR, aS);
      },
      Tpwkk: "throw",
      DIgEB: "uZTnw",
      cAyRt: function (aO, aP) {
        return aO < aP;
      },
      WyUTy: function (aO, aP) {
        return aO === aP;
      },
      ckjOq: "KbaSF",
      DVZOl: function (aO, aP) {
        return aO instanceof aP;
      },
      CeCMB: "_invoke",
      oBhnM: function (aO, aP, aQ, aR) {
        return aO(aP, aQ, aR);
      },
      nfFXa: function (aO, aP) {
        return aO(aP);
      },
      exKbP: function (aO) {
        return aO();
      },
      qpeQk: "end",
      NXGMV: function (aO, aP) {
        return aO !== aP;
      },
      QQJHL: "SlUnR",
      sDMwx: function (aO, aP, aQ, aR) {
        return aO(aP, aQ, aR);
      },
      DpnaF: function (aO) {
        return aO();
      },
      HzLxO: function (aO, aP) {
        return aO(aP);
      },
      ELjZg: "CfcRz",
      xPTSq: "SPdgJ",
      CbpXj: "yhgpV",
      mUMxN: "return",
      jqVRc: "grXVs",
      grtLI: function (aO, aP) {
        return aO == aP;
      },
      BpnSu: function (aO, aP) {
        return aO * aP;
      },
      FclfZ: function (aO, aP, aQ, aR, aS) {
        return aO(aP, aQ, aR, aS);
      },
      hdQHe: "GsbuV",
      HKCoH: "WnqXt",
      kJzpb: function (aO, aP) {
        return aO !== aP;
      },
      RBvzX: "DJRSD",
      kyYle: "/tzrb/userAwardRecordUpgrade/saveUpdate",
      ZvbxY: "activityId=67&sessionId=undefined&sig=undefined&token=undefined",
      ImFHo: function (aO, aP) {
        return aO != aP;
      },
      FcNaU: "抽奖获得：",
      LuBGt: function (aO, aP, aQ, aR, aS) {
        return aO(aP, aQ, aR, aS);
      },
      ISmMp: "UgWre",
      rdpVH: "YCCmi",
      NGsxL: "object",
      bHXij: "__await",
      yfJzM: "function",
      BhLXM: "qQUtL",
      qdlTx: function (aO, aP, aQ, aR, aS) {
        return aO(aP, aQ, aR, aS);
      },
      ZoQKg: "HMXSd",
      TxIox: "yIIjZ",
      icYmd: "zTyZl",
      LBuhs: "RehuR",
      FKCTD: function (aO, aP, aQ, aR) {
        return aO(aP, aQ, aR);
      },
      yKyOc: function (aO, aP) {
        return aO === aP;
      },
      YmSbe: "AwZQa",
      RiKLt: "TReyk",
      AhKyh: "next",
      yRJdE: "iterator result is not an object",
      osyHP: function (aO, aP) {
        return aO === aP;
      },
      fsLZq: function (aO, aP) {
        return aO === aP;
      },
      uZjPa: function (aO, aP, aQ) {
        return aO(aP, aQ);
      },
      kigMI: function (aO, aP) {
        return aO + aP;
      },
      LVXvE: "The iterator does not provide a '",
      WdHPA: "' method",
      eLnbQ: "KTOzW",
      nNQxI: "RXAgx",
      lwWSR: "normal",
      kKjSA: "YjQSz",
      IEmhM: "root",
      BqJYu: function (aO, aP) {
        return aO | aP;
      },
      VIuOu: function (aO, aP) {
        return aO === aP;
      },
      WpMxx: "errsz",
      HbMjB: function (aO, aP) {
        return aO == aP;
      },
      vUZtS: function (aO, aP) {
        return aO === aP;
      },
      QhcPJ: "GeneratorFunction",
      GmgFe: function (aO, aP, aQ, aR) {
        return aO(aP, aQ, aR);
      },
      evnOe: function (aO, aP) {
        return aO !== aP;
      },
      aUHFK: "axlrU",
      QWsMp: function (aO, aP, aQ, aR) {
        return aO(aP, aQ, aR);
      },
      cHvfZ: function (aO, aP) {
        return aO !== aP;
      },
      WGvQh: function (aO, aP, aQ) {
        return aO(aP, aQ);
      },
      snteh: function (aO, aP) {
        return aO !== aP;
      },
      jkPuW: function (aO, aP) {
        return aO + aP;
      },
      nrVBv: function (aO, aP) {
        return aO === aP;
      },
      CAYyO: "NuiCy",
      yuVZO: "[object Generator]",
      cAjxs: "0|4|1|3|2",
      dEPkZ: function (aO, aP) {
        return aO == aP;
      },
      meuaR: function (aO, aP) {
        return aO !== aP;
      },
      xoval: "ZQNdl",
      MPrAY: "FtIZz",
      hmzKG: "zHXmR",
      fAGjm: function (aO, aP) {
        return aO in aP;
      },
      iHkcS: "YabvI",
      kugpu: function (aO, aP) {
        return aO(aP);
      },
      vVWQK: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB",
      ktZOX: function (aO) {
        return aO();
      },
      IhrVT: "client_id=",
      fQdDr: "&phone_number=",
      OzRiL: "post%%/web/oauth/credential_auth?",
      OCxPh: function (aO, aP) {
        return aO(aP);
      },
      GxyJX: function (aO, aP) {
        return aO === aP;
      },
      wrqiG: "ijIfU",
      mEyqC: function (aO, aP) {
        return aO === aP;
      },
      yrrcJ: "6.0.2",
      huMKJ: "M1903F2A",
      eAfan: "M2001J2E",
      fHgDJ: "M2001J2C",
      Iefxl: "M2001J1C",
      aJYjH: "M2002J9E",
      vuzTu: "M2102K1C",
      LWKQB: "M2101K9C",
      sMMsW: "2201123C",
      LrhiI: "2112123AC",
      VAPiK: "2201122C",
      ocCad: "2304FPN6DC",
      wbhmB: "23090RA98C",
      veYMg: "2312DRA50C",
      nmCZr: "2312DRAABC",
      XHHiW: function (aO, aP) {
        return aO + aP;
      },
      CQGTZ: "Xiaomi ",
      QtqOD: "Android",
      exXzK: "6.10.0",
      HSphx: "break",
      oHgHb: function (aO, aP) {
        return aO === aP;
      },
      DeyFQ: function (aO, aP) {
        return aO === aP;
      },
      IdKHN: "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC",
      vBXCk: "EsoeV",
      sPUyo: function (aO, aP) {
        return aO - aP;
      },
      FFtLl: function (aO, aP) {
        return aO >= aP;
      },
      UPnuO: "gprbB",
      jiceX: function (aO, aP) {
        return aO <= aP;
      },
      JwMuG: "finallyLoc",
      KFoEg: function (aO, aP) {
        return aO !== aP;
      },
      ybWuA: "UPUEW",
      Vksel: "continue",
      DRrLJ: "xapgH",
      xnkxE: function (aO, aP) {
        return aO === aP;
      },
      omvNN: function (aO, aP, aQ, aR) {
        return aO(aP, aQ, aR);
      },
      IcKUg: "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      kkWdr: "Utils_Code",
      KJmck: function (aO, aP) {
        return aO(aP);
      },
      tFJvc: "KUeOS",
      rPVOk: function (aO, aP) {
        return aO - aP;
      },
      TIzsU: function (aO, aP) {
        return aO >= aP;
      },
      JzOSw: "vxQmn",
      FwHuY: function (aO, aP) {
        return aO === aP;
      },
      WFvaZ: function (aO, aP) {
        return aO === aP;
      },
      vfmmK: function (aO, aP) {
        return aO !== aP;
      },
      dgjhq: "OrPzt",
      aPOqP: "WAMIg",
      ddqXQ: "illegal catch attempt",
      JIQuv: "qCVac",
      pzUda: "OMvlx",
      rNvTo: function (aO, aP) {
        return aO(aP);
      },
      bjmNo: function (aO, aP) {
        return aO === aP;
      }
    };
    g = function () {
      return aj;
    };
    var ai;
    var aj = {
      wrap: as,
      isGeneratorFunction: function (aR) {
        {
          var aT = "function" == typeof aR && aR.constructor;
          return !!aT && (aT === aA || "GeneratorFunction" === (aT.displayName || aT.name));
        }
      },
      mark: function (aR) {
        {
          Object.setPrototypeOf ? Object.setPrototypeOf(aR, aB) : (aR.__proto__ = aB, ar(aR, aq, "GeneratorFunction"));
          aR.prototype = Object.create(aF);
          return aR;
        }
      },
      awrap: function (aR) {
        {
          var aS = {
            __await: aR
          };
          return aS;
        }
      },
      AsyncIterator: aH,
      async: function (aR, aS, aT, aU, aV) {
        {
          undefined === aV && (aV = Promise);
          var aX = new aH(as(aR, aS, aT, aU), aV);
          return aj.isGeneratorFunction(aS) ? aX : aX.next().then(function (aY) {
            {
              return aY.done ? aY.value : aX.next();
            }
          });
        }
      }
    };
    var ak = Object.prototype;
    var al = ak.hasOwnProperty;
    var am = Object.defineProperty || function (aO, aP, aQ) {
      {
        aO[aP] = aQ.value;
      }
    };
    var an = "function" == typeof Symbol ? Symbol : {};
    var ao = an.iterator || "@@iterator";
    var ap = an.asyncIterator || "@@asyncIterator";
    var aq = an.toStringTag || "@@toStringTag";
    function ar(aO, aP, aQ) {
      {
        var aR = {
          value: aQ,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aO, aP, aR);
        return aO[aP];
      }
    }
    try {
      ar({}, "");
    } catch (aP) {
      {
        ar = function (aR, aS, aT) {
          return aR[aS] = aT;
        };
      }
    }
    function as(aR, aS, aT, aU) {
      {
        var aW = aS && aS.prototype instanceof az ? aS : az;
        var aX = Object.create(aW.prototype);
        var aY = new aM(aU || []);
        am(aX, "_invoke", {
          value: aI(aR, aT, aY)
        });
        return aX;
      }
    }
    function at(aR, aS, aT) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aR.call(aS, aT)
            };
          }
        } catch (aX) {
          {
            var aV = {
              type: "throw",
              arg: aX
            };
            return aV;
          }
        }
      }
    }
    var au = "suspendedStart";
    var av = "suspendedYield";
    var aw = "executing";
    var ax = "completed";
    var ay = {};
    function az() {}
    function aA() {}
    function aB() {}
    var aC = {};
    ar(aC, ao, function () {
      {
        return this;
      }
    });
    var aD = Object.getPrototypeOf;
    var aE = aD && aD(aD(aN([])));
    aE && aE !== ak && al.call(aE, ao) && (aC = aE);
    aB.prototype = az.prototype = Object.create(aC);
    var aF = aB.prototype;
    function aG(aR) {
      {
        ["next", "throw", "return"].forEach(function (aT) {
          {
            ar(aR, aT, function (aV) {
              return this._invoke(aT, aV);
            });
          }
        });
      }
    }
    function aH(aR, aS) {
      {
        function aV(aW, aX, aY, aZ) {
          {
            var b1 = at(aR[aW], aR, aX);
            if ("throw" !== b1.type) {
              {
                var b2 = b1.arg;
                var b3 = b2.value;
                return b3 && "object" == b(b3) && al.call(b3, "__await") ? aS.resolve(b3.__await).then(function (b5) {
                  {
                    aV("next", b5, aY, aZ);
                  }
                }, function (b5) {
                  {
                    aV("throw", b5, aY, aZ);
                  }
                }) : aS.resolve(b3).then(function (b5) {
                  {
                    b2.value = b5;
                    aY(b2);
                  }
                }, function (b5) {
                  {
                    return aV("throw", b5, aY, aZ);
                  }
                });
              }
            }
            aZ(b1.arg);
          }
        }
        var aU;
        am(this, "_invoke", {
          value: function (aW, aX) {
            {
              function aZ() {
                return new aS(function (b2, b3) {
                  {
                    aV(aW, aX, b2, b3);
                  }
                });
              }
              return aU = aU ? aU.then(aZ, aZ) : aZ();
            }
          }
        });
      }
    }
    function aI(aR, aS, aT) {
      {
        var aV = au;
        return function (aW, aX) {
          {
            if (aV === aw) {
              throw Error("Generator is already running");
            }
            if (aV === ax) {
              {
                if ("throw" === aW) {
                  throw aX;
                }
                var aZ = {
                  value: ai,
                  done: true
                };
                return aZ;
              }
            }
            for (aT.method = aW, aT.arg = aX;;) {
              {
                var b0 = aT.delegate;
                if (b0) {
                  {
                    var b1 = aJ(b0, aT);
                    if (b1) {
                      {
                        if (b1 === ay) {
                          continue;
                        }
                        return b1;
                      }
                    }
                  }
                }
                if ("next" === aT.method) {
                  aT.sent = aT._sent = aT.arg;
                } else {
                  if ("throw" === aT.method) {
                    {
                      if (aV === au) {
                        throw aV = ax, aT.arg;
                      }
                      aT.dispatchException(aT.arg);
                    }
                  } else {
                    "return" === aT.method && aT.abrupt("return", aT.arg);
                  }
                }
                aV = aw;
                var b2 = at(aR, aS, aT);
                if ("normal" === b2.type) {
                  {
                    if (aV = aT.done ? ax : av, b2.arg === ay) {
                      continue;
                    }
                    var b3 = {
                      value: b2.arg,
                      done: aT.done
                    };
                    return b3;
                  }
                }
                "throw" === b2.type && (aV = ax, aT.method = "throw", aT.arg = b2.arg);
              }
            }
          }
        };
      }
    }
    function aJ(aR, aS) {
      {
        var aW = aS.method;
        var aX = aR.iterator[aW];
        if (aX === ai) {
          aS.delegate = null;
          "throw" === aW && aR.iterator.return && (aS.method = "return", aS.arg = ai, aJ(aR, aS), "throw" === aS.method) || "return" !== aW && (aS.method = "throw", aS.arg = new TypeError("The iterator does not provide a '" + aW + "' method"));
          return ay;
        }
        var aV = at(aX, aR.iterator, aS.arg);
        if ("throw" === aV.type) {
          aS.method = "throw";
          aS.arg = aV.arg;
          aS.delegate = null;
          return ay;
        }
        var aY = aV.arg;
        return aY ? aY.done ? (aS[aR.resultName] = aY.value, aS.next = aR.nextLoc, "return" !== aS.method && (aS.method = "next", aS.arg = ai), aS.delegate = null, ay) : aY : (aS.method = "throw", aS.arg = new TypeError("iterator result is not an object"), aS.delegate = null, ay);
      }
    }
    function aK(aR) {
      {
        var aT = {
          tryLoc: aR[0]
        };
        1 in aR && (aT.catchLoc = aR[1]);
        2 in aR && (aT.finallyLoc = aR[2], aT.afterLoc = aR[3]);
        this.tryEntries.push(aT);
      }
    }
    function aL(aR) {
      {
        var aU = aR.completion || {};
        aU.type = "normal";
        delete aU.arg;
        aR.completion = aU;
      }
    }
    function aM(aR) {
      {
        var aS = {
          tryLoc: "root"
        };
        this.tryEntries = [aS];
        aR.forEach(aK, this);
        this.reset(true);
      }
    }
    function aN(aR) {
      {
        if (aR || "" === aR) {
          {
            var aT = aR[ao];
            if (aT) {
              return aT.call(aR);
            }
            if ("function" == typeof aR.next) {
              return aR;
            }
            if (!isNaN(aR.length)) {
              {
                var aU = -1;
                var aV = function aZ() {
                  {
                    for (; ++aU < aR.length;) {
                      if (al.call(aR, aU)) {
                        aZ.value = aR[aU];
                        aZ.done = false;
                        return aZ;
                      }
                    }
                    aZ.value = ai;
                    aZ.done = true;
                    return aZ;
                  }
                };
                return aV.next = aV;
              }
            }
          }
        }
        throw new TypeError(b(aR) + " is not iterable");
      }
    }
    aA.prototype = aB;
    am(aF, "constructor", {
      value: aB,
      configurable: true
    });
    am(aB, "constructor", {
      value: aA,
      configurable: true
    });
    aA.displayName = ar(aB, aq, "GeneratorFunction");
    aG(aH.prototype);
    ar(aH.prototype, ap, function () {
      {
        return this;
      }
    });
    aG(aF);
    ar(aF, aq, "Generator");
    ar(aF, ao, function () {
      return this;
    });
    ar(aF, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    aj.keys = function (aR) {
      {
        var aU = Object(aR);
        var aV = [];
        for (var aW in aU) aV.push(aW);
        aV.reverse();
        return function aY() {
          {
            for (; aV.length;) {
              {
                var aZ = aV.pop();
                if (aZ in aU) {
                  aY.value = aZ;
                  aY.done = false;
                  return aY;
                }
              }
            }
            aY.done = true;
            return aY;
          }
        };
      }
    };
    aj.values = aN;
    aM.prototype = {
      constructor: aM,
      reset: function (aR) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ai, this.done = false, this.delegate = null, this.method = "next", this.arg = ai, this.tryEntries.forEach(aL), !aR) {
            for (var aS in this) "t" === aS.charAt(0) && al.call(this, aS) && !isNaN(+aS.slice(1)) && (this[aS] = ai);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aR = this.tryEntries[0].completion;
          if ("throw" === aR.type) {
            throw aR.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aR) {
        {
          if (this.done) {
            throw aR;
          }
          var aT = this;
          function b0(b1, b2) {
            {
              aW.type = "throw";
              aW.arg = aR;
              aT.next = b1;
              b2 && (aT.method = "next", aT.arg = ai);
              return !!b2;
            }
          }
          for (var aU = this.tryEntries.length - 1; aU >= 0; --aU) {
            {
              var aV = this.tryEntries[aU];
              var aW = aV.completion;
              if ("root" === aV.tryLoc) {
                return b0("end");
              }
              if (aV.tryLoc <= this.prev) {
                {
                  var aX = al.call(aV, "catchLoc");
                  var aY = al.call(aV, "finallyLoc");
                  if (aX && aY) {
                    {
                      if (this.prev < aV.catchLoc) {
                        return b0(aV.catchLoc, true);
                      }
                      if (this.prev < aV.finallyLoc) {
                        return b0(aV.finallyLoc);
                      }
                    }
                  } else {
                    if (aX) {
                      {
                        if (this.prev < aV.catchLoc) {
                          return b0(aV.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aY) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aV.finallyLoc) {
                          return b0(aV.finallyLoc);
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
      abrupt: function (aR, aS) {
        {
          for (var aT = this.tryEntries.length - 1; aT >= 0; --aT) {
            {
              var aU = this.tryEntries[aT];
              if (aU.tryLoc <= this.prev && al.call(aU, "finallyLoc") && this.prev < aU.finallyLoc) {
                {
                  var aV = aU;
                  break;
                }
              }
            }
          }
          aV && ("break" === aR || "continue" === aR) && aV.tryLoc <= aS && aS <= aV.finallyLoc && (aV = null);
          var aW = aV ? aV.completion : {};
          aW.type = aR;
          aW.arg = aS;
          return aV ? (this.method = "next", this.next = aV.finallyLoc, ay) : this.complete(aW);
        }
      },
      complete: function (aR, aS) {
        {
          if ("throw" === aR.type) {
            throw aR.arg;
          }
          "break" === aR.type || "continue" === aR.type ? this.next = aR.arg : "return" === aR.type ? (this.rval = this.arg = aR.arg, this.method = "return", this.next = "end") : "normal" === aR.type && aS && (this.next = aS);
          return ay;
        }
      },
      finish: function (aR) {
        {
          for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
            {
              var aT = this.tryEntries[aS];
              if (aT.finallyLoc === aR) {
                this.complete(aT.completion, aT.afterLoc);
                aL(aT);
                return ay;
              }
            }
          }
        }
      },
      catch: function (aR) {
        {
          for (var aT = this.tryEntries.length - 1; aT >= 0; --aT) {
            {
              var aU = this.tryEntries[aT];
              if (aU.tryLoc === aR) {
                {
                  var aV = aU.completion;
                  if ("throw" === aV.type) {
                    {
                      var aW = aV.arg;
                      aL(aU);
                    }
                  }
                  return aW;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aR, aS, aT) {
        this.delegate = {
          iterator: aN(aR),
          resultName: aS,
          nextLoc: aT
        };
        "next" === this.method && (this.arg = ai);
        return ay;
      }
    };
    return aj;
  }
  function h(ah, ai, aj, ak, al, am, an) {
    {
      try {
        {
          var ap = ah[am](an);
          var aq = ap.value;
        }
      } catch (at) {
        return void aj(at);
      }
      ap.done ? ai(aq) : Promise.resolve(aq).then(ak, al);
    }
  }
  function i(ah) {
    return function () {
      var ak = this;
      var al = arguments;
      return new Promise(function (am, an) {
        var ap = ah.apply(ak, al);
        function aq(as) {
          {
            h(ap, am, an, aq, ar, "next", as);
          }
        }
        function ar(as) {
          {
            h(ap, am, an, aq, ar, "throw", as);
          }
        }
        aq(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "";
  var k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var l = undefined;
  var m = "";
  var n = "64";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "10019";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "FR*r!isE5W";
  function C() {
    {
      return D.apply(this, arguments);
    }
  }
  function D() {
    D = i(g().mark(function ai() {
      {
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
        var aS;
        var aT;
        var aU;
        var aV;
        var aW;
        var aX;
        return g().wrap(function (aZ) {
          {
            for (;;) {
              switch (aZ.prev = aZ.next) {
                case 0:
                  if (j) {
                    {
                      aZ.next = 5;
                      break;
                    }
                  }
                  console.log("先去boxjs填写账号密码");
                  aZ.next = 4;
                  return af("先去boxjs填写账号密码");
                case 4:
                  return aZ.abrupt("return");
                case 5:
                  aZ.next = 7;
                  return ab();
                case 7:
                  l = aZ.sent;
                  ak = j.split(" ");
                  al = c(ak);
                  aZ.prev = 10;
                  al.s();
                case 12:
                  if ((am = al.n()).done) {
                    {
                      aZ.next = 183;
                      break;
                    }
                  }
                  an = am.value;
                  console.log("随机生成UA");
                  ao = a9();
                  o = ao.ua;
                  p = ao.commonUa;
                  q = ao.uuid;
                  console.log(o);
                  console.log(p);
                  u = an.split("&")[0];
                  v = an.split("&")[1];
                  console.log("用户：".concat(u, "开始任务"));
                  console.log("获取sessionId");
                  aZ.next = 27;
                  return K("/api/account/init");
                case 27:
                  ap = aZ.sent;
                  x = ap.data.session.id;
                  console.log(x);
                  console.log("获取signature_key");
                  aZ.next = 33;
                  return E("/web/init?client_id=".concat(w));
                case 33:
                  aq = aZ.sent;
                  m = aq.data.client.signature_key;
                  console.log(m);
                  console.log("获取code");
                  aZ.next = 39;
                  return G("/web/oauth/credential_auth");
                case 39:
                  if (ar = aZ.sent, ar.data) {
                    {
                      aZ.next = 43;
                      break;
                    }
                  }
                  console.log(ar.message);
                  return aZ.abrupt("continue", 181);
                case 43:
                  as = ar.data.authorization_code.code;
                  console.log(as);
                  console.log("登录");
                  aZ.next = 48;
                  return K("/api/zbtxz/login", "check_token=&code=".concat(as, "&token=&type=-1&union_id="));
                case 48:
                  at = aZ.sent;
                  console.log("登录成功");
                  t = at.data.session.account_id;
                  x = at.data.session.id;
                  aZ.next = 54;
                  return I("/api/app_feature_switch/list");
                case 54:
                  au = aZ.sent;
                  console.log("进入app：".concat(au.message));
                  console.log("————————————");
                  console.log("每日签到");
                  aZ.next = 60;
                  return O("/auth/userLogin", {
                    accountId: t,
                    sessionId: x,
                    q: "bcuABCdvYzEJodimBMvIjKjDQ5CiVGO2yL2Tm66bWYU=",
                    tenantCode: "xsb_wangchao"
                  });
                case 60:
                  av = aZ.sent;
                  y = av.data.token;
                  aZ.next = 64;
                  return M("/activity/signin?deviceId=".concat(q, "&sessionId=").concat(x));
                case 64:
                  aw = aZ.sent;
                  console.log("签到结果：".concat(aw.message));
                  aZ.next = 68;
                  return M("/activity/getFixSigninInfo");
                case 68:
                  if (ax = aZ.sent, !(ax.data.fixSigninDate.length > 0)) {
                    {
                      aZ.next = 78;
                      break;
                    }
                  }
                  ay = "";
                  az = c(ax.data.fixSigninDate);
                  try {
                    {
                      for (az.s(); !(aA = az.n()).done;) {
                        aB = aA.value;
                        ay += aB + ",";
                      }
                    }
                  } catch (b7) {
                    {
                      az.e(b7);
                    }
                  } finally {
                    az.f();
                  }
                  ay = ay.substring(0, ay.length - 1);
                  aZ.next = 76;
                  return M("/activity/fixSignin?deviceId=".concat(q, "&sessionId=").concat(x, "&fixSigninDate=").concat(ay));
                case 76:
                  aC = aZ.sent;
                  console.log("补签结果：".concat(aC.message));
                case 78:
                  aZ.next = 80;
                  return M("/activity/getUserActivityInfo?startTime=2025-03-15&endTime=2029-03-31&deviceId=".concat(q, "&ytoken="));
                case 80:
                  aD = aZ.sent;
                  aE = c(aD.data.h5ActivityExtraRewardList);
                  aZ.prev = 82;
                  aE.s();
                case 84:
                  if ((aF = aE.n()).done) {
                    {
                      aZ.next = 111;
                      break;
                    }
                  }
                  if (aG = aF.value, "已完成" == aG.completionDegree) {
                    {
                      aZ.next = 88;
                      break;
                    }
                  }
                  return aZ.abrupt("continue", 109);
                case 88:
                  aZ.next = 90;
                  return M("/activity/getLotteryLink?rewardId=".concat(aG.rewardId, "&type=").concat(aG.signinType));
                case 90:
                  aH = aZ.sent;
                  aZ.next = 93;
                  return S("/api/auth/userLogin", {
                    accountId: t,
                    sessionId: x,
                    q: decodeURIComponent(aH.data.split("q=")[1]),
                    tenantCode: "xsb_wangchao"
                  });
                case 93:
                  aI = aZ.sent;
                  z = aI.data.token;
                  aJ = aI.data.thirdId;
                  aZ.next = 98;
                  return Q("/activity/lottery/frontPageNum?activityId=".concat(aJ));
                case 98:
                  aK = aZ.sent;
                  console.log("抽奖id：".concat(aJ, " 剩余抽奖次数：").concat(aK.data.remainPrizeNum));
                  aL = 0;
                case 101:
                  if (!(aL < aK.data.remainPrizeNum)) {
                    {
                      aZ.next = 109;
                      break;
                    }
                  }
                  var b1 = {
                    activityId: aJ,
                    clientId: q
                  };
                  aZ.next = 104;
                  return S("/h5/activity/lottery/userActivityLottery", b1);
                case 104:
                  aM = aZ.sent;
                  1 == aM.data.isPrize ? (console.log("抽奖获得：".concat(aM.data.prizeName)), A += "用户：".concat(u, " 抽奖获得：").concat(aM.data.prizeName, "\n")) : 0 == aM.data.isPrize ? console.log("未中奖") : console.log(JSON.stringify(aM));
                case 106:
                  aL++;
                  aZ.next = 101;
                  break;
                case 109:
                  aZ.next = 84;
                  break;
                case 111:
                  aZ.next = 116;
                  break;
                case 113:
                  aZ.prev = 113;
                  aZ.t0 = aZ.catch(82);
                  aE.e(aZ.t0);
                case 116:
                  aZ.prev = 116;
                  aE.f();
                  return aZ.finish(116);
                case 119:
                  console.log("————————————");
                  console.log("阅读抽奖");
                  r = "";
                  console.log("获取登录cookie");
                  aZ.next = 125;
                  return U("/prod-api/user-read/app/login?id=".concat(t, "&sessionId=").concat(x, "&deviceId=").concat(q));
                case 125:
                  if (r = aZ.sent, r) {
                    {
                      aZ.next = 128;
                      break;
                    }
                  }
                  return aZ.abrupt("continue", 181);
                case 128:
                  console.log(r);
                  aZ.next = 131;
                  return W("/prod-api/user-read/list/".concat(a8()));
                case 131:
                  aN = aZ.sent;
                  aO = c(aN.data.articleIsReadList);
                  aZ.prev = 133;
                  aO.s();
                case 135:
                  if ((aP = aO.n()).done) {
                    {
                      aZ.next = 151;
                      break;
                    }
                  }
                  aQ = aP.value;
                  console.log("文章：".concat(aQ.title));
                  aZ.next = 140;
                  return I("/api/article/detail?id=".concat(aQ.newsId));
                case 140:
                  aZ.sent;
                  aZ.next = 143;
                  return I("/api/article/read_time?channel_article_id=".concat(aQ.newsId, "&is_end=true&read_time=7934"));
                case 143:
                  aZ.sent;
                  aR = JSON.stringify({
                    timestamp: Date.now(),
                    articleId: aQ.id,
                    accountId: t
                  });
                  aZ.next = 147;
                  return W("/prod-api/already-read/article/new?signature=".concat(a4(aR)), aR);
                case 147:
                  aS = aZ.sent;
                  console.log("阅读：".concat(aS.msg));
                case 149:
                  aZ.next = 135;
                  break;
                case 151:
                  aZ.next = 156;
                  break;
                case 153:
                  aZ.prev = 153;
                  aZ.t1 = aZ.catch(133);
                  aO.e(aZ.t1);
                case 156:
                  aZ.prev = 156;
                  aO.f();
                  return aZ.finish(156);
                case 159:
                  aZ.next = 161;
                  return W("/prod-api/user-read-count/count/".concat(a8()));
                case 161:
                  if (aT = aZ.sent, console.log("剩余抽奖次数：".concat(aT.data)), !(aT.data > 0)) {
                    {
                      aZ.next = 181;
                      break;
                    }
                  }
                  s = "";
                  aZ.next = 167;
                  return Y("/tzrb/user/loginWC?accountId=".concat(t, "&sessionId=").concat(x));
                case 167:
                  s = aZ.sent;
                  console.log("获取抽奖cookie");
                  console.log(s);
                  aZ.next = 172;
                  return a0("/tzrb/awardUpgrade/list?activityId=67");
                case 172:
                  aU = aZ.sent;
                  aV = aU.data;
                  aW = g().mark(function bg() {
                    {
                      var bi;
                      var bj;
                      return g().wrap(function (bk) {
                        {
                          for (;;) {
                            switch (bk.prev = bk.next) {
                              case 0:
                                bk.next = 2;
                                return a2("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                              case 2:
                                bi = bk.sent;
                                bj = aV.findIndex(function (bm) {
                                  return bm.id == bi.data;
                                });
                                -1 != bj ? (console.log("抽奖获得：".concat(aV[bj].title)), A += "用户：".concat(u, " 抽奖获得：").concat(aV[bj].title, "\n")) : console.log(JSON.stringify(bi));
                              case 5:
                              case "end":
                                return bk.stop();
                            }
                          }
                        }
                      }, bg);
                    }
                  });
                  aX = 0;
                case 176:
                  if (!(aX < aT.data)) {
                    {
                      aZ.next = 181;
                      break;
                    }
                  }
                  return aZ.delegateYield(aW(), "t2", 178);
                case 178:
                  aX++;
                  aZ.next = 176;
                  break;
                case 181:
                  aZ.next = 12;
                  break;
                case 183:
                  aZ.next = 188;
                  break;
                case 185:
                  aZ.prev = 185;
                  aZ.t3 = aZ.catch(10);
                  al.e(aZ.t3);
                case 188:
                  aZ.prev = 188;
                  al.f();
                  return aZ.finish(188);
                case 191:
                  if (!A) {
                    {
                      aZ.next = 194;
                      break;
                    }
                  }
                  aZ.next = 194;
                  return af(A);
                case 194:
                case "end":
                  return aZ.stop();
              }
            }
          }
        }, ai, null, [[10, 185, 188, 191], [82, 113, 116, 119], [133, 153, 156, 159]]);
      }
    }));
    return D.apply(this, arguments);
  }
  function E(ah) {
    {
      return F.apply(this, arguments);
    }
  }
  function F() {
    F = i(g().mark(function aj(ak) {
      {
        return g().wrap(function (am) {
          {
            for (;;) {
              switch (am.prev = am.next) {
                case 0:
                  return am.abrupt("return", new Promise(function (ap) {
                    {
                      var ar = {
                        url: "https://passport.tmuyun.com".concat(ak),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": a7(),
                          "Accept-Encoding": "gzip",
                          "user-agent": o
                        }
                      };
                      $.get(ar, function () {
                        {
                          var au = i(g().mark(function aw(ax, ay, az) {
                            return g().wrap(function (aC) {
                              {
                                for (;;) {
                                  switch (aC.prev = aC.next) {
                                    case 0:
                                      try {
                                        {
                                          ax ? (console.log("".concat(JSON.stringify(ax))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ap(JSON.parse(az));
                                        }
                                      } catch (aF) {
                                        {
                                          $.logErr(aF, ay);
                                        }
                                      } finally {
                                        {
                                          ap();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return aC.stop();
                                  }
                                }
                              }
                            }, aw);
                          }));
                          return function (ax, ay, az) {
                            {
                              return au.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return am.stop();
              }
            }
          }
        }, aj);
      }
    }));
    return F.apply(this, arguments);
  }
  function G(ah) {
    {
      return H.apply(this, arguments);
    }
  }
  function H() {
    {
      H = i(g().mark(function aj(ak) {
        {
          var am;
          return g().wrap(function (an) {
            {
              for (;;) {
                switch (an.prev = an.next) {
                  case 0:
                    am = a5();
                    return an.abrupt("return", new Promise(function (ap) {
                      {
                        var aq = {
                          url: "https://passport.tmuyun.com".concat(ak),
                          headers: {
                            Connection: "Keep-Alive",
                            "X-REQUEST-ID": am.uuid,
                            "X-SIGNATURE": am.signature,
                            "Cache-Control": "no-cache",
                            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                            "Accept-Encoding": "gzip",
                            "user-agent": o
                          },
                          body: am.body
                        };
                        $.post(aq, function () {
                          {
                            var at = i(g().mark(function au(av, aw, ax) {
                              return g().wrap(function (aA) {
                                {
                                  for (;;) {
                                    switch (aA.prev = aA.next) {
                                      case 0:
                                        try {
                                          {
                                            av ? (console.log("".concat(JSON.stringify(av))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ap(JSON.parse(ax));
                                          }
                                        } catch (aD) {
                                          $.logErr(aD, aw);
                                        } finally {
                                          {
                                            ap();
                                          }
                                        }
                                      case 1:
                                      case "end":
                                        return aA.stop();
                                    }
                                  }
                                }
                              }, au);
                            }));
                            return function (av, aw, ax) {
                              return at.apply(this, arguments);
                            };
                          }
                        }());
                      }
                    }));
                  case 2:
                  case "end":
                    return an.stop();
                }
              }
            }
          }, aj);
        }
      }));
      return H.apply(this, arguments);
    }
  }
  function I(ah) {
    {
      return J.apply(this, arguments);
    }
  }
  function J() {
    J = i(g().mark(function ai(aj) {
      var al;
      return g().wrap(function (am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              al = a6(aj);
              return am.abrupt("return", new Promise(function (ao) {
                var ap = {
                  url: "https://vapp.taizhou.com.cn".concat(aj),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": al.time,
                    "X-SESSION-ID": x,
                    "X-REQUEST-ID": al.uuid,
                    "X-SIGNATURE": al.signature,
                    "X-TENANT-ID": n,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": p
                  }
                };
                $.get(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (aw) {
                      {
                        for (;;) {
                          switch (aw.prev = aw.next) {
                            case 0:
                              if (aw.prev = 0, !at) {
                                {
                                  aw.next = 6;
                                  break;
                                }
                              }
                              console.log("".concat(JSON.stringify(at)));
                              console.log("".concat($.name, " API请求失败，请检查网路重试"));
                              aw.next = 9;
                              break;
                            case 6:
                              aw.next = 8;
                              return $.wait(2000);
                            case 8:
                              ao(JSON.parse(av));
                            case 9:
                              aw.next = 14;
                              break;
                            case 11:
                              aw.prev = 11;
                              aw.t0 = aw.catch(0);
                              $.logErr(aw.t0, au);
                            case 14:
                              aw.prev = 14;
                              ao();
                              return aw.finish(14);
                            case 17:
                            case "end":
                              return aw.stop();
                          }
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return am.stop();
          }
        }
      }, ai);
    }));
    return J.apply(this, arguments);
  }
  function K(ah, ai) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ai(aj, ak) {
      var am;
      return g().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              am = a6(aj);
              return an.abrupt("return", new Promise(function (ap) {
                var ar = {
                  url: "https://vapp.taizhou.com.cn".concat(aj),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": am.time,
                    "X-SESSION-ID": x,
                    "X-REQUEST-ID": am.uuid,
                    "X-SIGNATURE": am.signature,
                    "X-TENANT-ID": n,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": p
                  },
                  body: ak
                };
                $.post(ar, function () {
                  var at = i(g().mark(function au(av, aw, ax) {
                    return g().wrap(function (ay) {
                      for (;;) {
                        switch (ay.prev = ay.next) {
                          case 0:
                            if (ay.prev = 0, !av) {
                              ay.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(av)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ay.next = 9;
                            break;
                          case 6:
                            ay.next = 8;
                            return $.wait(2000);
                          case 8:
                            ap(JSON.parse(ax));
                          case 9:
                            ay.next = 14;
                            break;
                          case 11:
                            ay.prev = 11;
                            ay.t0 = ay.catch(0);
                            $.logErr(ay.t0, aw);
                          case 14:
                            ay.prev = 14;
                            ap();
                            return ay.finish(14);
                          case 17:
                          case "end":
                            return ay.stop();
                        }
                      }
                    }, au, null, [[0, 11, 14, 17]]);
                  }));
                  return function (av, aw, ax) {
                    return at.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return an.stop();
          }
        }
      }, ai);
    }));
    return L.apply(this, arguments);
  }
  function M(ah) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ah(ai) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(ai),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: y,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  }
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            am();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ah);
    }));
    return N.apply(this, arguments);
  }
  function O(ah, ai) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ai(aj, ak) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ap = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(aj),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: y,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  },
                  body: JSON.stringify(ak)
                };
                $.post(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !at) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 9;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(av));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, au);
                          case 14:
                            aw.prev = 14;
                            an();
                            return aw.finish(14);
                          case 17:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ai);
    }));
    return P.apply(this, arguments);
  }
  function Q(ah) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ai(aj) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  accept: "application/json, text/plain, */*",
                  authorization: z,
                  "sec-fetch-site": "sec-fetch-site",
                  "accept-language": "zh-CN,zh-Hans;q=0.9",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "user-agent": p
                };
                var ao = {
                  url: "https://act.tmlyun.com/activity-api/lottery/h5".concat(aj),
                  headers: an
                };
                $.get(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ai);
    }));
    return R.apply(this, arguments);
  }
  function S(ah, ai) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ai(aj, ak) {
      return g().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              return an.abrupt("return", new Promise(function (ap) {
                var aq = {
                  url: "https://act.tmlyun.com/activity-api/lottery".concat(aj),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: z,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  },
                  body: JSON.stringify(ak)
                };
                $.post(aq, function () {
                  var as = i(g().mark(function at(au, av, aw) {
                    return g().wrap(function (ay) {
                      for (;;) {
                        switch (ay.prev = ay.next) {
                          case 0:
                            if (ay.prev = 0, !au) {
                              ay.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ay.next = 9;
                            break;
                          case 6:
                            ay.next = 8;
                            return $.wait(2000);
                          case 8:
                            ap(JSON.parse(aw));
                          case 9:
                            ay.next = 14;
                            break;
                          case 11:
                            ay.prev = 11;
                            ay.t0 = ay.catch(0);
                            $.logErr(ay.t0, av);
                          case 14:
                            ay.prev = 14;
                            ap();
                            return ay.finish(14);
                          case 17:
                          case "end":
                            return ay.stop();
                        }
                      }
                    }, at, null, [[0, 11, 14, 17]]);
                  }));
                  return function (au, av, aw) {
                    return as.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return an.stop();
          }
        }
      }, ai);
    }));
    return T.apply(this, arguments);
  }
  function U(ah) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ai(aj) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  Cookie: r,
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var ap = {
                  url: "https://xmt.taizhou.com.cn".concat(aj),
                  headers: ao
                };
                $.get(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !at) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 16;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(av).code) {
                              aw.next = 13;
                              break;
                            }
                            console.log(JSON.parse(av).msg);
                            A += "用户：".concat(u, " ").concat(JSON.parse(av).msg, "\n");
                            am("");
                            return aw.abrupt("return");
                          case 13:
                            r = $.isNode() ? au.headers["set-cookie"][0] : au.headers["set-cookie"] || au.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            am(r);
                          case 16:
                            aw.next = 21;
                            break;
                          case 18:
                            aw.prev = 18;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, au);
                          case 21:
                            aw.prev = 21;
                            am();
                            return aw.finish(21);
                          case 24:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, as, null, [[0, 18, 21, 24]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ai);
    }));
    return V.apply(this, arguments);
  }
  function W(ah) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function ai(aj) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ap = {
                  url: "https://xmt.taizhou.com.cn".concat(aj),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ap, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !as) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 9;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(au));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, at);
                          case 14:
                            aw.prev = 14;
                            an();
                            return aw.finish(14);
                          case 17:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ai);
    }));
    return X.apply(this, arguments);
  }
  function Y(ah) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function ai(aj) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://srv-app.taizhou.com.cn".concat(aj),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !as) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 11;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            s = $.isNode() ? at.headers["set-cookie"][0] : at.headers["set-cookie"] || at.headers["Set-Cookie"];
                            s = s.split(";")[0];
                            am(s);
                          case 11:
                            ax.next = 16;
                            break;
                          case 13:
                            ax.prev = 13;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, at);
                          case 16:
                            ax.prev = 16;
                            am();
                            return ax.finish(16);
                          case 19:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, ar, null, [[0, 13, 16, 19]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ai);
    }));
    return Z.apply(this, arguments);
  }
  function a0(ah) {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function aj(ak) {
      return g().wrap(function (am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              return am.abrupt("return", new Promise(function (an) {
                var ap = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  cookie: s,
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var aq = {
                  url: "https://srv-app.taizhou.com.cn".concat(ak),
                  headers: ap
                };
                $.get(aq, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !at) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 9;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(av));
                          case 9:
                            ax.next = 14;
                            break;
                          case 11:
                            ax.prev = 11;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, au);
                          case 14:
                            ax.prev = 14;
                            an();
                            return ax.finish(14);
                          case 17:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return am.stop();
          }
        }
      }, aj);
    }));
    return a1.apply(this, arguments);
  }
  function a2(ah, ai) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function ai(aj, ak) {
      return g().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              return an.abrupt("return", new Promise(function (ap) {
                var aq = {
                  url: "https://srv-app.taizhou.com.cn".concat(aj),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: ak
                };
                $.post(aq, function () {
                  var as = i(g().mark(function at(au, av, aw) {
                    return g().wrap(function (ay) {
                      for (;;) {
                        switch (ay.prev = ay.next) {
                          case 0:
                            if (ay.prev = 0, !au) {
                              ay.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ay.next = 9;
                            break;
                          case 6:
                            ay.next = 8;
                            return $.wait(2000);
                          case 8:
                            ap(JSON.parse(aw));
                          case 9:
                            ay.next = 14;
                            break;
                          case 11:
                            ay.prev = 11;
                            ay.t0 = ay.catch(0);
                            $.logErr(ay.t0, av);
                          case 14:
                            ay.prev = 14;
                            ap();
                            return ay.finish(14);
                          case 17:
                          case "end":
                            return ay.stop();
                        }
                      }
                    }, at, null, [[0, 11, 14, 17]]);
                  }));
                  return function (au, av, aw) {
                    return as.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return an.stop();
          }
        }
      }, ai);
    }));
    return a3.apply(this, arguments);
  }
  function a4(ah) {
    var ai = l.loadSM2();
    return ai.doEncrypt(ah, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function a5() {
    var am = new (l.loadJSEncrypt())();
    am.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = am.encrypt(v);
    var aj = a7();
    var ak = "client_id=".concat(w, "&password=").concat(v, "&phone_number=").concat(u);
    var al = "post%%/web/oauth/credential_auth?".concat(ak, "%%").concat(aj, "%%");
    ak = "client_id=".concat(w, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = l.createCryptoJS();
    var ao = CryptoJS.HmacSHA256(al, m);
    var ap = CryptoJS.enc.Hex.stringify(ao);
    var an = {
      uuid: aj,
      signature: ap,
      body: ak
    };
    return an;
  }
  function a6(ah) {
    var ai = a7();
    var aj = Date.now();
    ah.indexOf("?") > 0 && (ah = ah.substring(0, ah.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ak = CryptoJS.SHA256("".concat(ah, "&&").concat(x, "&&").concat(ai, "&&").concat(aj, "&&").concat(B, "&&").concat(n)).toString();
    var al = {
      uuid: ai,
      time: aj,
      signature: ak
    };
    return al;
  }
  function a7() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ah) {
      var ai = 16 * Math.random() | 0;
      var aj = "x" === ah ? ai : 3 & ai | 8;
      return aj.toString(16);
    });
  }
  function a8() {
    var ah = new Date();
    var ai = ah.getFullYear();
    var aj = String(ah.getMonth() + 1).padStart(2, "0");
    var ak = String(ah.getDate()).padStart(2, "0");
    return "".concat(ai).concat(aj).concat(ak);
  }
  function a9() {
    var ah = "6.0.2";
    var ai = a7();
    var aj = aa(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ak = "Xiaomi " + aj;
    var al = "Android";
    var am = "".concat(al.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(ah, ";1.0;null;").concat(aj);
    var an = "".concat(ah, ";").concat(ai, ";").concat(ak, ";").concat(al, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0");
    var ao = {
      ua: am,
      commonUa: an,
      uuid: ai
    };
    return ao;
  }
  function aa(ah) {
    return ah[Math.floor(Math.random() * ah.length)];
  }
  function ab() {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = i(g().mark(function ai() {
      var ak;
      return g().wrap(function al(am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              if (ak = $.getdata("Utils_Code") || "", !ak || !Object.keys(ak).length) {
                am.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ak);
              return am.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return am.abrupt("return", new Promise(function () {
                var aq = i(g().mark(function ar(as) {
                  return g().wrap(function au(av) {
                    for (;;) {
                      switch (av.prev = av.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aw) {
                            $.setdata(aw, "Utils_Code");
                            eval(aw);
                            console.log("✅ Utils加载成功, 请继续");
                            as(creatUtils());
                          });
                        case 1:
                        case "end":
                          return av.stop();
                      }
                    }
                  }, ar);
                }));
                return function (as) {
                  return aq.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return am.stop();
          }
        }
      }, ai);
    }));
    return ac.apply(this, arguments);
  }
  function ad() {
    return ae.apply(this, arguments);
  }
  function ae() {
    ae = i(g().mark(function ai() {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(at).notice);
                            } catch (av) {
                              $.logErr(av, as);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, ai);
    }));
    return ae.apply(this, arguments);
  }
  function af(ah) {
    return ag.apply(this, arguments);
  }
  function ag() {
    ag = i(g().mark(function ah(ai) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              if (!$.isNode()) {
                aj.next = 5;
                break;
              }
              aj.next = 3;
              return notify.sendNotify($.name, ai);
            case 3:
              aj.next = 6;
              break;
            case 5:
              $.msg($.name, "", ai);
            case 6:
            case "end":
              return aj.stop();
          }
        }
      }, ah);
    }));
    return ag.apply(this, arguments);
  }
  i(g().mark(function ah() {
    return g().wrap(function (aj) {
      for (;;) {
        switch (aj.prev = aj.next) {
          case 0:
            aj.next = 2;
            return ad();
          case 2:
            aj.next = 4;
            return C();
          case 4:
          case "end":
            return aj.stop();
        }
      }
    }, ah);
  }))().catch(function (ai) {
    $.log(ai);
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