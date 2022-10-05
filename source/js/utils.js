const LsFun={
	//获取dom
	$(dom){
		return document.querySelector(dom)
	},
	$All(dom){
		return document.querySelectorAll(dom)
	},
	//判断是否含有class
	hasClass(ele, cls) {
	 return (' ' + ele.className + ' ').indexOf(' ' + cls + ' ') > -1;
	},
	getScript(url, callback) {
		var script = document.createElement('script')
		script.type = 'text/javascript'
		if (typeof callback != 'undefined') {
		  if (script.readyState) {
			script.onreadystatechange = function () {
			  if (script.readyState == 'loaded' || script.readyState == 'complete') {
				script.onreadystatechange = null
				callback()
			  }
			}
		  } else {
			script.onload = function () {
			  callback()
			}
		  }
		}
		script.src = url
		document.body.appendChild(script)
	  },
}
function $(fun){
	var doc=document
	if(doc.addEventListener){
		doc.addEventListener("DOMContentLoaded",fun,false);
	}else{
		doc.onreadystatechange=function(){
			if(doc.readyState=='loader'||doc.readyState=='complete'||doc.readyState=='interactive'){
				fun();
			}
		}
	}
}