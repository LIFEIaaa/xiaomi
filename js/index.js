//banner效果
{
	const imgs=document.querySelectorAll(".banner_img li");
	const pagers=document.querySelectorAll(".lunbodian li");
	const banner=document.querySelector("#banner");
	const banner_lbtn=document.querySelector(".banner_lbtn");
	const banner_rbtn=document.querySelector(".banner_rbtn");
	// const l=imgs.length;
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			};
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		};
		if(n<0){
			n=imgs.length-1;
		};
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
		// console.log(n);
	};
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
	let flag=true;
	banner_rbtn.onclick=function(){
		if(flag){
			flag=false;
			move();
		};
	};
	banner_lbtn.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
//明星单品效果
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const inner=document.querySelector(".buy-inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
}
//智能开始
{
	function jiadians(parent){
		const types=parent.querySelectorAll(".xiahuaxian");
		const goods=parent.querySelectorAll(".jiadian-right");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		})
	} 
	const jiadianlist=document.querySelectorAll(".js-move");
	jiadianlist.forEach(function(ele){
		jiadians(ele);
	})
}