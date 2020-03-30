<template>
  <div class="home">
    <personal-info :msg="this.resume.skills[0]" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  mounted() {
    this.getResume();
  },
  computed: { ...mapState(["resume"]) },
  methods: { ...mapActions(["getResume"]) }
};
</script>
