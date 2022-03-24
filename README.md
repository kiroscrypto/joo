<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title>
 <style>
  /*Contact*/
#contact {min-height: 65vh; background: powderblue;}
#contact .contact_info {text-align: center;}
#contact .contact_info span {}
#contact .sns {margin: 30px 0;}
#contact .sns img {padding: 0 10px;}
#contact .quote {font-size: 30px; font-weight: 700;}
/* css text animation 시작 */
#contact .quote {text-transform: uppercase; 
	background-image: linear-gradient( -225deg,#231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%
);
background-size: auto auto;
background-clip: border-box;
background-size: 200% auto;
color: #fff;
background-clip: text;
text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: textclip 2.5s linear reverse infinite;
display: inline-block;
				font-size: 30px;
}

@keyframes textclip {
to {
		background-position: 200% center;
}
}
/* css text animation 끝*/
#contact .digital_clock {margin-bottom: 15px;}
#contact .digital_clock span {text-align: center; font-size: 16px;}
#contact .digital_clock {height: 100px; text-align: center; color: #f4f4f4; padding: 10px 0; } 
#contact #clock { color: #f4f4f4; font-size: 24px; font-family:'NanumSquare'; font-weight: bold; } 
#contact #clockday { color: #f4f4f4; font-family:'NanumSquare'; } 
 </style>
</head>
<body>
 <section id="contact" class="">
  <!--연락처 : 전화번호(학원전화번호), 이메일, sns, 오픈 카톡-->
  <div class="container">
    <h2>Contact</h2>
    <div class="contact_info">
      <span>함께 일할 날을 손꼽아 기다립니다.<br>
        +82 10 6435 8774<br>
        kiroscrypto@daum.net
      </span>
      <div class="sns">
        <img src="img/github_b.png" alt="github">
        <img src="img/tistory_b.png" alt="tistory">
        <img src="img/kakao_b.png" alt="kakaotalk">
      </div>
      <span class="quote">Viva La Vida!</span>
    </div>
    <div class="digital_clock">
      <span>SEOUL, SOUTH KOREA </span>
      <ul>
        <li id="clock">00:00</li>
        <li id="clockday">00.00.00</li>
      </ul>
    </div>
  </div>
</section>
</body>
</html>
