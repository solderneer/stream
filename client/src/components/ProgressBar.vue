<template>
  <div class="progressbar">
    <progress :max="max" :value="value"></progress>
    <div class="scrubber"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    max: String,
    value: String,
  },
  mounted: function () {

  },
};
</script>

<style scoped>
.progressbar {
  margin-bottom: -18px;
}
progress[value] {
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  height: 3px;

  transition: height 0.5s;
}

progress[value]:hover {
  height: 5px;
  transition: height 0.1s;
}

progress[value]::-webkit-progress-bar {
  background-color: rgba(255, 255, 255, 0.2);
}

progress[value]::-webkit-progress-value {
  background-image: linear-gradient(120deg, rgba(132, 250, 175, 1) 0%, rgba(143, 210, 244, 1) 100%);
}

.scrubber {
  position: relative;
  height: 15px;
  width: 15px;
  border-radius: 7px;
  background-color: rgba(143, 210, 244, 1);

  bottom: 12px;
  left: 80%;
}
</style>

