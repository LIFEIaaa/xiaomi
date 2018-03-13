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
//内容开始
{
	function wheel(parent){
		let prev=parent.querySelector(".neirong_lbtn");
		let next=parent.querySelector(".neirong_rbtn");
		let inner=parent.querySelector(".inner");
		let pagers=parent.querySelectorAll(".lbd1");
		let contents=parent.querySelectorAll(".content-3");
		let n=0;
		let l=contents.length;
		next.onclick=function(){
			n++;
			if(n===l){
				n=l-1;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
		};
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
		};
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				this.classList.add("active");
				obj=this;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}
		})
	}
	let items=document.querySelectorAll(".gao5_item");
	items.forEach(function(ele){
		wheel(ele);
	})
}
//推荐开始
{
	const prev=document.querySelector(".tuijian_btn1");
	const next=document.querySelector(".tuijian_btn2");
	const inner=document.querySelector(".tuijian-inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			next.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1240*n+"px";
	};
	prev.onclick=function(){
		n--;
		next.classList.remove("active");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1240*n+"px";
	}
}
//导航开始
{
	let box=document.querySelector(".nav-1");
	let top=document.querySelector(".navwz-top");
	let spans=document.querySelectorAll(".dh-title");
	let menus=document.querySelectorAll(".container");
	let bottom=document.querySelector(".nav-bottom");
	let obj=menus[0];
	spans.forEach(function(ele,index){
		ele.onmouseenter=function(){			
			obj.style.display="none";
			menus[index].style.display="block";			
			obj=menus[index];
		}		
	})
	top.onmouseenter=function(){
		bottom.style.height="229px";
		bottom.style.borderTop="1px solid #e0e0e0";
	}
	box.onmouseleave=function(){
		bottom.style.height="0";
		bottom.style.borderTop="0";
	}

}
//标签栏开始
{
	let labels=document.querySelectorAll(".label");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}