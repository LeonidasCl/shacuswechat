// JavaScript Document
	function initial(){

		alert("initial");
		apid0_cur=0;
		apid1_cur=0;
		$.getJSON("http://www.shacus.top/weixin/appointment/listphoto?row=0&jsoncallback=?",//待更换的网络请求
		      function(json){//在这里处理返回的列表并填充进html中

		      	if (json.code==10211){
		      		alert(json.contents);
		      		return;
		      	}
		
		        var aplist=[];
		        aplist=json.contents;
		        //alert(aplist[0].WACtitle);
		        for (var index in aplist) {

		        	apid0_cur++;

		        	var state=aplist[index].status;
		        	var statestr="加载中";
		        	if (state==1) {
		        		statestr="报名中";
		        	}

		        	if (state==2) {
		        		statestr="进行中";
		        	}

		        	if (state>2) {
		        		statestr="已结束";
		        	}

		        	var html = "";		

wx.downloadImage({
    serverId: aplist[index].picurl, // 需要下载的图片的服务器端ID，由uploadImage接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (res) {
        var localId = res.localId; // 返回图片下载后的本地ID

		        	if (aplist[index].sex==0) {	
					html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'"><img src="'+localId+'"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_0.jpg"/><a href="" class="option_username">'
					+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a href="" class="option_item">'+statestr+'</a> <a href="" class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
					}
					if (aplist[index].sex==1) {	
					html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'"><img src="'+localId+'"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_1.jpg"/><a href="" class="option_username">'
					+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a href="" class="option_item">'+statestr+'</a> <a href="" class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
					}

    }
});


					//alert('getmin');
					$minUl = getMinUl(0);//增加到约模特那一列
					//alert('$minUl.html');
					$minUl.append(html);

		        }
		      });

	}
	//initial();
/**瀑布流**/

	//url data function dataType
	//alert('interval');
	//setInterval(initial(),5000);
	//alert('finish');

	/*//无限加载*/
	$(window).on("scroll", function(){
		$minUl = getMinUl(aptype);

		alert("on scroll");

		if ($minUl.height() <= $(window).scrollTop() + $(window).height()){
			
			//当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
			loadMore(aptype);//加载新图片
		}
	});
	function getMinUl(atype) {//每次获取最短的ul,将图片放到其后
		if (atype==0) 
		var $arrUl = $("#container1 .col");
		else
		var $arrUl = $("#container2 .col");

		var $minUl = $arrUl.eq(0);
		$arrUl.each(function(index, elem) {
			//alert(elem.outerHTML);
			//alert($(elem).height() +"   "+$minUl.height())
			if ($(elem).height() < $minUl.height()) {
				$minUl = $(elem);
			}
		});
		return $minUl;
	}
	//点击更多加载
	$("#loadMeinvMOre1").click(function() {
		//alert("loadmore");
		$minUl = getMinUl(aptype);
		loadMore(aptype);
	});
	$("#loadMeinvMOre2").click(function() {
		//alert("loadmore");
		$minUl = getMinUl(aptype);
		loadMore(aptype);
	});

function loadMore(atype){

	var cur=-1;
	if (atype==0)
	{	cur=apid0_cur;
		//cur=0;//为了测试用
		$.getJSON("http://www.shacus.top/weixin/appointment/listmodel?row="+cur+"&jsoncallback=?",//待更换的网络请求
		      function(json){//在这里处理返回的列表并填充进html中

		      	if (json.code==10211){
		      		alert(json.contents);
		      		return;
		      	}

		        var aplist=[];
		        aplist=json.contents;
		        //alert(aplist[0].WACtitle);
		        for (var index in aplist) {

		        	apid0_cur++;

		        	var state=aplist[index].status;
		        	var statestr="加载中";
		        	if (state==1) {
		        		statestr="报名中";
		        	}

		        	if (state==2) {
		        		statestr="进行中";
		        	}

		        	if (state>2) {
		        		statestr="已结束";
		        	}
var html = "";
wx.downloadImage({
    serverId: aplist[index].picurl, // 需要下载的图片的服务器端ID，由uploadImage接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (res) {
        var localId = res.localId; // 返回图片下载后的本地ID

		        	
		        	if (aplist[index].sex==0) {				
					html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'"><img src="'+localId+'"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_0.jpg"/><a href="" class="option_username">'
					+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a href="" class="option_item">'+statestr+'</a> <a href="" class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
					}
					if (aplist[index].sex==1) {				
					html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'"><img src="'+localId+'"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_1.jpg"/><a href="" class="option_username">'
					+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a href="" class="option_item">'+statestr+'</a> <a href="" class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
					}

    }
});


					//alert("getmin");
					$minUl = getMinUl(0);//增加到约模特那一列
					//alert("append");
					$minUl.append(html);

		        }
		      });
	}
	else
	{	cur=apid1_cur;
		$.getJSON("http://www.shacus.top/weixin/appointment/listmodel?row="+cur+"&jsoncallback=?",//待更换的网络请求
		      function(json){//在这里处理返回的列表并填充进html中


		      	if (json.code==10211){
		      		alert(json.contents);
		      		return;
		      	}

		        var aplist=[];
		        aplist=json.contents;
		        //alert(aplist[0].WACtitle);
		        for (var index in aplist) {

		        	apid1_cur++;

		        	var state=aplist[index].status;
		        	var statestr="加载中";
		        	if (state==1) {
		        		statestr="报名中";
		        	}

		        	if (state==2) {
		        		statestr="进行中";
		        	}

		        	if (state>2) {
		        		statestr="已结束";
		        	}
var html = "";
wx.downloadImage({
    serverId: aplist[index].picurl, // 需要下载的图片的服务器端ID，由uploadImage接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (res) {
        var localId = res.localId; // 返回图片下载后的本地ID
				html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'"><img src="'+localId+'"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar.jpg"/><a href="" class="option_username">'
					+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a href="" class="option_item">'+statestr+'</a> <a href="" class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';


    }
});

		        				
	
					$minUl = getMinUl(1);//增加到约摄影师那一列
					$minUl.append(html);

		        }
		      });
	}
}
	
