<template>
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
        ><v-icon color="white" x-large>fab fa-whatsapp</v-icon></v-btn
      >
    </li>
    <li class="menu-item item-facebook">
      <a target="_blank" href="https://www.facebook.com/Sistema-Control-110758394880847">
        <i class="fab fa-facebook-square"></i>
      </a>
    </li>
    <li class="menu-item item-twiter">
      <a target="_blank" href="https://twitter.com/coronavid19?lang=es">
        <i class="fab fa-twitter-square"></i>
      </a>
    </li>
    <li class="menu-item item-cel">
      <a href="tel:+522213425514">
        <i class="fas fa-phone-square"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
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
      #00bb2d 0%,
      #00bb2d 0%,
      #00bb2d 5%,
      #00bb2d 45%,
      #00bb2d 60%,
      #00bb2d 90%
    )
    #00bb2d;
}

.menu-item.item-whatsapp:hover {
  box-shadow: 5px 0 20px #00bb2d;
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
</style>