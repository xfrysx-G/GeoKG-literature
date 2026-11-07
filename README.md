# GeoKG supplementary literature library

A bilingual, static collection of 23 papers associated with sections 5.1–5.5 of a review on geographic knowledge graphs and language models. The collection includes application studies, evaluation benchmarks, upstream knowledge extraction, general methods and a related BERT/PLM study. Inclusion is not a claim that all papers meet the same thematic or publication criteria.

## Preview

Open `index.html` in a modern browser. For HTTP preview, run `python -m http.server 8765` in this folder, then open `http://localhost:8765`.

## Publish to GitHub Pages

1. Create a repository, for example `geokg-literature`.
2. Upload the **contents** of this folder to its root: `index.html`, CSS and JS files, `favicon.svg`, `data.json`, `catalogue.csv`, `.nojekyll` and this README. Do not upload the parent workspace or PDF archive.
3. Open repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the repository's branch (usually `main`) and `/(root)`, then save.
4. Open the Pages URL GitHub reports once deployment completes. All asset paths are relative and support a project repository URL.

## Scope and provenance

Prepared on 7 November 2026 from 23 user-supplied PDFs and the accompanying manuscript citation audit. Exact normalized titles and DOIs were compared against the manuscript citation fields; no direct overlap was found. This does not replace substantive editorial review.

The summaries are short editorial descriptions, not publisher abstracts. Uploaded PDFs are not distributed. Official DOI, proceedings or repository links are provided for each record. Links have been sourced from the papers and prior metadata verification; a successful future full-text download is not guaranteed.

Publication filters use **2025 CAS major-category divisions**, not JCR quartiles or 2026 emerging rankings. CCF classifications cover full/regular conference papers; Findings, demos and workshops are labelled separately. Publication grade and thematic relevance remain independent filters.

Important distinctions:

- STKG-PLM uses a BERT-style pretrained model (TinyBERT in the author implementation). It is listed as a **related PLM study**, not an LLM application. Author code: https://github.com/WeiChen3690/STKG-PLM
- GeoAutoModuler is primarily an **upstream knowledge-extraction and graph-construction method**.
- STARK, PEACE, MapEval and GeoCode-Eval provide **evaluation context**; they do not all demonstrate explicit GeoKG enhancement.
- GenTKG is a **general temporal-KG forecasting method**, not direct validation of geographic process prediction.
- The uploaded E-KELL PDF is a 2023 preprint; the displayed citation points to the 2024 journal publication.
- The underground digital-twin PDF is an author manuscript. Journal metadata uses the supplied formal publication record.
- GeoMRF was not present in the uploaded archive and has not been added.

## Editing

`data.json` is the structured catalogue. `data.js` contains the same array as `window.PAPERS` to support opening the site directly without a local server. Update both together when editing records. `catalogue.csv` is the downloadable reading list.

The UI supports English/Chinese switching, bilingual search, research-area and study-type filtering, publication filtering, citation copying and reset. No build tool, external fonts or framework is needed.
