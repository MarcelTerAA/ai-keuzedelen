/* AI-keuzedelen Ter AA — interactieve oefeningen.
   Elke widget: WIDGETS[type](el, cfg, ctx)  — ctx.get()/ctx.set(v) bewaart staat, ctx.log(titel,tekst) zet iets in het logboek. */
(function(){
'use strict';
const esc = s => String(s==null?'':s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const kop = cfg => `<h3>${cfg.ico||'🧩'} ${esc(cfg.titel)}</h3>${cfg.intro?`<p>${cfg.intro}</p>`:''}`;
const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const W = window.WIDGETS = {};

/* ---------- zelfscan: schuifjes 1-5, optioneel vergelijken met eerdere scan ---------- */
W.zelfscan = (el, cfg, ctx) => {
  const v = ctx.get() || {};
  let vorige = null;
  if(cfg.vergelijk){ try{ const s = JSON.parse(localStorage.getItem(cfg.vergelijk.opslag)||'{}'); vorige = (s.wd||{})[cfg.vergelijk.sleutel]; }catch(e){} }
  el.innerHTML = kop(cfg) + cfg.items.map((it,i)=>`<div style="margin:10px 0"><label class="veld">${esc(it)}</label>
    <div class="rij"><input type="range" min="1" max="5" step="1" value="${v[i]||1}" data-i="${i}"><b style="flex:0 0 auto;min-width:120px" data-l="${i}"></b></div>
    ${vorige&&vorige[i]?`<span class="hint">Bij de start: ${vorige[i]}/5</span>`:''}</div>`).join('') + `<div class="uitvoer" id="zs"></div>`;
  const lab = ['','1 · nog nooit gedaan','2 · een beetje','3 · lukt meestal','4 · gaat goed','5 · kan het uitleggen'];
  const upd = () => { const r = {}; el.querySelectorAll('input').forEach(x=>{ r[x.dataset.i]=+x.value; el.querySelector(`[data-l="${x.dataset.i}"]`).textContent = lab[x.value]; });
    ctx.set(r); const gem = (Object.values(r).reduce((a,b)=>a+b,0)/cfg.items.length).toFixed(1);
    let t = `Gemiddelde: ${gem}/5.`;
    if(vorige){ const gv = (Object.values(vorige).reduce((a,b)=>a+b,0)/cfg.items.length).toFixed(1); t += ` Bij de start was dat ${gv}/5 — groei: ${(gem-gv).toFixed(1)}.`; }
    el.querySelector('#zs').textContent = t;
    ctx.log(cfg.titel, cfg.items.map((it,i)=>`- ${it}: ${r[i]}/5`).join('\n')+'\n'+t); };
  el.querySelectorAll('input').forEach(x=>x.oninput=upd); upd();
};

/* ---------- tokenspel: voorspel het volgende woord + temperature ---------- */
W.tokenspel = (el, cfg, ctx) => {
  let ri = 0, temp = 0.7, topp = 1, gekozen = null;
  const teken = () => {
    const r = cfg.rondes[ri];
    // kansen herwegen met temperature (softmax over log-kans / T) en top-p
    let ps = r.kansen.map(k=>Math.pow(k[1], 1/Math.max(temp,0.05)));
    const som = ps.reduce((a,b)=>a+b,0); ps = ps.map(p=>p/som);
    const order = ps.map((p,i)=>[p,i]).sort((a,b)=>b[0]-a[0]);
    let cum = 0; const toegestaan = new Set();
    order.forEach(([p,i])=>{ if(cum < topp - 1e-9){ toegestaan.add(i); } cum += p; });
    el.innerHTML = kop(cfg) + `<div class="uitvoer" style="font-size:17px">${esc(r.zin)} <b style="background:var(--accent-l);padding:0 6px;border-radius:6px">${gekozen!==null?esc(r.kansen[gekozen][0]):'___'}</b></div>
      <p class="hint" style="margin-top:8px">Ronde ${ri+1}/${cfg.rondes.length}. Gok eerst zelf welk woord het taalmodel kiest. Kijk daarna naar de kansen.</p>
      <div>${r.kansen.map((k,i)=>`<button class="chip" data-g="${i}">${esc(k[0])}</button>`).join('')}</div>
      <div id="kans" ${gekozen===null?'hidden':''} style="margin-top:12px">
        ${r.kansen.map((k,i)=>`<div class="balk" style="${toegestaan.has(i)?'':'opacity:.3'}"><span>${esc(k[0])}</span><span class="bk"><i style="width:${(ps[i]*100).toFixed(0)}%"></i></span><b>${(ps[i]*100).toFixed(0)}%</b></div>`).join('')}
        <div class="rij" style="margin-top:10px"><label class="veld">Temperature: <b>${temp.toFixed(1)}</b><input type="range" min="0.1" max="2" step="0.1" value="${temp}" id="tp"></label>
        <label class="veld">Top-p: <b>${topp.toFixed(2)}</b><input type="range" min="0.1" max="1" step="0.05" value="${topp}" id="pp"></label></div>
        <div class="knoppen"><button class="knop klein" id="sample">🎲 Laat het model 10× kiezen</button>${ri<cfg.rondes.length-1?'<button class="knop klein rand" id="volg">Volgende zin →</button>':''}</div>
        <div class="uitvoer" id="smp">${r.uitleg?esc(r.uitleg):''}</div></div>`;
    el.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{ gekozen=+b.dataset.g; teken(); });
    const tp = el.querySelector('#tp'); if(tp) tp.onchange = ()=>{ temp=+tp.value; teken(); };
    const pp = el.querySelector('#pp'); if(pp) pp.onchange = ()=>{ topp=+pp.value; teken(); };
    const sm = el.querySelector('#sample'); if(sm) sm.onclick = ()=>{
      const idx = [...toegestaan]; const sub = idx.map(i=>ps[i]); const s = sub.reduce((a,b)=>a+b,0);
      const uit = []; for(let n=0;n<10;n++){ let x=Math.random()*s, j=0; while(x>sub[j] && j<sub.length-1){ x-=sub[j]; j++; } uit.push(r.kansen[idx[j]][0]); }
      el.querySelector('#smp').textContent = '10 keer gegenereerd: ' + uit.join(' · ') + `\n\nLage temperature → bijna altijd hetzelfde (voorspelbaar, saai). Hoge temperature → meer variatie (creatief, maar ook meer kans op onzin).`;
      ctx.set({temp, topp, ronde:ri}); ctx.log(cfg.titel, `Geëxperimenteerd met temperature ${temp} en top-p ${topp}.`);
    };
    const vg = el.querySelector('#volg'); if(vg) vg.onclick = ()=>{ ri++; gekozen=null; teken(); };
  };
  teken();
};

/* ---------- klikfouten: klik de foute zinnen/woorden aan (hallucinaties, persoonsgegevens, ...) ---------- */
W.klikfouten = (el, cfg, ctx) => {
  const aan = new Set((ctx.get()||{}).aan||[]); let nagekeken = false;
  const teken = () => {
    el.innerHTML = kop(cfg) + `<div class="uitvoer" style="font-size:15px;line-height:1.9">${cfg.delen.map((d,i)=>{
        let c = 'woord'; if(aan.has(i)) c += ' aan'; if(nagekeken && d.fout && !aan.has(i)) c += ' gemist';
        if(nagekeken && aan.has(i)) c += d.fout ? '' : ' fout';
        return `<span class="${c}" data-i="${i}" style="${nagekeken&&aan.has(i)&&!d.fout?'background:#FFE0D0;text-decoration:none;outline:2px dashed var(--oranje)':''}">${esc(d.t)}</span>`; }).join(' ')}</div>
      <div class="knoppen"><button class="knop klein" id="nk">Nakijken</button><button class="knop klein rand" id="rs">Opnieuw</button></div><div id="fb"></div>`;
    el.querySelectorAll('[data-i]').forEach(s=>s.onclick=()=>{ if(nagekeken) return; const i=+s.dataset.i; aan.has(i)?aan.delete(i):aan.add(i); ctx.set({aan:[...aan]}); teken(); });
    el.querySelector('#nk').onclick = ()=>{ nagekeken = true; teken(); toonFb(); };
    el.querySelector('#rs').onclick = ()=>{ nagekeken=false; aan.clear(); ctx.set({aan:[]}); teken(); };
  };
  const toonFb = () => {
    const fout = cfg.delen.map((d,i)=>[d,i]).filter(([d])=>d.fout);
    const gevonden = fout.filter(([d,i])=>aan.has(i)).length, onterecht = [...aan].filter(i=>!cfg.delen[i].fout).length;
    el.querySelector('#fb').innerHTML = `<div class="feedback ${gevonden===fout.length&&!onterecht?'goed':'fout'}"><b>${gevonden} van ${fout.length} gevonden${onterecht?`, ${onterecht} onterecht aangeklikt`:''}.</b></div>
      <ul style="margin-top:8px">${fout.map(([d])=>`<li><b>${esc(d.t)}</b> — ${esc(d.u||'')}</li>`).join('')}</ul>`;
    ctx.log(cfg.titel, `${gevonden}/${fout.length} gevonden, ${onterecht} onterecht.`);
  };
  teken();
};

/* ---------- sorteer: items in categorieën plaatsen, met uitleg ---------- */
W.sorteer = (el, cfg, ctx) => {
  const keuze = (ctx.get()||{}).k || {};
  const items = cfg.items;
  let nagekeken = false;
  const teken = () => {
    el.innerHTML = kop(cfg) + items.map((it,i)=>`<div class="kaart" style="padding:12px 14px;margin-bottom:8px;${nagekeken?(keuze[i]===it.c?'background:#E9F9F0':'background:#FFF0E8'):''}">
      <div style="font-size:14.5px">${esc(it.t)}</div>
      <div class="stoplicht" style="grid-template-columns:repeat(${cfg.cats.length},1fr)">${cfg.cats.map((c,ci)=>`<button class="${keuze[i]===ci?'aan':''}" data-i="${i}" data-c="${ci}">${esc(c)}</button>`).join('')}</div>
      ${nagekeken?`<div class="hint" style="margin-top:6px">${keuze[i]===it.c?'✔':'✘ Juist: <b>'+esc(cfg.cats[it.c])+'</b>.'} ${esc(it.u||'')}</div>`:''}</div>`).join('')
      + `<div class="knoppen"><button class="knop klein" id="nk">Nakijken</button><button class="knop klein rand" id="rs">Opnieuw</button></div><div id="sc"></div>`;
    el.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{ if(nagekeken) return; keuze[b.dataset.i]=+b.dataset.c; ctx.set({k:keuze}); teken(); });
    el.querySelector('#nk').onclick = ()=>{ nagekeken=true; teken(); const g = items.filter((it,i)=>keuze[i]===it.c).length;
      el.querySelector('#sc').innerHTML = `<div class="kaart vlak"><span class="score">${g}/${items.length}</span></div>`; ctx.log(cfg.titel, `Score ${g}/${items.length}`); };
    el.querySelector('#rs').onclick = ()=>{ nagekeken=false; for(const k in keuze) delete keuze[k]; ctx.set({k:{}}); teken(); };
  };
  teken();
};

/* ---------- volgorde: stappen in de juiste volgorde zetten ---------- */
W.volgorde = (el, cfg, ctx) => {
  let lijst = (ctx.get()||{}).l || shuffle(cfg.stappen.map((s,i)=>i));
  let nagekeken = false;
  const teken = () => {
    el.innerHTML = kop(cfg) + `<ol class="ordenlijst">${lijst.map((s,p)=>`<li class="${nagekeken?(s===p?'goed':'fout'):''}"><b>${p+1}</b><span>${esc(cfg.stappen[s])}</span>
      <button data-p="${p}" data-d="-1" ${p===0?'disabled':''} aria-label="omhoog">▲</button><button data-p="${p}" data-d="1" ${p===lijst.length-1?'disabled':''} aria-label="omlaag">▼</button></li>`).join('')}</ol>
      <div class="knoppen"><button class="knop klein" id="nk">Nakijken</button><button class="knop klein rand" id="hs">Husselen</button></div><div id="fb">${nagekeken&&cfg.uitleg?`<div class="feedback goed">${cfg.uitleg}</div>`:''}</div>`;
    el.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{ const p=+b.dataset.p, q=p+(+b.dataset.d); [lijst[p],lijst[q]]=[lijst[q],lijst[p]]; nagekeken=false; ctx.set({l:lijst}); teken(); });
    el.querySelector('#nk').onclick = ()=>{ nagekeken=true; teken(); const g=lijst.filter((s,p)=>s===p).length; ctx.log(cfg.titel, `${g}/${lijst.length} op de juiste plek.`); };
    el.querySelector('#hs').onclick = ()=>{ lijst = shuffle(lijst); nagekeken=false; teken(); };
  };
  teken();
};

