function changePhone1(){
    const phone1 = document.getElementById("phone1").value
    
    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}

function changePhone3(){
    const phone3 = document.getElementById("phone3").value
    
    if(phone3.length === 4){
        document.getElementById("btn1").setAttribute("style", "background-color: yellow")
        document.getElementById("btn1").disabled = false;
    } else {
        // 버튼을 비활성화한다
        document.getElementById("btn1").setAttribute("style", "background-color: none")
        document.getElementById("btn1").disabled = true;
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
                    alert('너 이미 실행했어')
                }    
            }

