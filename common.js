window.onload = function(){
    var userId = document.getElementById('joinId');
    var userPw = document.getElementById('joinPw');
    var confirmPw = document.getElementById('confirmPw');
    var userName = document.getElementById('joinName');
    var userBirth01 = document.getElementById('birth01'),
    userBirth02 = document.getElementById('birth02'),
    userBirth03 = document.getElementById('birth03');
    var red = document.getElementsByClassName('red');
    var green = document.getElementsByClassName('green');
    var sendBtn = document.getElementById('sendBtn');

    function checkSpecial(str) { 
        const regExp = /[^a-zA-Z0-9가-힣ㄱ-ㅎ]/g;
        if(regExp.test(str)) { 
            for (var i=0;i<red.length;i+=1){
                red[1].style.display = 'block';
                green[0].style.display = 'none';
            }
            return true; 
        }else{ 
            for (var i=0;i<green.length;i+=1){
                green[0].style.display = 'block';
                red[1].style.display = 'none';
            }
            return false; 
        } 
    }

    function checkKorean(str) { 
        const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        if(regExp.test(str)) { 
            for (var i=0;i<red.length;i+=1){
                red[2].style.display = 'none';
                red[3].style.display = 'block';
            }   
            return true; 
        }else{ 
            for (var i=0;i<red.length;i+=1){
                red[2,3].style.display = 'none';
            }   
            return false; 
        } 
    }

    function checkNum(str01,str02) { 
        const regExp = /^[0-9]/g;
        if(regExp.test(str01,str02)) { 
            red[7,8].style.display = 'none';
            return true; 
        }else{ 
            for (var i=0;i<red.length;i+=1){
                red[7].style.display = 'none';
                red[8].style.display = 'block';
            }   
            return false; 
        } 
    }

    userId.addEventListener('blur',e => {
        if(userId.value == ''){
            for (var i=0;i<red.length;i+=1){
                red[0].style.display = 'block';
                red[1].style.display = 'none';
                green[0].style.display = 'none';
            }
        }else if(userId.value.length < 5){
            red[1].style.display = 'block';    
        }else{
            for (var i=0;i<red.length;i+=1){
                red[0].style.display = 'none';
            }
            checkSpecial(userId.value);  
        }
    })
    userPw.addEventListener('blur',e => {
        if(userPw.value == ''){
            for (var i=0;i<red.length;i+=1){
                red[2].style.display = 'block';
                red[3].style.display = 'none';    
            }
        }else if(userPw.value.length < 8){
            red[2].style.display = 'none';
            red[3].style.display = 'block';        
        }else{
            checkKorean(userPw.value);  
        }
    })
    confirmPw.addEventListener('blur',e => {
        if(confirmPw.value == ''){
            for (var i=0;i<red.length;i+=1){
                red[4].style.display = 'block';
                red[5].style.display = 'none';
            }
        }else if(userPw.value !== confirmPw.value){
            for (var i=0;i<red.length;i+=1){
                red[4].style.display = 'none';
                red[5].style.display = 'block';
            }
        }else{
            red[4,5].style.display = 'none';
        }
    })
    userName.addEventListener('blur',e => {
        if(userName.value == ''){
            for (var i=0;i<red.length;i+=1){
                red[6].style.display = 'block';
            }
        }else{
            for (var i=0;i<red.length;i+=1){
                red[6].style.display = 'none';
            }       
        }
    })
    userBirth03.addEventListener('blur',e => {
        if(userBirth01.value == '' || userBirth02.options[userBirth02.selectedIndex].value == '월' || userBirth03.value == ''){
            for (var i=0;i<red.length;i+=1){
                red[7].style.display = 'block';
                red[8].style.display = 'none';
            }
        }else{   
            checkNum(userBirth01.value, userBirth03.value);
        }
    })
    sendBtn.addEventListener('click', e => {
        if(userId == '' || userPw == '' || confirmPw == '' || userName == '' || userBirth01 == '' || userBirth02.options[userBirth02.selectedIndex].value == '월' || userBirth03.value == ''){
            alert('제대로 입력되지 않았습니다.\n다시 입력해주세요.');
        }else{
            alert('회원가입을 축하드립니다.');
        }
    })
}