$(document).ready(function()
{
	efeitosMegaMenu();
});

function efeitosMegaMenu()
{
	$(
		 '.top-menu-item-1,'
		+'.top-menu-item-2,'
		+'.top-menu-item-3,'
		+'.top-menu-item-4,'
		+'.top-menu-orientacao-item-1,'
		+'.top-menu-orientacao-item-2,'
		+'.top-menu-orientacao-item-3,'
		+'.top-menu-orientacao-item-4,'
		+'#mega-menu'
	)
	.mouseenter(function()
	{
		$("#mega-menu").show();
		
		switch( $(this).prop('class') )
		{
			case 'top-menu-item-1':
			$("div.top-menu-orientacao-item-1").css({"background":"linear-gradient(0deg, #4B6273, #4B6273), #334654"});
			$("#mega-menu").css({"border-bottom":"5px solid #F47920"});
			break;
			
			case 'top-menu-item-2':
			$("div.top-menu-orientacao-item-2").css({"background":"linear-gradient(0deg, #4B6273, #4B6273), #334654"});
			$("#mega-menu").css({"border-bottom":"5px solid #1FC0DA"});
			break;
			
			case 'top-menu-item-3':
			$("div.top-menu-orientacao-item-3").css({"background":"linear-gradient(0deg, #4B6273, #4B6273), #334654"});
			$("#mega-menu").css({"border-bottom":"5px solid #EA368E"});
			break;
			
			case 'top-menu-item-4':
			$("div.top-menu-orientacao-item-4").css({"background":"linear-gradient(0deg, #4B6273, #4B6273), #334654"});
			$("#mega-menu").css({"border-bottom":"5px solid #FDB515"});
			break;
		}
		
	}).mouseleave(function()
	{
		$("#mega-menu").hide();
		
		switch( $(this).prop('class') )
		{
			case 'top-menu-item-1':
			$("div.top-menu-orientacao-item-1").css({"background":"#F47920"});
			break;
			
			case 'top-menu-item-2':
			$("div.top-menu-orientacao-item-2").css({"background":"#1FC0DA"});
			break;
			
			case 'top-menu-item-3':
			$("div.top-menu-orientacao-item-3").css({"background":"#EA368E"});
			break;
			
			case 'top-menu-item-4':
			$("div.top-menu-orientacao-item-4").css({"background":"#FDB515"});
			break;
		}
	});
}