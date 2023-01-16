IDM2BIBLATEX
=============

> Citing a webpage in LaTeX has never been easier!

IDM2BIBLATEX is a lightweight bookmarklet for exporting EUROfusion IDM web pages to BibLaTeX.
Based on the more general repository [html2biblatex](https://github.com/dmstern/html2biblatex).

Just click on the IDM2BIBLATEX bookmark button and paste the collected content into your BibLaTeX code.

![Screenshot of popup window to copy the biblatex entry](./screenshot-bookmark.png "html2biblatex Screenshot")

![Screenshot of popup window to copy the biblatex entry](./screenshot-copy.png "html2biblatex Screenshot")

--------------------------------------------------------

Installation
------------

 1. Create a new bookmark in the bookmark panel of your browser.
 2. Name it (_e.g._ "🌐 ➜ 📚").
 3. URL: [Paste here the content from the file [dist/bookmark-url.js](dist/bookmark-url.js)]

Usage
-----

 1. Load the page you want to cite.
 2. Click on the new bookmark button.
 3. Copy the selected text to clipboard and press [ENTER].
 4. Paste the BibLaTeX entry into
    * your .bib file.
    * JabRef: Just paste it into the open bibliography table.
    * Zotero: Go to 'file' -> 'import from clipboard'.

**Sample output:**

```BibLaTeX
@Online {UsingBibTeXashortguide-2015-11-02,
 title = {Using BibTeX: a short guide},
 date = {2015-11-02},
 author = {Martin J. Osborne},
 file = {:./references/osborne-latex-BIBTEX.HTM.html:html},
 url = {https://www.economics.utoronto.ca/osborne/latex/BIBTEX.HTM},
 urldate = {2018-03-17}
}
```

Tested with Mozilla Firefox 108.0.2 under macOS Ventura 13.1.

--------------------------------------------------------

If you like this tool, please consider to upvote [@dmstern](https://github.com/dmstern)'s original answer on tex.stackexchange.com: https://tex.stackexchange.com/a/170689/48366

--------------------------------------------------------
