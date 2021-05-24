<template>
  <div>
    <div class="text-box">
      <h3>Введите название фильма:</h3>
      <input type="text" v-model="title" />
    </div>

    <div class="text-box">
      <router-link to="/" class="btn butn-white btn- animate" @click="add()"
        >Добавить</router-link
      >
      <router-link to="/" class="btn butn-white btn- animate"
        >Отмена</router-link
      >
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      title: null,
    };
  },
  methods: {
    add() {
      if (this.title) this.$store.dispatch("ADD_ITEM", this.title);
    },
  },
};
</script>

<style scoped>
h3 {
  margin-right: 10px;
}
input {
  border-radius: 5px;
  font-size: 20px;
}
.text-box {
  position: relative;
  display: flex;
  justify-content: center;
}
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.butn-white {
  background-color: #ff6600;
  color: white;
  margin: 10px;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.butn-white::after {
  background-color: #ff6600;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-animated {
  animation: moveInBottom 1s ease-out;
  animation-fill-mode: backwards;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>