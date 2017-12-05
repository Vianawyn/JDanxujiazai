window.onload = function(){
	//按需加载
	var flow = document.getElementsByClassName('flow');	
	window.onscroll = function(){
		var top = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset;
		for(var i = 0;i < flow.length;i++){
			var ftop = flow[i].offsetTop;
			var img = flow[i].getElementsByTagName('img');
			if(top > ftop - 300){
				for(var j = 0;j < img.length;j++){
					var dizhi = img[j].getAttribute('attr');
					img[j].src = dizhi;
				}
			}
		}
	}
	//侧导航
	let title = document.getElementsByClassName('aside-ul-li');
	// console.log(title);
	let con = document.getElementsByClassName('jdaside-box');
	// console.log(con);
	for(let i = 0;i < title.length;i++){
		title[i].onmouseover = function(){
			for(let j = 0;j < con.length;j++){
				con[j].classList.remove('con-active');
			}
			con[i].classList.add('con-active');
		}
		title[i].onmouseout = function(){
			for(let j = 0;j < con.length;j++){
				con[j].classList.remove('con-active');
			}
		}
	}
	//地标
	let dbox = document.getElementsByClassName('nav-left-box');
	// console.log(dbox);
	let db = document.getElementsByClassName('nav-city');
	// console.log(db);
	for(let i = 0;i < dbox.length;i++){
		dbox[i].onmouseover = function(){
			for(let j = 0;j < db.length;j++){
				db[j].classList.remove('con-active');
			}
			db[i].classList.add('con-active');
		}
		dbox[i].onmouseout = function(){
			for(let j = 0;j < db.length;j++){
				db[j].classList.remove('con-active');
			}
		}
	}
	//我的京东 客户服务 网站导航
	let wdjdbox = document.getElementsByClassName('bai');
	// console.log(wdjdbox);
	let wdjd = document.getElementsByClassName('myjd-box');
	// console.log(wdjd);
	for(let i = 0;i < wdjdbox.length;i++){
		wdjdbox[i].onmouseover = function(){
			for(let j = 0;j < wdjd.length;j++){
				wdjd[j].classList.remove('con-active');
			}
			wdjd[i].classList.add('con-active');
		}
		wdjdbox[i].onmouseout = function(){
			for(let j = 0;j < wdjd.length;j++){
				wdjd[j].classList.remove('con-active');
			}
		}
	}
	//手机京东
	let sjjdbox = document.getElementsByClassName('sjjd-box');
	// console.log(sjjdbox);
	let sjjd = document.getElementsByClassName('sjjd');
	// console.log(sjjd);
	for(let i = 0;i < sjjdbox.length;i++){
		sjjdbox[i].onmouseover = function(){
			for(let j = 0;j < sjjd.length;j++){
				sjjd[j].classList.remove('con-active');
			}
			sjjd[i].classList.add('con-active');
		}
		sjjdbox[i].onmouseout = function(){
			for(let j = 0;j < sjjd.length;j++){
				sjjd[j].classList.remove('con-active');
			}
		}
	}
	/*1.初始化CSS
		选项卡  display:block;
	2.获取元素
		大盒子   .message
		标题   .mes-t
		信息盒子   .mes-ul
	3.遍历大盒子   .message
	4.遍历标题  .mes-t  onmouseover
	5.遍历选项卡  .mes-ul  
		添加属性 classList.add
		删除属性 classList.remove*/
	let message = document.getElementsByClassName('message');
	// console.log(message);
	for(let i = 0; i < message.length;i++){
		let mt = message[i].getElementsByClassName('mes-t');
		// console.log(mt);
		let mm = message[i].getElementsByClassName('mes-ul');
		// console.log(mm);
		for(let j = 0; j < mt.length;j++){
			mt[j].onmouseover = function(){
				for(let k = 0; k < mm.length;k++){
					mm[k].classList.remove('mi-ms');
				}
				mm[j].classList.add('mi-ms');
			}
		}
	}
}
