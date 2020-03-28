<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="this.resume.skills[0]" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    this.getResume();
  },
  computed: { ...mapState(["resume"]) },
  methods: { ...mapActions(["getResume"]) }
};
</script>
