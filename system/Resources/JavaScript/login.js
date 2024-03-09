function login(user,password){
    if(user=="" || password==""){
        return "ERR:STRING_NULL";
    }
    else{
        var data=user;
        data+=".json";
        var xhr = new XMLHttpRequest(); 
        xhr.open("GET", data, true); 
        xhr.onreadystatechange = function() { 
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText); 
            }
        };
        xhr.send();
    }
}