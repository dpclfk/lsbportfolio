const modaldiv = document.getElementById("modal-div");
const modalexit = document.querySelectorAll("#modal-bg,#exit-btn");
const modaltitle = document.getElementById("modal-title-text");
const modalimg = document.querySelector("#modal-img img");
const modaltext = document.getElementById("modal-text");
const modalprojecticon = document.getElementById("modal-project-icon");
const allimg = document.querySelectorAll("img");
const gnbmove = document.getElementById("gnb2").children;
const aboutmove = document.getElementById("about-btn");
const movediv = document.querySelectorAll("#visual, .first-div");

const morebtn = document.getElementsByClassName("more-btn");

const sitetile = document.getElementById("gnb1");
sitetile.onclick = () => {
  location.reload();
};

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

modalexit.forEach((e) => {
  e.onclick = () => {
    modaldiv.classList.add("none");
    document.body.classList.remove("scroll-stop");
  };
});

morebtn[0].onclick = () => {
  modalprojecticon.src = "./img/project/lost.ico";
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  modaltitle.innerText = "로스트아크 계산기";
  modalimg.src = "./img/calc.png";
  modalimg.onclick = () => {
    window.open(`https://lostarkcalc.dpclfk.com`);
  };
  modaltext.innerHTML = `<ul>
  <li class="pb-8">
    <span class="weight700 modal-text-title">맡은 역할</span>
    <ul class="modal-text-contents">
      <li>
        NestJs 및 open api RND, ERD, API명세서, 시퀀스다이어그램,
        프로젝트 코드 작성
      </li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">기능 </span>
    <ul class="modal-text-contents">
      <li>
        로스트아크 오픈 api를 사용하여 최신화된 재료와 완제품의
        가격을 DB에 저장
      </li>
      <li>MySQL을 사용하여 완제품 제작레시피 저장 및 관리</li>
      <li>세션을 사용하여 관리자 권한 부여</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">기간 </span>
    <ul class="modal-text-contents">
      <li>2024.08.23 ~ 2024.09.13</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">일수 </span>
    <ul class="modal-text-contents">
      <li>21일</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">인원 </span>
    <ul class="modal-text-contents">
      <li>1명</li>
    </ul>
  </li>
</ul>
`;
};
morebtn[1].onclick = () => {
  modalprojecticon.src = "./img/project/market.ico";
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  modaltitle.innerText = "햄스터 마켓";
  modalimg.onclick = () => {
    window.open(`https://market.dpclfk.com`);
  };
  modalimg.src = "./img/market.png";
  modaltext.innerHTML = `<ul>
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
</ul>
`;
};
morebtn[2].onclick = () => {
  modalprojecticon.src = "./img/project/Arcalive_logo.svg";
  modaldiv.classList.remove("none");
  document.body.classList.add("scroll-stop");
  modaltitle.innerText = "아카라이브 클론코딩";
  modalimg.onclick = () => {
    window.open(`https://arcaclone.dpclfk.com`);
  };
  modalimg.src = "./img/clone.png";
  modaltext.innerHTML = `<ul>
  <li class="pb-8">
    <span class="weight700 modal-text-title">맡은 역할</span>
    <ul class="modal-text-contents">
      <li>ERD, API명세서, 백엔드 코드 작성</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">기능 </span>
    <ul class="modal-text-contents">
      <li>MySQL을 사용하여, 게시글 및 유저정보 저장 및 관리</li>
      <li>세션을 이용하여 로그인 기능 구현</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">기간 </span>
    <ul class="modal-text-contents">
      <li>2024.05.20 ~ 2024.06.04</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">일수 </span>
    <ul class="modal-text-contents">
      <li>15일</li>
    </ul>
  </li>
  <li class="pb-8">
    <span class="weight700 modal-text-title">인원 </span>
    <ul class="modal-text-contents">
      <li>3명</li>
    </ul>
  </li>
</ul>
`;
};

for (let i = 0; i < 4; i++) {
  gnbmove[i].onclick = () => {
    movediv[i].scrollIntoView({ behavior: "smooth" });
  };
}

aboutmove.onclick = () => {
  movediv[1].scrollIntoView({ behavior: "smooth" });
};

allimg.forEach((e) => {
  e.ondragstart = () => {
    return false;
  };
  e.oncontextmenu = () => {
    return false;
  };
});