/* ---------- bouwer: velden invullen -> gegenereerde tekst (prompt, systeeminstructie, canvas, model card) ---------- */
W.bouwer = (el, cfg, ctx) => {
  const v = ctx.get() || {};
  el.innerHTML = kop(cfg) + cfg.velden.map(f=>`<label class="veld">${esc(f.l)}${f.verplicht?' *':''}</label>
    ${f.lang?`<textarea data-k="${f.k}" placeholder="${esc(f.p||'')}" style="min-height:70px">${esc(v[f.k]||'')}</textarea>`
      : f.opties?`<select data-k="${f.k}"><option value="">— kies —</option>${f.opties.map(o=>`<option ${v[f.k]===o?'selected':''}>${esc(o)}</option>`).join('')}</select>`
      : `<input type="text" data-k="${f.k}" placeholder="${esc(f.p||'')}" value="${esc(v[f.k]||'')}">`}`).join('')
    + `<h4 style="margin-top:16px">${esc(cfg.uitvoerTitel||'Resultaat')}</h4>
    ${cfg.meter!==false?`<div class="meter"><i id="mt" style="width:0"></i></div><div class="hint" id="mtl"></div>`:''}
    <pre id="uit"></pre><div class="knoppen"><button class="knop klein" id="kp">📋 Kopieer</button></div>`;
  const upd = () => {
    el.querySelectorAll('[data-k]').forEach(x=>v[x.dataset.k]=x.value); ctx.set(v);
    const regels = cfg.sjabloon.map(r=>{ const ks = (r.match(/\{(\w+)\}/g)||[]).map(x=>x.slice(1,-1)); if(ks.length && ks.every(k=>!v[k])) return null; return r.replace(/\{(\w+)\}/g,(m,k)=>v[k]||'…'); }).filter(r=>r!==null);
    const tekst = regels.join('\n');
    el.querySelector('#uit').textContent = tekst || '(vul de velden in)';
    if(cfg.meter!==false){
      const tot = cfg.velden.reduce((s,f)=>s+(f.g||1),0), heb = cfg.velden.reduce((s,f)=>s+((v[f.k]||'').trim()?(f.g||1):0),0);
      const pct = Math.round(heb/tot*100); el.querySelector('#mt').style.width = pct+'%';
      const mist = cfg.velden.filter(f=>f.verplicht && !(v[f.k]||'').trim()).map(f=>f.l.toLowerCase());
      el.querySelector('#mtl').textContent = `Volledigheid ${pct}%` + (mist.length?` · nog nodig: ${mist.join(', ')}`:' · alle verplichte onderdelen staan erin');
    }
    ctx.log(cfg.titel, tekst);
  };
  el.querySelectorAll('[data-k]').forEach(x=>x.addEventListener('input',upd));
  el.querySelector('#kp').onclick = e => navigator.clipboard.writeText(el.querySelector('#uit').textContent).then(()=>e.target.textContent='✓ Gekopieerd');
  upd();
};

