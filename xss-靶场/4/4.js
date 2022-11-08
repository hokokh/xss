var randomStr = [
	"心想事成",
	"万事如意",
	"财源广进",
	"大吉大利",
	"天天开心",
	"年年有余",
	"事业高升",
	"幸福欢乐",
	"福星高照",
	"健康幸福"
];

var num =Math.floor(Math.random()*10);

var str4 =`
<br>
<span style="color:red;">祝
${getUrl('xss').replace(/</g,"&lt;")}
${randomStr[num]}
</span>

<!--还有很多新的祝福语，等${getUrl('xss')}用户反馈了在更新-->
`
if(getUrl("xss")){
	getEle("div").innerHTML=str4
}

