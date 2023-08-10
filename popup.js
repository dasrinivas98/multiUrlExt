chrome.tabs.query({
    highlighted: true,
}, 
function(tabs) {
    var urls = "";
    for (const tab of tabs) {
        if (tabs.length -1 !== tabs.indexOf(tab)) {
            urls+=new URL(tab.url);
            urls+= " , \n";
        } else {
            urls+=new URL(tab.url);
        }
    }
    console.log(urls);
    const textarea = document.getElementById('urls');
    textarea.value = urls;
})