/* ---------- matrix: gewogen beslismatrix (tools of modellen vergelijken) ---------- */
W.matrix = (el, cfg, ctx) => {
  const s = ctx.get() || {opties: cfg.opties.slice(), crit: cfg.criteria.map(c=>({n:c, w:3})), sc:{}};
  const teken = () => {
    const tot = s.opties.map((o,oi)=>{ let t=0, m=0; s.crit.forEach((c,ci)=>{ t += (s.sc[oi+'_'+ci]||0)*c.w; m += 5*c.w; }); return m? Math.round(t/m*100):0; });
    const best = Math.max(...tot);
    el.innerHTML = kop(cfg) + `<div class="tabelwrap"><table class="tabel"><tr><th>Criterium</th><th>Gewicht</th>${s.opties.map((o,oi)=>`<th><input type="text" value="${esc(o)}" data-o="${oi}" style="min-width:90px;padding:5px 8px;margin:0"></th>`).join('')}</tr>
      ${s.crit.map((c,ci)=>`<tr><td><input type="text" value="${esc(c.n)}" data-c="${ci}" style="min-width:130px;padding:5px 8px;margin:0"></td>
        <td><select data-w="${ci}" style="padding:5px;margin:0">${[1,2,3,4,5].map(n=>`<option ${c.w===n?'selected':''}>${n}</option>`).join('')}</select></td>
        ${s.opties.map((o,oi)=>`<td><select data-s="${oi}_${ci}" style="padding:5px;margin:0"><option value="0">–</option>${[1,2,3,4,5].map(n=>`<option ${s.sc[oi+'_'+ci]===n?'selected':''}>${n}</option>`).join('')}</select></td>`).join('')}</tr>`).join('')}
      <tr><th>Totaal</th><th></th>${tot.map(t=>`<th style="${t===best&&t>0?'background:var(--accent-l)':''}">${t}%</th>`).join('')}</tr></table></div>
      <div class="knoppen"><button class="knop klein rand" id="pc">+ criterium</button><button class="knop klein rand" id="po">+ optie</button></div>
      <p class="hint">Gewicht 1 = niet zo belangrijk, 5 = heel belangrijk. Scores 1–5 per optie. Het totaal is een gewogen percentage. Een matrix helpt je kiezen, maar de onderbouwing (waaróm die score?) schrijf je in je opdracht.</p>`;
    el.querySelectorAll('[data-o]').forEach(x=>x.onchange=()=>{ s.opties[x.dataset.o]=x.value; bew(); });
    el.querySelectorAll('[data-c]').forEach(x=>x.onchange=()=>{ s.crit[x.dataset.c].n=x.value; bew(); });
    el.querySelectorAll('[data-w]').forEach(x=>x.onchange=()=>{ s.crit[x.dataset.w].w=+x.value; bew(); teken(); });
    el.querySelectorAll('[data-s]').forEach(x=>x.onchange=()=>{ s.sc[x.dataset.s]=+x.value; bew(); teken(); });
    el.querySelector('#pc').onclick = ()=>{ s.crit.push({n:'nieuw criterium', w:3}); bew(); teken(); };
    el.querySelector('#po').onclick = ()=>{ s.opties.push('optie '+(s.opties.length+1)); bew(); teken(); };
  };
  const bew = () => { ctx.set(s);
    const tot = s.opties.map((o,oi)=>{ let t=0,m=0; s.crit.forEach((c,ci)=>{ t+=(s.sc[oi+'_'+ci]||0)*c.w; m+=5*c.w; }); return o+': '+(m?Math.round(t/m*100):0)+'%'; });
    ctx.log(cfg.titel, '| Criterium (gewicht) | '+s.opties.join(' | ')+' |\n'+s.crit.map((c,ci)=>`| ${c.n} (${c.w}) | `+s.opties.map((o,oi)=>s.sc[oi+'_'+ci]||'-').join(' | ')+' |').join('\n')+'\nTotaal: '+tot.join(', ')); };
  teken();
};

