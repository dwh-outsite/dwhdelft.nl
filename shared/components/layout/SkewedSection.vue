<template>
  <section>
    <div class="-skew-y-7 origin-bottom-left">
      <div class="absolute top-0 w-full h-full">
        <slot name="background" />
      </div>
      <div class="skew-y-7 origin-bottom-left">
        <div class="relative z-10">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
