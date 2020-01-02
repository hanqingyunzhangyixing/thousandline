var globalData = {
	server: "http://localhost:8080/",
	pre: "http://127.0.0.1:8848/thousandline",
	setUserInfo: function(id, loginName, name) {
		sessionStorage.setItem("id", id);
		sessionStorage.setItem("loginName", loginName);
		sessionStorage.setItem("name", name);
	},
	//存放验证码
	setCode: function(SjNum) {
		sessionStorage.setItem("SjNum", SjNum);
	},
	//获取验证码
	getCode: function() {
		return sessionStorage.getItem("SjNum");
	},
	setUserImage: function(userImage) {
		sessionStorage.setItem("userImage", userImage);
	},
	getUserImage: function() {
		return sessionStorage.getItem("userImage");
	},
	setToken: function(tokenId) {
		sessionStorage.setItem("tokenId", tokenId);
	},
	getToken: function() {
		if (sessionStorage.getItem("tokenId") == null) {
			window.location.href = "http://127.0.0.1:8848/thousandline/login.html";
		}
		return sessionStorage.getItem("tokenId");
	},
	getCurUid: function() {
		return sessionStorage.getItem("id");
	},
	getCurUName: function() {
		return sessionStorage.getItem("loginName");
	},
	getCurRoleNames: function() {
		var rs = sessionStorage.getItem("name");
		var arr = rs.split(",");
		var data = "[";
		for (var i = 0; i < arr.length; i++) {
			arr[i] = "\'" + arr[i] + "\'";
		}
		return eval("[" + arr.join() + "]");
	}
};
document.write('<script type="text/javascript" src="' + globalData.pre + '/js/jquery-1.9.1.min.js"></script>');
document.write('<script type="text/javascript" src="' + globalData.pre + '/js/easyui/jquery.easyui.min.js"></script>');
document.write('<script src="' + globalData.pre + '/js/easyui/locale/easyui-lang-zh_CN.js"></script>');
document.write('<script type="text/javascript" src="' + globalData.pre + '/js/layui/layui.js"></script>');
document.write('<script type="text/javascript" src="' + globalData.pre + '/js/layui/layer/layer.js"></script>');
document.write('<link rel="stylesheet" type="text/css" href="' + globalData.pre + '/js/layui/css/layui.css"/>');
