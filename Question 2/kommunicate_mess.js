var url =
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

function getUrlParameterValue(url, value) {
  let index = url.indexOf(value) + value.length + 1;
  let ans = "";
  while (url[index] !== "&" && index < url.length) {
    ans += url[index];
    index += 1;
  }
  return ans;
}

console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_campaign"));