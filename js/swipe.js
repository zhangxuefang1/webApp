;(function($){
	//swipe滑动
	var n=0,
	 len=$(".goodContent>div").size();

	 //alert(len);
	$(".goodContent").on("swipeLeft",function(){
		//显示下一张
		 n++;
        if(n>=len-1) n=len-1;
		movePic();
	}).on("swipeRight",function(){
		 n--;
         if(n<0) n=0;
		movePic();
	})
	function movePic(){
    	$(".goodContent>div").css({"-webkit-transform":"translate3d("+n*(-100)+"%,0,0)","-webkit-transition":"transform 0.6s"});
    	$(".goodNav>a").eq(n).addClass("bg").siblings().removeClass("bg");
    }


	$(".goodContent").on("tap",".attention",function(){
		//alert($(this).text())
		if($(this).text()=="+关注"){
			$(this).css({"border-color":"blue","color":"blue"});
			$(this).text("-取消");
		}else{
			$(this).css({"border-color":"#CA5754","color":"#CA5754"});
			$(this).text("+关注");
		}
		
	})
	/*tab标签切换*/

    function tabs(tabTit,on,tabCon){
		$(tabCon).each(function(){
		  $(this).children().eq(0).show();
		 
		});
	    $(tabTit).on('click','a',function(){
	     	//console.log($(this))
	         $(this).addClass(on).siblings().removeClass(on);
	         var index = $(tabTit).children().index(this);
	         $(tabCon).children().eq(index).show().siblings().hide();
	    });
   }
  tabs(".goodNav","bg",".goodContent");

})(Zepto)