const $ = document.querySelector.bind(document);

const header = $(".header");
const actionBusiness = $(".action__bussiness");
const intro = $(".intro");
const description = $(".description");
const sources = $(".sources");
const features = $(".features");
const downloads = $(".downloads");
const footer = $(".footer");

let isShowHeader = false;
let isShowIntro = false;
let isShowDescription = false;
let isShowSources = false;
let isShowFeatures = false;
let isShowDownloads = false;
let isShowFooter = false;

window.addEventListener("load", function (e) {
	const headerHeight = header.getBoundingClientRect().height;
	const headerPosY = header.getBoundingClientRect().y;
	const headerInview = headerPosY * -1;

  const introHeight = intro.getBoundingClientRect().height;
  const introPosY = intro.getBoundingClientRect().y;
  const introInview = introPosY * -1;

	if (headerHeight - headerInview > 0 && !isShowHeader) {
    isShowHeader = true;
    header.classList.add("show");
		actionBusiness.classList.add("show");
  }

  if (introHeight - introInview > 0 && !isShowIntro) {
    isShowIntro = true;
    intro.classList.add("show");
  }
});

document.addEventListener("scroll", function (e) {
	const headerHeight = header.getBoundingClientRect().height;
	const headerPosY = header.getBoundingClientRect().y;
	const headerInview = headerPosY * -1;

  const introHeight = intro.getBoundingClientRect().height;
  const introPosY = intro.getBoundingClientRect().y;
  const introInview = introPosY * -1;

  const descriptionHeight = description.getBoundingClientRect().height;
  const descriptionPosY = description.getBoundingClientRect().y;

  const sourcesHeight = sources.getBoundingClientRect().height + 380;
  const sourcesPosY = sources.getBoundingClientRect().y;

  const featuresHeight = features.getBoundingClientRect().height + 200;
  const featuresPosY = features.getBoundingClientRect().y;

  const downloadsHeight = downloads.getBoundingClientRect().height + 400;
  const downloadsPosY = downloads.getBoundingClientRect().y;

  const footerHeight = footer.getBoundingClientRect().height + 350;
  const footerPosY = footer.getBoundingClientRect().y;

	if (headerHeight - headerInview > 0 && !isShowHeader) {
    isShowHeader = true;
    header.classList.add("show");
		actionBusiness.classList.add("show");
  }

  if (introHeight - introInview > 500 && !isShowIntro) {
    isShowIntro = true;
    intro.classList.add("show");
  }

  if (descriptionHeight > descriptionPosY && !isShowDescription) {
    isShowDescription = true;
    description.classList.add("show");
  }

  if (sourcesHeight > sourcesPosY && !isShowSources) {
    isShowSources = true;
    sources.classList.add("show");
  }

  if (featuresHeight > featuresPosY && !isShowFeatures) {
    isShowFeatures = true;
    features.classList.add("show");
  }

  if (downloadsHeight > downloadsPosY && !isShowDownloads) {
    isShowDownloads = true;
    downloads.classList.add("show");
  }

  if (footerHeight > footerPosY && !isShowFooter) {
    isShowFooter = true;
    footer.classList.add("show");
  }
});
