var encode = {
	"<":"&lt;",
	">":"&gt;",
	"on":"on_",
	"src":"src_",
	"data":"data_"
}

var tips = getUrl('xss').replace(/</g,"&lt;");

var xss = getUrl('xss').replace(/on|src|data/g,a=>{
	return encode[a]
})

var putDiv = str.replace(/{{tips}}/,tips);

putDiv = putDiv.replace(/{{xss}}/,xss);


//把str字符串添加到div标签中
document.write(putDiv)


