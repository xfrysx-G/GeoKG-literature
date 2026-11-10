(() => {
  'use strict';
  const papers = window.PAPERS || [];
  const state = { section: 'all' };
  const $ = id => document.getElementById(id);
  const el = (tag, className = '', text = '') => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const sectionNames = {
    '4': 'Traffic forecasting supplement',
    '5.1': 'Geographic question answering',
    '5.2': 'Automated spatial analysis',
    '5.3': 'Geospatial recommendation',
    '5.4': 'Spatiotemporal forecasting',
    '5.5': 'Decision support'
  };

  function visiblePapers() {
    const query = $('search').value.trim().toLowerCase();
    const kind = $('kind').value;
    return papers.filter(p => {
      if (state.section !== 'all' && p.section !== state.section) return false;
      if (kind !== 'all' && p.kind !== kind) return false;
      if (!query) return true;
      return [p.title, p.authors, p.venue, p.summary, p.section].join(' ').toLowerCase().includes(query);
    });
  }

  function renderSections() {
    const order = ['all', '4', '5.1', '5.2', '5.3', '5.4', '5.5'];
    const buttons = order.map(section => {
      const active = state.section === section;
      const button = el('button', 'section-button' + (active ? ' active' : ''));
      button.type = 'button';
      button.setAttribute('aria-pressed', String(active));
      const label = section === 'all' ? 'All records' : `${section}  ${sectionNames[section]}`;
      const count = section === 'all' ? papers.length : papers.filter(p => p.section === section).length;
      button.append(el('span', '', label), el('span', 'count', String(count)));
      button.addEventListener('click', () => { state.section = section; renderSections(); renderResults(); });
      return button;
    });
    $('sections').replaceChildren(...buttons);
  }

  function paperCard(paper) {
    const card = el('article', 'paper');
    const head = el('div', 'paper-top');
    head.append(el('span', 'chip', paper.section), el('span', `chip kind ${paper.kind}`, paper.kind === 'benchmark' ? 'Benchmark' : 'Method'), el('span', 'paper-year', String(paper.year)));
    const title = el('h3', '', paper.title);
    const byline = el('p', 'byline', `${paper.authors} · ${paper.venue}`);
    const summary = el('p', 'paper-summary', paper.summary);
    const status = el('p', 'source-status', paper.source_status);
    const actions = el('div', 'paper-actions');
    const link = el('a', '', 'Open publication ↗');
    link.href = paper.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const copy = el('button', '', 'Copy citation');
    copy.type = 'button';
    copy.addEventListener('click', async () => {
      const citation = `${paper.authors} (${paper.year}). ${paper.title}. ${paper.venue}. ${paper.url}`;
      try { await navigator.clipboard.writeText(citation); copy.textContent = 'Citation copied'; setTimeout(() => { copy.textContent = 'Copy citation'; }, 1500); }
      catch (_) { copy.textContent = 'Copy unavailable'; }
    });
    actions.append(link, copy);
    card.append(head, title, byline, summary, status, actions);
    return card;
  }

  function renderGroup(label, items) {
    const section = el('section', 'paper-group');
    const heading = el('div', 'group-heading');
    heading.append(el('h3', '', label), el('span', 'group-count', String(items.length)));
    section.append(heading, ...items.map(paperCard));
    return section;
  }

  function renderResults() {
    const visible = visiblePapers();
    $('result-count').textContent = `${visible.length} of ${papers.length} section records`;
    $('list-title').textContent = state.section === 'all' ? 'All records' : `${state.section} ${sectionNames[state.section]}`;
    const grouped = state.section === '5.1' || state.section === '5.2';
    if (grouped && $('kind').value === 'all') {
      $('results').replaceChildren(renderGroup('Method papers', visible.filter(p => p.kind === 'method')), renderGroup('Benchmark papers', visible.filter(p => p.kind === 'benchmark')));
    } else {
      $('results').replaceChildren(...visible.map(paperCard));
    }
    if (!visible.length) $('results').append(el('p', 'empty-state', 'No records match these filters.'));
  }

  $('filters').addEventListener('submit', event => event.preventDefault());
  $('search').addEventListener('input', renderResults);
  $('kind').addEventListener('change', renderResults);
  $('reset').addEventListener('click', () => { $('filters').reset(); state.section = 'all'; renderSections(); renderResults(); });
  renderSections();
  renderResults();
})();
