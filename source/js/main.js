$(function(){
	Toggle_Light()
	Play_Music()
});
function Toggle_Light(){
	LsFun.$('#toggle-dark').onclick=function(){
		if(LsFun.hasClass(document.body,'dark')){
			document.body.classList.remove('dark')
		}else{
			document.body.classList.add('dark')
		}
	}
}
function Play_Music(){
	let playBtn=LsFun.$('#play-audio')
	let bgAudio=LsFun.$('#bg-audio')
	playBtn.onclick=function(){
		if(LsFun.hasClass(bgAudio,'play')){
			bgAudio.classList.remove('play')
			playBtn.innerText='暂停'
			bgAudio.play()
		}else{
			bgAudio.classList.add('play')
			playBtn.innerText='播放'
			bgAudio.pause()
		}
	}
}