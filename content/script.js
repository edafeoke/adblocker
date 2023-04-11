  // Find all ad elements on the page
  var adElements = document.querySelectorAll('.ad, .adsbygoogle, .ad-container, .adblock, .ad-unit, .ad-banner, .advertising, .promo, .sponsored');

  // Loop through all ad elements and hide them
  for (var i = 0; i < adElements.length; i++) {
      adElements[i].style.cssText = 'display:none !important';;
  }

  // Find and remove any elements that block video playback
  var elementsToHide = document.querySelectorAll('#masthead-ad, .ytp-ad-overlay-container, .ytp-ad-image-overlay, .ytp-ad-text-overlay, .ytp-ad-player-overlay');
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.cssText = 'display:none !important';;
  }

  // Find and remove any ad-related elements in the sidebar
  var sidebarAdElements = document.querySelectorAll('#secondary .ytd-sponsored-card-renderer, #secondary .ytd-display-ad-renderer, #secondary .ytd-promoted-sparkles-web-renderer, #secondary .ytd-video-sidebar-body-renderer .ytd-action-companion-ad-renderer, #secondary .ytd-sponsored-card-renderer, #secondary .ytd-display-ad-renderer, #secondary .ytd-promoted-sparkles-web-renderer, #secondary .ytd-action-companion-ad-renderer');
  for (var i = 0; i < sidebarAdElements.length; i++) {
      sidebarAdElements[i].style.cssText = 'display:none !important';;
  }

  // Find all elements with class names or other attributes that indicate they are native ads
  var nativeAdElements = document.querySelectorAll('.sponsored, .promo, .recommended, [aria-label="Sponsored"]');

  // Hide all native ad elements
  for (var i = 0; i < nativeAdElements.length; i++) {
      nativeAdElements[i].style.cssText = 'display:none !important';;
  }

  // Find all elements that correspond to video ads, such as overlay containers and ad previews
  var videoAdElements = document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-preview-container');

  // Hide all video ad elements
  for (var i = 0; i < videoAdElements.length; i++) {
      videoAdElements[i].style.cssText = 'display:none !important';;
  }

  // Find all elements that correspond to audio ads, such as audio players or audio file links
  var audioAdElements = document.querySelectorAll('audio[src*="ad"], audio[data-src*="ad"]');

  // Hide all audio ad elements
  for (var i = 0; i < audioAdElements.length; i++) {
      audioAdElements[i].style.cssText = 'display:none !important';;
  }


  // Find and remove any pop-up ads on the page
  var popups = document.querySelectorAll('.ytd-popup-container, .ytp-ad-preview-container');

  for (var i = 0; i < popups.length; i++) {
      popups[i].style.cssText = 'display:none !important';;
  }



  // Find all elements that correspond to pop-under ads, such as hidden or off-screen containers
  var popunderElements = document.querySelectorAll('.popunder, .exitpop, .popunder-wrapper');

  // Hide all pop-under ad elements
  for (var i = 0; i < popunderElements.length; i++) {
      popunderElements[i].style.cssText = 'display:none !important';;
  }

  // Find all elements that correspond to interstitial ads, such as full-screen overlays or modals
  var interstitialElements = document.querySelectorAll('.interstitial, .interstitial-ad, .interstitial-container, .lightbox-container');

  // Hide all interstitial ad elements
  for (var i = 0; i < interstitialElements.length; i++) {
      interstitialElements[i].style.cssText = 'display:none !important';;
  }

  // Find all elements that correspond to in-stream ads, such as ad markers or overlay containers
  var instreamElements = document.querySelectorAll('.ad-marker-container, .ad-container, .ad-overlay-container');

  // Hide all in-stream ad elements
  for (var i = 0; i < instreamElements.length; i++) {
      instreamElements[i].style.cssText = 'display:none !important';;
  }

  // Find all elements with class names or other attributes that indicate they are social media ads
  var socialMediaAdElements = document.querySelectorAll('.promoted, .sponsored, [aria-label="Sponsored"]');

  // Hide all social media ad elements
  for (var i = 0; i < socialMediaAdElements.length; i++) {
      socialMediaAdElements[i].style.cssText = 'display:none !important';;
  }

  // Find all elements that correspond to search ads, such as ads at the top or bottom of the search results page
  var searchAdElements = document.querySelectorAll('#tads, #bottomads, .ads-ad');

  // Hide all search ad elements
  for (var i = 0; i < searchAdElements.length; i++) {
      searchAdElements[i].style.cssText = 'display:none !important';;
  }

  // Find all elements that correspond to email ads, such as ad banners or sponsored content
  var emailAdElements = document.querySelectorAll('.ad, .ad-banner, .promotions, .sponsored');

  // Hide all email ad elements
  for (var i = 0; i < emailAdElements.length; i++) {
      emailAdElements[i].style.cssText = 'display:none !important';;
  }


  var elementsToHide1 = document.querySelectorAll('.player-overlay, .js-resume-overlay, .channel-root__player .pl-overlay');
