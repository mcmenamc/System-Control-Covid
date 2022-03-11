<template>
  <div>
    <!-- <div class="container">
    <div  class="error">
      <p class="p">4</p>
      <span class="dracula">			
        <div class="con">
          <div class="hair"></div>
          <div class="hair-r"></div>
          <div class="head"></div>
          <div class="eye"></div>
          <div class="eye eye-r"></div>
          <div class="mouth"></div>
          <div class="blod"></div>
          <div class="blod blod2"></div>
        </div>
      </span>
      <p class="p">4</p>
      <div class="page-ms">
        <p class="page-msg"> Oops, la página que buscas no se encuentra disponible </p>
        <button class="go-back">Regresar</button>
      </div>
    </div>
	</div>
<iframe style="width:0;height:0;border:0; border:none;" scrolling="no" frameborder="no" allow="autoplay" src="https://instaud.io/_/2Vvu.mp3"></iframe> -->
    <!-- <v-btn
      icon
      href="https://wa.me/522213425514?text=Me%20interesa%20saber%20si%20tengo%20covid"
      target="_blank"
      class="whatsapp success"
      ><v-icon color="white" x-large>fab fa-whatsapp</v-icon></v-btn> -->
    <ul id="redes-sociales">
      <a
        class="menu-button"
        href="#redes-sociales"
        title="Abrir | Síguenos en Nuestras Redes Sociales"
      >
        <i class="fas fa-chevron-right"></i>
      </a>
      <a
        class="menu-button"
        href="#0"
        title="Cerrar | Síguenos en Nuestras Redes Sociales"
      >
        <i class="fas fa-chevron-left"></i>
      </a>

      <li class="menu-item item-whatsapp">
        <v-btn
          icon
          href="https://wa.me/522213425514?text=Me%20interesa%20saber%20si%20tengo%20covid"
          target="_blank"
          class="whatsapp success"
          ><v-icon color="white" x-large>fab fa-whatsapp</v-icon></v-btn>
        <!-- <a href="#"> -->
          <!-- <i class="fab fa-instagram"></i> -->
        <!-- </a> -->
      </li>
      <li class="menu-item item-facebook">
        <a href="https://www.facebook.com/Sistema-Control-110758394880847">
          <i class="fab fa-facebook-square"></i>
        </a>
      </li>
      <li class="menu-item item-twiter">
        <a href="https://twitter.com/coronavid19?lang=es">
          <i class="fab fa-twitter-square"></i>
        </a>
      </li>
      <li class="menu-item item-cel">
        <a href="tel:+522213425514">
          <i class="fas fa-phone-square"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style>
#redes-sociales {
  width: auto;
  height: auto;
  position: fixed;
  /* right: 20px; */
  left: 20px;
  top: 60%;
  margin: -75px 0 0 -75px;
  list-style: none;
  font-size: 200%;
  transform: rotate(90deg);
}

#redes-sociales:not(:target) > a:first-of-type,
#redes-sociales:target > a:last-of-type {
  opacity: 1;
  z-index: 1;
}

#redes-sociales:not(:target) > .fa-chevron-right:before,
#redes-sociales:target > .fa-chevron-left:before {
  opacity: 1;
}

.menu-button {
  opacity: 0;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 1020%;
  /* right:50%; */
  top: 50%;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  background: #ebe7e7;
  background-size: 100%;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
}

#redes-sociales .fa-chevron-left {
  color: #2a81ea;
  font-size: 22px;
  margin-left: 30px;

  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

#redes-sociales .fa-chevron-right {
  color: #2a81ea;
  font-size: 22px;
  margin-left: 30px;

  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.menu-item {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 1020%;
  /* right:55%; */
  line-height: 5px;
  margin: -50px 0 0 -55px;
  border-radius: 50%;
  background: #191919;
  z-index: -2;
  transition: all 0.3s ease-out;
}

.menu-item a {
  color: #fff;
  position: relative;
  display: block;
  transform: rotate(-90deg);
  margin: auto;
  font-size: 20px;
}

#redes-sociales:target > .menu-item:nth-child(6) {
  transform: rotate(60deg) translateY(-120px) rotate(300deg);
  transition-delay: 0s;
}

#redes-sociales:target > .menu-item:nth-child(5) {
  transform: rotate(20deg) translateY(-120px) rotate(-20deg);
  transition-delay: 0.1s;
}

#redes-sociales:target > .menu-item:nth-child(3) {
  transform: rotate(-20deg) translateY(-120px) rotate(20deg);
  transition-delay: 0.2s;
}

