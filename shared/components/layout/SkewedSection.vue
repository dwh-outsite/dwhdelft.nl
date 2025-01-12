<template>
  <section>
    <div class="origin-bottom-left -skew-y-7">
      <div class="absolute top-0 size-full">
        <slot name="background" />
      </div>
      <div class="origin-bottom-left skew-y-7">
        <div class="relative z-10">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
