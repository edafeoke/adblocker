
const today = new Date();
const targetDate = new Date("2026-03-31");


var $ = require("jquery");
var selectCountryIndex = 0;

const selectCountryList = (today < targetDate) ? [
  {
    countryCode: "au",
    countryName: "Australia",
    hostName: "103.238.128.241",
    state: "Victoria",
    city: "Saint Albans",
    port: 50100,
  },
  {
    countryCode: "ca",
    countryName: "Canada",
    hostName: "209.200.239.8",
    state: "Ontario",
    city: "Toronto",
    port: 50100,
  },
  {
    countryCode: "fr",
    countryName: "France",
    hostName: "89.46.99.61",
    state: "Ile-de-France",
    city: "Suresnes",
    port: 50100,
  },
  {
    countryCode: "in",
    countryName: "India",
    hostName: "36.255.198.211",
    state: "Jammu and Kashmir",
    city: "Jammu",
    port: 50100,
  },
  {
    countryCode: "jp",
    countryName: "Japan",
    hostName: "45.80.48.119",
    state: "Tokyo",
    city: "Tokyo",
    port: 50100,
  },
  {
    countryCode: "nl",
    countryName: "Netherlands",
    hostName: "45.129.186.25",
    state: "Noord-Holland",
    city: "Amsterdam",
    port: 50100,
  },
  {
    countryCode: "nl",
    countryName: "Netherlands",
    hostName: "92.118.113.122",
    state: "Noord-Holland",
    city: "Amsterdam",
    port: 50100,
  },
  {
    countryCode: "sn",
    countryName: "Singapore",
    hostName: "103.54.154.125",
    state: "Singapore",
    city: "Singapore",
    port: 50100,
  },
  {
    countryCode: "uk",
    countryName: "United Kingdom",
    hostName: "82.153.72.174",
    state: "England",
    city: "Lincoln",
    port: 50100,
  },
  {
    countryCode: "uk",
    countryName: "United Kingdom",
    hostName: "194.145.237.61",
    state: "England",
    city: "London",
    port: 50100,
  },
  {
    countryCode: "uk",
    countryName: "United Kingdom",
    hostName: "185.138.234.128",
    state: "England",
    city: "London",
    port: 50100,
  },
  {
    countryCode: "us",
    countryName: "United States",
    hostName: "103.235.64.231",
    state: "Illinois",
    city: "Chicago",
    port: 50100,
  },
  {
    countryCode: "us",
    countryName: "United States",
    hostName: "103.235.64.191",
    state: "Illinois",
    city: "Chicago",
    port: 50100,
  },
  {
    countryCode: "us",
    countryName: "United States",
    hostName: "103.235.64.6",
    state: "Illinois",
    city: "Chicago",
    port: 50100,
  },
  {
    countryCode: "us",
    countryName: "United States",
    hostName: "45.152.177.123",
    state: "Illinois",
    city: "Chicago",
    port: 50100,
  },
  {
    countryCode: "us",
    countryName: "United States",
    hostName: "104.234.86.69",
    state: "Texas",
    city: "Dallas",
    port: 50100,
  },
  {
    countryCode: "us",
    countryName: "United States",
    hostName: "138.36.94.21",
    state: "New York",
    city: "New York City",
    port: 50100,
  },
  {
    countryCode: "us",
    countryName: "United States",
    hostName: "200.10.35.94",
    state: "Oregon",
    city: "Portland",
    port: 50100,
  },
  {
    countryCode: "us",
    countryName: "Unites States",
    hostName: "200.10.34.24",
    state: "Oregon",
    city: "Portland",
    port: 50100,
  },

] : [];

function internationalize(str) {
  if(today < targetDate){
    return str.replace(/__MSG_(.+)__/g, function (m, key) {
      return chrome.i18n.getMessage(key);
    });
  }

}

function initCountryList() {
  var arr_li_tag = "";
  selectCountryList.map((item, index) => {
    var countryIcon =
      "https://hatscripts.github.io/circle-flags/flags/" +
      item.countryCode +
      ".svg";
    var li =
      '<li><div style="display: none;">'+
      index
      +'</div>'+'<span style="font-size: 13px">'+
      item.city +
      '</span><span style="display:flex; align-items: center">'+
      "<span style='font-size: 10px'>" +
      item.countryName +
      "</span>"+
      '<span><img class="selectmenu-country-item"' +
      'src="' +
      countryIcon +
      '" /></span></span></li>';
    arr_li_tag += li;
  });
  $(".c ul").append(arr_li_tag);
}