/* ---------- tabel: generieke invultabel (testprotocol, testset, eisen, red-team, iteraties) ---------- */
W.tabel = (el, cfg, ctx) => {
  const s = ctx.get() || {rijen: (cfg.start||[]).map(r=>r.slice())};
  if(!s.rijen.length) s.rijen.push(cfg.kolommen.map(()=>''));
  const teken = () => {
    el.innerHTML = kop(cfg) + `<div class="tabelwrap"><table class="tabel"><tr><th>#</th>${cfg.kolommen.map(k=>`<th>${esc(k.n)}</th>`).join('')}<th></th></tr>
      ${s.rijen.map((r,ri)=>`<tr><td>${ri+1}</td>${cfg.kolommen.map((k,ki)=>`<td>${
        k.t==='keuze'?`<select data-r="${ri}" data-k="${ki}" style="padding:5px;margin:0;min-width:70px"><option value=""></option>${k.o.map(o=>`<option ${r[ki]===o?'selected':''}>${esc(o)}</option>`).join('')}</select>`
        : `<textarea data-r="${ri}" data-k="${ki}" style="min-height:44px;min-width:${k.b||120}px;padding:6px 8px;margin:0;font-size:13.5px" placeholder="${esc(k.p||'')}">${esc(r[ki]||'')}</textarea>`}</td>`).join('')}
        <td><button class="chip" data-del="${ri}" title="rij verwijderen">✕</button></td></tr>`).join('')}</table></div>
      <div class="knoppen"><button class="knop klein rand" id="plus">+ rij</button></div><div id="sam" class="uitvoer"></div>`;
    el.querySelectorAll('[data-r]').forEach(x=>x.addEventListener(x.tagName==='SELECT'?'change':'input',()=>{ s.rijen[x.dataset.r][x.dataset.k]=x.value; bew(); }));
    el.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{ s.rijen.splice(+b.dataset.del,1); if(!s.rijen.length) s.rijen.push(cfg.kolommen.map(()=>'')); bew(); teken(); });
    el.querySelector('#plus').onclick = ()=>{ s.rijen.push(cfg.kolommen.map(()=>'')); bew(); teken(); };
    samenvatting();
  };
  const samenvatting = () => {
    const box = el.querySelector('#sam'); if(!box) return;
    let t = `${s.rijen.length} rij(en).`;
    const ok = cfg.kolommen.findIndex(k=>k.t==='keuze' && k.o.includes('✔'));
    if(ok>=0){ const gevuld = s.rijen.filter(r=>r[ok]); const goed = gevuld.filter(r=>r[ok]==='✔').length;
      t += gevuld.length ? ` Geslaagd: ${goed}/${gevuld.length} = ${Math.round(goed/gevuld.length*100)}%.` + (cfg.doel?` (doel: ${cfg.doel}%)`:'') : ''; }
    box.textContent = t; return t;
  };
  const bew = () => { ctx.set(s); const t = samenvatting();
    ctx.log(cfg.titel, '| '+cfg.kolommen.map(k=>k.n).join(' | ')+' |\n'+s.rijen.map(r=>'| '+r.map(x=>(x||'').replace(/\n/g,' ')).join(' | ')+' |').join('\n')+'\n'+(t||'')); };
  teken();
};

