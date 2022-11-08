var tips = getUrl('xss').replace(/</g,"&lt;");

var xss = getUrl('xss');

var putDiv = str.replace(/{{tips}}/,tips);

putDiv = putDiv.replace(/{{xss}}/,xss);


//把str字符串添加到div标签中
if(getUrl('xss')){
	document.write(putDiv);
}
