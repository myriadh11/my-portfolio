const S=window.SITE||{settings:{},stats:[],projects:[],clients:[]},st=S.settings||{};
const CONFIG={stats:S.stats||[],email:st.email||"",instagram:st.instagram||"",whatsapp:st.whatsapp||"",social:{Behance:st.behance||"",LinkedIn:st.linkedin||""},clients:S.clients||[],
 projects:(S.projects||[]).map(p=>({t:(p.title||{}).ar||(p.title||{}).en||"",te:(p.title||{}).en||"",c:p.category,d:p.duration||"",driveUrl:p.driveUrl||"",g:p.g,pub:p.published!==false,feat:!!p.featured,th:p.thumb||"",tools:p.tools||[],o:p.orient==="v"?"v":"h",de:(p.description||{}).en||"",da:(p.description||{}).ar||""}))};
const $=s=>document.querySelector(s);const TL=window.TOOLS||{};
const grad=p=>{const [a,b]=(p.g||"#444,#0b0b0d").split(",");return `radial-gradient(circle at 30% 20%,${a},${b} 75%)`};
const thumb=p=>{const id=driveId(p.driveUrl);return p.th?`url(${p.th}) center/cover`:id?`url(https://drive.google.com/thumbnail?id=${id}&amp;sz=w640) center/cover`:""};
const tl=p=>{const l=(p.tools||[]).filter(k=>TL[k]);return l.length?`<span class="tl">${l.map(k=>`<span title="${TL[k].n}">${TL[k].svg}</span>`).join("")}</span>`:""};
const driveId=u=>{const m=/^https:\/\/drive\.google\.com\/file\/d\/([\w-]{10,})\//.exec(u||"");return m&&m[1]};
const T={en:{title:"Riyadh al kendi — Motion Graphics & Video Editor",n_home:"Home",n_works:"Works",n_services:"Services",n_contact:"Contact",hi:"Hello, I’m Riyadh.",name:"Riyadh<br>al kendi",name2:"Riyadh al kendi",role:"Motion Graphics &amp; Video Editor",desc:"I edit videos and bring them to life with motion graphics — turning raw footage into engaging stories for brands, creators, and social media.",yemen:"Yemen",langs:"English, Arabic",view:"View My Work",touch:"Get in Touch",wh:"My Works",ws:"A selection of videos and motion graphics I’ve created.",ch:"Editing for",cs:"Brands and creators I’ve worked with.",cn:"Client name",gv:"Reels & vertical videos",gh:"Widescreen videos",od:"Open in Google Drive",sh:"Services",ss:"What I do best.",s1:"Video Editing",d1:"Professional editing for social media, promotional videos, and digital content.",s2:"Motion Graphics",d2:"Modern animated graphics, typography, transitions, and visual storytelling.",s3:"Post Production",d3:"Professional finishing, color correction, sound, and visual polish.",s4:"Social Media Content",d4:"Short-form video content optimized for Instagram Reels and other platforms.",kh:"Contact",ks:"Reach me on WhatsApp or through the links below.",back:"← Back to portfolio",none:"No projects found.",nov:"No video linked yet, or the Drive file isn’t set to “Anyone with the link”.",copied:"Email copied ✓",cats:{All:"All","Video Editing":"Video Editing","Motion Graphics":"Motion Graphics","Social Media":"Social Media","Visual Design":"Visual Design"}},
ar:{title:"رياض الكندي — موشن جرافيك ومونتير فيديو",n_home:"الرئيسية",n_works:"الأعمال",n_services:"الخدمات",n_contact:"تواصل",hi:"مرحباً، أنا رياض.",name:"رياض<br>الكندي",name2:"رياض الكندي",role:"موشن جرافيك ومونتير فيديو",desc:"أقوم بمونتاج الفيديوهات وأضيف لها الحياة بالموشن جرافيك، لأحوّل اللقطات الخام إلى قصص جذابة للعلامات التجارية وصنّاع المحتوى ومنصات التواصل.",yemen:"اليمن",langs:"الإنجليزية، العربية",view:"شاهد أعمالي",touch:"تواصل معي",wh:"أعمالي",ws:"مجموعة من الفيديوهات وأعمال الموشن جرافيك التي صنعتها.",ch:"مونتاج لصالح",cs:"علامات تجارية وصنّاع محتوى عملت معهم.",cn:"اسم العميل",gv:"ريلز وفيديوهات طولية",gh:"فيديوهات عريضة",od:"فتح في Google Drive",sh:"الخدمات",ss:"ما أتقنه.",s1:"مونتاج الفيديو",d1:"مونتاج احترافي لمحتوى السوشال ميديا والفيديوهات الترويجية والمحتوى الرقمي.",s2:"موشن جرافيك",d2:"رسوم متحركة عصرية وتايبوجرافي وانتقالات وسرد بصري.",s3:"ما بعد الإنتاج",d3:"تشطيب احترافي وتصحيح ألوان وصوت ولمسات بصرية.",s4:"محتوى السوشال ميديا",d4:"فيديوهات قصيرة مهيأة لريلز إنستغرام وباقي المنصات.",kh:"تواصل",ks:"تواصل معي عبر واتساب أو الروابط أدناه.",back:"→ العودة إلى الأعمال",none:"لا توجد أعمال.",nov:"لا يوجد فيديو مرتبط بعد، أو أن ملف Drive ليس مضبوطاً على «أي شخص لديه الرابط».",copied:"تم نسخ الإيميل ✓",cats:{All:"الكل","Video Editing":"مونتاج فيديو","Motion Graphics":"موشن جرافيك","Social Media":"سوشال ميديا","Visual Design":"تصميم بصري"}}};
let lang=(()=>{try{const v=localStorage.getItem("lang");if(v==="ar"||v==="en")return v}catch(_){}return (navigator.language||"").startsWith("ar")?"ar":"en"})();
const cats=["All","Video Editing","Motion Graphics","Social Media","Visual Design"];let cat="All",q="";
$("#yr").textContent=new Date().getFullYear();
if(CONFIG.stats.length)$("#stats").innerHTML=CONFIG.stats.map(s=>`<div><b>${s.v}</b><span>${s.l}</span></div>`).join("");else $("#stats").remove();
function card(p){const t=lang==="ar"?p.t:(p.te||p.t);return `<button class="card ${p.o}" data-i="${p.i}" aria-label="${t.replace(/"/g,"&quot;")}"><div class="bg" style="background:${thumb(p)?thumb(p)+",":""}${grad(p)}"></div><span class="pl"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" fill="#fff"/></svg></span>${tl(p)}</button>`}
function draw(){const l=CONFIG.projects.map((p,i)=>({...p,i})).filter(p=>p.pub!==false).sort((a,b)=>(b.feat?1:0)-(a.feat?1:0)),v=l.filter(p=>p.o==="v"),h=l.filter(p=>p.o!=="v");
const g=(k,a,c)=>a.length?`<h3 class="gh">${T[lang][k]}</h3><div class="grid ${c}">${a.map(card).join("")}</div>`:"";
$("#grid").innerHTML=l.length?g("gv",v,"v")+g("gh",h,"h"):'<p class="sub">'+T[lang].none+'</p>'}
draw();

$("#grid").onclick=e=>{const c=e.target.closest(".card");if(!c)return;const p=CONFIG.projects[c.dataset.i],id=driveId(p.driveUrl);
$("#vid").innerHTML=id?`<iframe src="https://drive.google.com/file/d/${id}/preview" allow="autoplay;fullscreen" allowfullscreen title="${p.t}"></iframe>`:`<div><b style="color:#fff;font-size:18px">${lang==="ar"?p.t:(p.te||p.t)}</b><br>${T[lang].nov}</div>`;
$("#box").className="box "+p.o;$("#mtitle").textContent=lang==="ar"?p.t:(p.te||p.t);$("#mdesc").textContent=(lang==="ar"?p.da:p.de)||p.de||p.da||"";$("#mt").innerHTML=(p.tools||[]).filter(k=>TL[k]).map(k=>`<span>${TL[k].svg}${TL[k].n}</span>`).join("");$("#od").hidden=!id;if(id)$("#od").href="https://drive.google.com/file/d/"+id+"/view";document.body.style.overflow="hidden";$("#modal").classList.add("on")};
const close=()=>{document.body.style.overflow="";$("#modal").classList.remove("on");$("#vid").innerHTML="";$("#mt").innerHTML=""};$("#cl").onclick=close;$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")close()});document.onkeydown=e=>e.key==="Escape"&&close();
const setMenu=o=>{$("#lk").classList.toggle("on",o);$("#mb").setAttribute("aria-expanded",o);$("#mb").textContent=o?"✕":"☰"};
$("#mb").onclick=e=>{e.stopPropagation();setMenu(!$("#lk").classList.contains("on"))};$("#lk").onclick=()=>setMenu(false);
document.addEventListener("click",e=>{if($("#lk").classList.contains("on")&&!e.target.closest("nav"))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
matchMedia("(min-width:821px)").addEventListener("change",e=>e.matches&&setMenu(false));
const I={ig:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6"/></svg>',ml:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',wa:'<svg viewBox="0 0 24 24"><path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.4L3 21z"/><path d="M9 8.5c0 3.2 2.8 6 6 6l1.3-1.3-2-1-.9.8c-1-.4-1.9-1.3-2.3-2.3l.8-.9-1-2L9 8.5z"/></svg>'};
const wn=(CONFIG.whatsapp||"").replace(/\D/g,"");
$("#soc").innerHTML=(CONFIG.instagram?`<a class="ic" href="${CONFIG.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>`:`<a class="ic off" href="#" data-miss="Instagram" aria-label="Instagram">${I.ig}</a>`)
+`<button class="ic ${CONFIG.email?"":"off"}" data-act="mail" aria-label="Copy email" title="Copy email">${I.ml}</button>`
+(wn?`<a class="ic" href="https://wa.me/${wn}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>`:`<a class="ic off" href="#" data-miss="WhatsApp" aria-label="WhatsApp">${I.wa}</a>`)
+Object.entries(CONFIG.social).filter(([,u])=>u).map(([k,u])=>`<a href="${u}" target="_blank" rel="noopener">${k}</a>`).join("");
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>x.classList.remove("on"),2200)}
$("#soc").onclick=e=>{const el=e.target.closest("[data-act],[data-miss]");if(!el)return;
if(el.dataset.miss){e.preventDefault();toast(el.dataset.miss+" link not added yet");return}
if(!CONFIG.email){toast("Email not added yet");return}
const t=document.createElement("textarea");t.value=CONFIG.email;t.style.cssText="position:fixed;opacity:0";document.body.append(t);t.select();let ok=false;try{ok=document.execCommand("copy")}catch(_){}t.remove();
if(!ok&&navigator.clipboard)navigator.clipboard.writeText(CONFIG.email).then(()=>toast(T[lang].copied),()=>toast(CONFIG.email));else toast(ok?T[lang].copied:CONFIG.email)};
const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.12});document.querySelectorAll(".rv").forEach(x=>io.observe(x));
const ph=$("#ph");ph.onmousemove=e=>{const r=ph.getBoundingClientRect();ph.style.transform=`perspective(800px) rotateY(${((e.clientX-r.left)/r.width-.5)*6}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*6}deg)`};ph.onmouseleave=()=>ph.style.transform="";