function setSelectCountryImg(country) {
  var selectCountryIcon =
    "https://hatscripts.github.io/circle-flags/flags/" +
    country.countryCode +
    ".svg";
  $(".selectmenu .selectmenu-country").attr("src", selectCountryIcon);
  $(".selectmenu span").text(country.city + " (" + country.countryCode.toUpperCase() +")");
}


function initPage() {
  initCountryList();
  setSelectCountryImg(selectCountryList[selectCountryIndex]);

}

function internationalizePage() {
  document.title = internationalize(document.title);
  document.getElementsByTagName("body")[0].innerHTML = internationalize(
    document.getElementsByTagName("body")[0].innerHTML
  );
}


$(document).ready(function () {
  internationalizePage();
  chrome.storage.local.get("enableBlock", (data) => {
    console.log(data);
    $("#EDAdblock").text(data.enableBlock ? "Ad Blocker On" : "Ad Blocker Off");
    $('#adblockstatus').prop('checked', data.enableBlock);
    $('#slideradblock').addClass(data.enableBlock ? "enable" : "disable");
    $('#slideradblock').removeClass(data.enableBlock ? "disable" : "enable");
    
  })
  chrome.storage.local.get("enableVpn", (data) => {
    console.log(data);
    $("#connectService").text(data.enableVpn ? "VPN Connected" : "VPN Disconnected");
    $('#vpnstatus').prop('checked', data.enableVpn);
    $('#slidervpn').addClass(data.enableVpn ? "enable" : "disable");
    $('#slidervpn').removeClass(data.enableVpn ? "disable" : "enable");
    selectCountryIndex = data.enableVpn ? data.enableVpn - 1 : 0;

    initPage();
  })
  $(".selectmenu").click(function (e) {
    if ($(".selectmenu-menu").css("display") == "none")  $(".selectmenu-menu").css("display", "block");
    else $(".selectmenu-menu").css("display", "none");
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).hasClass("selectmenu-country") &&
      !$(e.target).hasClass("selectmenu")
    )
      $(".selectmenu-menu").css("display", "none");
  });

  $(document).on("click", ".c ul li", function (e) {
    selectCountryIndex =  Number.parseInt($($(this).children("div")).text());
    setSelectCountryImg(selectCountryList[selectCountryIndex]);
  });

  $(document).on("click", function (e) {
    if (e.target.className == "modal") $("#paypage").css("display", "none");
  });


  $("span.close").click(function (e) {
    $("#paypage").css("display", "none");
  });


  
  $("#adblockstatus").change(function (e){
    chrome.storage.local.get("enableBlock", (data) => {
      if(!data.enableBlock){
        $("#EDAdblock").text("Ad Blocker On");
        chrome.storage.local.set({enableBlock: true});
      }
      else {
        $("#EDAdblock").text("Ad Blocker Off");
        chrome.storage.local.set({enableBlock: false});
      }
      $('#slideradblock').addClass(!data.enableBlock ? "enable" : "disable");
      $('#slideradblock').removeClass(!data.enableBlock ? "disable" : "enable");
    chrome.runtime.sendMessage({ 
          action: "adblock",
      }, response => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          // Reload the current tab
          chrome.tabs.reload(tabs[0].id);
        });
      });
    })
  });

  $("#vpnstatus").change(function (e){
    chrome.storage.local.get("enableVpn", (data) => {
      if(today > targetDate) return;
      if(!data.enableVpn){
        $("#connectService").text("VPN Connected");
      }
      else {
        $("#connectService").text("VPN Disconnected");
      }
      chrome.storage.local.set({enableVpn: data.enableVpn ? 0 : selectCountryIndex + 1});
      chrome.storage.local.set({vpnIPAdress: selectCountryList[selectCountryIndex]});
      $('#slidervpn').addClass(!data.enableVpn ? "enable" : "disable");
      $('#slidervpn').removeClass(!data.enableVpn ? "disable" : "enable");
      chrome.runtime.sendMessage({ 
          action: "vpn",
      }, response => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          // Reload the current tab
          chrome.tabs.reload(tabs[0].id);
        });
      });
    });
  });

});
