var globalData = {
	server: "http://localhost:8081/MonsterCRM",
	pre: "http://127.0.0.1:8020/MonsterCRM/",
	myTheme: "ui-cupertino",
	setUserInfo: function(loginName, password, imgPath, id) {
		sessionStorage.setItem("loginName", loginName);
		sessionStorage.setItem("password", password);
		sessionStorage.setItem("imgPath", imgPath);
		sessionStorage.setItem("id", id);
	},
	setModuleId: function(ModuleId) {
		sessionStorage.setItem("ModuleId", ModuleId);
	},
	getModuleId: function() {
		if(sessionStorage.getItem("ModuleId")==null){
			window.location.href = "http://127.0.0.1:8020/MonsterCRM/main.html";
		}
		return sessionStorage.getItem("ModuleId");
	},
    setThemes: function(Themes) {
		sessionStorage.setItem("Themes",  "default");
	},
	getThemes: function() {
		if (sessionStorage.getItem("Themes")==null){
		sessionStorage.setItem("Themes",  "ui-cupertino");
	}
		return sessionStorage.getItem("Themes");
	},
	setToken: function(tokenId) {
		sessionStorage.setItem("tokenId", tokenId);
	},
	getToken: function() {
		if (sessionStorage.getItem("tokenId")==null){
		window.location.href = "http://127.0.0.1:8020/MonsterCRM/login.html";
	}
		return sessionStorage.getItem("tokenId");
	},

	getImgPath: function() {
		return sessionStorage.getItem("imgPath");
	},
	getUserId: function() {
		return sessionStorage.getItem("id");
	},
	/*getCurUid: function (){
		return sessionStorage.getItem("id");
	},*/
	getCurPassword: function() {
		return sessionStorage.getItem("password");
	},
	getCurLoginName: function() {
		return sessionStorage.getItem("loginName");
	},
	getCurRoleNames: function() {
		var rs = sessionStorage.getItem("roleNames");
		var arr = rs.split(",");
		var data = "[";
		for(var i = 0; i < arr.length; i++) {
			arr[i] = "\'" + arr[i] + "\'";
		}
		return eval("[" + arr.join() + "]");
	}
};
document.write('<link id="myTheme" rel="stylesheet" href="' + globalData.pre + 'easyui/themes/' +  globalData.getThemes() + '/easyui.css" type="text/css"/>');
document.write('<link rel="stylesheet" href="' + globalData.pre + 'easyui/themes/icon.css" type="text/css"/>');
document.write('<script type="text/javascript" src="' + globalData.pre + 'easyui/jquery.min.js" ></script>');
document.write('<script type="text/javascript" src="' + globalData.pre + 'easyui/jquery.easyui.min.js" ></script>');
document.write('<script src="' + globalData.pre + 'easyui/locale/easyui-lang-zh_CN.js"></script>');