/* ---------- beslisboom: vragen -> advies ---------- */
W.beslisboom = (el, cfg, ctx) => {
  let pad = [];
  const teken = () => {
    let knoop = cfg.start; pad.forEach(k => { knoop = k; });
    const n = cfg.knopen[knoop];
    el.innerHTML = kop(cfg) + (n.advies
      ? `<div class="kaart ${n.kleur||'accent'}"><b>${esc(n.titel||'Advies')}</b><p style="margin:6px 0 0">${n.advies}</p></div>`
      : `<p style="font-weight:600">${esc(n.v)}</p><div class="opties">${n.o.map(o=>`<button class="optie" data-n="${o[1]}"><span class="tx">${esc(o[0])}</span></button>`).join('')}</div>`)
      + `<div class="knoppen">${pad.length?'<button class="knop klein rand" id="tr">← Stap terug</button><button class="knop klein rand" id="ov">Opnieuw</button>':''}</div>`;
    el.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{ pad.push(b.dataset.n); teken(); });
    const tr = el.querySelector('#tr'); if(tr) tr.onclick = ()=>{ pad.pop(); teken(); };
    const ov = el.querySelector('#ov'); if(ov) ov.onclick = ()=>{ pad=[]; teken(); };
    if(n.advies){ ctx.set({pad}); ctx.log(cfg.titel, (n.titel||'Advies')+': '+n.advies.replace(/<[^>]+>/g,'')); }
  };
  teken();
};