#redes-sociales:target > .menu-item:nth-child(4) {
  transform: rotate(-60deg) translateY(-120px) rotate(60deg);
  transition-delay: 0.3s;
}

.menu-item.item-facebook {
  background: #3b5998;
}

.menu-item.item-facebook:hover {
  box-shadow: 5px 0 20px #3b5998;
}

.menu-item.item-whatsapp {
  background: radial-gradient(
      circle at 100% 107%,
      #00BB2D 0%,
      #00BB2D 0%,
      #00BB2D 5%,
      #00BB2D 45%,
      #00BB2D 60%,
      #00BB2D 90%
    )
    #00BB2D;
}

.menu-item.item-whatsapp:hover {
  box-shadow: 5px 0 20px #00BB2D;
}

.menu-item.item-twiter {
  background: #55acee;
}

.menu-item.item-twiter:hover {
  box-shadow: 5px 0 20px #55acee;
}

.menu-item.item-cel {
  background: #4dc247;
}

.menu-item.item-cel:hover {
  box-shadow: 5px 0 20px #4dc247;
}
/* .whatsapp {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  text-align: center;
  z-index: 100;
} */
/* @media (min-width:200px){
*::before,
*::after {
    content: '';
  position: absolute;
}

.error {
	width: 100%;
	height: auto;
	margin: 50px auto;
	text-align: center;
	margin-bottom: 0;
}

.dracula{
	width: 230px;
	height: 300px;
	display: inline-block;
	margin: auto;
}

.error .p {
	height: 100%;
	color: #C0D7DD; 
	font-size: 280px;
	margin: 50px;
	display: inline-block;
	font-family: 'Anton', sans-serif;
	font-family: 'Combo', cursive;
}


.con {
  width: 500px;
  height: 500px;
  position: relative;
  margin: 9% auto 0;
animation: ani9 0.7s ease-in-out infinite  alternate ;}

@keyframes ani9 {
    0%{
    transform: translateY(10px);	
  }
  
  100%{
    transform: translateY(30px);	
  }

}

.con > * {
  position: absolute;
  top: 0; left: 0;
}

.hair{
  top: -20px;
  width: 210px;
  height: 200px;
  background: #C0D7DD;
  border-radius: 0 50% 0 50%;
  transform: rotate(45deg);
  background: #33265C;
}
.hair-r{
  left: 20px;
  width: 210px;
  height: 200px;
  background: #C0D7DD;
  border-radius: 0 50% 0 50%;
  transform: rotate(45deg);
  background: #33265C;

}
.head {
  width: 200px;
  height: 200px;
  background: #C0D7DD;
  border-radius: 0 50% 0 50%;
  transform: rotate(45deg);
}
.eye {
 width: 20px; height:20px;
  background: #111113;
  border-radius: 50%;
  top: 15%; left: 11.5%;
  transition: .3s linear;
}
.eye-r{left: 24%;}

.mouth {
  width: 60px; 
  height: 20px;
  background: #e7343d;
  top: 20%;
  left: 14%;
  border-radius: 50% / 0 0 100% 100%;
}
.mouth::after{

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 13px solid #FFFFFF;
  left: 10px;
  
}
.mouth::before{
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 13px solid #FFFFFF;
  left: 40px;
}

.blod {
  width: 8px;
  height: 20px;
  background: #840021;
  top: 23%; left: 17%; 
  border-radius: 20px;
}
.blod::after{
   width: 2px;
  height: 10px;
  background: #FFF;
  top: 20%; left: 10%; 
  border-radius: 20px;
  
}
.blod2 {
  top: 23%; left: 20%;
  width: 13px;
  height: 13px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(130deg);
  animation: blod 2s linear infinite;
  opacity: 0;
}
@keyframes blod {
  0%   {opacity: 1;}  
  100%   {background:red; opacity: 0; top:50%;}
  
  
}


.page-ms {transform: translateY(-50px);}

.error p.page-msg {
	text-align: center;
	color: #C0D7DD; 
	font-size: 30px;
	font-family: 'Combo', cursive;
	margin-bottom: 20px;
}
button.go-back {
		font-size: 30px;
    font-family: 'Combo', cursive;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.3s linear;
    z-index: 9;
    border-radius: 10px;
    background: #C0D7DD;
    color: #33265C;
    box-shadow: 0 0 10px 0 #C0D7DD;
	margin-top: 20px;
}
button:hover {box-shadow: 0 0 20px 0 #C0D7DD;}
} */
</style>