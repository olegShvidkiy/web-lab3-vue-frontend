<template>
  <div>
    <FilmList
      v-if="$store.state.ItemModelList.items.length"
      :itemList="$store.state.ItemModelList.items"
    />

    <h2 v-else>Пока что пусто =(</h2>
    <div class="poll__buttons-wrapper">
      <router-link
        to="/add"
        class="btn butn-white btn-animated"
        @click="setPreventDefault($event)"
        >Добавить</router-link
      >

      <router-link
        class="btn butn-white btn-animated"
        @click="setPreventDefault($event)"
        to="/del"
        >Удалить</router-link
      >
    </div>
  </div>
</template>



<script>
import FilmList from "../components/filmList.vue";
export default {
  name: "Home",
  components: {
    FilmList,
  },
  date() {
    return {};
  },
  mounted() {},
  methods: {
    setPreventDefault(e) {
      e.preventDefault();
    },
    del(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.text-box {
}
.poll__buttons-wrapper {
  position: relative;
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
