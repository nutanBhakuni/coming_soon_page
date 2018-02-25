(function(){
	
	let days = document.querySelector('.numericDays');
	let hours = document.querySelector('.numericHours');
	let minutes = document.querySelector('.numericMinutes');
	let seconds = document.querySelector('.numericSeconds');

	let myTimer = setInterval(changeTimer, 1000);

	function changeTimer(){
		if(Number(seconds.innerText) === 0){
			seconds.innerText = 59;
			if(Number(minutes.innerText) === 0){
				minutes.innerText = 59;
				if(Number(hours.innerText) === 0){
					hours.innerText = 23;
					if(Number(days.innerText) === 0){
						stopTimer();
					}
					else{
						let dys = Number(days.innerText) - 1;
						if(dys < 10){
							days.innerText = "0" + dys;
						}
						else{
							days.innerText = dys;
						}
					}
				}
				else{
					let hrs = Number(hours.innerText) - 1;
					if(hrs < 10){
						hours.innerText = "0" + hrs;
					}
					else{
						hours.innerText = hrs;
					}
				}
			}
			else{
				let mins = Number(minutes.innerText) - 1;
				if(mins < 10){
					minutes.innerText = "0" + mins;
				}
				else{
					minutes.innerText = mins;
				}
			}
		}
		else{
			let secs = Number(seconds.innerText) - 1;
			if(secs < 10){
				seconds.innerText = "0" + secs;
			}
			else{
				seconds.innerText = secs;
			}
		}
	}

	function stopTimer(){
		clearInterval(myTimer);
	}
})();