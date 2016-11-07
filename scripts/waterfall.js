// JavaScript Document
	function initial(){

		//alert("initial");
		apid0_cur=0;
		apid1_cur=0;
		$.getJSON("http://www.shacus.top/weixin/appointment/listphoto?row=0&jsoncallback=?",//待更换的网络请求
		      function(json){//在这里处理返回的列表并填充进html中

		      	if (json.code==10211){
		  //    		alert(json.contents);
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
		        	if (aplist[index].sex==0) {	
					html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'&date='+Math.round(new Date().getTime())+''+'"><img id="'+aplist[index].picurl+'" src="images/pic_160.png"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_0.jpg"/><a  class="option_username">'+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a class="option_item">'+statestr+'</a> <a class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
					}
					if (aplist[index].sex==1) {	
					html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'&date='+Math.round(new Date().getTime())+''+'"><img id="'+aplist[index].picurl+'" src="images/pic_160.png"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_1.jpg"/><a class="option_username">'+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a class="option_item">'+statestr+'</a> <a class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
					}
					$minUl = getMinUl(0);//增加到约模特那一列
					//alert('$minUl.html');
					$minUl.append(html);

					//new downloadworker(aplist[index].picurl);

		        }

        			var i = 0, length = aplist.length;
        			function download(){
        			    convertImgToBase64(aplist[i].picurl, function(base64Img){
        					//alert("converted idx "+i);
                			//alert("converted id "+aplist[i].picurl);
                			//alert("converted  "+base64Img);
							document.getElementById(aplist[i].picurl).setAttribute('src',base64Img);
        			        //document.getElementById(aplist[i]).setAttribute('style','background-image:url("'+base64Img+'")');
        			        i++;
        			        if (i < length) {
        			            download();
        			        }  
        			    });
        			}
        			//alert("start convert");
        			download();

		      });
		//alert("complete");

	}
	//initial();
/**瀑布流**/

	//url data function dataType
	//alert('interval');
	//setInterval(initial(),5000);
	//alert('finish');

	/*//无限加载
	$(window).on("scroll", function(){
		$minUl = getMinUl(aptype);

		alert("on scroll");

		if ($minUl.height() <= $(window).scrollTop() + $(window).height()){
			
			//当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
			loadMore(aptype);//加载新图片
		}
	});*/

	//点击更多加载
	$("#loadMeinvMOre1").click(function() {
		//alert("loadmore");
		$minUl = getMinUl(0);
		loadMore(0);
	});
	$("#loadMeinvMOre2").click(function() {
		//alert("loadmore");
		$minUl = getMinUl(1);
		loadMore(1);
	});

function loadMore(atype){

	var cur=-1;
	if (atype==0)
	{	cur=apid0_cur;
		//cur=0;//为了测试用
		$.getJSON("http://www.shacus.top/weixin/appointment/listphoto?row="+cur+"&jsoncallback=?",//待更换的网络请求
		      function(json){//在这里处理返回的列表并填充进html中

		      	if (json.code==10211){
	//	      		alert(json.contents);
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
		        	
		        	if (aplist[index].sex==0) {				
					html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'&date='+Math.round(new Date().getTime())+''+'"><img id="'+aplist[index].picurl+'" src="images/pic_160.png"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_0.jpg"/><a class="option_username">'+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a class="option_item">'+statestr+'</a> <a class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
					}
					if (aplist[index].sex==1) {				
					html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'&date='+Math.round(new Date().getTime())+''+'"><img id="'+aplist[index].picurl+'" src="images/pic_160.png"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_1.jpg"/><a class="option_username">'+aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a class="option_item">'+statestr+'</a> <a class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
					}
					//alert("getmin");
					$minUl = getMinUl(0);//增加到约模特那一列
					//alert("append");
					$minUl.append(html);

				//	new downloadworker(aplist[index].picurl);
		        }
        			var i = 0, length = aplist.length;
        			function download(){
        			    convertImgToBase64(aplist[i].picurl, function(base64Img){
							document.getElementById(aplist[i].picurl).setAttribute('src',base64Img);
        			        //document.getElementById(aplist[i]).setAttribute('style','background-image:url("'+base64Img+'")');
        			        i++;
        			        if (i < length) {
        			            download();
        			        }  
        			    });
        			}
        			download();
		      });
	}
	else
	{	cur=apid1_cur;
        $.getJSON("http://www.shacus.top/weixin/appointment/listmodel?row="+cur+"&jsoncallback=?",
                    function(json){//在这里处理返回的列表并填充进html中

                        if (json.code==10211){
                            alert(json.contents);
                            return;
                        }

                        var aplist=[];
			aplist=json.contents;
                        for (var index in aplist) {
                            apid1_cur++;

                            var state=aplist[index].status;
                            var statestr="加载中";
                            if (state==1){
                                statestr="报名中";
                            }

                            if (state==2){
                                statestr="进行中";
                            }

                            if (state>2){
                                statestr="已结束";
                            }

                            
                            var sex=aplist[index].sex;
                            var html = "";
                                    if (sex==0) {
                    html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'&date='+Math.round(new Date().getTime())+''+'"><img id="'+aplist[index].picurl+'" src="images/pic_160.png"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_0.jpg"/><a href="" class="option_username">'
                    +aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a href="" class="option_item">'+statestr+'</a> <a href="" class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
                }
                            if (sex==1) {
                    html='<li><div><a href="yuepai_detail.html?vali='+phone+'&apid='+aplist[index].id+'&date='+Math.round(new Date().getTime())+''+'"><img id="'+aplist[index].picurl+'" src="images/pic_160.png"/></a></div><div class="water_option_user"><img style="padding-left:4%;width:30px; height:30px; border-radius:50%; overflow:hidden;" src="images/avatar_1.jpg"/><a href="" class="option_username">'
                    +aplist[index].alais+'</a></div><div class="water_user pdp4">'+aplist[index].title+'</div><div class="water_option"> <a href="" class="option_item">'+statestr+'</a> <a href="" class="option_item option_comt">'+aplist[index].registn+'</a> </div></li>';
                }
                $minUl = getMinUl(1);
                $minUl.append(html);
              //  new downloadworker(aplist[index].picurl);

                }

        			var i = 0, length = aplist.length;
        			function download(){
        			    convertImgToBase64(aplist[i].picurl, function(base64Img){
							document.getElementById(aplist[i].picurl).setAttribute('src',base64Img);
        			        //document.getElementById(aplist[i]).setAttribute('style','background-image:url("'+base64Img+'")');
        			        i++;
        			        if (i < length) {
        			            download();
        			        }  
        			    });
        			}
        			download();

                    });
	}
}
	
