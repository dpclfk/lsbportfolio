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
      (scrollTop + clientHeight + 1 >= scrollHeight && e.deltaY > 0)
    ) {
      e.preventDefault();
    }
  },
  { passive: false }
);

const modalText = [
  `<p class="font-20 pb-8">로스트아크 거래소 API의 응답 내용을 기반으로 요청시 저장할 DB ERD 설계</p>
<div class="modal-img-content flex center">
  <img src="./img/project/modal/calc/res.png" alt="" />
  <img src="./img/project/modal/calc/marketERD.png" alt="" />
</div>
<p class="font-20 pt-16 pb-8">
  응답 ERD를 기반으로 프로젝트에 필요한 DB의 전체적인 ERD 완성
</p>
<div class="modal-img-content flex center">
  <img src="./img/project/modal/calc/DBERD.jpg" alt="calc-DBERD" />
</div>
<p class="font-20 pt-16 pb-8">
  백엔드와 프론트엔드의 플로우차트를 그려 프로세스 흐름을 시각화하여 표현
</p>
<p class="font-18 pl-4 pb-8">Back-End Flowchart</p>
<div class="new-modal-img-content flex center">
  <img src="./img/project/modal/calc/flowchart-back.jpg" alt="calc-flowchart-back" />
</div>
<p class="font-18 pt-8 pl-4 pb-8">Front-End Flowchart</p>
<div class="new-modal-img-content flex center">
  <img src="./img/project/modal/calc/flowchart-front.jpg" alt="calc-flowchart-front" />
</div>
<p class="font-20 pt-16 pb-8">
  로스트아크 거래소 API의 요청 방식을 따라 Body에 정보를 포함하여 요청
</p>
<div class="modal-img-content flex center">
  <img src="./img/project/modal/calc/req.png" alt="" />
</div>
<pre><code class="language-typescript">const lostLink = axios.create({
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
<p class="font-20 pt-16">응답 데이터를 DB에 저장</p>
<pre><code class="language-typescript">const marketApiUpdate = async (item: Item) => {
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
</pre>
`,
  `
<p class="font-20 pb-8">
  DB ERD 구축
</p>
<div class="new-modal-img-content flex center">
  <img src="./img/project/modal/market/DBERD.jpg" alt="" />
</div>
<p class="font-20 pt-16 pb-8">
  백엔드의 플로우차트를 그려 프로세스 흐름을 시각화하여 표현
</p>
<p class="font-18 pl-4 pb-8">메인페이지 관련 플로우차트</p>
<div class="new-modal-img-content flex center">
  <img src="./img/project/modal/market/flowchart-main.jpg" alt="market-flowchart-main" />
</div>
<p class="font-18 pt-8 pl-4 pb-8 pb-8">로그인 및 글쓰기 관련 플로우차트</p>
<div class="new-modal-img-content flex center">
  <img src="./img/project/modal/market/flowchart-write.jpg" alt="market-flowchart-write" />
</div>
<p class="font-18 pt-8 pl-4 pb-8">어드민 및 배송기사 관련 플로우차트</p>
<div class="new-modal-img-content flex center">
  <img src="./img/project/modal/market/flowchart-admin.jpg" alt="market-flowchart-admin" />
</div>
<p class="font-18 pt-8 pl-4 pb-8">각 데이터의 움직임을 표현하기 위한 시퀀스 다이어그램(클릭시 draw.io 페이지로 이동)</p>
<div class="new-modal-img-content flex center">
  <a href="https://app.diagrams.net/#G1uyv14P4ievsvGNsUTJWnUhFWd7doYC4_#%7B%22pageId%22%3A%22NWUtv_SiQupVRRRp2jGZ%22%7D" target="_blank" rel="noopener noreferrer">
    <img src="./img/project/modal/market/sequence.jpg" alt="sequence" />
  </a>
</div>
<p class="font-20 pt-16">
이메일(ID로도 사용)찾기 기능을 위해 이메일에 양방향 암호화를 적용
</p>
<pre><code class="language-typescript">const key: Buffer = crypto.scryptSync("hgaomasttmexrj", &#96;&#36;{process.env.KEY || ""}&#96;, 32);
const iv: Buffer = Buffer.from(&#96;&#36;{process.env.IV}&#96;, "base64");
const cipher: crypto.CipherGCM = crypto.createCipheriv("aes-256-gcm", key, iv);

const encryptionemail: string = cipher.update(&#96;&#36;{reqbody.email}&#96;, "utf-8", "hex"); // AES를 사용하여 이메일(ID로도 사용)을 양방향으로 암호화하기 위한 코드
</code></pre>
<p class="font-20 pt-16">비밀번호 암호화를 위해 단방향 암호화를 적용</p>
<pre><code>const encryptionpw: string = crypto
.createHash("sha512")
.update(&#96;&#36;{reqbody.pw + process.env.SALT}&#96;)
.digest("hex");// 비밀번호 단방향 암호화를 위한 코드
</code></pre>
<p class="font-20 pt-16">구글로그인을 위해 필요한 코드 작성</p>
<pre><code class="language-typescript">// 구글 인증 서버 요청에 필요한 정보를 생성하는 코드
const params: URLSearchParams = new URLSearchParams();
params.append("code", code);
params.append("client_id", client_id);
params.append("client_secret", client_secret);
params.append("redirect_uri", redirectUrl);
params.append("grant_type", "authorization_code");


// 구글 인증서버에서 accessToken을 받기위한 코드
const response = await axios.post(tokenEndpoint, params, {
headers: {
  "Content-Type": "application/x-www-form-urlencoded",
},
});
const accessToken = response.data.access_token;

// 구글에 사용자 정보를 요청하는 코드
const userInfoResponse = await (
await axios.get("https://www.googleapis.com/oauth2/v1/userinfo", {
  headers: {
  Authorization: &#96;Bearer &#36;{accessToken}&#96;,
  },
})
).data;
</code></pre>
<p class="font-20 pt-16">네이버 로그인을 위해 필요한 코드 작성</p>
<pre><code class="language-typescript">// 네이버 인증서버에서 accessToken을 받기위한 코드
const response = await axios.post(tokenEndpoint, null, {
params: {
  grant_type: "authorization_code",
  client_id: client_id,
  client_secret: client_secret,
  redirect_uri: redirectUrl,
  code: code,
  state: state,
},
headers: {
  "Content-Type": "application/x-www-form-urlencoded",
},
});
const accessToken = response.data.access_token;

// 네이버에 사용자 정보를 요청하는 코드
const userInfoResponse = await (
  await axios.get("https://openapi.naver.com/v1/nid/me", {
    headers: {
      Authorization: &#96;Bearer &#36;{accessToken}&#96;,
    },
  })
).data.response;
</code>
</pre>`,
  `
<p class="font-20 pb-8">
  DB ERD 구축
</p>
  <div class="new-modal-img-content flex center">
    <img src="./img/project/modal/clone/DBERD.jpg" alt="" />
  </div>
<p class="font-20 pt-16">Sequelize를 사용하여 데이터베이스에 연결</p>
<pre><code class="language-javascript">export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
 </code></pre>
<p class="font-20 pt-16">Sequelize를 사용하여 데이터베이스 테이블 생성</p>
<pre><code>export const Board = BoardModel.init(sequelize);
export const BoardLike = BoardLikeModel.init(sequelize);
export const BoardDislike = BoardDislikeModel.init(sequelize);
export const Comment = CommentModel.init(sequelize);
 </code></pre>
<p class="font-20 pt-16">테이블에서 관계를 자동으로 맺기위한 코드</p>
<pre><code>const db = {
  Board,
  BoardLike,
  BoardDislike,
  Comment,
};

Object.keys(db).forEach((model) => {
  db[model].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
 </code></pre>
<p class="font-20 pt-16">각 테이블 별 관계를 맺기위한 코드</p>
<pre><code>static associate({ User, Board, Category, BoardLike, Comment, BoardDislike, Channel }) {
  Board.hasMany(BoardLike, { foreignKey: "boardId" });
  Board.hasMany(BoardDislike, { foreignKey: "boardId" });
  Board.hasMany(Comment, { foreignKey: "boardId" });
  
  Board.belongsTo(User, { foreignKey: "userId" });
  Board.belongsTo(Category, { foreignKey: "categoryId" });
  Board.belongsTo(Channel, { foreignKey: "channelId" });
}
</code>
</pre>`,
];

coreCode.forEach((e, idx) => {
  e.onclick = () => {
    modalContents.innerHTML = modalText[idx];
    modal.classList.add("flex");
    modal.classList.remove("none");
    disableScroll();
    hljs.highlightAll();
  };
});

modalExit.forEach((e) => {
  e.onclick = () => {
    modalContents.scrollTop = 0;
    modalContents.innerHTML = "";
    modal.classList.remove("flex");
    modal.classList.add("none");
    ableScroll();
  };
});
