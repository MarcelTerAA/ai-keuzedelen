/* AI-keuzedelen Ter AA — kern: opslag, profiel, router, weekpagina's, logboek, export */
(function(){
'use strict';

const LOGO = window.TERAA_LOGO;
const A_SVG = window.TERAA_A;

/* ---------- opslag (alleen in deze browser) ---------- */
function lees(k, std){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : std; }catch(e){ return std; } }
function schrijf(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }

const DOELGROEPEN = {
  ict:   {naam:'ICT', ico:'💻', lang:'ICT (o.a. Software Developer, Expert IT Systems, Medewerker ICT)'},
  bouw:  {naam:'Bouwkunde', ico:'🏗️', lang:'Bouwkunde (tekenaar, werkvoorbereider, uitvoerder)'},
  tt:    {naam:'Techniek & Technologie', ico:'⚙️', lang:'Techniek & Technologie (mechatronica, elektrotechniek, werktuigbouw)'},
  design:{naam:'Design', ico:'🎨', lang:'Design (Mediavormgever, Ruimtelijk vormgever, Content creator)'},
  llo:   {naam:'LLO / werkende', ico:'🧑‍🏫', lang:'LLO: docent, collega of externe deelnemer'}
};
const TOOLS = {copilot:'Microsoft Copilot', chatgpt:'ChatGPT', claude:'Claude', gemini:'Google Gemini'};
window.AIKD = {DOELGROEPEN, TOOLS, lees, schrijf};

function profiel(){ return lees('aikd_profiel', {doelgroep:'', beroep:'', tools:{}}); }
function heeftPro(){ const t = profiel().tools||{}; return Object.values(t).includes('betaald'); }

const esc = s => String(s==null?'':s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
window.AIKD.esc = esc;

/* ---------- gedeelde header ---------- */
function header(titel, sub, rechtsHtml){
  return `<header class="top"><div class="top-in">
    <a href="index.html" class="logo" aria-label="Ter AA — naar de startpagina">${LOGO}</a>
    <div class="titel">${titel}<small>${sub}</small></div>
    <div class="rechts">${rechtsHtml||''}</div>
  </div></header>`;
}
window.AIKD.header = header;

/* =================================================================
   KEUZEDEEL-APP (k1499.html / k1515.html)
   ================================================================= */
function startKeuzedeel(){
  const KD = window.KD;
  document.body.classList.add('kd-'+KD.code);
  const SKEY = 'aikd_'+KD.code;
  let st = lees(SKEY, {t:{}, af:{}, quiz:{}, wd:{}, refl:{}});
  const bewaar = () => schrijf(SKEY, st);
  const SCHERMEN = [['start','Overzicht'],['leren','Leren'],['oefenen','Oefenen'],['doen','Opdrachten'],['check','Check']];

  document.body.innerHTML = header(KD.titel, KD.code.toUpperCase()+' · '+KD.kort,
      `<a class="pil verberg-m" href="#profiel">👤 Profiel</a>
       <a class="pil verberg-m" href="#logboek">📓 Logboek</a>
       <button class="pil menuknop" id="menuknop">☰ Weken</button>`)
    + `<div class="shell"><nav class="zij" id="zij"></nav><main><div class="inhoud" id="inhoud"></div></main></div>
       <div class="navbar"><div class="navbar-in" id="navbar"></div></div>`;
  const $in = document.getElementById('inhoud'), $zij = document.getElementById('zij'), $nav = document.getElementById('navbar');
  document.getElementById('menuknop').onclick = () => document.body.classList.toggle('menu-open');

  const week = n => KD.weken.find(w => w.nr === n);
  const weekKlaar = w => (w.opdrachten||[]).length>0 && w.opdrachten.every(o => st.af[w.nr+'.'+o.id]);
  const urenWeek = w => (w.opdrachten||[]).reduce((s,o)=>s+(o.uren||0),0) + (w.urenLeren||0);
  const urenGedaan = () => KD.weken.reduce((s,w)=> s + (w.opdrachten||[]).reduce((t,o)=> t + (st.af[w.nr+'.'+o.id] ? (o.uren||0) : 0),0),0);
  const urenTotaal = () => KD.weken.reduce((s,w)=>s+(w.opdrachten||[]).reduce((t,o)=>t+(o.uren||0),0),0);

  function zijmenu(huidig){
    const klaarN = KD.weken.filter(weekKlaar).length;
    let h = `<a href="#start" class="${huidig==='start'?'nu':''}"><span class="nr">⌂</span>Start &amp; planning</a>
      <a href="#profiel" class="${huidig==='profiel'?'nu':''}"><span class="nr">👤</span>Mijn profiel &amp; tools</a>
      <div class="voortgang meter" title="${klaarN} van ${KD.weken.length} weken af"><i style="width:${Math.round(klaarN/KD.weken.length*100)}%"></i></div>
      <div class="hint" style="padding:0 10px">${klaarN}/${KD.weken.length} weken af · ${urenGedaan()} van ${urenTotaal()} opdracht-uren af</div>`;
    KD.fases.forEach(f => {
      h += `<h4>${esc(f.naam)}</h4>`;
      f.weken.forEach(n => { const w = week(n);
        h += `<a href="#w${n}" class="${huidig===n?'nu':''} ${weekKlaar(w)?'klaar':''}"><span class="nr">${n}</span>${esc(w.titel)}</a>`; });
    });
    h += `<h4>Afronden</h4>
      <a href="#toetsing" class="${huidig==='toetsing'?'nu':''}"><span class="nr">🎓</span>Toetsing &amp; beroepsproducten</a>
      <a href="#logboek" class="${huidig==='logboek'?'nu':''}"><span class="nr">📓</span>Mijn logboek</a>
      <a href="index.html"><span class="nr">←</span>Alle keuzedelen</a>`;
    $zij.innerHTML = h;
  }

  function navbar(vorige, volgende, stapjes){
    $nav.innerHTML = `${vorige?`<a class="knop rand" href="${vorige[0]}">← ${esc(vorige[1])}</a>`:'<span></span>'}
      <div class="stapjes">${stapjes||''}</div>
      ${volgende?`<a class="knop accent rechtsknop" href="${volgende[0]}">${esc(volgende[1])} →</a>`:''}`;
  }

  /* ---------- routes ---------- */
  function route(){
    document.body.classList.remove('menu-open');
    const h = (location.hash||'#start').slice(1).split('/');
    window.scrollTo(0,0);
    if(h[0]==='profiel') return toonProfiel();
    if(h[0]==='logboek') return toonLogboek();
    if(h[0]==='toetsing') return toonToetsing();
    const m = h[0].match(/^w(\d+)$/);
    if(m && week(+m[1])) return toonWeek(week(+m[1]), h[1]||'start');
    toonStart();
  }
  window.addEventListener('hashchange', route);

  /* ---------- startpagina keuzedeel ---------- */
  function toonStart(){
    zijmenu('start');
    const p = profiel();
    let h = `<section class="hero"><div class="grootA">${A_SVG}</div>
      <span class="label">Keuzedeel ${KD.code.toUpperCase()} · 240 SBU · 18 weken</span>
      <h1>${esc(KD.titel)}</h1><p>${KD.intro}</p>
      <div class="fasebalk">${KD.fases.map(f=>`<span>${esc(f.naam)} · wk ${f.weken[0]}–${f.weken[f.weken.length-1]}</span>`).join('')}</div></section>`;
    if(!p.doelgroep) h += `<div class="kaart zalm"><div class="kop"><span class="ico">👤</span><h3>Eerst: vertel wie je bent</h3></div>
      <p>Alle opdrachten voer je uit in <b>je eigen beroep</b>. Kies in je profiel je opleiding of werkveld en welke AI-tools je hebt (gratis of betaald). Dan krijg je voorbeelden en extra opdrachten die bij jou passen.</p>
      <a class="knop" href="#profiel">Profiel invullen →</a></div>`;
    h += `<div class="kaart"><h3 style="margin-top:0">Zo werkt dit keuzedeel</h3>
      <div class="tabelwrap"><table class="tabel"><tr><th></th><th>Wat</th><th>Uren</th></tr>
      <tr><td>🏫</td><td><b>Contactmoment</b> (1× per week): AI-nieuws, uitleg en demo, werken met begeleiding, discussie</td><td>3 u/wk · 54 u</td></tr>
      <tr><td>💻</td><td><b>Zelfstandig</b> met deze website: leren, oefenen, opdrachten, beroepsproduct</td><td>±10 u/wk · 186 u</td></tr>
      <tr><td>🎓</td><td><b>Toets</b>: 2 beroepsproducten + criteriumgericht gesprek</td><td>wk 16–18</td></tr></table></div>
      <p class="hint">Elke week heeft vijf stappen: <b>Overzicht → Leren → Oefenen → Opdrachten → Check</b>. Je antwoorden worden automatisch bewaard in deze browser en komen samen in je <a href="#logboek">logboek</a> (= je bewijs voor het examen). Exporteer je logboek regelmatig, want als je je browsergegevens wist ben je ze kwijt.</p></div>`;
    h += `<div class="kaart vlak"><h3 style="margin-top:0">Weekplanning</h3><div class="tabelwrap"><table class="tabel">
      <tr><th>Wk</th><th>Thema</th><th>Dossier</th><th>Zelfst.</th><th></th></tr>
      ${KD.weken.map(w=>`<tr><td>${w.nr}</td><td><a href="#w${w.nr}">${esc(w.titel)}</a></td><td>${esc(w.dossier||'')}</td><td>${urenWeek(w)} u</td><td>${weekKlaar(w)?'✅':''}</td></tr>`).join('')}
      </table></div></div>`;
    $in.innerHTML = h;
    const eerste = KD.weken.find(w=>!weekKlaar(w)) || KD.weken[0];
    navbar(null, ['#w'+eerste.nr, (eerste.nr===1?'Begin bij week 1':'Verder met week '+eerste.nr)]);
  }

  /* ---------- profiel ---------- */
  function toonProfiel(){
    zijmenu('profiel');
    const p = profiel();
    $in.innerHTML = `<span class="label">Mijn profiel</span><h1>Wie ben jij en wat gebruik je?</h1>
      <p>Dit profiel geldt voor beide AI-keuzedelen en blijft alleen op dit apparaat. Je naam is niet nodig.</p>
      <h3>1. Mijn opleiding of werkveld</h3>
      <div class="opties twee" id="dg">${Object.entries(DOELGROEPEN).map(([k,d])=>`<button class="optie ${p.doelgroep===k?'aan':''}" data-k="${k}"><span class="ico">${d.ico}</span><span class="tx"><b>${d.naam}</b><small>${d.lang}</small></span></button>`).join('')}</div>
      <label class="veld">Mijn (toekomstige) beroep of functie, zo precies mogelijk</label>
      <input type="text" id="beroep" value="${esc(p.beroep)}" placeholder="bijv. werkvoorbereider bij een aannemer, docent Nederlands, junior developer">
      <h3>2. Mijn AI-tools</h3><p class="hint">Gratis is genoeg voor alle verplichte opdrachten. Heb je ergens een betaalde versie (of een licentie via school of werk)? Dan zie je extra <span class="tag pro">PRO</span>-opdrachten.</p>
      <div class="tabelwrap"><table class="tabel" id="tooltab"><tr><th>Tool</th><th>Geen</th><th>Gratis / school</th><th>Betaald</th></tr>
      ${Object.entries(TOOLS).map(([k,n])=>`<tr><td>${n}</td>${['','gratis','betaald'].map(v=>`<td><input type="radio" name="t_${k}" value="${v}" ${((p.tools||{})[k]||'')===v?'checked':''}></td>`).join('')}</tr>`).join('')}
      </table></div>
      <div class="kaart vlak"><b>Privacy-afspraak.</b> Gebruik bij voorkeur <b>Copilot met je school- of werkaccount</b> (dan wordt je invoer niet gebruikt om het model te trainen). Zet in géén enkele tool persoonsgegevens van anderen, wachtwoorden of vertrouwelijke bedrijfsinformatie. In week 4 leer je precies waarom.</div>
      <p class="bewaard" id="pbew"></p>`;
    const opslaan = () => { const q = profiel();
      q.beroep = document.getElementById('beroep').value;
      q.tools = {}; Object.keys(TOOLS).forEach(k=>{ const r = document.querySelector(`input[name=t_${k}]:checked`); q.tools[k] = r ? r.value : ''; });
      schrijf('aikd_profiel', q); document.getElementById('pbew').textContent = '✓ Bewaard'; };
    document.querySelectorAll('#dg .optie').forEach(b => b.onclick = () => {
      const q = profiel(); q.doelgroep = b.dataset.k; schrijf('aikd_profiel', q);
      document.querySelectorAll('#dg .optie').forEach(x=>x.classList.toggle('aan', x===b)); opslaan(); });
    $in.querySelectorAll('input').forEach(i => i.addEventListener('input', opslaan));
    navbar(['#start','Start'], ['#w1','Naar week 1']);
  }

  /* ---------- context- en pro-blokken ---------- */
  function contextBlok(ctx){
    if(!ctx) return '';
    const dg = profiel().doelgroep;
    const eigen = dg && ctx[dg] ? `<div class="context"><b class="dg">${DOELGROEPEN[dg].ico} Voorbeeld voor ${DOELGROEPEN[dg].naam}</b>${ctx[dg]}</div>` : '';
    const rest = Object.keys(DOELGROEPEN).filter(k=>k!==dg && ctx[k]).map(k=>`<details><summary>${DOELGROEPEN[k].ico} Voorbeeld ${DOELGROEPEN[k].naam}</summary><div class="context">${ctx[k]}</div></details>`).join('');
    return eigen + `<div class="context-alle">${rest}</div>`;
  }
  function proBlok(html){
    if(!html) return '';
    return heeftPro() ? `<div class="pro"><b class="t">⭐ PRO-opdracht (betaalde versie)</b><div>${html}</div></div>`
      : `<details class="pro"><summary><b class="t">⭐ Heb je een betaalde versie? Extra opdracht</b></summary><div style="margin-top:8px">${html}</div></details>`;
  }
  window.AIKD.proBlok = proBlok;

  /* ---------- weekpagina ---------- */
  function toonWeek(w, scherm){
    zijmenu(w.nr);
    if(!SCHERMEN.some(s=>s[0]===scherm)) scherm = 'start';
    const i = SCHERMEN.findIndex(s=>s[0]===scherm);
    const kop = `<span class="label">Week ${w.nr} · ${esc(w.fase)} ${w.dossier?'· '+esc(w.dossier):''}</span><h1>${esc(w.titel)}</h1>`;
    let h = kop;

    if(scherm==='start'){
      h += `<div class="kaart accent"><div class="kop"><span class="ico">🎯</span><h3>Na deze week kun je…</h3></div><ul>${w.doelen.map(d=>`<li>${d}</li>`).join('')}</ul></div>`;
      if(w.contact){
        h += `<div class="kaart"><div class="kop"><span class="ico">🏫</span><h3>Contactmoment (3 uur)</h3></div>
          <div class="tijdlijn">${w.contact.tijdlijn.map(t=>`<div><b>${t[0]}</b><span>${t[1]}</span></div>`).join('')}</div></div>`;
        if(w.contact.stelling) h += `<div class="stelling"><span class="nr">Stelling van de week</span><h2>${esc(w.contact.stelling)}</h2>
          <div class="schaal opties twee" style="grid-template-columns:repeat(4,1fr)">${['Helemaal eens','Eens','Oneens','Helemaal oneens'].map(v=>`<button class="chip ${st.t[w.nr+'.stelling']===v?'aan':''}" data-st="${v}">${v}</button>`).join('')}</div>
          <p class="hint" style="margin:8px 0 0">Kies vóór de les. In de les bespreek je waarom.</p></div>`;
      }
      h += `<div class="kaart vlak"><div class="kop"><span class="ico">🗓️</span><h3>Zelfstandig deze week (±${urenWeek(w)} uur)</h3></div><ul>
        ${w.urenLeren?`<li>Leren + oefenen: ${w.urenLeren} u</li>`:''}
        ${(w.opdrachten||[]).map(o=>`<li>${esc(o.titel)}: ${o.uren} u ${st.af[w.nr+'.'+o.id]?'✅':''}</li>`).join('')}</ul></div>`;
    }
    if(scherm==='leren'){
      h += `<div class="uitleg kaart">${w.uitleg}</div>`;
      if(w.bronnen) h += `<div class="kaart vlak"><h3 style="margin-top:0">📚 Verder lezen / kijken</h3><ul>${w.bronnen.map(b=>`<li><a href="${b[1]}" target="_blank" rel="noopener">${esc(b[0])}</a>${b[2]?' – '+esc(b[2]):''}</li>`).join('')}</ul></div>`;
    }
    if(scherm==='oefenen'){
      h += `<p class="hint">Interactieve oefening(en). Wat je hier doet wordt bewaard; sommige uitkomsten gaan naar je logboek.</p><div id="widgets"></div>`;
    }
    if(scherm==='doen'){
      h += `<p class="hint">Werk deze opdrachten uit in <b>jouw eigen beroep</b>. Vink een opdracht af als hij klaar is. Je antwoorden komen in je logboek.</p>`;
      if(w.context) h += `<div class="kaart blauw"><div class="kop"><span class="ico">🧭</span><h3>Zo ziet het eruit in jouw vak</h3></div>${contextBlok(w.context)}</div>`;
      (w.opdrachten||[]).forEach(o=>{
        const key = w.nr+'.'+o.id;
        h += `<div class="opdracht ${st.af[key]?'af':''}" data-k="${key}">
          <div class="kopregel"><h3>${esc(o.titel)}</h3><label class="vinkje"><input type="checkbox" ${st.af[key]?'checked':''} data-af="${key}"> klaar</label></div>
          <div class="tags"><span class="tag uur">⏱ ${o.uren} uur</span>${o.product?`<span class="tag w">🎓 ${esc(o.product)}</span>`:''}${o.tool?`<span class="tag gratis">${esc(o.tool)}</span>`:''}</div>
          <div>${o.tekst}</div>
          ${o.invoer!==false?`<label class="veld">${esc(o.invoerLabel||'Jouw uitwerking (komt in je logboek)')}</label><textarea data-t="${key}" placeholder="${esc(o.invoer||'')}">${esc(st.t[key]||'')}</textarea><div class="bewaard" data-b="${key}"></div>`:''}
          ${proBlok(o.pro)}
        </div>`;
      });
    }
    if(scherm==='check'){
      h += `<div id="quiz"></div>
        <div class="kaart accent"><div class="kop"><span class="ico">🪞</span><h3>Reflectie</h3></div><p>${esc(w.reflectie||'Wat neem je mee van deze week naar je werk?')}</p>
        <textarea data-t="${w.nr}.reflectie" placeholder="Schrijf 3–5 zinnen. Wees eerlijk: wat ging goed, wat was lastig, wat ga je anders doen?">${esc(st.t[w.nr+'.reflectie']||'')}</textarea><div class="bewaard" data-b="${w.nr}.reflectie"></div></div>`;
    }
    $in.innerHTML = h;

    // koppelingen
    $in.querySelectorAll('[data-st]').forEach(b=>b.onclick=()=>{ st.t[w.nr+'.stelling']=b.dataset.st; bewaar(); $in.querySelectorAll('[data-st]').forEach(x=>x.classList.toggle('aan',x===b)); });
    $in.querySelectorAll('textarea[data-t]').forEach(t=>{ let tm; t.addEventListener('input',()=>{ st.t[t.dataset.t]=t.value; clearTimeout(tm); tm=setTimeout(()=>{bewaar(); const b=$in.querySelector(`[data-b="${t.dataset.t}"]`); if(b){b.textContent='✓ Bewaard'; setTimeout(()=>b.textContent='',1500);} },400); }); });
    $in.querySelectorAll('input[data-af]').forEach(c=>c.onchange=()=>{ st.af[c.dataset.af]=c.checked; bewaar(); c.closest('.opdracht').classList.toggle('af',c.checked); zijmenu(w.nr); });
    if(scherm==='oefenen') renderWidgets(w);
    if(scherm==='check') renderQuiz(w);

    // navigatie
    const stapjes = SCHERMEN.map((s,j)=>`<button class="${j===i?'nu':''}" onclick="location.hash='#w${w.nr}/${s[0]}'">${s[1]}</button>`).join('');
    const vorige = i>0 ? ['#w'+w.nr+'/'+SCHERMEN[i-1][0], SCHERMEN[i-1][1]] : (w.nr>1 ? ['#w'+(w.nr-1)+'/check','Week '+(w.nr-1)] : ['#start','Start']);
    const vw = week(w.nr+1);
    const volgende = i<SCHERMEN.length-1 ? ['#w'+w.nr+'/'+SCHERMEN[i+1][0], SCHERMEN[i+1][1]] : (vw ? ['#w'+vw.nr,'Week '+vw.nr] : ['#toetsing','Toetsing']);
    navbar(vorige, volgende, stapjes);
  }

  /* ---------- widgets ---------- */
  function renderWidgets(w){
    const box = document.getElementById('widgets');
    const lijst = Array.isArray(w.oefening) ? w.oefening : (w.oefening ? [w.oefening] : []);
    if(!lijst.length){ box.innerHTML = '<div class="kaart vlak">Deze week geen aparte oefening: ga direct naar de opdrachten.</div>'; return; }
    lijst.forEach((cfg, j)=>{
      const el = document.createElement('div'); el.className = 'widget'; box.appendChild(el);
      const sleutel = w.nr+'.'+(cfg.id||cfg.type+j);
      const ctx = {
        get: () => st.wd[sleutel],
        set: v => { st.wd[sleutel] = v; bewaar(); },
        log: (titel, tekst) => { st.t[sleutel+'.log'] = '['+titel+']\n'+tekst; bewaar(); },
        profiel: profiel(), pro: heeftPro(), proBlok
      };
      const f = (window.WIDGETS||{})[cfg.type];
      if(f) f(el, cfg, ctx); else el.innerHTML = '<p>Oefening "'+esc(cfg.type)+'" ontbreekt.</p>';
    });
  }

  /* ---------- quiz ---------- */
  function renderQuiz(w){
    const box = document.getElementById('quiz');
    if(!w.quiz || !w.quiz.length){ box.innerHTML=''; return; }
    const antw = {};
    box.innerHTML = `<div class="kaart"><div class="kop"><span class="ico">✅</span><h3>Check jezelf (${w.quiz.length} vragen)</h3></div>
      ${w.quiz.map((q,qi)=>`<div class="vraag" data-q="${qi}"><div class="v">${qi+1}. ${q.v}</div>
        <div class="opties">${q.o.map((o,oi)=>`<button class="optie" data-o="${oi}"><span class="tx">${o}</span></button>`).join('')}</div><div class="fb"></div></div>`).join('')}
      <div id="qscore"></div></div>`;
    box.querySelectorAll('.vraag').forEach(vd=>{
      const qi = +vd.dataset.q, q = w.quiz[qi];
      vd.querySelectorAll('.optie').forEach(b=>b.onclick=()=>{
        if(antw[qi]!==undefined) return;
        antw[qi] = +b.dataset.o;
        vd.querySelectorAll('.optie').forEach(x=>{ const oi=+x.dataset.o; if(oi===q.g) x.classList.add('goed'); else if(oi===antw[qi]) x.classList.add('fout'); });
        vd.querySelector('.fb').innerHTML = `<div class="feedback ${antw[qi]===q.g?'goed':'fout'}">${antw[qi]===q.g?'✔ Goed. ':'✘ Niet goed. '}${q.u||''}</div>`;
        if(Object.keys(antw).length===w.quiz.length){
          const goed = w.quiz.filter((q,i)=>antw[i]===q.g).length;
          st.quiz[w.nr] = Math.max(st.quiz[w.nr]||0, goed); bewaar();
          document.getElementById('qscore').innerHTML = `<div class="kaart vlak" style="margin-top:10px"><span class="score">${goed}/${w.quiz.length}</span> <span class="hint">beste score tot nu toe: ${st.quiz[w.nr]}/${w.quiz.length}</span>
            ${goed<w.quiz.length*0.7?'<p style="margin:8px 0 0">Lees de uitleg bij <a href="#w'+w.nr+'/leren">Leren</a> nog eens en probeer opnieuw (pagina herladen).</p>':''}</div>`;
        }
      });
    });
  }

  /* ---------- toetsing ---------- */
  function toonToetsing(){
    zijmenu('toetsing');
    const T = KD.toetsing;
    let h = `<span class="label">Afronden ${KD.code.toUpperCase()}</span><h1>Toetsing &amp; beroepsproducten</h1><p>${T.intro}</p>`;
    T.producten.forEach(p=>{
      h += `<div class="kaart"><div class="kop"><span class="ico">${p.ico}</span><h3>${esc(p.naam)}</h3></div>
        <div class="tags"><span class="tag w">${esc(p.dossier)}</span><span class="tag">inleveren week ${p.week}</span></div>
        <p>${p.wat}</p><h4>Dit lever je in</h4><ul>${p.inhoud.map(x=>`<li>${x}</li>`).join('')}</ul>
        <h4>Hierop word je beoordeeld (zelfcheck)</h4>
        <div>${p.criteria.map((c,ci)=>{const k='toets.'+p.id+'.'+ci; return `<label class="vinkje" style="display:flex;margin:4px 0;color:var(--tekst);font-size:14.5px"><input type="checkbox" data-zc="${k}" ${st.af[k]?'checked':''}> ${c}</label>`;}).join('')}</div></div>`;
    });
    h += `<div class="kaart accent"><div class="kop"><span class="ico">🗣️</span><h3>Criteriumgericht gesprek (week 18)</h3></div><p>${T.gesprek}</p>
      <h4>Voorbeeldvragen om je op voor te bereiden</h4><ul>${T.vragen.map(v=>`<li>${v}</li>`).join('')}</ul></div>
      <div class="kaart vlak"><b>Normering.</b> ${T.norm}</div>`;
    $in.innerHTML = h;
    $in.querySelectorAll('[data-zc]').forEach(c=>c.onchange=()=>{ st.af[c.dataset.zc]=c.checked; bewaar(); });
    navbar(['#w18','Week 18'], ['#logboek','Mijn logboek']);
  }

  /* ---------- logboek ---------- */
  function logboekTekst(){
    const p = profiel();
    let t = `# Logboek ${KD.code.toUpperCase()} – ${KD.titel}\n\nBeroep/opleiding: ${p.beroep||'-'} (${p.doelgroep?DOELGROEPEN[p.doelgroep].naam:'-'})\nGeëxporteerd: ${new Date().toLocaleString('nl-NL')}\nZelfstudie afgevinkt: ${urenGedaan()} van ${urenTotaal()} uur\n\n`;
    KD.weken.forEach(w=>{
      const delen = [];
      if(st.t[w.nr+'.stelling']) delen.push(`**Stelling** (${w.contact.stelling}): ${st.t[w.nr+'.stelling']}`);
      Object.keys(st.t).filter(k=>k.startsWith(w.nr+'.') && k.endsWith('.log')).forEach(k=>delen.push('**Oefening** '+st.t[k]));
      (w.opdrachten||[]).forEach(o=>{ const v = st.t[w.nr+'.'+o.id]; if(v) delen.push(`**${o.titel}**${st.af[w.nr+'.'+o.id]?' ✅':''}\n${v}`); });
      if(st.quiz[w.nr]!=null) delen.push(`**Check**: ${st.quiz[w.nr]}/${w.quiz.length}`);
      if(st.t[w.nr+'.reflectie']) delen.push(`**Reflectie**\n${st.t[w.nr+'.reflectie']}`);
      if(delen.length) t += `## Week ${w.nr} – ${w.titel}\n\n${delen.join('\n\n')}\n\n`;
    });
    return t;
  }
  function toonLogboek(){
    zijmenu('logboek');
    const t = logboekTekst();
    $in.innerHTML = `<span class="label">Mijn logboek</span><h1>Alles wat je hebt gemaakt</h1>
      <p>Je logboek is je <b>bewijs</b> voor de beroepsproducten en het eindgesprek. Exporteer het regelmatig (minstens na elke fase) en bewaar het in je OneDrive of portfolio.</p>
      <div class="knoppen"><button class="knop" id="dl">⬇ Download (.md)</button><button class="knop rand" id="kp">📋 Kopieer</button><button class="knop rand" id="pr">🖨 Afdrukken / PDF</button></div>
      <pre id="logtekst">${esc(t)}</pre>
      <details class="kaart vlak"><summary>Opnieuw beginnen…</summary><p>Dit wist al je antwoorden van ${KD.code.toUpperCase()} in deze browser. Je profiel blijft bewaard.</p><button class="knop oranje klein" id="wis">Alles van ${KD.code.toUpperCase()} wissen</button></details>`;
    document.getElementById('dl').onclick = ()=>{ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([t],{type:'text/markdown'})); a.download=`logboek-${KD.code}.md`; a.click(); };
    document.getElementById('kp').onclick = e=>{ navigator.clipboard.writeText(t).then(()=>e.target.textContent='✓ Gekopieerd'); };
    document.getElementById('pr').onclick = ()=>window.print();
    document.getElementById('wis').onclick = ()=>{ if(confirm('Weet je het zeker? Exporteer eerst je logboek.')){ st={t:{},af:{},quiz:{},wd:{},refl:{}}; bewaar(); location.hash='#start'; } };
    navbar(['#toetsing','Toetsing'], ['#start','Start']);
  }

  route();
}

window.AIKD.startKeuzedeel = startKeuzedeel;
})();