const plat=u=>{const h=(u.match(/^https?:\/\/(?:www\.)?([^\/]+)/)||[])[1]||"";return /instagram/.test(h)?"Instagram":/youtu/.test(h)?"YouTube":/tiktok/.test(h)?"TikTok":/facebook|fb\./.test(h)?"Facebook":/(twitter|^x\.com)/.test(h)?"X":h};
function drawClients(){const real=CONFIG.clients.length>0,l=real?CONFIG.clients:[{name:T[lang].cn},{name:T[lang].cn},{name:T[lang].cn}];
$("#cgrid").innerHTML=l.map(c=>{const ok=/^https?:\/\//.test(c.url||""),av=`<b>${(c.name||"?").trim().charAt(0).toUpperCase()}</b>`+((c.img||(window.avatarUrl&&avatarUrl(c.url||"")))?`<img src="${c.img||avatarUrl(c.url)}" alt="" referrerpolicy="no-referrer" onerror="this.remove()">`:""),
in_=`<span class="av">${av}</span><span class="cn">${c.name}</span><small>${ok?plat(c.url):""}</small>`;
return ok?`<a class="cl" href="${c.url}" target="_blank" rel="noopener">${in_}</a>`:`<div class="cl${real?"":" smp"}">${in_}</div>`}).join("")}
function applyLang(l){lang=l;try{localStorage.setItem("lang",l)}catch(_){}
document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";
document.querySelectorAll("[data-i18n]").forEach(el=>{const v=T[l][el.dataset.i18n];if(v!=null)el.innerHTML=v});
$("#lg").textContent=l==="ar"?"EN":"العربية";document.title=T[l].title;draw();drawClients()}
$("#lg").onclick=()=>applyLang(lang==="ar"?"en":"ar");applyLang(lang);
