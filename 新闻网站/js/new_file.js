$(function(){
//	二级菜单
	$("#down_img").click(function(){		
		$(".ul_2").toggle();
		
		
	});
	
//	滚动条
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("#back_top").css("visibility","visible");
		}else{
			$("#back_top").css("visibility","hidden");
		}
		
//		if($(window).scrollTop()>100){
//			$("#back_top").css("display","block");
//		}else{
//			$("#back_top").css("display","none");
//		}
//		没有设置高度的话会影响布局	
	});
	
//	登录打勾
	$("#img_text").click(function(){
		$("#img_text img").toggle();
		
	});
	
//	登录关闭
	$("#close").click(function(){
		$(".login").css("display","none");
		$(".wrap").css("display","none");
		
	});
	
//	登录按钮
	$("#denglu").click(function(){
		$(".login").toggle();
		$(".wrap").toggle();
		
	});
});
