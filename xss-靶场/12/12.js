var tips = getUrl('xss').replace(/</g,"&lt;");

var xss = getUrl('xss').replace(/on|src|data/gi,"")

var putDiv = str.replace(/{{tips}}/,tips);

putDiv = putDiv.replace(/{{xss}}/,xss);


//把str字符串添加到div标签中
document.write(putDiv)