/* ---------- toolkaart: overzicht AI-tools met filter ---------- */
W.toolkaart = (el, cfg, ctx) => {
  let filter = 'alle';
  const soorten = ['alle', ...new Set(cfg.tools.flatMap(t=>t.soort))];
  const teken = () => {
    el.innerHTML = kop(cfg) + `<div>${soorten.map(s=>`<button class="chip ${filter===s?'aan':''}" data-f="${s}">${esc(s)}</button>`).join('')}</div>
      <div class="tegels" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">${cfg.tools.filter(t=>filter==='alle'||t.soort.includes(filter)).map(t=>`<div class="kaart" style="margin:0">
        <div class="kop"><span class="ico">${t.ico}</span><h3>${esc(t.naam)}</h3></div><div class="tags">${t.soort.map(s=>`<span class="tag">${esc(s)}</span>`).join('')}</div>
        <p style="font-size:14px">${t.wat}</p><p style="font-size:13.5px"><span class="tag gratis">gratis</span> ${t.gratis}</p><p style="font-size:13.5px"><span class="tag pro">betaald</span> ${t.betaald}</p>
        ${t.let?`<p class="hint" style="font-size:13px">⚠ ${t.let}</p>`:''}</div>`).join('')}</div>
      <p class="hint">Mogelijkheden en prijzen veranderen vaak. Controleer altijd de actuele informatie op de website van de aanbieder. Dat is precies wat werkproces 1 van je vraagt.</p>`;
    el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{ filter=b.dataset.f; teken(); });
  };
  teken();
};

/* ---------- rag: zoek-en-vul-simulator ---------- */
W.rag = (el, cfg, ctx) => {
  const st = ctx.get() || {vraag: cfg.vraag||'', k: 2};
  const woorden = s => s.toLowerCase().replace(/[^a-z0-9à-ü\s]/g,' ').split(/\s+/).filter(w=>w.length>3 && !(cfg.stop||[]).includes(w));
  const teken = () => {
    const vw = new Set(woorden(st.vraag));
    const scores = cfg.chunks.map((c,i)=>{ const cw = woorden(c.t); const hits = cw.filter(w=>vw.has(w)); return {i, s: hits.length, hits:[...new Set(hits)]}; }).sort((a,b)=>b.s-a.s);
    const top = scores.slice(0, st.k).filter(x=>x.s>0);
    const prompt = `${cfg.systeem}\n\n### Context uit de kennisbank\n${top.map(x=>`[${cfg.chunks[x.i].bron}] ${cfg.chunks[x.i].t}`).join('\n')||'(niets gevonden)'}\n\n### Vraag\n${st.vraag}`;
    el.innerHTML = kop(cfg) + `<label class="veld">Vraag van de gebruiker</label><input type="text" id="vr" value="${esc(st.vraag)}">
      <label class="veld">Aantal stukken (k) dat mee mag: <b>${st.k}</b></label><input type="range" min="1" max="4" value="${st.k}" id="kk">
      <h4>1 · Ophalen (retrieval): welke stukken passen het best?</h4>
      ${scores.map(x=>`<div class="balk"><span style="font-size:13px">${esc(cfg.chunks[x.i].bron)}</span><span class="bk"><i style="width:${Math.min(100,x.s*20)}%;${top.includes(x)?'':'opacity:.35'}"></i></span><b>${x.s}</b></div>`).join('')}
      <p class="hint">Score = aantal overeenkomende woorden. Echte systemen gebruiken <i>embeddings</i> (betekenis in plaats van letterlijke woorden), maar het principe is hetzelfde.</p>
      <h4>2 · Aanvullen (augmented): dit krijgt het taalmodel te zien</h4><pre>${esc(prompt)}</pre>
      <h4>3 · Genereren</h4><p class="hint">Het model antwoordt nu op basis van deze context. Staat het juiste stuk er niet bij? Dan gaat het model gokken (hallucineren) of zegt het (als je dat goed instrueert): "Dat weet ik niet."</p>
      ${cfg.tips?`<div class="kaart vlak">${cfg.tips}</div>`:''}`;
    el.querySelector('#vr').onchange = e => { st.vraag = e.target.value; ctx.set(st); teken(); };
    el.querySelector('#kk').onchange = e => { st.k = +e.target.value; ctx.set(st); teken(); };
    ctx.log(cfg.titel, `Vraag: ${st.vraag}\nOpgehaald: ${top.map(x=>cfg.chunks[x.i].bron).join(', ')||'niets'}`);
  };
  teken();
};

