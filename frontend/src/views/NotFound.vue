<template>
  <v-row class="d-flex justify-center align-center">
    <v-col sm="8">
      <div class="text-container">
        <h2 class="text-pattern">Error 404</h2>
      </div>
    </v-col>
    <v-col sm="8">
      <div class="container">
        <ul class="cerros">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="rueda">
          <div class="base"></div>
          <div class="circulo3">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
            <div class="c4"></div>
            <div class="c5"></div>
            <div class="c6"></div>
            <div class="c7"></div>
            <div class="c8"></div>
          </div>
          <div class="circ"></div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fredoka+One");

@media (min-width: 766px) {
  .text-container {
    padding: none;
    text-align: center;
  }

  .text-container h2 {
    font-size: 4.7rem;
    text-transform: uppercase;
  }

  .text-container .text-pattern {
    color: transparent;
    background-color: #09bd12;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 25px,
      rgba(255, 255, 255, 0.5) 25px,
      rgba(255, 255, 255, 0.5) 50px
    );
    -webkit-background-clip: text;
    background-clip: text;
    animation: color 50s linear infinite;
    background-size: 200%;
  }

  .container {
    position: relative;
    width: 703px;
    height: 703px;
    border-radius: 100%;
    background: rgb(62, 105, 160);
    background: -moz-linear-gradient(
      top,
      rgba(62, 105, 160, 1) 0%,
      rgba(214, 152, 181, 1) 60%,
      rgba(148, 115, 214, 1) 60%,
      rgba(214, 152, 181, 1) 60%,
      rgba(156, 112, 204, 1) 60%,
      rgba(181, 159, 204, 1) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(62, 105, 160, 1) 0%,
      rgba(214, 152, 181, 1) 60%,
      rgba(148, 115, 214, 1) 60%,
      rgba(214, 152, 181, 1) 60%,
      rgba(156, 112, 204, 1) 60%,
      rgba(181, 159, 204, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(62, 105, 160, 1) 0%,
      rgba(214, 152, 181, 1) 60%,
      rgba(148, 115, 214, 1) 60%,
      rgba(214, 152, 181, 1) 60%,
      rgba(156, 112, 204, 1) 60%,
      rgba(181, 159, 204, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e69a0', endColorstr='#b59fcc',GradientType=0 );
    /* margin: 102px auto; */
  }
  ul {
    display: block;
    list-style: none;
  }
  ul.cerros li {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 162px solid #3c3460;
    margin-top: 260px;
    margin-left: -34px;
  }
  .rueda {
    position: absolute;
    margin: -450px -40px;
  }
  .base {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 90px solid transparent;
    border-right: 90px solid transparent;
    border-bottom: 300px solid #606c88;
    margin: 271px 300px;
  }
  .base::before {
    content: "";
    position: absolute;
    width: 182px;
    height: 21px;
    background: #121128;
    margin: 300px -90px;
  }

  .circ {
    position: absolute;
    width: 212px;
    height: 212px;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.5);
    border: 5px solid #b5bdc8;
    margin: 167px 281px;
  }
  .circ::before {
    content: "";
    position: absolute;
    width: 172px;
    height: 172px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.3);
    border: 5px solid #b5bdc8;
    margin: 16px 16px;
  }
  .circ::after {
    content: "";
    position: absolute;
    width: 132px;
    height: 132px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.5);
    border: 3px solid #b5bdc8;
    margin: 39px 39px;
  }

  .c1,
  .c2,
  .c3,
  .c4,
  .c5,
  .c6,
  .c7,
  .c8 {
    position: absolute;
    width: 60px;
    height: 50px;
    border-radius: 30px;
    margin: 152px 132px;
  }

  .c1 {
    background: #00b7ea;
    animation: rot 30s linear infinite;
  }
  .c2 {
    background: #f774b5;
    animation: rot3 30s linear infinite;
  }
  .c3 {
    background: #39bf7c;
    animation: rot5 30s linear infinite;
  }
  .c4 {
    background: #e07a3e;
    animation: rot6 30s linear infinite;
  }
  .c5 {
    background: #5804ea;
    animation: rot7 30s linear infinite;
  }
  .c6 {
    background: #ff9395;
    animation: rot9 30s linear infinite;
  }
  .c7 {
    background: #6bcbff;
    animation: rot12 30s linear infinite;
  }
  .c8 {
    background: #ffd400;
    animation: rot21 30s linear infinite;
  }
  .c1::before,
  .c2::before,
  .c3::before,
  .c4::before,
  .c5::before,
  .c6::before,
  .c7::before,
  .c8::before {
    content: "";
    display: block;
    width: 21px;
    height: 21px;
    border-radius: 100%;
    margin: -9px 19px;
  }
  .c1::before {
    background: #00b7ea;
  }
  .c2::before {
    background: #f774b5;
  }

  .c3::before {
    background: #39bf7c;
  }
  .c4::before {
    background: #e07a3e;
  }
  .c5::before {
    background: #5804ea;
  }
  .c6::before {
    background: #ff9395;
  }
  .c7::before {
    background: #6bcbff;
  }
  .c8::before {
    background: #ffd400;
  }
  .c1::after,
  .c2::after,
  .c3::after,
  .c4::after,
  .c5::after,
  .c6::after,
  .c7::after,
  .c8::after {
    content: "";
    display: block;
    width: 43px;
    height: 25px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.5);
    margin: 7px 9px;
  }
  .circulo3 {
    position: absolute;
    width: 330px;
    height: 330px;
    border-radius: 100%;
    border: 5px solid #b5bdc8;
    background: rgba(255, 255, 255, 0.3);
    margin: 105px 221px;
  }
}
@media (min-width: 350px) {
}

