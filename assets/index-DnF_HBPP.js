(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const Ie="oasis_nick",Ne="oasis_session";function st(){return Math.random().toString(16).slice(2,10).toUpperCase()}function ot(){let e=localStorage.getItem(Ne);return e||(e=st(),localStorage.setItem(Ne,e)),e}function oe(){return(localStorage.getItem(Ie)||"").trim()}function nt(e){const t=(e||"").trim();return localStorage.setItem(Ie,t),t}function Oe(){return ot()}function ze(){const e=oe();return e&&e.length>=8?"✨ 進階冒險者":"🌱 新手冒險者"}function Y(e,t={}){typeof window.gtag=="function"&&window.gtag("event",e,t)}function O(e){return document.getElementById(e)}function Ae(e){const t="oasis_game_start_tracked";sessionStorage.getItem(t)||(sessionStorage.setItem(t,"1"),Y("game_start",{entry_type:e}))}function Re(){const e=oe()||"冒險者",t=Oe(),n=ze(),o=O("topNick"),s=O("playerSession"),l=O("playerTitle");o&&(o.textContent=e),s&&(s.textContent=t),l&&(l.textContent=n);const i=O("certNick"),g=O("certSession"),L=O("certTitle");i&&(i.textContent=e),g&&(g.textContent=t),L&&(L.textContent=n);const k=O("celebrateNick");k&&(k.textContent=e)}function Be(){const e=O("startOverlay");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}function _e(){const e=O("startOverlay");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}function lt(){const e=O("nicknameInput"),t=O("nickPreview"),n=O("btnStartGame"),o=O("nickErr"),s=O("btnChangeNick"),l=oe();l?(_e(),Ae("auto_resume")):Be(),Re(),e&&t&&(e.value=l||"",t.textContent=e.value.trim()||"冒險者",e.addEventListener("input",()=>{t.textContent=e.value.trim()||"冒險者",o&&o.classList.add("hidden")})),n&&n.addEventListener("click",()=>{const i=(e?.value||"").trim();if(!i){o&&(o.textContent="請輸入暱稱再開始～",o.classList.remove("hidden"));return}nt(i),_e(),Re(),Ae("manual_start")}),s&&s.addEventListener("click",()=>{Be(),e&&(e.value=oe()),t&&(t.textContent=oe()||"冒險者"),o&&o.classList.add("hidden"),e?.focus?.()})}function be(e,t){t("ecoCoin",String(e.eco))}function Q(e,t,n,o){const s=e(t);s&&(s.textContent=n,s.className=`text-xs px-2 py-1 rounded-full font-bold ${o}`)}function Z(e,t,n,o){const s=e(t);s&&(n?(s.className="p-2 rounded-xl bg-emerald-600 text-center text-xs font-black text-white",s.textContent=o):(s.className="p-2 rounded-xl bg-slate-100 text-center text-xs font-black text-slate-500",s.textContent=t.replace("sbt","")))}function ee(e,t,n,o){const s=e("lv"+t);s&&(s.textContent=o,n?(s.className="mt-3 w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",s.disabled=!1):(s.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",s.disabled=!0))}function Ce(e,t,n){const o=e.completed,s=[1,2,3,4,5].every(i=>o[i]);Q(t,"badge1",o[1]?"已完成":"未完成",o[1]?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-slate-100 text-slate-600"),Q(t,"badge2",o[2]?"已完成":o[1]?"可開始":"未解鎖",o[2]?"bg-emerald-50 text-emerald-700 border border-emerald-100":o[1]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),Q(t,"badge3",o[3]?"已完成":o[2]?"可開始":"未解鎖",o[3]?"bg-emerald-50 text-emerald-700 border border-emerald-100":o[2]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),Q(t,"badge4",o[4]?"已完成":o[3]?"可開始":"未解鎖",o[4]?"bg-emerald-50 text-emerald-700 border border-emerald-100":o[3]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),Q(t,"badge5",o[5]?"已完成":o[4]?"可開始":"未解鎖",o[5]?"bg-emerald-50 text-emerald-700 border border-emerald-100":o[4]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),Q(t,"badge6",o[6]?"已完成":s?"可開始":"未解鎖",o[6]?"bg-emerald-50 text-emerald-700 border border-emerald-100":s?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),ee(t,1,!0,o[1]?"已完成（可重玩）":"開始第 1 關"),ee(t,2,o[1],o[2]?"已完成（可重玩）":"開始第 2 關"),ee(t,3,o[2],o[3]?"已完成（可重玩）":"開始第 3 關"),ee(t,4,o[3],o[4]?"已完成（可重玩）":"開始第 4 關"),ee(t,5,o[4],o[5]?"已完成（可重玩）":"開始第 5 關"),ee(t,6,s,o[6]?"已完成（可重填）":"開始第 6 關");const l=[1,2,3,4,5,6].filter(i=>o[i]).length;n("progressText",`${l}/6`),Z(t,"sbt1",o[1],"🌱"),Z(t,"sbt2",o[2],"🥤"),Z(t,"sbt3",o[3],"🛡️"),Z(t,"sbt4",o[4],"🔎"),Z(t,"sbt5",o[5],"🏠"),Z(t,"sbt6",o[6],"📝")}let de=null;function at(e){de=typeof e=="function"?e:null}function De(e,t,n){const{$:o,show:s,setText:l}=n;de=null,l("modalTitle",e),l("modalSubtitle",t||"");const i=o("modalBody");i&&(i.innerHTML=""),s(o("modal"))}function rt(e){const{$:t,hide:n,stopTTS:o}=e;try{typeof de=="function"&&de()}catch{}de=null,n(t("modal")),o()}function He(e,t){const n=t("modalBody");n&&(n.innerHTML=e)}function dt(e){const{$:t,stages:n,state:o}=e;t("lv1")?.addEventListener("click",()=>n.stage1()),t("lv2")?.addEventListener("click",()=>{o.completed[1]&&n.stage2()}),t("lv3")?.addEventListener("click",()=>{o.completed[2]&&n.stage3()}),t("lv4")?.addEventListener("click",()=>{o.completed[3]&&n.stage4()}),t("lv5")?.addEventListener("click",()=>{o.completed[4]&&n.stage5()}),t("lv6")?.addEventListener("click",()=>{[1,2,3,4,5].every(l=>o.completed[l])&&n.stage6()})}function it(e){const{$:t,t:n,stopTTS:o,resetGameState:s,closeModal:l,hide:i,ensureAudio:g,openEcoCupIdea:L}=e;t("modalClose")?.addEventListener("click",A=>{A.preventDefault(),A.stopPropagation(),l()}),t("btnReset")?.addEventListener("click",()=>{if(o(),!!confirm(n("confirmReset"))){s();try{l()}catch{}i(t("jumpOverlay")),i(t("celebrateOverlay")),i(t("certificateOverlay")),i(t("zoomModal")),alert(n("resetDone"))}});const k=document.getElementById("btnEcoCupIdea");k&&k.addEventListener("click",L),window.addEventListener("pointerdown",()=>{g()},{once:!1})}function ct(e){const{$:t,show:n,hide:o,setText:s,openModal:l,bodyHTML:i,modalDeps:g,closeModal:L,setModalCleanup:k,addEco:A,markCompleted:D,jumpTo:y,ensureAudio:R,sfxGood:M,sfxEncourage:T,sfxLevelUp:w,stopTTS:v,speakOnce:m,nick:d}=e;l("第 1 關｜先建立知識認知","完成 3 張卡（每張答一題）＋小劇場播放完＋情境答對 → 前往第 2 關（+80）",g);let r=!0;const x=[{icon:"👛",title:"加密錢包是什麼？",core:"錢包就像你的數位皮夾：你自己保管，決定要不要授權。",detail:["你可以把錢包想成「鑰匙＋保險箱」。鑰匙（私鑰/助記詞）只給自己，不給任何人。","網站跳出簽名/授權視窗時，你是在『同意做一件事』，不是『只是登入』。","安全原則：看不懂就先拒絕，去官方確認再操作。"].join(`
`),quiz:{q:"哪一句最正確？",a:[{t:"錢包密碼可以交給網站幫我保管",ok:!1},{t:"錢包要自己保管，授權要看清楚",ok:!0}]}},{icon:"🧾",title:"NFT 是什麼？",core:"NFT 不是圖片本身，而是「可驗證來源」的數位憑證。",detail:["NFT 像「帶序號的證明書」。重點是來源/合約能不能驗證。","圖片很像不代表是真的，釣魚常用『一樣的圖』騙你點連結。","安全原則：先看官方來源、合約、網域；不要被『限時』催促。"].join(`
`),quiz:{q:"判斷 NFT 真假的重點是？",a:[{t:"圖片好不好看",ok:!1},{t:"來源/合約能不能驗證",ok:!0}]}},{icon:"🏠",title:"RWA 是什麼？",core:"RWA 是把真實世界的資產/權益，做成可驗證的數位憑證。",detail:["RWA 可理解為：把『房屋、票券、保固、債券』等真實世界權益，變成更好查驗與管理的憑證。","它不是要你衝動投資，而是讓流程更清楚、可追蹤。","安全原則：遇到要你『先付費/先簽名』的陌生連結，一樣先停下來查來源。"].join(`
`),quiz:{q:"哪個比較像 RWA？",a:[{t:"可驗證的電子門票憑證",ok:!0},{t:"陌生人發的限時快領連結",ok:!1}]}}],B=d(),f=[{who:"koko",text:`美美，${B} 看到一個『限時快領』連結，點進去跳出錢包視窗。`},{who:"meimei",text:`${B} 先停。它要你同意什麼？有沒有寫無限額？`},{who:"koko",text:"有耶，寫無限額授權，還說比較方便。"},{who:"meimei",text:"那就先拒絕。先關掉、去官方確認再說。"},{who:"koko",text:`好！${B} 懂了：看不懂就先不要簽。`}];i(`
    <div class="mt-2 p-4 rounded-2xl blkA">
      <div class="flex items-center justify-between gap-2">
        <div class="font-extrabold text-slate-900">區塊 A｜三張知識卡（每張答一題確認理解）</div>
        <div class="text-xs font-black text-slate-700 bg-white/70 border border-white/80 px-3 py-2 rounded-xl">
          已完成：<span id="cardOK">0</span>/3
        </div>
      </div>

      <div class="mt-3 space-y-3" id="cardsWrap">
        ${x.map((a,b)=>`
          <div id="s1Card${b}" class="p-4 rounded-2xl teach-card card-hover">
            <div class="teach-inner">
              <div class="flex items-center gap-2">
                <button type="button" class="voice-mini s1VoiceMini" title="語音開關（預設開）">🔊</button>
                <div class="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg">${a.icon}</div>
                <div class="font-extrabold text-slate-900">${a.title}</div>
                <div id="doneDot${b}" class="ml-auto hidden text-sm font-black text-emerald-700">✅ 已懂</div>
              </div>

              <div class="text-sm text-slate-800 mt-3 leading-relaxed">
                <span class="font-extrabold text-slate-900">一句話：</span>${a.core}
              </div>

              <div class="mt-3 flex justify-center">
                <button id="more${b}" class="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold hover:bg-slate-50 shadow-soft text-sm">
                  點我更了解
                </button>
              </div>

              <div class="mt-4 p-3 rounded-2xl bg-white border border-slate-200">
                <div class="text-sm font-extrabold text-slate-900">${a.quiz.q}</div>
                <div class="mt-2 grid gap-2">
                  ${a.quiz.a.map((_,F)=>`
                    <button data-ci="${b}" data-ai="${F}"
                      class="w-full text-left p-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white font-semibold text-slate-800">
                      ${_.t}
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
  `,t);let c=[!1,!1,!1],u=!1,G=!1,V=()=>{};k(()=>{try{V()}catch{}try{v()}catch{}});function le(){document.querySelectorAll(".s1VoiceMini").forEach(a=>{a.textContent=r?"🔊":"🔇",a.setAttribute("aria-pressed",r?"true":"false")})}function he(){if(R(),r=!r,r)try{window.speechSynthesis?.resume()}catch{}else{v();try{window.speechSynthesis?.pause()}catch{}}le()}document.querySelectorAll(".s1VoiceMini").forEach(a=>{a.addEventListener("click",b=>{b.preventDefault(),b.stopPropagation(),he()})}),le();function j(){s("cardOK",String(c.filter(Boolean).length));const a=t("btnGo2");a&&(a.disabled=!0,a.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",a.textContent="尚未解鎖",a.onclick=null,c.every(Boolean)&&u&&G&&(a.disabled=!1,a.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",a.textContent="領取獎勵並前往第 2 關（+80）",a.onclick=()=>{A(80,"level1_reward"),D(1),L(),y(2,1)}))}function $(a){t("s1InnerTitle").textContent=x[a].title+"｜更詳細說明",t("s1InnerText").textContent=x[a].detail,n(t("s1InnerModal")),r&&m(x[a].core,{rate:1.02,pitch:1.02})}function I(){o(t("s1InnerModal")),v()}t("s1InnerClose").onclick=I,t("s1InnerOk").onclick=I,t("s1InnerModal").addEventListener("click",a=>{(a.target===t("s1InnerModal")||a.target.classList.contains("inner-modal-backdrop"))&&I()}),x.forEach((a,b)=>{const _=t("s1Card"+b),F=t("more"+b);_.addEventListener("mouseenter",()=>{r&&m(x[b].core,{rate:1.02,pitch:1.02})}),_.addEventListener("mouseleave",v),F.addEventListener("focus",()=>{r&&m(x[b].core,{rate:1.02,pitch:1.02})}),F.addEventListener("blur",v),F.addEventListener("click",()=>{v(),$(b)})}),t("cardsWrap").addEventListener("click",a=>{const b=a.target.closest("button[data-ci]");if(!b)return;const _=Number(b.dataset.ci),F=Number(b.dataset.ai);if(c[_])return;const tt=x[_].quiz.a[F],re=t("quizMsg"+_);re.classList.remove("hidden"),tt.ok?(c[_]=!0,t("doneDot"+_).classList.remove("hidden"),re.className="mt-3 p-3 rounded-2xl border text-sm bg-emerald-50 border-emerald-100 text-emerald-800",re.innerHTML="<b>✅ 正確！</b> 你已理解這張卡的重點。",M(),j()):(re.className="mt-3 p-3 rounded-2xl border text-sm bg-sky-50 border-sky-100 text-sky-800",re.innerHTML="<b>再想一下</b>：你可以點「點我更了解」看更詳細說明。",T())});const ye=t("actorMei"),q=t("actorKo"),X=t("meiBubble"),we=t("koBubble");function C(a,b){a==="meimei"?ye.classList.toggle("talking",b):q.classList.toggle("talking",b)}let P=0,H=!1,z=!1,U=null,W=!1,J=null;function Xe(){X.textContent="(等待開始)",we.textContent="(等待開始)",C("meimei",!1),C("koko",!1)}function ae(){U&&(clearTimeout(U),U=null)}V=function(){H=!1,z=!1,W=!1,J=null,ae(),v(),C("meimei",!1),C("koko",!1)};function Je(){H=!1,z=!1,W=!1,J=null,ae(),C("meimei",!1),C("koko",!1),u=!0,j()}function Qe(a){const b=a.who==="meimei";J=a.who,b?(X.textContent=a.text,we.textContent=""):(we.textContent=a.text,X.textContent=""),C("meimei",r&&b),C("koko",r&&!b)}function K(){if(!H||z)return;if(P>=f.length){Je();return}const a=f[P];if(Qe(a),ae(),W=!0,!r){C("meimei",!1),C("koko",!1),U=setTimeout(()=>{!H||z||(W=!1,P++,K())},900);return}v();const b=a.who==="meimei",_=m(a.text,{pitch:b?1.15:.95,rate:1.02});if(!_){C("meimei",!1),C("koko",!1),U=setTimeout(()=>{!H||z||(W=!1,P++,K())},900);return}const F=()=>{H&&(W=!1,C("meimei",!1),C("koko",!1),P++,z||(U=setTimeout(()=>K(),160)))};_.onend=F,_.onerror=F}function Ze(){if(!(H&&!z)){if(z){if(z=!1,r){try{if(window.speechSynthesis&&window.speechSynthesis.paused){window.speechSynthesis.resume(),W&&J&&(C("meimei",J==="meimei"),C("koko",J==="koko"));return}}catch{}W||K();return}W?(ae(),U=setTimeout(()=>{!H||z||(W=!1,P++,K())},600)):K();return}V(),H=!0,z=!1,P=0,Xe(),K()}}function et(){if(!(!H||z)&&(z=!0,ae(),C("meimei",!1),C("koko",!1),r))try{window.speechSynthesis&&window.speechSynthesis.pause()}catch{}}t("dramaStart").onclick=()=>{R(),Ze()},t("dramaPause").onclick=et;const ke=t("s1feedback");function Me(a,b,_){ke.classList.remove("hidden"),ke.className="mt-4 p-4 rounded-2xl border "+(a?"bg-emerald-50 border-emerald-100":"bg-sky-50 border-sky-100"),ke.innerHTML=`
      <div class="font-extrabold text-slate-900 text-lg">${b}</div>
      <div class="text-base text-slate-700 mt-2 leading-relaxed">${_}</div>
    `}t("s1op0").onclick=()=>{Me(!1,"再試一次","看到無限額授權，先不要同意。先關掉、查來源，再決定。"),T(),G=!1,j()},t("s1op1").onclick=()=>{Me(!0,"做得好！","你先拒絕並確認來源，是最安全的做法。"),w(),G=!0,j()},j()}function ut(e){const{openModal:t,bodyHTML:n,modalDeps:o,$:s,show:l,addEco:i,markCompleted:g,closeModal:L,jumpTo:k,sfxFlip:A,sfxBad:D}=e;t("第 2 關｜NFT 辨識翻牌","按「發牌」→ 卡片一張一張出現。找出可驗證來源那張（+60）",o),n(`
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
  `,s);let y=3,R=!1;const M=s("tries2"),T=s("gridWrap2"),w=s("grid2"),v=s("msg2");function m(f){y=f,M.textContent=String(f)}const d=[{title:"限時快領牌",hint:"用限時製造急迫",isReal:!1},{title:"先付手續費牌",hint:"要你先付小額費用",isReal:!1},{title:"只有圖片牌",hint:"只有圖片，沒有來源",isReal:!1},{title:"縮網址牌",hint:"縮網址/陌生網址",isReal:!1},{title:"先簽才給看牌",hint:"要先簽名/先授權",isReal:!1},{title:"可驗證來源牌",hint:"官方來源/合約可驗證",isReal:!0}];function r(f){const c=f.slice();for(let u=c.length-1;u>0;u--){const G=Math.floor(Math.random()*(u+1));[c[u],c[G]]=[c[G],c[u]]}return c}function x(f,c){const u=document.createElement("button");return u.type="button",u.className="p-4 rounded-2xl bg-white border border-slate-200 text-left card-hover deal-enter",u.dataset.revealed="0",u.innerHTML=`
      <div class="text-xs font-bold text-slate-500">Card #${f+1}</div>
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
    `,u.addEventListener("click",()=>{R&&(y<=0||u.dataset.revealed!=="1"&&(u.dataset.revealed="1",u.disabled=!0,A(),c.isReal?(R=!1,u.innerHTML=`
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
        `,v.innerHTML='<span class="font-black text-emerald-700">成功！</span>你找到可驗證來源牌（+60）。',i(60,"level2_nft_win"),g(2),m(0),setTimeout(()=>{L(),k(3,2)},450)):(u.innerHTML=`
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
        `,m(y-1),D(),v.innerHTML=y>0?`<span class="font-black text-rose-700">不是可驗證來源。</span>再找一次（剩 ${y} 次）。`:'<span class="font-black text-slate-900">機會用完。</span>再按「發牌」重新開始。',y<=0&&(R=!1))))}),u}function B(){const f=r(d),c=[];for(let u=0;u<6;u++)c.push(x(u,f[u]));return c}s("btnDeal2").onclick=()=>{l(T),m(3),R=!0,v.textContent="卡片會一張一張出現，找出「可驗證來源牌」。";const f=B();w.innerHTML="";let c=0;const u=()=>{c>=f.length||(A(),w.appendChild(f[c]),c++,setTimeout(u,220))};u()}}function ft(e){const{openModal:t,bodyHTML:n,modalDeps:o,$:s,addEco:l,markCompleted:i,closeModal:g,jumpTo:L,sfxGood:k,sfxBad:A,sfxEncourage:D}=e;t("第 3 關｜反詐紅旗分類（遊戲）","把卡片分類到「安全 / 可疑」。全部分類完成即可過關（+80）。",o);const y=[{title:"官方活動頁面（可在官方社群找到同樣公告）",correct:"safe",why:"✅ 能在官方社群/官網找到同樣公告，來源一致，風險較低。"},{title:"縮網址連結，要求你立刻簽名才能領",correct:"sus",why:"⚠️ 縮網址看不到真正網域＋要你立刻簽名，是常見釣魚套路。"},{title:"授權內容清楚、且只需要限額（非無限額）",correct:"safe",why:"✅ 授權範圍清楚且有限額，風險明顯比無限額低。"},{title:"跳出視窗寫「Approve unlimited spend（無限額）」",correct:"sus",why:"⚠️ 無限額授權風險最高，可能被直接拿走資產操作權限。"},{title:"要你先付小額手續費才給你看獎勵/領空投",correct:"sus",why:"⚠️ 先收小額費用常是詐騙開頭，容易越陷越深。"},{title:"網址與你平常使用的官方網域一致（無奇怪拼字）",correct:"safe",why:"✅ 網域一致且無怪拼字，相對安全（仍建議再對照官方公告）。"}];n(`
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
  `,s);const R=s("s3List");let M=Array(y.length).fill(!1);function T(m){return m==="done"?'<span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">✅ 已完成</span>':'<span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">尚未分類</span>'}function w(){if(R.innerHTML="",y.forEach((m,d)=>{const r=document.createElement("div");r.className="p-4 rounded-2xl bg-white border border-slate-200",r.innerHTML=`
        <div class="flex items-start justify-between gap-3">
          <div class="font-extrabold text-slate-900">${m.title}</div>
          <div id="s3Badge${d}">${T(M[d]?"done":"new")}</div>
        </div>

        <div class="mt-3 grid grid-cols-2 gap-3">
          <button data-idx="${d}" data-pick="safe"
            class="w-full py-4 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700 flex items-center justify-center gap-2">
            <span class="text-lg">✅</span><span class="text-lg">安全</span>
          </button>
          <button data-idx="${d}" data-pick="sus"
            class="w-full py-4 rounded-2xl bg-rose-600 text-white font-extrabold hover:bg-rose-700 flex items-center justify-center gap-2">
            <span class="text-lg">⚠️</span><span class="text-lg">可疑</span>
          </button>
        </div>

        <div id="s3Hint${d}" class="mt-3 hidden p-4 rounded-2xl border text-sm"></div>
      `,R.appendChild(r),M[d]&&r.querySelectorAll("button[data-idx]").forEach(x=>{x.disabled=!0,x.className+=" opacity-70 cursor-not-allowed"})}),M.every(Boolean)){const m=s("btnFinish3");m.disabled=!1,m.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",m.textContent="通關（領取 +80）→ 前往第 4 關",m.onclick=()=>{l(80,"level3_reward"),i(3),g(),L(4,3)}}}function v(m,d,r){const x=s("s3Hint"+m);x.classList.remove("hidden"),x.className="mt-3 p-4 rounded-2xl border text-sm "+(d?"bg-emerald-50 border-emerald-100 text-emerald-800":"bg-sky-50 border-sky-100 text-sky-800"),x.innerHTML=d?`<b>✅ 正確！</b> ${r}`:`<b>再想一下：</b> ${r}`}R.addEventListener("click",m=>{const d=m.target.closest("button[data-idx]");if(!d)return;const r=Number(d.dataset.idx);if(M[r])return;d.dataset.pick===y[r].correct?(M[r]=!0,k(),w(),v(r,!0,y[r].why)):(D(),v(r,!1,y[r].why))}),s("s3Reset").onclick=()=>{M=Array(y.length).fill(!1),A(),w()},w()}function mt(e){const{openModal:t,bodyHTML:n,modalDeps:o,$:s,show:l,hide:i,addEco:g,markCompleted:L,closeModal:k,jumpTo:A,sfxGood:D,sfxBad:y,sfxEncourage:R,sfxLevelUp:M}=e;t("第 4 關｜可疑交易偵測（放大鏡）","先按 🔍 看細節，再選出『最可疑』的一筆（+40）",o);const T=[{id:1,title:"EcoCoin 兌換：環保杯",msg:"你主動兌換 → 扣 120 EcoCoin。",zoomTitle:"Tx #1 放大鏡",zoomBody:`這筆是你主動操作，金額固定、流程合理。
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
  `,s);const w=s("s4Grid");let v=new Set;function m(d){s("zoomTitle").textContent=d.zoomTitle,s("zoomSub").textContent="可疑細節（看完再選）",s("zoomBody").textContent=d.zoomBody,l(s("zoomModal")),v.add(d.id),D()}s("zoomClose").onclick=()=>i(s("zoomModal")),s("zoomOk").onclick=()=>i(s("zoomModal")),s("zoomModal").addEventListener("click",d=>{(d.target===s("zoomModal")||d.target.classList.contains("modal-backdrop"))&&i(s("zoomModal"))}),T.forEach(d=>{const r=document.createElement("div");r.className="p-4 rounded-2xl bg-white border border-slate-200 card-hover",r.innerHTML=`
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="text-xs font-bold text-slate-500">Tx #${d.id}</div>
          <div class="mt-1 font-extrabold text-slate-900">${d.title}</div>
          <div class="mt-2 text-sm text-slate-700">${d.msg}</div>
        </div>
        <button class="w-12 h-12 rounded-2xl bg-slate-900 text-white font-black hover:bg-slate-800 text-xl shadow-soft" data-zoom="${d.id}" title="放大鏡">🔍</button>
      </div>
      <button class="mt-3 w-full px-3 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-extrabold hover:bg-white" data-pick="${d.id}">
        選這筆
      </button>
    `,w.appendChild(r)}),w.addEventListener("click",d=>{const r=d.target.closest("button[data-zoom]");if(r){const B=Number(r.dataset.zoom),f=T.find(c=>c.id===B);f&&m(f);return}const x=d.target.closest("button[data-pick]");if(x){const B=Number(x.dataset.pick);[...w.children].forEach(u=>u.classList.remove("ring-4","ring-emerald-200")),x.closest("div").classList.add("ring-4","ring-emerald-200");const f=s("btnFinish4"),c=T.find(u=>u.id===B);if(!v.has(B)){y(),f.disabled=!0,f.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",f.textContent="先按這筆的 🔍 看細節，再做選擇";return}c&&c.bad?(M(),f.disabled=!1,f.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",f.textContent="通關（領取 +40）→ 前往第 5 關",f.onclick=()=>{g(40,"level4_reward"),L(4),k(),A(5,4)}):(R(),f.disabled=!0,f.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",f.textContent="這筆不是『最可疑』，再看看其他放大鏡")}})}function xt(e){const{openModal:t,bodyHTML:n,modalDeps:o,$:s,setText:l,state:i,spendEco:g,addEco:L,markCompleted:k,closeModal:A,sfxBad:D,sfxGood:y,sfxLevelUp:R,sfxEncourage:M}=e;t("第 5 關｜RWA 入門＋分類遊戲＋兌換","完成分類任務，再完成一次兌換，即可過關（+50）",o),n(`
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
  `,s);const T=[{title:"房屋產權憑證（可查驗的數位憑證）",isRWA:!0,why:"真實世界的資產（房子）→ 做成可查驗的憑證。"},{title:"債券/票券的數位化憑證",isRWA:!0,why:"真實世界的金融票券 → 可追蹤的憑證。"},{title:"一張『很漂亮的 JPG 圖片』",isRWA:!1,why:"只是圖片，不代表真實世界資產。"},{title:"演唱會實體門票的可驗證電子票",isRWA:!0,why:"真實世界票券 → 可驗證、可防偽。"},{title:"陌生人發的『限時快領』連結",isRWA:!1,why:"這是情境/連結，不是資產憑證。"},{title:"商品保固/序號的可驗證憑證",isRWA:!0,why:"對應真實商品與權益 → 可驗證憑證。"}],w=s("rwaGrid"),v=s("rwaScore"),m=s("rwaHint"),d=s("btnRedeem5"),r=s("redeemOut"),x=s("btnFinish5"),B={rwaGrid:w,rwaScore:v,btnRedeem5:d,redeemOut:r,btnFinish5:x,rwaHint:m};for(const[j,$]of Object.entries(B))$||console.error("[stage5] missing element:",j);if(!w||!v||!d||!r||!x||!m)return;let f=Array(T.length).fill(!1),c=0;const u=5;let G=!1;function V(j,$){m.classList.remove("hidden"),m.className="mt-4 p-4 rounded-2xl border "+(j?"bg-emerald-50 border-emerald-100":"bg-sky-50 border-sky-100"),m.innerHTML=`
      <div class="font-extrabold text-slate-900">${j?"答對":"提醒"}</div>
      <div class="text-sm text-slate-700 mt-2 leading-relaxed">${$}</div>
    `}function le(){c>=u?(d.disabled=!1,d.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800",d.textContent="開始兌換（扣 120 EcoCoin）"):(d.disabled=!0,d.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",d.textContent=`分類未達標（需要 5/6，目前 ${c}/6）`)}function he(){x.disabled=!1,x.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",x.textContent="完成第 5 關（領取 +50）"}w.innerHTML="",T.forEach((j,$)=>{const I=document.createElement("div");I.className="p-4 rounded-2xl bg-slate-50 border border-slate-200",I.innerHTML=`
      <div class="font-extrabold text-slate-900">${j.title}</div>
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
    `,w.appendChild(I)}),w.addEventListener("click",j=>{const $=j.target.closest("button[data-idx]");if(!$)return;const I=Number($.dataset.idx);if(f[I])return;const ye=$.dataset.ans==="yes"===T[I].isRWA,q=s("rwaDone"+I);q.classList.remove("hidden"),ye?(f[I]=!0,c+=1,y(),q.textContent="✅ 正確（已鎖定）",q.className="mt-3 text-sm font-extrabold text-emerald-700",$.parentElement.querySelectorAll("button").forEach(X=>{X.disabled=!0,X.classList.add("opacity-70","cursor-not-allowed")}),V(!0,T[I].why)):(M(),q.textContent="❗ 再想一下（可以重新選）",q.className="mt-3 text-sm font-extrabold text-sky-700",V(!1,T[I].why)),v.textContent=String(c),le()}),le(),d.addEventListener("click",()=>{if(r.classList.remove("hidden"),typeof g!="function"){console.error("[stage5] spendEco is not a function. Did you pass it in ctx?"),r.innerHTML="系統錯誤：spendEco 未注入。請檢查 ctx.spendEco。";return}if(!g(120,"level5_redeem_ecocup")){D(),r.innerHTML=`EcoCoin 不足（需要 120）。你目前是 <b>${i?.eco??"—"}</b>。回前面關卡拿幣再來。`;return}R(),r.innerHTML="兌換成功 ✅ 已扣除 120 EcoCoin。",G=!0,he()}),x.addEventListener("click",()=>{G&&(L(50,"level5_reward"),k(5),A())})}function bt(e){const{state:t,openModal:n,bodyHTML:o,modalDeps:s,closeModal:l,markCompleted:i,openCelebrate:g,openCertificate:L,sfxGood:k,sfxYA:A,setModalCleanup:D,$:y}=e;if(![1,2,3,4,5].every(v=>t.completed[v])){alert("請先完成前面 1～5 關，才能開啟第 6 關表單。");return}let M=!1,T=!1;const w=()=>{M||T||(T=!0,Y("survey_close",{level:6,survey_type:"google_form"}))};n("第 6 關｜回饋表單","完成全部關卡後開放填寫",s),Y("survey_open",{level:6,survey_type:"google_form"}),o(`
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
    `,y),setTimeout(()=>{const v=document.getElementById("btnSurveyDone"),m=document.getElementById("btnSurveyClose"),d=y("modalClose"),r=()=>{M=!0,Y("survey_complete",{level:6,survey_type:"google_form"}),i(6);try{k?.()}catch{}try{A?.()}catch{}l?.(),setTimeout(()=>{g?.(),L?.()},300)},x=()=>{w(),l?.()},B=()=>{w()};v?.addEventListener("click",r),m?.addEventListener("click",x),d?.addEventListener("click",B),D?.(()=>{v?.removeEventListener("click",r),m?.removeEventListener("click",x),d?.removeEventListener("click",B)})},0)}document.addEventListener("DOMContentLoaded",()=>{lt()});const p=e=>document.getElementById(e);function N(e,t){const n=p(e);n&&(n.textContent=t)}function fe(e){e&&(e.classList.remove("hidden"),e.classList.add("flex"))}function ne(e){e&&(e.classList.add("hidden"),e.classList.remove("flex"))}document.addEventListener("DOMContentLoaded",()=>{try{typeof $e=="function"&&$e()}catch{}});const pt="OASIS_LANG";let je=localStorage.getItem(pt)||"zh";const Te={zh:{reset:"重置進度",confirmReset:"確定要重置進度與 EcoCoin 嗎？（不會清除暱稱）",resetDone:"已重置 ✅"},en:{reset:"Reset Progress",confirmReset:"Reset progress and EcoCoin? (Nickname will NOT be cleared.)",resetDone:"Reset complete ✅"},ja:{reset:"進捗をリセット",confirmReset:"進捗とEcoCoinをリセットしますか？（ニックネームは消えません）",resetDone:"リセット完了 ✅"},ko:{reset:"진행 초기화",confirmReset:"진행도와 EcoCoin을 초기화할까요? (닉네임은 삭제되지 않습니다.)",resetDone:"초기화 완료 ✅"}};function We(e){return Te[je]&&Te[je][e]||Te.zh[e]||e}function $e(){const e=p("btnReset");e&&(e.textContent=We("reset"))}const Fe="oasis_full_1to6_state_v8",me=()=>({eco:0,completed:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1},celebratedAllDone:!1}),h=vt();function vt(){try{const e=localStorage.getItem(Fe);if(!e)return me();const t=JSON.parse(e);return!t||typeof t!="object"?me():(typeof t.eco!="number"&&(t.eco=0),(!t.completed||typeof t.completed!="object")&&(t.completed={}),[1,2,3,4,5,6].forEach(n=>{typeof t.completed[n]!="boolean"&&(t.completed[n]=!1)}),typeof t.celebratedAllDone!="boolean"&&(t.celebratedAllDone=!1),t)}catch{return me()}}function ue(){localStorage.setItem(Fe,JSON.stringify(h))}function gt(){const e=me();h.eco=e.eco,h.completed=e.completed,h.celebratedAllDone=e.celebratedAllDone,ue(),be(h,N),Ce(h,p,N)}let E=null;function pe(){if(!E){const e=window.AudioContext||window.webkitAudioContext;e&&(E=new e)}E&&E.state==="suspended"&&E.resume().catch(()=>{})}function S(e=440,t=.08,n="sine",o=.06){if(pe(),!E)return;const s=E.createOscillator(),l=E.createGain();s.type=n,s.frequency.value=e,l.gain.value=o,s.connect(l),l.connect(E.destination),s.start(),s.stop(E.currentTime+t)}function Le(e=.12,t=.05){if(pe(),!E)return;const n=Math.floor(E.sampleRate*e),o=E.createBuffer(1,n,E.sampleRate),s=o.getChannelData(0);for(let g=0;g<n;g++)s[g]=(Math.random()*2-1)*(1-g/n);const l=E.createBufferSource();l.buffer=o;const i=E.createGain();i.gain.value=t,l.connect(i),i.connect(E.destination),l.start(),l.stop(E.currentTime+e)}function ht(){S(520,.06,"square",.04),S(740,.05,"square",.03)}function yt(){S(180,.1,"sawtooth",.05)}function Ge(){S(660,.08,"sine",.06),S(880,.1,"sine",.05)}function wt(){S(523.25,.08,"sine",.05),setTimeout(()=>S(659.25,.08,"sine",.05),90),setTimeout(()=>S(783.99,.1,"sine",.055),180),setTimeout(()=>S(1046.5,.12,"sine",.06),280)}function kt(){S(392,.07,"sine",.04),setTimeout(()=>S(440,.07,"sine",.04),110),setTimeout(()=>S(523.25,.09,"sine",.045),220)}function Tt(){S(659.25,.07,"sine",.05),setTimeout(()=>S(783.99,.07,"sine",.05),70),setTimeout(()=>S(987.77,.1,"sine",.055),140)}function Lt(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,n)=>setTimeout(()=>S(t,.1,"sine",.055),n*90)),setTimeout(()=>{S(1046.5,.14,"triangle",.06),S(1318.5,.14,"triangle",.05)},430),setTimeout(()=>Le(.1,.05),520),setTimeout(()=>Le(.1,.05),650),setTimeout(()=>Le(.14,.05),800)}let se=null;function Ct(){if(!("speechSynthesis"in window))return;const e=()=>{const t=window.speechSynthesis.getVoices()||[];se=t.find(n=>n.lang==="zh-TW")||t.find(n=>n.lang&&n.lang.startsWith("zh"))||null};e(),window.speechSynthesis.onvoiceschanged=e}function ve(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Et(e,t={}){if(!("speechSynthesis"in window))return null;ve();const n=new SpeechSynthesisUtterance(e);return se&&(n.voice=se),n.lang=se&&se.lang?se.lang:"zh-TW",n.rate=t.rate??1.02,n.pitch=t.pitch??1,window.speechSynthesis.speak(n),n}Ct();function ge(){return oe()||"冒險者"}const Ee={$:p,show:fe,hide:ne,setText:N,stopTTS:ve};function St(){const e=ge();N("certNick",e),N("certTitle",ze());const t=Oe()||"—";N("certSession",t),N("certDate",new Date().toLocaleString("zh-TW")),N("certEco",String(h.eco));const o={1:"🌱",2:"🥤",3:"🛡️",4:"🔎",5:"🏠",6:"📝"},s=[1,2,3,4,5,6].map(l=>h.completed[l]?o[l]:"⬜").join(" ");N("certSBT",s)}function qe(){St(),fe(p("certificateOverlay")),sessionStorage.getItem("oasis_certificate_open_tracked")||(sessionStorage.setItem("oasis_certificate_open_tracked","1"),Y("certificate_open",{source:"oasis_game"}))}function Pe(){ne(p("certificateOverlay"))}function Mt(e){const t=document.createElement("div");t.className="coin-pop text-amber-300",t.textContent=`+${e}`,document.body.appendChild(t),setTimeout(()=>t.remove(),1100)}function Nt(e,t){h.eco+=e,be(h,N),Mt(e),ue()}function At(e,t){return h.eco<e?!1:(h.eco-=e,be(h,N),ue(),!0)}function Rt(e){!h.completed[e]&&(h.completed[e]=!0,ue(),Y(`level_${e}_complete`,{level:e,level_name:e===1?"知識建立":e===2?"NFT辨識翻牌":e===3?"反詐紅旗分類":e===4?"可疑交易偵測":e===5?"RWA入門":e===6?"回饋表單":"unknown"})),Ce(h,p,N),[1,2,3,4,5,6].every(o=>h.completed[o])&&!h.celebratedAllDone&&(h.celebratedAllDone=!0,ue(),Lt())}const Bt={1:["👛 錢包：你自己掌控授權，不要把密碼交出去。","🧾 NFT：重點是「來源/合約可驗證」，不是圖片像不像。","🏠 RWA：把真實世界資產/權益做成可驗證的數位憑證。"],2:["🥤 看『牌名』只是提示，真正要在意的是「來源/合約資訊」。","⚠️ 急迫字眼＋要你先付/先簽，是常見釣魚套路。"],3:["🛡️ 紅旗分類：急迫、縮網址、先付費、簽名/無限額 → 多半可疑。","✅ 真的活動通常能在官方社群/官網找到對應公告。"],4:["🔎 可疑交易：無限額、陌生網域、急迫字眼、要先付費。","🧠 放大鏡找出『藏在細節裡』的風險。"],5:["🏠 RWA：真實世界的東西用更好管理的方式搬到鏈上。","🎯 先分清楚是不是 RWA，再談兌換與使用。"]};function _t(e){return`<ul class="list-disc pl-5 space-y-1">${(Bt[e]||["完成一關，學會一個概念。"]).map(n=>`<li>${n}</li>`).join("")}</ul>`}let ie=null,ce=null;function jt(e,t){const n={2:"提示：第 2 關每張卡會寫是什麼牌，只有一張可驗證來源。",3:"提示：第 3 關是紅旗分類：安全 / 可疑。",4:"提示：第 4 關先用放大鏡看細節，再選最可疑的一筆。",5:"提示：快完成了！",6:"提示：最後一關是回饋表單，完成後就能領取證書。"};N("jumpTitle",`做得好，${ge()}！前往第 ${e} 關！`),N("jumpSub","你可以看完再繼續");const o=p("jumpTip");o&&(o.textContent=n[e]||"一起把概念用遊戲學會。");const s=p("jumpLearn");s&&(s.innerHTML=_t(t||e-1)),ie=()=>{ne(p("jumpOverlay"));const l=Ye[`stage${e}`];l&&l()},fe(p("jumpOverlay")),ce&&clearTimeout(ce),ce=setTimeout(()=>{ie&&ie()},6e4)}p("jumpGo")?.addEventListener("click",()=>{ce&&clearTimeout(ce),ie&&ie()});let xe=null;function Ue(){const e=p("celebrateRain");e&&(e.innerHTML=""),xe&&(clearTimeout(xe),xe=null)}function $t(){Ue(),fe(p("celebrateOverlay"));const e=p("celebrateNick");e&&(e.textContent=ge()),It(),xe=setTimeout(()=>Se(),5200)}function Se(){ne(p("celebrateOverlay")),Ue()}p("celebrateClose")?.addEventListener("click",Se);p("celebrateOk")?.addEventListener("click",Se);p("certClose")?.addEventListener("click",Pe);p("certOk")?.addEventListener("click",Pe);p("certPrint")?.addEventListener("click",()=>{qe(),Y("certificate_print",{source:"oasis_game"}),window.print()});function It(){const e=p("celebrateRain");if(!e)return;const t=["🥳","🎉","🎊","🎀","🎈","🎁","🧁"],n=46;for(let o=0;o<n;o++){const s=document.createElement("div");s.className="party-item",s.textContent=t[Math.floor(Math.random()*t.length)];const l=Math.random()*100,i=Math.random()*.9,g=2.8+Math.random()*2.4,L=18+Math.random()*20,k=(Math.random()*2-1)*120;s.style.left=l+"vw",s.style.animationDuration=g+"s",s.style.animationDelay=i+"s",s.style.fontSize=L+"px",s.animate([{transform:"translateY(-40px) translateX(0px) rotate(0deg) scale(.95)",opacity:0},{transform:`translateY(10vh) translateX(${k*.25}px) rotate(120deg) scale(1.0)`,opacity:1,offset:.25},{transform:`translateY(120vh) translateX(${k}px) rotate(520deg) scale(1.06)`,opacity:1}],{duration:g*1e3,delay:i*1e3,easing:"linear",fill:"forwards"}),e.appendChild(s),setTimeout(()=>s.remove(),(g+i)*1e3+200)}}const Ke=()=>rt(Ee),te={$:p,show:fe,hide:ne,setText:N,openModal:De,bodyHTML:He,modalDeps:Ee,closeModal:Ke,setModalCleanup:at,state:h,addEco:Nt,spendEco:At,markCompleted:Rt,jumpTo:jt,ensureAudio:pe,sfxFlip:ht,sfxBad:yt,sfxGood:Ge,sfxLevelUp:wt,sfxEncourage:kt,sfxYA:Tt,stopTTS:ve,speakOnce:Et,nick:ge,openCelebrate:$t,openCertificate:qe},Ye={stage1:()=>ct(te),stage2:()=>ut(te),stage3:()=>ft(te),stage4:()=>mt(te),stage5:()=>xt(te),stage6:()=>bt(te)};function Ot(){De("EcoCup｜手提友善設計","番外篇：用設計解決「不想帶」的真正原因",Ee),He(`
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
    `,p);const e=p("ecoCupWrap"),t=p("ecoVoteMsg"),n={1:"手提環杯蓋",2:"防漏＋單手開",3:"可折疊／縮短",4:"杯套多功能"};e?.querySelectorAll(".eco-choice").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".eco-choice").forEach(s=>{s.classList.remove("selected","pulse")}),o.classList.add("selected","pulse"),setTimeout(()=>o.classList.remove("pulse"),320),t&&(t.classList.remove("hidden"),t.innerHTML=`你選的是 <b>${n[o.dataset.pick]}</b> ✅（這個原型最能解決「不想帶」的痛點之一）`);try{Ge()}catch{}})})}dt({$:p,stages:Ye,state:h});it({$:p,t:We,stopTTS:ve,resetGameState:gt,closeModal:Ke,hide:ne,ensureAudio:pe,openEcoCupIdea:Ot});be(h,N);Ce(h,p,N);
