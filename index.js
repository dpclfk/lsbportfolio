const allimg = document.querySelectorAll("img");
const gnbmove = document.querySelectorAll("#gnb2 > *");
const aboutmove = document.getElementById("about-btn");
const movediv = document.querySelectorAll("#visual,.first-div");
const moveAboutMe = document.getElementById("move-about-me");
const projectImg = document.querySelectorAll(".project-img");
const op0 = document.querySelectorAll(".op-0");
const Hamburger = document.querySelector(".Hamburger");
const HamburgerGnb = document.querySelector("#gnb2");

const sitetile = document.getElementById("gnb1");
sitetile.onclick = () => {
  location.reload();
};

const preventDefault = (e) => {
  e.preventDefault();
};
const disableScroll = () => {
  window.addEventListener("wheel", preventDefault, { passive: false });
  window.addEventListener("touchmove", preventDefault, { passive: false });
};
const ableScroll = () => {
  window.removeEventListener("wheel", preventDefault);
  window.removeEventListener("touchmove", preventDefault);
};

history.scrollRestoration = "manual";

const observer = new IntersectionObserver(
  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeup");
        entry.target.classList.remove("op-0");
      }
    });
  },
  {
    threshold: 0.01,
  }
);

op0.forEach((e) => {
  observer.observe(e);
});

gnbmove.forEach((e, idx) => {
  e.onclick = () => {
    movediv[idx].scrollIntoView({ behavior: "smooth" });
    Hamburger.classList.remove("active");
    HamburgerGnb.classList.remove("show");
    HamburgerGnb.classList.add("hide");
    ableScroll();
  };
});

aboutmove.onclick = () => {
  moveAboutMe.scrollIntoView({ behavior: "smooth" });
};

allimg.forEach((e) => {
  e.ondragstart = () => {
    return false;
  };
  e.oncontextmenu = () => {
    return false;
  };
});

const projectURI = [
  "https://lostarkcalc.dpclfk.com/",
  "https://market.dpclfk.com/",
  "https://arcaclone.dpclfk.com/",
];

projectImg.forEach((e, idx) => {
  e.onclick = () => {
    window.open(projectURI[idx]);
  };
});

Hamburger.onclick = (e) => {
  e.currentTarget.classList.toggle("active");
  HamburgerGnb.classList.remove("Hamburger-none");
  if (HamburgerGnb.classList.contains("show")) {
    HamburgerGnb.classList.remove("show");
    HamburgerGnb.classList.add("hide");
    ableScroll();
  } else {
    HamburgerGnb.classList.remove("hide");
    HamburgerGnb.classList.add("show");
    disableScroll();
  }
};

const widthCheck = () => {
  if (window.matchMedia("(width >= 38.5rem)").matches) {
    Hamburger.classList.remove("active");
    HamburgerGnb.classList.add("Hamburger-none");
    HamburgerGnb.classList.remove("show");
    HamburgerGnb.classList.add("hide");
    ableScroll();
  }
};

window.addEventListener("resize", widthCheck);
