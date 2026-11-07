(function(root){
  'use strict';
  function normalize(value){return String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
  function filterPapers(papers, options = {}){
    const words=normalize(options.query).trim().split(/\s+/).filter(Boolean);
    return papers.filter(p => {
      if(options.section && options.section !== 'all' && p.section !== options.section)return false;
      if(options.kind && options.kind !== 'all' && p.kind !== options.kind)return false;
      if(options.quality === 'qualified' && !p.grade_pass)return false;
      const content=normalize([p.title_en,p.title_zh,p.authors,p.venue,p.year,p.summary_en,p.summary_zh,p.doi].join(' '));
      return words.every(word => content.includes(word));
    });
  }
  const api={normalize,filterPapers};
  if(typeof module !== 'undefined' && module.exports)module.exports=api;
  else root.Catalogue=api;
})(typeof window !== 'undefined' ? window : globalThis);