/* ---------- SUS: System Usability Scale-calculator ---------- */
W.sus = (el, cfg, ctx) => {
  const V = ['Ik denk dat ik dit systeem graag vaak zou gebruiken.','Ik vond het systeem onnodig ingewikkeld.','Ik vond het systeem makkelijk te gebruiken.','Ik denk dat ik hulp nodig heb van een technisch persoon om dit systeem te kunnen gebruiken.','Ik vond dat de verschillende functies goed samenwerkten.','Ik vond dat er te veel tegenstrijdigheden in het systeem zaten.','Ik denk dat de meeste mensen heel snel leren werken met dit systeem.','Ik vond het systeem erg omslachtig in gebruik.','Ik voelde me erg zeker bij het gebruik van het systeem.','Ik moest veel leren voordat ik met dit systeem aan de slag kon.'];
  const s = ctx.get() || {tests:[]};
  let huidig = Array(10).fill(3);
  const score = a => a.reduce((t,v,i)=> t + (i%2===0 ? v-1 : 5-v), 0) * 2.5;
  const teken = () => {
    const gem = s.tests.length ? (s.tests.reduce((a,b)=>a+b,0)/s.tests.length) : null;
    el.innerHTML = kop(cfg) + V.map((v,i)=>`<div style="margin:8px 0"><div style="font-size:14px">${i+1}. ${v}</div><div class="rij" style="gap:4px">${[1,2,3,4,5].map(n=>`<button class="chip ${huidig[i]===n?'aan':''}" data-i="${i}" data-v="${n}" style="flex:0 0 auto">${n}</button>`).join('')}<span class="hint" style="flex:1">1 = helemaal oneens · 5 = helemaal eens</span></div></div>`).join('')
      + `<div class="knoppen"><button class="knop klein" id="op">Testpersoon opslaan (score ${score(huidig)})</button><button class="knop klein rand" id="wis">Alle tests wissen</button></div>
      <div class="kaart vlak">${s.tests.length?`<b>${s.tests.length} testperso(o)n(en):</b> ${s.tests.join(', ')}<br><span class="score">${gem.toFixed(0)}</span> gemiddelde SUS-score · ${gem>=80?'uitstekend':gem>=68?'boven gemiddeld (goed)':gem>=51?'matig: verbeteren':'slecht: flink verbeteren'}`:'Nog geen tests opgeslagen.'}
      <p class="hint" style="margin:6px 0 0">Gemiddeld scoort software een 68. Laat minimaal 3 tot 5 echte gebruikers de vragenlijst invullen nadat ze jouw AI-oplossing hebben gebruikt.</p></div>`;
    el.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{ huidig[b.dataset.i]=+b.dataset.v; teken(); });
    el.querySelector('#op').onclick = ()=>{ s.tests.push(score(huidig)); huidig = Array(10).fill(3); ctx.set(s); ctx.log(cfg.titel, `SUS-scores: ${s.tests.join(', ')} · gemiddeld ${(s.tests.reduce((a,b)=>a+b,0)/s.tests.length).toFixed(0)}`); teken(); };
    el.querySelector('#wis').onclick = ()=>{ if(confirm('Alle SUS-tests wissen?')){ s.tests=[]; ctx.set(s); teken(); } };
  };
  teken();
};

