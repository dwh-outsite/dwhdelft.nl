<template>
  <button class="button-pink" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>
