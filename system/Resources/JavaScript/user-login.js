function GetCountry(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipinfo.io/json", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if(response.country=="CN") window.open('/zh-cn/home.html');
            else window.open('/en-us/home.html');
            console.log(response.country);
            window.close();
        } 
        else {
            return xhr.status;
        }
    };
    xhr.send();
}
function join(){
    GetCountry();
}