var str2 = "";
str2 = `<br><a href="${getUrl("xss")}">`;
str2 +=`点击立刻减免</a>`;


//把str字符串添加到div标签中
if(getUrl('xss')){
	getEle("div").innerHTML = str2;
}
