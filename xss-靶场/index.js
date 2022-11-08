

//获取GET请求的参数
function getUrl(){
	var url = new URLSearchParams(location.search);
	return url.get(arguments[0]);
}

//获取元素
function getEle(){
	return document.querySelector(arguments[0]);
}


//str模板字符串

var str = "";

//提示输入的内容，不执行xss
str += `<div align="center">`
str += `<br>你输入的是：`;
str += `<span style="color:red;">`;
str += `{{tips}}`;
str += `</span><br><br>`;

//提示搜索结果，在这里执行xss
str += `未找到`;
str += `<span style="color:orange;">`;
str += `{{xss}}`;
str += `</span>，请重新搜索`;
str += `</div>`;