(() => {
  function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }

  function jsDate2bibTex(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    // Add zero prefix:
    if (dd < 10) {
      dd = `0${dd}`;
    }

    // Add zero prefix:
    if (mm < 10) {
      mm = `0${mm}`;
    }

    // create string for date:
    return `${yyyy}-${mm}-${dd}`;
  }

  function date2YearTex(date) {
    const yyyy = date.getFullYear();

    // create string for year:
    return `${yyyy}`;
  }

  const title = document.title;
  const url = document.URL.replace('default.aspx', '');
  const number = url.replace('https://idm.euro-fusion.org/?uid=', '');

  // get author if meta tag exists:
  const author_tag = document.querySelector("[name=author]");
  const author = author_tag == null ? "" : author_tag.content;

  const today = new Date();
  const urldate = jsDate2bibTex(today);

  const publishedTime = document
    .querySelector('meta[property="article:published_time"')
    ?.getAttribute("content");
  const someTimeTag = document
    .querySelector("time[datetime]")
    ?.getAttribute("datetime");
  const lastModifiedTime = document.lastModified;

  const pageTime = new Date(
    publishedTime ||
    someTimeTag ||
    someTimeTagWithoutDatetime ||
    lastModifiedTime
  );
  const date = jsDate2bibTex(pageTime);
  const year = date2YearTex(pageTime);

  // remove special characters for citation key:
  let title_key = title.replace(/[^0-9a-z]/gi, "");

  // create citation key:
  const citationKey = `TBD`;

  const type = "@techreport";
  const filename = `:./references/${window.location.pathname
    .slice(1)
    .replace(/\//g, "-")}.html:html`;

  // Replace german umlauts with latex commands:
  let title_tex = title
    .replace(/\u00e4/g, '\\"a')
    .replace(/\u00c4/g, '\\"A')
    .replace(/\u00f6/g, '\\"o')
    .replace(/\u00d6/g, '\\"O')
    .replace(/\u00fc/g, '\\"u')
    .replace(/\u00dc/g, '\\"U')
    .replace(/\u00DF/g, '\\"s');

  // Replace symbols by their backslash-escaped versions
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
  function text2latex(t) {
    return t.replace(/./g, c => mapping[c] || c)
  }

  // generate BiBTeX entry:
  const bibTexEntry = `${type} {${citationKey},\n\
    \ \ title = {${text2latex(title_tex)}},\n\
    ${author ? `\ \ author = {${author}},\n` : ""}\
    \ \ number = {${number}},\n\
    \ \ institution = {{EUROfusion}},\n\
    \ \ url = {${url}},\n\
    \ \ Accessed = {${urldate}}\n\
  }`;
  //const bibTexEntry = `${type} {${citationKey},\r\
  //  \ \ title = {${text2latex(title_tex)}},\r\
  //  ${author ? `\ \ author = {${author}},\r` : ""}\
  //  \ \ number = {${number}},\r\
  //  \ \ institution = {{EUROfusion}},\r\
  //  \ \ url = {${url}},\r\
  //  \ \ Accessed = {${urldate}}\r\
  //}`;

  copyToClipboard(bibTexEntry);
})();
