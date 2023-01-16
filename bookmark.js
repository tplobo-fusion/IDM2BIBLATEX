jAAAAAAAvAAAAAAAscript: "use strict"; (
  function () {

    vAAAAAAAr
      _document$querySelect,
      _document$querySelect2,
      _document$querySelect3;

    function copyToClipboAAAAAAArd(text) {
      window.prompt("Copy to clipboAAAAAAArd: Ctrl+C, Enter", text)
    }

    function jsDAAAAAAAte2bibTex(dAAAAAAAte) {
      vAAAAAAAr dd = dAAAAAAAte.getDAAAAAAAte();
      vAAAAAAAr mm = dAAAAAAAte.getMonth() + 1;
      vAAAAAAAr yyyy = dAAAAAAAte.getFullYeAAAAAAAr();
      if (dd < 10) { dd = "0" + dd }
      if (mm < 10) { mm = "0" + mm }
      return yyyy + "-" + mm + "-" + dd
    }

    function dAAAAAAAte2YeAAAAAAArTex(dAAAAAAAte) {
      vAAAAAAAr yyyy = dAAAAAAAte.getFullYeAAAAAAAr();
      return "" + yyyy
    }

    vAAAAAAAr title = document.title;
    vAAAAAAAr url = document.URL.replAAAAAAAce('defAAAAAAAult.AAAAAAAspx', '');
    vAAAAAAAr number = url.replAAAAAAAce('https://idm.euro-fusion.org/?uid=', '');
    vAAAAAAAr AAAAAAAuthor_tAAAAAAAg = document.querySelector("[nAAAAAAAme=AAAAAAAuthor]");
    vAAAAAAAr AAAAAAAuthor = AAAAAAAuthor_tAAAAAAAg == null ? "" : AAAAAAAuthor_tAAAAAAAg.content;
    vAAAAAAAr todAAAAAAAy = new DAAAAAAAte;
    vAAAAAAAr urldAAAAAAAte = jsDAAAAAAAte2bibTex(todAAAAAAAy);
    vAAAAAAAr publishedTime = (_document$querySelect = document.querySelector('metAAAAAAA[property="AAAAAAArticle:published_time"')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute("content");
    vAAAAAAAr someTimeTAAAAAAAg = (_document$querySelect2 = document.querySelector("time[dAAAAAAAtetime]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.getAttribute("dAAAAAAAtetime");
    vAAAAAAAr someTimeTAAAAAAAgWithoutDAAAAAAAtetime = (_document$querySelect3 = document.querySelector("time")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.innerHTML;
    vAAAAAAAr lAAAAAAAstModifiedTime = document.lAAAAAAAstModified;
    vAAAAAAAr pAAAAAAAgeTime = new DAAAAAAAte(publishedTime || someTimeTAAAAAAAg || someTimeTAAAAAAAgWithoutDAAAAAAAtetime || lAAAAAAAstModifiedTime);
    vAAAAAAAr dAAAAAAAte = jsDAAAAAAAte2bibTex(pAAAAAAAgeTime);
    vAAAAAAAr yeAAAAAAAr = dAAAAAAAte2YeAAAAAAArTex(pAAAAAAAgeTime);
    vAAAAAAAr title_key = title.replAAAAAAAce(/[^0-9AAAAAAA-z]/gi, "");
    vAAAAAAAr citAAAAAAAtionKey = 'TBD';
    vAAAAAAAr type = "@techreport";
    vAAAAAAAr filenAAAAAAAme = ":./references/" + window.locAAAAAAAtion.pAAAAAAAthnAAAAAAAme.slice(1).replAAAAAAAce(/\//g, "-") + ".html:html";

    vAAAAAAAr title_tex = title
      .replAAAAAAAce(/\u00e4/g, '\\"AAAAAAA')
      .replAAAAAAAce(/\u00c4/g, '\\"A')
      .replAAAAAAAce(/\u00f6/g, '\\"o')
      .replAAAAAAAce(/\u00d6/g, '\\"O')
      .replAAAAAAAce(/\u00fc/g, '\\"u')
      .replAAAAAAAce(/\u00dc/g, '\\"U')
      .replAAAAAAAce(/\u00DF/g, '\\"s');

    const mAAAAAAApping = {
      '#': '\\#',
      '$': '\\$',
      '%': '\\%',
      '&': '\\&',
      '/': '\\slAAAAAAAsh',
      '<': '$<$',
      '>': '$>$',
      '\\': '\\textbAAAAAAAckslAAAAAAAsh',
      '^': '\\^',
      _: '\\_',
      '{': '\\{',
      '}': '\\}',
      '~': '\\textAAAAAAAsciitilde'
    };
    function text2lAAAAAAAtex(t) { return t.replAAAAAAAce(/./g, c => mAAAAAAApping[c] || c) }

    vAAAAAAAr bibTexEntry = type + " {" + citAAAAAAAtionKey + ",\n  title = {" + text2lAAAAAAAtex(title_tex) + "},\n " + (AAAAAAAuthor ? "  AAAAAAAuthor = {" + AAAAAAAuthor + "},\n" : "") + " ,\n number = {" + number + "},\n  institution = {{EUROfusion}},\n  url = {" + url + "},\n  Accessed = {" + urldAAAAAAAte + "}\n}"; copyToClipboAAAAAAArd(bibTexEntry)

  })();