
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log("Service Worker Started");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received from content script:", message, sender);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received from:", sender.url);

    if (request.redirect) {
        console.log("Redirect request received");
        // Redirect to a travel site
        const travelSites = ["https://www.expedia.com", "https://www.tripadvisor.com"];
        const randomIndex = Math.floor(Math.random() * travelSites.length);
        const travelSite = travelSites[randomIndex];
        console.log("Redirecting to:", travelSite);

        chrome.tabs.update({ url: travelSite });
    } else {
        console.log("Invalid message:", request);
    }
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.redirect) {
//         // Redirect to a travel site
//         const travelSites = ["https://www.expedia.com", "https://www.tripadvisor.com"];
//         const randomIndex = Math.floor(Math.random() * travelSites.length);
//         const travelSite = travelSites[randomIndex];
//         chrome.tabs.update({ url: travelSite });
//     }
// });


// console.log('Background script loaded.');
// chrome.webRequest.onBeforeRequest.addListener(
//     function (details) {
//         const pornSites = ["https://xvideos.com", "https://pornhub.com"]; // List porn site domains
//         const travelSite = "https://expedia.com/";

//         if (pornSites.some(site => details.url.includes(site))) {
//             return { redirectUrl: travelSite };
//         }
//     },
//     { urls: ["<all_urls>"] },
//     ["blocking"]
// );



// console.log('Background script loaded.');

// chrome.runtime.onStartup.addListener(() => {
//     // Perform tasks when extension starts up
//     console.log('Extension started.');
//     const blockedSites = [
//         "*https://xvideos.com/*",
//         "://pornhub.com/",
//         "://xnxx.com/"
//     ];

//     const redirectUrl = "https://expedia.com/";

//     const rules = blockedSites.map(site => {
//         return {
//             id: site,
//             priority: 1,
//             action: {
//                 type: "redirect",
//                 redirect: {
//                     url: redirectUrl
//                 }
//             },
//             condition: {
//                 urlFilter: site,
//                 resourceTypes: ["main_frame", "sub_frame"]
//             }
//         };
//     });

//     chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: blockedSites }).then(() => {
//         chrome.declarativeNetRequest.updateDynamicRules({ addRules: rules });
//     });
// });
