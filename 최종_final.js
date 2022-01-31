function changePhone1(){
    let phone1 = document.getElementById("phone1").value
    
    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }
}

function changePhone2(){
    let phone2 = document.getElementById("phone2").value
    
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}

// 이걸 모르겠다 !!

function changePhone3(){
    let phone3 = document.getElementById("phone3").value
    
    if(phone3.length === 4){
        const btn1 = document.getElementById("btn1").value 
        document.getElementById("btn1").setAttribute("style", "background-color: yellow")
        document.getElementById("btn1").disabled = false;
    }
}

let isStarted = false;
            // 여기에 명령문 작성!
        
            function getToken() {
              
                if(isStarted === false) {
                    document.getElementById("btn2").setAttribute("style", "background-color: yellow")
                    document.getElementById("btn2").disabled = false;
                    isStarted = true;
                    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
                    document.getElementById("num").innerText = token;
                    document.getElementById("num").style.color = "#999999";

                    let time = 180
                    setInterval(function() {
                        if(time >= 0) {
                            const min = String(Math.floor(time/60)).padStart(2, "0")
                            const sec = String(time % 60).padStart(2, "0")
                            document.getElementById("count").innerText = min + ":" + sec
                            time = time - 1
                        } else {
                            document.getElementById("btn2").disabled = true;
                            isStarted = false;
                        }
                    }, 1000)
                } else {
                    alert('인증번호가 이미 발송되었습니다.')
                }    
            }

function signup() {
    alert('회원가입이 완료되었습니다.')
}

