var str3 = `
<script>

	var age = "${getUrl('xss').replace(/\"/g,"\\\"")}";

	if(getUrl('xss')){
		getEle("div").innerHTML = "<h1>"+(age * 365) + "天</h1>";
	}

</script>
`
document.write(str3);