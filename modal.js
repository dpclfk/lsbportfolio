const modal = document.getElementById("modal");
const modalExit = document.querySelectorAll("#modal-bg,.mac-button.red");
const modalContents = document.getElementById("modal-contents");

const coreCode = document.querySelectorAll(".core-code");

// modal창 열리면 내부에서만 휠 가능하게
modalContents.addEventListener(
  "wheel",
  (e) => {
    e.stopPropagation();
    // 내부에서 맨위 or 맨 아래에서 스크롤시 밖에 스크롤되는것을 막음
    const { scrollTop, scrollHeight, clientHeight } = modalContents;
    if (
      (scrollTop <= 0 && e.deltaY < 0) ||
      (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0)
    ) {
      e.preventDefault();
    }
  },
  { passive: false }
);

const calcmodal = `<p>로스트아크 거래소 API의 응답 내용을 기반으로 DB ERD 설계</p>
<div class="modal-img-content flex center">
  <img src="./img/project/modal/calc/res.png" alt="" />
  <img src="./img/project/modal/calc/erd.png" alt="" />
</div>
<p>
  로스트아크 거래소 API의 요청 방식을 따라 Body에 정보를 포함하여 요청
</p>
<div class="modal-img-content flex center">
  <img src="./img/project/modal/calc/req.png" alt="" />
</div>
<pre><code class="language-typescript">
const lostLink = axios.create({
  baseURL: 'https://developer-lostark.game.onstove.com/',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    authorization: &#96;&#36;&#123;this.configService.get&ltstring&gt("LOSTAPI")&#125;&#96;,
  },
});// OPEN API 요청 시 공통적인 부분을 변수로 선언

const reqApi = await lostLink.post( // 거래소에서 최신 정보를 가져오는 코드
'markets/items', // baseURL에 추가로 붙는 URL
  {
    Sort: 'GRADE',
    CategoryCode: 60000,
    CharacterClass: '',
    ItemTier: null,
    ItemGrade: '',
    ItemName: '',
    PageNo: i,
    SortCondition: 'ASC',
  }, // Body에 포함될 내용
);

reqApi.data.Items.map(
  (item: Item) => marketApiUpdate(item),
); // API 정보를 DB에 저장하는 함수를 호출</code></pre>
<p>응답 데이터를 DB에 저장</p>
<pre><code class="language-typescript">
const marketApiUpdate = async (item: Item) => {
  let icon: Icon = this.iconRepository.create({ // 아이콘 이미지는 별도로 호출하는 경우가 많아 다른 테이블에 저장
    icon: item.Icon.slice(
      'https://cdn-lostark.game.onstove.com/efui_iconatlas/'.length,
    ),
  itemCode: item.Id,
  });
  try {
    await this.iconRepository.save(icon);
  } catch (err) {
    icon = await this.iconRepository.findOne({ where: icon });
  }
  try {
    const market: Market = this.marketRepository.create({
      name: item.Name,
      itemCode: item.Id,
      bundle: item.BundleCount,
      currentMinPrice: item.CurrentMinPrice,
      recentPrice: item.RecentPrice,
      yDayAvgPrice: item.YDayAvgPrice,
      icon: icon,
      patchable: false,
    });
    await this.marketRepository.upsert(market, []);
  } catch (err) {} // 값이 변경되지 않은 상태에서 업데이트를 시도하면 오류가 발생할 수 있으므로, catch를 사용해 서버 중단을 방지
};</code>
</pre>`;

// modal창 열리면 내부에서만 터치이동 가능하게
// modalContents.addEventListener(
//   "touchmove",
//   (e) => {
//     e.stopPropagation();
//     const { scrollTop, scrollHeight, clientHeight } = modalContents;
//     const deltaY =
//       e.touches[0].clientY - (e.target._lastY || e.touches[0].clientY);
//     e.target._lastY = e.touches[0].clientY;

//     console.log(e.cancelable);

//     if (
//       (scrollTop <= 0 && deltaY > 0) ||
//       (scrollTop + clientHeight >= scrollHeight && deltaY < 0)
//     ) {
//       // e.preventDefault();
//       if (e.cancelable) {
//         e.preventDefault();
//       }
//     }
//   },
//   { passive: false }
// );

coreCode.forEach((e) => {
  e.onclick = () => {
    modalContents.innerHTML = calcmodal;
    modal.classList.add("flex");
    modal.classList.remove("none");
    disableScroll();
    hljs.highlightAll();
  };
});

modalExit.forEach((e) => {
  e.onclick = () => {
    modalContents.innerHTML = "";
    modal.classList.remove("flex");
    modal.classList.add("none");
    ableScroll();
  };
});
