<template>
  <div class="progressbar">
    <progress id="progress" :max="max" :value="value"></progress>
    <div id="scrubber" v-bind:style="{left: (value-0.5) + '%'}"></div>
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
    let container = document.querySelector('.progressbar')
    let progressbar = document.querySelector('#progress')
    let scrubber = document.querySelector('#scrubber')

    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    let dragactive = false

    container.addEventListener('mouseover', function() {
      scrubber.style.display = 'block'
      container.style.margin = '0px 0px -18px 0px';
    })

    container.addEventListener('mouseout', function() {
      scrubber.style.display = 'none'
      container.style.margin = '0px 0px -2px 0px';
    })

    scrubber.addEventListener('mousedown', function() {
      dragactive = true
    })

    scrubber.addEventListener('mouseup', function() {
      dragactive = false
    })

    container.addEventListener('mousemove', function() {
      if (dragactive) {
        let position = event.clientX/width
        this.$emit('drag', position)
      }
    }.bind(this))
  },
};
</script>

<style scoped>
.progressbar {
  margin-bottom: -2px;
}
progress[value] {
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  height: 3px;
}

.progressbar:hover progress[value] {
  height: 5px;
}

progress[value]::-webkit-progress-bar {
  background-color: rgba(255, 255, 255, 0.2);
}

progress[value]::-webkit-progress-value {
  background-image: linear-gradient(120deg, rgba(132, 250, 175, 1) 0%, rgba(143, 210, 244, 1) 100%);
}

#scrubber {
  display: none;
  position: relative;
  height: 15px;
  width: 15px;
  border-radius: 7px;
  background-color: rgba(143, 210, 244, 1);

  bottom: 12px;
}
</style>

