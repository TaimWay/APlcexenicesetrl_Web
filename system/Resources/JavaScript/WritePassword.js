window.onload = function(){
    var oForm = document.getElementById('loginForm');
    var oUser = document.getElementById('user');
    var oPswd = document.getElementById('pswd');
    var oRemember = document.getElementById('remember');
    if(getCookie('user') && getCookie('pswd')){
      oUser.value = getCookie('user');
      oPswd.value = getCookie('pswd');
      oRemember.checked = true;
    }
    oRemember.onchange = function(){
      if(!this.checked){
        delCookie('user');
        delCookie('pswd');
      }
    };
    oForm.onsubmit = function(){
      if(remember.checked){ 
        setCookie('user',oUser.value,7);
        setCookie('pswd',oPswd.value,7);
      }
    };
  };
  function setCookie(name,value,day){
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires='+ date;
  };
  function getCookie(name){
    var reg = RegExp(name+'=([^;]+)');
    var arr = document.cookie.match(reg);
    if(arr){
      return arr[1];
    }else{
      return '';
    }
  };
  function delCookie(name){
    setCookie(name,null,-1);
  };