<template>
  <the-navigation position="fixed"></the-navigation>
  <div class="wave-container wave-animation">
    <div class="text-container">
      <div class="zp">
        <div>
          <div class="zp--text">
            <transition name="zp--text__first-animated">
              <span v-if="zpFlag" class="zp--text__first-animated"
              > some other thing </span
              >
            </transition>
            <transition
                name="zp--text__second-animated"
                @after-enter="changeSloganFlag"
            >
              <span v-if="zpFlag" class="zp--text__second-animated"
              > something </span
              >
            </transition>
          </div>
        </div>
        <div class="slogan">
          <transition
              name="slogan--text__animated"
              @after-enter="removeBorderLeft"
          >
            <div
                v-if="sloganFlag"
                class="slogan--text slogan--text__animated"
                :class="{ 'border-left': borderFlag }"
            >
            this is an animation...
            </div>
          </transition>
        </div>
      </div>
      <div class="buttons-section">
        <routerLink
            class="buttons-section--button buttons-section--button__login"
            to="/login"
        >
          ورود
        </routerLink>
        <routerLink
            class="buttons-section--button buttons-section--button__signup"
            to="/signup"
        >
          ثبت نام
        </routerLink>
      </div>
    </div>
    <div class="wave-container--inner background__top">
      <div class="wave wave__top"></div>
    </div>
    <div class="wave-container--inner background__middle">
      <div class="wave wave__middle"></div>
    </div>
    <div class="wave-container--inner background__bottom">
      <div class="wave wave__bottom"></div>
    </div>
  </div>
</template>

<script>
import TheNavigation from "../Layouts/TheNavigation";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      sloganFlag: false,
      zpFlag: false,
      borderFlag: true,
    };
  },
  methods: {
    changeSloganFlag() {
      this.sloganFlag = true;
    },
    removeBorderLeft() {
      this.borderFlag = false;
    },
  },
  mounted() {
    this.zpFlag = true;
  },
};
</script>

<style scoped>
.wave-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wave-container--inner {
  direction: ltr;
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
  height: 100%;
  background-image: linear-gradient(to top right, #470153 20%, #b533e2 80%);
}
.background__top {
  z-index: 15;
  opacity: 0.5;
}
.background__middle {
  z-index: 10;
  opacity: 0.75;
}
.background__bottom {
  z-index: 5;
}
.wave {
  position: absolute;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.wave__top {
  background-image: url(/img/wave-bot.png);
  background-size: 50% 10rem;
}
.wave-animation .wave__top {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.wave__middle {
  background-image: url(/img/wave-mid.png);
  background-size: 50% 12rem;
}
.wave-animation .wave__middle {
  animation: move_wave 15s linear infinite;
}
.wave__bottom {
  background-image: url(/img/wave-bot.png);
  background-size: 50% 10rem;
}
.wave-animation .wave__bottom {
  animation: move_wave 20s linear infinite;
}
.text-container {
  height: 50%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-10rem);
}
.zp--text {
  font-size: 11.2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 52.8rem;
}
.buttons-section--button {
  padding: 1.28rem 4rem;
  font-size: 2rem;
  border: none;
  border-radius: 10rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.26);
  width: 22.4rem;
  text-decoration: none;
  text-align: center;
}
.buttons-section--button__login {
  color: black;
  background: rgb(224, 202, 2);
}
.buttons-section--button__login:hover {
  background: rgb(235, 171, 129);
}
.buttons-section--button__signup {
  background: transparent;
  border: 0.2rem white solid;
  color: white;
}
.buttons-section--button__signup:hover {
  border-color: black;
  background: #ccc;
  color: black;
}
.slogan{
  display: flex;
  justify-content: center;
  align-items: center;
}
.slogan--text {
  width: 27ch;
  display: none;
  white-space: nowrap;
  overflow: hidden;
  font-family: monospace;
  font-size: 3em;
  color: white;
}
.slogan--text__animated {
  display: block;
}
.slogan--text__animated-enter-active {
  animation: typing 2s steps(27), blink 0.1s step-end alternate;
}
.zp--text__first-animated {
  font-size: 2rem;
  color: yellow;
}

.zp--text__second-animated {
  font-size: 2rem;
  color: rgb(24, 236, 236);
}

.zp--text__first-animated-enter-active {
  animation: text-first 1s ease-out;
}
.zp--text__second-animated {
  color: #ccc;
}
.zp--text__second-animated-enter-active {
  animation: text-second 1s ease-out;
 
}
.border-left {
  border-left: 0.3rem solid;
}
@keyframes typing {
  0% {
    width: 0;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
@keyframes text-first {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes text-second {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
