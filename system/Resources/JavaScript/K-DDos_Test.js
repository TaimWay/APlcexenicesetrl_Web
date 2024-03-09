function connent(){
    /*document.getElementById('status').innerHTML='Connect to the K-DDoS Test Module';

    setTimeout(function(){
        
        if(time>10){
            warning.setAttribute('style','');
            document.getElementById('warning').innerHTML='We can not connect to the K-DDoS Test Module.';
        }
        if(bool==true){
            if(console.log(warning.getAttribute('style'))) warning.setAttribute('style','display:none;');
            document.getElementById('status').innerHTML='Testing';
            Test();
            return;
        }
        time++;
    }
    ,1000
    );
        */
    document.getElementById('status').innerHTML='Connect to the K-DDoS Test Module';
    setTimeout(function(){
        Test();
        return;
    }, 5000);
    
}
function Test(){
    var pro=0;
    if(console.log(warning.getAttribute('style'))) warning.setAttribute('style','display:none;');
    document.getElementById('status').innerHTML='Testing';
    setInterval(function(){
        progress.setAttribute('value',pro);
        pro++;
        if(pro==100){
            document.getElementById('status').innerHTML='Finish';
            Finish();
            return;
        }
    }
    ,100
    );
    
}
function Finish(){
    window.open('user-login.html');
    window.close();
}