for (var i = 0; i < elementsToHide1.length; i++) {
    elementsToHide1[i].style.cssText = 'display:none !important';;
}

// Find and remove any in-stream video ads
var videoAdElements1 = document.querySelectorAll('.player-ad, .video-ad-overlay');
for (var i = 0; i < videoAdElements1.length; i++) {
  videoAdElements1[i].style.cssText = 'display:none !important';;
}

// Find and remove any audio ads
var audioAdElements1 = document.querySelectorAll('.player-volume-ad');
for (var i = 0; i < audioAdElements1.length; i++) {
  audioAdElements1[i].style.cssText = 'display:none !important';;
}

// Find and remove any native ads
var nativeAdElements1 = document.querySelectorAll('.tw-card--overlay');
for (var i = 0; i < nativeAdElements1.length; i++) {
  nativeAdElements1[i].style.cssText = 'display:none !important';;
}

// Find and remove any pop-up or interstitial ads
var popupElements1 = document.querySelectorAll('.overlay, .interstitial');
for (var i = 0; i < popupElements1.length; i++) {
  popupElements1[i].style.cssText = 'display:none !important';;
}

// Find and remove any social media ads
var socialMediaAdElements1 = document.querySelectorAll('.community-highlights__card--featured');
for (var i = 0; i < socialMediaAdElements1.length; i++) {
  socialMediaAdElements1[i].style.cssText = 'display:none !important';;
}

// Find and remove any search ads
var searchAdElements1 = document.querySelectorAll('.tw-interactive.tw-link.tw-link--hover-underline-none.tw-link--inherit, .tw-mg-l-2.tw-text-ellipsis');
for (var i = 0; i < searchAdElements1.length; i++) {
  searchAdElements1[i].style.cssText = 'display:none !important';;
}

// Find and remove any email ads
var emailAdElements1 = document.querySelectorAll('.tw-email-block');
for (var i = 0; i < emailAdElements1.length; i++) {
  emailAdElements1[i].style.cssText = 'display:none !important';;
}
// Find and remove any display ads
var displayAdElements1 = document.querySelectorAll('.tw-display-ad');
for (var i = 0; i < displayAdElements1.length; i++) {
  displayAdElements1[i].style.cssText = 'display:none !important';;
}
// Find and remove any interstitial ads
var interstitialAdElements1 = document.querySelectorAll('.interstitial-ad, .tw-block.tw-block--center.tw-mg-b-4');
for (var i = 0; i < interstitialAdElements1.length; i++) {
  interstitialAdElements1[i].style.cssText = 'display:none !important';;
}

