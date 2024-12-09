const modaldiv = document.getElementById("modal-div");
const modalbg = document.getElementById("modal-bg");
const modaltitle = document.getElementById("modal-title");
const modalimg = document.getElementById("modal-img");
const modaltext = document.getElementById("modal-text");
const modalexit = document.getElementById("exit-btn");

const morebtn1 = document.getElementsByClassName("more-btn")[0];
const morebtn2 = document.getElementsByClassName("more-btn")[1];
const morebtn3 = document.getElementsByClassName("more-btn")[2];

history.scrollRestoration = "manual";

for (let i = 0; i < 3; i++) {
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
  const firstdiv = document.getElementsByClassName("first-div")[i];

  observer.observe(firstdiv);
}

modalbg.onclick = () => {
  modaldiv.classList.add("none");
  document.body.classList.remove("scroll-stop");
};

modalexit.onclick = () => {
  modaldiv.classList.add("none");
  document.body.classList.remove("scroll-stop");
};

morebtn1.onclick = () => {
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  modaltitle.innerText = "로스트아크 계산기";
  modalimg.src = "./img/calc.png";
  modalimg.onclick = () => {
    window.open(`https://lostarkcalc.dpclfk.com`);
  };
  modaltext.innerHTML = `<ul>
  <li class="pb-8">
    <span class="weight700 modal-text-title">맡은 역할: </span
    >NestJs 및 open api RND, ERD, API명세서, 시퀀스다이어그램,
    프로젝트 코드 작성
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">기능: </span>로스트아크
    오픈 api를 사용하여 최신화된 재료와 완제품의 가격을 DB에 저장<br />
    MySQL을 사용하여 완제품 제작레시피 저장 및 관리<br />
    세션을 사용하여 관리자 권한 부여
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">기간: </span>2024.08.23
    ~ 2024.09.13
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">일수: </span>21일
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">인원: </span>1명
  </li>
</ul>`;
};
morebtn2.onclick = () => {
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  modaltitle.innerText = "햄스터 마켓";

  modalimg.onclick = () => {
    window.open(`https://market.dpclfk.com`);
  };
  modalimg.src = "./img/market.png";
  modaltext.innerHTML = `<ul id="list-none">
  <li class="pb-8">
    <span class="weight700 modal-text-title">맡은 역할</span>
    <ul class="modal-text-contents">
      <li>
        팀장으로서 팀원들의 일정관리, ERD, API명세서, 백엔드
        시퀀스다이어그램, 백엔드 코드 작성
      </li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">기능 </span>
    <ul class="modal-text-contents">
      <li>MySQL을 사용하여, 게시글 및 유저정보 저장 및 관리</li>
      <li>
        MongoDB를 사용하여, 택배기사 위치 저장 및 포인트 내역 저장
        및 관리
      </li>
      <li>OAuth와 세션을 이용하여 로그인 기능 구현</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">기간 </span>
    <ul class="modal-text-contents">
      <li>2024.07.05~2024.08.05</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">일수 </span>
    <ul class="modal-text-contents">
      <li>31일</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">인원 </span>
    <ul class="modal-text-contents">
      <li>4명</li>
    </ul>
  </li>
</ul>`;
};
morebtn3.onclick = () => {
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  // modalimg.src = "./img/clone.png";
};

for (let i = 0; i < 4; i++) {
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
