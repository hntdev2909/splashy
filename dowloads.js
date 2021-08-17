const downloadButton = $(".intro__download");

const linkDownloads = {
  windows: "https://splashy.art/downloads/Splashy.exe",
  mac: "https://splashy.art/downloads/Splashy.dmg",
  linux: "https://splashy.art/downloads/Splashy.deb",
  android: "https://play.google.com/store/apps/details?id=art.splashy.splashy",
  ios: "https://apps.apple.com/app/id1522466541",
};

const iconOperatingSystems = {
  windows:
    "https://splash-wallpaper-page.netlify.app/assets/icons/windows-alt.svg",
  mac: "https://splash-wallpaper-page.netlify.app/assets/icons/mac-alt.svg",
  linux: "https://splash-wallpaper-page.netlify.app/assets/icons/linux-alt.svg",
  android:
    "https://splash-wallpaper-page.netlify.app/assets/icons/play-store-alt.svg",
  ios: "https://splash-wallpaper-page.netlify.app/assets/icons/app-store-alt.svg",
};

const nameOperatingSystems = {
  windows: 'Windows',
  mac: 'MacOS',
  linux: 'Ubuntu',
  android: 'Play Store',
  ios: 'App Store',
};

const userAgent = navigator.userAgent;
let currentOperatingSystem;

if (userAgent.indexOf("Win") != -1) {
  currentOperatingSystem = "windows";
}

if (userAgent.indexOf("Mac") != -1) {
  currentOperatingSystem = "mac";
}

if (userAgent.indexOf("Linux") != -1) {
  currentOperatingSystem = "linux";
}

if (userAgent.indexOf("Android") != -1) {
  currentOperatingSystem = "android";
}

if (userAgent.indexOf("like Mac") != -1) {
  currentOperatingSystem = "ios";
}


const linkDownload = linkDownloads[currentOperatingSystem];
const iconDownload = iconOperatingSystems[currentOperatingSystem];
const nameOP = nameOperatingSystems[currentOperatingSystem];

downloadButton.innerText = nameOP;
downloadButton.href = linkDownload;
downloadButton.style.setProperty("--background", `url(${iconDownload})`);
