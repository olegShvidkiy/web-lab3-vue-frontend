<template>
  <div>
    <h3>Список вариантов:</h3>
    <ul class="text-box" v-for="(item, i) in itemList" v-bind:key="item.id">
      <li
        v-on:click="item.chosed = !item.chosed"
        v-bind:class="{ chosed: item.chosed }"
      >
        {{ i + 1 }}.{{ item.title }}
      </li>
    </ul>

    <div class="text-box">
      <router-link to="/" @click="del()" class="btn butn-white btn-animate"
        >Удалить</router-link
      >
      <router-link to="/" class="btn butn-white btn-animate"
        >Отмена</router-link
      >
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      itemList: this.$store.state.ItemModelList.items,
    };
  },
  methods: {
    del() {
      this.$store.dispatch("DELETE_ITEM");
    },
  },
};
</script>

<style scoped>
li:hover {
  font-weight: 900;
  font-size: 25px;
  transition: 0.5s;
}
li {
  font-size: 20px;
  list-style-type: none;
  cursor: pointer;
}

.chosed {
  list-style-type: disc;
  font-weight: 900;
  font-size: 25px;
}
h3 {
  text-align: center;
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