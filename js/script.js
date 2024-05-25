///////////////////////////////////////////////////////////

/* dynamic year */
const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.innerHTML = currentYear;

/* mobile navigation */

const mobileNavBtn = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

mobileNavBtn.addEventListener("click", function () {
  headerElement.classList.toggle("nav--open");
});

/**smooth scrolling animation */

const allLinks = document.querySelectorAll("a:link");

for (const link of allLinks) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // getting the section id
    const hrefAttribute = link.getAttribute("href");

    /* scroll back to top*/
    if (hrefAttribute === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      /*scroll to other links*/
    } else if (hrefAttribute !== "#" && hrefAttribute.startsWith("#")) {
      // getting the whole section element
      const sectionElement = document.querySelector(hrefAttribute);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (link.classList.contains("main-nav-link")) {
      headerElement.classList.toggle("nav--open");
    }
  });
}

/* sticky navbar scroll */
const sectionHeroElement = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
      console.log(ent);
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    //    in the viewport
    root: null,
    threshold: 0,
    // for the sticky nav to start at "as featured in"
    rootMargin: "-80px"
  }
);
observer.observe(sectionHeroElement);

/*
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const hrefAttribute = link.getAttribute("href");
    console.log(hrefAttribute);
  });
});
*/

// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/*

*/