@keyframes color {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}

@keyframes rotar {
  0% {
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rot {
  0% {
    transform: rotate(0deg) translatey(-21px) translatex(-152px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(-21px) translatex(-152px)
      rotate(-360deg);
  }
}
@keyframes rot3 {
  0% {
    transform: rotate(0deg) translatey(-132px) translatex(-90px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(-132px) translatex(-90px)
      rotate(-360deg);
  }
}
@keyframes rot6 {
  0% {
    transform: rotate(0deg) translatey(162px) translatex(-21px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(162px) translatex(-21px)
      rotate(-360deg);
  }
}
@keyframes rot5 {
  0% {
    transform: rotate(0deg) translatey(102px) translatex(-121px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(102px) translatex(-121px)
      rotate(-360deg);
  }
}
@keyframes rot7 {
  0% {
    transform: rotate(0deg) translatey(132px) translatex(102px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(132px) translatex(102px)
      rotate(-360deg);
  }
}
@keyframes rot9 {
  0% {
    transform: rotate(0deg) translatey(30px) translatex(162px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(30px) translatex(162px) rotate(-360deg);
  }
}
@keyframes rot12 {
  0% {
    transform: rotate(0deg) translatey(-90px) translatex(142px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(-90px) translatex(142px)
      rotate(-360deg);
  }
}
@keyframes rot21 {
  0% {
    transform: rotate(0deg) translatey(-152px) translatex(40px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(-152px) translatex(40px)
      rotate(-360deg);
  }
}

@media (min-width: 400px) {
  .text-container {
    padding: none;
    text-align: center;
  }

  .text-container h2 {
    font-size: 4.7rem;
    text-transform: uppercase;
  }

  .text-container .text-pattern {
    color: transparent;
    background-color: #09bd12;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 25px,
      rgba(255, 255, 255, 0.5) 25px,
      rgba(255, 255, 255, 0.5) 50px
    );
    -webkit-background-clip: text;
    background-clip: text;
    animation: color 50s linear infinite;
    background-size: 200%;
  }

  .container {
    position: relative;
    width: 703px;
    height: 703px;
    border-radius: 100%;
    background: rgb(62, 105, 160);
    background: -moz-linear-gradient(
      top,
      rgba(62, 105, 160, 1) 0%,
      rgba(214, 152, 181, 1) 60%,
      rgba(148, 115, 214, 1) 60%,
      rgba(214, 152, 181, 1) 60%,
      rgba(156, 112, 204, 1) 60%,
      rgba(181, 159, 204, 1) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(62, 105, 160, 1) 0%,
      rgba(214, 152, 181, 1) 60%,
      rgba(148, 115, 214, 1) 60%,
      rgba(214, 152, 181, 1) 60%,
      rgba(156, 112, 204, 1) 60%,
      rgba(181, 159, 204, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(62, 105, 160, 1) 0%,
      rgba(214, 152, 181, 1) 60%,
      rgba(148, 115, 214, 1) 60%,
      rgba(214, 152, 181, 1) 60%,
      rgba(156, 112, 204, 1) 60%,
      rgba(181, 159, 204, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e69a0', endColorstr='#b59fcc',GradientType=0 );
    /* margin: 102px auto; */
  }
  ul {
    display: block;
    list-style: none;
  }
  ul.cerros li {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 162px solid #3c3460;
    margin-top: 260px;
    margin-left: -34px;
  }
  .rueda {
    position: absolute;
    margin: -450px -40px;
  }
  .base {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 90px solid transparent;
    border-right: 90px solid transparent;
    border-bottom: 300px solid #606c88;
    margin: 271px 300px;
  }
  .base::before {
    content: "";
    position: absolute;
    width: 182px;
    height: 21px;
    background: #121128;
    margin: 300px -90px;
  }

  .circ {
    position: absolute;
    width: 212px;
    height: 212px;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.5);
    border: 5px solid #b5bdc8;
    margin: 167px 281px;
  }
  .circ::before {
    content: "";
    position: absolute;
    width: 172px;
    height: 172px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.3);
    border: 5px solid #b5bdc8;
    margin: 16px 16px;
  }
  .circ::after {
    content: "";
    position: absolute;
    width: 132px;
    height: 132px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.5);
    border: 3px solid #b5bdc8;
    margin: 39px 39px;
  }

  .c1,
  .c2,
  .c3,
  .c4,
  .c5,
  .c6,
  .c7,
  .c8 {
    position: absolute;
    width: 60px;
    height: 50px;
    border-radius: 30px;
    margin: 152px 132px;
  }

  .c1 {
    background: #00b7ea;
    animation: rot 30s linear infinite;
  }
  .c2 {
    background: #f774b5;
    animation: rot3 30s linear infinite;
  }
  .c3 {
    background: #39bf7c;
    animation: rot5 30s linear infinite;
  }
  .c4 {
    background: #e07a3e;
    animation: rot6 30s linear infinite;
  }
  .c5 {
    background: #5804ea;
    animation: rot7 30s linear infinite;
  }
  .c6 {
    background: #ff9395;
    animation: rot9 30s linear infinite;
  }
  .c7 {
    background: #6bcbff;
    animation: rot12 30s linear infinite;
  }
  .c8 {
    background: #ffd400;
    animation: rot21 30s linear infinite;
  }
  .c1::before,
  .c2::before,
  .c3::before,
  .c4::before,
  .c5::before,
  .c6::before,
  .c7::before,
  .c8::before {
    content: "";
    display: block;
    width: 21px;
    height: 21px;
    border-radius: 100%;
    margin: -9px 19px;
  }
  .c1::before {
    background: #00b7ea;
  }
  .c2::before {
    background: #f774b5;
  }

  .c3::before {
    background: #39bf7c;
  }
  .c4::before {
    background: #e07a3e;
  }
  .c5::before {
    background: #5804ea;
  }
  .c6::before {
    background: #ff9395;
  }
  .c7::before {
    background: #6bcbff;
  }
  .c8::before {
    background: #ffd400;
  }
  .c1::after,
  .c2::after,
  .c3::after,
  .c4::after,
  .c5::after,
  .c6::after,
  .c7::after,
  .c8::after {
    content: "";
    display: block;
    width: 43px;
    height: 25px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.5);
    margin: 7px 9px;
  }
  .circulo3 {
    position: absolute;
    width: 330px;
    height: 330px;
    border-radius: 100%;
    border: 5px solid #b5bdc8;
    background: rgba(255, 255, 255, 0.3);
    margin: 105px 221px;
  }
}
@media (min-width: 350px) {
}

@keyframes color {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}

@keyframes rotar {
  0% {
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rot {
  0% {
    transform: rotate(0deg) translatey(-21px) translatex(-152px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(-21px) translatex(-152px)
      rotate(-360deg);
  }
}
@keyframes rot3 {
  0% {
    transform: rotate(0deg) translatey(-132px) translatex(-90px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(-132px) translatex(-90px)
      rotate(-360deg);
  }
}
@keyframes rot6 {
  0% {
    transform: rotate(0deg) translatey(162px) translatex(-21px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(162px) translatex(-21px)
      rotate(-360deg);
  }
}
@keyframes rot5 {
  0% {
    transform: rotate(0deg) translatey(102px) translatex(-121px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(102px) translatex(-121px)
      rotate(-360deg);
  }
}
@keyframes rot7 {
  0% {
    transform: rotate(0deg) translatey(132px) translatex(102px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(132px) translatex(102px)
      rotate(-360deg);
  }
}
@keyframes rot9 {
  0% {
    transform: rotate(0deg) translatey(30px) translatex(162px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(30px) translatex(162px) rotate(-360deg);
  }
}
@keyframes rot12 {
  0% {
    transform: rotate(0deg) translatey(-90px) translatex(142px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(-90px) translatex(142px)
      rotate(-360deg);
  }
}
@keyframes rot21 {
  0% {
    transform: rotate(0deg) translatey(-152px) translatex(40px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translatey(-152px) translatex(40px)
      rotate(-360deg);
  }
}


</style>