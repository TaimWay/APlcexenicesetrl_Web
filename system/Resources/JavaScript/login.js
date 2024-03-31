var rebootTesting = false;
function login() {
 
	var name=document.getElementById("name").value;  //读取表单数据，创建变量
	var password=document.getElementById("password").value;
 
	if (found_User()==true && rebootTesting==true) {  
        //验证变量。此处设置账号、密码（可设置多组，用||隔开）
		alert("登录成功！");

		window.document.f.action='/zh-cn/';  //此处设置登录后跳转页面
		window.document.f.submit();
	}
	else{
		alert("用户名或密码错误！");
	}
 
}
function found_User(name,password){
    var list_user=['admin','TaimWay'];
    var list_password=['APlcexenicesetrl$Admin','APexenice220144'];

    for(var i=0;i<2;i++){
        if(list_user[i]==name && list_password[i]==password){
            return list_user[i]+'|'+list_password[i];
        }
    }
    return null;
}