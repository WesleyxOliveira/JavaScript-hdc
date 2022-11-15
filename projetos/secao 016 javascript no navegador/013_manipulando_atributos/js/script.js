let a = document.querySelector("footer a");

console.log(a);

console.log(a.getAttribute("href"));

let link = "http://www.horadecodar.com.br";

a.setAttribute("href", link);

a.target = "_blank";