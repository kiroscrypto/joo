$(function(){
  function clock() { 
    var date = new Date(); 
    var YYYY = String(date.getFullYear()); 
    var MM = String(date.getMonth() + 1); 
    var DD = Zero(date.getDate()); 
    var hh = Zero(date.getHours()); 
    var mm = Zero(date.getMinutes()); 
    var ss = Zero(date.getSeconds()); 
    var Week = Weekday(); 
  Write(YYYY, MM, DD, hh, mm, ss, Week); 
   //시계에 1의자리수가 나올때 0을 넣어주는 함수 (ex : 1초 -> 01초) 
 
   function Zero(num) { 
    return (num < 10 ? '0' + num : '' + num); 
   }
   
   //요일을 추가해주는 함수 
   function Weekday() { 
    var Week = ['일', '월', '화', '수', '목', '금', '토']; 
    var Weekday = date.getDay(); 
    return Week[Weekday]; 
   } 
   
   //시계부분을 써주는 함수 
   function Write(YYYY, MM, DD, hh, mm, ss, Week) { 
    var clockday = document.getElementById("clockday"); 
    var clock = document.getElementById("clock"); 
    clockday.innerText = YYYY + '. ' + MM + '. ' + DD + ' (' + Week + ')'; 
    clock.innerText = hh + ' : ' + mm + ' : ' + ss; 
    } 
   } 
   
   setInterval(clock, 1000); //1초(1000)마다 clock함수를 재실행 한다 
});