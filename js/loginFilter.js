//页面加载完之后，判断有没有用户登录，如果没有就跳转到登录页
$(function(){
	var tokenId=globalData.getToken();
	//console.log(tokenId);
	if(tokenId=='null' || tokenId=='' || tokenId==undefined){
		window.location.href='login.html';
	}
})