<template>
  <div class="tyh-image">
    <div class="tyh-image-error" v-if="isError">
      <slot name="error">
        <span class="tyh-image-error-text">加载失败</span>
      </slot>
    </div>
    <img
      v-else
      :draggable="draggable"
      :class="[`tyh-image-${fit}`, { 'tyh-image-select': select }]"
      :style="{ width, height }"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="emit('load')"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { imageProps } from './image.ts'
defineProps(imageProps)
const emit = defineEmits(['error', 'load'])

const isError = ref<boolean>(false)
const onError = (): void => {
  emit('error')
  isError.value = true
}
</script>
