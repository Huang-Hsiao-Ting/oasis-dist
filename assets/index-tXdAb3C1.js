(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const Je="oasis_nick",He="oasis_session";function gt(){return Math.random().toString(16).slice(2,10).toUpperCase()}function ht(){let e=localStorage.getItem(He);return e||(e=gt(),localStorage.setItem(He,e)),e}function re(){return(localStorage.getItem(Je)||"").trim()}function yt(e){const t=(e||"").trim();return localStorage.setItem(Je,t),t}function wt(){return ht()}function kt(){const e=re();return e&&e.length>=8?"✨ 進階冒險者":"🌱 新手冒險者"}function $(e){return document.getElementById(e)}function De(){const e=re()||"冒險者",t=wt(),o=kt(),n=$("topNick"),s=$("playerSession"),i=$("playerTitle");n&&(n.textContent=e),s&&(s.textContent=t),i&&(i.textContent=o);const d=$("certNick"),v=$("certSession"),S=$("certTitle");d&&(d.textContent=e),v&&(v.textContent=t),S&&(S.textContent=o);const E=$("celebrateNick");E&&(E.textContent=e)}function We(){const e=$("startOverlay");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}function _e(){const e=$("startOverlay");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}function Et(){const e=$("nicknameInput"),t=$("nickPreview"),o=$("btnStartGame"),n=$("nickErr"),s=$("btnChangeNick"),i=re();i?_e():We(),De(),e&&t&&(e.value=i||"",t.textContent=e.value.trim()||"冒險者",e.addEventListener("input",()=>{t.textContent=e.value.trim()||"冒險者",n&&n.classList.add("hidden")})),o&&o.addEventListener("click",()=>{const d=(e?.value||"").trim();if(!d){n&&(n.textContent="請輸入暱稱再開始～",n.classList.remove("hidden"));return}yt(d),_e(),De()}),s&&s.addEventListener("click",()=>{We(),e&&(e.value=re()),t&&(t.textContent=re()||"冒險者"),n&&n.classList.add("hidden"),e?.focus?.()})}function ke(e,t){t("ecoCoin",String(e.eco))}function ne(e,t,o,n){const s=e(t);s&&(s.textContent=o,s.className=`text-xs px-2 py-1 rounded-full font-bold ${n}`)}function oe(e,t,o,n){const s=e(t);s&&(o?(s.className="p-2 rounded-xl bg-emerald-600 text-center text-xs font-black text-white",s.textContent=n):(s.className="p-2 rounded-xl bg-slate-100 text-center text-xs font-black text-slate-500",s.textContent=t.replace("sbt","")))}function le(e,t,o,n){const s=e("lv"+t);s&&(s.textContent=n,o?(s.className="mt-3 w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",s.disabled=!1):(s.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",s.disabled=!0))}function Ie(e,t,o){const n=e.completed;ne(t,"badge1",n[1]?"已完成":"未完成",n[1]?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-slate-100 text-slate-600"),ne(t,"badge2",n[2]?"已完成":n[1]?"可開始":"未解鎖",n[2]?"bg-emerald-50 text-emerald-700 border border-emerald-100":n[1]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),ne(t,"badge3",n[3]?"已完成":n[2]?"可開始":"未解鎖",n[3]?"bg-emerald-50 text-emerald-700 border border-emerald-100":n[2]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),ne(t,"badge4",n[4]?"已完成":n[3]?"可開始":"未解鎖",n[4]?"bg-emerald-50 text-emerald-700 border border-emerald-100":n[3]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),ne(t,"badge5",n[5]?"已完成":n[4]?"可開始":"未解鎖",n[5]?"bg-emerald-50 text-emerald-700 border border-emerald-100":n[4]?"bg-sky-50 text-sky-700 border border-sky-100":"bg-slate-100 text-slate-600"),le(t,1,!0,n[1]?"已完成（可重玩）":"開始第 1 關"),le(t,2,n[1],n[2]?"已完成（可重玩）":"開始第 2 關"),le(t,3,n[2],n[3]?"已完成（可重玩）":"開始第 3 關"),le(t,4,n[3],n[4]?"已完成（可重玩）":"開始第 4 關"),le(t,5,n[4],n[5]?"已完成（可重玩）":"開始第 5 關");const s=[1,2,3,4,5].filter(i=>n[i]).length;o("progressText",`${s}/5`),oe(t,"sbt1",n[1],"🌱"),oe(t,"sbt2",n[2],"🥤"),oe(t,"sbt3",n[3],"🛡️"),oe(t,"sbt4",n[4],"🔎"),oe(t,"sbt5",n[5],"🏠")}let de=null;function Ct(e){de=typeof e=="function"?e:null}function Xe(e,t,o){const{$:n,show:s,setText:i}=o;de=null,i("modalTitle",e),i("modalSubtitle",t||"");const d=n("modalBody");d&&(d.innerHTML=""),s(n("modal"))}function Tt(e){const{$:t,hide:o,stopTTS:n}=e;try{typeof de=="function"&&de()}catch{}de=null,o(t("modal")),n()}function Ze(e,t){const o=t("modalBody");o&&(o.innerHTML=e)}function Lt(e){const{$:t,stages:o,state:n}=e;t("lv1")?.addEventListener("click",()=>o.stage1()),t("lv2")?.addEventListener("click",()=>{n.completed[1]&&o.stage2()}),t("lv3")?.addEventListener("click",()=>{n.completed[2]&&o.stage3()}),t("lv4")?.addEventListener("click",()=>{n.completed[3]&&o.stage4()}),t("lv5")?.addEventListener("click",()=>{n.completed[4]&&o.stage5()})}function St(e){const{$:t,t:o,stopTTS:n,resetGameState:s,closeModal:i,hide:d,ensureAudio:v,openEcoCupIdea:S}=e;t("modalClose")?.addEventListener("click",I=>{I.preventDefault(),I.stopPropagation(),i()}),t("btnReset")?.addEventListener("click",()=>{if(n(),!!confirm(o("confirmReset"))){s();try{i()}catch{}d(t("jumpOverlay")),d(t("celebrateOverlay")),d(t("certificateOverlay")),d(t("zoomModal")),alert(o("resetDone"))}});const E=document.getElementById("btnEcoCupIdea");E&&E.addEventListener("click",S),window.addEventListener("pointerdown",()=>{v()},{once:!1})}function Mt(e){const{$:t,show:o,hide:n,setText:s,openModal:i,bodyHTML:d,modalDeps:v,closeModal:S,setModalCleanup:E,addEco:I,markCompleted:P,jumpTo:k,ensureAudio:N,sfxGood:A,sfxEncourage:O,sfxLevelUp:B,stopTTS:w,speakOnce:m,nick:r}=e;i("第 1 關｜先建立知識認知","完成 3 張卡（每張答一題）＋小劇場播放完＋情境答對 → 前往第 2 關（+80）",v);let a=!0;const p=[{icon:"👛",title:"加密錢包是什麼？",core:"錢包就像你的數位皮夾：你自己保管，決定要不要授權。",detail:["你可以把錢包想成「鑰匙＋保險箱」。鑰匙（私鑰/助記詞）只給自己，不給任何人。","網站跳出簽名/授權視窗時，你是在『同意做一件事』，不是『只是登入』。","安全原則：看不懂就先拒絕，去官方確認再操作。"].join(`
`),quiz:{q:"哪一句最正確？",a:[{t:"錢包密碼可以交給網站幫我保管",ok:!1},{t:"錢包要自己保管，授權要看清楚",ok:!0}]}},{icon:"🧾",title:"NFT 是什麼？",core:"NFT 不是圖片本身，而是「可驗證來源」的數位憑證。",detail:["NFT 像「帶序號的證明書」。重點是來源/合約能不能驗證。","圖片很像不代表是真的，釣魚常用『一樣的圖』騙你點連結。","安全原則：先看官方來源、合約、網域；不要被『限時』催促。"].join(`
`),quiz:{q:"判斷 NFT 真假的重點是？",a:[{t:"圖片好不好看",ok:!1},{t:"來源/合約能不能驗證",ok:!0}]}},{icon:"🏠",title:"RWA 是什麼？",core:"RWA 是把真實世界的資產/權益，做成可驗證的數位憑證。",detail:["RWA 可理解為：把『房屋、票券、保固、債券』等真實世界權益，變成更好查驗與管理的憑證。","它不是要你衝動投資，而是讓流程更清楚、可追蹤。","安全原則：遇到要你『先付費/先簽名』的陌生連結，一樣先停下來查來源。"].join(`
`),quiz:{q:"哪個比較像 RWA？",a:[{t:"可驗證的電子門票憑證",ok:!0},{t:"陌生人發的限時快領連結",ok:!1}]}}],y=r(),u=[{who:"koko",text:`美美，${y} 看到一個『限時快領』連結，點進去跳出錢包視窗。`},{who:"meimei",text:`${y} 先停。它要你同意什麼？有沒有寫無限額？`},{who:"koko",text:"有耶，寫無限額授權，還說比較方便。"},{who:"meimei",text:"那就先拒絕。先關掉、去官方確認再說。"},{who:"koko",text:`好！${y} 懂了：看不懂就先不要簽。`}];d(`
    <div class="mt-2 p-4 rounded-2xl blkA">
      <div class="flex items-center justify-between gap-2">
        <div class="font-extrabold text-slate-900">區塊 A｜三張知識卡（每張答一題確認理解）</div>
        <div class="text-xs font-black text-slate-700 bg-white/70 border border-white/80 px-3 py-2 rounded-xl">
          已完成：<span id="cardOK">0</span>/3
        </div>
      </div>

      <div class="mt-3 space-y-3" id="cardsWrap">
        ${p.map((l,x)=>`
          <div id="s1Card${x}" class="p-4 rounded-2xl teach-card card-hover">
            <div class="teach-inner">
              <div class="flex items-center gap-2">
                <button type="button" class="voice-mini s1VoiceMini" title="語音開關（預設開）">🔊</button>
                <div class="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-lg">${l.icon}</div>
                <div class="font-extrabold text-slate-900">${l.title}</div>
                <div id="doneDot${x}" class="ml-auto hidden text-sm font-black text-emerald-700">✅ 已懂</div>
              </div>

              <div class="text-sm text-slate-800 mt-3 leading-relaxed">
                <span class="font-extrabold text-slate-900">一句話：</span>${l.core}
              </div>

              <div class="mt-3 flex justify-center">
                <button id="more${x}" class="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold hover:bg-slate-50 shadow-soft text-sm">
                  點我更了解
                </button>
              </div>

              <div class="mt-4 p-3 rounded-2xl bg-white border border-slate-200">
                <div class="text-sm font-extrabold text-slate-900">${l.quiz.q}</div>
                <div class="mt-2 grid gap-2">
                  ${l.quiz.a.map((M,F)=>`
                    <button data-ci="${x}" data-ai="${F}"
                      class="w-full text-left p-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white font-semibold text-slate-800">
                      ${M.t}
                    </button>
                  `).join("")}
                </div>
                <div id="quizMsg${x}" class="mt-3 hidden p-3 rounded-2xl border text-sm"></div>
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
  `,t);let c=[!1,!1,!1],f=!1,G=!1,q=()=>{};E(()=>{try{q()}catch{}try{w()}catch{}});function be(){document.querySelectorAll(".s1VoiceMini").forEach(l=>{l.textContent=a?"🔊":"🔇",l.setAttribute("aria-pressed",a?"true":"false")})}function pe(){if(N(),a=!a,a)try{window.speechSynthesis?.resume()}catch{}else{w();try{window.speechSynthesis?.pause()}catch{}}be()}document.querySelectorAll(".s1VoiceMini").forEach(l=>{l.addEventListener("click",x=>{x.preventDefault(),x.stopPropagation(),pe()})}),be();function U(){s("cardOK",String(c.filter(Boolean).length));const l=t("btnGo2");l&&(l.disabled=!0,l.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",l.textContent="尚未解鎖",l.onclick=null,c.every(Boolean)&&f&&G&&(l.disabled=!1,l.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",l.textContent="領取獎勵並前往第 2 關（+80）",l.onclick=()=>{I(80,"level1_reward"),P(1),S(),k(2,1)}))}function ve(l){t("s1InnerTitle").textContent=p[l].title+"｜更詳細說明",t("s1InnerText").textContent=p[l].detail,o(t("s1InnerModal")),a&&m(p[l].core,{rate:1.02,pitch:1.02})}function Q(){n(t("s1InnerModal")),w()}t("s1InnerClose").onclick=Q,t("s1InnerOk").onclick=Q,t("s1InnerModal").addEventListener("click",l=>{(l.target===t("s1InnerModal")||l.target.classList.contains("inner-modal-backdrop"))&&Q()}),p.forEach((l,x)=>{const M=t("s1Card"+x),F=t("more"+x);M.addEventListener("mouseenter",()=>{a&&m(p[x].core,{rate:1.02,pitch:1.02})}),M.addEventListener("mouseleave",w),F.addEventListener("focus",()=>{a&&m(p[x].core,{rate:1.02,pitch:1.02})}),F.addEventListener("blur",w),F.addEventListener("click",()=>{w(),ve(x)})}),t("cardsWrap").addEventListener("click",l=>{const x=l.target.closest("button[data-ci]");if(!x)return;const M=Number(x.dataset.ci),F=Number(x.dataset.ai);if(c[M])return;const vt=p[M].quiz.a[F],se=t("quizMsg"+M);se.classList.remove("hidden"),vt.ok?(c[M]=!0,t("doneDot"+M).classList.remove("hidden"),se.className="mt-3 p-3 rounded-2xl border text-sm bg-emerald-50 border-emerald-100 text-emerald-800",se.innerHTML="<b>✅ 正確！</b> 你已理解這張卡的重點。",A(),U()):(se.className="mt-3 p-3 rounded-2xl border text-sm bg-sky-50 border-sky-100 text-sky-800",se.innerHTML="<b>再想一下</b>：你可以點「點我更了解」看更詳細說明。",O())});const R=t("actorMei"),z=t("actorKo"),ge=t("meiBubble"),ee=t("koBubble");function g(l,x){l==="meimei"?R.classList.toggle("talking",x):z.classList.toggle("talking",x)}let D=0,W=!1,j=!1,K=null,_=!1,V=null;function ft(){ge.textContent="(等待開始)",ee.textContent="(等待開始)",g("meimei",!1),g("koko",!1)}function te(){K&&(clearTimeout(K),K=null)}q=function(){W=!1,j=!1,_=!1,V=null,te(),w(),g("meimei",!1),g("koko",!1)};function mt(){W=!1,j=!1,_=!1,V=null,te(),g("meimei",!1),g("koko",!1),f=!0,U()}function xt(l){const x=l.who==="meimei";V=l.who,x?(ge.textContent=l.text,ee.textContent=""):(ee.textContent=l.text,ge.textContent=""),g("meimei",a&&x),g("koko",a&&!x)}function Y(){if(!W||j)return;if(D>=u.length){mt();return}const l=u[D];if(xt(l),te(),_=!0,!a){g("meimei",!1),g("koko",!1),K=setTimeout(()=>{!W||j||(_=!1,D++,Y())},900);return}w();const x=l.who==="meimei",M=m(l.text,{pitch:x?1.15:.95,rate:1.02});if(!M){g("meimei",!1),g("koko",!1),K=setTimeout(()=>{!W||j||(_=!1,D++,Y())},900);return}const F=()=>{W&&(_=!1,g("meimei",!1),g("koko",!1),D++,j||(K=setTimeout(()=>Y(),160)))};M.onend=F,M.onerror=F}function bt(){if(!(W&&!j)){if(j){if(j=!1,a){try{if(window.speechSynthesis&&window.speechSynthesis.paused){window.speechSynthesis.resume(),_&&V&&(g("meimei",V==="meimei"),g("koko",V==="koko"));return}}catch{}_||Y();return}_?(te(),K=setTimeout(()=>{!W||j||(_=!1,D++,Y())},600)):Y();return}q(),W=!0,j=!1,D=0,ft(),Y()}}function pt(){if(!(!W||j)&&(j=!0,te(),g("meimei",!1),g("koko",!1),a))try{window.speechSynthesis&&window.speechSynthesis.pause()}catch{}}t("dramaStart").onclick=()=>{N(),bt()},t("dramaPause").onclick=pt;const Te=t("s1feedback");function ze(l,x,M){Te.classList.remove("hidden"),Te.className="mt-4 p-4 rounded-2xl border "+(l?"bg-emerald-50 border-emerald-100":"bg-sky-50 border-sky-100"),Te.innerHTML=`
      <div class="font-extrabold text-slate-900 text-lg">${x}</div>
      <div class="text-base text-slate-700 mt-2 leading-relaxed">${M}</div>
    `}t("s1op0").onclick=()=>{ze(!1,"再試一次","看到無限額授權，先不要同意。先關掉、查來源，再決定。"),O(),G=!1,U()},t("s1op1").onclick=()=>{ze(!0,"做得好！","你先拒絕並確認來源，是最安全的做法。"),B(),G=!0,U()},U()}function Nt(e){const{openModal:t,bodyHTML:o,modalDeps:n,$:s,show:i,addEco:d,markCompleted:v,closeModal:S,jumpTo:E,sfxFlip:I,sfxBad:P}=e;t("第 2 關｜NFT 辨識翻牌","按「發牌」→ 卡片一張一張出現。找出可驗證來源那張（+60）",n),o(`
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
  `,s);let k=3,N=!1;const A=s("tries2"),O=s("gridWrap2"),B=s("grid2"),w=s("msg2");function m(u){k=u,A.textContent=String(u)}const r=[{title:"限時快領牌",hint:"用限時製造急迫",isReal:!1},{title:"先付手續費牌",hint:"要你先付小額費用",isReal:!1},{title:"只有圖片牌",hint:"只有圖片，沒有來源",isReal:!1},{title:"縮網址牌",hint:"縮網址/陌生網址",isReal:!1},{title:"先簽才給看牌",hint:"要先簽名/先授權",isReal:!1},{title:"可驗證來源牌",hint:"官方來源/合約可驗證",isReal:!0}];function a(u){const c=u.slice();for(let f=c.length-1;f>0;f--){const G=Math.floor(Math.random()*(f+1));[c[f],c[G]]=[c[G],c[f]]}return c}function p(u,c){const f=document.createElement("button");return f.type="button",f.className="p-4 rounded-2xl bg-white border border-slate-200 text-left card-hover deal-enter",f.dataset.revealed="0",f.innerHTML=`
      <div class="text-xs font-bold text-slate-500">Card #${u+1}</div>
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
    `,f.addEventListener("click",()=>{N&&(k<=0||f.dataset.revealed!=="1"&&(f.dataset.revealed="1",f.disabled=!0,I(),c.isReal?(N=!1,f.innerHTML=`
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
        `,w.innerHTML='<span class="font-black text-emerald-700">成功！</span>你找到可驗證來源牌（+60）。',d(60,"level2_nft_win"),v(2),m(0),setTimeout(()=>{S(),E(3,2)},450)):(f.innerHTML=`
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
        `,m(k-1),P(),w.innerHTML=k>0?`<span class="font-black text-rose-700">不是可驗證來源。</span>再找一次（剩 ${k} 次）。`:'<span class="font-black text-slate-900">機會用完。</span>再按「發牌」重新開始。',k<=0&&(N=!1))))}),f}function y(){const u=a(r),c=[];for(let f=0;f<6;f++)c.push(p(f,u[f]));return c}s("btnDeal2").onclick=()=>{i(O),m(3),N=!0,w.textContent="卡片會一張一張出現，找出「可驗證來源牌」。";const u=y();B.innerHTML="";let c=0;const f=()=>{c>=u.length||(I(),B.appendChild(u[c]),c++,setTimeout(f,220))};f()}}function It(e){const{openModal:t,bodyHTML:o,modalDeps:n,$:s,addEco:i,markCompleted:d,closeModal:v,jumpTo:S,sfxGood:E,sfxBad:I,sfxEncourage:P}=e;t("第 3 關｜反詐紅旗分類（遊戲）","把卡片分類到「安全 / 可疑」。全部分類完成即可過關（+80）。",n);const k=[{title:"官方活動頁面（可在官方社群找到同樣公告）",correct:"safe",why:"✅ 能在官方社群/官網找到同樣公告，來源一致，風險較低。"},{title:"縮網址連結，要求你立刻簽名才能領",correct:"sus",why:"⚠️ 縮網址看不到真正網域＋要你立刻簽名，是常見釣魚套路。"},{title:"授權內容清楚、且只需要限額（非無限額）",correct:"safe",why:"✅ 授權範圍清楚且有限額，風險明顯比無限額低。"},{title:"跳出視窗寫「Approve unlimited spend（無限額）」",correct:"sus",why:"⚠️ 無限額授權風險最高，可能被直接拿走資產操作權限。"},{title:"要你先付小額手續費才給你看獎勵/領空投",correct:"sus",why:"⚠️ 先收小額費用常是詐騙開頭，容易越陷越深。"},{title:"網址與你平常使用的官方網域一致（無奇怪拼字）",correct:"safe",why:"✅ 網域一致且無怪拼字，相對安全（仍建議再對照官方公告）。"}];o(`
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
  `,s);const N=s("s3List");let A=Array(k.length).fill(!1);function O(m){return m==="done"?'<span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">✅ 已完成</span>':'<span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">尚未分類</span>'}function B(){if(N.innerHTML="",k.forEach((m,r)=>{const a=document.createElement("div");a.className="p-4 rounded-2xl bg-white border border-slate-200",a.innerHTML=`
        <div class="flex items-start justify-between gap-3">
          <div class="font-extrabold text-slate-900">${m.title}</div>
          <div id="s3Badge${r}">${O(A[r]?"done":"new")}</div>
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
      `,N.appendChild(a),A[r]&&a.querySelectorAll("button[data-idx]").forEach(p=>{p.disabled=!0,p.className+=" opacity-70 cursor-not-allowed"})}),A.every(Boolean)){const m=s("btnFinish3");m.disabled=!1,m.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",m.textContent="通關（領取 +80）→ 前往第 4 關",m.onclick=()=>{i(80,"level3_reward"),d(3),v(),S(4,3)}}}function w(m,r,a){const p=s("s3Hint"+m);p.classList.remove("hidden"),p.className="mt-3 p-4 rounded-2xl border text-sm "+(r?"bg-emerald-50 border-emerald-100 text-emerald-800":"bg-sky-50 border-sky-100 text-sky-800"),p.innerHTML=r?`<b>✅ 正確！</b> ${a}`:`<b>再想一下：</b> ${a}`}N.addEventListener("click",m=>{const r=m.target.closest("button[data-idx]");if(!r)return;const a=Number(r.dataset.idx);if(A[a])return;r.dataset.pick===k[a].correct?(A[a]=!0,E(),B(),w(a,!0,k[a].why)):(P(),w(a,!1,k[a].why))}),s("s3Reset").onclick=()=>{A=Array(k.length).fill(!1),I(),B()},B()}function At(e){const{openModal:t,bodyHTML:o,modalDeps:n,$:s,show:i,hide:d,addEco:v,markCompleted:S,closeModal:E,jumpTo:I,sfxGood:P,sfxBad:k,sfxEncourage:N,sfxLevelUp:A}=e;t("第 4 關｜可疑交易偵測（放大鏡）","先按 🔍 看細節，再選出『最可疑』的一筆（+40）",n);const O=[{id:1,title:"EcoCoin 兌換：環保杯",msg:"你主動兌換 → 扣 120 EcoCoin。",zoomTitle:"Tx #1 放大鏡",zoomBody:`這筆是你主動操作，金額固定、流程合理。
✅ 看起來正常：沒有急迫字眼、沒有無限額授權、沒有陌生網域。`,bad:!1},{id:2,title:"App 使用授權",msg:"授權範圍：只讀取必要資訊（限額）。",zoomTitle:"Tx #2 放大鏡",zoomBody:`授權內容有範圍限制，且是必要用途。
✅ 看起來正常：不是無限額、沒有要你先付費。`,bad:!1},{id:3,title:"限時領獎：簽名授權",msg:"顯示：Approve unlimited spend（無限額）",zoomTitle:"Tx #3 放大鏡（最可疑）",zoomBody:`⚠️ 這筆最可疑的地方：
1) 出現「unlimited / 無限額」授權
2) 常搭配「限時、快領」等急迫字眼
3) 你不是主動兌換，卻要授權很大權限

✅ 正確做法：先拒絕 → 去官方來源確認 → 必要才做『限額』授權。`,bad:!0},{id:4,title:"朋友分享投票連結",msg:"網域顯示：short.link/xxxx（縮網址）",zoomTitle:"Tx #4 放大鏡",zoomBody:`可疑點：縮網址看不到真正網域，可能導到釣魚站。
⚠️ 但它的危險程度通常低於「無限額授權」那種直接拿走權限的狀況。
✅ 做法：先查真正網域、確認官方再點。`,bad:!1}];o(`
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
  `,s);const B=s("s4Grid");let w=new Set;function m(r){s("zoomTitle").textContent=r.zoomTitle,s("zoomSub").textContent="可疑細節（看完再選）",s("zoomBody").textContent=r.zoomBody,i(s("zoomModal")),w.add(r.id),P()}s("zoomClose").onclick=()=>d(s("zoomModal")),s("zoomOk").onclick=()=>d(s("zoomModal")),s("zoomModal").addEventListener("click",r=>{(r.target===s("zoomModal")||r.target.classList.contains("modal-backdrop"))&&d(s("zoomModal"))}),O.forEach(r=>{const a=document.createElement("div");a.className="p-4 rounded-2xl bg-white border border-slate-200 card-hover",a.innerHTML=`
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
    `,B.appendChild(a)}),B.addEventListener("click",r=>{const a=r.target.closest("button[data-zoom]");if(a){const y=Number(a.dataset.zoom),u=O.find(c=>c.id===y);u&&m(u);return}const p=r.target.closest("button[data-pick]");if(p){const y=Number(p.dataset.pick);[...B.children].forEach(f=>f.classList.remove("ring-4","ring-emerald-200")),p.closest("div").classList.add("ring-4","ring-emerald-200");const u=s("btnFinish4"),c=O.find(f=>f.id===y);if(!w.has(y)){k(),u.disabled=!0,u.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",u.textContent="先按這筆的 🔍 看細節，再做選擇";return}c&&c.bad?(A(),u.disabled=!1,u.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",u.textContent="通關（領取 +40）→ 前往第 5 關",u.onclick=()=>{v(40,"level4_reward"),S(4),E(),I(5,4)}):(N(),u.disabled=!0,u.className="w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",u.textContent="這筆不是『最可疑』，再看看其他放大鏡")}})}function Bt(e){const{openModal:t,bodyHTML:o,modalDeps:n,$:s,setText:i,state:d,spendEco:v,addEco:S,markCompleted:E,closeModal:I,sfxBad:P,sfxGood:k,sfxLevelUp:N,sfxEncourage:A,sfxYA:O,openCelebrate:B,openCertificate:w}=e;t("第 5 關｜RWA 入門＋分類遊戲＋兌換","完成分類任務，再完成一次兌換，即可過關（+50）",n),o(`
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
  `,s);const m=[{title:"房屋產權憑證（可查驗的數位憑證）",isRWA:!0,why:"真實世界的資產（房子）→ 做成可查驗的憑證。"},{title:"債券/票券的數位化憑證",isRWA:!0,why:"真實世界的金融票券 → 可追蹤的憑證。"},{title:"一張『很漂亮的 JPG 圖片』",isRWA:!1,why:"只是圖片，不代表真實世界資產。"},{title:"演唱會實體門票的可驗證電子票",isRWA:!0,why:"真實世界票券 → 可驗證、可防偽。"},{title:"陌生人發的『限時快領』連結",isRWA:!1,why:"這是情境/連結，不是資產憑證。"},{title:"商品保固/序號的可驗證憑證",isRWA:!0,why:"對應真實商品與權益 → 可驗證憑證。"}],r=s("rwaGrid"),a=s("rwaScore"),p=s("rwaHint"),y=s("btnRedeem5"),u=s("redeemOut"),c=s("btnFinish5"),f={rwaGrid:r,rwaScore:a,btnRedeem5:y,redeemOut:u,btnFinish5:c,rwaHint:p};for(const[H,R]of Object.entries(f))R||console.error("[stage5] missing element:",H);if(!r||!a||!y||!u||!c||!p)return;let G=Array(m.length).fill(!1),q=0;const be=5;let pe=!1;function U(H,R){p.classList.remove("hidden"),p.className="mt-4 p-4 rounded-2xl border "+(H?"bg-emerald-50 border-emerald-100":"bg-sky-50 border-sky-100"),p.innerHTML=`
      <div class="font-extrabold text-slate-900">${H?"答對":"提醒"}</div>
      <div class="text-sm text-slate-700 mt-2 leading-relaxed">${R}</div>
    `}function ve(){q>=be?(y.disabled=!1,y.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800",y.textContent="開始兌換（扣 120 EcoCoin）"):(y.disabled=!0,y.className="mt-3 w-full px-4 py-3 rounded-2xl bg-slate-300 text-slate-600 font-extrabold cursor-not-allowed",y.textContent=`分類未達標（需要 5/6，目前 ${q}/6）`)}function Q(){c.disabled=!1,c.className="w-full px-4 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700",c.textContent="完成第 5 關（領取 +50）"}r.innerHTML="",m.forEach((H,R)=>{const z=document.createElement("div");z.className="p-4 rounded-2xl bg-slate-50 border border-slate-200",z.innerHTML=`
      <div class="font-extrabold text-slate-900">${H.title}</div>
      <div class="mt-3 grid grid-cols-2 gap-2">
        <button data-idx="${R}" data-ans="yes"
          class="px-3 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800">
          是 RWA
        </button>
        <button data-idx="${R}" data-ans="no"
          class="px-3 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-extrabold hover:bg-white">
          不是 RWA
        </button>
      </div>
      <div id="rwaDone${R}" class="mt-3 hidden text-sm font-extrabold"></div>
    `,r.appendChild(z)}),r.addEventListener("click",H=>{const R=H.target.closest("button[data-idx]");if(!R)return;const z=Number(R.dataset.idx);if(G[z])return;const ee=R.dataset.ans==="yes"===m[z].isRWA,g=s("rwaDone"+z);g.classList.remove("hidden"),ee?(G[z]=!0,q+=1,k(),g.textContent="✅ 正確（已鎖定）",g.className="mt-3 text-sm font-extrabold text-emerald-700",R.parentElement.querySelectorAll("button").forEach(D=>{D.disabled=!0,D.classList.add("opacity-70","cursor-not-allowed")}),U(!0,m[z].why)):(A(),g.textContent="❗ 再想一下（可以重新選）",g.className="mt-3 text-sm font-extrabold text-sky-700",U(!1,m[z].why)),a.textContent=String(q),ve()}),ve(),y.addEventListener("click",()=>{if(u.classList.remove("hidden"),typeof v!="function"){console.error("[stage5] spendEco is not a function. Did you pass it in ctx?"),u.innerHTML="系統錯誤：spendEco 未注入。請檢查 ctx.spendEco。";return}if(!v(120,"level5_redeem_ecocup")){P(),u.innerHTML=`EcoCoin 不足（需要 120）。你目前是 <b>${d?.eco??"—"}</b>。回前面關卡拿幣再來。`;return}N(),u.innerHTML="兌換成功 ✅ 已扣除 120 EcoCoin。",pe=!0,Q()}),c.addEventListener("click",()=>{pe&&(S(50,"level5_reward"),E(5),O(),I(),B(),setTimeout(()=>{w()},700))})}document.addEventListener("DOMContentLoaded",()=>{Et()});const b=e=>document.getElementById(e);function L(e,t){const o=b(e);o&&(o.textContent=t)}function xe(e){e&&(e.classList.remove("hidden"),e.classList.add("flex"))}function X(e){e&&(e.classList.add("hidden"),e.classList.remove("flex"))}const Ae={$:b,show:xe,hide:X,setText:L,stopTTS:Ce};document.addEventListener("DOMContentLoaded",()=>{try{typeof Pe=="function"&&Pe()}catch{}});const Rt="OASIS_LANG";let Fe=localStorage.getItem(Rt)||"zh";const Le={zh:{reset:"重置進度",confirmReset:"確定要重置進度與 EcoCoin 嗎？（不會清除暱稱）",resetDone:"已重置 ✅"},en:{reset:"Reset Progress",confirmReset:"Reset progress and EcoCoin? (Nickname will NOT be cleared.)",resetDone:"Reset complete ✅"},ja:{reset:"進捗をリセット",confirmReset:"進捗とEcoCoinをリセットしますか？（ニックネームは消えません）",resetDone:"リセット完了 ✅"},ko:{reset:"진행 초기화",confirmReset:"진행도와 EcoCoin을 초기화할까요? (닉네임은 삭제되지 않습니다.)",resetDone:"초기화 완료 ✅"}};function Qe(e){return Le[Fe]&&Le[Fe][e]||Le.zh[e]||e}function Pe(){const e=document.getElementById("btnReset");e&&(e.textContent=Qe("reset"))}function Be(e){const t=(e||"").trim(),o=/[A-Za-z]/.test(t);return/[\u{1F300}-\u{1FAFF}]/u.test(t)?"🎭 氣氛製造者":o?"🧭 探索型冒險者":t.length<=2?"⚡ 行動派玩家":t.length>=5?"🧠 理性分析者":"🌿 穩健學習者"}function $t(){const e=Math.random().toString(16).slice(2,6).toUpperCase(),t=Math.random().toString(16).slice(2,6).toUpperCase();return`${e}-${t}`}const Ge="oasis_session_id_v1";function we(){let e=localStorage.getItem(Ge);return e||(e=$t(),localStorage.setItem(Ge,e)),e}const Re="oasis_nickname_v1";function Ee(){return(localStorage.getItem(Re)||"").trim()}function jt(e){localStorage.setItem(Re,(e||"").trim())}function $e(){const e=Ee()||"冒險者",t=document.getElementById("topNick");t&&(t.textContent=e)}const ie=document.getElementById("nicknameInput"),qe=document.getElementById("nickPreview"),Se=document.getElementById("nickErr");Se&&(Se.classList.add("hidden"),Se.textContent="");ie&&(ie.value="",ie.focus(),ie.addEventListener("input",()=>{qe&&(qe.textContent=ie.value.trim()||"冒險者")},{passive:!0}));function et(){const e=document.getElementById("startOverlay");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}function tt(){const e=document.getElementById("startOverlay");if(!e)return;e.classList.remove("hidden"),e.classList.add("flex");const t=document.getElementById("nicknameInput"),o=document.getElementById("nickPreview"),n=document.getElementById("nickErr");n&&(n.classList.add("hidden"),n.textContent=""),o&&(o.textContent="冒險者"),t&&(t.value="",setTimeout(()=>t.focus(),60))}const st="oasis_full_1to5_state_v7",he=()=>({eco:0,completed:{1:!1,2:!1,3:!1,4:!1,5:!1},celebratedAllDone:!1}),h=Ot();function Ot(){try{const e=localStorage.getItem(st);if(!e)return he();const t=JSON.parse(e);return!t||typeof t!="object"?he():(typeof t.eco!="number"&&(t.eco=0),t.completed||(t.completed={1:!1,2:!1,3:!1,4:!1,5:!1}),typeof t.celebratedAllDone!="boolean"&&(t.celebratedAllDone=!1),t)}catch{return he()}}function me(){localStorage.setItem(st,JSON.stringify(h))}function zt(){const e=he();h.eco=e.eco,h.completed=e.completed,h.celebratedAllDone=e.celebratedAllDone,me(),ke(h,L),Ie(h,b,L)}function Ht(){const e=Ee()||"冒險者";L("certNick",e),L("certTitle",Be(e));const t=typeof we=="function"&&we()||"—";L("certSession",t),L("certDate",new Date().toLocaleString("zh-TW")),L("certEco",String(h.eco));const n={1:"🌱",2:"🥤",3:"🛡️",4:"🔎",5:"🏠"},s=[1,2,3,4,5].map(i=>h.completed[i]?n[i]:"⬜").join(" ");L("certSBT",s)}function nt(){Ht(),xe(b("certificateOverlay"))}function ot(){X(b("certificateOverlay"))}function Dt(e){const t=document.createElement("div");t.className="coin-pop text-amber-300",t.textContent=`+${e}`,document.body.appendChild(t),setTimeout(()=>t.remove(),1100)}function Wt(e,t){h.eco+=e,ke(h,L),Dt(e),me()}function _t(e,t){return h.eco<e?!1:(h.eco-=e,ke(h,L),me(),!0)}let C=null;function Z(){if(!C){const e=window.AudioContext||window.webkitAudioContext;e&&(C=new e)}C&&C.state==="suspended"&&C.resume().catch(()=>{})}function T(e=440,t=.08,o="sine",n=.06){if(Z(),!C)return;const s=C.createOscillator(),i=C.createGain();s.type=o,s.frequency.value=e,i.gain.value=n,s.connect(i),i.connect(C.destination),s.start(),s.stop(C.currentTime+t)}function Me(e=.12,t=.05){if(Z(),!C)return;const o=Math.floor(C.sampleRate*e),n=C.createBuffer(1,o,C.sampleRate),s=n.getChannelData(0);for(let v=0;v<o;v++)s[v]=(Math.random()*2-1)*(1-v/o);const i=C.createBufferSource();i.buffer=n;const d=C.createGain();d.gain.value=t,i.connect(d),d.connect(C.destination),i.start(),i.stop(C.currentTime+e)}function Ft(){T(520,.06,"square",.04),T(740,.05,"square",.03)}function Pt(){T(180,.1,"sawtooth",.05)}function lt(){T(660,.08,"sine",.06),T(880,.1,"sine",.05)}function it(){T(523.25,.08,"sine",.05),setTimeout(()=>T(659.25,.08,"sine",.05),90),setTimeout(()=>T(783.99,.1,"sine",.055),180),setTimeout(()=>T(1046.5,.12,"sine",.06),280)}function at(){T(392,.07,"sine",.04),setTimeout(()=>T(440,.07,"sine",.04),110),setTimeout(()=>T(523.25,.09,"sine",.045),220)}function Gt(){T(659.25,.07,"sine",.05),setTimeout(()=>T(783.99,.07,"sine",.05),70),setTimeout(()=>T(987.77,.1,"sine",.055),140)}function qt(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,o)=>setTimeout(()=>T(t,.1,"sine",.055),o*90)),setTimeout(()=>{T(1046.5,.14,"triangle",.06),T(1318.5,.14,"triangle",.05)},430),setTimeout(()=>Me(.1,.05),520),setTimeout(()=>Me(.1,.05),650),setTimeout(()=>Me(.14,.05),800)}let J=null;function Ut(){if(!("speechSynthesis"in window))return;const e=()=>{const t=window.speechSynthesis.getVoices()||[];J=t.find(o=>o.lang==="zh-TW")||t.find(o=>o.lang&&o.lang.startsWith("zh"))||null};e(),window.speechSynthesis.onvoiceschanged=e}function Ce(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Kt(e,t={}){if(!("speechSynthesis"in window))return null;Ce();const o=new SpeechSynthesisUtterance(e);return J&&(o.voice=J),o.lang=J&&J.lang?J.lang:"zh-TW",o.rate=t.rate??1.02,o.pitch=t.pitch??1,window.speechSynthesis.speak(o),o}Ut();function Yt(e){h.completed[e]||(h.completed[e]=!0,me()),Ie(h,b,L),[1,2,3,4,5].every(o=>h.completed[o])&&!h.celebratedAllDone&&(h.celebratedAllDone=!0,me(),qt())}const Vt={1:["👛 錢包：你自己掌控授權，不要把密碼交出去。","🧾 NFT：重點是「來源/合約可驗證」，不是圖片像不像。","🏠 RWA：把真實世界資產/權益做成可驗證的數位憑證。"],2:["🥤 看『牌名』只是提示，真正要在意的是「來源/合約資訊」。","⚠️ 急迫字眼＋要你先付/先簽，是常見釣魚套路。"],3:["🛡️ 紅旗分類：急迫、縮網址、要先付費、要簽名/無限額 → 多半可疑。","✅ 真的活動通常能在官方社群/官網找到對應公告。"],4:["🔎 可疑交易：無限額、陌生網域、急迫字眼、要先付費。","🧠 放大鏡找出『藏在細節裡』的風險。"],5:["🏠 RWA：真實世界的東西用更好管理的方式搬到鏈上。","🎯 先分清楚是不是 RWA，再談兌換與使用。"]};function Jt(e){return`<ul class="list-disc pl-5 space-y-1">${(Vt[e]||["完成一關，學會一個概念。"]).map(o=>`<li>${o}</li>`).join("")}</ul>`}let ce=null,ue=null;function Xt(e,t){const o={2:"提示：第 2 關每張卡會寫是什麼牌，只有一張可驗證來源。",3:"提示：第 3 關是紅旗分類：安全 / 可疑。",4:"提示：第 4 關先用放大鏡看細節，再選最可疑的一筆。",5:"提示：第 5 關通關會有 YA 音效。"};L("jumpTitle",`做得好，${Oe()}！前往第 ${e} 關！`),L("jumpSub","你可以看完再繼續"),b("jumpTip").textContent=o[e]||"一起把概念用遊戲學會。",b("jumpLearn").innerHTML=Jt(t||e-1),ce=()=>{X(b("jumpOverlay"));const n=dt[`stage${e}`];n&&n()},xe(b("jumpOverlay")),ue&&clearTimeout(ue),ue=setTimeout(()=>{ce&&ce()},6e4)}b("jumpGo").addEventListener("click",()=>{ue&&clearTimeout(ue),ce&&ce()});let ye=null;function rt(){const e=b("celebrateRain");e&&(e.innerHTML=""),ye&&(clearTimeout(ye),ye=null)}function Zt(){rt(),xe(b("celebrateOverlay"));const e=document.getElementById("celebrateNick");e&&(e.textContent=Oe()),Qt(),ye=setTimeout(()=>je(),5200)}function je(){X(b("celebrateOverlay")),rt()}b("celebrateClose").addEventListener("click",je);b("celebrateOk").addEventListener("click",je);b("certClose").addEventListener("click",ot);b("certOk").addEventListener("click",ot);b("certPrint").addEventListener("click",()=>{nt(),window.print()});function Qt(){const e=b("celebrateRain"),t=["🥳","🎉","🎊","🎀","🎈","🎁","🧁"],o=46;for(let n=0;n<o;n++){const s=document.createElement("div");s.className="party-item",s.textContent=t[Math.floor(Math.random()*t.length)];const i=Math.random()*100,d=Math.random()*.9,v=2.8+Math.random()*2.4,S=18+Math.random()*20,E=(Math.random()*2-1)*120;s.style.left=i+"vw",s.style.animationDuration=v+"s",s.style.animationDelay=d+"s",s.style.fontSize=S+"px",s.animate([{transform:"translateY(-40px) translateX(0px) rotate(0deg) scale(.95)",opacity:0},{transform:`translateY(10vh) translateX(${E*.25}px) rotate(120deg) scale(1.0)`,opacity:1,offset:.25},{transform:`translateY(120vh) translateX(${E}px) rotate(520deg) scale(1.06)`,opacity:1}],{duration:v*1e3,delay:d*1e3,easing:"linear",fill:"forwards"}),e.appendChild(s),setTimeout(()=>s.remove(),(v+d)*1e3+200)}}const dt={stage1:()=>Mt(ae),stage2:()=>Nt(ae),stage3:()=>It(ae),stage4:()=>At(ae),stage5:()=>Bt(ae)};function es(){Xe("EcoCup｜手提友善設計","番外篇：用設計解決『不想帶』的真正原因",Ae),Ze(`
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
  `,b);const e=b("ecoCupWrap"),t=b("ecoVoteMsg"),o={1:"手提環杯蓋",2:"防漏＋單手開",3:"可折疊／縮短",4:"杯套多功能"};e.querySelectorAll(".eco-choice").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".eco-choice").forEach(s=>{s.classList.remove("selected","pulse")}),n.classList.add("selected","pulse"),setTimeout(()=>n.classList.remove("pulse"),320),t.classList.remove("hidden"),t.innerHTML=`你選的是 <b>${o[n.dataset.pick]}</b> ✅（這個原型最能解決「不想帶」的痛點之一）`;try{lt()}catch{}})})}Lt({$:b,stages:dt,state:h});const ct=()=>Tt(Ae);St({$:b,t:Qe,stopTTS:Ce,resetGameState:zt,closeModal:ct,hide:X,ensureAudio:Z,openEcoCupIdea:es});const ae={$:b,show:xe,hide:X,setText:L,openModal:Xe,bodyHTML:Ze,modalDeps:Ae,closeModal:ct,setModalCleanup:Ct,state:h,addEco:Wt,spendEco:_t,markCompleted:Yt,jumpTo:Xt,ensureAudio:Z,sfxFlip:Ft,sfxBad:Pt,sfxGood:lt,sfxLevelUp:it,sfxEncourage:at,sfxYA:Gt,stopTTS:Ce,speakOnce:Kt,nick:Oe,openCelebrate:Zt,openCertificate:nt},Ue=document.getElementById("btnStartGame"),fe=document.getElementById("nicknameInput"),Ke=document.getElementById("nickPreview"),Ne=document.getElementById("nickErr");function ut(e){return(e||"").trim()}fe&&Ke&&fe.addEventListener("input",()=>{Ke.textContent=ut(fe.value)||"冒險者"},{passive:!0});Ue&&Ue.addEventListener("click",()=>{Z();const e=ut(fe?fe.value:"");if(!e){Ne&&(Ne.classList.remove("hidden"),Ne.textContent="請先輸入暱稱再開始～"),at();return}jt(e);const t=document.getElementById("playerTitle");t&&(t.textContent=Be(e));const o=document.getElementById("playerSession");o&&(o.textContent=we()),$e(),et(),it()});function Oe(){return Ee()||"冒險者"}const Ye=document.getElementById("btnChangeNick");Ye&&Ye.addEventListener("click",()=>{Z(),localStorage.removeItem(Re),$e(),tt()});ke(h,L);Ie(h,b,L);$e();const Ve=Ee();if(Ve){const e=b("playerTitle");e&&(e.textContent=Be(Ve));const t=b("playerSession");t&&(t.textContent=we()),et()}else tt();
