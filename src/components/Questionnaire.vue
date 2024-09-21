<template>
  <div class="questionnaire">
    <div v-for="(task, index) in tasks" :key="task.id" class="task">
      <div class="rating">
        <span>燒腦指數:</span>
        <StarRating :rating="task.brainStar" @rate="rate(index, 'brainStar')" />
      </div>
      <div class="rating">
        <span>驚嚇指數:</span>
        <StarRating :rating="task.scareStar" @rate="rate(index, 'scareStar')" />
      </div>
      <div class="rating">
        <span>推薦指數:</span>
        <StarRating :rating="task.recommendStar" @rate="rate(index, 'recommendStar')" />
      </div>
    </div>
    <button @click="$emit('close')">關閉</button>
  </div>
</template>

<script>
import StarRating from './StarRating.vue';

export default {
  name: 'Questionnaire',
  components: {
    StarRating
  },
  props: {
    tasks: Array
  },
  methods: {
    rate(index, type) {
      return (star) => {
        this.$emit('taskStar', index, type, star);
      };
    }
  }
};
</script>

<style scoped>
.task {
  margin-bottom: 20px;
}
.rating {
  display: flex;
  align-items: center;
}
.rating span {
  margin-right: 10px;
}
</style>
