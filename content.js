console.log("Content script injected");

const isPornSite = () => {
    const pornDomains = [
        /xvideos\.(com|es|fr|it|de)/i, // Matches xvideos.com, xvideos.es, xvideos.fr, etc.
        /pornhub\.com/i,
        // Add other porn domains here
    ];
    const currentDomain = window.location.hostname;
    const isPorn = pornDomains.some(domain => domain.test(currentDomain));
    console.log("Is Porn Site:", isPorn);
    return isPorn;
};

if (isPornSite()) {
    console.log("Sending redirect message to service worker");
    // Send a message to the service worker to redirect
    chrome.runtime.sendMessage({ redirect: true });
}
