const startE1 = document.getElementById("start");
        const stopE1 = document.getElementById("stop");
        const resetE1 = document.getElementById("reset");
        const timerE1 = document.getElementById("timer");

        let interval;
        let timeLeft = 1500;
        function updateTimer(){
            let minute = Math.floor(timeLeft/60);
            let second = timeLeft % 60;
            let formattedTime = `${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
            timerE1.innerHTML = formattedTime;
        }
        function startTimer(){
           interval = setInterval(()=>{
            timeLeft--;
            updateTimer();
            if(timeLeft === 0){
            alert("Time's Up!");
            timeLeft = 1500;
           }
           }, 1000); 
          
        }
        function stopTimer(){
            clearInterval(interval); 
     
        }
        function resetTimer(){
            clearInterval(interval); 
            timeLeft = 1500;
            updateTimer();
        }

        startE1.addEventListener('click', startTimer);
        stopE1.addEventListener('click', stopTimer);
        resetE1.addEventListener('click', resetTimer);