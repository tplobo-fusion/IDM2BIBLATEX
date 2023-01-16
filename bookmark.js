javascript: "use strict"; (
  function () {

    var
      _document$querySelect,
      _document$querySelect2,
      _document$querySelect3;

    function copyToClipboard(text) {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", text)
    }

    function jsDate2bibTex(date) {
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();
      if (dd < 10) { dd = "0" + dd }
      if (mm < 10) { mm = "0" + mm }
      return yyyy + "-" + mm + "-" + dd
    }

    function date2YearTex(date) {
      var yyyy = date.getFullYear();
      return "" + yyyy
    }

    var title = document.title;
    var url = document.URL.replace('default.aspx', '');
    var number = url.replace('https://idm.euro-fusion.org/?uid=', '');
    var author_tag = document.querySelector("[name=author]");
    var author = author_tag == null ? "" : author_tag.content;
    var today = new Date;
    var urldate = jsDate2bibTex(today);
    var publishedTime = (_document$querySelect = document.querySelector('meta[property="article:published_time"')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute("content");
    var someTimeTag = (_document$querySelect2 = document.querySelector("time[datetime]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.getAttribute("datetime");
    var someTimeTagWithoutDatetime = (_document$querySelect3 = document.querySelector("time")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.innerHTML;
    var lastModifiedTime = document.lastModified;
    var pageTime = new Date(publishedTime || someTimeTag || someTimeTagWithoutDatetime || lastModifiedTime);
    var date = jsDate2bibTex(pageTime);
    var year = date2YearTex(pageTime);
    var title_key = title.replace(/[^0-9a-z]/gi, "");
    var citationKey = 'TBD';
    var type = "@techreport";
    var filename = ":./references/" + window.location.pathname.slice(1).replace(/\//g, "-") + ".html:html";

    var title_tex = title
      .replace(/\u00e4/g, '\\"a')
      .replace(/\u00c4/g, '\\"A')
      .replace(/\u00f6/g, '\\"o')
      .replace(/\u00d6/g, '\\"O')
      .replace(/\u00fc/g, '\\"u')
      .replace(/\u00dc/g, '\\"U')
      .replace(/\u00DF/g, '\\"s');

    const mapping = {
      '#': '\\#',
      '$': '\\$',
      '%': '\\%',
      '&': '\\&',
      '/': '\\slash',
      '<': '$<$',
      '>': '$>$',
      '\\': '\\textbackslash',
      '^': '\\^',
      _: '\\_',
      '{': '\\{',
      '}': '\\}',
      '~': '\\textasciitilde'
    };
    function text2latex(t) { return t.replace(/./g, c => mapping[c] || c) }

    var bibTexEntry = type + " {" + citationKey + ",  title = {" + text2latex(title_tex) + "},\n " + (author ? "  author = {" + author + "},\n" : "") + " ,\n number = {" + number + "},\n  institution = {{EUROfusion}},\n  url = {" + url + "},\n  Accessed = {" + urldate + "}\n}"; copyToClipboard(bibTexEntry)

  })();