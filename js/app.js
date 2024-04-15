//imports
import { getId, getQ, getQA } from "./getElement.js";

// vars
const date = getId("date");
const navToggle = getQ(".nav-toggle");
const linksContainer = getQ(".links-container");
const links = getQ(".links");
const navbar = getId("nav");
const topLink = getQ(".top-link");
const scrollLinks = getQA(".scroll-link");

// set date
date.innerHTML = new Date().getFullYear();

//nav toggle
navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed navbar
window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// smooth scroll
// select links
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // vars for smooth scroll
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    //to account for fixed nav
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    //scolling
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close links
    linksContainer.style.height = 0;
  });
});
