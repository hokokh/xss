var age = getUrl('xss').replace(/"/,"\\\"").replace(/</,"&lt;");
var str3 = `
<script>
	//用户反馈说存在xss,找了好久终于找到原因了。
	//下面语句存在xss，已注释,并做了转义。
	//以史为鉴，请下个维护者不要删除注释，否则会导致xss
	//var age = "${age}";
	


	var age ="${age}";
	if(getUrl('xss')){
		getEle("div").innerHTML = "<h1>"+(age * 365) + "天</h1>";
	}

</script>
`
document.write(str3);