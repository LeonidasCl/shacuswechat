// JavaScript Document
// Shacus library
// Λεωνίδας 2016.11.1

function convertImgToBase64(url, callback, outputFormat){
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
    	//alert("onload");
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img,0,0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null; 
    };
    img.onerror = function(){
    	//alert("onerror");
        callback.call(this, "images/pic_161.png");
    };
    //alert("try");
    img.src = url;
    //alert("set");
}

function GetQueryString(name)
{
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}

function excitedid(excited){
    window.location.href=excited+"&date="+Math.round(new Date().getTime());
}

function askagree(){
    alert("亲爱的用户，请注意人身和财产安全，请勿将约拍用作其他用途。线下约拍前请确认对方真实身份后再进行约拍。今后由此约拍引起的纠纷和造成的一切后果，其责任概和本平台无关。特此声明。");
}

//字符过滤
function stripscript(s)
{
var pattern = new RegExp("[%--`~#$^&*()=|{}':;',\\[\\].<>/~@#&*——']")
var rs = "";
for (var i = 0; i < s.length; i++) {
 rs = rs+s.substr(i, 1).replace(pattern, '');
}
return rs;
}

function messageChange(obj){
    //alert('change');
    var len=obj.value.length;
    $('.weui-textarea-counter').text( len+ '/' + 150);
    if (len>150) 
    $('.weui-textarea-counter').css('color','red');
    else
    $('.weui-textarea-counter').css('color','gray');
}

function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

	if(arr=document.cookie.match(reg)){
		return (arr[2]);}
	else
		return null;
}

function checkCookie()
{
var username=getCookie('username');
var uid=getCookie('id');
//alert("username "+username);
//alert("phone "+phone);
var phone=GetQueryString("vali");

//alert("phone "+phone+" username  "+username);

if (username!=null && username!="" && username==phone)
	{
	//alert("您已经登陆过，现在进入系统");
	}
else
	{//alert("请先注册或用自己的账号登录！");
    alert("请先登录");
	//window.location.href="index.html"+"?date="+Math.round(new Date().getTime());
    window.location.href="index.html"+"?date="+Math.round(new Date().getTime());
	}

}
checkCookie();

function toptips(){
	alert("亲爱的追影用户:\n很抱歉由于平台升级给您带来的种种不便，经过一周的公测，约拍平台图片问题已经完全修复，图片有效期为永久，原有图片因微信禁止的原因会失效，发起者可以进入详情更换这些图片。\n当前的约拍图片期限为永久，且不会下载到用户手机，我们会尽力保护您的隐私。\n再次为对您造成的不便致歉。\n追影技术负责人\nΛεωνίδας");
}