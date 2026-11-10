(() => {
  'use strict';
  const {resources, references} = window.GEOKG;
  const state = {domain:'all',kind:'all'};
  const $ = id => document.getElementById(id);
  const node = (tag,cls,text) => { const e=document.createElement(tag); if(cls)e.className=cls;if(text)e.textContent=text;return e; };
  const link = (label,url) => {const a=node('a','',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;};
  const kinds = ['Research works','Data products & platforms'];
  function nav(){
    $('domains').replaceChildren(...['all',...new Set(resources.map(r=>r.domain))].map(domain=>{
      const b=node('button',state.domain===domain?'active':'');b.type='button';b.setAttribute('aria-pressed',String(state.domain===domain));
      b.append(node('span','',domain==='all'?'All domains':domain),node('span','count',String(resources.filter(r=>domain==='all'||r.domain===domain).length)));
      b.onclick=()=>{state.domain=domain;nav();render();};return b;
    }));
  }
  function card(r){
    const c=node('article','resource');c.id=r.id;
    const tags=node('div','tags');tags.append(node('span','tag',r.domain),node('span','tag focus',r.focus));
    const h=node('h3','',r.name);const team=node('p','team',r.team);
    const contribution=node('div','contribution');contribution.append(node('h4','','Research contribution'),node('p','',r.summary));
    const pub=node('div','publication');pub.append(node('h4','','Research publication'),link(r.research.title,r.research.url));
    c.append(tags,h,team,contribution,pub);
    if(r.product){const product=node('div','product');product.append(node('h4','','Data / platform access'),link('Explore data or platform ↗',r.product));c.append(product);}
    if(r.extra_papers.length){const extra=node('div','extra');r.extra_papers.forEach(p=>extra.append(link(p.title+' ↗',p.url)));c.append(extra);}
    return c;
  }
  function render(){
    const q=$('query').value.trim().toLowerCase(),focus=$('focus').value;
    const rows=resources.filter(r=>(state.domain==='all'||r.domain===state.domain)&&(state.kind==='all'||r.kind===state.kind)&&(focus==='all'||r.focus===focus)&&(!q||[r.name,r.team,r.summary,r.domain,r.research.title].join(' ').toLowerCase().includes(q)));
    $('count').textContent=rows.length+' resources';$('heading').textContent=state.domain==='all'?(state.kind==='all'?'All GeoKGs':state.kind):state.domain;
    $('results').replaceChildren();
    (state.kind==='all'?kinds:[state.kind]).forEach(kind=>{
      const subset=rows.filter(r=>r.kind===kind);if(!subset.length)return;
      const group=node('section','resource-group');const gh=node('div','group-heading');gh.append(node('h2','',kind),node('span','',String(subset.length)));
      const grid=node('div','grid');grid.append(...subset.map(card));group.append(gh,grid);$('results').append(group);
    });
    if(!rows.length)$('results').append(node('p','empty','No matching resources.'));
  }
  document.querySelectorAll('[data-kind]').forEach(b=>b.onclick=()=>{state.kind=b.dataset.kind;document.querySelectorAll('[data-kind]').forEach(t=>{t.classList.toggle('active',t===b);t.setAttribute('aria-pressed',String(t===b));});render();});
  $('filters').onsubmit=e=>e.preventDefault();$('query').oninput=render;$('focus').onchange=render;
  $('reset').onclick=()=>{state.domain='all';state.kind='all';HTMLFormElement.prototype.reset.call($('filters'));document.querySelectorAll('[data-kind]').forEach(b=>{b.classList.toggle('active',b.dataset.kind==='all');b.setAttribute('aria-pressed',String(b.dataset.kind==='all'));});nav();render();};
  $('reference-count').textContent='('+references.length+')';
  $('reference-list').replaceChildren(...references.map(r=>{const e=node('article','reference');e.append(node('h3','',r.title),node('p','',[r.authors,r.year,r.venue].filter(Boolean).join(' · ')),link(r.link_label+' ↗',r.url));return e;}));
  nav();render();
})();
