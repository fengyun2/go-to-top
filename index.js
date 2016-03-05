/*
* @Author: baby
* @Date:   2016-03-05 12:45:16
* @Last Modified by:   baby
* @Last Modified time: 2016-03-05 13:17:48
*/

'use strict';

var ly = (function() {
	var pubs = {};
	pubs.init = function() {
		pubs.domInit();
		pubs.eventBind();
		console.log('init... ');
	};
	pubs.domInit = function() {
		pubs.obtn = pubs.$('btn');
		// 获取页面可视区的高度
		pubs.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		pubs.timer = null;
		pubs.isTop = true;
	};
	pubs.eventBind = function() {
		// 滚动条滚动时触发
		window.onscroll = function() {
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(osTop >= pubs.clientHeight) {
				pubs.obtn.style.display = 'block';
			}else {
				pubs.obtn.style.display = 'none';
			}
			if(!pubs.isTop) {
				clearInterval(pubs.timer);
			}
			pubs.isTop = false;
		};
		pubs.obtn.onclick = function() {
			// 设置定时器
			pubs.timer = setInterval(function() {
				// 获取滚动条距离顶部的高度
				var osTop = document.documentElement.scrollTop || document.body.scrollTop;

				var ispeed = Math.floor(-osTop / 6);
				document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

				pubs.isTop = true;
				console.log(osTop - ispeed);

				if(osTop === 0) {
					clearInterval(pubs.timer);
				}
			},30);
		};
	};
	pubs.$ = function(ele) {
		return document.getElementById(ele);
	};
	return pubs;
})();
ly.init();
