console.log("Content script injected");
const isPornSite = () => {
    // Add your logic to check if the current URL is a porn site
    const pornDomains = [
        "xvideos.com",
        "https://xvideos.com",
        "https://www.xvideos.com",
        "https://fr.xvideos.com/",
        "https://it.xvideos.com/",
        "https://de.xvideos.com/",
        "https://www.xvideos.es/",
        "https://www.xvideos91.com/",
        "https://static-cdn77.xvideos-cdn.com",

        "https://www.pornhub.com",
        "https://a.orbsrv.com/ad-provider.js",
        "https://lazylaundry.org",
        "https://www.lazylaundry.org",
        "lazylaundry.org"];
    const currentDomain = window.location.hostname;
    const isPorn = pornDomains.includes(currentDomain);
    console.log("Is Porn Site:", isPorn);
    return isPorn;
};

if (isPornSite()) {
    console.log("Sending redirect message to service worker");
    // Send a message to the service worker to redirect
    chrome.runtime.sendMessage({ redirect: true });
}

// const isPornSite = () => {
//     // Add your logic to check if the current URL is a porn site
//     const pornDomains = ["https://xvideos.com", "https://pornhub.com"];
//     const currentDomain = window.location.hostname;
//     return pornDomains.includes(currentDomain);
// };

// if (isPornSite()) {
//     // Send a message to the service worker to redirect
//     chrome.runtime.sendMessage({ redirect: true });
// }


