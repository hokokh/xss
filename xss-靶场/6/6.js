var email = getUrl('xss').replace(/</,"&lt;") + "@qq.com";

var putDiv = `<br><a href="mailto:${email}">${email}</a>`;

if(getUrl('xss')){
	getEle("div").innerHTML = putDiv;
}