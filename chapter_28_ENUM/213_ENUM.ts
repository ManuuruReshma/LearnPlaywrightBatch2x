enum Browser {
    chrome = "chrome",
    firfox = "firefox"
}

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.chrome:
            console.log("luch chrome");
            break;
        case Browser.firfox:
            console.log("luch firfox");
            break;
    }
}

launchBrowser(Browser.chrome);