import $ from 'jquery';

var statsads = {
    /* eslint-disable */

    init: function () {

        window.xtsite = '492987';
        var xtn2 = '35';
        var xtnv = document;
        var xtsd = 'http://logc215';

        var at_url = document.location.href.toLowerCase();
        var at_repUrl = at_url.toLowerCase().split("/")[3];
        var pageTypeIndicators = "";
        if (typeof at_typePage == "undefined") {
            var at_typePage = "";
        }
        if (typeof atname == "undefined") {
            var atname = "";
        }
        if (typeof atchapter0 == "undefined") {
            var atchapter0 = "";
        }
        if (typeof atchapter1 == "undefined") {
            var atchapter1 = "";
        }
        if (typeof atchapter2 == "undefined") {
            var atchapter2 = "";
        }
        if (typeof atchapter3 == "undefined") {
            var atchapter3 = "";
        }
        var keyword = "";
        var resultPageNumber = "";
        if (typeof s13 == "undefined") {
            var s13 = "";
        }
        if (typeof s14 == "undefined") {
            var s14 = "";
        }
        if (typeof s16 == "undefined") {
            var s16 = "";
        }
        if (typeof s17 == "undefined") {
            var s17 = "";
        }
        if (typeof s18 == "undefined") {
            var s18 = "";
        }
        if (typeof s19 == "undefined") {
            var s19 = "";
        }
        if (typeof s20 == "undefined") {
            var s20 = "";
        }
        if (typeof s21 == "undefined") {
            var s21 = "";
        }
        if (typeof s22 == "undefined") {
            var s22 = "";
        }
        if (typeof s23 == "undefined") {
            var s23 = "";
        }
        if (typeof s26 == "undefined") {
            var s26 = "";
        }
        if (typeof s27 == "undefined") {
            var s27 = "";
        }
        if (typeof s28 == "undefined") {
            var s28 = "";
        }
        if (typeof s29 == "undefined") {
            var s29 = "";
        }
        if (typeof s30 == "undefined") {
            var s30 = "";
        }
        if (typeof s31 == "undefined") {
            var s31 = "";
        }
        if (typeof at_typePage == "undefined") {
            var at_typePage = "";
        }
        if (typeof special == "undefined") {
            var special = "";
        }
        if (typeof patrim == "undefined") {
            var patrim = "";
        }
        if (typeof at_visitor == "undefined") {
            var at_visitor = "";
        }
        if (typeof _recherche == "undefined") {
            var _recherche = "";
        }
        if (typeof at_visitor_cat == "undefined") {
            var at_visitor_cat = "";
        }
        if (typeof xtn2 != "undefined") {
            var xtn2 = xtn2;
        } else {
            xtn2 = "";
        }
        document.location.href.indexOf("abonnes.lequipe") != -1 ? s13 = "abonnee" : s13 = "nonabonnee";
        "undefined" == typeof Ads ? s23 = "0" : s23 = "1";
        if (typeof _userInfos == "object" && _userInfos != null) {
            s22 = "1";
            at_visitor = _userInfos.id;
            if (_userInfos.gender == "M") {
                _userInfos.quotiAbonne == 1 ? at_visitor_cat = 1 : at_visitor_cat = 2;
            } else if (_userInfos.gender == "F") {
                _userInfos.quotiAbonne == 1 ? at_visitor_cat = 3 : at_visitor_cat = 4;
            } else {
                at_visitor_cat = 5;
            }
        } else {
            s22 = "2";
        }
        pageTypeIndicators = "divers";
        atchapter1 = "special";
        atchapter2 = xtpage.split("::").slice(0)[0].toLowerCase().replace(/\-/g, "_");
        atname = xtpage.split("::").slice(-1)[0].toLowerCase().replace(/\-/g, "_");
        xtn2 = 35;
        s17 = "divers";
        s18 = "tous_sports";
        s28 = "explore";
        at_typePage = "";


        if (document.location.href.indexOf("abonnes.lequipe") != -1) {
            window.xtsite = "548647";
        } else {
            window.xtsite = "492987";
        }

        if (typeof xtn2 == "undefined") {
            xtn2 = "";
        }

        var xtdi = "";

        if (typeof xt_multc == "undefined") {
            var xt_multc = "";
        }

        if ($(window).width() <= 1024) {
            window.xtsite = "539121";
            $(".soclinks").remove();
            var uA = "$/" + navigator.userAgent.replace(";", "/").replace("MOBILE-LEQUIPE", "/MOBILE-LEQUIPE").replace("Mozi", "/Mozi").replace("  ", "/").replace(" ", "/").replace(")", "/").replace("(", "/") + "/";
            uA = uA.replace("$//", "").replace("$/", "").replace("$", "").replace("//", "/");
            var luA = uA.split("/");
            var sensor = 0;
            for (var i = 0; i < luA.length; i++) {
                if (luA[i] == "MOBILE-LEQUIPE") {
                    sensor = i;
                }
            }
            switch (luA[sensor + 1]) {
                case "IOS":
                    switch (luA[sensor + 2]) {
                        case "PHONE":
                            sas_pageid = "26349/175418";
                            if (sas_pageid.length < 8) {
                                sas_pageid = "26349/175402";
                            }
                            break;

                        case "TABLETTE":
                            sas_pageid = "25433/170915";
                            if (sas_pageid.length < 8) {
                                sas_pageid = "25433/170866";
                            }
                            break;

                        default:
                            sas_pageid = "00/00";
                    }
                    break;

                case "ANDROID":
                    switch (luA[sensor + 2]) {
                        case "PHONE":
                            sas_pageid = "";
                            if (sas_pageid.length < 8) {
                                sas_pageid = "00/00";
                            }
                            break;

                        case "TABLETTE":
                            sas_pageid = "";
                            if (sas_pageid.length < 8) {
                                sas_pageid = "00/00";
                            }
                            break;

                        default:
                            sas_pageid = "00/00";
                    }
                    break;
            }
            if (typeof luA != "undefined") {
                luA[sensor + 4] = luA[sensor + 4] + "9999999999999999999999999999999999999999" + luA[sensor + 4];
                var jle = "JLE-" + luA[sensor + 4].substr(0, 10) + luA[sensor + 4].substr(-10);
            } else {
                var jle = "XXX";
            }
            var sensor = 0;
            for (var i = 0; i < luA.length; i++) {
                if (luA[i] == 'MOBILE-LEQUIPE') {
                    sensor = i;
                }
            }
            if (luA[sensor] == "MOBILE-LEQUIPE" || window.location.href.indexOf("webview.lequipe.fr") > 1) {
                var iframe = document.createElement("IFRAME");
                sas_pageid = sas_pageid.replace("26349/", "");
                sas_pageid = sas_pageid.replace("25433/", "");
                sas_pageid = sas_pageid.replace("00/", "");
                msgg = "";
                if (navigator.userAgent.toLowerCase().indexOf("trident") == -1) {
                    iframe.setAttribute("src", "nativestatsads://" + xtn2 + "/" + xtpage + "#" + sas_pageid);
                }
                console.log("nativestatsads://" + xtn2 + "/" + xtpage + "#" + sas_pageid);
                document.documentElement.appendChild(iframe);
                iframe.parentNode.removeChild(iframe);
                iframe = null;
                window.xtsite = "492987";


                var chaine_stats = "";
                //traitement fonction webapp
                if (typeof sas_pageid_simple != "undefined" && sas_pageid_simple != "" && sas_pageid_simple) {
                    chaine_stats += 'sas_pageid=' + sas_pageid_simple;
                } else {
                    chaine_stats += 'sas_pageid=';
                }
                if (xtn2 != "") {
                    chaine_stats += '&xtn2=' + xtn2;
                }
                if (atchapter1 != "" != "" && atchapter1 != "(none)") {
                    chaine_stats += '&atchapter1=' + atchapter1;
                }
                if (atchapter2 != "" != "" && atchapter2 != "(none)") {
                    chaine_stats += '&atchapter2=' + atchapter2;
                }
                if (atchapter3 != "" != "" && atchapter3 != "(none)") {
                    chaine_stats += '&atchapter3=' + atchapter3;
                }
                if (atname != "" != "" && atname != "(none)") {
                    chaine_stats += '&atname=' + atname;
                }
                if (s13 != "" != "" && s13 != "(none)") {
                    chaine_stats += '&s13=' + s13;
                }
                if (s14 != "" != "" && s14 != "(none)") {
                    chaine_stats += '&s14=' + s14
                }
                if (s16 != "" != "" && s16 != "(none)") {
                    chaine_stats += '&s16=' + s16;
                }
                if (s17 != "" != "" && s17 != "(none)") {
                    chaine_stats += '&s17=' + s17;
                }
                if (s18 != "" != "" && s18 != "(none)") {
                    chaine_stats += '&s18=' + s18;
                }
                if (s19 != "" != "" && s19 != "(none)") {
                    chaine_stats += '&s19=' + s19;
                }
                if (s26 !== "" != "" && s26 != "(none)") {
                    chaine_stats += '&s26=' + s26;
                }
                if (s27 !== "" != "" && s27 != "(none)") {
                    chaine_stats += '&s27=' + s27;
                }
                if (s28 != "" != "" && s28 != "(none)") {
                    chaine_stats += '&s28=' + s28;
                }
                if (s29 != "" != "" && s29 != "(none)") {
                    chaine_stats += '&s29=' + s29;
                }
                if (s30 != "" != "" && s30 != "(none)") {
                    chaine_stats += '&s30=' + s30;
                }
                if (s31 != "" != "" && s30 != "(none)") {
                    chaine_stats += '&s31=' + s31;
                }
                console.log("send_stats://" + encodeURI(chaine_stats));
                var iframeNSA = document.createElement("IFRAME");
                if (navigator.userAgent.toLowerCase().indexOf('trident') == -1) {
                    iframeNSA.setAttribute("src", "lequipefr://action/send_stat?" + encodeURI(chaine_stats));
                }
                document.documentElement.appendChild(iframeNSA);
                iframeNSA.parentNode.removeChild(iframeNSA);
                iframeNSA = null;

            } else {

                window.ATInternet = {
                    onTrackerLoad: function () {
                        window.tag = new window.ATInternet.Tracker.Tag();
                        if (atchapter2 != "") {
                            tag.page.set({
                                name: atname,
                                chapter1: atchapter1.toLowerCase(),
                                chapter2: atchapter2.toLowerCase(),
                                level2: xtn2
                            });
                        } else if (atchapter1 != "") {
                            tag.page.set({
                                name: atname,
                                chapter1: atchapter1.toLowerCase(),
                                level2: xtn2
                            });
                        } else {
                            tag.page.set({
                                name: atname,
                                level2: xtn2
                            });
                        }
                        tag.identifiedVisitor.set({
                            id: at_visitor,
                            category: at_visitor_cat
                        });
                        tag.customVars.set({
                            site: {
                                13: "[" + s13 + "]",
                                17: "[" + s17 + "]",
                                18: "[" + s18.replace(/\-/g, "_").replace(/\ /g, "_") + "]",
                                22: s22,
                                23: s23,
                                28: "[" + s28 + "]",
                                30: s30,
                                31: s31
                            }
                        });
                        tag.dispatch();
                    }
                };
                //this.setTag();
            }
        } else {

            window.ATInternet = {
                onTrackerLoad: function () {
                    window.tag = new window.ATInternet.Tracker.Tag();
                    if (atchapter2 != "") {
                        tag.page.set({
                            name: atname,
                            chapter1: atchapter1.toLowerCase(),
                            chapter2: atchapter2.toLowerCase(),
                            level2: xtn2
                        });
                    } else if (atchapter1 != "") {
                        tag.page.set({
                            name: atname,
                            chapter1: atchapter1.toLowerCase(),
                            level2: xtn2
                        });
                    } else {
                        tag.page.set({
                            name: atname,
                            level2: xtn2
                        });
                    }
                    tag.identifiedVisitor.set({
                        id: at_visitor,
                        category: at_visitor_cat
                    });
                    tag.customVars.set({
                        site: {
                            13: "[" + s13 + "]",
                            17: "[" + s17 + "]",
                            18: "[" + s18.replace(/\-/g, "_").replace(/\ /g, "_") + "]",
                            22: s22,
                            23: s23,
                            28: "[" + s28 + "]",
                            30: s30,
                            31: s31
                        }
                    });
                    tag.dispatch();
                }
            };
            //this.setTag();
        }

        var uA = "$/" + navigator.userAgent.replace(";", "/").replace("MOBILE-LEQUIPE", "/MOBILE-LEQUIPE").replace("Mozi", "/Mozi").replace("  ", "/").replace(" ", "/").replace(")", "/").replace("(", "/") + "/";
        uA = uA.replace("$//", "").replace("$/", "").replace("$", "").replace("//", "/");
        var luA = uA.split("/");
        var sensor = 0;
        for (var i = 0; i < luA.length; i++) {
            if (luA[i] == "MOBILE-LEQUIPE") {
                sensor = i;
            }
        }

        if (luA[sensor] != 'MOBILE-LEQUIPE' || (window.location.href.indexOf('webview.lequipe.fr') != -1)) {

            var at_visitor = "";
            var at_visitor_sha1 = "";
            var at_url = document.location.href.toLowerCase();
            if (s14 == "") {
                s14 = "web_gratuit";
            }
            if (s29 == "") {
                s29 = atname;
            }
            if (xtn2 == "") {
                xtn2 = "23";
            } else if (xtn2 == "31") {
                s18 = 'wtf","' + s18;
            }
            var userstatut;
            if (typeof _userInfos == "object" && _userInfos != null) {
                at_visitor = _userInfos.id;
                at_visitor_sha1 = _userInfos.id_sha1;
                if (_userInfos.quotiAbonne == 1) {
                    userstatut = "2";
                } else {
                    userstatut = "1";
                }
            } else {
                userstatut = "0";
            }
            if (typeof s14 == "undefined") {
                var s14 = "";
            }
            if (typeof s17 == "undefined") {
                var s17 = "";
            }
            if (typeof s18 == "undefined") {
                var s18 = "";
            }
            if (typeof s29 == "undefined") {
                var s29 = "";
            }
            var w17 = s17.toLowerCase().replace(/\_/g, "");
            var w18 = s18.toLowerCase().replace(/\_/g, "");
            var wamid = "2973";
            var typ = "1";
            var Wvar = {
                d: JSON.parse('["lequipe.fr"]'),
                userid: at_visitor_sha1,
                userstatut: userstatut,
                rub: JSON.parse('["explore","' + w17 + '"]'),
                nat: JSON.parse('["explore_video"]'),
                eve: JSON.parse('["' + s14.replace("[", "").replace("]", "") + '"]'),
                cat: JSON.parse('["' + s29.replace("[", "").replace(";;]", "").replace("]", "").replace(/\;/g, '","') + '"]'),
                xiti_pageid: "" + [xtn2] + ""
            };
            (function () {
                var w = document.createElement("script");
                w.type = "text/javascript";
                w.src = document.location.protocol + "//cstatic.weborama.fr/js/wam/customers/wamfactory_dpm.lequipe.min.js?rnd=" + new Date().getTime();
                w.async = true;
                var head = document.head || document.getElementsByTagName("head")[0];
                head.appendChild(w);
            })();
        }
    },

    setTag: function () {
        var at = document.createElement("script");
        at.type = "text/javascript";
        at.async = true;
        at.src = "//www.lequipe.fr/v6/js/smarttag-prod.js?1";
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode).insertBefore(at, null);
    }
    /* eslint-enable */
};
module.exports = statsads;
