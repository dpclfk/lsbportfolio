const allimg = document.querySelectorAll("img");
const gnbmove = document.querySelectorAll("#gnb2 > *");
const aboutmove = document.getElementById("about-btn");
const movediv = document.querySelectorAll("#visual,.first-div");
const moveAboutMe = document.getElementById("move-about-me");
const projectImg = document.querySelectorAll(".project-img");
const op0 = document.querySelectorAll(".op-0");
const Hamburger = document.querySelector(".Hamburger");
const HamburgerGnb = document.querySelector("#gnb2");
const guthub = document.querySelectorAll(".githubicon > img");

// 로고 클릭시 새로고침
const sitetile = document.getElementById("gnb1");
sitetile.onclick = () => {
  location.reload();
};

// 스크롤 이벤트 관련
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

// 새로고침시 맨 위로
history.scrollRestoration = "manual";

// 옵저버로 특정 클래스를 가진 div 보이면 위로 나오는 효과
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

// x번째 클릭시 x번째 옵저버로 이동
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

// about me 버튼클릭시 about me로 이동
aboutmove.onclick = () => {
  moveAboutMe.scrollIntoView({ behavior: "smooth" });
};

// 이미지 드래그, 우클릭 안되게
allimg.forEach((e) => {
  e.ondragstart = () => {
    return false;
  };
  e.oncontextmenu = () => {
    return false;
  };
});

// 이미지 클릭시 프로젝트 페이지로 이동
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

//깃허브 클릭시 깃허브 페이지로 이동
const GuthubURI = [
  "https://github.com/dpclfk/lostarkcalc",
  "https://github.com/dpclfk/TeamHamster",
  "https://github.com/dpclfk/mayteamproject/tree/dev",
];
guthub.forEach((e, idx) => {
  e.onclick = () => {
    window.open(GuthubURI[idx]);
  };
});

// 햄버거버튼 클릭 이벤트
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

// 크기가 햄버거버튼 나오는 크기보다 커지면 원상복구
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