console.log("Before timer");
setInterval(() => {
    console.log("timer is 0.5");
    if (document.getElementsByClassName("ytp-ad-skip-button").length > 0) {
    document.getElementsByClassName("ytp-ad-skip-button")[0].click();
    }
    if (document.getElementsByClassName("ytp-ad-overlay-close-button").length > 0) {
        document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
    }
    var cross = document.getElementsByClassName("ytp-ad-overlay-close-container")[0];
    var skip = document.getElementsByClassName("ytp-ad-skip-button-text")[0];
    if (cross != undefined) {
        cross.click();
        console.log("cross click");
    }
    if (skip != undefined) {
        skip.click();
        console.log("skip click");
    }
    let isMobileVersion = document.getElementsByClassName('ytp-ad-preview-text')
    if (isMobileVersion.length > 0) {
        console.log("Found")
        var vids = document.getElementsByTagName('video')[0];
        vids.currentTime = vids.duration;
    }

    var securityadElements = document.querySelectorAll('.ad-showing, .ad-interrupting, #watch7-sidebar-ads, #watch-channel-brand-div, .sparkles-light-cta, .ytd-mealbar-promo-renderer, #footer-ads, #ad_creative_3, .ytp-ad-progress-list, .masthead-ad-control, .ad-div, .ad-container, .ytd-carousel-ad-renderer, ytd-display-ad-renderer, .ytd-display-ad-renderer,  ytd-promoted-video-renderer, .ytd-promoted-video-renderer, .ad-showing, .ytp-ad-image-overlay, .ytp-ad-text-overlay, .ytp-ad-skip-button-container, ytd-display-ad-renderer, .ytd-display-ad-renderer, ytd-player-legacy-desktop-watch-ads-renderer, .ytd-player-legacy-desktop-watch-ads-renderer, #player-ads, ytp-ad-text, .ytp-ad-text, ytp-ad-preview-text, .ytp-ad-preview-text');

    // Loop through all ad elements and hide them
    for (var i = 0; i < securityadElements.length; i++) {
        securityadElements[i].style.cssText = 'display:none !important';;
    }  

    // Find all ad elements on the page
    var adElements = document.querySelectorAll('.ad, .adsbygoogle, .ad-container, .adblock, .ad-unit, .ad-banner, .advertising, .promo, .sponsored');

    // Loop through all ad elements and hide them
    for (var i = 0; i < adElements.length; i++) {
        adElements[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any elements that block video playback
    var elementsToHide = document.querySelectorAll('#masthead-ad, .ytp-ad-overlay-container, .ytp-ad-overlay-image, .ytp-ad-image-overlay, .ytp-ad-text-overlay, .ytp-ad-player-overlay');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any ad-related elements in the sidebar
    var sidebarAdElements = document.querySelectorAll('#secondary .ytd-sponsored-card-renderer, #secondary .ytd-display-ad-renderer, #secondary .ytd-promoted-sparkles-web-renderer, #secondary .ytd-video-sidebar-body-renderer .ytd-action-companion-ad-renderer');
    for (var i = 0; i < sidebarAdElements.length; i++) {
        sidebarAdElements[i].style.cssText = 'display:none !important';;
    }

    // Find all elements with class names or other attributes that indicate they are native ads
    var nativeAdElements = document.querySelectorAll('.sponsored, .promo, .recommended, [aria-label="Sponsored"]');

    // Hide all native ad elements
    for (var i = 0; i < nativeAdElements.length; i++) {
        nativeAdElements[i].style.cssText = 'display:none !important';;
    }

    // Find all elements that correspond to video ads, such as overlay containers and ad previews
    var videoAdElements = document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-preview-container');

    // Hide all video ad elements
    for (var i = 0; i < videoAdElements.length; i++) {
        videoAdElements[i].style.cssText = 'display:none !important';;
    }

    // Find all elements that correspond to audio ads, such as audio players or audio file links
    var audioAdElements = document.querySelectorAll('audio[src*="ad"], audio[data-src*="ad"]');

    // Hide all audio ad elements
    for (var i = 0; i < audioAdElements.length; i++) {
        audioAdElements[i].style.cssText = 'display:none !important';;
    }


    // Find and remove any pop-up ads on the page
    var popups = document.querySelectorAll('.ytd-popup-container, .ytp-ad-preview-container');

    for (var i = 0; i < popups.length; i++) {
        popups[i].style.cssText = 'display:none !important';;
    }



    // Find all elements that correspond to pop-under ads, such as hidden or off-screen containers
    var popunderElements = document.querySelectorAll('.popunder, .exitpop, .popunder-wrapper');

    // Hide all pop-under ad elements
    for (var i = 0; i < popunderElements.length; i++) {
        popunderElements[i].style.cssText = 'display:none !important';;
    }

    // Find all elements that correspond to interstitial ads, such as full-screen overlays or modals
    var interstitialElements = document.querySelectorAll('.interstitial, .interstitial-ad, .interstitial-container, .lightbox-container');

    // Hide all interstitial ad elements
    for (var i = 0; i < interstitialElements.length; i++) {
        interstitialElements[i].style.cssText = 'display:none !important';;
    }

    // Find all elements that correspond to in-stream ads, such as ad markers or overlay containers
    var instreamElements = document.querySelectorAll('.ad-marker-container, .ad-container, .ad-overlay-container');

    // Hide all in-stream ad elements
    for (var i = 0; i < instreamElements.length; i++) {
        instreamElements[i].style.cssText = 'display:none !important';;
    }

    // Find all elements with class names or other attributes that indicate they are social media ads
    var socialMediaAdElements = document.querySelectorAll('.promoted, .sponsored, [aria-label="Sponsored"]');

    // Hide all social media ad elements
    for (var i = 0; i < socialMediaAdElements.length; i++) {
        socialMediaAdElements[i].style.cssText = 'display:none !important';;
    }

    // Find all elements that correspond to search ads, such as ads at the top or bottom of the search results page
    var searchAdElements = document.querySelectorAll('#tads, #bottomads, .ads-ad');

    // Hide all search ad elements
    for (var i = 0; i < searchAdElements.length; i++) {
        searchAdElements[i].style.cssText = 'display:none !important';;
    }

    // Find all elements that correspond to email ads, such as ad banners or sponsored content
    var emailAdElements = document.querySelectorAll('.ad, .ad-banner, .promotions, .sponsored');

    // Hide all email ad elements
    for (var i = 0; i < emailAdElements.length; i++) {
        emailAdElements[i].style.cssText = 'display:none !important';;
    }

    var elementsToHide1 = document.querySelectorAll('.player-overlay, .js-resume-overlay, .channel-root__player .pl-overlay');
    for (var i = 0; i < elementsToHide1.length; i++) {
        elementsToHide1[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any in-stream video ads
    var videoAdElements1 = document.querySelectorAll('.player-ad, .video-ad-overlay');
    for (var i = 0; i < videoAdElements1.length; i++) {
    videoAdElements1[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any audio ads
    var audioAdElements1 = document.querySelectorAll('.player-volume-ad');
    for (var i = 0; i < audioAdElements1.length; i++) {
    audioAdElements1[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any native ads
    var nativeAdElements1 = document.querySelectorAll('.tw-card--overlay');
    for (var i = 0; i < nativeAdElements1.length; i++) {
    nativeAdElements1[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any pop-up or interstitial ads
    var popupElements1 = document.querySelectorAll('.overlay, .interstitial');
    for (var i = 0; i < popupElements1.length; i++) {
    popupElements1[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any social media ads
    var socialMediaAdElements1 = document.querySelectorAll('.community-highlights__card--featured');
    for (var i = 0; i < socialMediaAdElements1.length; i++) {
    socialMediaAdElements1[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any search ads
    var searchAdElements1 = document.querySelectorAll('.tw-interactive.tw-link.tw-link--hover-underline-none.tw-link--inherit, .tw-mg-l-2.tw-text-ellipsis');
    for (var i = 0; i < searchAdElements1.length; i++) {
    searchAdElements1[i].style.cssText = 'display:none !important';;
    }

    // Find and remove any email ads
    var emailAdElements1 = document.querySelectorAll('.tw-email-block');
    for (var i = 0; i < emailAdElements1.length; i++) {
    emailAdElements1[i].style.cssText = 'display:none !important';;
    }
    // Find and remove any display ads
    var displayAdElements1 = document.querySelectorAll('.tw-display-ad');
    for (var i = 0; i < displayAdElements1.length; i++) {
    displayAdElements1[i].style.cssText = 'display:none !important';;
    }
    // Find and remove any interstitial ads
    var interstitialAdElements1 = document.querySelectorAll('.interstitial-ad, .tw-block.tw-block--center.tw-mg-b-4');
    for (var i = 0; i < interstitialAdElements1.length; i++) {
    interstitialAdElements1[i].style.cssText = 'display:none !important';;
    }
    
    let video = document.querySelector(".html5-video-player");
    video.style.cssText = 'display:block !important';;
}, 500);
