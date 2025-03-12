IDM2BIBLATEX
=============

IDM2BIBLATEX is a lightweight bookmarklet for exporting EUROfusion IDM web pages to BibLaTeX.
Based on the more general repository [html2biblatex](https://github.com/dmstern/html2biblatex).

Just click on the IDM2BIBLATEX bookmark button and paste the collected content into your BibLaTeX code.

--------------------------------------------------------

Installation
------------

 1. Create a new bookmark in the bookmark panel of your browser.
 2. Name it (_e.g._ "🌐 ➜ 📚").
 3. URL: [Paste here the content from the file [bookmark-url.js](bookmark-url.js)]

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
@techreport {TBD,  
  title = {EFDA\_D\_XXXXXX - BB-S.0X.0X-T00X-D0XX: TITLE},  
  , 
  number = {XXXXXX},  
  institution = {{EUROfusion}},  
  url = {https://idm.euro-fusion.org/?uid=XXXXXX},  
  Accessed = {2023-01-16}
}
```
Tested with Mozilla Firefox 108.0.2 under macOS Ventura 13.1.

Modifications
-------------

Implement modifications in `source.js`. Modifications to `bookmark.js` are ignored.

New contents in `source.js` are copied to `bookmark.js` by a GitHub Action.
The action also does a search & replace to remove all newlines.

Install the new bookmark in your browser.



--------------------------------------------------------

If you like this tool, please consider to upvote [@dmstern](https://github.com/dmstern)'s original answer on tex.stackexchange.com: https://tex.stackexchange.com/a/170689/48366

--------------------------------------------------------
