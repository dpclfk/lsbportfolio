const modaldiv = document.getElementById("modal-div");
const modalbg = document.getElementById("modal-bg");
const modalimg = document.getElementById("modal-img");
const modaltext = document.getElementById("modal-text");

const morebtn1 = document.getElementsByClassName("more-btn")[0];
const morebtn2 = document.getElementsByClassName("more-btn")[1];
const morebtn3 = document.getElementsByClassName("more-btn")[2];

// history.scrollRestoration = "manual";

for (let i = 0; i < 4; i++) {
  const observer = new IntersectionObserver(
    function callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`${entry.target} is intersecting`);
          entry.target.classList.add("fadeup");
          entry.target.classList.remove("op-0");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  const firstdiv = document.getElementsByClassName("first-div")[i];

  observer.observe(firstdiv);
}

modalbg.onclick = () => {
  modaldiv.classList.add("none");
  document.body.classList.remove("scroll-stop");
  // modalimg.src = "";
  // modaltext.innerHTML = ``;
};

morebtn1.onclick = () => {
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  // modalimg.src = "./img/calc.png";
  // modaltext.innerHTML = `<p><span class="weight700">맡은 역할: </span>테스트</p>
  // <p><span class="weight700">기능: </span>테스트</p>`;
};
morebtn2.onclick = () => {
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  // modalimg.src = "./img/market.png";
};
morebtn3.onclick = () => {
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  // modalimg.src = "./img/clone.png";
};

for (let i = 0; i < 5; i++) {
  const gnbmove = document.getElementById("gnb2").children[i];
  const firstdiv =
    i === 0
      ? document.getElementById("visual")
      : document.getElementsByClassName("first-div")[i - 1];

  gnbmove.onclick = () => {
    firstdiv.scrollIntoView({ behavior: "smooth" });
  };
}

const aboutmove = document.getElementById("about-btn");
const aboutdiv = document.getElementsByClassName("first-div")[0];

aboutmove.onclick = () => {
  aboutdiv.scrollIntoView({ behavior: "smooth" });
};
