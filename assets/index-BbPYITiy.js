(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const Ve="oasis_nick",ze="oasis_session";function gt(){return Math.random().toString(16).slice(2,10).toUpperCase()}function ht(){let e=localStorage.getItem(ze);return e||(e=gt(),localStorage.setItem(ze,e)),e}function ae(){return(localStorage.getItem(Ve)||"").trim()}function yt(e){const t=(e||"").trim();return localStorage.setItem(Ve,t),t}function wt(){return ht()}function kt(){const e=ae();return e&&e.length>=8?"✨ 進階冒險者":"🌱 新手冒險者"}function O(e){return document.getElementById(e)}function De(){const e=ae()||"冒險者",t=wt(),n=kt(),o=O("topNick"),s=O("playerSession"),l=O("playerTitle");o&&(o.textContent=e),s&&(s.textContent=t),l&&(l.textContent=n);const a=O("certNick"),v=O("certSession"),k=O("certTitle");a&&(a.textContent=e),v&&(v.textContent=t),k&&(k.textContent=n);const w=O("celebrateNick");w&&(w.textContent=e)}function He(){const e=O("startOverlay");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}function We(){const e=O("startOverlay");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}function Et(){const e=O("nicknameInput"),t=O("nickPreview"),n=O("btnStartGame"),o=O("nickErr"),s=O("btnChangeNick"),l=ae();l?We():He(),De(),e&&t&&(e.value=l||"",t.textContent=e.value.trim()||"冒險者",e.addEventListener("input",()=>{t.textContent=e.value.trim()||"冒險者",o&&o.classList.add("hidden")})),n&&n.addEventListener("click",()=>{const a=(e?.value||"").trim();if(!a){o&&(o.textContent="請輸入暱稱再開始～",o.classList.remove("hidden"));return}yt(a),We(),De()}),s&&s.addEventListener("click",()=>{He(),e&&(e.value=ae()),t&&(t.textContent=ae()||"冒險者"),o&&o.classList.add("hidden"),e?.focus?.()})}function ge(e,t){t("ecoCoin",String(e.eco))}function J(e,t,n,o){const s=e(t);s&&(s.textContent=n,s.className=`text-xs px-2 py-1 rounded-full font-bold ${o}`)}function Z(e,t,n,o){const s=e(t);s&&(n?(s.className="p-2 rounded-xl bg-emerald-600 text-center text-xs font-black text-white",s.textContent=o):(s.className="p-2 rounded-xl bg-slate-100 text-center text-xs font-black text-slate-500",s.textContent=t.replace("sbt","")))}function Q(e,t,n,o){const s=e("lv"+t);s&&(s.textContent=o,n?(s.className="mt-3 w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",s.disabled=!1):(s.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",s.disabled=!0))}function Ne(e,t,n){const o=e.completed,s=[1,2,3,4,5].every(a=>o[a]);J(t,"badge1",o[1]?"已完成":"未完成",o[1]?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-slate-100 text-slate-600"),J(t,"badge2",o[2]?"已完成":o[1]?"可開始":"未解鎖",o[2]?"bg-emerald-50 text-emerald-700 border border-emerald-100":o[1]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),J(t,"badge3",o[3]?"已完成":o[2]?"可開始":"未解鎖",o[3]?"bg-emerald-50 text-emerald-700 border border-emerald-100":o[2]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),J(t,"badge4",o[4]?"已完成":o[3]?"可開始":"未解鎖",o[4]?"bg-emerald-50 text-emerald-700 border border-emerald-100":o[3]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),J(t,"badge5",o[5]?"已完成":o[4]?"可開始":"未解鎖",o[5]?"bg-emerald-50 text-emerald-700 border border-emerald-100":o[4]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),J(t,"badge6",o[6]?"已完成":s?"可開始":"未解鎖",o[6]?"bg-emerald-50 text-emerald-700 border border-emerald-100":s?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),Q(t,1,!0,o[1]?"已完成（可重玩）":"開始第 1 關"),Q(t,2,o[1],o[2]?"已完成（可重玩）":"開始第 2 關"),Q(t,3,o[2],o[3]?"已完成（可重玩）":"開始第 3 關"),Q(t,4,o[3],o[4]?"已完成（可重玩）":"開始第 4 關"),Q(t,5,o[4],o[5]?"已完成（可重玩）":"開始第 5 關"),Q(t,6,s,o[6]?"已完成（可重填）":"開始第 6 關");const l=[1,2,3,4,5,6].filter(a=>o[a]).length;n("progressText",`${l}/6`),Z(t,"sbt1",o[1],"🌱"),Z(t,"sbt2",o[2],"🥤"),Z(t,"sbt3",o[3],"🛡️"),Z(t,"sbt4",o[4],"🔎"),Z(t,"sbt5",o[5],"🏠"),Z(t,"sbt6",o[6],"📝")}let re=null;function Ct(e){re=typeof e=="function"?e:null}function Xe(e,t,n){const{$:o,show:s,setText:l}=n;re=null,l("modalTitle",e),l("modalSubtitle",t||"");const a=o("modalBody");a&&(a.innerHTML=""),s(o("modal"))}function Lt(e){const{$:t,hide:n,stopTTS:o}=e;try{typeof re=="function"&&re()}catch{}re=null,n(t("modal")),o()}function Je(e,t){const n=t("modalBody");n&&(n.innerHTML=e)}function Tt(e){const{$:t,stages:n,state:o}=e;t("lv1")?.addEventListener("click",()=>n.stage1()),t("lv2")?.addEventListener("click",()=>{o.completed[1]&&n.stage2()}),t("lv3")?.addEventListener("click",()=>{o.completed[2]&&n.stage3()}),t("lv4")?.addEventListener("click",()=>{o.completed[3]&&n.stage4()}),t("lv5")?.addEventListener("click",()=>{o.completed[4]&&n.stage5()}),t("lv6")?.addEventListener("click",()=>{[1,2,3,4,5].every(l=>o.completed[l])&&n.stage6()})}function St(e){const{$:t,t:n,stopTTS:o,resetGameState:s,closeModal:l,hide:a,ensureAudio:v,openEcoCupIdea:k}=e;t("modalClose")?.addEventListener("click",N=>{N.preventDefault(),N.stopPropagation(),l()}),t("btnReset")?.addEventListener("click",()=>{if(o(),!!confirm(n("confirmReset"))){s();try{l()}catch{}a(t("jumpOverlay")),a(t("celebrateOverlay")),a(t("certificateOverlay")),a(t("zoomModal")),alert(n("resetDone"))}});const w=document.getElementById("btnEcoCupIdea");w&&w.addEventListener("click",k),window.addEventListener("pointerdown",()=>{v()},{once:!1})}function Mt(e){const{$:t,show:n,hide:o,setText:s,openModal:l,bodyHTML:a,modalDeps:v,closeModal:k,setModalCleanup:w,addEco:N,markCompleted:H,jumpTo:g,ensureAudio:S,sfxGood:I,sfxEncourage:B,sfxLevelUp:E,stopTTS:y,speakOnce:f,nick:r}=e;l("第 1 關｜先建立知識認知","完成 3 張卡（每張答一題）＋小劇場播放完＋情境答對 → 前往第 2 關（+80）",v);let i=!0;const x=[{icon:"👛",title:"加密錢包是什麼？",core:"錢包就像你的數位皮夾：你自己保管，決定要不要授權。",detail:["你可以把錢包想成「鑰匙＋保險箱」。鑰匙（私鑰/助記詞）只給自己，不給任何人。","網站跳出簽名/授權視窗時，你是在『同意做一件事』，不是『只是登入』。","安全原則：看不懂就先拒絕，去官方確認再操作。"].join(`
`),quiz:{q:"哪一句最正確？",a:[{t:"錢包密碼可以交給網站幫我保管",ok:!1},{t:"錢包要自己保管，授權要看清楚",ok:!0}]}},{icon:"🧾",title:"NFT 是什麼？",core:"NFT 不是圖片本身，而是「可驗證來源」的數位憑證。",detail:["NFT 像「帶序號的證明書」。重點是來源/合約能不能驗證。","圖片很像不代表是真的，釣魚常用『一樣的圖』騙你點連結。","安全原則：先看官方來源、合約、網域；不要被『限時』催促。"].join(`
`),quiz:{q:"判斷 NFT 真假的重點是？",a:[{t:"圖片好不好看",ok:!1},{t:"來源/合約能不能驗證",ok:!0}]}},{icon:"🏠",title:"RWA 是什麼？",core:"RWA 是把真實世界的資產/權益，做成可驗證的數位憑證。",detail:["RWA 可理解為：把『房屋、票券、保固、債券』等真實世界權益，變成更好查驗與管理的憑證。","它不是要你衝動投資，而是讓流程更清楚、可追蹤。","安全原則：遇到要你『先付費/先簽名』的陌生連結，一樣先停下來查來源。"].join(`
`),quiz:{q:"哪個比較像 RWA？",a:[{t:"可驗證的電子門票憑證",ok:!0},{t:"陌生人發的限時快領連結",ok:!1}]}}],z=r(),m=[{who:"koko",text:`美美，${z} 看到一個『限時快領』連結，點進去跳出錢包視窗。`},{who:"meimei",text:`${z} 先停。它要你同意什麼？有沒有寫無限額？`},{who:"koko",text:"有耶，寫無限額授權，還說比較方便。"},{who:"meimei",text:"那就先拒絕。先關掉、去官方確認再說。"},{who:"koko",text:`好！${z} 懂了：看不懂就先不要簽。`}];a(`
    <div class="mt-2 p-4 rounded-2xl blkA">
      <div class="flex items-center justify-between gap-2">
        <div class="font-extrabold text-slate-900">區塊 A｜三張知識卡（每張答一題確認理解）</div>
        <div class="text-xs font-black text-slate-700 bg-white/70 border border-white/80 px-3 py-2 rounded-xl">
          已完成：<span id="cardOK">0</span>/3
        </div>
      </div>

      <div class="mt-3 space-y-3" id="cardsWrap">
        ${x.map((d,b)=>`
          <div id="s1Card${b}" class="p-4 rounded-2xl teach-card card-hover">
            <div class="teach-inner">
              <div class="flex items-center gap-2">
                <button type="button" class="voice-mini s1VoiceMini" title="語音開關（預設開）">🔊</button>
                <div class="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg">${d.icon}</div>
                <div class="font-extrabold text-slate-900">${d.title}</div>
                <div id="doneDot${b}" class="ml-auto hidden text-sm font-black text-emerald-700">✅ 已懂</div>
              </div>

              <div class="text-sm text-slate-800 mt-3 leading-relaxed">
                <span class="font-extrabold text-slate-900">一句話：</span>${d.core}
              </div>

              <div class="mt-3 flex justify-center">
                <button id="more${b}" class="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold hover:bg-slate-50 shadow-soft text-sm">
                  點我更了解
                </button>
              </div>

              <div class="mt-4 p-3 rounded-2xl bg-white border border-slate-200">
                <div class="text-sm font-extrabold text-slate-900">${d.quiz.q}</div>
                <div class="mt-2 grid gap-2">
                  ${d.quiz.a.map((A,F)=>`
                    <button data-ci="${b}" data-ai="${F}"
                      class="w-full text-left p-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white font-semibold text-slate-800">
                      ${A.t}
                    </button>
                  `).join("")}
                </div>
                <div id="quizMsg${b}" class="mt-3 hidden p-3 rounded-2xl border text-sm"></div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="mt-4 p-4 rounded-2xl blkB">
      <div class="flex items-center justify-between gap-2">
        <div class="font-extrabold text-slate-900">區塊 B｜小劇場</div>

        <div class="flex items-start gap-2">
          <div class="flex flex-col items-center">
            <button id="dramaStart"
              class="w-12 h-12 rounded-2xl bg-blue-600 border-2 border-white text-white font-black hover:bg-blue-700 text-xl shadow-soft flex items-center justify-center"
              title="開始 / 繼續">▶️</button>
            <div class="mt-1 text-[11px] font-black text-slate-700">開始/繼續</div>
          </div>

          <div class="flex flex-col items-center">
            <button id="dramaPause"
              class="w-12 h-12 rounded-2xl bg-amber-500 border-2 border-white text-white font-black hover:bg-amber-600 text-xl shadow-soft flex items-center justify-center"
              title="暫停">⏸️</button>
            <div class="mt-1 text-[11px] font-black text-slate-700">暫停</div>
          </div>
        </div>
      </div>

      <div class="mt-3 p-4 rounded-2xl drama-stage">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div id="actorMei" class="p-4 rounded-2xl actor-card">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 120 120" class="w-full h-full">
                  <circle cx="60" cy="44" r="22" fill="#F7D7C4"/>
                  <path d="M38 40c6-18 38-18 44 0" fill="#5B4B3A"/>
                  <circle cx="52" cy="46" r="3.2" fill="#111827"/>
                  <circle cx="68" cy="46" r="3.2" fill="#111827"/>
                  <g class="mouth" id="meiMouth">
                    <ellipse cx="60" cy="56" rx="7" ry="3.6" fill="#111827"/>
                    <ellipse cx="60" cy="56.3" rx="6.2" ry="2.8" fill="#FB7185" opacity="0.55"/>
                  </g>
                  <path d="M40 74c6-10 34-10 40 0v26H40z" fill="#10B981"/>
                </svg>
              </div>
              <div class="font-extrabold text-slate-900 text-lg">美美</div>
            </div>
            <div id="meiBubble" class="mt-3 p-3 rounded-2xl bubble text-sm text-slate-700 leading-relaxed min-h-[74px]">(等待開始)</div>
          </div>

          <div id="actorKo" class="p-4 rounded-2xl actor-card">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 120 120" class="w-full h-full">
                  <circle cx="60" cy="44" r="22" fill="#F7D7C4"/>
                  <path d="M36 40c8-20 40-18 48 0" fill="#2F3B4A"/>
                  <circle cx="52" cy="46" r="3.2" fill="#111827"/>
                  <circle cx="68" cy="46" r="3.2" fill="#111827"/>
                  <g class="mouth" id="koMouth">
                    <ellipse cx="60" cy="56" rx="7" ry="3.6" fill="#111827"/>
                    <ellipse cx="60" cy="56.3" rx="6.2" ry="2.8" fill="#60A5FA" opacity="0.45"/>
                  </g>
                  <path d="M40 74c6-10 34-10 40 0v26H40z" fill="#0EA5E9"/>
                </svg>
              </div>
              <div class="font-extrabold text-slate-900 text-lg">可可</div>
            </div>
            <div id="koBubble" class="mt-3 p-3 rounded-2xl bubble text-sm text-slate-700 leading-relaxed min-h-[74px]">(等待開始)</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 p-4 rounded-2xl blkC">
      <div class="font-extrabold text-slate-900">區塊 C｜情境選擇</div>

      <div class="mt-3 p-4 rounded-2xl bg-white border border-amber-100">
        <div class="text-sm font-extrabold text-slate-900">情境</div>
        <div class="text-sm text-slate-700 mt-2 leading-relaxed">
          你要領獎勵，點進陌生連結後跳出錢包視窗，還寫「無限額授權」。
        </div>

        <div class="mt-4 grid gap-3">
          <button id="s1op0" class="w-full text-left p-4 rounded-2xl choice-btn font-semibold text-slate-800">
            先同意，反正只是領獎勵
          </button>
          <button id="s1op1" class="w-full text-left p-4 rounded-2xl choice-btn choice-strong font-semibold text-slate-900">
            先拒絕，關掉連結，去官方確認再操作
          </button>
        </div>

        <div id="s1feedback" class="mt-4 hidden p-4 rounded-2xl border"></div>
      </div>

      <div class="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
        <button id="btnGo2" class="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed" disabled>
          尚未解鎖
        </button>
      </div>
    </div>

    <div id="s1InnerModal" class="fixed inset-0 hidden items-center justify-center p-6 inner-modal">
      <div class="absolute inset-0 inner-modal-backdrop"></div>
      <div class="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-soft p-5 pop-overlay">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div id="s1InnerTitle" class="text-lg font-black text-slate-900">更詳細說明</div>
            <div class="text-sm text-slate-600 mt-1">（可選看）</div>
          </div>
          <button id="s1InnerClose" class="w-10 h-10 rounded-2xl bg-slate-900 text-white font-black hover:bg-slate-800">✕</button>
        </div>

        <div id="s1InnerText" class="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-slate-800 text-sm leading-relaxed whitespace-pre-line"></div>

        <button id="s1InnerOk" class="mt-4 w-full px-4 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800">
          我看懂了（關閉）
        </button>
      </div>
    </div>
  `,t);let c=[!1,!1,!1],u=!1,G=!1,Y=()=>{};w(()=>{try{Y()}catch{}try{y()}catch{}});function ne(){document.querySelectorAll(".s1VoiceMini").forEach(d=>{d.textContent=i?"🔊":"🔇",d.setAttribute("aria-pressed",i?"true":"false")})}function we(){if(S(),i=!i,i)try{window.speechSynthesis?.resume()}catch{}else{y();try{window.speechSynthesis?.pause()}catch{}}ne()}document.querySelectorAll(".s1VoiceMini").forEach(d=>{d.addEventListener("click",b=>{b.preventDefault(),b.stopPropagation(),we()})}),ne();function R(){s("cardOK",String(c.filter(Boolean).length));const d=t("btnGo2");d&&(d.disabled=!0,d.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",d.textContent="尚未解鎖",d.onclick=null,c.every(Boolean)&&u&&G&&(d.disabled=!1,d.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",d.textContent="領取獎勵並前往第 2 關（+80）",d.onclick=()=>{N(80,"level1_reward"),H(1),k(),g(2,1)}))}function $(d){t("s1InnerTitle").textContent=x[d].title+"｜更詳細說明",t("s1InnerText").textContent=x[d].detail,n(t("s1InnerModal")),i&&f(x[d].core,{rate:1.02,pitch:1.02})}function j(){o(t("s1InnerModal")),y()}t("s1InnerClose").onclick=j,t("s1InnerOk").onclick=j,t("s1InnerModal").addEventListener("click",d=>{(d.target===t("s1InnerModal")||d.target.classList.contains("inner-modal-backdrop"))&&j()}),x.forEach((d,b)=>{const A=t("s1Card"+b),F=t("more"+b);A.addEventListener("mouseenter",()=>{i&&f(x[b].core,{rate:1.02,pitch:1.02})}),A.addEventListener("mouseleave",y),F.addEventListener("focus",()=>{i&&f(x[b].core,{rate:1.02,pitch:1.02})}),F.addEventListener("blur",y),F.addEventListener("click",()=>{y(),$(b)})}),t("cardsWrap").addEventListener("click",d=>{const b=d.target.closest("button[data-ci]");if(!b)return;const A=Number(b.dataset.ci),F=Number(b.dataset.ai);if(c[A])return;const vt=x[A].quiz.a[F],de=t("quizMsg"+A);de.classList.remove("hidden"),vt.ok?(c[A]=!0,t("doneDot"+A).classList.remove("hidden"),de.className="mt-3 p-3 rounded-2xl border text-sm bg-emerald-50 border-emerald-100 text-emerald-800",de.innerHTML="<b>✅ 正確！</b> 你已理解這張卡的重點。",I(),R()):(de.className="mt-3 p-3 rounded-2xl border text-sm bg-sky-50 border-sky-100 text-sky-800",de.innerHTML="<b>再想一下</b>：你可以點「點我更了解」看更詳細說明。",B())});const ke=t("actorMei"),P=t("actorKo"),V=t("meiBubble"),Ee=t("koBubble");function C(d,b){d==="meimei"?ke.classList.toggle("talking",b):P.classList.toggle("talking",b)}let q=0,W=!1,D=!1,U=null,_=!1,X=null;function mt(){V.textContent="(等待開始)",Ee.textContent="(等待開始)",C("meimei",!1),C("koko",!1)}function le(){U&&(clearTimeout(U),U=null)}Y=function(){W=!1,D=!1,_=!1,X=null,le(),y(),C("meimei",!1),C("koko",!1)};function ft(){W=!1,D=!1,_=!1,X=null,le(),C("meimei",!1),C("koko",!1),u=!0,R()}function xt(d){const b=d.who==="meimei";X=d.who,b?(V.textContent=d.text,Ee.textContent=""):(Ee.textContent=d.text,V.textContent=""),C("meimei",i&&b),C("koko",i&&!b)}function K(){if(!W||D)return;if(q>=m.length){ft();return}const d=m[q];if(xt(d),le(),_=!0,!i){C("meimei",!1),C("koko",!1),U=setTimeout(()=>{!W||D||(_=!1,q++,K())},900);return}y();const b=d.who==="meimei",A=f(d.text,{pitch:b?1.15:.95,rate:1.02});if(!A){C("meimei",!1),C("koko",!1),U=setTimeout(()=>{!W||D||(_=!1,q++,K())},900);return}const F=()=>{W&&(_=!1,C("meimei",!1),C("koko",!1),q++,D||(U=setTimeout(()=>K(),160)))};A.onend=F,A.onerror=F}function bt(){if(!(W&&!D)){if(D){if(D=!1,i){try{if(window.speechSynthesis&&window.speechSynthesis.paused){window.speechSynthesis.resume(),_&&X&&(C("meimei",X==="meimei"),C("koko",X==="koko"));return}}catch{}_||K();return}_?(le(),U=setTimeout(()=>{!W||D||(_=!1,q++,K())},600)):K();return}Y(),W=!0,D=!1,q=0,mt(),K()}}function pt(){if(!(!W||D)&&(D=!0,le(),C("meimei",!1),C("koko",!1),i))try{window.speechSynthesis&&window.speechSynthesis.pause()}catch{}}t("dramaStart").onclick=()=>{S(),bt()},t("dramaPause").onclick=pt;const Ce=t("s1feedback");function Oe(d,b,A){Ce.classList.remove("hidden"),Ce.className="mt-4 p-4 rounded-2xl border "+(d?"bg-emerald-50 border-emerald-100":"bg-sky-50 border-sky-100"),Ce.innerHTML=`
      <div class="font-extrabold text-slate-900 text-lg">${b}</div>
      <div class="text-base text-slate-700 mt-2 leading-relaxed">${A}</div>
    `}t("s1op0").onclick=()=>{Oe(!1,"再試一次","看到無限額授權，先不要同意。先關掉、查來源，再決定。"),B(),G=!1,R()},t("s1op1").onclick=()=>{Oe(!0,"做得好！","你先拒絕並確認來源，是最安全的做法。"),E(),G=!0,R()},R()}function Nt(e){const{openModal:t,bodyHTML:n,modalDeps:o,$:s,show:l,addEco:a,markCompleted:v,closeModal:k,jumpTo:w,sfxFlip:N,sfxBad:H}=e;t("第 2 關｜NFT 辨識翻牌","按「發牌」→ 卡片一張一張出現。找出可驗證來源那張（+60）",o),n(`
    <div class="p-4 rounded-2xl bg-sky-50 border border-sky-100">
      <div class="font-extrabold text-slate-900">玩法</div>
      <div class="mt-2 text-sm text-slate-700 leading-relaxed">
        按一次「發牌」，會一張一張把 6 張卡發出來。你有 <b>3 次</b>翻牌機會，找出「可驗證來源牌」就過關。
      </div>

      <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
        <button id="btnDeal2" class="px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700 text-sm">
          🫳 發牌
        </button>
        <div class="text-sm text-slate-700 font-bold">
          剩餘嘗試：<span id="tries2">3</span>
        </div>
      </div>
    </div>

    <div id="gridWrap2" class="mt-4 hidden">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3" id="grid2"></div>
      <div class="mt-3 p-4 rounded-2xl bg-white border border-slate-200">
        <div class="font-extrabold text-slate-900">結果</div>
        <div id="msg2" class="text-sm text-slate-700 mt-1">請先發牌。</div>
      </div>
    </div>
  `,s);let g=3,S=!1;const I=s("tries2"),B=s("gridWrap2"),E=s("grid2"),y=s("msg2");function f(m){g=m,I.textContent=String(m)}const r=[{title:"限時快領牌",hint:"用限時製造急迫",isReal:!1},{title:"先付手續費牌",hint:"要你先付小額費用",isReal:!1},{title:"只有圖片牌",hint:"只有圖片，沒有來源",isReal:!1},{title:"縮網址牌",hint:"縮網址/陌生網址",isReal:!1},{title:"先簽才給看牌",hint:"要先簽名/先授權",isReal:!1},{title:"可驗證來源牌",hint:"官方來源/合約可驗證",isReal:!0}];function i(m){const c=m.slice();for(let u=c.length-1;u>0;u--){const G=Math.floor(Math.random()*(u+1));[c[u],c[G]]=[c[G],c[u]]}return c}function x(m,c){const u=document.createElement("button");return u.type="button",u.className="p-4 rounded-2xl bg-white border border-slate-200 text-left card-hover deal-enter",u.dataset.revealed="0",u.innerHTML=`
      <div class="text-xs font-bold text-slate-500">Card #${m+1}</div>
      <div class="mt-2">
        <div class="w-10 h-10 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center">
          <span class="text-xl">🧾</span>
        </div>
      </div>

      <div class="mt-2 font-extrabold text-slate-900 text-lg">${c.title}</div>

      <div class="mt-1 text-sm text-slate-700 leading-relaxed">
        （未翻牌）提示：${c.hint}
      </div>

      <div class="mt-3 w-full px-3 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-center">
        點擊「翻牌」確認這張是不是來源可驗證
      </div>
    `,u.addEventListener("click",()=>{S&&(g<=0||u.dataset.revealed!=="1"&&(u.dataset.revealed="1",u.disabled=!0,N(),c.isReal?(S=!1,u.innerHTML=`
          <div class="text-xs font-bold text-emerald-700">驗證通過</div>
          <div class="mt-2">
            <div class="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <span class="text-xl">🥤</span>
            </div>
          </div>
          <div class="mt-2 font-extrabold text-slate-900 text-lg">${c.title}</div>
          <div class="mt-1 text-sm text-slate-700 leading-relaxed">
            ✅ 你翻到「官方來源/合約可驗證」的那張！
          </div>
          <div class="mt-2 text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-100 rounded-xl px-2 py-2">
            重點：真正要看的是「來源/合約」能不能驗證
          </div>
        `,y.innerHTML='<span class="font-black text-emerald-700">成功！</span>你找到可驗證來源牌（+60）。',a(60,"level2_nft_win"),v(2),f(0),setTimeout(()=>{k(),w(3,2)},450)):(u.innerHTML=`
          <div class="text-xs font-bold text-rose-700">來源不明</div>
          <div class="mt-2">
            <div class="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center">
              <span class="text-xl">🖼️</span>
            </div>
          </div>
          <div class="mt-2 font-extrabold text-slate-900 text-lg">${c.title}</div>
          <div class="mt-1 text-sm text-slate-700 leading-relaxed">
            ⚠️ 這張是釣魚特徵：${c.hint}
          </div>
          <div class="mt-2 text-xs text-sky-700 font-bold bg-sky-50 border border-sky-100 rounded-xl px-2 py-2">
            提示：要找「可驗證來源牌」
          </div>
        `,f(g-1),H(),y.innerHTML=g>0?`<span class="font-black text-rose-700">不是可驗證來源。</span>再找一次（剩 ${g} 次）。`:'<span class="font-black text-slate-900">機會用完。</span>再按「發牌」重新開始。',g<=0&&(S=!1))))}),u}function z(){const m=i(r),c=[];for(let u=0;u<6;u++)c.push(x(u,m[u]));return c}s("btnDeal2").onclick=()=>{l(B),f(3),S=!0,y.textContent="卡片會一張一張出現，找出「可驗證來源牌」。";const m=z();E.innerHTML="";let c=0;const u=()=>{c>=m.length||(N(),E.appendChild(m[c]),c++,setTimeout(u,220))};u()}}function It(e){const{openModal:t,bodyHTML:n,modalDeps:o,$:s,addEco:l,markCompleted:a,closeModal:v,jumpTo:k,sfxGood:w,sfxBad:N,sfxEncourage:H}=e;t("第 3 關｜反詐紅旗分類（遊戲）","把卡片分類到「安全 / 可疑」。全部分類完成即可過關（+80）。",o);const g=[{title:"官方活動頁面（可在官方社群找到同樣公告）",correct:"safe",why:"✅ 能在官方社群/官網找到同樣公告，來源一致，風險較低。"},{title:"縮網址連結，要求你立刻簽名才能領",correct:"sus",why:"⚠️ 縮網址看不到真正網域＋要你立刻簽名，是常見釣魚套路。"},{title:"授權內容清楚、且只需要限額（非無限額）",correct:"safe",why:"✅ 授權範圍清楚且有限額，風險明顯比無限額低。"},{title:"跳出視窗寫「Approve unlimited spend（無限額）」",correct:"sus",why:"⚠️ 無限額授權風險最高，可能被直接拿走資產操作權限。"},{title:"要你先付小額手續費才給你看獎勵/領空投",correct:"sus",why:"⚠️ 先收小額費用常是詐騙開頭，容易越陷越深。"},{title:"網址與你平常使用的官方網域一致（無奇怪拼字）",correct:"safe",why:"✅ 網域一致且無怪拼字，相對安全（仍建議再對照官方公告）。"}];n(`
    <div class="p-4 rounded-2xl bg-amber-50 border border-amber-100">
      <div class="font-extrabold text-slate-900">任務</div>
      <div class="text-sm text-slate-700 mt-2">把每張卡分類到「安全 / 可疑」。分類完會立即告訴你對不對。</div>
    </div>

    <div class="mt-4 space-y-3" id="s3List"></div>

    <div class="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
      <button id="btnFinish3" class="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed" disabled>
        尚未完成
      </button>
    </div>

    <div class="mt-3 flex justify-end">
      <button id="s3Reset" class="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-extrabold hover:bg-white">
        重來
      </button>
    </div>
  `,s);const S=s("s3List");let I=Array(g.length).fill(!1);function B(f){return f==="done"?'<span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">✅ 已完成</span>':'<span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">尚未分類</span>'}function E(){if(S.innerHTML="",g.forEach((f,r)=>{const i=document.createElement("div");i.className="p-4 rounded-2xl bg-white border border-slate-200",i.innerHTML=`
        <div class="flex items-start justify-between gap-3">
          <div class="font-extrabold text-slate-900">${f.title}</div>
          <div id="s3Badge${r}">${B(I[r]?"done":"new")}</div>
        </div>

        <div class="mt-3 grid grid-cols-2 gap-3">
          <button data-idx="${r}" data-pick="safe"
            class="w-full py-4 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700 flex items-center justify-center gap-2">
            <span class="text-lg">✅</span><span class="text-lg">安全</span>
          </button>
          <button data-idx="${r}" data-pick="sus"
            class="w-full py-4 rounded-2xl bg-rose-600 text-white font-extrabold hover:bg-rose-700 flex items-center justify-center gap-2">
            <span class="text-lg">⚠️</span><span class="text-lg">可疑</span>
          </button>
        </div>

        <div id="s3Hint${r}" class="mt-3 hidden p-4 rounded-2xl border text-sm"></div>
      `,S.appendChild(i),I[r]&&i.querySelectorAll("button[data-idx]").forEach(x=>{x.disabled=!0,x.className+=" opacity-70 cursor-not-allowed"})}),I.every(Boolean)){const f=s("btnFinish3");f.disabled=!1,f.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",f.textContent="通關（領取 +80）→ 前往第 4 關",f.onclick=()=>{l(80,"level3_reward"),a(3),v(),k(4,3)}}}function y(f,r,i){const x=s("s3Hint"+f);x.classList.remove("hidden"),x.className="mt-3 p-4 rounded-2xl border text-sm "+(r?"bg-emerald-50 border-emerald-100 text-emerald-800":"bg-sky-50 border-sky-100 text-sky-800"),x.innerHTML=r?`<b>✅ 正確！</b> ${i}`:`<b>再想一下：</b> ${i}`}S.addEventListener("click",f=>{const r=f.target.closest("button[data-idx]");if(!r)return;const i=Number(r.dataset.idx);if(I[i])return;r.dataset.pick===g[i].correct?(I[i]=!0,w(),E(),y(i,!0,g[i].why)):(H(),y(i,!1,g[i].why))}),s("s3Reset").onclick=()=>{I=Array(g.length).fill(!1),N(),E()},E()}function Bt(e){const{openModal:t,bodyHTML:n,modalDeps:o,$:s,show:l,hide:a,addEco:v,markCompleted:k,closeModal:w,jumpTo:N,sfxGood:H,sfxBad:g,sfxEncourage:S,sfxLevelUp:I}=e;t("第 4 關｜可疑交易偵測（放大鏡）","先按 🔍 看細節，再選出『最可疑』的一筆（+40）",o);const B=[{id:1,title:"EcoCoin 兌換：環保杯",msg:"你主動兌換 → 扣 120 EcoCoin。",zoomTitle:"Tx #1 放大鏡",zoomBody:`這筆是你主動操作，金額固定、流程合理。
✅ 看起來正常：沒有急迫字眼、沒有無限額授權、沒有陌生網域。`,bad:!1},{id:2,title:"App 使用授權",msg:"授權範圍：只讀取必要資訊（限額）。",zoomTitle:"Tx #2 放大鏡",zoomBody:`授權內容有範圍限制，且是必要用途。
✅ 看起來正常：不是無限額、沒有要你先付費。`,bad:!1},{id:3,title:"限時領獎：簽名授權",msg:"顯示：Approve unlimited spend（無限額）",zoomTitle:"Tx #3 放大鏡（最可疑）",zoomBody:`⚠️ 這筆最可疑的地方：
1) 出現「unlimited / 無限額」授權
2) 常搭配「限時、快領」等急迫字眼
3) 你不是主動兌換，卻要授權很大權限

✅ 正確做法：先拒絕 → 去官方來源確認 → 必要才做『限額』授權。`,bad:!0},{id:4,title:"朋友分享投票連結",msg:"網域顯示：short.link/xxxx（縮網址）",zoomTitle:"Tx #4 放大鏡",zoomBody:`可疑點：縮網址看不到真正網域，可能導到釣魚站。
⚠️ 但它的危險程度通常低於「無限額授權」那種直接拿走權限的狀況。
✅ 做法：先查真正網域、確認官方再點。`,bad:!1}];n(`
    <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
      <div class="font-extrabold text-slate-900">任務</div>
      <div class="text-sm text-slate-700 mt-2">
        先按每筆的 🔍 看細節提示，再選出「最可疑」的一筆。
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3" id="s4Grid"></div>

    <div class="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
      <button id="btnFinish4" class="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed" disabled>
        尚未選出最可疑的一筆
      </button>
    </div>
  `,s);const E=s("s4Grid");let y=new Set;function f(r){s("zoomTitle").textContent=r.zoomTitle,s("zoomSub").textContent="可疑細節（看完再選）",s("zoomBody").textContent=r.zoomBody,l(s("zoomModal")),y.add(r.id),H()}s("zoomClose").onclick=()=>a(s("zoomModal")),s("zoomOk").onclick=()=>a(s("zoomModal")),s("zoomModal").addEventListener("click",r=>{(r.target===s("zoomModal")||r.target.classList.contains("modal-backdrop"))&&a(s("zoomModal"))}),B.forEach(r=>{const i=document.createElement("div");i.className="p-4 rounded-2xl bg-white border border-slate-200 card-hover",i.innerHTML=`
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="text-xs font-bold text-slate-500">Tx #${r.id}</div>
          <div class="mt-1 font-extrabold text-slate-900">${r.title}</div>
          <div class="mt-2 text-sm text-slate-700">${r.msg}</div>
        </div>
        <button class="w-12 h-12 rounded-2xl bg-slate-900 text-white font-black hover:bg-slate-800 text-xl shadow-soft" data-zoom="${r.id}" title="放大鏡">🔍</button>
      </div>
      <button class="mt-3 w-full px-3 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-extrabold hover:bg-white" data-pick="${r.id}">
        選這筆
      </button>
    `,E.appendChild(i)}),E.addEventListener("click",r=>{const i=r.target.closest("button[data-zoom]");if(i){const z=Number(i.dataset.zoom),m=B.find(c=>c.id===z);m&&f(m);return}const x=r.target.closest("button[data-pick]");if(x){const z=Number(x.dataset.pick);[...E.children].forEach(u=>u.classList.remove("ring-4","ring-emerald-200")),x.closest("div").classList.add("ring-4","ring-emerald-200");const m=s("btnFinish4"),c=B.find(u=>u.id===z);if(!y.has(z)){g(),m.disabled=!0,m.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",m.textContent="先按這筆的 🔍 看細節，再做選擇";return}c&&c.bad?(I(),m.disabled=!1,m.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",m.textContent="通關（領取 +40）→ 前往第 5 關",m.onclick=()=>{v(40,"level4_reward"),k(4),w(),N(5,4)}):(S(),m.disabled=!0,m.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",m.textContent="這筆不是『最可疑』，再看看其他放大鏡")}})}function At(e){const{openModal:t,bodyHTML:n,modalDeps:o,$:s,setText:l,state:a,spendEco:v,addEco:k,markCompleted:w,closeModal:N,sfxBad:H,sfxGood:g,sfxLevelUp:S,sfxEncourage:I}=e;t("第 5 關｜RWA 入門＋分類遊戲＋兌換","完成分類任務，再完成一次兌換，即可過關（+50）",o),n(`
    <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
      <div class="font-extrabold text-slate-900">RWA 超白話</div>
      <div class="mt-2 text-sm text-slate-700 leading-relaxed space-y-1">
        <div>① RWA 就是「把真實世界的東西（房子、債券、票券…）變成更好管理的數位憑證」。</div>
        <div>② 重點不是炫技，而是：更好查、可追蹤、流程更清楚。</div>
        <div>③ 看到陌生連結要你先簽名/先付費，一樣要先停下來查來源。</div>
      </div>
    </div>

    <div class="mt-4 p-4 rounded-2xl bg-white border border-slate-200">
      <div class="flex items-center justify-between">
        <div class="font-extrabold text-slate-900">分類小遊戲：這個算不算 RWA？</div>
        <div class="text-sm font-black text-slate-900">正確：<span id="rwaScore">0</span>/6</div>
      </div>
      <p class="text-sm text-slate-600 mt-2">每張卡選一次「是 RWA」或「不是 RWA」。答錯可以重選，答對才會鎖定。</p>
      <div id="rwaGrid" class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3"></div>
      <div id="rwaHint" class="mt-4 hidden p-4 rounded-2xl border"></div>
    </div>

    <div class="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
      <div class="font-extrabold text-slate-900">兌換任務</div>
      <div class="text-sm text-slate-700 mt-2">
        分類達標後（至少 5/6 正確），請完成一次兌換（示範扣幣）。<br/>
        需要 120 EcoCoin（環保杯）。
      </div>

      <button id="btnRedeem5" class="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed" disabled>
        分類未達標（需要 5/6）
      </button>

      <div id="redeemOut" class="mt-3 hidden p-4 rounded-2xl bg-white border border-amber-100 text-sm text-slate-700"></div>
    </div>

    <div class="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
      <button id="btnFinish5" class="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed" disabled>
        尚未完成
      </button>
    </div>
  `,s);const B=[{title:"房屋產權憑證（可查驗的數位憑證）",isRWA:!0,why:"真實世界的資產（房子）→ 做成可查驗的憑證。"},{title:"債券/票券的數位化憑證",isRWA:!0,why:"真實世界的金融票券 → 可追蹤的憑證。"},{title:"一張『很漂亮的 JPG 圖片』",isRWA:!1,why:"只是圖片，不代表真實世界資產。"},{title:"演唱會實體門票的可驗證電子票",isRWA:!0,why:"真實世界票券 → 可驗證、可防偽。"},{title:"陌生人發的『限時快領』連結",isRWA:!1,why:"這是情境/連結，不是資產憑證。"},{title:"商品保固/序號的可驗證憑證",isRWA:!0,why:"對應真實商品與權益 → 可驗證憑證。"}],E=s("rwaGrid"),y=s("rwaScore"),f=s("rwaHint"),r=s("btnRedeem5"),i=s("redeemOut"),x=s("btnFinish5"),z={rwaGrid:E,rwaScore:y,btnRedeem5:r,redeemOut:i,btnFinish5:x,rwaHint:f};for(const[R,$]of Object.entries(z))$||console.error("[stage5] missing element:",R);if(!E||!y||!r||!i||!x||!f)return;let m=Array(B.length).fill(!1),c=0;const u=5;let G=!1;function Y(R,$){f.classList.remove("hidden"),f.className="mt-4 p-4 rounded-2xl border "+(R?"bg-emerald-50 border-emerald-100":"bg-sky-50 border-sky-100"),f.innerHTML=`
      <div class="font-extrabold text-slate-900">${R?"答對":"提醒"}</div>
      <div class="text-sm text-slate-700 mt-2 leading-relaxed">${$}</div>
    `}function ne(){c>=u?(r.disabled=!1,r.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800",r.textContent="開始兌換（扣 120 EcoCoin）"):(r.disabled=!0,r.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",r.textContent=`分類未達標（需要 5/6，目前 ${c}/6）`)}function we(){x.disabled=!1,x.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",x.textContent="完成第 5 關（領取 +50）"}E.innerHTML="",B.forEach((R,$)=>{const j=document.createElement("div");j.className="p-4 rounded-2xl bg-slate-50 border border-slate-200",j.innerHTML=`
      <div class="font-extrabold text-slate-900">${R.title}</div>
      <div class="mt-3 grid grid-cols-2 gap-2">
        <button data-idx="${$}" data-ans="yes"
          class="px-3 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800">
          是 RWA
        </button>
        <button data-idx="${$}" data-ans="no"
          class="px-3 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-extrabold hover:bg-white">
          不是 RWA
        </button>
      </div>
      <div id="rwaDone${$}" class="mt-3 hidden text-sm font-extrabold"></div>
    `,E.appendChild(j)}),E.addEventListener("click",R=>{const $=R.target.closest("button[data-idx]");if(!$)return;const j=Number($.dataset.idx);if(m[j])return;const ke=$.dataset.ans==="yes"===B[j].isRWA,P=s("rwaDone"+j);P.classList.remove("hidden"),ke?(m[j]=!0,c+=1,g(),P.textContent="✅ 正確（已鎖定）",P.className="mt-3 text-sm font-extrabold text-emerald-700",$.parentElement.querySelectorAll("button").forEach(V=>{V.disabled=!0,V.classList.add("opacity-70","cursor-not-allowed")}),Y(!0,B[j].why)):(I(),P.textContent="❗ 再想一下（可以重新選）",P.className="mt-3 text-sm font-extrabold text-sky-700",Y(!1,B[j].why)),y.textContent=String(c),ne()}),ne(),r.addEventListener("click",()=>{if(i.classList.remove("hidden"),typeof v!="function"){console.error("[stage5] spendEco is not a function. Did you pass it in ctx?"),i.innerHTML="系統錯誤：spendEco 未注入。請檢查 ctx.spendEco。";return}if(!v(120,"level5_redeem_ecocup")){H(),i.innerHTML=`EcoCoin 不足（需要 120）。你目前是 <b>${a?.eco??"—"}</b>。回前面關卡拿幣再來。`;return}S(),i.innerHTML="兌換成功 ✅ 已扣除 120 EcoCoin。",G=!0,we()}),x.addEventListener("click",()=>{G&&(k(50,"level5_reward"),w(5),N())})}function Rt(e){const{state:t,openModal:n,bodyHTML:o,modalDeps:s,closeModal:l,markCompleted:a,openCelebrate:v,openCertificate:k,sfxGood:w,sfxYA:N}=e;if(![1,2,3,4,5].every(g=>t.completed[g])){alert("請先完成前面 1～5 關，才能開啟第 6 關表單。");return}n("第 6 關｜回饋表單","完成全部關卡後開放填寫",s),o(`
    <div class="space-y-4">
      <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-slate-800 text-sm leading-relaxed">
        恭喜您已完成前面所有關卡！請填寫以下 Google 表單。
      </div>

      <div class="rounded-2xl overflow-hidden border border-slate-200 bg-white">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeihBzxgjpQhE5p_0ldZhUYKwKyRGUtwtygwvXqrUx877G3ng/viewform?embedded=true"
          width="100%"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >載入中…</iframe>
      </div>

      <div class="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
        提醒：請在完成填寫並送出後，再按下方按鈕。
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          id="btnSurveyDone"
          class="px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700"
        >
          我已完成填寫
        </button>

        <button
          id="btnSurveyClose"
          class="px-4 py-3 rounded-2xl bg-slate-200 text-slate-700 font-extrabold hover:bg-slate-300"
        >
          先關閉
        </button>
      </div>
    </div>
    `,e.$),setTimeout(()=>{const g=document.getElementById("btnSurveyDone"),S=document.getElementById("btnSurveyClose");g?.addEventListener("click",()=>{a(6);try{w?.()}catch{}try{N?.()}catch{}l?.(),setTimeout(()=>{v?.(),k?.()},300)}),S?.addEventListener("click",()=>{l?.()})},0)}document.addEventListener("DOMContentLoaded",()=>{Et()});const p=e=>document.getElementById(e);function M(e,t){const n=p(e);n&&(n.textContent=t)}function xe(e){e&&(e.classList.remove("hidden"),e.classList.add("flex"))}function se(e){e&&(e.classList.add("hidden"),e.classList.remove("flex"))}const Ie={$:p,show:xe,hide:se,setText:M,stopTTS:ye};document.addEventListener("DOMContentLoaded",()=>{try{typeof Fe=="function"&&Fe()}catch{}});const $t="OASIS_LANG";let _e=localStorage.getItem($t)||"zh";const Le={zh:{reset:"重置進度",confirmReset:"確定要重置進度與 EcoCoin 嗎？（不會清除暱稱）",resetDone:"已重置 ✅"},en:{reset:"Reset Progress",confirmReset:"Reset progress and EcoCoin? (Nickname will NOT be cleared.)",resetDone:"Reset complete ✅"},ja:{reset:"進捗をリセット",confirmReset:"進捗とEcoCoinをリセットしますか？（ニックネームは消えません）",resetDone:"リセット完了 ✅"},ko:{reset:"진행 초기화",confirmReset:"진행도와 EcoCoin을 초기화할까요? (닉네임은 삭제되지 않습니다.)",resetDone:"초기화 완료 ✅"}};function Ze(e){return Le[_e]&&Le[_e][e]||Le.zh[e]||e}function Fe(){const e=document.getElementById("btnReset");e&&(e.textContent=Ze("reset"))}function Be(e){const t=(e||"").trim(),n=/[A-Za-z]/.test(t);return/[\u{1F300}-\u{1FAFF}]/u.test(t)?"🎭 氣氛製造者":n?"🧭 探索型冒險者":t.length<=2?"⚡ 行動派玩家":t.length>=5?"🧠 理性分析者":"🌿 穩健學習者"}function jt(){const e=Math.random().toString(16).slice(2,6).toUpperCase(),t=Math.random().toString(16).slice(2,6).toUpperCase();return`${e}-${t}`}const Ge="oasis_session_id_v1";function ve(){let e=localStorage.getItem(Ge);return e||(e=jt(),localStorage.setItem(Ge,e)),e}const Ae="oasis_nickname_v1";function he(){return(localStorage.getItem(Ae)||"").trim()}function Ot(e){localStorage.setItem(Ae,(e||"").trim())}function Re(){const e=he()||"冒險者",t=document.getElementById("topNick");t&&(t.textContent=e)}const ie=document.getElementById("nicknameInput"),Pe=document.getElementById("nickPreview"),Te=document.getElementById("nickErr");Te&&(Te.classList.add("hidden"),Te.textContent="");ie&&(ie.value="",ie.focus(),ie.addEventListener("input",()=>{Pe&&(Pe.textContent=ie.value.trim()||"冒險者")},{passive:!0}));function Qe(){const e=document.getElementById("startOverlay");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}function et(){const e=document.getElementById("startOverlay");if(!e)return;e.classList.remove("hidden"),e.classList.add("flex");const t=document.getElementById("nicknameInput"),n=document.getElementById("nickPreview"),o=document.getElementById("nickErr");o&&(o.classList.add("hidden"),o.textContent=""),n&&(n.textContent="冒險者"),t&&(t.value="",setTimeout(()=>t.focus(),60))}const tt="oasis_full_1to6_state_v8",be=()=>({eco:0,completed:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1},celebratedAllDone:!1}),h=zt();function zt(){try{const e=localStorage.getItem(tt);if(!e)return be();const t=JSON.parse(e);return!t||typeof t!="object"?be():(typeof t.eco!="number"&&(t.eco=0),(!t.completed||typeof t.completed!="object")&&(t.completed={}),[1,2,3,4,5,6].forEach(n=>{typeof t.completed[n]!="boolean"&&(t.completed[n]=!1)}),typeof t.celebratedAllDone!="boolean"&&(t.celebratedAllDone=!1),t)}catch{return be()}}function fe(){localStorage.setItem(tt,JSON.stringify(h))}function Dt(){const e=be();h.eco=e.eco,h.completed=e.completed,h.celebratedAllDone=e.celebratedAllDone,fe(),ge(h,M),Ne(h,p,M)}function Ht(){const e=he()||"冒險者";M("certNick",e),M("certTitle",Be(e));const t=typeof ve=="function"&&ve()||"—";M("certSession",t),M("certDate",new Date().toLocaleString("zh-TW")),M("certEco",String(h.eco));const o={1:"🌱",2:"🥤",3:"🛡️",4:"🔎",5:"🏠",6:"📝"},s=[1,2,3,4,5,6].map(l=>h.completed[l]?o[l]:"⬜").join(" ");M("certSBT",s)}function st(){Ht(),xe(p("certificateOverlay"))}function ot(){se(p("certificateOverlay"))}function Wt(e){const t=document.createElement("div");t.className="coin-pop text-amber-300",t.textContent=`+${e}`,document.body.appendChild(t),setTimeout(()=>t.remove(),1100)}function _t(e,t){h.eco+=e,ge(h,M),Wt(e),fe()}function Ft(e,t){return h.eco<e?!1:(h.eco-=e,ge(h,M),fe(),!0)}let L=null;function oe(){if(!L){const e=window.AudioContext||window.webkitAudioContext;e&&(L=new e)}L&&L.state==="suspended"&&L.resume().catch(()=>{})}function T(e=440,t=.08,n="sine",o=.06){if(oe(),!L)return;const s=L.createOscillator(),l=L.createGain();s.type=n,s.frequency.value=e,l.gain.value=o,s.connect(l),l.connect(L.destination),s.start(),s.stop(L.currentTime+t)}function Se(e=.12,t=.05){if(oe(),!L)return;const n=Math.floor(L.sampleRate*e),o=L.createBuffer(1,n,L.sampleRate),s=o.getChannelData(0);for(let v=0;v<n;v++)s[v]=(Math.random()*2-1)*(1-v/n);const l=L.createBufferSource();l.buffer=o;const a=L.createGain();a.gain.value=t,l.connect(a),a.connect(L.destination),l.start(),l.stop(L.currentTime+e)}function Gt(){T(520,.06,"square",.04),T(740,.05,"square",.03)}function Pt(){T(180,.1,"sawtooth",.05)}function nt(){T(660,.08,"sine",.06),T(880,.1,"sine",.05)}function lt(){T(523.25,.08,"sine",.05),setTimeout(()=>T(659.25,.08,"sine",.05),90),setTimeout(()=>T(783.99,.1,"sine",.055),180),setTimeout(()=>T(1046.5,.12,"sine",.06),280)}function dt(){T(392,.07,"sine",.04),setTimeout(()=>T(440,.07,"sine",.04),110),setTimeout(()=>T(523.25,.09,"sine",.045),220)}function qt(){T(659.25,.07,"sine",.05),setTimeout(()=>T(783.99,.07,"sine",.05),70),setTimeout(()=>T(987.77,.1,"sine",.055),140)}function Ut(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,n)=>setTimeout(()=>T(t,.1,"sine",.055),n*90)),setTimeout(()=>{T(1046.5,.14,"triangle",.06),T(1318.5,.14,"triangle",.05)},430),setTimeout(()=>Se(.1,.05),520),setTimeout(()=>Se(.1,.05),650),setTimeout(()=>Se(.14,.05),800)}let te=null;function Kt(){if(!("speechSynthesis"in window))return;const e=()=>{const t=window.speechSynthesis.getVoices()||[];te=t.find(n=>n.lang==="zh-TW")||t.find(n=>n.lang&&n.lang.startsWith("zh"))||null};e(),window.speechSynthesis.onvoiceschanged=e}function ye(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Yt(e,t={}){if(!("speechSynthesis"in window))return null;ye();const n=new SpeechSynthesisUtterance(e);return te&&(n.voice=te),n.lang=te&&te.lang?te.lang:"zh-TW",n.rate=t.rate??1.02,n.pitch=t.pitch??1,window.speechSynthesis.speak(n),n}Kt();function Vt(e){h.completed[e]||(h.completed[e]=!0,fe()),Ne(h,p,M),[1,2,3,4,5,6].every(n=>h.completed[n])&&!h.celebratedAllDone&&(h.celebratedAllDone=!0,fe(),Ut())}const Xt={1:["👛 錢包：你自己掌控授權，不要把密碼交出去。","🧾 NFT：重點是「來源/合約可驗證」，不是圖片像不像。","🏠 RWA：把真實世界資產/權益做成可驗證的數位憑證。"],2:["🥤 看『牌名』只是提示，真正要在意的是「來源/合約資訊」。","⚠️ 急迫字眼＋要你先付/先簽，是常見釣魚套路。"],3:["🛡️ 紅旗分類：急迫、縮網址、先付費、簽名/無限額 → 多半可疑。","✅ 真的活動通常能在官方社群/官網找到對應公告。"],4:["🔎 可疑交易：無限額、陌生網域、急迫字眼、要先付費。","🧠 放大鏡找出『藏在細節裡』的風險。"],5:["🏠 RWA：真實世界的東西用更好管理的方式搬到鏈上。","🎯 先分清楚是不是 RWA，再談兌換與使用。"]};function Jt(e){return`<ul class="list-disc pl-5 space-y-1">${(Xt[e]||["完成一關，學會一個概念。"]).map(n=>`<li>${n}</li>`).join("")}</ul>`}let ce=null,ue=null;function Zt(e,t){const n={2:"提示：第 2 關每張卡會寫是什麼牌，只有一張可驗證來源。",3:"提示：第 3 關是紅旗分類：安全 / 可疑。",4:"提示：第 4 關先用放大鏡看細節，再選最可疑的一筆。",5:"提示：快完成了！"};M("jumpTitle",`做得好，${je()}！前往第 ${e} 關！`),M("jumpSub","你可以看完再繼續"),p("jumpTip").textContent=n[e]||"一起把概念用遊戲學會。",p("jumpLearn").innerHTML=Jt(t||e-1),ce=()=>{se(p("jumpOverlay"));const o=at[`stage${e}`];o&&o()},xe(p("jumpOverlay")),ue&&clearTimeout(ue),ue=setTimeout(()=>{ce&&ce()},6e4)}p("jumpGo").addEventListener("click",()=>{ue&&clearTimeout(ue),ce&&ce()});let pe=null;function it(){const e=p("celebrateRain");e&&(e.innerHTML=""),pe&&(clearTimeout(pe),pe=null)}function Qt(){it(),xe(p("celebrateOverlay"));const e=document.getElementById("celebrateNick");e&&(e.textContent=je()),es(),pe=setTimeout(()=>$e(),5200)}function $e(){se(p("celebrateOverlay")),it()}p("celebrateClose").addEventListener("click",$e);p("celebrateOk").addEventListener("click",$e);p("certClose").addEventListener("click",ot);p("certOk").addEventListener("click",ot);p("certPrint").addEventListener("click",()=>{st(),window.print()});function es(){const e=p("celebrateRain"),t=["🥳","🎉","🎊","🎀","🎈","🎁","🧁"],n=46;for(let o=0;o<n;o++){const s=document.createElement("div");s.className="party-item",s.textContent=t[Math.floor(Math.random()*t.length)];const l=Math.random()*100,a=Math.random()*.9,v=2.8+Math.random()*2.4,k=18+Math.random()*20,w=(Math.random()*2-1)*120;s.style.left=l+"vw",s.style.animationDuration=v+"s",s.style.animationDelay=a+"s",s.style.fontSize=k+"px",s.animate([{transform:"translateY(-40px) translateX(0px) rotate(0deg) scale(.95)",opacity:0},{transform:`translateY(10vh) translateX(${w*.25}px) rotate(120deg) scale(1.0)`,opacity:1,offset:.25},{transform:`translateY(120vh) translateX(${w}px) rotate(520deg) scale(1.06)`,opacity:1}],{duration:v*1e3,delay:a*1e3,easing:"linear",fill:"forwards"}),e.appendChild(s),setTimeout(()=>s.remove(),(v+a)*1e3+200)}}const at={stage1:()=>Mt(ee),stage2:()=>Nt(ee),stage3:()=>It(ee),stage4:()=>Bt(ee),stage5:()=>At(ee),stage6:()=>Rt(ee)};function ts(){Xe("EcoCup｜手提友善設計","番外篇：用設計解決『不想帶』的真正原因",Ie),Je(`
    <div id="ecoCupWrap" class="space-y-4">
      <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-slate-800 text-sm leading-relaxed">
        多數人不帶環保杯不是不環保，而是<strong>拿著麻煩、占空間、怕漏</strong>。
        我們用 4 個原型把「願意手提」變成真的可以每天用。
      </div>

      <div class="grid grid-cols-1 gap-3">
        <div class="p-4 rounded-2xl bg-white border border-slate-200 eco-proto" style="animation-delay: 30ms">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg">🪢</div>
            <div class="font-extrabold text-slate-900">① 手提環杯蓋</div>
          </div>
          <div class="text-sm text-slate-700 mt-2 leading-relaxed">
            杯蓋外圈做柔軟提環（不勒手），走路也能提。<br/>
            <span class="text-slate-500">為什麼會願意帶：不占手、不用塞包包。</span>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-slate-200 eco-proto" style="animation-delay: 70ms">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-lg">🔒</div>
            <div class="font-extrabold text-slate-900">② 防漏＋單手開</div>
          </div>
          <div class="text-sm text-slate-700 mt-2 leading-relaxed">
            旋轉鎖＋矽膠密封，通勤晃也不滲；單手能開能喝。<br/>
            <span class="text-slate-500">為什麼會願意帶：漏一次就不想用，先把痛點解掉。</span>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-slate-200 eco-proto" style="animation-delay: 110ms">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-lg">🧩</div>
            <div class="font-extrabold text-slate-900">③ 可折疊／縮短杯身</div>
          </div>
          <div class="text-sm text-slate-700 mt-2 leading-relaxed">
            喝完可縮短高度或折疊收納，空杯也不占空間。<br/>
            <span class="text-slate-500">為什麼會願意帶：不用為了「空杯」多背一個東西。</span>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-slate-200 eco-proto" style="animation-delay: 150ms">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-lg">🧤</div>
            <div class="font-extrabold text-slate-900">④ 杯套多功能化</div>
          </div>
          <div class="text-sm text-slate-700 mt-2 leading-relaxed">
            杯套＝隔熱＋提把＋好看，讓它更像「願意拿出門」的隨身物。<br/>
            <span class="text-slate-500">為什麼會願意帶：手感＋外觀一好，就更像日常配件。</span>
          </div>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
        <div class="font-extrabold text-slate-900">💬 你最想要哪一種設計？（點一下）</div>
        <div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button class="eco-choice px-3 py-3 rounded-2xl font-extrabold text-slate-800" data-pick="1">① 手提環</button>
          <button class="eco-choice px-3 py-3 rounded-2xl font-extrabold text-slate-800" data-pick="2">② 防漏</button>
          <button class="eco-choice px-3 py-3 rounded-2xl font-extrabold text-slate-800" data-pick="3">③ 可折疊</button>
          <button class="eco-choice px-3 py-3 rounded-2xl font-extrabold text-slate-800" data-pick="4">④ 杯套</button>
        </div>
        <div id="ecoVoteMsg" class="mt-3 hidden p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-sm text-emerald-800"></div>
      </div>

      <div class="text-xs text-slate-500">
        報告口條小句：我們不是只喊環保，而是把「願意手提」拆成可落地的設計解法，降低行為門檻。
      </div>
    </div>
  `,p);const e=p("ecoCupWrap"),t=p("ecoVoteMsg"),n={1:"手提環杯蓋",2:"防漏＋單手開",3:"可折疊／縮短",4:"杯套多功能"};e.querySelectorAll(".eco-choice").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".eco-choice").forEach(s=>{s.classList.remove("selected","pulse")}),o.classList.add("selected","pulse"),setTimeout(()=>o.classList.remove("pulse"),320),t.classList.remove("hidden"),t.innerHTML=`你選的是 <b>${n[o.dataset.pick]}</b> ✅（這個原型最能解決「不想帶」的痛點之一）`;try{nt()}catch{}})})}Tt({$:p,stages:at,state:h});const rt=()=>Lt(Ie);St({$:p,t:Ze,stopTTS:ye,resetGameState:Dt,closeModal:rt,hide:se,ensureAudio:oe,openEcoCupIdea:ts});const ee={$:p,show:xe,hide:se,setText:M,openModal:Xe,bodyHTML:Je,modalDeps:Ie,closeModal:rt,setModalCleanup:Ct,state:h,addEco:_t,spendEco:Ft,markCompleted:Vt,jumpTo:Zt,ensureAudio:oe,sfxFlip:Gt,sfxBad:Pt,sfxGood:nt,sfxLevelUp:lt,sfxEncourage:dt,sfxYA:qt,stopTTS:ye,speakOnce:Yt,nick:je,openCelebrate:Qt,openCertificate:st},qe=document.getElementById("btnStartGame"),me=document.getElementById("nicknameInput"),Ue=document.getElementById("nickPreview"),Me=document.getElementById("nickErr");function ct(e){return(e||"").trim()}me&&Ue&&me.addEventListener("input",()=>{Ue.textContent=ct(me.value)||"冒險者"},{passive:!0});qe&&qe.addEventListener("click",()=>{oe();const e=ct(me?me.value:"");if(!e){Me&&(Me.classList.remove("hidden"),Me.textContent="請先輸入暱稱再開始～"),dt();return}Ot(e);const t=document.getElementById("playerTitle");t&&(t.textContent=Be(e));const n=document.getElementById("playerSession");n&&(n.textContent=ve()),Re(),Qe(),lt()});function je(){return he()||"冒險者"}const Ke=document.getElementById("btnChangeNick");Ke&&Ke.addEventListener("click",()=>{oe(),localStorage.removeItem(Ae),Re(),et()});ge(h,M);Ne(h,p,M);Re();const Ye=he();if(Ye){const e=p("playerTitle");e&&(e.textContent=Be(Ye));const t=p("playerSession");t&&(t.textContent=ve()),Qe()}else et();
