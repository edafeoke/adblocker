chrome.runtime.onInstalled.addListener((object) => {
  console.log(object);
  chrome.storage.local.set({
    enableBlock: false,
  });
  chrome.storage.local.set({
    enableVpn: 0,
  });
  let externalUrl = "payment.html";//Thanks

  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: externalUrl }, function (tab) {
      console.log("I used it during debugging");
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "adblock") {
    chrome.storage.local.get("enableBlock", (data) => {
      if (data.enableBlock == true) {
        console.log("enableBlock");
        chrome.declarativeNetRequest.updateEnabledRulesets(
          {
            enableRulesetIds: ["ruleset_1", "ruleset_2"],
          },
          async () => {
            sendResponse({
              message: "enabled success",
            });
          }
        );
      } else {
        console.log("disableBlock");
        chrome.declarativeNetRequest.updateEnabledRulesets(
          {
            disableRulesetIds: ["ruleset_1", "ruleset_2"],
          },
          async () => {
            sendResponse({
              message: "disabled success",
            });
          }
        );
      }
    });

    return true;
  } else if (request.action === "vpn") {
    chrome.storage.local.get("enableVpn", (data) => {
      if (data.enableVpn) {
        chrome.storage.local.get("vpnIPAdress", (data1) => {
          try {
            chrome.proxy.settings.set(
              {
                value: {
                  mode: "fixed_servers",
                  rules: {
                    singleProxy: {
                      scheme: "http",
                      host: data1.vpnIPAdress.hostName,
                      port: data1.vpnIPAdress.port,
                    },
                  },
                },

                scope: "regular",
              },
              function () {
                console.log("Proxy set up.");
              }
            );
          } catch (err) {
            console.log(err);
          }
        });
      } else {
        chrome.proxy.settings.clear({ scope: "regular" }, function () {
          console.log("Proxy settings cleared.");
        });
      }
    });
    return true;
  }
});
