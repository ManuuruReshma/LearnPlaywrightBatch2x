let browser = "Chrome"

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium project");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser - use java script engin");
        break;
    default:
        console.log("Unknown browser- manual test");
}