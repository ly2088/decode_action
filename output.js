//Sun Mar 02 2025 14:43:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
var ii1i1i1I = [],
  iililIi = [];
let iIllIi1 = bucketGet("cloud", "username"),
  i11lI1ll = bucketGet("cloud", "password");
Debug(iIllIi1 + ":" + i11lI1ll);
let i11lI1li = bucketGet("otto", "assets_proxy_address");
Debug(i11lI1li);
request({
  "method": "get",
  "url": i11lI1li,
  "timeout": 10000
}, function (I1I1I1I, IilI1ii1, i1II11II, IilIl1lI) {
  !I1I1I1I && (i11lI1li = IilIl1lI);
});
Debug(i11lI1li);
var ii1IiIi = "";
function l1IiIii1(il111lII) {
  var i111ilil = il111lII.getFullYear(),
    iIllIliI = il111lII.getMonth(),
    IilIl1il = il111lII.getDate();
  return i111ilil + "-" + (iIllIliI + 1 > 9 ? iIllIliI + 1 : "0" + (iIllIliI + 1)) + "-" + (IilIl1il > 9 ? IilIl1il : "0" + IilIl1il);
}
function ii1IiIl(llliI11i, llIiiiIl) {
  Debug("总豆查询");
  let l11I1iIl = escape(JSON.stringify({
      "pageSize": "20",
      "page": llIiiiIl.toString()
    })),
    Il1Iil11 = {
      "proxyAddr": i11lI1li,
      "url": "https://api.m.jd.com/client.action?functionId=getJingBeanBalanceDetail",
      "method": "post",
      "dataType": "json",
      "body": "body=" + l11I1iIl + "&appid=ld",
      "headers": {
        "User-Agent": ii1IiIi,
        "Host": "api.m.jd.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": llliI11i
      }
    },
    IilI1iil = request(Il1Iil11);
  return IilI1iil;
}
function IIl1l1ll(iIIllIIl, ii1IIili) {
  body = encodeURIComponent(JSON.stringify({
    "pageSize": "20",
    "page": ii1IIili.toString()
  }));
  data = request({
    "proxyAddr": i11lI1li,
    "url": "https://bean.m.jd.com/beanDetail/detail.json?page=" + ii1IIili,
    "body": "body=" + body + "&appid=ld",
    "headers": {
      "User-Agent": ii1IiIi,
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": iIIllIIl
    },
    "timeout": 10000,
    "json": true
  });
  return data;
}
function il1iIii1(iIIllIII, iilil1i) {
  Debug("统计收入");
  var i111ili1 = 0,
    lliIillI = 0,
    l1iiI11I = 0,
    II111II1 = 0,
    lIIilIi = new Date(),
    I11i1ilI = new Date();
  I11i1ilI.setDate(lIIilIi.getDate() - 1);
  strToday = l1IiIii1(lIIilIi);
  strYester = l1IiIii1(I11i1ilI);
  page = 1;
  while (true) {
    data = IIl1l1ll(iIIllIII, page);
    exitWhile = false;
    if (data) {
      obj = data;
      try {
        {
          if (!data.jingDetailList) {
            data = {
              "jingDetailList": ii1IiIl(iIIllIII, page).detailList
            };
          }
        }
      } catch (IiIl11Ii) {
        return;
      }
      for (i = 0; i < data.jingDetailList.length; i++) {
        dateStr = data.jingDetailList[i].date;
        if (dateStr.slice(0, 10) == strToday) {
          {
            amount = parseInt(data.jingDetailList[i].amount);
            if (amount > 0) i111ili1 += amount;else {
              lliIillI += amount;
            }
          }
        } else {
          if (dateStr.slice(0, 10) == strYester) {
            amount = parseInt(data.jingDetailList[i].amount);
            if (amount > 0) l1iiI11I += amount;else {
              II111II1 += amount;
            }
          } else {
            exitWhile = true;
            break;
          }
        }
      }
    } else break;
    if (exitWhile) {
      break;
    }
    page++;
  }
  iililIi.push("jdicons/toin.jpg");
  ii1i1i1I.push("【今日收入】" + i111ili1 + "(支出" + lliIillI + ")");
  iililIi.push("jdicons/yein.jpg");
  ii1i1i1I.push("【昨日收入】" + l1iiI11I + "(支出" + II111II1 + ")");
}
function IIl1l1li(iil1I1l, iIililil) {
  request({
    "proxyAddr": i11lI1li,
    "url": "https://api.m.jd.com/client.action?functionId=myhongbao_getUsableHongBaoList&body=%7B%22appId%22%3A%22appHongBao%22%2C%22appToken%22%3A%22apphongbao_token%22%2C%22platformId%22%3A%22appHongBao%22%2C%22platformToken%22%3A%22apphongbao_token%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22country%22%3A%22cn%22%2C%22childActivityId%22%3A%22-1%22%2C%22childActiveName%22%3A%22-1%22%2C%22childActivityTime%22%3A%22-1%22%2C%22childActivityUrl%22%3A%22-1%22%2C%22openId%22%3A%22-1%22%2C%22activityArea%22%3A%22-1%22%2C%22applicantErp%22%3A%22-1%22%2C%22eid%22%3A%22-1%22%2C%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22shshshfpb%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22activityType%22%3A%221%22%2C%22isRvc%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22extend%22%3A%22-1%22%2C%22organization%22%3A%22JD%22%7D&appid=JDReactMyRedEnvelope&client=apple&clientVersion=7.0.0",
    "headers": {
      "Cookie": iil1I1l,
      "Host": "api.m.jd.com",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": "https://h5.m.jd.com",
      "User-Agent": ii1IiIi,
      "Accept-Language": "zh-Hans-CN;q=1"
    },
    "method": "post",
    "json": true
  }, function (IIiIIlI, liIIIIl1, ii1Iil1, IIl11i1i) {
    Debug("检查红包数据是否有错误：" + IIiIIlI);
    if (!IIiIIlI) {
      {
        data = IIl11i1i;
        jxRed = 0;
        jsRed = 0;
        jdRed = 0;
        jdhRed = 0;
        jdwxRed = 0;
        jdGeneralRed = 0;
        jxRedExpire = 0;
        jsRedExpire = 0;
        jdRedExpire = 0;
        jdhRedExpire = 0;
        jdwxRedExpire = 0;
        jdGeneralRedExpire = 0;
        let I1I1iI11 = new Date();
        I1I1iI11.setDate(I1I1iI11.getDate() + 1);
        I1I1iI11.setHours(0, 0, 0, 0);
        I1I1iI11 = parseInt((I1I1iI11 - 1) / 1000) * 1000;
        for (let iIllIII of data.hongBaoList || []) {
          if (iIllIII.orgLimitStr) {
            {
              if (iIllIII.orgLimitStr.includes("京喜") && !iIllIII.orgLimitStr.includes("特价")) {
                jxRed += parseFloat(iIllIII.balance);
                iIllIII.endTime === I1I1iI11 && (jxRedExpire += parseFloat(iIllIII.balance));
                continue;
              } else {
                if (iIllIII.orgLimitStr.includes("购物小程序")) {
                  {
                    jdwxRed += parseFloat(iIllIII.balance);
                    iIllIII.endTime === I1I1iI11 && (jdwxRedExpire += parseFloat(iIllIII.balance));
                    continue;
                  }
                } else {
                  if (iIllIII.orgLimitStr.includes("京东商城")) {
                    {
                      jdRed += parseFloat(iIllIII.balance);
                      iIllIII.endTime === I1I1iI11 && (jdRedExpire += parseFloat(iIllIII.balance));
                      continue;
                    }
                  } else {
                    if (iIllIII.orgLimitStr.includes("极速") || iIllIII.orgLimitStr.includes("京东特价") || iIllIII.orgLimitStr.includes("京喜特价")) {
                      jsRed += parseFloat(iIllIII.balance);
                      iIllIII.endTime === I1I1iI11 && (jsRedExpire += parseFloat(iIllIII.balance));
                      continue;
                    } else {
                      if (iIllIII.orgLimitStr && iIllIII.orgLimitStr.includes("京东健康")) {
                        {
                          jdhRed += parseFloat(iIllIII.balance);
                          iIllIII.endTime === I1I1iI11 && (jdhRedExpire += parseFloat(iIllIII.balance));
                          continue;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          jdGeneralRed += parseFloat(iIllIII.balance);
          iIllIII.endTime === I1I1iI11 && (jdGeneralRedExpire += parseFloat(iIllIII.balance));
        }
        balance = (jxRed + jsRed + jdRed + jdhRed + jdwxRed + jdGeneralRed).toFixed(2);
        jxRed = jxRed.toFixed(2);
        jsRed = jsRed.toFixed(2);
        jdRed = jdRed.toFixed(2);
        jdhRed = jdhRed.toFixed(2);
        jdwxRed = jdwxRed.toFixed(2);
        jdGeneralRed = jdGeneralRed.toFixed(2);
        expiredBalance = (jxRedExpire + jsRedExpire + jdRedExpire + jdhRedExpire + jdwxRedExpire + jdGeneralRedExpire).toFixed(2);
        iililIi.push("jdicons/jdhb.jpg");
        if (balance >= 50) sandText("【红包总额】大于50元请及时花掉以免过期！");else {
          if (balance >= 12) sandText("【红包总额】大于12元请及时花掉以免过期！");else jdGeneralRed + jdRed > 5 && sandText("【可用红包】大于5元，可以完成京东果园1分钱限时下单任务！");
        }
        ii1i1i1I.push("【红包总额】" + balance + "元 (总过期" + expiredBalance + "元)");
        jxRed > 0 && (iililIi.push("jdicons/jdhb.jpg"), ii1i1i1I.push("【京喜红包】" + jxRed + "元 (将过期" + jxRedExpire.toFixed(2) + "元)"));
        jsRed > 0 && (iililIi.push("jdicons/jdhb.jpg"), ii1i1i1I.push("【极速红包】" + jsRed + "元 (将过期" + jsRedExpire.toFixed(2) + "元)"));
        jdRed > 0 && (iililIi.push("jdicons/jdhb.jpg"), ii1i1i1I.push("【京东红包】" + jdRed + "元 (将过期" + jdRedExpire.toFixed(2) + "元)"));
        jdhRed > 0 && (iililIi.push("jdicons/jdhb.jpg"), ii1i1i1I.push("【健康红包】" + jdhRed + "元 (将过期" + jdhRedExpire.toFixed(2) + "元)"));
        jdwxRed > 0 && (iililIi.push("jdicons/jdhb.jpg"), ii1i1i1I.push("【微小程序】" + jdwxRed + "元 (将过期" + jdwxRedExpire.toFixed(2) + "元)"));
        jdGeneralRed > 0 && (iililIi.push("jdicons/jdhb.jpg"), ii1i1i1I.push("【平台通用】" + jdGeneralRed + "元 (将过期" + jdGeneralRedExpire.toFixed(2) + "元)"));
      }
    } else iililIi.push("jdicons/jdhb.jpg"), ii1i1i1I.push("【红包数据】返回空数据");
  });
}
function ii1i1i1l(iIllII1, Ili1i1iI) {
  let l1I1I11I = ii1IiIi,
    i11ilIlI = request({
      "proxyAddr": i11lI1li,
      "url": "https://api.m.jd.com/api?functionId=turnHappyHome",
      "body": "functionId=turnHappyHome&body={\"linkId\":\"-EMTEb8A0id6HvUY2qV7xQ\"}&t=1728825040098&appid=activities_platform&client=android&clientVersion=13.2.2&h5st=null",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "cookie": iIllII1,
        "User-Agent": l1I1I11I,
        "Origin": "https://pro.m.jd.com",
        "Referer": "https://pro.m.jd.com/"
      },
      "method": "post",
      "dataType": "json",
      "timeOut": 3000
    });
  if (i11ilIlI != null && (i11ilIlI.code === 0 || i11ilIlI.code === "0")) {
    const liI1i1ll = i11ilIlI.data.usable || 0;
    iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-688506-6ca25aca-c0a6-44aa-9e4b-9bcb1c56d3fe.jpg");
    ii1i1i1I.push("【玩一玩奖票】" + liI1i1ll + "奖票");
  } else iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-688506-6ca25aca-c0a6-44aa-9e4b-9bcb1c56d3fe.jpg"), ii1i1i1I.push("【玩一玩奖票】请求异常！");
}
function ii1i1i1i(I1I1iI1i, il1li1Il) {
  let I1I1iI1l = ii1IiIi,
    i11ilIll = request({
      "proxyAddr": i11lI1li,
      "url": "http://api.m.jd.com/functionId=atop_channel_my_score",
      "body": "appid=jd-super-market&functionId=atop_channel_my_score&client=m&body=%7B%22bizCode%22%3A%22cn_retail_jdsupermarket%22%2C%22scenario%22%3A%22sign%22%2C%22babelChannel%22%3A%22ttt1%22%2C%22isJdApp%22%3A%221%22%2C%22isWx%22%3A%220%22%7D&t=" + Date.now(),
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "cookie": I1I1iI1i,
        "User-Agent": I1I1iI1l,
        "Origin": "https://pro.m.jd.com",
        "Referer": "https://pro.m.jd.com/"
      },
      "method": "post",
      "dataType": "json",
      "timeOut": 30000
    });
  if (i11ilIll != null && (i11ilIll.code === 0 || i11ilIll.code === "0")) {
    const IiI1i111 = i11ilIll.data.floorData.items[0].restScore || 0,
      l1l1i1l1 = i11ilIll.data.floorData.items[0].nexp || 0;
    iililIi.push("jdicons/jsjb.jpg");
    ii1i1i1I.push("【汪贝余额】" + IiI1i111);
  } else {
    iililIi.push("jdicons/jrjt.jpg");
    ii1i1i1I.push("【汪贝余额】请求异常！");
  }
}
function iililII(iiliiiII, Iilllil1) {
  let IlI1ilIi = Date.now(),
    Iilllill = ii1IiIi,
    l1l1i1il = request({
      "proxyAddr": i11lI1li,
      "url": "https://dwapp.jd.com/user/dwSignInfo",
      "body": JSON.stringify({
        "t": IlI1ilIi,
        "channelSource": "txzs",
        "encStr": call("md5")(IlI1ilIi + "e9c398ffcb2d4824b4d0a703e38yffdd").toString()
      }),
      "headers": {
        "Origin": "https://txsm-m.jd.com",
        "Content-Type": "application/json",
        "User-Agent": Iilllill,
        "Cookie": iiliiiII
      },
      "method": "post",
      "dataType": "json",
      "timeOut": 30000
    }),
    l1l1i1ii = "";
  if (l1l1i1il != null && (l1l1i1il.code === 200 || l1l1i1il.code === "200")) {
    const iiI1Ill1 = l1l1i1il.data.balanceNum || 0;
    l1l1i1ii += "【话费积分】" + iiI1Ill1;
  } else iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-620523-ef6f43c9-dd27-4c90-b033-f0942435108f.jpg"), l1l1i1ii += "【话费积分】请求异常！";
  let Iilllili = request({
    "proxyAddr": i11lI1li,
    "url": "https://api.m.jd.com/api?functionId=DATAWALLET_USER_QUERY_EXPIRED_SCORE&appid=h5-sep&body=%7B%22expireDayNum%22%3A7%7D&client=m&clientVersion=6.0.0",
    "body": JSON.stringify({
      "t": IlI1ilIi,
      "channelSource": "txzs",
      "encStr": call("md5")(IlI1ilIi + "e9c398ffcb2d4824b4d0a703e38yffdd").toString()
    }),
    "headers": {
      "Origin": "https://prodev.m.jd.com",
      "User-Agent": Iilllill,
      "Cookie": iiliiiII
    },
    "method": "post",
    "dataType": "json",
    "timeOut": 30000
  });
  if (Iilllili != null && (Iilllili.code === 200 || Iilllili.code === "200")) {
    {
      const il1li11i = Iilllili.data.expireNum || 0;
      il1li11i != 0 && (l1l1i1ii += " (近7日将过期 " + il1li11i + " )");
    }
  }
  l1l1i1ii != null && l1l1i1ii != "" && (iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-620523-ef6f43c9-dd27-4c90-b033-f0942435108f.jpg"), ii1i1i1I.push(l1l1i1ii));
}
function iiiIIiI1(illIlI1i, lII1I1l) {
  let il1iIi1l = ii1IiIi,
    Iii1Ill = request({
      "proxyAddr": i11lI1li,
      "url": "https://api.m.jd.com/atop_channel_marketCard_cardInfo",
      "body": "appid=jd-super-market&t=" + Date.now() + "&functionId=atop_channel_marketCard_cardInfo&client=m&uuid=&body=%7B%22babelChannel%22%3A%22ttt9%22%2C%22isJdApp%22%3A%221%22%2C%22isWx%22%3A%220%22%7D",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://pro.m.jd.com",
        "User-Agent": il1iIi1l,
        "Cookie": illIlI1i
      },
      "method": "post",
      "dataType": "json",
      "timeOut": 30000
    });
  if (Iii1Ill != null && Iii1Ill.success) {
    {
      const Il1IilIi = Iii1Ill.data?.["floorData"]?.["items"] ? Iii1Ill.data?.["floorData"]?.["items"][0]["marketCardVO"] : "";
      otherInfo = "";
      if (Il1IilIi.expirationGiftAmountDes) {
        otherInfo += "(" + Il1IilIi.expirationGiftAmountDes + ")";
      }
      iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-604644-37a9f82f-7886-49c8-bae8-a16bdeca6292.jpg");
      ii1i1i1I.push("【超市卡】" + Il1IilIi.balance + " 元 " + otherInfo);
    }
  } else iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-604644-37a9f82f-7886-49c8-bae8-a16bdeca6292.jpg"), ii1i1i1I.push("【超市卡】请求异常！");
}
function i1l1l11I(iiI1Ilii, iiI1Ilil, llIl111i = 0) {
  request({
    "proxyAddr": i11lI1li,
    "url": "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
    "method": "get",
    "dataType": "json",
    "headers": {
      "User-Agent": ii1IiIi,
      "Cookie": iiI1Ilii
    },
    "timeout": 30000
  }, function (I11i1l1l, I1IIliII, lI1IIII1, I11i1l1i) {
    if (I11i1l1i.msg == "success") {
      obj = I11i1l1i;
      Debug(JSON.stringify(obj));
      if (obj.retcode && obj.retcode == 0) {
        {
          iililIi.push("jdicons/jdzh.jpg");
          ii1i1i1I.push("【东东账号】 " + obj.data.userInfo.baseInfo.curPin);
          iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-710307-eef947af-caf9-4c8e-8f7d-26073daa8134.jpg");
          ii1i1i1I.push("【账户昵称】 " + obj.data.userInfo.baseInfo.nickname);
          iililIi.push(obj.data.userInfo.isRealNameAuth == 1 ? "https://bbs.autman.cn/assets/files/2024-10-16/1729060435-667074-57159787-8ea8-4511-9fa5-368a22255995.jpg" : "https://bbs.autman.cn/assets/files/2024-10-16/1729060435-677540-0b4f1df7-9855-4cd6-a574-5abf5c84901b.jpg");
          ii1i1i1I.push("【实名情况】 " + (obj.data.userInfo.isRealNameAuth == 1 ? " 已实名" : " 未实名"));
          iililIi.push(obj.data.userInfo.isPlusVip == 1 ? "https://bbs.autman.cn/assets/files/2024-10-16/1729060435-631711-plus.jpg" : "https://bbs.autman.cn/assets/files/2024-10-16/1729060435-644732-plus.jpg");
          ii1i1i1I.push("【PLUS会员】 " + (obj.data.userInfo.isPlusVip == 1 ? " PLUS会员" : " 普通会员"));
          iililIi.push("jdicons/zhxy.jpg");
          ii1i1i1I.push("【会员分值】 " + obj.data.userInfo.baseInfo.userLevel);
          iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-699566-1.jpg");
          ii1i1i1I.push("【优惠券数量】 " + obj.data.assetInfo.couponNum);
          iililIi.push("jdicons/bean.jpg");
          ii1i1i1I.push("【豆豆总量】 " + obj.data.assetInfo.beanNum + " ≈ (" + obj.data.assetInfo.beanNum / 100 + "元)");
        }
      }
    } else llIl111i < 5 && i1l1l11I(iiI1Ilii, iiI1Ilil, llIl111i++);
  });
}
function l1I11li1(lIIillI, l11Il1ll) {
  request({
    "proxyAddr": i11lI1li,
    "method": "get",
    "url": "https://rsp.jd.com/windControl/queryScore/v1?lt=m&an=plus.mobile&stamp=%d" + Date.now(),
    "headers": {
      "Host": "rsp.jd.com",
      "Connection": "keep-alive",
      "User-Agent": ii1IiIi,
      "Cookie": lIIillI
    }
  }, function (liiii1ll, iIIllIll, l11Il1li, lIIill1) {
    {
      let iIi1llli = JSON.parse(lIIill1);
      Debug(JSON.stringify(iIi1llli));
      iIi1llli.code && iIi1llli.code == "1000" && (iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729057665-23203-59e2292b-44b5-42d6-b354-cf79534b430b.png"), ii1i1i1I.push("【会员分值】" + iIi1llli.rs.userSynthesizeScore.totalScore));
    }
  });
}
function il1iIiiI(l11I1iil, I11i1l1I) {
  request({
    "proxyAddr": i11lI1li,
    "url": "https://wq.jd.com/activeapi/queryjdcouponlistwithfinance?state=1&wxadd=1&filterswitch=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBKB&g_ty=ls",
    "headers": {
      "authority": "wq.jd.com",
      "User-Agent": ii1IiIi,
      "accept": "*/*",
      "referer": "https://wqs.jd.com/",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "cookie": l11I1iil
    },
    "timeout": 10000
  }, function (iilIlIii, IIliIiI1, li1ii1li, iiiil1l1) {
    {
      Debug("优惠券信息：" + iilIlIii);
      if (!iilIlIii) {
        YunFeiTitle = "";
        YunFeiQuan = 0;
        YunFeiQuanEndTime = "";
        YunFeiTitle2 = "";
        YunFeiQuan2 = 0;
        YunFeiQuanEndTime2 = "";
        data = JSON.parse(iiiil1l1.match(new RegExp(/jsonpCBK.?\((.*);*/))[1]);
        let IIIl1ili = data.coupon.useable;
        todayEndTime = new Date(new Date(new Date().getTime()).setHours(23, 59, 59, 999)).getTime();
        tomorrowEndTime = new Date(new Date(new Date().getTime() + 86400000).setHours(23, 59, 59, 999)).getTime();
        platFormInfo = "";
        Debug("优惠券数量：" + IIIl1ili.length);
        cpKind = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        cpStyle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        cpType = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let IIIl1ill = 0; IIIl1ill < IIIl1ili.length; IIIl1ill++) {
          cpKind[IIIl1ili[IIIl1ill].couponKind]++;
          cpStyle[IIIl1ili[IIIl1ill].couponStyle]++;
          cpType[IIIl1ili[IIIl1ill].coupontype]++;
        }
        let lIlIIiII = "";
        lIlIIiII = "【券券明细】";
        if (cpStyle[3] > 0) {
          lIlIIiII += cpStyle[3] + "京券 ";
        }
        if (cpStyle[0] > 0) {
          lIlIIiII += cpStyle[0] + "东券 ";
        }
        cpStyle[2] > 0 && (lIlIIiII += cpStyle[2] + "运费券 ");
        cpStyle[8] > 0 && (lIlIIiII += cpStyle[8] + "支付券 ");
        iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729057860-616996-quan-4.png");
        ii1i1i1I.push(lIlIIiII);
        for (let IIIll1lI = 0; IIIll1lI < IIIl1ili.length; IIIll1lI++) {
          {
            if (IIIl1ili[IIIll1lI].limitStr.indexOf("全品类") > -1) {
              {
                beginTime = IIIl1ili[IIIll1lI].beginTime;
                if (beginTime < new Date().getTime() && IIIl1ili[IIIll1lI].quota <= 100 && IIIl1ili[IIIll1lI].coupontype == 1) {
                  couponName = IIIl1ili[IIIll1lI].limitStr;
                  IIIl1ili[IIIll1lI].platFormInfo && (platFormInfo = IIIl1ili[IIIll1lI].platFormInfo);
                  var lI1iili1 = parseFloat(IIIl1ili[IIIll1lI].quota).toFixed(2),
                    li1ii1ll = parseFloat(IIIl1ili[IIIll1lI].discount).toFixed(2);
                  let IIlli1I1 = "【全品类券】满" + lI1iili1 + "减" + li1ii1ll + "元";
                  if (IIIl1ili[IIIll1lI].endTime < todayEndTime) {
                    IIlli1I1 += "(今日过期," + platFormInfo + ")";
                  } else IIIl1ili[IIIll1lI].endTime < tomorrowEndTime ? IIlli1I1 += "(明日过期," + platFormInfo + ")" : IIlli1I1 += "(" + platFormInfo + ")";
                  iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729057860-616996-quan-4.png");
                  ii1i1i1I.push(IIlli1I1);
                }
              }
            }
            if (IIIl1ili[IIIll1lI].couponTitle.indexOf("运费券") > -1 && IIIl1ili[IIIll1lI].limitStr.indexOf("自营商品运费") > -1) {
              if (!YunFeiTitle) YunFeiTitle = IIIl1ili[IIIll1lI].couponTitle, YunFeiQuanEndTime = unixTimeFmt(parseInt(IIIl1ili[IIIll1lI].endTime) / 1000, 0, "yyyy-MM-dd"), YunFeiQuan += 1;else {
                if (YunFeiTitle == IIIl1ili[IIIll1lI].couponTitle) YunFeiQuanEndTime = unixTimeFmt(parseInt(IIIl1ili[IIIll1lI].endTime) / 1000, 0, "yyyy-MM-dd"), YunFeiQuan += 1;else {
                  if (!YunFeiTitle2) YunFeiTitle2 = IIIl1ili[IIIll1lI].couponTitle;
                  if (YunFeiTitle2 == IIIl1ili[IIIll1lI].couponTitle) {
                    YunFeiQuanEndTime2 = unixTimeFmt(parseInt(IIIl1ili[IIIll1lI].endTime) / 1000, 0, "yyyy-MM-dd");
                    YunFeiQuan2 += 1;
                  }
                }
              }
            }
            if (IIIl1ili[IIIll1lI].couponTitle.indexOf("特价版APP活动") > -1 && IIIl1ili[IIIll1lI].limitStr == "仅可购买活动商品") {
              beginTime = IIIl1ili[IIIll1lI].beginTime;
              if (beginTime < new Date().getTime() && IIIl1ili[IIIll1lI].coupontype == 1) {
                {
                  IIIl1ili[IIIll1lI].platFormInfo && (platFormInfo = IIIl1ili[IIIll1lI].platFormInfo);
                  var lI1iili1 = parseFloat(IIIl1ili[IIIll1lI].quota).toFixed(2),
                    li1ii1ll = parseFloat(IIIl1ili[IIIll1lI].discount).toFixed(2);
                  let IIlli1II = "【特价版券】满" + lI1iili1 + "减" + li1ii1ll + "元";
                  if (IIIl1ili[IIIll1lI].endTime < todayEndTime) IIlli1II += "(今日过期," + platFormInfo + ")\n";else IIIl1ili[IIIll1lI].endTime < tomorrowEndTime ? IIlli1II += "(明日过期," + platFormInfo + ")\n" : IIlli1II += "(" + platFormInfo + ")\n";
                  iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729057860-616996-quan-4.png");
                  ii1i1i1I.push(IIlli1II);
                }
              }
            }
            if (IIIl1ili[IIIll1lI].couponStyle == 7 || IIIl1ili[IIIll1lI].couponStyle == 8) {
              let ii1lllI = "";
              beginTime = IIIl1ili[IIIll1lI].beginTime;
              if (beginTime > new Date().getTime() || IIIl1ili[IIIll1lI].quota > 50 || IIIl1ili[IIIll1lI].coupontype != 1) continue;
              IIIl1ili[IIIll1lI].couponStyle == 8 ? couponType = "【支付立减】" : couponType = "【白条优惠】";
              if (IIIl1ili[IIIll1lI].discount < IIIl1ili[IIIll1lI].quota) ii1lllI += couponType + ":满" + IIIl1ili[IIIll1lI].quota + "减" + IIIl1ili[IIIll1lI].discount + "元";else ii1lllI += couponType + ":立减" + IIIl1ili[IIIll1lI].discount + "元";
              if (IIIl1ili[IIIll1lI].platFormInfo) platFormInfo = IIIl1ili[IIIll1lI].platFormInfo;
              if (IIIl1ili[IIIll1lI].endTime < todayEndTime) ii1lllI += "(今日过期," + platFormInfo + ")";else {
                if (IIIl1ili[IIIll1lI].endTime < tomorrowEndTime) {
                  ii1lllI += "(明日将过期," + platFormInfo + ")";
                } else {
                  ii1lllI += "(" + platFormInfo + ")";
                }
              }
              iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729057860-616996-quan-4.png");
              ii1i1i1I.push(ii1lllI);
            }
          }
        }
        YunFeiQuan > 0 && (iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729057860-616996-quan-4.png"), ii1i1i1I.push("【免运费券】" + YunFeiQuan + "(有效期至：" + YunFeiQuanEndTime + ")"));
        YunFeiQuan2 > 0 && (iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729057860-616996-quan-4.png"), ii1i1i1I.push("【免运费券】" + YunFeiQuan2 + "(有效期至：" + YunFeiQuanEndTime2 + ")"));
      }
    }
  });
}
function iIllIil(ilIlIIlI, l1l1i1I1) {
  let il1iIl1i = ii1IiIi;
  request({
    "proxyAddr": i11lI1li,
    "url": "https://api.m.jd.com/client.action",
    "method": "post",
    "body": "functionId=initForFarm&appid=signed_wh5&body={\"version\":4}&&networkType=wifi&client=ios&clientVersion=" + il1iIl1i.split(";")[2] + "&t=" + Date.now(),
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "cookie": ilIlIIlI,
      "origin": "https://home.m.jd.com",
      "pragma": "no-cache",
      "referer": "https://home.m.jd.com/myJd/newhome.action",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "User-Agent": il1iIl1i,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "timeout": 10000
  }, function (ii1i1il1, I1iiIllI, IllliI1, iIllIl1I) {
    if (!ii1i1il1) {
      let liiii1I1 = JSON.parse(iIllIl1I);
      Debug("检查东东农场的数据：" + JSON.stringify(liiii1I1));
      if (liiii1I1.code && liiii1I1.code == "0") {
        ojbk = 100 * liiii1I1.farmUserPro.treeEnergy / liiii1I1.farmUserPro.treeTotalEnergy;
        objk = Math.round(ojbk);
        iililIi.push("jdicons/ddnc.jpg");
        ii1i1i1I.push("【东东农场】" + liiii1I1.farmUserPro.name + "(" + objk.toFixed(2) + "%)");
        flag = true;
      }
    }
  });
}
async function IliIIIiI(ii1i1ilI, l1l1i1II) {
  let IllliII = ii1IiIi;
  request({
    "proxyAddr": i11lI1li,
    "method": "post",
    "url": "https://api.m.jd.com/miniTask_hbChannelPage",
    "body": "loginType=2&clientType=wxapp&appid=hot_channel&functionId=miniTask_hbChannelPage&body=%7B%22source%22%3A%22task%22%7D&t=" + Date.now() + "&clientVersion=9.21.100&client=apple&" + illiIIl(),
    "headers": {
      "Host": "api.m.jd.com",
      "Referer": "https://servicewechat.com/wx91d27dbf599dff74/765/page-frame.html",
      "User-Agent": IllliII,
      "cookie": ii1i1ilI,
      "wqreferer": "http://wq.jd.com/wxapp/pages/marketing/entry_task/index",
      "x-rp-client": "mini_2.0.0",
      "accept-language": "zh-CN,zh;q=0.9",
      "Accept-Encoding": "deflate, br",
      "x-referer-page": "/pages/marketing/entry_task/index",
      "x-referer-package": "wx91d27dbf599dff74",
      "accept": "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "timeout": 10000
  }, function (iiI1IlIl, iill111I, li1ii1i1, lII1IIII) {
    if (!iiI1IlIl) {
      let il1lIi1 = JSON.parse(lII1IIII);
      il1lIi1.data.point > 30000 ? (iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-655842-ea092026-da39-40ac-b558-400c71ef919d.jpg"), ii1i1i1I.push("【省钱币】" + il1lIi1.data.point + "（能兑换30元红包）")) : (iililIi.push("https://bbs.autman.cn/assets/files/2024-10-16/1729060435-655842-ea092026-da39-40ac-b558-400c71ef919d.jpg"), ii1i1i1I.push("【省钱币】" + il1lIi1.data.point));
    }
  });
}
function liIi1III(iiiIIlIl, iiI1IlII) {
  let iiiIIlIi = ii1IiIi;
  request({
    "proxyAddr": i11lI1li,
    "url": "https://api.m.jd.com/client.action",
    "method": "post",
    "body": "functionId=gotCouponForFarm&body={\"version\": 11,\"channel\":3,\"babelChannel\": 0}&client=apple&clientVersion=10.0.4&osVersion=13.7&appid=wh5&loginType=2&loginWQBiz=interact&" + illiIIl(),
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "cookie": iiiIIlIl,
      "origin": "https://home.m.jd.com",
      "pragma": "no-cache",
      "referer": "https://home.m.jd.com/myJd/newhome.action",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "User-Agent": iiiIIlIi,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "timeout": 10000
  }, function (iill111l, ii1il1i1, I1Iil1i, iill111i) {});
}
function iIllIii(lII1IIIi, I1iiiI1I) {
  request({
    "proxyAddr": i11lI1li,
    "url": "https://api.m.jd.com/client.action?appid=signed_wh5&client=android&clientVersion=12.4.2&screen=393*0&wqDefault=false&build=99108&osVersion=12&t=" + Date.now() + "&body={\"version\":1,\"type\":1}&functionId=farm_award_detail",
    "method": "post",
    "headers": {
      "Origin": "https://h5.m.jd.com",
      "User-Agent": ii1IiIi,
      "Cookie": lII1IIIi
    },
    "timeout": 10000
  }, function (II1lI1i1, IiI1i1Ii, iIi1Iil1, i1111Ili) {
    if (!II1lI1i1) {
      data = JSON.parse(i1111Ili);
      Debug("检查新东东农场的数据：" + JSON.stringify(data));
      if (data.data.success) {
        if (data.data.result.plantAwards && data.data.result.plantAwards.length > 0) for (let IiIIII1i of data.data.result.plantAwards) {
          if (IiIIII1i.awardStatus == 1) {
            I1iiiI1I != null && I1iiiI1I != "" ? push({
              "imType": GetImType(),
              "userID": I1iiiI1I,
              "content": "【新农场兑换】" + IiIIII1i.skuName + IiIIII1i.exchangeRemind
            }) : sendText("【新农场兑换】" + IiIIII1i.skuName + IiIIII1i.exchangeRemind);
          }
        }
      } else {}
    }
  });
}
function illiIII() {
  var IlIl1l1 = new Date();
  var I1IIliii = IlIl1l1.getFullYear();
  var ii1i1iiI = ("0" + (IlIl1l1.getMonth() + 1)).slice(-2);
  var iiliii1l = ("0" + IlIl1l1.getDate()).slice(-2);
  var liiii1Il = ("0" + IlIl1l1.getHours()).slice(-2);
  var liiii1Ii = ("0" + IlIl1l1.getMinutes()).slice(-2);
  var ii1il1li = ("0" + IlIl1l1.getSeconds()).slice(-2);
  var I1IIliil = ("00" + IlIl1l1.getMilliseconds()).slice(-3);
  return I1IIliii + ii1i1iiI + iiliii1l + liiii1Il + liiii1Ii + ii1il1li + I1IIliil;
}
function il1li1iI(l1i11111) {
  if (l1i11111.length > 8) {
    return l1i11111.slice(0, 8) + "...";
  } else {
    return l1i11111;
  }
}
function il1iIiil(IlIl1li, ii1il1il) {
  let IlliiI1i = ii1IiIi,
    IlIl1ll = "20241105125744955%3B999aazw39mpigtw1%3Bc57f6%3Btk03wce9c1df818ncJ2tJt0aMwLdEDqa1P7UklWxJBygDmNpaCUOGhCusodIJtWsUsqvvXfCI9cigoVFs__yBigbkWxd%3Bf2b4068c7dbac86163e4f6a02dfa3b17b79f70a1a44c055e3b1cd6845668ca56%3B4.2%3B1730782664955%3B19b8793aa1a5eded15af3184736e1b667736a6adae452e88d0007c36fbce9cf3ccc6d5003d4cc82bf8159080837cd2e682059e3911d56a9924c254f24092d73e4cf58cf74f391024e6689570ba9f12420bca7fba37585c0b2e6408874baeba7566575b71cae345872e168fb1a8aa442e737166100922ee5545408cb4e63ab7da7a563463e3671325d30e3b0cc19061de414c77c2997226f2fc2ddee30c13b2a22bf79e3807024625423bff52a94f978a06e3e8bc0f4c14288c071505dc30213de72925633c0f03a5f94cbe9e46daff8e9aea481076e9f31eec5095a6cb912ed7fa9c693387cf4198534e90cb158475c70a5f15719cd4b3f31316da822ebca6dba6e6ac74a04a9e4cf19c068f2571315ee50c4bd5a9428e4d77b7f1e672d07cc4";
  request({
    "proxyAddr": i11lI1li,
    "url": "https://api.m.jd.com/client.action?appid=signed_wh5&functionId=farm_home&body=%7B%22version%22%3A1%7D&t=" + Date.now() + "&clientVersion=" + IlliiI1i.split(";")[2] + "&client=ios&" + IlIl1ll,
    "method": "get",
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://h5.m.jd.com",
      "Accept-Encoding": "deflate, br",
      "User-Agent": IlliiI1i,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://h5.m.jd.com/",
      "Cookie": IlIl1li
    },
    "timeout": 10000
  }, function (l1I1I1i1, l1IiIl1I, iIl1lI1l, I11IIlIi) {
    {
      if (!l1I1I1i1) {
        {
          data = JSON.parse(I11IIlIi);
          Debug("检查新东东农场的数据INFO：" + JSON.stringify(data));
          if (data.code == 0 && data.data.bizCode == 0) iililIi.push("jdicons/ddnc.jpg"), ii1i1i1I.push("【新东东农场】" + il1li1iI(data.data.result.skuName) + "(" + data.data.result.currentProcess + "%)"), flag = true;else {}
        }
      }
    }
  });
}
function iiiIIiII(lII1Iii, l1IiIl1i) {
  request({
    "proxyAddr": i11lI1li,
    "url": "https://m.jingxi.com/jxmc/queryservice/GetHomePageInfo?channel=7&sceneid=1001&activeid=null&activekey=null&isgift=1&isquerypicksite=1&_stk=activeid%2Cactivekey%2Cchannel%2Cisgift%2Cisquerypicksite%2Csceneid&_ste=1&h5st=20210818211830955%3B4408816258824161%3B10028%3Btk01w8db21b2130ny2eg0siAPpNQgBqjGzYfuG6IP7Z%2BAOB40BiqLQ%2Blglfi540AB%2FaQrTduHbnk61ngEeKn813gFeRD%3Bd9a0b833bf99a29ed726cbffa07ba955cc27d1ff7d2d55552878fc18fc667929&_=1629292710957&sceneval=2&g_login_type=1&g_ty=ls",
    "headers": {
      "User-Agent": ii1IiIi,
      "Host": "m.jingxi.com",
      "Connection": "keep-alive",
      "Accept-Language": "zh-cn",
      "Referer": "https://st.jingxi.com/pingou/jxmc/index.html?nativeConfig=%7B%22immersion%22%3A1%2C%22toColor%22%3A%22%23e62e0f%22%7D&;__mcwvt=sjcp&ptag=7155.9.95",
      "Cookie": lII1Iii
    }
  }, function (I1liII11, liillII1, l1ii1iil, I1I1Il1l) {
    Debug(I1I1Il1l);
    let IIlli1ll = JSON.parse(I1I1Il1l);
    IIlli1ll.code && IIlli1ll.code == 0 && (iililIi.push("jdicons/jxmc.jpg"), ii1i1i1I.push("【牧场鸡蛋】" + IIlli1ll.data.eggcnt));
  });
}
async function il1iIiii(I1I1Il1i, l1ii1ilI) {
  try {
    i1l1l11I(I1I1Il1i, l1ii1ilI);
  } catch (i1iIlII1) {
    Debug("账户情况" + i1iIlII1);
    console.log(i1iIlII1);
  }
  try {} catch (IlI1iii1) {
    Debug("plus分数" + IlI1iii1);
    console.log(IlI1iii1);
  }
  try {
    il1iIii1(I1I1Il1i, l1ii1ilI);
  } catch (IlliIli1) {
    Debug("统计豆收入" + IlliIli1);
    console.log(IlliIli1);
  }
  try {
    iIllIil(I1I1Il1i, l1ii1ilI);
  } catch (llI1i1I1) {
    Debug("农场数据" + llI1i1I1);
    console.log(llI1i1I1);
  }
  try {} catch (I11IIlII) {
    Debug("农场数据" + I11IIlII);
    console.log(I11IIlII);
  }
  try {
    iIllIii(I1I1Il1i, l1ii1ilI);
  } catch (IiIIIlI) {
    Debug("新农场数据" + IiIIIlI);
    console.log(IiIIIlI);
  }
  try {
    il1iIiil(I1I1Il1i, l1ii1ilI);
  } catch (I11i1iI1) {
    Debug("新农场数据" + I11i1iI1);
    console.log(I11i1iI1);
  }
  try {} catch (I1iiiIIi) {
    Debug("京东赚赚" + I1iiiIIi);
    console.log(I1iiiIIi);
  }
  try {} catch (l1iIIll1) {
    Debug("优惠券情况" + l1iIIll1);
    console.log(l1iIIll1);
  }
  try {} catch (IIiII11) {
    Debug("牧场鸡蛋" + IIiII11);
    console.log(IIiII11);
  }
  try {} catch (llIl11ii) {
    Debug("领现金" + llIl11ii);
    console.log(llIl11ii);
  }
  try {
    iililII(I1I1Il1i, l1ii1ilI);
  } catch (llIl11il) {
    Debug("话费积分" + llIl11il);
    console.log(llIl11il);
  }
  try {
    iiiIIiI1(I1I1Il1i, l1ii1ilI);
  } catch (Iiiilli) {
    Debug("超市卡" + Iiiilli);
    console.log(Iiiilli);
  }
  try {
    ii1i1i1l(I1I1Il1i, l1ii1ilI);
  } catch (llIiiiiI) {
    Debug("玩一玩" + llIiiiiI);
    console.log(llIiiiiI);
  }
  try {
    IliIIIiI(I1I1Il1i, l1ii1ilI);
  } catch (llIl11ll) {
    Debug("省钱币" + llIl11ll);
    console.log(llIl11ll);
  }
  try {
    IIl1l1li(I1I1Il1i, l1ii1ilI);
  } catch (llIl11li) {
    Debug("红包情况" + llIl11li);
    console.log(llIl11li);
  }
  Debug(bucketGet("otto", "assets_enable_bill"));
  if (bucketGet("otto", "assets_enable_bill") === "true") {
    {
      img = drawList({
        "background": {
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 255
          }
        },
        "icon": {
          "images": iililIi
        },
        "text": {
          "color": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 255
          },
          "size": 48,
          "texts": ii1i1i1I
        },
        "head": {
          "image": "jdicons/head.jpg"
        },
        "foot": {
          "image": "jdicons/foot.jpg"
        }
      });
      Debug("img : {}" + JSON.stringify(img));
      data = {
        "url": "http://aut.zhelee.cn/imgUpload",
        "method": "post",
        "dataType": "json",
        "formData": {
          "username": iIllIi1,
          "password": i11lI1ll,
          "imgBase64": encodeURIComponent(img.base64)
        }
      };
      Debug("data : {}" + JSON.stringify(data));
      let ii1Ii1l = request(data);
      Debug("newImg : {}" + JSON.stringify(ii1Ii1l));
      if (ii1Ii1l && ii1Ii1l.code && ii1Ii1l.code == 200) {
        {
          if (l1ii1ilI != null && l1ii1ilI != "") {
            push({
              "imType": GetImType(),
              "userID": l1ii1ilI,
              "content": "[CQ:image,file=" + ii1Ii1l.result.path + "]"
            });
          } else sendImage(ii1Ii1l.result.path);
        }
      } else sendImage(img.url);
    }
  } else l1ii1ilI != null && l1ii1ilI != "" ? push({
    "imType": GetImType(),
    "userID": l1ii1ilI,
    "content": ii1i1i1I.join("\n")
  }) : sendText(ii1i1i1I.join("\n"));
}
function IIlillii(iIllIil1) {
  const iiiil11i = {
    "proxyAddr": i11lI1li,
    "url": "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
    "method": "get",
    "dataType": "json",
    "headers": {
      "User-Agent": ii1IiIi,
      "Cookie": iIllIil1
    },
    "timeout": 30000
  };
  return request(iiiil11i);
}
function IliIIIi1(I11il1Il) {
  const llIl11lI = {
    "proxyAddr": i11lI1li,
    "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
    "method": "get",
    "dataType": "json",
    "headers": {
      "Cookie": I11il1Il,
      "referer": "https://h5.m.jd.com/",
      "User-Agent": ii1IiIi
    },
    "timeout": 30000
  };
  let I11il1Ii = request(llIl11lI);
  return I11il1Ii;
}
function liIi1IIl() {
  version = call("version")().sn;
  Debug("系统版本：" + version);
  if (version < "0.9.5") {
    sendText("当前autMan版本为" + version + "，“JD资产查询”插件仅支持0.9.5及以上。");
    return;
  }
  let i1iIlI1i = GetContent();
  if (i1iIlI1i == "资产查询test" && isAdmin()) {
    sendText("123");
    ii1IiIi = liIi1IIi();
    const lIlIIl1l = "pt_key=AAJnKQU-AEBC4tak0yoPh6iFbTA87yQB1Bm1I9GM4QhuExj6BE79HMz59JrmOIqwF2s3lnuDdrNmdd_9k8TU_63rKcJxSBZY;pt_pin=jd_uDgyoHMh0upqZcX;";
    il1iIiil(lIlIIl1l, "woahni521521");
  } else {
    if (i1iIlI1i == "定时资产查询" && isAdmin()) {
      {
        let ilIilii1 = bucketKeys("jdNotify");
        ilIilii1.forEach(IIliliI1 => {
          let iilIIIlI = bucketGet("jdNotify", IIliliI1);
          iilIIIlI = JSON.parse(iilIIIlI);
          let ii1Ilil = iilIIIlI.PtKey,
            lIlIIl1i = "pt_key=" + ii1Ilil + ";pt_pin=" + IIliliI1 + ";",
            iiiIiI1i = bucketGet("pin" + GetImType().toUpperCase(), decodeURIComponent(IIliliI1));
          ii1i1i1I = [];
          iililIi = [];
          try {
            ii1IiIi = liIi1IIi();
            const iliIIi1I = IIlillii(lIlIIl1i),
              ll1i1IiI = IliIIIi1(lIlIIl1i);
            if (iliIIi1I && !("errorCode" in iliIIi1I) && iliIIi1I.retcode == 0 || ll1i1IiI && ll1i1IiI.islogin == 1) {
              il1iIiii(lIlIIl1i, iiiIiI1i);
            } else bucketGet("otto", "assets_enable_send_login_fild") == "true" && push({
              "imType": GetImType(),
              "userID": iiiIiI1i,
              "content": "【京东账号】" + lIlIIl1i.match(/(?<=pt_pin=)[^;]+/g) + "\n该账号已过期，请重新登录"
            });
          } catch (I1I1Iii1) {
            il1iIiii(lIlIIl1i, iiiIiI1i);
          }
          input(1000);
        });
      }
    } else {
      Debug("JD资产查询");
      imType = ImType();
      userId = GetUserID();
      jds = bucketKeys("pin" + imType.toUpperCase(), userId);
      Debug(jds);
      let lIi11IIl = [],
        iilIIIll = 0;
      if (jds.length == 0) {
        {
          sendText("没有与你绑定的账号，请对我说：“登陆”");
          return;
        }
      } else {
        if (jds.length == 1) {
          jnStr = bucketGet("jdNotify", encodeURIComponent(jds[0]));
          Debug(jnStr);
          if (jnStr == null || jnStr == undefined || jnStr == "") {
            sendText("请登陆后一分钟之后重试！");
            return;
          }
          jn = JSON.parse(jnStr);
          cookie = "pt_key=" + jn.PtKey + ";pt_pin=" + jn.ID + ";";
          lIi11IIl.push(cookie);
        } else {
          {
            if (bucketGet("otto", "assets_enable_queryAll") == "true") iilIIIll = 0;else {
              {
                jdsIndex = [];
                for (i = 0; i < jds.length; i++) {
                  jdsIndex[i] = i + 1 + ". " + decodeURIComponent(jds[i]);
                }
                sendText("请选择要查询的账号：\n0. 全部\n" + jdsIndex.join("\n"), "W");
                iilIIIll = input(30000);
                !iilIIIll && (iilIIIll = -1);
              }
            }
            if (iilIIIll >= 0 && iilIIIll <= jds.length) {
              if (iilIIIll == 0) for (k = 0; k < jds.length; k++) {
                jnStr = bucketGet("jdNotify", encodeURIComponent(jds[k]));
                jn = JSON.parse(jnStr);
                cookie = "pt_key=" + jn.PtKey + ";pt_pin=" + jn.ID + ";";
                lIi11IIl.push(cookie);
              } else {
                i = parseInt(iilIIIll);
                jnStr = bucketGet("jdNotify", encodeURIComponent(jds[i - 1]));
                Debug(jnStr);
                jn = JSON.parse(jnStr);
                cookie = "pt_key=" + jn.PtKey + ";pt_pin=" + jn.ID + ";";
                lIi11IIl.push(cookie);
              }
            } else {
              sendText("输入错误，已退出");
              iilIIIll = -1;
            }
          }
        }
      }
      if (jds.length > 0 && iilIIIll >= 0 && iilIIIll <= jds.length) {
        Debug(lIi11IIl);
        for (k = 0; k < lIi11IIl.length; k++) {
          Debug(lIi11IIl[k]);
          ii1i1i1I = [];
          iililIi = [];
          try {
            ii1IiIi = liIi1IIi();
            const IiIIlI1i = IIlillii(lIi11IIl[k]),
              ili11lI = IliIIIi1(lIi11IIl[k]);
            IiIIlI1i && !("errorCode" in IiIIlI1i) && IiIIlI1i.retcode == 0 || ili11lI && ili11lI.islogin == 1 ? il1iIiii(lIi11IIl[k]) : bucketGet("otto", "assets_enable_send_login_fild") == "true" && sendText("【京东账号】" + lIi11IIl[k].match(/(?<=pt_pin=)[^;]+/g) + "\n该账号已过期，请重新登录");
          } catch (ii1i1li1) {
            il1iIiii(lIi11IIl[k]);
          }
          input(1000);
        }
      }
    }
  }
}
let IIlilli1 = ["%3B4748329669164543%3Bef79a%3Btk02waf0a1c5a18nHLGdpilVh3Bgxcawq%2F5%2FxVI8GUmkFPWC2Pv%2BlVbhZy2X%2FOtKQUlBiYtjk10mrztKBeJ%2BOMsiqE5b%3B54030a54a327a2f2861b509fbb24e069993d0e6b24940e9fe31a93e21328a619%3B3.0%3B1675058160354", "%3B2940316556511862%3Bef79a%3Btk02w99301bec18nQBAh5uEnWvcASJn6eAMz2II1xsAFUwEQaOb9UTawLkayh1lS%2FWDN7bZlXG2KQoTnNapQ1O1Pddbv%3Baac1d1b08b8628cb389e37e6344afadcc5701605ed6d65ebc12c6c68150a2f9c%3B3.0%3B1675058160389", "%3B0096431751888002%3Bef79a%3Btk02w83a01b4518nRs3Eop1iML22WAwJyWm8GV%2B6jyNuOvK2YQDr45VA5cUklWIkz%2BWy81u0lUd%2FyJhO11MxmU0izV1K%3B77ee9affe9ead6a7cfdca980f9f757798a21e7cc4a70fc01b69e47f7e59e97c0%3B3.0%3B1675058160424", "%3B8193072256053560%3Bef79a%3Btk02wcd1a1d4d18n9Zw7zpz8GNVNcNP4ckj7tdK1lwzEsdlzD8R9p8PX6tOpvhbnhYQXoRRipZ3JiNR5zwvGHLir7vy4%3Be2e88817c24c93dff5f8ea00a4c21b196e35f240359b0c1a5883780bda6f82bf%3B3.0%3B1675058160464", "%3B0096267941580908%3Bef79a%3Btk02wa89a1bbf18nyaLJMqWfl96olpL58rYagAUSmBDuA1Ib6LdJjh1sRBRKDmOKXS9wiKDetuZa0C5sekweF8Iw3L%2B7%3B8796ebe27f2dda31d26906f625c4bb6739662fee8780520f7bff14fb76f154db%3B3.0%3B1675058160518", "%3B9021839299702563%3Bef79a%3Btk02wb7c91c6018nZlYn70trW4nPFuqswHXu747SfyE1KVLCFsmvyuC59dL%2Bu2c7hYuCxQu00GoomXSpn4gEQw%2BnMTGV%3B538a683da94fb8e0516b209eddf1dce99f0c2e5beffc211906cbfa1a8f8f3521%3B3.0%3B1675058160563", "%3B1431123459634808%3Bef79a%3Btk02wad351c2118nxpPZIDHPQ5qzqamKkWWhYL%2FdM2YNZHTwuLeQ4wHfF9F0CuvSU5K2m3LXaw3yX3z3nGaWbEMu9Yrl%3B04980747ba37515f0b518e30b5d5e4d1f4daad1d790c9cef46a699358466c0fd%3B3.0%3B1675058160614", "%3B3129662975866648%3Bef79a%3Btk02w7b011b4718nLXuSWRAdInSp60ic%2Bs0AhtFZBBk%2FIEJ3fECm92MJ%2FQGx9dnJ2sy4tiBEbnAg1ywF5xoovmAQX%2Bb2%3B2ef7e1004b934af1a5b9c46d5ab96857b3f15fd5958eee06773e68e18a44b16a%3B3.0%3B1675058160649", "%3B3716409594549921%3Bef79a%3Btk02wcaad1cc818nlgLdzj1iwDUHSoqr9ytA9UzAUY%2BLkZL4Qae%2BoS3uBIn%2FyeO9wIkldmAezi6%2B8zybXvr3xh6IK%2FlO%3B3c219d2a1f235d9becc6fd6b3a779a8bf67dde452991427a408da6a85e86e6ae%3B3.0%3B1675058160689", "%3B1347356039217795%3Bef79a%3Btk02wb0e71c3b18nUqgsbTAPLshCHgghl%2BJK7gR6Ba1Qqt9f8T1rsLvCoTvi%2Bb7oM7mpR2s%2Bvq%2Fnu%2FnhOG5aaNyUp3JN%3B199de6572cc60c6e459bd6512ce976a4d3c0ac11bebfb28bfae689b5329e6b57%3B3.0%3B1675058160726", "%3B7468876310947847%3Bef79a%3Btk02w83ba1b0d18nYAPNJeJKXrIQa3ZNjekSLjSq60acpq7cPoAnG390p2TAzG2xV3aI06iD5I0jEDQUTQwHmH0clpx5%3Be384e51f6968d6c0eceba47498bd797d49d48dbc89785841876e46b042078739%3B3.0%3B1675058160769", "%3B6627338901511366%3Bef79a%3Btk02wd6f21ce118ncvifdQJXnZdHXC%2FNytNBKtCiQv04nzKvLQn6toNCjm3rzuARkCvfM7GWtpEfYsIg7LkMCcq7%2FI0o%3B474c3c3fc1b6d1aa8545d0585545f69efab78afc8a818a6576277ffaacacdbc0%3B3.0%3B1675058160813", "%3B1069999737227520%3Bef79a%3Btk02w69921ab218nJ0H91QaXx6TJMhb35Pr%2Fk2gRAT%2BWGrbw0qmkPPL3Jx3mLbdE6xXimoPYxiH535608VyY66ZEkh1Q%3B57286e05ce6cff015d0f51707d255ec46d88dbb489236cbf6de564a48595e596%3B3.0%3B1675058160860", "%3B3558243819684078%3Bef79a%3Btk02w70dd1b4e18n0AvZ0g20ddCCqYUcAJDJ1ilp4HkDmXSKOw%2F%2F%2BHIxzSxL9RwCZh1ZSbEUxGbf6%2B88PPRuwSSoi1yo%3Be05b18df6fafc2d8860230555f66e8eea4236db4dfd773a0cce4fcdc45fb7c3e%3B3.0%3B1675058160903", "%3B1187787302774497%3Bef79a%3Btk02wa8381c5918nJuaDpciP0F24auROSzcQpeLhBq4wOLGRdxcF08lIUwW3MKbU9LkXJ728fGezvThaAtFcZnIvQUVp%3B1707b6160d18a2e8bb4e42c5732872f4303a0061521317747b7d29060e7ce8a2%3B3.0%3B1675058160939", "%3B9879972531016106%3Bef79a%3Btk02wb7e81cbe18n1eIzlhOcO7FkBkqZB1IlWf6%2BhQm6kHcF7oz%2FbhTmwtEfCa5xCPrBfytwaxiAKZzedmxLT2X8L%2FQR%3Bfdabb05dae94e0c8abfed506552c53a00a46ff31231e7ebf4c4369ad26b7500d%3B3.0%3B1675058160983", "%3B0004516332607373%3Bef79a%3Btk02wbbfb1be118n8qpcZLBrlakATa%2FbMh7eknA2AdoCiQsLFyMsjQfLwU8jnY65hKzr%2FP34xfqUBcHGBS2S0Tm%2F2q8Q%3B361cd2989b29b2a0dfd61037e50d4f3bbfdeef0328405f597ea88f957617f274%3B3.0%3B1675058161027", "%3B0465178978809032%3Bef79a%3Btk02wa7991c4318nDtZoNoNUZXae3oJBnt%2B4ALUBlW4iym6VvqCCxE9EmJXF23tIUPAxUaIus6luMCk1vCvOcS6ope%2Fq%3B34e309be905c3bd7b9f2deeb8c9f066dfc10a257c567bea403340026e0475fbf%3B3.0%3B1675058161081", "%3B8650312487605785%3Bef79a%3Btk02w8e6c1bc318nALTbmXs3H31iRVG%2Bano61UnI9CizQpmAt7ONBjtQM3OvbybO3p2gpfeEmMhDICMftHLZ94V%2FzyXM%3Ba8e7e01b611a8cc6ea1e74fda6429d1c27f8f26af6f0ff98853034beb4c678fd%3B3.0%3B1675058161121", "%3B0292980247653918%3Bef79a%3Btk02w7c761b0a18nqq1IT37XlmMKTjI38z1c2biMT6biLSL49cLyouJn9L6UCDssMbjAF153aGpV%2FSbUUlo0q%2FneUU0R%3B842c34edaefe2f053634f3fec862e1be0685dd427b51ccf9438667a8a03b0dac%3B3.0%3B1675058161165", "%3B7293846725622652%3Bef79a%3Btk02w8d191b7f18n1IlB1S9dnJtIP9KoPeNHseDoGUYQU7Uzb9dwYAknL8mej%2BlLV2HjFEm3ihpD7EOTDBZ3Gaczi8OZ%3Baea2130ff365eb6cdda6ce4e2b92784f54b00691ba9886b4543a140a6bd51e12%3B3.0%3B1675058161211", "%3B9378171520973867%3Bef79a%3Btk02w814f1b3918nAsGizTJqur0GW88h9gFDWH1vW13rOG76q6GYFOrCbdy1N2mbtBBX0HON2pw73xW7wvWuyNli30a8%3Bb0c575a82ab95bf786d958e1f9785f01b44add4e9b6d38b5848644c8922c34ec%3B3.0%3B1675058161247", "%3B5296153840027502%3Bef79a%3Btk02w95ff1c1918nEZD3r4X6wEMYHyPwWcqbB%2F9AqEcGOGaFq24mXzeZeT9gz0azqFAygBV5xjAXl54QtBxNds8RGux6%3Bb50e2f68bdf4c0c8e45ea4d6c226e6b2899fa65d298f7c11d370675e128211a6%3B3.0%3B1675058161279", "%3B8791577328842482%3Bef79a%3Btk02wa9f11bbe18nPQL0Io6XzSkVI1dPfCSpW9NIo5dexpMqsAj4zlCtVyrXM3cGV6YXwcc%2BvPtPw6QXC0HZ4H54VJAW%3Bef3c6af59c5b32f8ac82ac6a9bfeb48ec693651e7116b72af947a91f67ca368f%3B3.0%3B1675058161312", "%3B4628096273153753%3Bef79a%3Btk02wc37a1cdf18nyXe6QgDwURHNTibN4juZPctyKq0vRq2cac4D%2BCdmXf3JNrFhvcAx%2FJLwb7BktMn9soy5y%2FLghdOY%3B3aa7f3a0c6e38a1dbd368c7e699df1cd8b3990afaf8b91effc39870536bbec17%3B3.0%3B1675058161346", "%3B2789147360275552%3Bef79a%3Btk02wb5181bd818n811jhbdiIAzCsXKetrsdc7kgCjVBPLjvhH%2FSw2%2FqIOOHtAXeIjDWvV3AddvRaxT%2By8Vj%2F%2FFRS23P%3Bbeaa2285448ee16e0595d40afb0bcece8a33826a34eb897bda16803e777b5b8b%3B3.0%3B1675058161378", "%3B7698583035083150%3Bef79a%3Btk02w72dc1b9418nbIY5j6Udo8P1IUzPw8iJ5%2BLenZ2n67bCXmP99VVM%2BEZ3iIL6qV0uetkq9d%2FzqnuNAAiKCQu9syre%3B37f05c307363b3ce8660925c151a469a0129ed98cd5a622e9b75ebf86df327f0%3B3.0%3B1675058161411", "%3B4591425506328448%3Bef79a%3Btk02wa87c1cbd18njfPgws4h39FL7KF2nD9qnVsASJ1nlAkStAXKfcyY2uUpyEjI7%2FdHvq87eovnCGYYJuUkbbebHOfz%3B7037ae94fb9010024248c137362965cb5ed7a34208c4aba1ab2001dc5f4413fa%3B3.0%3B1675058161446", "%3B4650411928577607%3Bef79a%3Btk02wad3f1b1218naaWu9bkDJ1tLlXjyr%2BYogU3gyILOi8zwRIZV8HeVBj1Sq%2BW%2FZLlM%2FQnJ4sU%2BTBEYjCD5j645NRCB%3Be3133c52a24cd3d16bc0531d8fda73a9b81b2938801d5c5b57c51a169a9e1020%3B3.0%3B1675058161482", "%3B7190423584555600%3Bef79a%3Btk02wa6b41c4918nNVprmxpPQs6bLCgyoM7D6%2BEO6xu%2FN44h1TMrWYtTMeCsLp%2BMciFNbFHv2BCn4Hwky0qjqvBRKrsW%3Beedbc1d618ab1ee1c17ed6945078a44b56751f5b47f60e11b625f1537648b8c1%3B3.0%3B1675058161519", "%3B1683437890241468%3Bef79a%3Btk02wa6751c1018n6U0KRN5GtTAeHTkhhzKsqxcfYv%2BNm2qyIV2MkL%2FuuaTNZBCjg4gu5mv8Q7MqK%2FJNqC18D9fpl5zz%3B509ec05cfe21d14ac6201afd735049845da5a4e939105652d26bb7263ac7c14d%3B3.0%3B1675058161557", "%3B1039458576651152%3Bef79a%3Btk02w7e651b7e18naCgFvv1NiTwONGGAdnZNE6FMGAf18eJ%2F2CsvOL1Oy1m5aMGQI999yuyyImS%2BTqueCVYpFSZTJOix%3B5d900521f9aa34d52238b06734da99b58707fcd3b618c660e1935ae6d3b0c6cb%3B3.0%3B1675058161596", "%3B3404714009681519%3Bef79a%3Btk02wd7741c9518nuEvhZHzIe4KjaeypA6kJj4ixDsOunfpAvxGIBRNjCzb35J9bHiFzpE9iR5eRGf6irs4U1X8tSz53%3Bbf4a953e53173bf2557797eeb9d226cfc3af2e4b83fb0df316a310842257571e%3B3.0%3B1675058161630", "%3B9035901764249486%3Bef79a%3Btk02wac071bd518naJQKxQPwyj42KebWjHpbc693KZ3TqWqbXUXQKuwd7DGcSae3yLtLI2B%2BVibbq0xO93tYt6e%2FxGQ%2B%3Bd29bf412bed746621b470893046133145556c857ea5c086dd929c75fc8dd0ecf%3B3.0%3B1675058161670", "%3B8914360806333781%3Bef79a%3Btk02w7c591ac418n32MJbpLEdjgH8SjqJebuC3Vi0zMqSR33YcRc06bxUHFm3zLU4I%2FT3oH%2Fo%2BdF8pN4NPTEOZZkH6ef%3Bfbd9e0f869c2f418e2158001dd788096e43000185bf2aeb57ffe535cf223491a%3B3.0%3B1675058161712", "%3B9886488081723869%3Bef79a%3Btk02wa9a21bc618nnfNJ0oOa6I9cJOk26Zw7d1f%2FfwstjFhvWnBSxIqSNzt4QbqQDQVgIlJJ6hiPZa4eLxgAL8%2F6EKR%2F%3B39db839d66b87dc49c1613749bde80dfed6efe2191ba894a66d8ca53cf8e543d%3B3.0%3B1675058161746", "%3B5655037914195924%3Bef79a%3Btk02wbfa01cb418nnsEtnOoS0K9v41MgFPEsWEifaMTRkoX9vnBZhl0h7qchrvGNAhZqDu8MNY7QUUwPxTtRaNBcDUs0%3Bcab332e35b7d7e5f25da22fcb169e1da3d7421b2e440ccab7ffe218acf831aaa%3B3.0%3B1675058161787", "%3B6667621509690795%3Bef79a%3Btk02w9ecb1bf518nPPcBhq6W52hxpKpCb8D13Ta6oIkzXKZ4YhvURsThGdrcDIj2UY5wRNPtol7mSf10GwSWBjyQMKP7%3Bca03e615055a932a12807701b29272d636a0e5a2720e7132bdec495a33d41723%3B3.0%3B1675058161826", "%3B3863707362495379%3Bef79a%3Btk02we6da1dbe18nyqT10j6GsjyhCaxr3iHpZhlVpzTaz4qBQ6HZXiqlaFy1TNJxkfIzmHvIRXH3zBUsaATgck3mzd7w%3B8ca3d4715e80dc6a7ce78a851fac551e147b220564a0584d412454f93ff4fbb3%3B3.0%3B1675058161868", "%3B8314725006906134%3Bef79a%3Btk02w97461c1918nS09sF1cl0dPLEBox%2Fx5uuy3wJRoh3%2BpCT7UO%2FqyaByi7tq45itJSvrIjCAb%2BGu0gouZHQnIp7LPm%3B21a3bce3e123de106967a717b843cb2d5170864c72c6acdde1307bd3aa0d1bdd%3B3.0%3B1675058161908", "%3B1111763592402224%3Bef79a%3Btk02w66d11ae018n456JYPWm9m4j60IMaaWgcVeK5PtFUg4AUUh31J2dxBb83Kxxd5eyvMl9W4Z3WTntwB5ZVrbd%2FR68%3B6e0e079649a900f9d372b18f2c0a9c4da3a9354260604544243f9911baaac6a3%3B3.0%3B1675058161946", "%3B1984145032195617%3Bef79a%3Btk02w81961b8e18nbPJZhpIUN1oN10Tg%2FFkm%2FD3BHkK5wDSlWw8UJljMGRMlKYYvSRq5EHOfbrYu1QJgjiGIt%2BPhOrCK%3Ba12eeb2687ab8896c589024e9e1623bc734ff33cd021fdce3570b273720d735e%3B3.0%3B1675058161982", "%3B6683441273904806%3Bef79a%3Btk02w98ec1ad818nISZncfi9WBw4I2P1kyP5zU2xMabFPUfHmy0eDFdiGZwr48zJ9f76wYr9Zu4%2Bok3u07S%2B7v5f%2B04%2F%3B8a1af36df7d6342de3a05ae4f4166cc104a12cf1081a3962d2b8623719515362%3B3.0%3B1675058162022", "%3B2998514397858085%3Bef79a%3Btk02wcc871c1d18ngyrqt22tWsv87tVsNDWIsCtyEhezKgv73e9vfPrA2f128E35wu3rbOEQKnLE8fAZgndLZuLbA857%3B6c1afa345030749ff34916484ab91e7ddca0eda52a6c44201e6fcdd9cb60975d%3B3.0%3B1675058162059", "%3B7606666623490558%3Bef79a%3Btk02wa9431c8118ngMxFZ3uPU7ap0UJ8I2mmj4Yh41eaXRJpgwlmeLAeFnle9H5%2Fo9gTneikOkSiejDqXohou1ApJUK%2B%3B1f7bd3372f10e237d61edd48ddb3dad2c02b1f393308698a38e53d8588ab1e10%3B3.0%3B1675058162096", "%3B7631024487447892%3Bef79a%3Btk02w8c501b4218nzxo4gQt1FPss67yC7OA%2BWSi0XG3dkV%2Bugb6oLOwGHHLwgP%2Bn4jc4Kft6%2B8B5RVLEREbzarjYV1Kg%3Bb0850ebbad569e818fc334d6d03c93252681185813acc2a84d1096f39c4f0269%3B3.0%3B1675058162135", "%3B9937450938966264%3Bef79a%3Btk02wadf81c1118n8UcHPxsmvaKGqOYIaEpfSKnHOFF6JrweH4W9R98d%2F4gk9rnwpgVJcruWCLUNVBf6p47Y4%2BGgdqZw%3Bda6a15bd0de36583b92023f7a691fed505bafd1f42a40e284805405eb750d32f%3B3.0%3B1675058162178", "%3B1559804179756764%3Bef79a%3Btk02wcce31d3918n6K89NlydTjEtvy96mgs1XmQzanuTYbjXJ6XRbMi4AErDy9SviAdAzBygt%2BRItvgvrmhsB%2BVSv2l1%3B9a5f5de26349de0cfb95a1643278dbe951298498ba1461c8761ded1825cdd085%3B3.0%3B1675058162218", "%3B2367507691826568%3Bef79a%3Btk02w6b2b1b3d18n1YAk9AjUFOAVNPaOZKji%2FAe112QjG6adFhSF2l%2FmxdXrv9IO1KAfOtQ6w0llefrf4DqisMGd4U7l%3B8119a5545e4fefa5329fb26d5b9f72b96980ff4e30560f92271313da822e9da7%3B3.0%3B1675058162257", "%3B0219984731623105%3Bef79a%3Btk02w68cf1b1718n31pB0ZDOblSKVGg47ay3f%2F%2FptUVSdutaDKu7V%2FQ1P0Kh2euD%2Ff%2FRIwlOGjUAe%2Ff%2FGUF5BqAtztvo%3B0e14168c6f35c7a88d686f9a2f560aa92a11692e0a7aad5033619eb5fd204747%3B3.0%3B1675058162291", "%3B0990705638911717%3Bef79a%3Btk02wda961d8118nOVqil9JQMXhDnYFDxiltGrtlnh4E%2FdelOhWJBViCRO8slD5utxo4qXhzOZfgyEsWHy6o1q%2BatJRe%3Ba1bb98c8c73e595bffe70d035680071606b24586ceb21ef58397ce9dfff711a4%3B3.0%3B1675058162328", "%3B0175286975725335%3Bef79a%3Btk02w97cb1b8818n9nsiHO21jOKUo3%2FqwiCiv7mkEuOotHkR7Jpf78LIm4N%2Fs6CfCZi%2BSVaAYJjLla04B0YVCfpgVkdG%3Bb7ca8391f6e1166bf88926aff9cf6a4d07b45ade4694cadb7cf7e4b90dbe34cb%3B3.0%3B1675058162365", "%3B6431085071587020%3Bef79a%3Btk02w90271b6918nP79fUyQulcfeWlu6cC9MF%2FSpOCQ%2BqgJN4lZ0FdGDQuv4ZKAqKp66IRSY0%2FbGy%2FyPNpeb%2BEgpfUn3%3B96b475c48c584353cf3661e84f330b6773d70fb44dde67b36cea98a39d596db7%3B3.0%3B1675058162415", "%3B6974031648977874%3Bef79a%3Btk02w50161a2c18nImG8GJZsI01LnCFTr%2FfGooqNB40P5w%2F27LBOCRWC4OgnHSa6YSLjk3xBCQy7C65XX%2FtCDEnlPhZV%3Bf3ceb330a2e647c15a61c75d1801fddcecbfb718a8d90e41600dbefd5e2c6414%3B3.0%3B1675058162449", "%3B4400595138570667%3Bef79a%3Btk02w6a9b1b6518nv5yMB6h79cG0a%2BZUb2GDEAwB03s%2F9PTKnOVMpzTzuU0xikD09rAxy%2BanxhQPbRK51S0CU1unaqwm%3Bf2bde64b0de4d41058470c61fe0daf457cd0d8ec0ec39a139adf837a2ae4e167%3B3.0%3B1675058162494", "%3B4534342976806546%3Bef79a%3Btk02w9ea31b8218n7giXNz1GMfbRFb3rduIi%2B3aN4OLnb9Xl6lSYUwPniKfGtvfoC%2FnglYDg4I1DQX1EJ%2Fe742misb3R%3Bd3245227c5b17955dba67547c120ab4dfbad89541ffc541fc04d716e391003b7%3B3.0%3B1675058162536", "%3B7665801247363363%3Bef79a%3Btk02w85b71bd118nrOQli41y04HQ6On%2BMVey8Yod48Y2nz3RhOyc4%2FhvTRvEHHcu3BNk0s8uDJ%2Fn3htMdiAwslbOkZFV%3Bedef0e912ec38c96c681d017782893e09d3dc32b4ad6e17de3fe31a049b8b043%3B3.0%3B1675058162580", "%3B5539305504670939%3Bef79a%3Btk02wa1a01c0518nrP418p8AJnrfzAsZuaJSQT1u8iNCoSPz9QN0CxJ6oirIkmA99puY4tX7uSxaX05bcV3qLakdR0dD%3Bfc89d6f20a5d079b57fc681236f805b7ccb9987d970586a51f26d2c2d43c8bae%3B3.0%3B1675058162622", "%3B7701516183247719%3Bef79a%3Btk02w1d5e1e6418ntzKwINzvsnfzmUwZerbYv0dLdv0BiEVnKzMlWsCQx1wTfFjyMvrwkDPJ7Be6qbkW%2BegXtg9VMjsC%3B4a210bc8c0cd8f7fc3580475f38a118cfefe2caf0c70ad2c4f57ab10b6533624%3B3.0%3B1675058162657", "%3B7016502078228882%3Bef79a%3Btk02w5dab1a8f18nHYLhPkJ1ePW310IsmvqGUBu1KD4%2B0T1LN8%2BdloAbIFRBDFRGxjQh76ySa5kCygESqBXEmKj7HM2x%3B20a5b9e226e2146349a0f933f48f354dc145453dbf1d526af63de39a2948d5db%3B3.0%3B1675058162689", "%3B5919592158765349%3Bef79a%3Btk02wb7211bcd18n9EyAXNgMVzsrUXH0wcWaazmZkFD3cbiCFLAHCTmlGDelKshuDdd7U2PWy03c5DLjgj4ACw74oL4I%3B9ff686d4e022f415ab060d26d068c16fb09b58d86d3e021696dd2be7f668beff%3B3.0%3B1675058162736", "%3B8753032214492920%3Bef79a%3Btk02wab7a1c2e18nIsp1IK6vzkaX6NUnC01yHx4sVXzFWBc%2FMARxepypQK4ZWg3EkHziC2tozXHap%2BCBoHImajBAQ9mN%3B80325ba93ea0a084aeb03d50e28f9fd4548867f431e57d10429e50a72ac419ae%3B3.0%3B1675058162771", "%3B5317339425338336%3Bef79a%3Btk02wd4111d2b18nOArxYNfifvwqNUaFRK6WtNneJ0i2zEjk%2BdE3xR%2FfrkHowvJqBU1kQDHtT1KlZNInnrpycWOe6z%2Bb%3Babe1170876373e08fa5f1097d73ff4639544bf4cb5db170b19e44796fd1cff50%3B3.0%3B1675058162802", "%3B8661504161196794%3Bef79a%3Btk02w87191b0b18nSfRtxOkuUbgci4DiFBcGe9BAK7B2B6vPcAJsj0TD%2FM1Y88k577WMwgulWg%2FgS0AHIPhy5GzRXo4l%3Bb1bb5c93f826185b90761f861cc5d269003adb24d476fcd638168e6acede958c%3B3.0%3B1675058162839", "%3B1223816405828756%3Bef79a%3Btk02waf651c9318nMT7Z64NLsvbMLzaYtFDIohviMul3dz%2FDEqPH0sag3XZRap0sn8cyWdOBl0SU9X%2FmfV2cAVosvCsm%3B7b15e5ab3312e8038422e32fdaf0e9563a0d0557f4dbb9ed78f4212390a56dee%3B3.0%3B1675058162876", "%3B7203817946642752%3Bef79a%3Btk02w640f1ab918n1L6R45rpYC2m1QkVUey2yAhcWFH%2FtLdYecChT0%2BOT00r5BVICkLTEA5UTY0JiblvmWHBe1W4Vjii%3B0922526b5c1058af85f98d7d352db94a0e1b6005b422c06f92665900fa0f28ad%3B3.0%3B1675058162912", "%3B8516633420781177%3Bef79a%3Btk02wc6721cb418nvvVeZK8tzm0H4uGfUzKLDaI19iSmZVUfISj%2FZiNVsiuhgOFnigTeKPXl2e1LEbep4IdaFjxAVq0L%3B446ec3b9872db24b1f9388357c86c4e4591f958f2c0f09e350c850d623242c2b%3B3.0%3B1675058162942", "%3B2904254387600167%3Bef79a%3Btk02w94071bcc18naVV6xNrPUXb9axhf7AaMy66%2FP%2Fbr1vBQhS%2FzhfZ%2B8X2xDo%2FvHi3SyM4GNi8GRIDdmTkkUaZLyLrW%3Bc46724564a1f1b79f27bce978e3d59e606c57d235b3f778e60db2076dae04618%3B3.0%3B1675058162975", "%3B8265874395202105%3Bef79a%3Btk02w9a841be818nkj6e3lvMa86SGQ2JmiaGzp7jP9XpI8kDSgL1QHHAhsKzxqTONNXouTEd7UBVK2FcJK9hLWAxjgnQ%3B811538530a805e021f74b5f57a54f9b3388f07188f7f23f1e80c20c870c8a74f%3B3.0%3B1675058163012", "%3B7313790563924276%3Bef79a%3Btk02wacd31c2918nBUtby7PLx7EkuXTx4LPjO6GpqTVFFefcxpQT5taCalF87t6Uf4VEDQ1K%2Fy%2FNkmMjSVBnYLkpqcXC%3Bd3414348a4df3a5b6810964446c1f2d1bd689d2265af9865edd33302d4394b18%3B3.0%3B1675058163057", "%3B9026791228351409%3Bef79a%3Btk02w8e201bd118nS9Vx4xZGbz6Ydqn1%2FHvf22mb%2FHIDa2cI6RF8PydsdJRlw0zQPIAs6GdKYaOI5b9WefOEqwQpzxR0%3Be927f0d18277edfb7ba430e4f421c3fcd3c579d26b93733b6eeceacdbab1630f%3B3.0%3B1675058163091", "%3B6871783402316867%3Bef79a%3Btk02w80471b1d18neFMsx3ergroXTVs%2FdkHMM2MdGT8FfqKA67FS664%2F26W%2F0o5O0jT99D8inhyqcg7kgJvRul69rTPn%3B7c1af262f1441b759e1a4aca7596a53c927c3d5a9cd5d67471fe807b255d3410%3B3.0%3B1675058163136", "%3B4459742231268462%3Bef79a%3Btk02wd60b1d1418nRQthSIzdulxvwckJ3D8ml5k4bAq%2BVdz4eFCTQCckrgftg%2Fk85Nc3vmk9bHg6C4HaCqm8tzsywMg5%3B16deeeafdd1dd7358b8f600190d931532c2cdb572a36617e257df36f5d6e774a%3B3.0%3B1675058163181", "%3B2303579318432064%3Bef79a%3Btk02wc1ef1d0f18nhAD7Gq3yo0CouxBgEpmsW3r0X5ZAwh6gQXvSnJGNhtfCLkQxbfzmyS6leh91VddMyWCYKgDQWCyb%3Bce7d3e021f0a95d9aa1147b2241f0f79152f65af358e499ade983dccf6edc3bf%3B3.0%3B1675058163218", "%3B3304895711337224%3Bef79a%3Btk02wa12e1b6218nXuLUO5nrNHz0P0n9q4fpPr1ZgBwT%2BnaaW4PkjyswQb4sH38XLWBGVS4pa%2B9DBhsJHOYRZ69iL5s9%3B2a6e883a9531a84f1111c08690204dfe91f3397b5946976b0d2dfceb1f9a4ecf%3B3.0%3B1675058163254", "%3B6378555012251280%3Bef79a%3Btk02wa1c41be118nz0IvuPrqYFdGh25mPLn%2FEIIqT%2F3gAloGQLoG5Eqew9lJp08%2FqgtQf7CfcsaQvRXAme%2BYXBCOiNm7%3B58d45c93d5666e5ad3a8397467a0db3b1c087ab64c12ccc4241e7651fe930ffe%3B3.0%3B1675058163299", "%3B0383276429815825%3Bef79a%3Btk02w8d991b2418nPrb83XP5QcerpC1q1jZt%2FVhMLheNs3uqha%2FB2jxRl%2FMt20FeRMA5e3KXV6Xw78dI02PAbidJkm9e%3B3112df918dfca1f551f6a32ff1fce422d5643081a9010101d74b0adc0415972e%3B3.0%3B1675058163340", "%3B8754290863154484%3Bef79a%3Btk02w9c4b1ca118n5ax0NHcNiik14SRGJF7meTp8M2QOotmNI8KgGDvswXeRBxHSWupmbAZwSk3QGKi%2FHuhprawxoT8O%3Bbd5355a31722d687532dffc7ede956a9bdb2fea1ba464979f7778c585391b112%3B3.0%3B1675058163383", "%3B5948207736636120%3Bef79a%3Btk02w6d3e1b3618nHRqC6jBJ155qqBF1F3Y9c91iuas%2BrnIJXXJLjsuk54KEp4tYFilSlpb517q3v%2Fkt5vVBkn%2FNFTEx%3Be527ff065174db475a5e889c4851e03c507e31f6241a2ffda3f58daa671c67d5%3B3.0%3B1675058163420", "%3B1116645372404916%3Bef79a%3Btk02wf02f1ccd18nq61tmsrZ8VqOAZpnjlZPl6cGTqwyoltSCwbtsJ4DyvjgI9WuqnQfo8MK8cz4D2iM7YC2A4909v3y%3Bb89a5227c57457ad51a32ba865edf35621bf7cfe41a6ff017bf204cadbd1e8cc%3B3.0%3B1675058163449", "%3B8652794363491862%3Bef79a%3Btk02w9b701b9318nVkBd5HhxVQWpkBQcA2rUdvpd9TUiVwv%2FfL1A9D1%2F6Ok2XSl1XXLyTPHaBaIo0UCMMzaFco9a6%2Fzu%3Bdc0a9bc7c339f0372ddb7619d4aba956a8a82219f6edb876cbe8323c318dbdb8%3B3.0%3B1675058163480", "%3B3958749933553233%3Bef79a%3Btk02wb6001c6718nZI0exSstKVbXkHvMIG7bZjt6oa98iglW9PW7y%2FKnPSnft06f3p0hLwda5ly9nV%2BrH7aGZq%2Fiqpj6%3B45f4cd643ba7f7ac06b3644cf9a33986abbe73543a83961e9dbb1a4b405883ac%3B3.0%3B1675058163518", "%3B3223084729312754%3Bef79a%3Btk02w87ed1bb018nQ6mMstVJ9Sl0%2FGzpW8pfjd%2B6MXjV%2F0X74Dj%2B%2FnlcRgxEMikIVF8h65sXnZufTQbqdKh3CvXIgN1y%3Bb391091779c176e367d69bb84703c76d81ff52ea11356df1674437503d48c14d%3B3.0%3B1675058163555", "%3B6397186288063632%3Bef79a%3Btk02wb4c11c1218n7ek9f8Goc5DwySlVoRc7ZrGnvXfSGROAq5AwNPFDLqsPHIZWgubXTqI%2F4Sbucq4eLwMQPG%2FYU30c%3B2c510eaa6410d66ec872768ef8653e16e662f5e9bcee83fa9d930b223d5d960e%3B3.0%3B1675058163599", "%3B5987553048279286%3Bef79a%3Btk02waac61c0118nxxXmD2A4FdrbOhPHOFvkEz5B9cStSQ7lTvM8ImGUtoOGHRunTFT%2B0tr3FUf5wvJnZxRrf%2F5Z3o4J%3B705f858ad1d53df9888c811ad2f37b37d43a721606f558b283c989afb6477fa2%3B3.0%3B1675058163638", "%3B5138747666848770%3Bef79a%3Btk02waa181c1018nDCcyCOzlf5KoE8TLP1QD%2BNjkpwMbUCrNhehz4ew2crfY%2BslBrTBS5Ldi7tn%2FK4Bo2mdyCj5al%2FFO%3B7b6a3735d7088614d33e00b231fd68d2412b24f5fa207d3f02b6d6b4970b8aae%3B3.0%3B1675058163672", "%3B9922163108537998%3Bef79a%3Btk02wd9c61d0718nmJopfhy4LnarTyQV0pJ26s3pZEuokZgY3BTgTjW2TxVfa%2BRN%2FWkxhOlodwznPRU4gMCxR%2FyZ8Dk7%3Ba0c2ae5e6b49b434ffaed4a0fd902b135499b3468c256313d713acb268323b11%3B3.0%3B1675058163705", "%3B2527406253398884%3Bef79a%3Btk02wb2551ca218n1u08V0zzebZgqeNvM5XfWadZ2sIGZZYzM4r7TdZaqQbIo%2FTNNSBMO8NzdOCVepO4jts7JHzvLXhs%3Bbbf660e66f37da8d5625ed76768b2bebd45e3c716b3ad3d7e968aa32558d01d1%3B3.0%3B1675058163741", "%3B2952796083472297%3Bef79a%3Btk02wac911bbd18nh80Jyw1nwLuwOnTM6xm7Fc%2BaHJdPOCfrRiNLBcS%2BiYXnpfMv0Lbc1Pe2fX20eWhIRXX%2FszTZ609V%3B311219fa9d21a7865b18384ea8acbcb1d69118ba4113422720054037fb4e320d%3B3.0%3B1675058163782", "%3B8728919103688958%3Bef79a%3Btk02wadc41b8718n73w0MjoSfq07HEpoVw9WOfslxTzXlIa8V3BvZHklEXxVXml8ZJtZWq6kWF%2BL4%2BVAHFa70l5ONUHB%3Ba2a3b52cfc97def2326ed1946b400ce8888767ec57cdf9f9e1f0a785a9643033%3B3.0%3B1675058163819", "%3B7328149027506523%3Bef79a%3Btk02w80ba1ba818nlMNa1E0x7oa9PRg9zXq8Z63y%2BJaqvO%2BEYINuQkqQKZHB7%2B%2BP2Weydw9xh5yMEEU5Ist7XyxuhYOO%3B0b54824c0422158d24653f87e00c3ad7bb23501045aa5a88d703c792e5800495%3B3.0%3B1675058163858", "%3B8904481537142147%3Bef79a%3Btk02w7a3f1bc818n0Y0ERHzLWi4BE3jq%2Ft09J43S4tuFmI8gzrNW%2Fg9porRmrQzw7H44lOLXmlqPUmmDdnrQLyBbM68Y%3B8c18ebaf478f78b0b51d1cd81136634adf6de1a64baf9b5358bc95325cee8977%3B3.0%3B1675058163902", "%3B2302549711286034%3Bef79a%3Btk02w503f1a1f18nEIZ00p21t3NOMRMpUwaVi%2BEVW%2FLH9dsA0peXg3BCxYE%2F81mIPJHCUf1dOc7nlBd51BM5iSn1ApjY%3B133068f171043a2145ff51c5766bff6666862adc558cfb6bcb53cd35f4685f57%3B3.0%3B1675058163942", "%3B1980441153523241%3Bef79a%3Btk02wd78c1dad18nywpBXawF1XE2sdnI7enxVpBQJI59q6xwFzWDsbPewMg6ZsoMGzDIWYFzUgo7lyEtvIxOooXUn%2FrX%3B5be16e942f1a8c2e0dc97d216573126ca1d8dc2d76e628d3438d646b22f50543%3B3.0%3B1675058163984", "%3B7262053129874095%3Bef79a%3Btk02wd6f01d3b18n4RPhQUKegsayhbrVOqA2j3wAKuw0fyNNWhfmmcU98iQJkmouMD3pvnVKHCmCxI%2Fa6vrRParhEUo6%3B47eb9d71a75e20db7a982ffdd050c3f924c69619b8d73f7469621b03f08d9744%3B3.0%3B1675058164024", "%3B9509018720354305%3Bef79a%3Btk02wb0b01c7118nVqJDv1HtMpEJvQJMRGZh9LYzKSBvVG5JnzUDjIoj3mcj5gNxKgxfcL4P8ujHeon125ztAQS8EuJs%3B102428c6fbbccf3d830a23c2590c53a85c3f507494c9498846a8f8cc958e7a75%3B3.0%3B1675058164067", "%3B2234306127484495%3Bef79a%3Btk02wd10c1cc218nMkrWkPUjuXXS%2FXPMMmDksRvgq8STZWnNX8me6Ty0qTNIpjuteXjTpJDI5u2452xw5MCgTAIvmwPC%3Ba1bfec5270b851f497dcf2cd944cb5c5d176bff07af535c6b794ff1d1a0a5e97%3B3.0%3B1675058164097", "%3B5449053129505006%3Bef79a%3Btk02w60d91ad918nkJBRLi1OXK40%2BS8jVqBTWHFSEX3glRnW5uaQ448lMF2oNKWeYsA%2FGKDwqOpnDsARgja%2BGEVgVr8M%3B662c98acfe30f4d6c980a0e6704af7384c50b5fb743a5e7e57c9e86686064fb1%3B3.0%3B1675058164136", "%3B6947258480398983%3Bef79a%3Btk02wb1921c3618niMu5C5pTtgfn6i1gJmHPOs3YdjawSJH4GQ0xwLKjyzZF%2FpP95pvBX5KsU5OcdmyX9cUsCMHA9ZHw%3B6dcddd1d075cd3e5bd553d1e54dd07f38afe05626bff2cccfcc430bdebe2e79a%3B3.0%3B1675058164179", "%3B6215839850883050%3Bef79a%3Btk02wd24d1ca018nM2gMeJBai4tzshrfW8TsxzuOeQptOU%2FCR7dznF%2Fva2xHgYVWiJpf63Han7GVZhYtZB3EHC7llsQ3%3B38e5de4ad8a71a37cdc55d96990ce0e903ba6cb9cf1c1fe20fe82a132edbb5cb%3B3.0%3B1675058164219", "%3B5856754205537816%3Bef79a%3Btk02wbd981c9618nHepFhI3mqox65abSK6BkuLhH397YDZrOuzdgAzRuvjDkaxjmE24zo7Pfefj7G%2FCw%2BFfxJMdLX7xJ%3B9459c42bcfa27e056924d2716d813fdb660e203b0b4333a0095daf404b4bb738%3B3.0%3B1675058164258", "%3B4390940376299848%3Bef79a%3Btk02wa9151c9718nWKzN320rzmVRdBoRSIVO1vD4i2gWX7LjsPYyatqkkR4%2FFjAqOrORdbjiOe7O3YvuVt%2Bke%2BAUfaqp%3Bd099156998c72147aed64f16b6f0f896ec2a7b9abc89ac5244b1ba5a6c8ea6d9%3B3.0%3B1675058164302", "%3B7723517777868873%3Bef79a%3Btk02w80ce1bf018nDMC46QaXVvKR042vztMY126hCPPIvsNKuY%2FIrPfTmvIZ1Nv8UwMVsirdXa26qKWdMd5AztXz4Ibl%3B4fa6213e1a10385f58d0b842b20377eed7204e55c21666ba1c8cb03ecebf7f38%3B3.0%3B1675058164338", "%3B6908172771242571%3Bef79a%3Btk02wbfde1c6118ntpegUhhReNB9ApvKJaY6vSHuJ4BesBAoKcTM7dtee2EXnhYjHImc9XpOg2X%2Fwx1%2BMWTVLPNrf8ci%3B5e7aa5ac0e694ac8dfc449c900ca2f9c98f1a33ba682f4806b5f536fa0d63470%3B3.0%3B1675058164378", "%3B5903214459787972%3Bef79a%3Btk02w9a4e1bf018nUH80oxLl0O09kaOayq0BHlhwPko6peUlU9eYG1k48rpO2oVGsujc1K0QTYI1Ro0djfHnQb1%2BSbwz%3B4aa390cdb7a11468619f18d0022684b7f26d940773498def37473a7b3be2ce15%3B3.0%3B1675058164423", "%3B3297265800929945%3Bef79a%3Btk02w91491b2f18nGfcEfolyYJR65%2B1TXcfcPE6iuor7j41L%2BZyRV33bLzbkTQXBrIPNd5UeJdoJSDY3x%2BUWr96OBAq7%3B44da62057570907e70526878eb24c869322edb94b8db7937a11fbb2614894c86%3B3.0%3B1675058164467", "%3B7698452714125021%3Bef79a%3Btk02wc1c71c8118n71IrzKoPirpT7SnYoE%2BojqzWFbACFYmVBC7VzybKBrJdlxtY%2B0nbuUEnPf82XHFtYJzMJv8d2XRI%3Bb627db3b70005c0194dd1dddf10983c2cbcfba0ba0438c9e4817a836da01e90d%3B3.0%3B1675058164511", "%3B8343320671771385%3Bef79a%3Btk02w77b51ac718nnGctAECWMlsZc6%2BYI%2FnwE5MPEaMk4UYE8zf2%2B1sDN4On7z6hFVPmY3njX49xQzAVDGl5L%2FCs4Gld%3Bb5c4c2060e1413946e07ae7d934d0de047c10e652c374c0fc4844fedf271da76%3B3.0%3B1675058164550", "%3B7915426617903993%3Bef79a%3Btk02w8a531b8518nmwhuF37OFR9BncAxfy%2FqNAuKkHU6Fc77sJ41%2F1lXaJH6UTd6ravr00P9mhoMpfOqHq713mngZg6k%3B3cc9350d92501c680448773e1933c340e6ea2aed966020659598a313efe2121d%3B3.0%3B1675058164586", "%3B3127998040486361%3Bef79a%3Btk02w922b1aab18nwhCdojH15G2iiG9gaRRcxKOTOb9rJOPR95xtOWVPrPmAWNYyO6Kt06ec%2F1hAfBSI050Jj40T8Ex5%3B3523b808897e5ea1880ef709b6443c3ad01d247b1291ac7c8df492bee8830648%3B3.0%3B1675058164621", "%3B4754062374347844%3Bef79a%3Btk02wb4151c0118nniLQOYiK6H6ydEUhiHNWyKNv5DgyNyUDiYBYLN7ozquZbc0869NtnXhG3lVVvS6uQK4ms0%2B9hECZ%3Be76594bfb6d47d80bcdabcb1c8428e276c6daa22be83b4e1785c32892f7f80ba%3B3.0%3B1675058164661", "%3B5190832655571554%3Bef79a%3Btk02wd3431d7a18n6WL1e6z2KjmrhbpFkFfsgxl52gG06wtTzdbonauaKPboXzCZdjiI47RDsdRwRrncm%2F%2FnQphNo5Rk%3B5e121063baa7a1bfd06417f6a176c0e73bc6cc7389d35b88e974c77857a6ce87%3B3.0%3B1675058164699", "%3B1384926035155502%3Bef79a%3Btk02wd72a1ccd18nGuUtpR4Ji8hTiUnPQmjtEjgRzeaJYbTPQ3uEGqpiS7z0ooKpTKpGBL8SRmqrs7OK%2BW7ZCvBgPLFj%3B296f7205be1439c7e8adcd6d1009999cb9bfbf1d258a8ccfbd26e7972fef6fc3%3B3.0%3B1675058164736", "%3B0726814549941310%3Bef79a%3Btk02w8a6b1ba118nNNB1Ukj8ooX0OKKdr8PZ6Bt9P2DxXbI5Wvlycuzg4Km79noh%2FTA0k2HHLkfJMZYMO1okwlM17Hzm%3Bc1e6155d32b345f8f8b8c20d5d2168a660cc3ea1264e1ddd4bd60b267e75ae03%3B3.0%3B1675058164770", "%3B6342616409587229%3Bef79a%3Btk02w7b871b2218ngA31E2va8IBf4cA3NwTkvh9%2BUQzEptBpv58v1etEdIJPsPWFvIyHWbNKu35WP25eAKdeNGh2C6mh%3B4263c6c3289dd45eb08ae7b451541ebcef7c477114c6848fe98e510a4b1cd53e%3B3.0%3B1675058164810", "%3B7871097285428343%3Bef79a%3Btk02w5e7419f718nXOZm7gdOJc8QLJF%2BBMNvOl75uBFA8iRFX69Fem2cpRWvg%2BbdH3%2FIP3jEPH9ft76%2FEYKgH3IMDiNW%3B8bbcc56842fd0afc451c1676758e36081358d59fa608bf6701f4036e69a47ef0%3B3.0%3B1675058164845", "%3B2282388541632028%3Bef79a%3Btk02wc3841c5c18n7quiRLtTDNUdR1co%2BYw2yuCu0tWbqDvqUvaACWzn8uU5Js1Kfk9dsJPNTMHqY%2F98D3JjKoiS4Gkr%3B5d6027fdd69fe25bbef5d306a9b50f4715332c39deb27c6ccfa56a36b2f812ca%3B3.0%3B1675058164886", "%3B1540726439539643%3Bef79a%3Btk02w8e631bbc18nkiJuFP8hbT7pLV9TE4Rg2HfhOryWJ9s%2F3a1GqMMh9PVe9KocKEsmon0Ht5UBIFakSHxJ4r4m3zex%3Bcc018210cdbf05ecee3f6580ce8e1973c5542216de44e3aaa24845a4db692500%3B3.0%3B1675058164921", "%3B7238095946815580%3Bef79a%3Btk02wda791d7e18nzyb2p9WxGArirF3nZh%2FpqUqpR%2FFmCz34jIpakwEnib82caQQfVaIGuUrhXnjs7WPxDKDxh5SjJym%3B738c7062da7f42af3b642e5784cecab5f901e5f9836425583d89e9ac20f8e829%3B3.0%3B1675058164961", "%3B9142085823356730%3Bef79a%3Btk02w9a071cb018nlMZGlbFeRQHAd0DmDm3boEPe%2FM2LNK6N6e4qw3GepkqOk3PvYovbZd3oslCndmpqX3xFhye%2FZTqb%3Ba2a0c79b9177f4983f981357b7245aa377130f5e9669aa2af57199daca5db90f%3B3.0%3B1675058164993", "%3B1705981417368842%3Bef79a%3Btk02w3f7b193a18n2Auw9S3I6xsXo4ak10W8UfD5j%2FpJcSI1GBf5V%2BzE0a7T0%2B63G0DDXBWT4bCLg7Z%2BhNZ%2FO4xg9QjO%3B930c484fa59ce6449b3d59e580e839a6eca4d29daea7cc4cebfb53bab0ce7b32%3B3.0%3B1675058165026", "%3B4632951184840442%3Bef79a%3Btk02w980c1c8118nb4309np8KMZfcUisxINV2d1Q48ypL5Z6KPaZAuPpqqPvv2EtmFsOMMvgckeIv4eYY7emeaAWucJS%3B20cd40cba00b7aefa3b0c346b29ce65637ca995698e2fb1e9afc54e4b3defe48%3B3.0%3B1675058165060", "%3B6960812584860935%3Bef79a%3Btk02w9a541b7418nws8dbGLUm7S7q6Z5foOSiVro8D6mx7lZ88ja3Km4xhBvP3EGea5dYDqKBq5S1KU23wzBFWTwvAW2%3Be90744be270bb260b6b14eb859d7e1f2237b34d352bd60f48a7e2e314aeecd6a%3B3.0%3B1675058165100", "%3B4818863271797495%3Bef79a%3Btk02w984f1bd018n60CRSiOn2xpSYpIBgl6Xg7afS5HinHnyxVuDgU8BNCmNNPZKo%2Fw%2FF%2FN9xPaANFN0KzqDjYZBOduf%3B62be8548707df639ee8b03c8c6da0dd21dca9f3c8a5487b59a69d4c4237c4598%3B3.0%3B1675058165133", "%3B5297356804695267%3Bef79a%3Btk02wa6b71b9118njUyaKeDGGgWtaXv0S%2ByRy5bRd%2Bx4a1O%2FaCXCpHHvNkJQOkYJHm1XWJVoBvgrK3yqUS0%2F4bWNPi6%2B%3Bd0a3f4b46815c2aae73a78ad28c78728a5ca07169e06f946d7d6a74e8c3cb80a%3B3.0%3B1675058165163", "%3B5128943690749431%3Bef79a%3Btk02w96e71bf418nArDESv4tFLGvW2DzR1oUOe9qSWlakFJ8ENW9cpwmk7%2FBlfl5LNwx313gCPi36hvYsDhxNOYNFdai%3Bd27b358a674d632b184c82a18cdb606c15fbb2e7f031c6e9b21a788387027054%3B3.0%3B1675058165190", "%3B9386960213493636%3Bef79a%3Btk02wb1581b8118ns2guh0aom0WZToA4qFGY7zOkdaK8ui6p%2FRDddmYirdLhPfkf9OVJ65P2rIzoJMAE5Vu8G85LFBLE%3B13909edfdeabde75315df9b75069b56792754b91883fea5e0e95f938f2d7a95e%3B3.0%3B1675058165221", "%3B5386491110373072%3Bef79a%3Btk02w87971af418nIAk1e1tNqOB8sYKNDc6nh8cc0p9RvZbQegDYyDCX2YPaP1n%2BPsVrRbBEJKWoFfQ9GtE%2Ba%2FO%2BFcj2%3B3ed14de7b650f9d0bc49069507345fc2a5064bd61effcb77a328f7a5b9bb099b%3B3.0%3B1675058165255", "%3B6347052990107770%3Bef79a%3Btk02w81821ae518nLR0vR3ZonLGuHRsieILl1AHUjLWt7FRWGG4pNt6Gw6%2BiArnAFIh0i%2FU8CU9DU2b3csHb%2BOhdWFoX%3Baeac1d0b97c6a72ff47063a962c918e752885492dfcfde19ed8c320b8968acbe%3B3.0%3B1675058165290", "%3B5999729941855928%3Bef79a%3Btk02w864a1b5c18nfrO6EtOpOR4YVLQ6BHAmB46hX4WSnXq5JENi0YNtOxjnajCaeWRRp3ZLZehSXN08qEr87efs2RR7%3B3bbeee90619701cd3b9635d99ed7b10077a8047fdd9aeb8d79acc30d08ad2483%3B3.0%3B1675058165324", "%3B9700790772615989%3Bef79a%3Btk02wa2b81b5218nUCuaDIh9GMNixqkT%2FtQnJSApMnEzNJVbYKMEMTMmLVYFlEs9ngjZ01R%2FKROV3PQLjZ5SES%2F1AlOm%3B7bb756590b9c31a5f2c92b44b95dc40042da4bc4e2ae6686c805701ab29f99b2%3B3.0%3B1675058165363", "%3B3942439157843947%3Bef79a%3Btk02w78711b6618nsLAb0LWB6j20S5ub4kFz8f8FK%2B0sBFEygypvHh5FIE3mihlawpe03UrOTbkqSO7nsSJXZQ13%2BsDp%3Bb2892ec4e9ccd828d8894ac75233d8dc47bf44391f44a23156fd854f2f6bb1fb%3B3.0%3B1675058165400", "%3B9533261770374434%3Bef79a%3Btk02w8fdb1b8718n0w5NhQ9BsrY5jQdn6Z92UQrKdcjEU6nuPI1fuXjm%2BIif137u72CzMyfN8kaaFGlRcExR%2BWcgLUH9%3B2c1a79dc6309b032cbb70344ee09f9349f48e85791f1beea362d67b1b30d0460%3B3.0%3B1675058165435", "%3B3219864523573094%3Bef79a%3Btk02w80551b1418nKgRMYC5vUxkF0RAMvGFW3JWxwHw%2BQCK5GZuELcxCbdHUC8idI4Z15RKEJ3yVflOGmfhHAGZ5age9%3B0426a0f1fb5b43db5c13a3c87385d0483d6da6801b8aa576f20c4d9068bd60fd%3B3.0%3B1675058165469", "%3B7004865055902223%3Bef79a%3Btk02w81721b6c18nL0sYYKZEWU8ai4LBcmjAJISlGOm4BH6OsYbe60ye8Vic1Oo1k%2FvTO4ZrhaOO48ztqCYzrNXBsY%2B1%3B1324c75c3e88e113586cc718a39655a9af0b01b10f32107d70d81cd0a495191e%3B3.0%3B1675058165513", "%3B5467832186078495%3Bef79a%3Btk02wea6d1d2618nUC0VzmSxuwbmTroNxxY8WOxMqudTNIAiiRGiUeZna9MQgVqZCwC8g26P6rT1Aaffl8jDX3imVZuI%3B3f63b9da0b95af57c26b8d0e6e474507a8571e11bf65906dddd1c007da352658%3B3.0%3B1675058165555", "%3B7074848169324079%3Bef79a%3Btk02w78f11b4518n0D7DwQD7hX7v3wN%2BAXyaoSU3rtN5Fe4wdI1YOA69z%2FonYmRsI%2FIoVRsqsXKJo6%2BhTXo1YpEZ0DRb%3Bf6d9d47a59a35e882f5336c205430c65bb0252763f1200c11babf1bfdcd4e396%3B3.0%3B1675058165592", "%3B6799386615032928%3Bef79a%3Btk02wb8d81c6918nR84jibu8TlktArUU9oyYS9mi6Y9q5WyQC%2Fjnzq4TBIbHEpRjd8rHYGHrxlE7CSuyMbcR9VP5rtJ3%3Bbdc3d50ac2d96865227ce6ab602e9568c6a9cad242b102552d5a02d0f05fa8bb%3B3.0%3B1675058165629", "%3B9624306896991863%3Bef79a%3Btk02wb46f1bda18n0rwhqIn7SjSzMU0fqHpVC8iy7vNo8FAyPpzBjbmCN85NGKFC0Vd1Pge1xrhBInExKQ4HWW89bY3y%3Bdfd7511071f629c2474165cf41dceae642a9520367da1ce54d5e83291b6638cc%3B3.0%3B1675058165666", "%3B4012605390642106%3Bef79a%3Btk02w85921b3618ny0RHK3rJBSNKKZmGLmDnJwHnaBWgW7nkTNLdgcv9t9u%2FO5%2FEk%2Fy1p%2F1v970%2Fl5NHeZF3ifBqiTrk%3Bb8b7fad7f807c47e97e892b6fb35e824240078b0e07a0cec45c602c6fb383737%3B3.0%3B1675058165697", "%3B4787974136502957%3Bef79a%3Btk02wcc321ccc18nFsi4sTQ4CiqOesdf%2BgwkqkW%2BKrLHjiFbW5TTKCApnyYmGqnoZGeMVaSyEi0VEZF3k98zqNG3raEp%3B61c9a5c21686619c4adfc60f01410aa29d9ef1a94dccf82ed2eac30e043fbed3%3B3.0%3B1675058165730", "%3B9565166038245639%3Bef79a%3Btk02wab0f1d2718n2gOR4pZeLPjHwkV5xz%2F0PgxA4UY19WR87qw4v6mOifAOu5zYBiuxoznpHmSFaWmYwimCgxGcFhtT%3B82659347dcb1929144da5f377e123da65df66224cb6a41ba9150813c35860603%3B3.0%3B1675058165767", "%3B3218047464597401%3Bef79a%3Btk02wc5891c6b18nnr4Obpcctkqn5Ww2OQMVRXCbrDwoeN4fIs7p3LvpPITiq8CB%2BfTAq97s%2By6oOH7GZg3FsLTfrjPo%3Ba62bfe901c089b565fce824f67f5d2c5188146cb8266a4f2b0163ce9890451df%3B3.0%3B1675058165805", "%3B6298134716625685%3Bef79a%3Btk02wbf611be418nuMUYOxU9uHbiolM7BuRfdxz1rFbAMjbbBpVIWqtLVjhk1LU3%2B33F1J3aJWVRJQkU8cfHCtl3NAjI%3B760e16ae5caea0328dd8236a45e2a4bdba37e420239b153a4c138b9eb66c7b5f%3B3.0%3B1675058165848", "%3B0279365034463351%3Bef79a%3Btk02w7e181b4e18n1ji32olQd1Nf4o3AsHPYD6Sj5m%2BVZw1pzSOka%2F%2Bg46gChiPvl26TetcsysLX4mKH4%2BfC0EZrGbUc%3Bc8f291fcc3954fb999eb080491f6b321b791f9a3a3c23988f9f366222d8f03c6%3B3.0%3B1675058165884", "%3B0566893472158667%3Bef79a%3Btk02w7aa91b3818nU4DcLcAQLBUDpPKZ%2FC1rhleN3n7OERGCGOVBXuDRbGxlsjJTbQ%2FioiLTJskXh9VozYJ%2FPNL%2F%2FLn7%3Be958d55ac93d41c91e1ba3afc04a2aa61eb7d22b664f48643a4a42702df89b32%3B3.0%3B1675058165921", "%3B6173048995988723%3Bef79a%3Btk02wae501ccf18n2KUUZ2PKWl9sBG4jLjqBSle6McZKsuToMexX0dq5arsrzbVO4XkUhWeVu3VEmVnn0GVlkv1Ho%2BxV%3B753224fca52a25ae46a1f413d9315ffa71c775db75dbd80e75a14dadd3d1b3c8%3B3.0%3B1675058165955", "%3B6956658734175628%3Bef79a%3Btk02w95781bc518nb0wUbm5ytU3uRR3%2BOKKAmo8cBFC4RzfZpfhSP1mlO18%2BSbuOoQppAZ0r%2BMTbbNh%2Be3xE8IusYMOw%3B55cec40af5ddfc8589d3a80669deb84dcfa7836ee39150d85206ea3600a15442%3B3.0%3B1675058165991", "%3B5391874747304022%3Bef79a%3Btk02w7cee1ada18n8l1nM1KuDElyC2CBRT3RMn5vyTx7jjMWoTHV%2F%2FgmUHCr%2Fzu9EUOa7UBPV12mmGWHgjiBWWWa432D%3Bb6cdaf97315bc6e1d3cb6d28a843351a288979a2e225eeeb63e4ede8abf556db%3B3.0%3B1675058166027", "%3B5905296793185759%3Bef79a%3Btk02wad291c8618nifTeZWnWE5Wev1P5rIieef66Tq1AJyW3tvIGwQ26slUGVNhG%2BvKj6oMuT6n2dxn%2BoubQEnKktjp0%3Bb7640b843a10f75ac80aaa260a7bc6c630cf3f47211e0280d05332377e032372%3B3.0%3B1675058166060", "%3B5954717416834279%3Bef79a%3Btk02w8f4c1b8918n8QTrvqH5Rc0D0qT3z4BNqP6hyqqq8JBmBQdmo4NkXS%2FkkL4sp6qD7Jb%2B%2BEaHDW1hTKdZWw9voOy1%3B644d03eecd8ff44b6c80da893d441c295aa044c82421183fc82ae6de97ad47c5%3B3.0%3B1675058166095", "%3B8148825011768745%3Bef79a%3Btk02wa31f1c2c18nEvePXmvEFwjQCR6nkCA2m4NhYNfB1CKJCLNRCz%2BegpwPRUhtfzAYQb3vjG%2Bkj6kEF7s4tMj5tUcq%3Bf259e4ac6c64c74e77f37e3d1f718c1ef29f5d86d1e96525388170f65aa57371%3B3.0%3B1675058166132", "%3B0901948653319275%3Bef79a%3Btk02wac2c1ccb18nVf709ZxVrgwBHSrcqOz5OQW9LBOIcAzVuEsEp5%2BoAs9iJw%2FqaOsUfOW87t5O%2FrlqVpus7eOmfuhb%3B07b536137dcfd206492cee7ae9d85d40e6d2d07be032953e5435cfc63f32b826%3B3.0%3B1675058166168", "%3B9540187898732892%3Bef79a%3Btk02w99421b3718nxeSPxtjtXyJ1nD0AsI2AN4%2FFV3xnIF%2FHrSIglg52w4nh%2BJdNkry%2Fdd5LU2jNUUAUlWE6WrD%2BWa9H%3B8adf681d1a6e71f9ce68fcef164f443be0ce5ca0c0f7b4dc2c2dfa2f3da7a3aa%3B3.0%3B1675058166205", "%3B5228372100999213%3Bef79a%3Btk02wbfef1ca118nyujjyAeIsHynaE1ByjHr1xoO3mPE%2BY0Vz8F473bHHaCWbN3Sfr1eOqsvxIcCFyMdk1zY2bfVuf8p%3Bafa3a4f55db7d4a87f3053c237f8e8d7dc3b045c9629a6cb1214517a8657b974%3B3.0%3B1675058166240", "%3B8115858587265339%3Bef79a%3Btk02w9e011b8918nCwd4j2cBfUrpfadRFVtYsFCVOt8J2Pgtd0t0pUH9W%2B4CB4W6BRw6ilwUdJ5QalYIwB4lIyVyHE6C%3B23a0f3141ee8dceb7d2bc6375e30972eac64e66ccf00b83d538f9dd0eaa9cc22%3B3.0%3B1675058166276", "%3B4360128599584993%3Bef79a%3Btk02w730f1afa18n9bU7lkOnR3GFzRYC1ASuQZpSKVKn%2BfH2L5%2BCL%2FHiUTMjr2EJqGEwMXNszVSp8P5yU8y3r6kBUN%2Fw%3B12b80725dcf10644a9b83cdb259d26262239739cf97187064a2d18cdc8bde62e%3B3.0%3B1675058166311", "%3B5772715154908619%3Bef79a%3Btk02wbd3a1bea18ne5EQseeZrsdONSHvKtN%2F2rRjzNqj4UNhuikJmG3u783Il81fxcMWnFGfASs8IPhWUq1jF%2FS7lPG%2F%3Bc6dbc808d7b5743e25482232a03338faa85115ec6167451b5d31599f0e578a85%3B3.0%3B1675058166353", "%3B0298310754202612%3Bef79a%3Btk02w91af1be918n50ZCvoC8hRR3dHrQqa2JqrTE8rFffjBB3xUESF%2FuPRcUaREMrqV4hbeECP%2FxGysfyKfgKG1XOfPO%3Bc0a8a6cc627c9770fbcd25256ce8992debb9fba1ee0db6e9b587e802ec6fbd45%3B3.0%3B1675058166398", "%3B6471952080699681%3Bef79a%3Btk02wac211bc218nYuS0lqbNi6i72ZnRZXYr%2Bj9aIqDzvGDX7IG3IAYvStBNzvuvkTrutd1Ai9P4a0T01F4VhxETM3JX%3Bf35134663585e68f2623756600cf6cf172d2fde6682e73c9269b72f948705432%3B3.0%3B1675058166440", "%3B4182159012233775%3Bef79a%3Btk02w6d3b1ad718n2zr7ifC5BPB51Gq93%2FcZipfl2E1REZX6YTRUQpyPmJh4sTl%2BTxo8%2FcL0OCLrqLqk7AjatN672S8g%3B69c18e93b2953dd0368169965792456a0ea1f78487903a0153009e7782b50a88%3B3.0%3B1675058166482", "%3B1454452906857558%3Bef79a%3Btk02wa2611bde18n48119tfhvsucqmU%2FqhN29kzZIX3pJ8Nd8xv0RTUMapsjyK%2FaVfOlC5SYc62GRwB0OCqTi7oN0pYd%3B776fc2a26044a0f89477ef663f40ee77c87eb2c53a0b45bd1c867c3477acc3bf%3B3.0%3B1675058166514", "%3B1405968774682382%3Bef79a%3Btk02wcef71c7018nIxA9vSGoevUf65pqeMbHpWtfVWswP07nzoW9DyZY7SRolXgQunUo6F2abRQLY9465Mky%2BCZYVVKZ%3B16cb1e699e233708f5af10d090a4f805bc4383f26a2b83d93f29ada5fce1c681%3B3.0%3B1675058166552", "%3B9465523075221156%3Bef79a%3Btk02w91111b2818nHOy2sGkYjcBCFpIaMYxIYTDqo6MyBcTyD0%2BSS%2FJja2YRmm3f63N2SmldA%2B6C9wC5GwsEPLdJAqbM%3B600bd3f6bd01d960364ce87c406aa3cf66ee2a16bc1484486b5a5af1e0573e43%3B3.0%3B1675058166587", "%3B5570962803407795%3Bef79a%3Btk02wa0f71bc518nKHRLi3dJdco0oI49YbnH8tLgnQzDzOyfGeALY%2BKUm8AWg%2FjX%2BzvutIeNSazPcZ2LZY0Qi01PBTIb%3Beef701690a56d751132e181703038afbeb68990ba618f4a6dc5f9a9acbb7903a%3B3.0%3B1675058166622", "%3B5743482619008457%3Bef79a%3Btk02wd0451dc018nna1EjO5tm1pUvjZP0Z3RJs%2BxYYRt7v0y%2FuJqmoe4smcnSgeonn3NsexEsZQkchqI%2FqyydpNg3W6q%3B6e20edc88d801e799814ed8df9e071a2f93727c3bd3cd68347b21990012821e9%3B3.0%3B1675058166657", "%3B4697701853350530%3Bef79a%3Btk02wb8201bfd18nZgnOCJjbXPWrOPkzQngtSBTBEVlCQ4z1Gb3WJPd6F5LmpJGmbixQHozLsigtT5A6QCC7zVRIMS1G%3Ba16a0533991fd998c288bc446a68b0baeb841be135b616b8c8db3ede5266afd3%3B3.0%3B1675058166698", "%3B1135656972835167%3Bef79a%3Btk02w9daf1bd818nrwSwAi0Wo8Ga%2FmB5tBIbaBYvO9BToybOSBCSc4PfvoXb9z1gEF2XDgPVGrDQ%2B1IZZAvKtLwgc8Tz%3B596b185b4b9891cd0ddb07d4cbd21546a3c5a74292791a69dda9a109bcec19c0%3B3.0%3B1675058166733", "%3B8887096585644633%3Bef79a%3Btk02w679d1b0218n9FrnT4AC1CjM4Hewkp0d9LpX64Hjv%2B8t9Ak12cpcTFI85sCieBT2izaAW0VeVco7JqL6cN9XrnYg%3B06ab338e7988b638cda96a925f095d486d969e10c4123ff6a8a659f923284d6c%3B3.0%3B1675058166767", "%3B8003838516433058%3Bef79a%3Btk02w9f721c7418nO2yXsXXaKsF2nmqVAt6JKPFRUD7YFAmO7MpWgo%2BZOj71Rl8zaYJY5MVqdkLoCvzmvHZrtX4rK2so%3B836b5911bfeb97b12d44ef454e016423857447f25206ec84792b39c646b15966%3B3.0%3B1675058166803", "%3B7209431745741851%3Bef79a%3Btk02w82e91b8618nrk862QVAsCIFg%2BqxznPJPF7UX%2B%2FLDFj0LJq9NjvS2DcgL%2Fuhjnu0QhwbtWnOkalAoFW6I13YkBkB%3B859fc5a2e8e6547326565dd496409e97eaaf077dbf107ccce2b8c954bcf1228b%3B3.0%3B1675058166839", "%3B6840925353715611%3Bef79a%3Btk02wa80c1b8918nxLrSrxbUpbA5hBvEgR%2Flw6bPh3UTdBC4DBt8C5%2FdlH%2FeFz9h0iScV6KnvpCLkh%2BqhPLlZQUN1Z25%3Bf3ceb61e7e436691248e7a897691e4c1da0ad7369dfc54313c538bccb2d20439%3B3.0%3B1675058166865", "%3B1659244801882711%3Bef79a%3Btk02w7d091ae318nyi9CZ1KmfeQfJ6JxBO83UUP5jurs7T665ApXM7gjt8DcVJIAEucjI64I18JyfWCzs5flFO8MmQE8%3Becb645424b8e140a2df944badac6fcaf2fce9bf3e94d4338e58680c592050443%3B3.0%3B1675058166893", "%3B2909239218726698%3Bef79a%3Btk02w71041adb18nrHlY93hc2EpBSb4Ic4IClNGpVhbFBJ6GM%2FqHBaYn09WJIw2qEYlSvN7hTMc3NTiYDGN9z%2Bta0zg3%3B20d1558f91e0833e672845b0e2483dbf10edf7ba94a5f776780f22ed6d288106%3B3.0%3B1675058166923", "%3B3443760852144226%3Bef79a%3Btk02wc3c01cb318nn5GTG2nvhmrnhJQ1%2FxviCvKa9EdNvghHa3%2BmWGvqagxr6AZ3qhCxRnV6KKm%2FQSXxMYhoRgU9AKxB%3B1892f0aef1f45e5ab9cc0b3e2ecf93e14e4f66c8302d1284d9d67c34b5a57974%3B3.0%3B1675058166953", "%3B6730428681512262%3Bef79a%3Btk02wcdb11cd118nctM0ReZWksh78ZA4BwZpHsTsrJgEymDevUhblqg3Wtxd9fRk0ScAnHLRCO71LcD7Tsq%2FehotR%2FGx%3B0299edea5d62b0229192e362e6139aa1b25304ed64841e4ce801f3468cb2ad77%3B3.0%3B1675058166987", "%3B3621415099195890%3Bef79a%3Btk02wf2af1da518nZetosLudOvAMwnO%2FCGB1FFmrxbsGymbslOjse3x4uqwmFk2jVygREOPcXAUqgMcS7D%2F%2BQtRdvMcm%3Ba95d77d18d6329bc23d9b13bb414ee0493a25bd46a43a6e09716aae9c030d1ec%3B3.0%3B1675058167022", "%3B4381268907453383%3Bef79a%3Btk02w9ca11c0718n10tY7nM6lCUqHFxPLLJ4qBsLUaPKCDoOTAaPjs6lqpszxHjAtY9hYdLsQa3Kk35yyu6q6a%2BnC71d%3B487c6d205d91484f6f1a69dcc7596f4d67510bcaf3468788db78f6843dcfdde1%3B3.0%3B1675058167072", "%3B1249148076948517%3Bef79a%3Btk02w9b281bd518nuXCthDd7RPWdG12BfS6Ku8efhPU2dSXkhvM5Nby1MTRmsMFTvIbw4dkym0%2BGLXL39XdBact8LjIf%3B3dbc29778cabcf3b79a79e2762be77905158497825f5adc33f1489d0cb4ae4ca%3B3.0%3B1675058167116", "%3B8592356174850057%3Bef79a%3Btk02w82941b6818n9N16Y1EZotL1au87kHJUgwo5%2FoueQR8g6iHnrZmYJ1gDZDNnOXhT3mM1pIv1Jkjepq2a7WLU3kI8%3Bad213d20ff2243dc07c154f7d63dda138ec18b84144c3692f90fc07258e993a5%3B3.0%3B1675058167150", "%3B3584069976139631%3Bef79a%3Btk02wbc341c7118nuCyROZ5POr5emWPI3hnbhons261oOHSlldjmqV6UPks28oEPiXHpA9y2QlRQpiD8SnXDiXpKdL3S%3B40979c73b14bb03e654080dede7a14b939f8cfc33821e0a64754962b065440f8%3B3.0%3B1675058167186", "%3B4823401609967571%3Bef79a%3Btk02w84e91b0718nwo09o47ZRLZlJVcGmyltLMS7KS0BUDHFwO7jlBvltLN8I%2B%2BY9SoaLH2HUXQQU0jM5mTz1SzR2LgW%3B66e2395fb025faf92aae58f6c96bd34edd38d256a025ec6b715ea72080ec11c0%3B3.0%3B1675058167219", "%3B3763373725016429%3Bef79a%3Btk02wb86b1c7c18n9VDWETcGRdOyziOdjP%2FsoA3hNSMaHXuJjpTnYTZ9FBjcrzz8NUJWLDbwjZkfMCe4CYMIT7jjoNBL%3Bf6d4848805b3200412965cb614bcf5da20602ee67df04c93b7853ef8de77df1c%3B3.0%3B1675058167254", "%3B3661792635348854%3Bef79a%3Btk02w93781b6618nQ4lERUN6JsoKja9EIvn3n1EqYTqYi88aRAa%2BmbIks1GgWZHfnkl5byl%2F3MR5%2FglIoXgU5vB18FSH%3B962c647574a7b445a9db69f2400ed1581beb3604b1022a74930df5f9b70c3d05%3B3.0%3B1675058167291", "%3B2998938365489038%3Bef79a%3Btk02w9b701b5b18ncoOmSZ0sPHDsCpchr%2BNfPJQRbaJnt42gb410u00O3x0mTztArz2v2ofI%2F82m9bO0G1oroR0CN%2Fzh%3B8f57f6c350d550ed896274141e8bf67e65a29591950c12c8d04f1a88a53913e8%3B3.0%3B1675058167326", "%3B0670248955967534%3Bef79a%3Btk02w8bf71b4318nlaynD7IJ7IZyEoizHSx6L%2B8Tf4mBXaMtzaV663QEF6r0IR9Eqn12ytn5RC0DAIpcuMFHeLuDrJ3z%3Bc144e463a2071e09cdf08a15e6bdcfcebce141897203c9a3b3aa87f2ff26add6%3B3.0%3B1675058167361", "%3B0372456565633692%3Bef79a%3Btk02wafaa1c2018nQtgAqMPwTuZUJR4e786uacqmTF6eyCB8cKHEAKBHg1uonuphrFyrh14FyYBtWcP74rU41PL3cwsG%3Bbca7795a9253420cf7c435647c019632b29c47984ee1c21713fc33636d06233c%3B3.0%3B1675058167395", "%3B5748160792233944%3Bef79a%3Btk02w599c1a9618nwj9391BAEP19CZgg7qacOSRFV9gSCKNzJVVH2q%2BH2MSwTtduA59z%2FRV72CbsaUn8WYeBynCZfB8G%3Bffef70af5d4bb85440e5cd00d0f8c6db0d785520305a381271d61b2260f2b291%3B3.0%3B1675058167431", "%3B1789000061306631%3Bef79a%3Btk02wafce1bef18nwy9Yg0PrP0BAppFnkues7y7dnStA0pseM5qOt9vA5G2icCr0HZLGTBI73LIm7a9vn0k%2Bd2pqHoyU%3B0b00061adaf9872d024fab59010f132c63f97ad133cc7f7b8b79593f0bbf8608%3B3.0%3B1675058167470", "%3B0933700724810908%3Bef79a%3Btk02wa0841c5418nGlLj0rPy7Q0MBYyMCVLlEHvIhfx0NgXv9l%2Fc1dxfpWNdr9oW286r03LtmZKe63bqz9dOGyMdYpll%3B985507da5fed9689d9971cbe88b6b058d2fb0af978d8f5844b3c8dd189047d6b%3B3.0%3B1675058167505", "%3B9987979041783827%3Bef79a%3Btk02wb41d1c3618neSvc08JTwyO1VUyx5yXbDPqdo0XXljaa%2FZKdN0XUMzSe0WYRtA%2BRBWAB%2BP0DzzwqXXjXxf%2BwCJZE%3B4a769fce64143f9a7fa94f979838e498bbf04476f066396cce5791a39b670d54%3B3.0%3B1675058167542", "%3B5635962481571516%3Bef79a%3Btk02w90ed1c3b18nql0PF8f1PbBi%2F0EVvbBuKBwDb7Sj3WvUyMNyUxt%2BY7TeMkpCiXFi60X4NIDYfrBgZqWtwTfaeKuO%3Ba5756bd51e084aa75ab13007b22531edaa6f7e0107a4a0c3418b8ee498435eba%3B3.0%3B1675058167579", "%3B6320958571588862%3Bef79a%3Btk02w91ef1bfc18nvrn1le4ZJ1u07reWAX4aBCH03o3DJqpEKtcrU%2FhqpGhg20kCV0evqLA8qiz1kMrjUbBYVAPdfRsN%3B80748e64a853f0c6a4126d810b28da0dcfeac8195fac5e802140be5ad050007f%3B3.0%3B1675058167617", "%3B4831765895933553%3Bef79a%3Btk02wa0781c2218n05kTwgItqceiKfd6Y9auTjW%2FK%2BZ7FU%2BXpJ7%2BeFydfdCwWuY7jBFU0u9NtOqM7yXGWR%2FqcQwinj4e%3Ba1c18fa545b17a09c3c0cf9021ef7613443f8bb7e2dc0b99e33417899e2ec300%3B3.0%3B1675058167651", "%3B3066634798364667%3Bef79a%3Btk02w7aeb1ae618n3JHd0RkEhbbgVukZGDtH7Ek53DviJPBA41IQB2tHaTWXrw9dEob7UQSJDi2YOMjkekR6EPE4nU%2FX%3Bdd3044cbcc5fb8239f5d8fd2233ef5d5fbc6d16444fee2445ecfc0e852753e94%3B3.0%3B1675058167683", "%3B7314161790257788%3Bef79a%3Btk02wa6721ccb18nrHZCZsgzBKKOaYImFmtQR%2B3XGyE0%2BSR4%2BnEulaxigAGJUSoV1eDMy9PwSuZQmObbOzOlgzYKanZz%3Bbcbc65e8b8893998480c915e618408ccffc2028ef25520c7c466898f5be969b7%3B3.0%3B1675058167722", "%3B7749102877445165%3Bef79a%3Btk02wdb611d3018nrugsnuVOIQPz4rygihrrb%2BnS5ovB%2B11OV7XEFXv3%2BabQoskrZ73Gmut17aZt%2FpqjlPoMLSHUnMiy%3B8eb72e29ce44ecd98359fc5cf3647e7a8916732dd9b5df84c7616ee1341e4360%3B3.0%3B1675058167761", "%3B9977543860727004%3Bef79a%3Btk02wdd081d0618ndQun8eswEUDy4JpfePYY7cayYFrnHxzASQ%2FREqsZRztab6C2lB8uBy4UiGxuQxdv%2FK6N8wrrAG%2FZ%3Bb7814c7847d99b1b41f9c90ff4ff783f965c53471dced61db6ebb75f61f0d84b%3B3.0%3B1675058167796", "%3B7271536799277244%3Bef79a%3Btk02w9f3f1c2318nWoBOzyVhMcM7JFGEBKopBGTq9PCzegNY4%2B5rW8%2FShDovk1jmtFNWgx23YHbvqb0alMv7ZCQtjQQY%3B9e799ed493f7aab5c9e4c48dfcb86605aae5dbddaf370853593fb477fb1a78e3%3B3.0%3B1675058167836", "%3B1836445229770421%3Bef79a%3Btk02wcd961cf418njED95alNybqomHYM0pqZiYWSrPQNLMinutHBMRULqebI3V0xiu3XHQsqbgmiVTocOViTo2%2Fy2v89%3B27f107d2fd0749ce1417350fd33f3c6884c902f39dcbad2528605884c6e65c4f%3B3.0%3B1675058167874", "%3B4976508234556106%3Bef79a%3Btk02wa48b1c7a18n5rOagRQcmOoMG77J0blFfRwgMSgXEbIA%2FWY1bRpQ5GmIwcwiJl2DysiISiKOZH7iebyzYXIrWuL4%3Bc2b7fe61092baa103ad52a06f7243c003965c61d2c8687fc6872a750840722a7%3B3.0%3B1675058167914", "%3B8926351707858872%3Bef79a%3Btk02w8f981b3718nqKzZLgMp6HY43Fp7XEJzCMufM%2BZRdCsNHkH66Q%2FilAPQj%2Bba4dkfkiqKnarfAI3bUrETJUC18LF2%3B0886dbd1b597350d61effb105e1303319b7e272602a1140ac2041f046a4baa14%3B3.0%3B1675058167948", "%3B5127245938057107%3Bef79a%3Btk02w6bbd1a7e18n1Vyn1nKAe3V4U2h%2BEZKd9QM5icnq12CrfZak79Qjicp2rBN6LzHU1y0bZh3F5vFC3GA8%2FlYp4lUE%3B7c47e566dca47182ad4c4502fb99a225cdaaa552eb519239e89c3ee2d4d9024d%3B3.0%3B1675058167983", "%3B2187463011897425%3Bef79a%3Btk02wb3141ca618neG6Itm0GmtF5olnd50LwYgbSq%2FszqxY3C9WZkP%2B4IHace%2FCgluvwOmcb2j3uDG0JfdKlcsdqFLNm%3B3c5cb1dd0b276517709bb998da53566a505286a9f5910e5e40a1cd6d81aaca38%3B3.0%3B1675058168024", "%3B4872723486095779%3Bef79a%3Btk02wafb41c5b18niGI0s1UCPUQ1v4irQm5Lq6VLGZyntGThWu0CxQIucyZsbnYuhr3It8oEhopPw6QeFc5XTw39EL5C%3Be01464e8264ded46a453dc7c81bb693a17a18c8f0ddbc9cf7b9cf6e5b1caab73%3B3.0%3B1675058168057", "%3B4138322059738048%3Bef79a%3Btk02wa1601b3b18ntKFDLUbQjmjEnG11KNTLeRNeoLrBcXUzgbS6r%2F%2Bb4dqoY4wyroeiQc%2BWEB0WXO7QOAD765DR46yO%3B1eefbbaacdce68a80783657d3368179b5a848334164f836508b877669b6608ed%3B3.0%3B1675058168094", "%3B2682425221709959%3Bef79a%3Btk02wb8541ca918n9HOhyQeBBtJgrTOvMcG92yk1%2FggVQBIIFXqygdfKHvuAOuUoHnvwhUJ8p6Aw%2FT6stsFNnGmT5T8q%3B6ef60e7f23859131f5631fcbff278a05e20b041af12dc21cb13ee8085e6490c8%3B3.0%3B1675058168133", "%3B6701830707677793%3Bef79a%3Btk02wbbed1be018nEZEGFWsTolaGnikSflhkopoTC6M5tZUFL6GmqKRPuP2DOCdxQ1PgtP7rdqH4PL1NfWs%2F534WCtv0%3B8f8bdcf21289336c4a7a5b3a9b4e2f78117a45820fbb80fda2a03c14599a13ba%3B3.0%3B1675058168170", "%3B7256314488849311%3Bef79a%3Btk02w79fe1b4818n08wzbn1rxEOg%2FEDP%2Bjup8BK6r79j198yb3gu55HR8JiWyBxJ1MAh4LTLkFVyjib5zZMyVH%2BVkTIo%3Beae0169b33f3dcc23a75a6545e8a6a2f905a129aab86b410739433d08613e964%3B3.0%3B1675058168201", "%3B2191135648325357%3Bef79a%3Btk02wb8141cfd18nZvLa8TPf1s66FjaYZZwISiTbLD6XYtyYF4NXFsTb1ojMrNcOzgb5kRjgxcrjbIdb2ujcuOe3NQLP%3B0aab85144e20c419295833c2373ebe8b9c6ea59a6d9a712f73e4d00d939584a6%3B3.0%3B1675058168239", "%3B9028654009041413%3Bef79a%3Btk02wa2621bb518nIZbSKJk5ybErea9kMQNRTw1adFN8xo7Gb9q8pdWsR8gnHtTE6TYxUr%2FNH0SO%2B7s0s0bEVNbVS3xt%3B7bbd6b47c315b48a439ee826404b79f8948cc46c68b53add839a29a841b8745a%3B3.0%3B1675058168278", "%3B1124096870217735%3Bef79a%3Btk02wf1741e2118nAlCTwcULt9pIfKVbUOkS2dQqNhs3qqeFquJdvxuxpmfCx%2BP2yz1ktdWyTZwsigwOeGCAxxM2HJLd%3B5a26696319de4cb8d03d4237066eadb529b670be8385dd249e4e465906702bd2%3B3.0%3B1675058168315", "%3B8156079943128233%3Bef79a%3Btk02w97791c3718nM5fUI1baY3tJsZes1Md%2FHwBK6lt9yM6xHj6XkjcKq3NqLISNUQAxI0%2BrrffTSVSkUelCt3wBuiZS%3Bc2d972b8ddace365a87027b4fa45c9b1e0dc20b344d7bfb7337da0b51188127a%3B3.0%3B1675058168351", "%3B0396617268411120%3Bef79a%3Btk02w8fc51c4a18nonEs6M6bH1K5JJ%2FCijASfrV6XvT46ok%2FW1aPVfumYEth72wlrlYIPlXtj59pjffyKRwLOU7Vsx%2Fd%3Ba5e3dd18e2638e6896f3d5b86c5b804be4741e9c29325284f463146e1b4ccd1d%3B3.0%3B1675058168389", "%3B1029760831845123%3Bef79a%3Btk02w83f61b5b18neOXEDLEY3u6HaJg2Gzhqp02rM25d9ls4LkT9zwI%2BZnX3RPz6dYsl7YrRiBNMA0flMhv0Dr3PhDd5%3B55e1989b4f2b9b6b58641406c37f861836c9c9f41bc1a33873db91231bb2374c%3B3.0%3B1675058168423", "%3B5715082403097395%3Bef79a%3Btk02w8e121b9b18nPKut2ocPlB83m4%2BrFkb5P7mO7IA07qYtUQeClifVoBWuRG%2ByfnY0lVDvumZ%2B2UzJa52c6Nld2lZP%3B493094616b942da863c2f7dc053c337d4fae348a8b0b5fa3de295df29e67ed0f%3B3.0%3B1675058168456", "%3B4800035169480985%3Bef79a%3Btk02w94c11bbe18nXBeR2ZGqwjeVFMTiR7%2FY3KZnIkdTAoL3CaoKkW5i1xzl72WYokFf3tF0%2BNMfVqsVGW%2BQ2zk1zarG%3B850c9eac3a70c25e7b39fe2c814dfc4ac4389980d8d6c8da55e7695f68cdb1e3%3B3.0%3B1675058168490", "%3B8939586971085568%3Bef79a%3Btk02w967c1b6e18nVfPwML0aEF6wLeFRek9qnLOad5dWOHY%2BIAKLutZDIbZD8NJrYd6JPjxjbpKmVqG6TFNlCqC25UG5%3B910571e26125d938b0786227ecf5422bbd721a564b93a13da2b778e857aa2d47%3B3.0%3B1675058168529", "%3B7304166929267662%3Bef79a%3Btk02wb8aa1cdf18ntqZc55evlbHyhm%2BU0uRq92pCWZh9c%2Fo1iqWyTS92wS58EEQSdP7z1xwteUVb6sNzc3vzOsgIaZQy%3B65bedcefa4ee70fa3479f1c101df8b84a260fa85897b715285a5d9f1ed838314%3B3.0%3B1675058168567", "%3B6650894621941142%3Bef79a%3Btk02wbdeb1c5e18nEsEgWhcARmFRnxVq%2Bmkadv9y%2BEf1UKOTihUkeGeNbawALh202iaQJbUN3%2FlmDKzCPVnxPZ%2BHPnVh%3Ba8332356cb5a4e711e3ca3aa9b3fa139cfa0874f7e79134fd71117651ee3a12c%3B3.0%3B1675058168603", "%3B5857781209697876%3Bef79a%3Btk02wb3d81c0218nxbcclECWADdwwH3KblJqmhAEAInI8G2rmnE0B5pconzsibe4Z9GbmL%2BhkH%2FB3%2BoGlXTx4mF2dWtB%3B87c17dba6b57b75e992b234ef17967e1051e27b35badadf12c93fb30f690a16c%3B3.0%3B1675058168644", "%3B0159858746952157%3Bef79a%3Btk02wbda81bf418n4irtWQZpLdgDVBb0hSNsRUzSfrT0Omf%2B13gZoxbD9JfNzx%2Bti4t0nxQyCFrr0cFRU3K%2FqVA18Bi0%3B8351eaf7f92c0f755a14fac9787cdf103c432f776f8f8b64689b7ae888915352%3B3.0%3B1675058168679", "%3B1663152139842169%3Bef79a%3Btk02w8fad1baf18noobZ1I06pxeARhGeDYyGhRO%2Bc86dwA2KkVT6HLMNWC3D1dzGkt%2BMwwssdU298mjqfWKLdpoZG3d7%3Ba5fc343fa5ff6c38b69431e507ee3c928ba136aa7a3f55e03096d8fbdb39ba00%3B3.0%3B1675058168714", "%3B1475703132684509%3Bef79a%3Btk02w5e191b3d18nM1WHTr3bE50A8doBX1ACysMqQIYiB8VKFX5GgKo7Q50dxXoSK5Sp6IMU2wZjuCsBOPoy8QbyEygc%3Bf29c812d3a3f54a131554db652385717be30eb4ea82c89c6fe35d9e199361058%3B3.0%3B1675058168749", "%3B6295128430817797%3Bef79a%3Btk02wbb8f1c5718n7jutn4mvmf25MeBgnci9AabcfZGTW9%2B4dd5hizrhzgb0PYCXgGL3n1v3PNH9Rfy6Y%2BciGmChZgIr%3Bb6c5fd2675cc522f08f4bec086252c450571d8275ff2ea1d883ec00284ffde02%3B3.0%3B1675058168784", "%3B1076871249511378%3Bef79a%3Btk02w96701b7218nP2GIvrC7UhbF1VC4fnhLp8fzJ1ZpilT7dbKjJv0ne78pekLJhe92qABsIbPEQz17bwZDqPR51R4K%3B8c1f4863ce330ee7501a0159dc285630bf4963b59838514a2adc74f59b6ad07e%3B3.0%3B1675058168820", "%3B0185723223029162%3Bef79a%3Btk02w82c81b8818nqAEvSlqr8TkI%2F4KbVTTWs9D%2FEJUru%2B8BgC5SkU%2FHsIj0al1eHTP0DqRTeo2OEGZPqRLxwdpYIrw4%3Bb157bd352c4e32f6acdb6396e3da6429253183001b0ad5fb5151ed16d403d4b9%3B3.0%3B1675058168853", "%3B1293058066164511%3Bef79a%3Btk02w91b71afa18n2uzFYHdEQxKut1DTO2hAkVYRRsG%2BapnIEcNp0%2BgOUbYXr0mO7e2nf%2FIoE708TFcA2JK1hi4WVn3k%3B4d59920e7dc2c62c751a284cd8abfec1e382e024e25d162760da49d17240442d%3B3.0%3B1675058168882", "%3B5981340771596974%3Bef79a%3Btk02wa80b1c1c18nVzgQIndK4IKUzHPqrI4x9Hh0TVqFqUigBC%2BFFZqAeXmL0JtyaKBJPF9iwjOKsIOjva93YD3vnf5p%3Bf06766bec597e774731c8fbdea946ffeda8dec5fe2ab49f502b02a46b027996c%3B3.0%3B1675058168911", "%3B1080763480102014%3Bef79a%3Btk02w80a11b3018nz7BHqXS09K7WI43VVxdUJKzN%2FNuVYgOs6VXoNcWNezzKv2LDdqYV2JC%2BF%2BLKDBoroj8RPnfhc465%3Bd26ff4c4ace8dd02dbd34d822199b4dcdf10c2c8c11c3f78df71100a67491ba7%3B3.0%3B1675058168941", "%3B1462876014166403%3Bef79a%3Btk02w81cb1bbc18nEeLp3RM8RCEYZ1Pmrw%2F0%2Bwt7pth%2BQ3X36ofqwaQGjGX3BtqKfau1MGShOCcFSC%2BY%2FnXrfZeydffF%3B3b5c0bf8fffda660dff37d10ef6390b1f8d5d525fe16402a7209a2fda89f3a97%3B3.0%3B1675058168974", "%3B1070627943587799%3Bef79a%3Btk02wbed21c8b18noN335fvhqhy5mxt4%2BT6y5QYlHjXAMc5SUwrb8sJvmC%2BrylfurAjj0fXjhi6JlA%2Br6WCdXrX17%2FwY%3B0a14acf53b0543e65f93bffe8839f3d211290906149a34350b190a10a09be1ea%3B3.0%3B1675058169008", "%3B9022282357114227%3Bef79a%3Btk02w8aa11be418nUeZ0Ns9a80x0x%2BQftEXrKGcWEWLP6B9WYylTNgxd0lEC0QJ3oqRsLyUxa2H6O4nOYtPcfPfmAwJd%3B3b08da2ca26e8ebac96a1462b6411568ef2cc3bb150fb84499bab4777df1e1a7%3B3.0%3B1675058169043", "%3B3758010169991420%3Bef79a%3Btk02w76581c2e18naMH61yU1mHHQ0pgYK3hMS83EI4zW85Akz2GRcZqM4VimhoZDyDR0PQVkknpSxlTXQzxGt%2Fdvu2xo%3B4c1afdfc7df7cf866807e131c3f7a32e3ab7bc04f3e917c3dd9ad874599345e2%3B3.0%3B1675058169077", "%3B6391475805446461%3Bef79a%3Btk02w96fd1c3818nuN0W611s7m7z34z6xQbqNuA0sxDeHvNZGsbGRX8XhvviC9O9CVxfVU7aOiYxSpDNDHZS%2FuquSKsS%3B19bcef1e1b1901655d0c89bde799e35c67f7f41da0a052f871735d201189f183%3B3.0%3B1675058169116", "%3B0398204735060352%3Bef79a%3Btk02w71021a4a18nxnSBhl3t9cO708s3GDMgGduO33C4bSxR2HCB83hmuXTcsse%2BjC2XnNW25%2BfDJKFkCPUt3Pr3M%2FM8%3B2dfd4d76e4af7c0f6a9e44f6d77ed70771512828b9b7eff64f0ccd5e1f1afc46%3B3.0%3B1675058169149", "%3B0451078632419787%3Bef79a%3Btk02wb9cf1bbc18n4uw4bxBStkGe8fWlzkhAhFxMMZd7iJvke55mt7IHQF6FYSmHdFI0NCdsfeki9261k%2BGJBb6dDhw6%3B9e618eedf11372db4635c50ff84baac59ac72c503904355a3e7811828db548df%3B3.0%3B1675058169187", "%3B6068439851768928%3Bef79a%3Btk02wdbef1d4b18nrYQswAmF6uaBUVE2micCdydhFKDbxdYpiK9adwRl47ucRAMFqSs8wtrPiKkUktyzOFX%2F2sdC37xT%3B5bb772a5f7d19dfb8151014f845ece45e6c6038e70c1c26fc019d7cb3332afd6%3B3.0%3B1675058169218", "%3B9074198508030652%3Bef79a%3Btk02w66d51b0f18nQr1qV3t1HNC6pOG1oAlOTFEYACOHD44BQKHeZ9blvqJW9DniaAxZUDWWS4l%2B3kVyryWNuPQ69acU%3B4f8262ce71e67c4c41b291cc729cc87501a49a280a357963ecf61058ee44c6bc%3B3.0%3B1675058169249", "%3B6761084293123774%3Bef79a%3Btk02w902d1bdc18n3LIMKBd3iNaLCGV7I1nLdzSl2rySiYv8adkqZjXr7iB0EOmj0QqrYPczM%2F493oClWq2l4qq1oZIX%3B80c74b1ee861f03f76bcebdfdd0865a9a047e46307ff6f2f0e62b822a995c06d%3B3.0%3B1675058169280", "%3B6692081177767673%3Bef79a%3Btk02w8dcb1c6d18nEk7FEDjZ1hJg%2FLOsDoYjLe%2BxRS2e9yPiOY5k7LD9ZLjcyJTIlwT1t1dmIEhuRWzZXPwtYp%2BEppey%3B3e3c8a6611c28728cceedcb6b2970bb21e126d671ed8225cd1e85516429b2d28%3B3.0%3B1675058169314", "%3B7981024067207261%3Bef79a%3Btk02wa9c61cb518n6NcYTkNQHk81eJBiyVqlNu1IPwZGhdEL9LRZYCWfszmLng3L1KQ7sxmDCjeagIrLePJMpllARnoZ%3B4ded800bcc74a5c727faded5dc44b97c7ad6b39de667e54a3dfce14c941cfba4%3B3.0%3B1675058169349", "%3B8907332584583131%3Bef79a%3Btk02wcb0d1d9618npw1nfBTDU1e6JyqtUC8lcZ0Eirnv1f5XMDkoxTSjlitTiAxfE3lk13qGhKSbkjlHxlrmpbhFPfaW%3B062845d286bbc78e9dbec4db7ddd6fca522794c3ac90928f6d61adeffd964612%3B3.0%3B1675058169381", "%3B2415976399785330%3Bef79a%3Btk02wae421c6918n7pyjTN5GWeug4WH1nCXtnPj%2B5zvos07Yq2z3f%2BtJRaIjZnp1joAlM1s%2BnEMMT6mOoRoGOFKplllP%3B76d39367f120a7e0a03a302a8a4ef5e5d8c189b2c1d495c0de75fe7e6ab9f450%3B3.0%3B1675058169413", "%3B9801283499979472%3Bef79a%3Btk02w60321aa818nYi5jzRZJ56Nt0k1%2BJ4g0gYO40qUxTAADb%2Bql5EKEw2REp4joi3Gy1qLUCJEdO52XL84Odw9putoL%3B4c027b351c46375845d8716997b314a2ee8dbf6951d8f876f5c3148d25bc4b43%3B3.0%3B1675058169456", "%3B1793854554442101%3Bef79a%3Btk02w9f561c8218ndHU2vk9U1MHvErI1EfEk1EGiQRTQLgdREGu%2FfdkXTJrl1iVtg2xwntqVzzuSI4uqgo0RD80QNZdc%3Bf1838ac49d13af7060076f57a97d8dbf98c62490a62482a2bab1a83e731b8eb8%3B3.0%3B1675058169493", "%3B1640783198821991%3Bef79a%3Btk02w9f3c1c3518njFNkCM4rxAp7EohBYEYejreM91V4Q74usDvJ%2F6VPnP2ffrAalvSrW9CfyNtge6I%2BzoqyjELT%2Fc%2Fs%3Bcdfeafed43f33fecca4092812c85283f3653c703807e238058722605752e9277%3B3.0%3B1675058169529", "%3B2046189376332374%3Bef79a%3Btk02w732e1b1918nja2RCOh5l761iHIo5Ir%2FqMlV9KR7fMQzQZMAvyJY0diaGJ6q5w%2Fg0%2BNDFPvNyl8rMqJNlF0MNzZN%3B023c54bb1244934b4f6e79befd66fe3d8fea69016be2798935ed65866e53fec2%3B3.0%3B1675058169565", "%3B2894301371675410%3Bef79a%3Btk02wcead1ccf18nxOwGHxj9Hx7yhLzp8Uj6vHodOnCs7nCAqGpykaFF%2FHs4Z39uX0ybNPV4Yyd5hpYmjn86k8O%2FMzfu%3B21a5e4b11c610c8559363d59c33be585d0dad5d8c7642236fd82d3c5a0064b1e%3B3.0%3B1675058169599", "%3B9456056132889007%3Bef79a%3Btk02w81021b7518nYvK2BqS0yUrse28VLBhadEDLiLC%2FRUT36G915gLrTrjxP0UI7UEjvcERqIiqoM4Ju3g9yqSNDEyQ%3Be96c5969421d5911c17a064d0f743d01f8226669fa4ca1a3af88c80402d22b88%3B3.0%3B1675058169636", "%3B9967102329823432%3Bef79a%3Btk02wbc0d1c3f18naKus6iZUqlIgMNAMfusP%2BqB0l4R7mcrf%2BxgqfvSQ9MN2mU69omO5AQs%2FyzgkMNIeh95eJFgVQ0Cz%3B529993d96f6c4f5f3ff1853d8cfda7267246c8cf37fb58c477c353e3b51c24a5%3B3.0%3B1675058169673", "%3B5865551604372019%3Bef79a%3Btk02w9cf71bfa18nKl13DQOotm6Uai9fyTYdcFLN2y4ikzG7yh6QeGVj3xCV2jERZ70vgh7e89cu%2BKTndN0RvvXqCleD%3Bd95db3ff3f36a5abc9f72a2e95e63a3f8f79c776a9c18b0a95b04848206b4b9c%3B3.0%3B1675058169712", "%3B7144358747691464%3Bef79a%3Btk02w66a01b1e18nYLo0eH6pmq157cBBQIoN%2F4T99Ze8t%2BIPBSFq81jcRGNdVVxeRvrTfbIFF%2FmJPvSvB%2F1Zn3trq5af%3B219c8a0bda52e292c665e3420450b415077506e75e376ed7046fcf7051f73cf1%3B3.0%3B1675058169751", "%3B6347915997051780%3Bef79a%3Btk02wb18c1c5918nd9utv8RXKsWY4%2FzIXEWLxJZvuWWiAa%2BscQf3BAjiEYRzV1lHPOj90rLvGGPyH1dFUAcjMRohYImi%3B0cd30e7842337bfaa351a0047e154457092ae9b1037206149faf45be4d289067%3B3.0%3B1675058169788", "%3B4592147864373831%3Bef79a%3Btk02w8ab11b7318nwtPTTwWuY059qgUyK0JK01uJuOvZ0M0W01jeB9sDYOrM2EKHz4FhKPV4u%2B9t2OxqaiFqElrDLCog%3B0945f3cf48db095a5504f0e74fd93a181a97b4954b3b5e6a35a8eb3c7ca353e0%3B3.0%3B1675058169834", "%3B1698137021862645%3Bef79a%3Btk02w84591ac218nQly3f2bLIpTSGYnU3oM7gPvK9bRae436IH56DJ5avhuLUG3UdOzKyEpUuOrG30YgKUM3%2BZfk1H50%3Bcb142e8a1c982ee146875fe8d1c4091cb17a2f7b7623975e4c5753b297902090%3B3.0%3B1675058169873", "%3B7862117790566788%3Bef79a%3Btk02w7d531b4118nWOrWn0N626t3lJSaGpEW0SlopEL0YaXpaUjUgk%2FdS3SQ56%2B6qK3s8oLwC1dAMjwW2H8pc9bXdkXj%3B28e0a9f572b7b4741c5030b44ae3ea208933561f91e775c6773a66c57127306b%3B3.0%3B1675058169913", "%3B0890786461538999%3Bef79a%3Btk02wb2d11cb218nKLZEHJk9zDmDModFl8x3xRoA7jkWswm17cdgiWcXghIhc1DFykV3CNIN8nIOooZXIYXSBw%2FmyEvv%3B5a6bd52211e33ee63ef96feb5f2cdba5da7c7c8adf3e822c36e7f728ef00aac2%3B3.0%3B1675058169959", "%3B5352845099003073%3Bef79a%3Btk02w8b411bbd18n0qnA0ClURZrNmJB7d%2BtDaIV6gTGfc9Nfo0KAXoYAPt3U3fBedUcni6oq1xYuXCdFAzsKwH7M8W9w%3B2a380d6740181d970f775c50f0024dc8ec433b5b5c6da5ad2b1bdb52e042bfbc%3B3.0%3B1675058169999", "%3B0168994723951666%3Bef79a%3Btk02w6f881b7318nfFBbj95zMc4OTAw26A5mVk5rH2IBZ1d%2BIHNBLjwWKrbKT5Ars1iZPteatXmp8Fu75CJpu0wW0ygl%3B52030022ad3f6871ed0e28968fa52cae72eefa899f524229284844b863a6c2a2%3B3.0%3B1675058170039", "%3B8779069413722767%3Bef79a%3Btk02w838b1b3818nFyNp0B4qx9vSZZGdE2CN9sJDvL9KpwO7%2B0EKic0Po9ToEGGdxApsKUutPQ5qiYQ5BBnfYee%2B58eA%3Bcf4c659831ca9098824452a9b93a81e8d8278d954d2716f5d9b8caa0ce6c2983%3B3.0%3B1675058170080", "%3B5996498306512246%3Bef79a%3Btk02w67b41a6a18ndyUmDfBQm141pTZ%2F%2FehdFrGoMK1CwP03002Ah%2B%2BUXvq1elRjUFjo6C546ZIoKMJOfm%2FFuQ8%2FdHho%3Bd16a7a2fefb753d208588630f3f86be66b28286493c99d9c0cf0fd28f0f16f72%3B3.0%3B1675058170106", "%3B4230882059162329%3Bef79a%3Btk02w77661aec18ne1Gj1kOSISN0gCaiYq2Xa1mmdCAZfESL%2F7MxKESnXceP5y5L5%2FRWoeVpSh%2F89CM5tNO5%2BxajuFWU%3Ba09ee4fd29e9123271f233b80ce3eed1e883bb5601f16c2d1f8a1a8ddc603602%3B3.0%3B1675058170143", "%3B3537505702693479%3Bef79a%3Btk02w75d71ae618ns6Mf3VaOA8IyEHB4UXyLPlqeaN29AEiJkXQNJD98kUg%2FMv3lwFTewvBBI18XBr7MdG2Giim3pv77%3B74389331dea2de8be2b20f6e30c437c37e401c3fe06156bc42300aded48bd34a%3B3.0%3B1675058170180", "%3B5479624728304979%3Bef79a%3Btk02w877b1b3318ndMNmesuR0baH%2B7C6Ce%2Flv1MUhs6VrijI1abf18M0TciGeKIrJX0eHoNiCU8r46%2BM7YWdmbSZdSDd%3Bef3932e7a07bc962f32f1eb42d57a80211418dca281bee5b4239bdebb5cafd2a%3B3.0%3B1675058170215", "%3B7150684977248472%3Bef79a%3Btk02w6e2e1b5818nHC23ANZkf1fceW82jz8fPjg10%2B0sqS5JSiCJ9QHblzs4FVDCo2xno%2F%2FrLlVuCVmAeVz%2BOsXWO%2Bwj%3B47d1cf761da5d51db96d7ed712be1a5d234a937d1d1731c1abcce3a6a894fdd3%3B3.0%3B1675058170248", "%3B4415155176982858%3Bef79a%3Btk02w79d51bbb18nYaO0B7nT429zgxAWJkDMRZOEYCjjvAUHGE9v0Cf7W60TcuoILcjHJGYCZzuVtXCqErLZrASGmskO%3B4d80e43855485ca29e7eac56d66fae5ddfacc8e19302a6ea9dcad74c7285da5e%3B3.0%3B1675058170283", "%3B8914814506322548%3Bef79a%3Btk02wa0fe1bec18nrH4Bpul4IY6gfd%2FFuPRAIclit4D9op9VPp%2FcRjo1kx5faPhkmPawXJ411pDW4B%2BWcxS8GfOW8rsg%3Be61b32951db73cee4738fa173050c483fd9719646f4b29b09ef43aabee6bf0d3%3B3.0%3B1675058170318", "%3B1063641875291009%3Bef79a%3Btk02w94071b9e18nwj1o1aNY0puEtIAkhg0RqO0F6UiXCJ5cBwj8gSTlq9h53DJuyEDDnK99TceQc1mf7Q5Qu2wgOfmM%3B6cd4675940dae09e4344c80a070a59ea6f31d37dd4894a1e578a78eb789d4c50%3B3.0%3B1675058170352", "%3B8090670243008067%3Bef79a%3Btk02w9c661be118n8wrjFxTIRNAPOty7K0FACdpMu%2B63k6xN1WIvIdeZvoLOYIOApbZV7GWq3tjpdAkLnivVP%2FUaNQ%2FA%3Baff50c829dc67802b378868cf489f59e4ed42da3a718ba6ff2b3f14bb59ee931%3B3.0%3B1675058170385", "%3B5741208930078032%3Bef79a%3Btk02w8dfa1b6e18nIc1CjBWsMq0fwGP%2F%2BecGvOf5Yg4cd%2FePSGVGpGv69dCdgycakxlha0%2B7SgKo%2B2UNs6dWF0EQWq2t%3Bf7bf87a4ffcfe5d57d0fad5dd6a9b393c4cf25e37834e0e19753edb895712de1%3B3.0%3B1675058170429", "%3B9369895217386537%3Bef79a%3Btk02wcf7c1d4c18niwlrst5ZC2h9gNsXgA%2BNXZs2bCQd7UA6UwZgvXYps3ye3gMkpjZqyp%2BiNz8d0rgtu9juD7eOZOuF%3B57c011f5a636296ba38ce334598850ba1e2dcec79dbb5a3c64c599213b11a815%3B3.0%3B1675058170470", "%3B7807300385264039%3Bef79a%3Btk02wbf4e1ce218ngCMTswZlsN6dEL89Ou3rXUmbP53MP1eQNHuWsinxGhzUtKxzHEexKLKv5zRKyuX5bQ2wlFRLeGYL%3B15eea71d0a46630dfd83115aae4876125cba566f62d993dac59967b8d2c039e7%3B3.0%3B1675058170513", "%3B4297558181584411%3Bef79a%3Btk02w72ba1aba18nQzIO08ZLeD1ZRfCVCwEvdFLew5wDbRkI2%2BBfTIagBHHb18Rz%2F91J%2FYLq6b%2FnuwlP1fCwKPLBgAGT%3B2dd780e42f382952701440e3133950d904626651902f1e6859cad3b00301a2f7%3B3.0%3B1675058170552", "%3B9107823954169954%3Bef79a%3Btk02wc1b41be518nfqM0zIusYlXNttUt29lD1kjV8CkCSpdYVVssCrnTOt7tCgw%2B9%2Fn2Ctg61Na17A%2FkTCcV%2BC%2BFhWxr%3B809d2e76651c3e2da82ad1e8221f3c98fdcb323ba54b51e7cb66e3e359381e80%3B3.0%3B1675058170593", "%3B4690158436746342%3Bef79a%3Btk02wc4ab1d2918nGKoheuGlq7IqE12qCx5dqzHfKi7YUleFo1dVJaeZqHVt1%2BlHLQSwDwtzdC5lgTjTb6npviuYF6nV%3B386869fa73e899915ed27bcddb0951f6b3b7ea0239827778ecd23770b23bb835%3B3.0%3B1675058170638", "%3B6498526644741242%3Bef79a%3Btk02wb4c71c5818nEXtOhow9TsEX3LkzzLeAEhh3%2BridoG%2FqRIH8aoo72cXFrsc5T0R59vYXWtIRpT0DiaZaBfYLwmv%2F%3Bc6f577606176df21592e760408c628e3d15aca3f94132dafc7b1ee8f5a298577%3B3.0%3B1675058170688", "%3B9152876012442214%3Bef79a%3Btk02w755e1b0a18niR1Jf99I3A0l6JqWoZPXqkwHLExw740tl%2BfPr24tY8NH%2FQEuMEZvnr3jQT6HXOrBE0aSCRwnoBP5%3B70a85fe4e35c648a06194de1e75975994ba9abb20eb3d2059de0a2e434cc7f41%3B3.0%3B1675058170726", "%3B9468382012887010%3Bef79a%3Btk02w9f5a1cfd18npUq0bOQ8Y03skG%2F5nntdgn2MNGREcvFrG0k8Tr423O%2Bxf5lKycgwExyzci1FtzXvVWwbwtQOalUj%3Bfed9ddc21dff43c2def95f2378b6a983592676b7aecd8b58c42b4fe919b2253c%3B3.0%3B1675058170813", "%3B0382046015107691%3Bef79a%3Btk02w9a051c5718n3XDQgnm1BD4hNfjgN5nSiHLAZuLNXSz%2FPRWdovQ0CNm42lElfQixtWdKSoH7yBFTiWYieFDrbKbp%3B4a7dc29511aa2a984241aa436a634a65cf7ac8704723c46ff567b53db3590e64%3B3.0%3B1675058170863", "%3B0382907146792827%3Bef79a%3Btk02w98041c3618nKiZYnQNHM23w28IMnQP%2BuO3exHQXUmLsB8SZqxlme36Fa6u3xvVdoSXWUXzGDqhhkWgja1D%2BPo8n%3Beecc3f9387003e583c95334a20a54c30a88384b371da44489bf3c9f904eef5c4%3B3.0%3B1675058170900", "%3B2586140390293402%3Bef79a%3Btk02wdcbc1d6518nWthBImDaDoLozza0ktIcfNEBXTaPxEVIyRKbC%2FdxwbBzmVIiyTFfjQnBRIwOAsU9Qmc7xCJR3rus%3B30715f87d9ee5b3521470b1cc5db3bb6a522dbf8de30c1c452a95924c01e5937%3B3.0%3B1675058170935", "%3B2144442739224107%3Bef79a%3Btk02w6b971a7b18nU0Mo4enFAqtpNTBjg7D62H9oJTM1Oiex34sxEV44WTVILiKKEH%2FwN%2BMC39QzRkF3NPBH0XylhXMY%3B8cdfcf6cae562087ea4e452cfbeb199dbd18ead3f8837764465904497ca63dca%3B3.0%3B1675058170968", "%3B1939276021911115%3Bef79a%3Btk02wb9a71c3918nFBTpWJynJOc0ieWhYJvMLj5XJLp2rnLypTN4pe2Au94dkdBeqfwUBfRhESnzRbJOM8E61J9dwRi0%3Baabdce7036244e67baabd4851231dd38ea794b4b6b4d54052aa3438da34a15e0%3B3.0%3B1675058170998", "%3B9046105328114476%3Bef79a%3Btk02we8451d6618nYbvJBbkCvQpB6Yh9icaO3tvrMUyyuvjV%2FugBczkzi45S8XIWPHxvUqwSyu2l0Eems8Z72SEtVg0b%3B0428424e19b4da2a3fab6864d58c78142880e0b993d899c245ba065033a201ca%3B3.0%3B1675058171038", "%3B3179633153180542%3Bef79a%3Btk02wbfc31be618nUw9h2eN9x7sqgCuPOy9jZSCdihSwjcOXZjxAhC5itRa5hwi84LDYCfPVZF%2BTD2N93jqc3nL8PRd5%3Ba03c48e1720a3b038091b749ecd81e986edadc7dbe85897306f9cf988a38db8f%3B3.0%3B1675058171076", "%3B2576482929218222%3Bef79a%3Btk02w8b0d1bc518nERQxYUh6JdpBDIYRW2fKCRDaSy07%2FuX9IqfnEf4dcd3bmTNLvidJ2bx%2BI4BKtZWg8Pd6zc8tswTJ%3B994e1ed9d872d0eee5015ce664689636c591466bc37e3500d1142803c459285e%3B3.0%3B1675058171120", "%3B3547462910226727%3Bef79a%3Btk02w94f31b7718nIYd3gyIfMRGENqiH4QoB5JSvGVjCfjFX%2BX%2FDV4bwLmBkQIug%2BM3xUWsympQr4cwFrMTq%2B78cQ116%3B165b2f14687aba428016d7c3183284c8070a0a9dececff9e4a49c7f64b3cb845%3B3.0%3B1675058171159", "%3B6992937801222225%3Bef79a%3Btk02waf211bfc18ni21UBlrB1lRqeLVZepTjU1iZKivNhgGw7USKIehELOSNKMbVPPDxlwxMMYi2vHM%2FXmddb50GM3e7%3B7733fe87e1c90e8e7428d1ee25dffbac96d8df9bd574097ddef92e0a7b47bee9%3B3.0%3B1675058171195", "%3B1387621940911502%3Bef79a%3Btk02w9d731bdf18n0dlu4YHvacKls%2FEBj5y1dqL9mKaLtgiB%2FZ%2F9BakVtzh%2FmEEXMV9wNhR4Jjj%2F2F8HT41NxklRlltl%3Ba266750546f6b230632551847b297105189c17a857e4720bda6b00326d8c7b7d%3B3.0%3B1675058171228", "%3B1766134056121795%3Bef79a%3Btk02w97251bfe18nJQn0xL6EkhvUNrGND82AnXzbuxpHtj1%2FE%2BCj8FNCJi4GINguDwdhV3MvxAA0hBxFsmvL6P5sRlan%3Bfdf52a1fd5ca3f08c152074c1ce74100a6f2cde39bca2210771ad06fb4d26758%3B3.0%3B1675058171265", "%3B2128333706819337%3Bef79a%3Btk02wa6c51c6618nLnHI6ImTGORKLg7hYkyH2oudC2MIQFjBo5hpNgRSTrloza5nPkLDjvgH3V8khLwhFOeTWjPncQ82%3Bd6b86028358f9d6da42a15d910e76434861f70b114d33f4a979fba7026cfafc3%3B3.0%3B1675058171301", "%3B4903066728016407%3Bef79a%3Btk02wa8461c5718nFwPZ6SYHzdAxwJ8dNO7HxLINAP44Sbkz1MkdYvsgmf6NtvFWDGsPjgN6l1Hk%2FJwTkIAdF3fkZsGv%3B93f11e593ddffe2651e270535ccec2a096de07c678aa4d582d8d97ff38d7660f%3B3.0%3B1675058171338", "%3B6664597323317303%3Bef79a%3Btk02w6bb21ae318n1m7v7b6hWf508uuF25DRFjO9M0whYvCom%2FTiZRL%2FBm%2F4KJzSlTUm5IEDgGoiVQzh0LXdm1%2BRYXSR%3B07bfec65fcb7e65e489111c581fac4f75e8cd006853f9c21853aabd31dbc927d%3B3.0%3B1675058171375", "%3B9344722165732827%3Bef79a%3Btk02w46d819cc18n9Ufn06OR6iteFK1SPgPUBqFlEpLSAIRV327BNx3W0Oq4509%2FWA6%2FEZR3LO77fTt9n4n%2Fzj%2FmdCwr%3Be58859ad80acb9c853c2e9c62eaa2e5e3a2cbc5e4b410a691201b0fd88d0e0be%3B3.0%3B1675058171412", "%3B4671826750306343%3Bef79a%3Btk02wd87b1df018nlpoXnIPbfjZDmNngEhCZ7F4mt6WLPvc1bzWAnUZURPfb7Rt2NpbpW3idUpiTMW6rywjvncvnaQmo%3B0c44c023aa1000d97d73522919290d809a35b63b98b774f9d6929d897aea75d1%3B3.0%3B1675058171453", "%3B8925487608813892%3Bef79a%3Btk02waebc1c4f18nk50SF0AZ0T6VaYnvmXvRjWErzAJdtSjbbjmdbX4WGt1nXVTXBrw1tlQTRCxAAYzAcFRbFncEV44K%3B3ab82f7934b69c80033913e9b99a4ed6731cb27c3b1c26b8d5b3689e94175cee%3B3.0%3B1675058171489", "%3B2594473317080070%3Bef79a%3Btk02wc11a1ce218nPrYVWHnzYoPKVZ1lCQ2nTEycnyZDAsl1EhuKO%2B6p0c9tHmuHUCNAwGPvyUwxPvPIKVaHhYoFhR1z%3B6f91944b0b48fb5baf6e8d302af47404b771e4b40e9c89d777b0ea5943300986%3B3.0%3B1675058171534", "%3B3528415976235623%3Bef79a%3Btk02w8ff51bb118nduuP0w8B9A0e9SkThXHUT4dbnrDguBxmY5A4HNyj33H7sw%2Bo42THWdHSoLTf5rIHoNUswH%2BjVXoV%3B00f052ad74b242112b4b2ecb9e06241c75aca41c48e486b2e86a4c2892666b3f%3B3.0%3B1675058171569", "%3B3623689537702335%3Bef79a%3Btk02wad8b1c4c18nNk0GgdUDxiqhV5ogRvs%2F3tUT7LXs6E7YULkP9SjIj8%2BoTDz3lyuIMraCciJeReKLafOL4YPwLnQN%3B0038920ae138a03c4804399e798c13140e97cce58cf86170cec08b770f698c9b%3B3.0%3B1675058171613", "%3B3478952622416122%3Bef79a%3Btk02wc16d1d0c18nuHufKN2nfrJFkog9piCTC76BGVxxNGGP%2BdwoGQCRphkSMh8vdd1RwjzAzqlETl8V9rSKxDkVwSjH%3Babb3930c12c3839a0e32c96d5c5ae4b34160e823ac98af8c6a4c7ced5a178546%3B3.0%3B1675058171652", "%3B5862159547032968%3Bef79a%3Btk02wac3a1c1218nbmcBZikh6IwN%2BjvAPh2zJf2UzOUWBNX1UDwLb8yarRMM%2BPniJxHD8RHQg1GgFxvWtA%2FCKisCn2ge%3B840f0a7de09419da89e5312d7f457d62242a548df7b3b76871ae14af958a2a80%3B3.0%3B1675058171695", "%3B3027331345634911%3Bef79a%3Btk02wb9f91c4618neyI6kMGJx1rdOpKySV83emWFzmWTTsluGA8Vnv0S0l0vlAowJHm7HAD1M3yWe5jbqmz24avJNhH8%3Ba5b230ffb7bdc33eb9a16fb66406463a856bfde221e3ed410e28e60057499b6a%3B3.0%3B1675058171731", "%3B4971605083000421%3Bef79a%3Btk02w925e1bcc18n9b0E7uxDE1z8xTk8rz%2F1oozYQt1OjUI8X834phtg7hFlbePrN%2FULbV8q0LqmJeYQY4K6dk%2BSPugn%3B8fcd5dd2997b37e5a193b00176064ad6e120e4be9ca392612778677df0ed1298%3B3.0%3B1675058171766", "%3B4019528685262850%3Bef79a%3Btk02wa2fd1c2518njhn2hAXgz0BENmbzCRFo%2B8aMGpGkqsDJqjaU2mShPCTALHF83mOMLz6L%2FMKYg0nTwYckIkU6ztdl%3B63e364e6c8b67188f1afef03f13e8110706790d8a56abd8fdb5d8a9bd4a1e2a5%3B3.0%3B1675058171804", "%3B3084961772615732%3Bef79a%3Btk02wc2541c0f18nYegkiXtw85XsFko%2FNSrKBOrQ3dgPkmaGc%2BPWi0htnQlk8TNAkh1i8FFFOryVJdP86UTV9fWSG7x0%3B32a84565d3e75f9e2f6a6ab76f4cd40c31a3b76a95099a9fd69b108d544ddc1b%3B3.0%3B1675058171837", "%3B1155146372800886%3Bef79a%3Btk02wa1891b6b18n2s4j47trQ8zAhgNSomXeEtUqfcgqZK%2Bt200au4ndNLkz0ETB%2FaU1f7SXn%2Bvn62EKt1G0Tn4C8dsg%3Bef0e05adde8a48ab4883dacbd7c77e34b155a4f2494e607d11807358a249850f%3B3.0%3B1675058171871", "%3B1121336943732776%3Bef79a%3Btk02wa2e31be618nQuZ54fQpSVuiZFDk74N%2BrcQbv7UPrdLkrpX4LWPfF1h5uTAOd1bK4zFzOrTl9LuSBYo%2F8ha9p%2FiX%3B98d6c0a9126067655cc5fb1068f858a2715265686b55122db22c129b296d5258%3B3.0%3B1675058171906", "%3B1566647039859846%3Bef79a%3Btk02wb73e1c6818nay6oBuWTaLKqPlMj%2BPPopt9DJbcQMBSuU%2FmYkKg0R1TGxhVGbORqrxIXQQ18TmEAg2zrXWMNfTxE%3B5c7b0d35030bbe93ca376d0114103c2ab400d5ec01921be49007454145ba3eb8%3B3.0%3B1675058171941", "%3B2387490193505002%3Bef79a%3Btk02w78ef1b0a18nXqBmFKqaI0zEx3Uc8I4CxPh29OJ9sd6bEDUo6Csl1U%2FW8tNDPsYbHl1vJON3%2BHTM60pHhRmlyFbh%3B87073adb42ba9b7499ba66334b4811d1b1e374bbc4a4b955f49e8b0208691e60%3B3.0%3B1675058171977", "%3B5056956512483058%3Bef79a%3Btk02w669b1a8818nEyVftEM0YBhl57Am7AAbD%2BFaVf49ClqaR715aOp%2BFmMEcdON%2BUBRUqWwBegR7X3gRYtgP93jiJA0%3Bab0f761f861a750ce0fdd43b0eb3fa7f7bef8b98e457e24eea13d38391477048%3B3.0%3B1675058172017", "%3B6581333420092921%3Bef79a%3Btk02wbc491bdb18nkkXovKyfZSCYhT1hgVZyQ0fQLLAsCPUa7UUhbmX04o8YbpUTPITb8EuHZBZ9TZ7HKQBy9hUSY2bR%3B7e9d5a27752ba721649a1670b5393c4ad897cb249876691bf47b19e36d995fb2%3B3.0%3B1675058172061", "%3B6542719210219980%3Bef79a%3Btk02wea931de518nJgckfab5SDcZh4KBVFxl2yDn%2FvVYyqsiPcMqlnaQzy6hyjHMqFBerdKzvZeyGmusbnRE4RNGNL3l%3Bca0e9070980bc5701fad61e0186f1b03e267af4d6c02c835485b2323160676b9%3B3.0%3B1675058172105", "%3B5283676671506611%3Bef79a%3Btk02w8f041bb718nZCFccl5PFQr7JjFX%2Fk4yKIXaQAKj4gFPFaRZ1lLwwyVyEwDOT6Bfb0%2BlSygaJd58zocj%2By5hBJi8%3B4521b6574a97b9995a3cfa7ab1d1a5adc529d498100815c26fea074127592f8a%3B3.0%3B1675058172156", "%3B4937440812943776%3Bef79a%3Btk02w765b1b0c18n7l1hd1Hc6zR65gs3XP%2FioLo77kGhmabYe2IJBjHIRWs0%2Bw0Cam0ar7Tk7ATj3VolCVGIQrBWPl6k%3B182cede7837ba6c8b1fe5b94de373486a5e56ff79fd8c85e2f9db19cc8429d3d%3B3.0%3B1675058172197", "%3B0097004026158239%3Bef79a%3Btk02w829d1ab018nPj1vDYhAn3KnBIKjiHzvz1i55JRkVq0519Y6gMeUgzJE%2B4Ccnn9IB%2FFe0jyR%2FwCtp2GL%2B12LsOu%2F%3B225c5774884b09067b621fa6505e23f6b82b1e3e4ac4d14e943c6f95d0ae80f3%3B3.0%3B1675058172234", "%3B2009476811801014%3Bef79a%3Btk02w6bd71b4918nSO62c00yDI1d%2BywQGNGqrS7E49Rd16vZqya2%2FUnfjTWedKGrOtN245FWQ%2BtWWaldOJPtomvNp09X%3Bb6587e8f7e8d418bc909e0fd1e7c28caf59025e26b283bbda2672ee7ee910f57%3B3.0%3B1675058172272", "%3B9741025321633360%3Bef79a%3Btk02w9b831bce18nmLlLMb4FllKD2mQYnftP0OT%2FO9eL4hSUUBVhqM1ahIujlQo8UKZJGtEKzwXFveY%2FdW9J0lEkFjY0%3B531a1f866359f394e87ca352a5918da60bba99597078fe0c792c1310c74375f2%3B3.0%3B1675058172310", "%3B3613340286781975%3Bef79a%3Btk02wad771be618nMfazThGJluSQ6NsnWM19KmzSpXK0Fi2yzIkVhLCSi84PtKELNA5KGsbSl3NULOKDcaaZtUWeCn9F%3B5d7eb2afac1cfcf7c0d55b799e71edebc58127ad66d363b253b22611c0691e9f%3B3.0%3B1675058172348", "%3B5544312848704794%3Bef79a%3Btk02w78381a9d18nHgp3DHEgHY5ZxdTVNCWiBsU%2BTTlSd4qLGINQ5Y8396p2GqhXlrNcF5Olb1ueI5a0w2SO9AbT6POI%3Ba771a5da5403b8597c16a49dd583309d079c87d2512479595d365566ce20304a%3B3.0%3B1675058172385", "%3B8506273508590493%3Bef79a%3Btk02wd2781c9118n0Zosh9kwjlxbo3qalwX9c%2B4aAeqo93RSatVq6oUelXa6dOy4jWD5jZINbTM5p99f7IHHKPyrm%2FvM%3B57440ddb46f1775953355047e8bcc20e3b748405229aa5b63c353216d4935313%3B3.0%3B1675058172422", "%3B7630334816325356%3Bef79a%3Btk02wa3a01bca18nO8dtwPaXJ9ioKaAa37WYAgRsMtTlHRPMMSEqYxUWOg9j%2F8q6A1dpcYisy9jRL%2BBt7VJ6dGU3NnrR%3B33b15ad7479565baa848551a5f3dd3a558ab47392fc18a3702fbc24c1cc83344%3B3.0%3B1675058172460", "%3B6798251350883810%3Bef79a%3Btk02wb5f91c9b18nfEEYgwkZHmDRx1eSXdZ9j3oiiDX%2FZMVQL2kVicRH6TfrzRF%2Fnmm%2BekNVYGn%2BxLvCzhZB0kYnerGJ%3B085dfb671ec481c0756a7634148bfd314244ecd998c6692f26081db464ea2689%3B3.0%3B1675058172499", "%3B2395580106857740%3Bef79a%3Btk02w953e1b6818npENwHOOHqm1VhmaII2EPoNLvLNZC5UdmXSBFaJIFkqVfV8eGV0rBh72MLSZRRbzWt63%2BVheMzP4N%3B5338241b0c457639908e3f3a7316a08043cff65db07d0c8b5ca1c3e875a1801b%3B3.0%3B1675058172538", "%3B3774033359174468%3Bef79a%3Btk02wb4b61bbd18nNcwuVuUIQUWkjjUfsg26j4JvUWjd94%2B%2BtEZb3WpGVIp0ngBqfDEVgApJ889pHOn7IRjsm88t8GFL%3Bd9fb5cdbc2d372a691c517043a8259d121023e89339ce0820fb5c5a41268101c%3B3.0%3B1675058172576", "%3B1463977282512801%3Bef79a%3Btk02w643b1b8818neX4l0Uc6I456lU%2BCK8CLALMHHiSlT6WSmtYH%2FyeLV0woG%2FjtdxYCIhsruUp5F3Zp7KMEpfu1aolg%3B12327e4d049a71d2f486cb2bb8460baba7ce4912ba0468ef66fd3e7bfa30a15d%3B3.0%3B1675058172612", "%3B8720948616194841%3Bef79a%3Btk02wbad41c7018nZveexRJs9P7NSZQs3gJpsueTSgsB6TCR7M%2FAr3K5weIv6ElrkPt5hsv0remin6s%2BN5SOWaHOtU7h%3B13b09337504a47c98627c3ae6a18d7f7de4093ef135dffd815f53e5ac6c76f1f%3B3.0%3B1675058172650", "%3B9392763819045413%3Bef79a%3Btk02wb04b1cd818ngUMs3z6nco0ApPG3t50ZLbwDgbeQjGsowFJR0Bdd3KjyCchlOLP%2FRI0nxquD2ZtNlvHbwKcxctt%2B%3B1a683a8286ae0bfcd343df5f36d061ef8e1dd4e98271aadb479ac26ff2605a10%3B3.0%3B1675058172692", "%3B2680517239082604%3Bef79a%3Btk02web311cf918nnqonqBiv0dYmnXTyEvgqnZr2mT8uLk0X5VWmO0PSMdt2BPOL1bowdzO5QWnQssJpi3HxL51IiEr4%3B8b04719d6d696c45cac944d22c99e682edc884e2a4f6d6721a257835fbc4efb0%3B3.0%3B1675058172736", "%3B7849590191090920%3Bef79a%3Btk02w94d11ba318nV2Czlk3k1BZ6kLatNR4mKDPmw8qH2Ofs9pdtl5HVqpSAZ0TZ9%2BlS4%2BDpZyElHVPgphLGuIFOsDIA%3Baec94d8e62c47ee387832f23490f21b055a3695eff7bf159b043d42ea9441d24%3B3.0%3B1675058172772", "%3B2181308967830587%3Bef79a%3Btk02wc4651d1d18nUWCvXQg6zrMuaZYO9iHDuSu3eZlMJ%2BRZWKnfpVYodPF1fLBeA2WztGrvZUEdGMy3unhgBz2xiWQj%3B0113cdb88d85fb8e087fb72003c8e6c9c862f1b2b912f9153527527203bd99ab%3B3.0%3B1675058172810", "%3B3075980707736433%3Bef79a%3Btk02w84191bcf18nCsbNW4KTmt7kCp9r1LBGgGp0LAC%2FBJhHrBePZny%2FZ8FR84crVztlLpJ7W6YLufjsJ2lf%2BAhmBwew%3B8474d6b867d6638f3773552994a5e53508bd350b541eb1f23805850c0abc0733%3B3.0%3B1675058172848", "%3B8240782695585512%3Bef79a%3Btk02wba831c3118nsLQdUyRIS7ppOFybmZm2XcTJelA3iGfg3GrB5PY1nXSnZdwXUsW83RQd8JhYxjAf22NWkrc7JlCB%3B2a3e55de9c80b0d8596f4bc636034055d3ffc1573cb8388e2d98751bc71925bc%3B3.0%3B1675058172887", "%3B6379218125210100%3Bef79a%3Btk02w83dc1bdb18ncVMVP1YAg71ZtAEEf8crBFMkEjLbuUC9CHdepWobYMW9vW2vL%2Bf%2B7TfL3bWDhsy8fhOthj6VmwXS%3Bd611932de562cd9a24e5029e8c823156867fd55030a1bcf0c440b5f111611633%3B3.0%3B1675058172928", "%3B8382943706670683%3Bef79a%3Btk02wdab81d8618nG1Wwplu2zaa1r4v9xXIToRwSCAcvTZkwVykINkyyPT0JxJq8XUpKy%2BDSySLl%2B6TZrW9j4xDpdxyx%3B9605be4642dabe552ec2323793f9888c94c1e93e54799589d57957eba09fe97e%3B3.0%3B1675058172968", "%3B5657394528562854%3Bef79a%3Btk02w8d381b1718nDp4gdJx4x0lEjX3AiNYzIMCjYS40PktKgK1Y5mcYXNJ1oCtGGNHntBZLSBhz4UW2SP4bEJ%2BgqQ7M%3Bb64017fa21abd4d3036fa2bac29d0707ae69e2c0bb135e23fb7cfd9002b227d2%3B3.0%3B1675058173001", "%3B8393649607250199%3Bef79a%3Btk02w9a871c8118nuRXGJZx0Y0Br55YUGR5kZVXGqJvYoz21a5DLS5Pt1gupPjlyvh9SDDvXbkXtSRaokPPqIl7EXsPh%3Baaea183975780f546de1d4ccd6f29562b30651ec681fc12b2f361884d110b12e%3B3.0%3B1675058173040", "%3B9250734148660370%3Bef79a%3Btk02w9a2a1b8e18nfJ4XQuRKbEjaMEjwh9au89VSzV4OWkZmEH4MI1hDAHtymHS8Q5pOYxeIahXLF9e91QhLKKHRdXBq%3B2ce6bdc1c7bb5d46cf822a2ab764d6efc6621c153b1c480239fde6afa5edf935%3B3.0%3B1675058173081", "%3B4802212219615760%3Bef79a%3Btk02wc84b1d3e18nvPcNtYyp8U09lO9Ik3Et1xtgES%2FfRxIllJmchu2o3xOh2SnQJXfozhu7UHJscpjINRkYxp0a6YWu%3Be5387e60aae2a628833f0e4c8a2c112d2061109e283c71341c1427c0c62c3dac%3B3.0%3B1675058173117", "%3B7993397425798717%3Bef79a%3Btk02wb3241bf318n20x3QnioPEzbseVJ67DzgcILKWmyrmkDb%2F64kWsyoIueUe%2BLcqP8hJR%2B4q%2BIK7fUuVgMWWJYVLC4%3B113ada39105aa1bea7e5ed57f8d5a1d9dddc8e1d9629c6c475f2f1d1680a254c%3B3.0%3B1675058173157", "%3B4755993982614499%3Bef79a%3Btk02wa49d1c2918nFIm1uGWMeZtJsHzz2x40OOtQf6C6jg5KfXKUIi7SwmWpmon3K2%2FxCoRpVG9hg6F%2FYYhmFZdkcToC%3Bfe557fa02c8b487e1f2478bbd1b225152f34d650d910f8fa4c40248f8a18c358%3B3.0%3B1675058173191", "%3B2587725770438729%3Bef79a%3Btk02w866d1b4618nikOVymBC4WKCW3q8z1%2BAMEjPZhZ0rachtI1LtZ8VmwGo61iKJe12K1zj5ThO2%2BJNdMQgxVUQVdIg%3B2a29f393a6e0fff56aeb92375674eff6feae1ad6d06b80cf36ccf2aa35f340d5%3B3.0%3B1675058173221", "%3B0421682334573703%3Bef79a%3Btk02w97671bd118niPR7Km2eYm7aANGAzrb8K6QHqrmfs9JKX3or%2FcKIDq0XFX3JjjssOcIhcbBLUVXLjlhPl4%2FQbSAW%3B1f901de76e6174e6d83fa138ced0e0c2c03faca2b297493eaa9d931fcb60bcf1%3B3.0%3B1675058173258", "%3B7709076834109677%3Bef79a%3Btk02wb3cc1cbf18nJwYrbd4oTP1Uw082xs%2BTBZMULASujMdTWX2UGxKywhzsI8ajmQzkCVFEYGslLhrFJNd4EaetQrFX%3B0a8337a6a3adb4ff078fb9835191e7a614a4153d9df036af91b78f2a6e6c6acc%3B3.0%3B1675058173294", "%3B8244105698296874%3Bef79a%3Btk02wa6891be318nQpMrq0H0YXiWXO7cm3YT0osTVSqmM5wS7NgomEgPLbZhj86Iw3ax4XoAfZgRK4SI4FK5uunBr32o%3Bb0bfb63edacc2bf427f881cd702453c075cf68b0b530af6dbc88f63ef9f6c199%3B3.0%3B1675058173325", "%3B4362007455458571%3Bef79a%3Btk02wcd3e1d2618nXPUlxWFdrhwc6v3w3TVpmpYXjn%2Fe3dQnW%2BOHAlIiIFk%2FRGQUl4xz%2FXcxGk10viKgsYfz%2BnctAwiX%3B177c79970dfb7e1d396803f579561965c7e65362893f39d54caca0eabcac37a5%3B3.0%3B1675058173354", "%3B2231072776777622%3Bef79a%3Btk02wb9821ca618n16kpPIUstKKlzuLqM%2F5sKgRZfR%2BxSREW5xDUyZKY8lLTgGyefqFbGTaOXNMVTYCZmhKkwlnJiZ5%2B%3Baa1718587d4b0fdafd2aa75ee55ed987ddbc513a34d965fc889ed4c891de3073%3B3.0%3B1675058173386", "%3B1775498382308673%3Bef79a%3Btk02w94221bff18ng0q1XQLxTC84vdwg0ae9hT%2Bv322T0PeCtlZHDtZqQTlOpSsEJyo989UNwfoi4u4lmqgaV%2BLgQpG0%3B7583d6d8f61038f55eb5f2efa01eb27b00e321c21fc02c354d54dceeeb297795%3B3.0%3B1675058173423", "%3B7032591706748062%3Bef79a%3Btk02w981d1be418nadu9SV8YNfiID8bh3H28oIsXapEOBsrMim%2F6gNxdE4X7FjbIDRMRzM7AlkQaCrSprqfwi93vT1Q5%3Ba34146f2698607604f4bf15052d66e84d8b01c3460ad45b6273b7dddb67707f1%3B3.0%3B1675058173459", "%3B9570239861476793%3Bef79a%3Btk02w93291bd118nYLwBqzEKO5hf6CM%2BSHRBlk7Okda5y9IglSDZ9v79czc9JPK1ssecUkcbF6XPsFTgWm2RCzd6AVQu%3B5a265e160877c132c76988ff0d146e3165fbc4d6ec15d85cd701a39b04114288%3B3.0%3B1675058173508", "%3B0398835042615398%3Bef79a%3Btk02w6df31b5718nMZn6ZwKDSS7iBB%2BS2Y8VBPxtTHqcy1A3gG7Jcn9t3S9DOC%2B2VSwJt7dY5RzzrXQtEcL4ZNxkkMgb%3B2f5c2e264fc5f774aa1b7debe7fb676e68698021121a2f4a8f04845e395f3a55%3B3.0%3B1675058173546", "%3B3525910865239735%3Bef79a%3Btk02w88e61b5d18n8z2MMBGe4rJxFYLuNXkKglREpJRPegGAZY4xWRW9wRQZ1Z458RB0KYXvM6SaPDVFqbQq9fqxMFXF%3B2ec7ea2bfd365e364f76333af865190ab86f4a9c532a6185a9fc14db00208da1%3B3.0%3B1675058173578", "%3B4356087417174773%3Bef79a%3Btk02we9941d6a18nMrx6zUYtfTrZjV%2Fc1M4IxzugsucwGV59GrXnAoQGjOmrrtmRCXSErpSjGdCMJX%2FMc0vcftOtOKOB%3Bdd809c943828c76d70a41e7d606cdf76ef29e976a35f0a01e251ae79df61abf3%3B3.0%3B1675058173617", "%3B9431840949957472%3Bef79a%3Btk02wbb1d1c7818ndXmtBY6QmwE0mRzO2PKTYpLaGnkw8r2ICvKPEuaBQqewN%2FmebyZ4BOx1l76vdELmsh403cNvjvT6%3B28873d86ac9e095eeeb9b610c85e7e8ee729c33b9b1add1dc708854dfb5b12d6%3B3.0%3B1675058173653", "%3B3450399916323181%3Bef79a%3Btk02wc0851c2318nDDuzKxTGPpmkijOlHG2Oyx3d%2BqwYjdlTC0j1RD8UKYuISFpJ0iXsusasl%2F9%2BFo91JC2SjQDnSxJN%3B0a64a5ccc89b112e430a876f63b8f2057a4109ae944e44199a8e11b64ac23257%3B3.0%3B1675058173686", "%3B0488589213557306%3Bef79a%3Btk02wb3dc1c8d18nVsSmcRCuhk04P1pku2k5uFfHNGV4qGwk0hVDe%2BGelfNqVQDXqcqC%2FwMeoI7z4j8%2BfywkNFtfWUKY%3Bd5d75863d4fadc19d79632187ad66ad658822dec309adbe038257c16d772901e%3B3.0%3B1675058173723", "%3B4477349516740227%3Bef79a%3Btk02wc6ab1d1c18nZOfHOIOkR1swkqRx1SvHLrozb7F4iq7N%2FpAFvnalKxMJiK5tw2ReUcIaGpKUYshQQanc99auILxq%3B425a6015d55bc9603f8b5f995bc3e259780a21c8b616e325c48709a4f992a1e6%3B3.0%3B1675058173762", "%3B4017506440248822%3Bef79a%3Btk02wcb6e1c9b18nAJHrojVLVA16opDJp4PhoztDuioxo%2BacdvwBuAMZTOT8iIqfsFk5XQyiG8I%2FskVeXIgHQAtfK481%3B8f36091fa5b7daf215a9368951538e415a9a9c6bf042e1458ad812a2812be6e1%3B3.0%3B1675058173798", "%3B9695627311511085%3Bef79a%3Btk02wa2ba1bfa18nVY06yr3q0oEzmAsb7bVlo2pJlTD1Rbb%2Bz%2FOnqyn5HCBTIr6x18Z783HntYf3whflnvl3Cru38Qp1%3B82046b641a4544d0a7c703718ef254acb2c8fda87337efb1a07f67af93019093%3B3.0%3B1675058173836", "%3B4211558036748898%3Bef79a%3Btk02w98a11c8318nd7ZMVDHe0amF%2BapHyVH5LWKjTMNCjb8PxHxNMrSoiOoK0AAuzB9I5WOonjXikyAgYnigkAdxAbx1%3Babcdb136e4f139c15bebc7cbab8d1f93532ae6f8b0ed03c950b129408ee3018e%3B3.0%3B1675058173877", "%3B1641181305926789%3Bef79a%3Btk02wb8941c1818nrFiQRsSDwXIQyTKUX3syP%2BugzRLmbe4%2FTRFxVfvW%2BoMX1nBKJgHx9OMXS7t08K%2BqgCBpSIYWqHkX%3B2336eefa3f4a45f41efd135f7d1b1a15d1624cf44a9a4316f0b07de80ad8fc99%3B3.0%3B1675058173914", "%3B8261966874362668%3Bef79a%3Btk02waa521c4c18nTWSG6nm6I3wa0KQbpTxDjkRHpwqSlDmEkQDicVgHtEDX30kHLqOXhOIJWbN52a4ZV5PiqSbbukqN%3Bf611b286f8c2575563eb421a7c72de96789c37988eba5f054858f439a68a0666%3B3.0%3B1675058173951", "%3B0240126287304558%3Bef79a%3Btk02w94081b3d18nrnXMFqNW1ihFvD0EUxl2FiFLJQtMvqCCnFNlIJ%2FIv%2B9WiEvUFA8D%2Fms2f2mMQ5hVuA%2F1PiWikFRQ%3Bc09d062d928e3ed1979e34099a72afb6bd3dfa7a5983172b1d7b1f3ef6f01d65%3B3.0%3B1675058173991", "%3B9579718263744456%3Bef79a%3Btk02wd6071cac18ny1FfFpolh5zur%2Fa0GqMGsIpoeZ2tD%2BvxkLqqLqowEA2ghYoWYAsPCFkt%2B0rZTChKO0ydKa1%2FUASe%3Ba5d6d33197f3a60e9a0feb55d981ffb2435eaf4ec91694b573c618c13c112655%3B3.0%3B1675058174031", "%3B8798922210386578%3Bef79a%3Btk02wc8cf1cba18nJsfBH4acvkVV1cVk9mir0yNkxJR%2BdWKHlDzPHthLxKlSMAkelPzmAm9MPXSDtbVq8Dsg8j%2Fk62Om%3B74899ef24170a1ade2cb9af9a749614020bba77136f74e6a971a853e33ae1ec9%3B3.0%3B1675058174066", "%3B1070104402851649%3Bef79a%3Btk02waa171c6f18nsG3IJD1zl6moIUDMNnk9hlNCYDwLdiqFx9aDm4JHy2uPnYwffUQgIkfz0N3ZAHQbUlG5fkkEnyFD%3Bebb3d2c711abf7e3aa0c7e6474e4d5e2f56d0b6f83746e32b9241e3cca86dd1a%3B3.0%3B1675058174104", "%3B3170865351219422%3Bef79a%3Btk02wcc671d0418na1QGPBrmLoagFVjsoRDHSvsmNZ7jJgvg5Mnubz6R%2BKJLRas9XdjUoZZDxmcVd02OuepgjVs1HUEP%3B3db35e7a29eabb5dda0913c13e4b23b454ddbd458e45d3c9d015f08c1df5cb28%3B3.0%3B1675058174142", "%3B7676161975834219%3Bef79a%3Btk02waf321c0d18nDyDwSpqyALwZCat8Rojq5fPP8cT1s4EgsATLG6ui21WIPeUP0X1BXbIRy8iUGnMj7MWJBiodrkGb%3Bdec41fd5f155270b17349296d8a6efb31759129bf767d89a31e0bee884cec76c%3B3.0%3B1675058174182", "%3B1114503288698993%3Bef79a%3Btk02wa5e51ca718nkb0q8BR0CaRjfznF60QuaneXEGNmyT2sB9kKHuflfXR1A4tfdBHFTghT3kriAUu0qZa2gypMbyuN%3B4f7e722062623b96010bd51024a1b5ac647f4f636cb2ac358f08d1dedef842b3%3B3.0%3B1675058174214", "%3B7875392716667804%3Bef79a%3Btk02w692f1a7818nQttA5Esv3k2oKg0bPXBXG3m69h4ftdd0%2Bpz0AAgMd20%2F0F2gPLWk1CTQAr5N60bi26eq29ssqlmL%3B868c700874ee1caa027a81d82350ebe66055c18650a6543eca62962e4a07cc04%3B3.0%3B1675058174253", "%3B1688109571288815%3Bef79a%3Btk02wadf11c6118nd3gfwJWJ476hnyiDHLDxcwUja8XNEde1kga2G6YIPGCil8hetbdyKUCtLUKeny%2FjYPXQUTvaXPJ0%3Bbc3ccc195da993f72ece36e179dcdacc4a3db0cbab221b80361d1c1911c763f7%3B3.0%3B1675058174286", "%3B7439310852349617%3Bef79a%3Btk02w6b461b6018nwX6F1pb9TT1K1u64cH2C7WO4Ld1WOQxuqvQF9WjO%2FagWqMOgjgGFNRbjDNs82QrvWgIMgIYxOt3Y%3B301a49c8b7e8795a0c5de6c027b1ab2a19d8af61ada3bd8ef873e35b10f52df6%3B3.0%3B1675058174321", "%3B4487203306014432%3Bef79a%3Btk02wb3b01cc318nkmXZn2BQoOY9TEfwaeKHtNM939%2FtW6qty00Nu%2Feydhq3NVumMAxYWKuGrssuiWLFFWhboKd8%2FpOh%3B568c48dd17d1cdb8602fb3343757afeb3a76d38b6b7f3acfbf6ee319d2d8c9df%3B3.0%3B1675058174355", "%3B9353613087641537%3Bef79a%3Btk02w80bb1b8518nJ05LcfdE5HT5EqIg3ZinBbzgb6%2Bmdd48MrJ7UVyrU%2FTQzTjb%2BfDAJk5idkR9YwWyeil1AW61oCKl%3B84f6f024a2b42e3d7b9d617c37d637c8a20f36e1d3e5b7186265ce9a3c3d12f8%3B3.0%3B1675058174388", "%3B0467582910929121%3Bef79a%3Btk02wc34a1d4e18nwL50LmHbtojXdOssTnGrQ5hlY6f0YLlVIy%2FIZSHrB0kMWAgjdP1ZaqboIhpb2Czmi4zeorqaP5ry%3B81a07aab7614ab76ae07503e8911a4ff2078793f571d4e601bfa42c071fa33de%3B3.0%3B1675058174423", "%3B3000942755077804%3Bef79a%3Btk02waf931c8618nlgG3fViGNML5Tf7CVWXXsLIcpKExervpV7xBVPvY%2BOEfTKwnJ0qIKiZQbHwxZf8LitgCEAw9qAaK%3B9fecf8164bb2b3f8cf82bf2c69a83d5d1c43d076889017b091995e7d2199adb2%3B3.0%3B1675058174451", "%3B2331894751633655%3Bef79a%3Btk02w5e021bba18n5Z3CtHNXy6IR8C1137zs01lWQBsDMc8kSC4qNRVc3OaNcSJX8GgnZMvkI7vgoiWPKHXitumeznqG%3Bd8f1a4c98a986ea31f3cd22f1a5dd6332664cb1d30b7c5a300fb6ecd859e83ed%3B3.0%3B1675058174478", "%3B9607812394912942%3Bef79a%3Btk02w8ded1c0d18nXM81HV0CHnj53SnKw7IfuKzvKBoiTEBajMjvN%2FyJSgDEJpXSX%2FnnYK9tiJJrawJj6%2F0UGRjpoohK%3B764c582b28b970bf49c03234b50464c8e2860cf6cc227aafe0fca35f6a79ee8f%3B3.0%3B1675058174509", "%3B4440631722298505%3Bef79a%3Btk02waa471c4518nwjhw3QbktI18pb6%2BMjisgvQJms%2B1eGA8FZ82C1Scqfj6%2BaBRnT3vuhWxihV0bwp1rr5W4lyoF%2FmR%3Bb6c68a77454086e1b8e493644c4d4160981565edcfaf448877307fbee6c4ac13%3B3.0%3B1675058174536", "%3B5310722267426690%3Bef79a%3Btk02waf981bc318ntH1rny0Nr3sYoEynGEkzXXfJvV0xedbU7W33%2B2Jy6GEBbUuY6TJcNY1frqDkAa081EVokq71%2FzSu%3B07bf018c6171337860c991ce6b3db9c0900194204ddf2153c37b84a5cb96e41e%3B3.0%3B1675058174567", "%3B3324865277447914%3Bef79a%3Btk02wcf831cdf18nOGtgbsD9PNfB9znlqKpLkFqPwhmH9TEJogfv6JxDmr8z6ws6VLj%2FSj1cY2ywH5VvM257xajehBzC%3B6ee10823eb44b900f8273fd7228c811b30666f36052c1bdfc7f9fe73963dbca1%3B3.0%3B1675058174598", "%3B9345814440023233%3Bef79a%3Btk02waa161c5f18nUCMAWn0PMe1KFKoY8YEyFObjrQrsGkkHKpUQnTptgB6iEvghvhd%2Feg71XYZmS9XXY9JWooRx5E%2Bn%3B1a25369fa45766b5cfbc6577decf8b0ca9ae5a1aaa97da679416dfbc677b31f8%3B3.0%3B1675058174636", "%3B6264942801397728%3Bef79a%3Btk02w60681ad518na2g5fW61wA6Jd5LzHM1Qz9LE4OSg%2BAkXk6PMcPmx07TvRQNhuC7a%2B81ZjayVO6mxDppX6oj%2B5QcS%3B1618e5d8a0e5c60620a22a50bf81ae94f3c3445d6b3b165f05223b9329841f04%3B3.0%3B1675058174669", "%3B1919872305118576%3Bef79a%3Btk02wd1631ce718nbmDag1zCWHHTRozyhgcrqfU3FV7Zt%2BqExxSMI6q6rj0A7qrMmabNpwBbdIo%2FWqqUBbCW%2Fg3CaFsj%3Bcb664cfa5c1d452abb4796b16f925f5d8dde2c1adadbdf0ffb3ae355ae91a4a9%3B3.0%3B1675058174716", "%3B7466926930589249%3Bef79a%3Btk02wb23a1be818nyrDe0eLbwEVm9slhTtG4OCKXdEdYvrSETm8WF0AmO%2B%2BN5mldvwENWFwt%2FL1nleCIF8eQWqAvO1ET%3Bfea246a2d2a86f81222269a614f9596f370df25342846bc3e15e6ea12b30227a%3B3.0%3B1675058174748", "%3B0867415077299694%3Bef79a%3Btk02w83611bb018nCN1vvzCLw91bD8I6LJ6le%2Btj3I9%2BLyvWIUEFThsgRjJnezq0e4kEbQKb1LL2WDzvccnLqMVnr88M%3Bce90ace3c722c1a5745858801a2a152c2bce7dba05fac2a0b5e8127d66780867%3B3.0%3B1675058174779", "%3B3112341219052669%3Bef79a%3Btk02wbcf81c4318niKGWr2N0BwwHYytSbeJQzImfu9fzFjXVZ3fFfiOYMDJT4MCmGLkeiuB8YD8UtJNx%2BMGZJxpqII1R%3Bb0bcd4fd7103446ac5daf7da691b0d00e1cd8f3bcd5122ce2d884f5d435ed10a%3B3.0%3B1675058174810", "%3B3329793921604239%3Bef79a%3Btk02wb5cf1c1218nSWWhYCyUZa9Vd0lzXhU2Gxn3qmiB4zAmZRyxaGiZG997RArJS1QiCt77Pw5kmwEHz2%2FWKGjBZkw1%3Be40e86bce1832b0ca04bc05a9018ac0ad09c9e709deaf94ad55b42f14c7fa8a9%3B3.0%3B1675058174858", "%3B8007035604442885%3Bef79a%3Btk02wb8c21ca318n0p0WrGKIReYKq6dgaOvgGvw5WmiUDPouMD%2FIlVBoCyJm%2BUWErexcUDxVk9nevDI4MsaSKDmw9MOT%3B54f0bb3e7eb737ec6969385400977ce1c5ca960623915f0af6784fcd6298bf05%3B3.0%3B1675058174887", "%3B6509123050876053%3Bef79a%3Btk02w902f1c4118n1O1R0Aa0hqnbP2sNnzyKf0kpK5E%2F41WeFIn3tqlfcqCuMbkZGGvXRiF4lWUQD5rWUOga0rVPntgn%3B4f840722db86adef584ca4eaa5f7de2f5d861f58b4d1daa08cc92fa5bcfe1ef2%3B3.0%3B1675058174919", "%3B1755402598759554%3Bef79a%3Btk02wb2431c6418nuxzWScyL64sAAyc4%2FFeuQp7HCANZtJxX3NCKuaalch%2FmMI6y8HcR0j2%2BsxOnoaxFyEIgUp61Azie%3B5417d136cabc04f12f9ad8138ac86a23e0455b4c1968b155d7ba78e51091047a%3B3.0%3B1675058174950", "%3B7999821594847365%3Bef79a%3Btk02w55aa19ef18nPjZ3qRIVDk1AyhEPL7%2BYEF3HXo%2FrfJHS8BiJ7GH9gg5gPkhk8JFaQ%2B8B50IFMI1WSkgFGKW%2F5qhy%3Bbc8ac25362f2fda1cc4563d94e6ded87ba06f492f50154e4d5210b4242fcdb43%3B3.0%3B1675058174986", "%3B2142417896527307%3Bef79a%3Btk02w993f1bc118ndJSC9CR1kOUBV4FkdyQ4pyvDMMgvhRRn%2BrBkn%2B6s4ijyalVHOqF6bCwC682ZwwkPNcO7WFIOqIMD%3B4e3b74c883424c0cef793887fd27a9c4575950b665efb68443338ac0810d978b%3B3.0%3B1675058175017", "%3B9024678581515761%3Bef79a%3Btk02wb86f1ba918n9rL5lFV0zudj0Uws9xClzljuu0YoYYdLpnVf9dwSfH31Rw6Q7ENY7F77CZ%2B6%2Bf1U5WpKBwJqUSGe%3B8fd56c5935f9a1d055a802fddeed9c0a36ff4c2c9072533f6fba0b6482766dd1%3B3.0%3B1675058175048", "%3B4946639627150888%3Bef79a%3Btk02wb23a1c6f18nB0gL3oEhf4pKBVwnULIFYFrKg9%2BSXymzTPwsz8vez28XoqRwd9yMfgDcQ0thk0Kz2UXzG8Z2JTLU%3B4abb9896cc8d20eb102eff125a2792140ed1b25de46a69acee2745cc93dc7b1e%3B3.0%3B1675058175088", "%3B1678575609241738%3Bef79a%3Btk02waa641c8518nR9j6IY9zvJeuUx%2FEjrhXeE%2B%2FSMLGNjI6QirlXynhKkvNF8G5zDtu8bO1JbHuhBVOVZknRjaz%2BSae%3Bc48383d1afabec846506e64df779fef888f8f8445a6e20f95cadbbba76d24471%3B3.0%3B1675058175120", "%3B5189615144130312%3Bef79a%3Btk02wab971bbc18nriclrGIjCZSRrPJdmdr7Q9GBvXIk0J0TqII%2BQcXIAGAsFILssIqekcJUCd1bvO1%2FEpUlBBISre7H%3Bf7230c964a989d3d71a92f705f61faa66d577142f7a8f1808e059b0a8e2c21fc%3B3.0%3B1675058175153", "%3B0140972456133654%3Bef79a%3Btk02waf9e1c5418nw5fFmFhMtbCs6XuDmBSB%2BU5w9NHpwIUfTlGos8pScMbmBcjg%2B4X39doWspn5Sp0IIEoe7Czzx%2BZR%3Ba2e8b5e7f940110e2397bb2e786d118d16b31aba3e8c7b7829717ff0d49bf5f0%3B3.0%3B1675058175191", "%3B5224456318049547%3Bef79a%3Btk02w9f1e1c1718nLNm0H18zVyOIOckUaCfdwWc%2FLYic09M0pjWC2lCnHjrogcgFy3K7lzpDAMwX5hHTPSG0nyFDXIld%3B625f541743b413a194ffaf3c84dc57d2b1b99a9088e6b0b34953dd923f852c11%3B3.0%3B1675058175233", "%3B9948699109903352%3Bef79a%3Btk02w69b61a8118n0sE523kjmYh3TDuZOeYwZxs2AI%2BN8cw3F0%2F%2F1PS6LpFYxNnFWB5ckX%2FjAkO%2Bq%2F%2FoBeNe8oxzAP34%3Be7a07e4610842e4a21fdc3669e9928669e481dfe343a09a38564d12f91136540%3B3.0%3B1675058175265", "%3B8738946529909015%3Bef79a%3Btk02w7b461b4e18nKJCGm5WN0WlYWBl79cH24XK8zjomv3ZIXfOiaWzO45Kep%2BzA1R%2BFumxuolSc24FzX7j7z449OKwc%3Bcd7dddb32f05dca5a4a6721f3e17f5b20180c455b300a3e98f3ea9b426af37d3%3B3.0%3B1675058175297", "%3B8547905258225022%3Bef79a%3Btk02wbe411d4e18nyc8lx0ETcx1yK68wReHHq8E1vzIhXIqWYGKOsZvTqOF5SQup0qt4mNszESid6m4dNQrlpppqKgSo%3B71ab062335b46f87fc73fc3f1f5ece29fb9c7adc64358ca446dbbe3f414e18e8%3B3.0%3B1675058175326", "%3B8243719250949883%3Bef79a%3Btk02w65ad1ad718nCldVim0QgF3Nc92GEiM7b7AD6mg2reK8E4jOABZ6liHOaWo5M7KcCh8kyG8fiPaSn62oFjNhoJw%2B%3B8445288df9dbced99244131205f443fdd49435ee0420fe07568c4e1018d9c2ca%3B3.0%3B1675058175354", "%3B5582091507469139%3Bef79a%3Btk02wc9c21c8318nkKUjpewkkcUr5Gd7rrZu%2Be63uSFDs5fGsgt2%2FbcGQwIUT%2BASnre5aZLpAjESdLu3fUTV3balp3m1%3B54309024eb45d95e3122a10076802511cba7e1106169b03f45b058be5750be29%3B3.0%3B1675058175387", "%3B5580730429614048%3Bef79a%3Btk02w94fb1b7e18nrNWFnhKOCFI07ybqzSBdhlLSAg4e5n%2FvHO%2Bepb3vOQ05rBAzF%2B9pLnTrUl1OhLK4VJTbJGpj5zd5%3Bb1e0ef015ac0d11644cab8f1564d9080b443b1e6381ad9eafd072a8e0cc75cab%3B3.0%3B1675058175415", "%3B9868632015768098%3Bef79a%3Btk02wa8471c7218nRc1gG81qXyEKDTLkZHNrzuk7afU4j0SjTzARJITB7iBTubkybr2jvpPDIDOtnVhElbd1G7LGTzJx%3B085e0a0920a7c52f52121ed31e59dcfff72eea44b3b93afcea61f2855e821353%3B3.0%3B1675058175446", "%3B4855781789632729%3Bef79a%3Btk02w8ee61bda18nT3bmjw2lFmEm7p9%2FWLn8%2F0UsOOFRIdA%2Byc1edoMw9fn9Qo3Qt6dYIhLulu38hQfz7C17tbcvPUnM%3Bd07a17ab3f2ff8f146950c4a5b2a2c68d412530cf36b02df044ee53f693135d2%3B3.0%3B1675058175484", "%3B9939792285677318%3Bef79a%3Btk02w7e721b7318nO1Y975xhXTMJ%2FEoYe9lyOOGPMUbeDn5IbfwMje5f6OXzk77BKt0g4aeFBW7ne2IkWVObHVTuEjLn%3Bfae71da8a242091234396e5435a80a9a3184a51a0b0242180381b5d73950423b%3B3.0%3B1675058175516", "%3B7906265430102996%3Bef79a%3Btk02wf1621e0118njF0Tp6q1yyqUnbo%2BoKJuvobqKydxlsdWSekwByKo%2BugY%2FJKPQ16EFVUjAgDVgmpqKbnwpqGpOyk9%3Bca3db7ec61c6131a8df1a52b2f1e549cf13cf07643dbdc910fb689873a3f8e8d%3B3.0%3B1675058175547", "%3B2149908376829417%3Bef79a%3Btk02wcfa61c7a18nZhq4WgPrAJeObQ6libxUEsuoxXaSHVhQKKNt%2FZFTFfItfQ8qDvbjBpNm%2FRn4a4sQo%2FyEoP9Q5%2FYK%3Bdef086ced725261726c79b560d6989904f4ecd2fbfd62008e7fd20425c76cccb%3B3.0%3B1675058175581", "%3B4612867950953992%3Bef79a%3Btk02wa9f81c1118nRdLFrap27ooPCgOpt5DgJFuUE8bhN%2ByefbJK0Zli1Hs0KDvqLglRAWURNSrfEcDFmpOL3mS6oTEX%3B214e4e7863b91d0ad979f93d9b333d2f9c7a61469e2bdb2feedfac3108978134%3B3.0%3B1675058175613", "%3B9547693602875158%3Bef79a%3Btk02wb4c81d7218nDBdAu8qjGvicfEI7IDAe7f9U4o7ZUOdu%2FyyyNpYQwkcbsAtpV1Q2kbrLfP1JNqpdTgDWojmpmqoy%3B3f7a6111ad7cb3a3a03c2d14c1c2cd08ada94cc924207124aa614946e9f6570d%3B3.0%3B1675058175640", "%3B5324209862501316%3Bef79a%3Btk02w90d61b6d18nqhLiJvBT6LAns8Zk94o9GMzWH40BOnNvZtNb2J83fDZxSa8OmqUFzPln1bcKeiH%2F2i7CW7JCi6sn%3B1b593ccd259fd4202220a666c42630dd26ac5541248c4b2623510f5859dc357e%3B3.0%3B1675058175667", "%3B7732543691633993%3Bef79a%3Btk02wa9991cca18nRR4W9lojfU3J%2FsvUaF6LfPPOivQws7GsLRL9KEWpzlQ%2BlPXvAjbhfQrWZB%2FEL6T2xjgmqdwHlobe%3Bdf1bc1d9ce00111d3757948a5d50f4382978827114e01059e4846fdec28be7c0%3B3.0%3B1675058175697", "%3B7276083922541545%3Bef79a%3Btk02wbc5c1c4e18nzP5k1YlVDqxW6qYITufCJ%2FxasXYu3yhdvOMn1SFG5qM0bie6f%2Fgqv98%2FWrRbJux56Sdyb2Z65xFc%3Be825369a07811adc953358af39b00d8f6253a15d43be70fbbda4cf650934f205%3B3.0%3B1675058175733", "%3B4956523702189586%3Bef79a%3Btk02wd1e81cf318nArKIohivxwEJakRpYZw8q8lAEIBfhFDmCm1Bx%2FHj%2BOOduehrUz2au%2BQetpcVU%2FsPeirGx1Ll1InD%3Bf2f7faf5427703390d9596eee883fcb4fec25f98c975bcfe71ffdc7965902225%3B3.0%3B1675058175763", "%3B7071859277003673%3Bef79a%3Btk02we2a31d8f18nHeJelDCxFvVANOepvgLSYg%2BvzsnmuEDUARRzVuxyev93PZgjOm5d0cq2BRXxOhUfyIoX6IPkjeFe%3Bb7b633ee08594a9de873798a679383f3c84774b7984432d5684911f100783b02%3B3.0%3B1675058175801", "%3B3180959366333731%3Bef79a%3Btk02wc72a1d0918nvd7uHNVtZ8lbxBugD3f%2BbrX41aw%2BxeYCVTDbsf1o7btUrwA%2BxyHxKxQHTutpt3%2FKQXzN51PmtGye%3B3fa98685ba7667ddf060bf4beb1cc55ef8613576fbd0d42068fb5970b7073a65%3B3.0%3B1675058175842", "%3B9733907608429999%3Bef79a%3Btk02wcc791d4e18nHOv0uyQHfV6VZEir4JqhWqkO0MEsLcXVSvMxsvPhwlY633yZrYFWktLU66FxeTbWZzjfPfihHLZV%3B24481db1171b79893a12f00c18485b7eb3adb86fba6ef0f603d02de207efbb27%3B3.0%3B1675058175875", "%3B6499031886899264%3Bef79a%3Btk02w63731a7618ne4eXNfeeKBK2HNAF%2B%2BDzvCAtFqH0JwA%2FbCO0aRIGPtYUui8%2FGo%2B0n1fugNMF05Wxwcgh9Hg0rI44%3Bb73caf81bce460081c5c161a6966138c03b57d1f614fd906e95a40f5ceb29e30%3B3.0%3B1675058175908", "%3B9082153274476510%3Bef79a%3Btk02w826f1ba918nHQdz3i1jp7w19WS31T%2F2yI0FfNJrTte7OLybOq34WRyovO5Pj3abEzfmOZ%2BzbQEBVTLldhgViY3B%3Be417148eaa19577eb2861efb5c717a73bcc9941d8dac81697dc100238fd11f2f%3B3.0%3B1675058175937", "%3B5446709959481933%3Bef79a%3Btk02wb93a1c1518nwFsCGRWBNBbLmiH1VzfMgO0eiyLwuaoGmfp45tOrObA2jITjaKBoz%2B5LIxK6TsBe3nQ%2BZvYELHJB%3B94dbb80e0abaf4c9921589ae53bdbad546efd3021e51266dd2201cdc9338943a%3B3.0%3B1675058175974", "%3B7402869055233424%3Bef79a%3Btk02w9bfa1b4418nd7XxJvUmJRxUR5LZxSUptQPBPQvJ9S%2FExHTq4jDOQ77iq2Jm97t3c3JLX0hjF%2FS0iTUfSfNcrHO1%3Bcf3301787a6cd026d4935f394cbad4ad9b0997097f396b19bb32ba233b8aa39e%3B3.0%3B1675058176008", "%3B9926853140577377%3Bef79a%3Btk02wc6cd1c8c18n0SQlZwL1tb0ypnjWJVDVxYqj5gJtifgRYYPGvcnn83yUs1Z3905ShgCi0hq3oPmAtC0uNkbVHNcE%3Bebeed362c65f4290c83b40ad9fc05b5175ad621380e257a1df613bfee4422452%3B3.0%3B1675058176045", "%3B4717380222661724%3Bef79a%3Btk02w94cb1bca18nZ5YgmCOK3jk3mKQ1VGYVTZCoDOLV4wqSUiPkAdwZRiKclk2LBhPzYLOQPrdYD63M4Za5PORRWWxp%3B75b7a622485403f44132458e379c0fce3a726e7f301059b4a25895a5e859c131%3B3.0%3B1675058176089", "%3B7580850513244668%3Bef79a%3Btk02wd0241cf318nXgpoinHuogPcTG9HnobZeChwxxGQ3K7Z6Eq283SHMj5qQbvfC%2BAnStRvoEY4WnpHnj7EpOwbVvOT%3B7805807916d57365478fcca839f5434a06c85b66046638463f2b1c034904fbdb%3B3.0%3B1675058176128", "%3B5328681764804710%3Bef79a%3Btk02wad981bc318nyx08tcmCmVPM9LTz5%2BurlzSesY0BM7gaHArIPMrYjb9nCpHB8FSmPOSV9NiUW6JJUc2VTFeHkyS%2B%3Bc78c47ef79c11ea3dc6257ccf7bd7fe2fd69518ac3e581f92cb83dfb032bce71%3B3.0%3B1675058176164", "%3B5480607031286058%3Bef79a%3Btk02w99951c9018n3rXQramhl2J19%2F2w0vKHfxXjD134NsmDvwmV6MZ4aI70ZTVjr%2BcKxdxwweYJmjPhqDcdCHdCvUcy%3Be6dc5979d3c01db1caddb2e493177bf1631d565c1a24c5299aa765dc37962a71%3B3.0%3B1675058176195", "%3B0309379765823179%3Bef79a%3Btk02w70041b9b18nBU1yqIRQB1eJLEmK1g4qEhHpARF%2FrQIu7wMN9B226wMFBMLgnodV%2FPUu3pRBfNjsdCzSeVTluZNy%3Ba54cc722fe19a802dd81c21740d3901b8cd46e8b3de59e36d5aabcc2396ea188%3B3.0%3B1675058176237", "%3B4437850502051662%3Bef79a%3Btk02wb46a1cc118notEJT8k6tux5Yl5HUays47JcI%2Bmehz6OnqFUtZt2h0AOF8Q5rtzw%2BDRt0fAgcGhOlmYSLxXa9piz%3B09a6ec55db759fec94ed7b2ed01347c4c221b1f62448d2d2c42504001761c9c8%3B3.0%3B1675058176267", "%3B7397903615228987%3Bef79a%3Btk02w8ba71b5d18n1m0Yuo5PEPHjG1lrNfcg0kary3x%2F4M5rhC1HORFnmb3bPtKrQlZ2ZR5i4GarL2%2F%2BES%2Bg8ioyK9tw%3Bdf7e9ed2e45f791d15789f89644ea6846416460b4fcb752129d88f0002ae0395%3B3.0%3B1675058176303", "%3B7017238490311126%3Bef79a%3Btk02wb6451c8d18npCvBj1WvRhYMDf3nSA7R3OgmYGrtTekbGCTeYFiPeLgKr95jgQ57MwwfxtT%2FVsvIjjmrpJ2GGE3W%3Bb89c30647bfb03ef1bcb3f2e582785f070edf492f2016dd683df326318da0473%3B3.0%3B1675058176332", "%3B1406868379822850%3Bef79a%3Btk02wa4381c1818ndzuD6RYDonWO5Cx%2FMY%2FAagJq%2B4yYo71c%2Fsvy%2BCXUTNsVojtvKl2zMZ7fGX9tyawLMvDm5b0MKO6d%3Bfc90e409dc39f78aeb26ee684991ac693843c3c0691e6dd32fc51b8785065f02%3B3.0%3B1675058176364", "%3B0141243185793108%3Bef79a%3Btk02web181d8e18nhu1rVvFnQVSmhVSXwgA0khjlINxZarKJdhekJDdjJzAAhWy4T%2BUoyO7sPknPsj8e5wnBh%2FkWt0Iq%3B181c2b1545a62855f2fde8f9126595d893d4833f2d68c6347e6d5e69678f37bf%3B3.0%3B1675058176399", "%3B6666019363828464%3Bef79a%3Btk02w4f31198b18nIzY93sWi4L1X6LOlKuDU9ogHI6UHVON1NdZJ%2FrvFRG5fC26153aJU%2BN20TnPSMiEEK5GD2OtQZGm%3Bcfebc3dc0699ed2c2d43cc07a2ddf087aadc0027835a8cb8da9ef0c0b65a2b42%3B3.0%3B1675058176433", "%3B2485519376954207%3Bef79a%3Btk02w8ec61bab18n7qovOgIoO3PlR5p1NvSFUMo0i%2FjA16s6h4CbKhAP5FCgcpgGvcom15PqGj35BbiafvZac4cqBR4q%3B93ba7a29fbefd43d1e6d7d7f36c3ab413a038611a92a5653a7f56c6a3f961ffa%3B3.0%3B1675058176478", "%3B1495067703766830%3Bef79a%3Btk02wb3bd1d1c18ngi6q8o9Qs6f0hXyOcb7U6ajdPgCxbr3HH5JdQZB9jdSdSRaVCtppVVqoDLL%2BpUtrdhHvxhfEiz2u%3Bc5d9ff4e8269e809fa45bc3a9d9cb6d2a212f35fa7fb911b9ab8b9a4e2ffc18e%3B3.0%3B1675058176524", "%3B9858942380519865%3Bef79a%3Btk02w872d1ada18nUqp0HoWQT1No0CGqdrFv0SaxCgEnJ7Qu1O2TJ5RMhTnGaL263rUdI%2FcHErhvhyF78VQ4PD%2FiM0v6%3B2dd4a271ede1cdead236b8929c21655c03660f168372ed80031a4c3da73ee1c9%3B3.0%3B1675058176566", "%3B9315822042666902%3Bef79a%3Btk02wb3231bfb18nbs1W4ITyWPw9MQKjr%2Ft9f1xvUgVBZG0xYvysdV86uNugeBQ0hAKKtqXvxe1BdH3WGb%2FU7ILdCX9W%3B06c55e3bc63228e16b82bd60e6d5cea2d06a10750046f05e19755d7a8bbb9ac6%3B3.0%3B1675058176602", "%3B7906609913279978%3Bef79a%3Btk02wa7cf1c1d18nU3JR8R1Zf1a6rEqccXSanrRuPpNPoPhCpykqgiR1SR5AxJxCWZbdR8G1jxwD1804UX%2BmiXNIRYzh%3B6dac397e7a11a9d7af8777604646214022159dccf86a01bc36d600bc0b16a0d5%3B3.0%3B1675058176633", "%3B1205398275502224%3Bef79a%3Btk02w7c061af718nD8HQ39izPZvDO6JxDQSAQQUtSlRCxQ5yvY%2Fu3Ya%2BFnXKB4Hr0fRW01GyPmAStKdjaTeSo4IQT60E%3B9973294ab0ee1208dc12c45fb41fa897abdb255b0b2c5eac4105296fbb47328d%3B3.0%3B1675058176681", "%3B6020240859302137%3Bef79a%3Btk02w8f331b6518nK4RqDpHhkwPIZf%2FEJfUsbf1%2Fi3seBV3Z4DLwQ4N5pkPZgs0h%2F9G6JZ2xlidwZJfNPiJxfIqNR8%2B4%3B7ed600d4ddf80d24002dba3d2aba412181995b44f67137079a85ff4a62281f17%3B3.0%3B1675058176717", "%3B3667104272388264%3Bef79a%3Btk02wa75d1c5518n1iO0v0N5hSTAwkOkeq98bTMB%2FqLOgrvyuPcfGX%2FauZUPwvF5NTazRGhfLNNzL4z1SS5BwRPQfUDx%3Bdba5ce40a7fb57f587861968d8dffb88c667fc30693779c2ca19b57e99365a86%3B3.0%3B1675058176758", "%3B1686382504928588%3Bef79a%3Btk02wbd801c7618nUxjqe615lAzkojzTG%2FhFJBHndp2ySY%2BpCRs1KDji8oEas7mHXeQ4d8yfxu9auXHRYyj%2FcAjNXe%2F3%3B508548b0a6576698aaf6592a02d6671bd6bd6df755221496d8a9afd0de7e778a%3B3.0%3B1675058176790", "%3B2420001687312998%3Bef79a%3Btk02w9b6c1bfa18nqbBHW0mui0X6z9qmJw6I%2FLzSos%2BUI1w%2F4EjzfrD2N41GHgCtLeuNGhaGgvytKXfYp%2FUKJGxue5T5%3B90a9f0541b91671b9e6c1cd3d8515de1b79ddb86b31ffd8893a543da9dbf9e1b%3B3.0%3B1675058176836", "%3B2806635914232367%3Bef79a%3Btk02w8ff01b7718nsCLerEi1J9Uy0mTf6e9UwTh2w9kGQbDQST3QS9%2BbaUpis3j8VaOhKDCdAGuLhnZg8LUI907own8b%3B1d2c368c0ee34f3ab9a73f4e17299676c5eefd19e44874cda89407c1c660b718%3B3.0%3B1675058176875", "%3B1302558469731288%3Bef79a%3Btk02w9ce71caa18n9ZPnfmLqX7NW%2FxcC9S1wmRHWUJyCx7EY%2Fo0TXGAXLPg20jjZfklwFV%2FtLooXwURtyMeU2uzegcEu%3Bd19e00cd462f87dff6198a22c9dfc40b414856f0c40284920ee99da48d7db0e2%3B3.0%3B1675058176914", "%3B3945996658105229%3Bef79a%3Btk02w95ad1af318nQlyJfrzlvCLaVkC7veQ%2BS7iJ0%2B370kNgkPRjS2eN1HGjBfvMB8nLVlr%2F14AYuB0HIT0cxj4fT%2Bv1%3B323ba5ec3b515d112a27f643d60844061fcc46d1c4ee44417f914dc6f3c93475%3B3.0%3B1675058176954", "%3B9974243895067979%3Bef79a%3Btk02wa9ba1c3018nWiR7EXDSO2xUIZru5ZCcMMxoRwXN0Xc9n3lyt8PzKErhXXp1ZkhOum24I5miMClw2XDGJDZYp5Kz%3Bc50e6bc1b61e88d0baa98e712ec93183b7957afd06b6f56ff3b4ccec7b956de8%3B3.0%3B1675058176989", "%3B0524895261153533%3Bef79a%3Btk02w9def1c2718n3FhyYpWELNDS2awn3fvs%2FUC82DiwsK%2FVz4ojZM%2Fl3kiy4ZdG3Ml%2FmF3jjFvfTtgb9oLAldd9TzGT%3B74a05444f4f1f1f127b33837790cd09d04ea42b296c560048706dd8703875097%3B3.0%3B1675058177021", "%3B9043940125904607%3Bef79a%3Btk02wc9801c9218nVskpNaN7aMwHUW69nUkM9tJzfbUqdf%2BqI5FkbxDqo7HjHaVtxQXU7Bsysdl67n1iq5HG3BGk6eBm%3B1ddd3641895198582ed9f0c973e94fff09c205d44a488d5cf53a0229179022a7%3B3.0%3B1675058177056", "%3B6562240316496466%3Bef79a%3Btk02wad631ba918nNkx7avGvsKytVh6vZ0JttY8447kYLQy%2F2Z4G0AHY4XKhZkdtOlUAuLwJu4vbFi%2BZe40tFrMKEH2J%3B72c320ec65b61e540fc354755354bae562896e60d3393e39472b3fcdb5841e1f%3B3.0%3B1675058177097", "%3B4765932432320312%3Bef79a%3Btk02wb65c1d3a18n8I1VKhqgoDwcAVw2H1vIxMYRak7dAa0Mpx6anb5NTrUPooxI8cqaVUP2paVjjyPzzmPz8JBDwvhZ%3B6e083e027811f7c3e72c91d9f17b7e1199d3d5d984fffc0f6b76baa7463ef699%3B3.0%3B1675058177136", "%3B6386720344445914%3Bef79a%3Btk02w9f111bcb18nJfGcKVEz92crEbW1%2FHagjDtQKPPbiQt8LV6ehQ3VvzyLWHLLcPQpuo7agr4q%2BsKgBz8y657j1PAI%3Bc1d7e115e8f5261ef1d97432db4add1917d3345aaa5f776d4c6004c47d1b82c2%3B3.0%3B1675058177176", "%3B4938483771608949%3Bef79a%3Btk02w9fc41c0018nxJX8XkGa0uhTPfurlVbWJuSJ6AK1idft8XBF2%2FLE9FUE6o6qQ3VlonYsbKg9Ki%2FhBn8UTmraOwPg%3B50abbf6688a738808c223d94cc2929b0cba15264d944d61d38ed59e8aee1280f%3B3.0%3B1675058177213", "%3B5933517492255995%3Bef79a%3Btk02wd4aa1d2918n72oxtA9lyJFcwthohkmONGBArn6LsNauohov8K3FxNfRDu9KGKR3PVSJNuenvueqO9HGaiW1UoyW%3B22ca971037ea4a2265e8571531a5d6235954f5a179d9f71634a2d044a224a937%3B3.0%3B1675058177255", "%3B9195443861151426%3Bef79a%3Btk02w86091b9f18nFU8k4k5fwFH0cekZsxE%2B%2BVl3iY%2BkjrKB0%2BZei4y2GPMQCogd89pcwZv6ve%2BjTRTOGIT4rUCxRDlo%3Bf3436913e6d398a885f977081d8566c1bab03ebeca5dc8a4741e581dff20060c%3B3.0%3B1675058177297", "%3B9997105566896223%3Bef79a%3Btk02w97dc1b1818n0raaP4tsAa3JfdTyT3FKpw3%2Fi%2FTruVpjfDwV3DKOGq0RYw3MYe27caq0pFEL73iCX4v1JXjGx589%3B5d0841bc34473c973dfc19808f06bd7567fd86c194d5022b6b384cc44c5107dd%3B3.0%3B1675058177341", "%3B1123328856732448%3Bef79a%3Btk02wa7d41c6418nbcdDIvWAaB5O8Prn1OvOqg4EDRCZv5menOF3iOMsmVLanPaabnCDnG3epv%2FJwjeAxOb5BSvw99Jw%3Bd09915850bdf773c63616213e4f826b17d1e2237783e2265fbf6a887d8fed4b5%3B3.0%3B1675058177385", "%3B0833456921278845%3Bef79a%3Btk02w552e1a9318nn2F032DlgeLP7OO9R%2BLGtYEj6G5%2FXaq8qk6NN59Y4JpaVgivdyh6x3vHAUnGFo7etRf3%2ByAJR65h%3B1ba7a68386fcca2e5a2dbf79ea7c653e4ed793de11ea5a7afdfe04f2ec942ed5%3B3.0%3B1675058177427", "%3B4139098606228220%3Bef79a%3Btk02wb2791c4018np42neies0l6Tv2cxW5NT10wJnzAiucoPbwBh5OPqA1NXKImfRY%2FhUHfzPIez6h6nzBVM5TovR31a%3B9ecf12a373d03d9a05c78f9cbb77e96d6d1dbcee6ecf27fb66b20f246b08867d%3B3.0%3B1675058177461", "%3B7121570698233527%3Bef79a%3Btk02wf94a1e4118nMARO1Vqm0tdfnqHOyqXsUpLmOrxsvzRRdBXVazNVcixd6CuVDr4qmktWdHQVEhkv7Ag9kryCSvKc%3B4b40ad337ce645f8433d08ce4754d24f3d635ecbe1c823d8bc696d6b1a2a9b3e%3B3.0%3B1675058177504", "%3B9270548162336794%3Bef79a%3Btk02w90661b5118nr2gqN91I4un6AtgYbkgq2c%2Ft10%2FKYxuZ%2BEiP9Gb2su3Udg6UjgCpsoNjjB1KIh2ETOni0OGpY1N1%3B978bea636b01b41b91e9154b5887000d11d117b88d582250ae803d80638ff356%3B3.0%3B1675058177542", "%3B3649211011701582%3Bef79a%3Btk02w91d41be718njAHFXV8Ku0J0Eu4f6o0%2Bc6HzftFcPxg%2FzNcjdoNQyYwGKobzIJDOCefKjuWHFv%2Fv3e9EIJKwoDNG%3Bb24f66ce8688a53c26f066f3f9f42c9aca4999a3efb8061025489fece38d5ee8%3B3.0%3B1675058177585", "%3B2127604566397185%3Bef79a%3Btk02w85851b7d18n90YcW6MAC3wrGVclwYPEjHdP8EpXPX38z5Chcw86VtPBpiRdFwCNgubX75pGDE%2BxtF89vsCWQNhJ%3Bc12e481c5fa98e351ac544bb5bbecd0e697d076df6494e32057b16f5b2fc5f59%3B3.0%3B1675058177637", "%3B7446983231070773%3Bef79a%3Btk02w5e2d1a8718nNO9DM3R5U3AEjN2RTabJkrx70yJ8W6SLYRWccOpRn3fjS7Q1qKZ00HWbqp3ZfNseC5rgpE322LCU%3B75b01f9986c4f0180b4e1875b90b243de73f77d505578323c34570a8760a1ff2%3B3.0%3B1675058177682", "%3B2628190827546644%3Bef79a%3Btk02wb4621cc118niwFVWW0MznmSCKYasEoG5LvIL0ErJPDdhUDVh9GHq2JhZimhgQEKOclyccmbDoWYPbZNwI1ayxLC%3B00115258a421cf3ab7904b494012197e7ff4ae1b6b698aa96cb70fff42ff19c7%3B3.0%3B1675058177719", "%3B4326363810982748%3Bef79a%3Btk02w4f7e1b0a18nLB0n40CTILtMd0IvGEPFL8i4nC%2B4ELTn3qMU8H%2BzRuUTm5l%2F6DHlQ%2Fy8NpsshcrwemmBAff4lnNK%3B63357993781e2f4bd7c5007e2720fa69fbee94af2727a4de0b9200955715860a%3B3.0%3B1675058177752", "%3B6511083511949924%3Bef79a%3Btk02wa9e01bd618nCIKr5ymam7lgRkgaGFcYX7%2BApuEWXQ4p6Mt5sn%2BuypA0nzEO8bEl4q94Gviz%2BY%2FUPMiyV6mZ67Ka%3B86b3266cb54681c3961f2f983503db4a1cb97b3aa8cadf53be3c064def699ef2%3B3.0%3B1675058177788", "%3B9690397219365456%3Bef79a%3Btk02w97ee1bd218n1GiE0VnRy4SPZpuzR2CWEbBKvr%2FMWtLPVHlP8MaNW7tpbuPMjadAbWpGEs7HNHETCc4QLGLpYNta%3B3138549200c45d88bc0b71b1e7510709155db474fa5689544250e35a200baa24%3B3.0%3B1675058177821", "%3B9899567104586886%3Bef79a%3Btk02w93a11c4518n2P35yQxal0GCOLgeWRpDwMQ4c3VVeLbkB7Mau9sm7q6TezvF5qQn84ObIKeBJufLyoSLbdxn1Fol%3Bec6c483b03362bd1257bff9c40177f0de55e5a507f5d07888f1836de5a2e9711%3B3.0%3B1675058177858", "%3B0983471247221701%3Bef79a%3Btk02wb0741cac18nXFn9tD8CUjYcHSxPGjMJDtXIfuYISTHdcysDyLyj60D0LbmSLwRjH%2F5UGzukkx8GSg0eoYRslZEh%3Bf676bde5668a3a3720db9de3c53482720b6b2640441e4a51a2acf132cf50f4d8%3B3.0%3B1675058177893", "%3B2287624542344132%3Bef79a%3Btk02wd8191cda18nmEDulTyzp9kwKEfOKuSZ2pdkXjNhpsU4o7GaNL3b8oJmCRjjh%2Bbz6WeEAFTYq5DnIZpM5tgDyT3p%3B93877e78e2ae0e1eb8e0ec023da123cf093b2be6138fae1bfdd20412c1e1ab30%3B3.0%3B1675058177931", "%3B3272985223273674%3Bef79a%3Btk02w63fe1ae318nkvjW55NBF4idfPQK94786TDBsxB2xNTmV%2BvbD1%2FkWFC%2F%2BDDb43sX6tfi7bywesssp1hNwNN4W3aE%3Bf286cf094a5cafc6f495faff420e189b6b188ebf68e158ccb09c1dbed858a6b3%3B3.0%3B1675058177969", "%3B6208574649693463%3Bef79a%3Btk02wae941c9e18n6PJOyskJ19CMMqal5SmN89xru%2BnXNKK%2Fq%2BsfVtuWMjtMqw1WyoUzd7xwKLaO8jNRn1AcP6HsxJYV%3B694591ba3f1d03a7636aeb4ec270ffd8f3d30dc827c3f4eda699cee6cf6263ea%3B3.0%3B1675058178002", "%3B8675576032456647%3Bef79a%3Btk02wb6f41cb818npwYI1DIyfC5XWiChw0MjGNLfX%2FxzejRD433vcWvNyjxSv%2FabN%2BziAT6hBlQgsQeFxupAcEmIuFO6%3B4da3003bf5e5cd1afe7db6fbd516317f644438fec81a515d22605f159aa1cca0%3B3.0%3B1675058178047", "%3B9488814630782117%3Bef79a%3Btk02wac261c2918ncq3sv09Q5vVONYwSonY%2BOdDqC58zGaOoIXshhZ7gzML5VzN12UIzTeFAwBYjzTPDFsSPjfBf%2F8zE%3Bf4fd940e1772db15a7459145288555d1db0e91a3f840ef8864228e5789d31e41%3B3.0%3B1675058178080", "%3B9136688808264260%3Bef79a%3Btk02wa5751bdb18naHSx9hjbcviVjMT9IB%2BCr4sMrEk5ZabJjlhNEl89l%2FIKHNqj9r8NvC896hVKa6hPk9ffSPvrCP5w%3B046ea1527b343863fbdd6b4281695041e59710b0dca9af30bca00ba9dfb2ddb5%3B3.0%3B1675058178114", "%3B0128932176260523%3Bef79a%3Btk02w9ab01b9c18nwKn1RaixtK3dl0fCY2tMMPl8Ex9oMCwhx3VF%2F5cj%2BZj7eLDZWMGEAzg51V%2FyCzH1Z1hpnyDf9XSj%3B12f47e6bd2987d26ad0776da3efe2d40919195c2cdfd0e32d9e633f33b181ff3%3B3.0%3B1675058178151", "%3B2579012644438733%3Bef79a%3Btk02wabee1c5118nSndpOYe2lHR1Zf5MrkHEK7kZ7QEZg3hmz%2FQR5nprxFEz%2FZXCxYW4ePmzsnSJGaKxbdvk1J6N45fe%3Ba80fcb74c93d2bcb1d9705335f2cbec693e900818e899d3f577202183c2a788f%3B3.0%3B1675058178183", "%3B9923122780496427%3Bef79a%3Btk02wb52d1bf118nbHa1u9x0hxxBg3rKFHJ%2BgTRmKteTAThtKpy6iXnwz%2BtIPs2wELra0XGbEI04AjFyD7ylZv61%2B4fM%3Bae833f5a7a221a29b51077bc03d81d723e36afbc4279f6638f72b21e890d38af%3B3.0%3B1675058178216", "%3B0856274029939741%3Bef79a%3Btk02wbc7b1c2018nThwriEyINR3zhlOfZXIjaDY%2BjBdLCF3kz%2Bwu2RVnJ4oed9lLw44sRu4yGDnBRO37TeFSs%2BR55yzi%3Ba67ec83b8617a4f5046d25e730a2262d3131f10a1295f83c99a7e070816ed2ae%3B3.0%3B1675058178251", "%3B0051906384373272%3Bef79a%3Btk02w83691b5218nPu06Ckmyo2l3a7HrA4%2BI1lx%2F4wzi40j5JCyy1Wiu6pluaHCnBQOPew0%2BMKqS5DlAOQgj5OnbM0Xh%3B48e66ac2cb1add4949288da36426b45aca8d5d0b2555d9a011fcb49e52169113%3B3.0%3B1675058178286", "%3B9004907843658409%3Bef79a%3Btk02wdc211d9218n8plkZ9HcY0nAesUrzjnZOoRi8TBrYTt5w0puyV7JUignz9Wrr%2F%2FXTUcTvuT%2BeLjc3gWtpJJf7olw%3B2a5e59ad7a887aa24bb3c57ea16bbb44e5b69243be4f140acc3ac8cabb5f6f14%3B3.0%3B1675058178321", "%3B1106052763336395%3Bef79a%3Btk02wa2401c6c18nQ32tiUCKNMb1HjY7QOm1FwpYg6Ohp1uzliJc9nevj0CysTpCnEgYTGU%2BnAp18Bndns6UxfDu9ot1%3B75e35ee3223e79d71864d9b99b71bd1855dbd33b81851b4ed6808cb99ac2cc85%3B3.0%3B1675058178359", "%3B1465238776010883%3Bef79a%3Btk02wa2691bfb18n05QzDLQjGig4DxDvVOKxwTiT%2BgZY6UZDoLAgYl8o2sXWm3yxiq2P3eF7smeGHnMKMv7Pa7%2BUZSrQ%3B43fbe31dd564462d271548fa95629578f3449a8f5171f96c7170ef8f234ce041%3B3.0%3B1675058178394", "%3B8075366128681841%3Bef79a%3Btk02wf0b01e5718nbfYvc7DnyUh6KtBEqFspEudj0e7eXzhVaSSyyRyqYi3Q2soTcvdE%2FEtMWdstbXob3PmwecdtTkRp%3Baabdc1a9f4dbd38444e4d980a33a5cc489913c3f81754ac0b4a5c58daa50fb91%3B3.0%3B1675058178426", "%3B8808166075944168%3Bef79a%3Btk02wa9701ba618nGW0uwUxSl0MOGouhlzVOq0KfQHcymFtZC4NVpBh%2BPVE5bHFEA16co8HeF0pUVTAOI5jdX%2FLvsnk4%3Baa4898f0cfc33fbe0a98393c162b6aa0e6a002640ace8a869b236bebdab01c40%3B3.0%3B1675058178477", "%3B6664185736009444%3Bef79a%3Btk02wbb3f1d0718nXtcxefbaFvd37lUDEDLFp1Yx%2Bwi%2F50cL7tiadM%2B%2Fxb6UumsoVgAoCq3kotxPecQRq0t9dfbTdflV%3B7a7ee1c9698d92ea5e1ca391ce2b33b1809bd750b8ad749744bd2092edfd0b41%3B3.0%3B1675058178528", "%3B9156742817595535%3Bef79a%3Btk02w6c1d1b5818nSEXaq2C1QSl1pOJa0R6%2BJX%2BdoHlM73ktuZVLNJFf8fqK71z3Hhf5u%2BcBgeUocp5SFtoiC%2FeeWrhJ%3Bb6115881940c3ceb2befe1d524e80834dabf9022b7f0feea5a867014a7ef4463%3B3.0%3B1675058178569", "%3B5833526498870885%3Bef79a%3Btk02w8b4a1bd218nnSkHS78fDbIeMLNADeS4OBSxgegIN2MhNtdVI3x26rYe2P7GajgZ53DkphloWjrxQpY34EeuS5wE%3Bbe8696a4747c6f123173cb861beea93ae23d4566b8a1f5d82dca296f36a0e858%3B3.0%3B1675058178606", "%3B2316570313328333%3Bef79a%3Btk02w87931b6218nNz1DhrcL1tI6XmPD3h0OBZg0q735reSu3x%2Fpd4QTMrggo8cijGiVsi8449z1ra1YO3z7dFrAEmDY%3B81b41923ed2e380ecdca4240ff35c208e2397e014597ad00835520e95c6b103b%3B3.0%3B1675058178642", "%3B8933214775956004%3Bef79a%3Btk02w9d251c3218nfHat5rAXMHj3VFt%2Bkn7G81qiasSQMIbu3gppaoj4GU3s34r%2F%2FlRha3jvs%2FXQd6DbTTRfVaJmwapW%3B56f44f3ebf098fe791a2859791dc7f7a86b5eba30a6351d6c815127a84645538%3B3.0%3B1675058178680", "%3B1530240668272890%3Bef79a%3Btk02w75d61b3618nU2J0YJ7h1ARZvdl6dy62tMWHGRczBnCvV0SbkAUMOJe6n9SL%2FV%2FhCK3oJunkHcSLnfqIKSym4YJ%2B%3B9a8d2a0200d7addcc5b4f8922a21df997d5c7c45fcba5f13058a6c6b6cc91d99%3B3.0%3B1675058178719", "%3B5118043332979663%3Bef79a%3Btk02w80261b8a18n6I11cKvMEwQJ5f6ea%2FvLi1OTZ5Xbz9bwkBCWGGsBK%2BijT6tugMscBdtXVtDHw8CErR0bUF0PRrkH%3B0d7dbd75cbc26bbfd41399fe58b2ff1c68d5474e20b7f8f4988fed1343d06aa2%3B3.0%3B1675058178752", "%3B9058364791082895%3Bef79a%3Btk02wb7291c0518nKvv6dvm2CYlD9aAfUhSSHwyjzzEBgIR%2Bh34n9Uv2IxT9PJTKjnufsdHv%2FL3DleChCc2kL4TdIZEB%3B477aac5ef2218623c86d94b7fcd04b29336ea9ed5fb7a4c1a9aa6d827040cdfa%3B3.0%3B1675058178792", "%3B7187077956235159%3Bef79a%3Btk02wd5121cc718nq4rWThkcMgsxm5U0yiupH6%2BgqiCRIobN5F4xLbj%2BbqdGRUPvqKzJpTz1F3lg%2FSoWyhwXcc3V%2B%2Bn0%3B29a45e3cc260a78d78fa7f3dcd8fec73aae129f1e3b7acb8e1588cf8415a79e1%3B3.0%3B1675058178830", "%3B1988274638758056%3Bef79a%3Btk02w92cb1bcd18njSNy4JmOs5K0pzNL3b%2BWLtO7S3dIvbtOi99jd8vigT0vHRtC48TZ%2Bo70wx%2FZMbQVkWSCwZWsWSkJ%3B969cd019c653b21cc75e0caf9c04088ee7a8361afed9db198d8647d8c72aa232%3B3.0%3B1675058178869", "%3B3769949401295220%3Bef79a%3Btk02w96d21bc918nHi18TohnlQKkWcIT5TDrBL2IR%2BZJTTrYLtYo8Y0Ye2TEaxNJzmQqEx0kTDzqjfEIUx%2FKNNboE55X%3B093865f8275c9141798c16e8a3ded7acb128989d05f49e58aee597c5471f4ddc%3B3.0%3B1675058178904", "%3B1772693887171473%3Bef79a%3Btk02w98fa1b7018nEbYDdYgQZJzk0meZ5DyNmX28dJStl9CfT%2B2jIvdk6X%2Bx5%2BIhYpU%2BukOV7YvaIy8A5HcT23a9hJVz%3Be3e391ea3d1b3a657ea42a9f52f00f9616333d6ecbad006097524bf8cb3eecba%3B3.0%3B1675058178948"];
function liIi1IIi() {
  function ll1i1Il1(IIlI1i1) {
    let i11l1lI1 = "0123456789abcdef",
      lI1i1Iil = "";
    for (let IlIl1lii = 0; IlIl1lii < IIlI1i1; IlIl1lii++) {
      lI1i1Iil += i11l1lI1[Math.ceil(100000000 * Math.random()) % i11l1lI1.length];
    }
    return lI1i1Iil;
  }
  function iIi1IllI(illl11II, I1l11Iil) {
    let lIlil1iI = new Array();
    for (let I1l11Iii in illl11II) {
      lIlil1iI.push(illl11II[I1l11Iii]);
    }
    let IlIl1lil = new Array();
    for (let llI1i1li = 0; llI1i1li < I1l11Iil; llI1i1li++) {
      if (lIlil1iI.length > 0) {
        {
          let iili1I1I = Math.floor(Math.random() * lIlil1iI.length);
          IlIl1lil[llI1i1li] = lIlil1iI[iili1I1I];
          lIlil1iI.splice(iili1I1I, 1);
        }
      } else break;
    }
    return IlIl1lil;
  }
  function I1ii1il(l1I11iI1) {
    const iii11111 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let lI1i1Ili = "",
      iI1ill1I,
      i11l1lIi,
      i111ii1I,
      lI1i1Ill,
      I1i11lil,
      ii1iI1l,
      IlIl1liI = l1I11iI1.length;
    for (iI1ill1I = 0, i11l1lIi = 0; iI1ill1I < IlIl1liI; iI1ill1I += 3, i11l1lIi += 4) {
      i111ii1I = l1I11iI1[iI1ill1I];
      lI1i1Ill = iI1ill1I + 1 < IlIl1liI ? l1I11iI1[iI1ill1I + 1] : 0;
      I1i11lil = iI1ill1I + 2 < IlIl1liI ? l1I11iI1[iI1ill1I + 2] : 0;
      ii1iI1l = i111ii1I >> 2 & 63;
      i111ii1I = (i111ii1I & 3) << 4 | lI1i1Ill >> 4;
      lI1i1Ill = (lI1i1Ill & 15) << 2 | I1i11lil >> 6;
      I1i11lil = I1i11lil & 63;
      iI1ill1I + 1 === IlIl1liI && (I1i11lil = 64);
      iI1ill1I + 2 === IlIl1liI && (lI1i1Ill = 64);
      lI1i1Ili += iii11111[ii1iI1l] + iii11111[i111ii1I] + iii11111[lI1i1Ill] + iii11111[I1i11lil];
    }
    return lI1i1Ili;
  }
  function l1IillI1(IIlI1ll) {
    const llIIIIll = {
      "ud": "",
      "sv": "",
      "iad": ""
    };
    let IIlI1li = {
        "A": "K",
        "B": "L",
        "C": "M",
        "D": "N",
        "E": "O",
        "F": "P",
        "G": "Q",
        "H": "R",
        "I": "S",
        "J": "T",
        "K": "A",
        "L": "B",
        "M": "C",
        "N": "D",
        "O": "E",
        "P": "F",
        "Q": "G",
        "R": "H",
        "S": "I",
        "T": "J",
        "e": "o",
        "f": "p",
        "g": "q",
        "h": "r",
        "i": "s",
        "j": "t",
        "k": "u",
        "l": "v",
        "m": "w",
        "n": "x",
        "o": "e",
        "p": "f",
        "q": "g",
        "r": "h",
        "s": "i",
        "t": "j",
        "u": "k",
        "v": "l",
        "w": "m",
        "x": "n"
      },
      illIii1 = iIi1IllI([12, 13, 14, 15, 16], 1) + "." + iIi1IllI([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1) + "." + iIi1IllI([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1),
      iii1111I = iIi1IllI([9, 10, 11], 1) + "." + iIi1IllI([0, 1, 2, 3, 4, 5, 6, 7, 8], 1) + "." + iIi1IllI([0, 1, 2, 3, 4, 5], 1),
      i111ii11 = iIi1IllI([4, 5, 6], 1) + "." + iIi1IllI([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1) + "." + iIi1IllI([0, 1, 2, 3, 4, 5], 1),
      illIiiI = {
        "ciphertype": 5,
        "cipher": llIIIIll,
        "ts": parseInt(new Date().getTime() / 1000),
        "hdid": "",
        "version": "1.0.3",
        "appname": "",
        "ridx": -1
      };
    illIiiI.cipher.sv = I1ii1il(illIii1.split(".").map(Number)).split("").map(iI1ill1i => IIlI1li[iI1ill1i] || iI1ill1i).join("");
    illIiiI.cipher.ud = I1ii1il(ll1i1Il1(40).split("").map(i11l1lIl => i11l1lIl.charCodeAt(0))).split("").map(I1i11liI => IIlI1li[I1i11liI] || I1i11liI).join("");
    illIiiI.appname = "com.360buy.jdmobile";
    illIiiI.hdid = "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=";
    let lI1i1IlI = "jdapp;iPhone;" + iii1111I + ";;;M/5.0;appBuild/168341;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify(illIiiI)) + ";Mozilla/5.0 (iPhone; CPU iPhone OS " + illIii1.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
    illIiiI.appname = "com.jd.jdmobilelite";
    illIiiI.hdid = "ViZLFbOc+bY6wW3m9/8iSFjgglIbmHPOGSM9aXIoBes=";
    illIiiI.ridx = 1;
    let iI1ill1l = "jdltapp;iPhone;" + i111ii11 + ";;;M/5.0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;hasOCPay/0;appBuild/1338;supportBestPay/0;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify(illIiiI)) + ";Mozilla/5.0 (iPhone; CPU iPhone OS " + illIii1.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
    return IIlI1ll ? iI1ill1l : lI1i1IlI;
  }
  let iil1i1lI = l1IillI1();
  return iil1i1lI;
}
function iIllIiI(ii1iI1I) {
  const llIIIIlI = ii1iI1I.getFullYear(),
    iIl1IIiI = String(ii1iI1I.getMonth() + 1).padStart(2, "0"),
    iiii1lIl = String(ii1iI1I.getDate()).padStart(2, "0"),
    llI1i1i1 = String(ii1iI1I.getHours()).padStart(2, "0"),
    iiii1lIi = String(ii1iI1I.getMinutes()).padStart(2, "0"),
    ii1iI11 = String(ii1iI1I.getSeconds()).padStart(2, "0"),
    l11lllII = String(ii1iI1I.getMilliseconds()).padStart(3, "0");
  return "" + llIIIIlI + iIl1IIiI + iiii1lIl + llI1i1i1 + iiii1lIi + ii1iI11 + l11lllII;
}
function illiIIl() {
  return "h5st=" + iIllIiI(new Date()) + IIlilli1[parseInt(Math.random() * IIlilli1.length)];
}
function il1li1i1() {
  Debug("测试输出...");
}
liIi1IIl();