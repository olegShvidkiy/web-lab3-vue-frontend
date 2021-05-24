<template>
  <div>
    <ul class="poll-list" v-for="item in itemList" v-bind:key="item.id">
      <li>
        <div class="poll-item" @click="vote(item.id)">{{ item.title }}</div>
        <div class="poll-votepart">
          <div
            class="poll-votepart-part"
            :style="{
              width: `${item.percent}%`,
            }"
          >
            {{ item.chooseNumberVotes }}({{ item.percent }}%)
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    itemList: Array,
  },
  methods: {
    vote(id) {
      this.$store.dispatch("VOTE", id);
    },
  },
};
</script>