/* ---------- perceptron: train een mini-neuron op punten ---------- */
W.perceptron = (el, cfg, ctx) => {
  const B = 300; let pts = (ctx.get()||{}).pts || [[60,70,1],[90,50,1],[80,110,1],[120,80,1],[220,230,0],[240,190,0],[200,250,0],[250,240,0],[170,200,0],[110,130,1]];
  let w = [0,0,0], epoch = 0, klasse = 1, lr = 0.1;
  el.innerHTML = kop(cfg) + `<div class="rij" style="align-items:flex-start"><canvas width="${B}" height="${B}" style="border:1.5px solid var(--lijn);border-radius:14px;max-width:100%;cursor:crosshair;flex:0 0 auto" id="cv"></canvas>
    <div><p style="font-size:14px">Klik in het vlak om punten toe te voegen. Het neuron leert een lijn te trekken die de twee groepen scheidt.</p>
    <div><button class="chip aan" data-k="1">🟠 groep A</button><button class="chip" data-k="0">🟣 groep B</button></div>
    <label class="veld">Leersnelheid (learning rate): <b id="lrl">${lr}</b><input type="range" min="0.01" max="1" step="0.01" value="${lr}" id="lr"></label>
    <div class="knoppen"><button class="knop klein" id="e1">Train 1 epoch</button><button class="knop klein" id="e10">Train 20 epochs</button><button class="knop klein rand" id="rs">Reset gewichten</button></div>
    <div class="uitvoer" id="inf"></div></div></div>`;
  const cv = el.querySelector('#cv'), g = cv.getContext('2d');
  const voorspel = (x,y) => (w[0]*(x/B) + w[1]*(y/B) + w[2]) >= 0 ? 1 : 0;
  const teken = () => {
    g.clearRect(0,0,B,B);
    for(let x=0;x<B;x+=10) for(let y=0;y<B;y+=10){ g.fillStyle = voorspel(x+5,y+5) ? 'rgba(239,162,66,.13)' : 'rgba(148,71,240,.10)'; g.fillRect(x,y,10,10); }
    pts.forEach(p=>{ g.beginPath(); g.arc(p[0],p[1],7,0,7); g.fillStyle = p[2]?'#EFA242':'#9447F0'; g.fill(); g.lineWidth=2; g.strokeStyle = voorspel(p[0],p[1])===p[2]?'#fff':'#1E2426'; g.stroke(); });
    const goed = pts.filter(p=>voorspel(p[0],p[1])===p[2]).length;
    el.querySelector('#inf').textContent = `Epoch ${epoch} · nauwkeurigheid ${pts.length?Math.round(goed/pts.length*100):0}% (${goed}/${pts.length})\nGewichten: w1=${w[0].toFixed(2)}, w2=${w[1].toFixed(2)}, bias=${w[2].toFixed(2)}\nZwart omrande punten worden nog fout voorspeld.`;
    ctx.set({pts}); ctx.log(cfg.titel, `Na ${epoch} epochs: ${pts.length?Math.round(goed/pts.length*100):0}% nauwkeurig, learning rate ${lr}.`);
  };
  const train = n => { for(let e=0;e<n;e++){ shuffle(pts).forEach(p=>{ const fout = p[2]-voorspel(p[0],p[1]); w[0]+=lr*fout*p[0]/B; w[1]+=lr*fout*p[1]/B; w[2]+=lr*fout; }); epoch++; } teken(); };
  cv.onclick = e => { const r = cv.getBoundingClientRect(); pts.push([(e.clientX-r.left)*B/r.width,(e.clientY-r.top)*B/r.height,klasse]); teken(); };
  el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{ klasse=+b.dataset.k; el.querySelectorAll('[data-k]').forEach(x=>x.classList.toggle('aan',x===b)); });
  el.querySelector('#lr').oninput = e => { lr=+e.target.value; el.querySelector('#lrl').textContent=lr; };
  el.querySelector('#e1').onclick = ()=>train(1);
  el.querySelector('#e10').onclick = ()=>train(20);
  el.querySelector('#rs').onclick = ()=>{ w=[0,0,0]; epoch=0; teken(); };
  teken();
};

/* ---------- info: statische kaart (bijv. stappenplan per platform) met tabs ---------- */
W.tabs = (el, cfg, ctx) => {
  let a = (ctx.get()||{}).a || 0;
  const teken = () => {
    el.innerHTML = kop(cfg) + `<div>${cfg.tabs.map((t,i)=>`<button class="chip ${i===a?'aan':''}" data-a="${i}">${esc(t.n)}</button>`).join('')}</div>
      <div class="uitleg" style="margin-top:10px">${cfg.tabs[a].h}</div>`;
    el.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{ a=+b.dataset.a; ctx.set({a}); teken(); });
  };
  teken();
};
})();
