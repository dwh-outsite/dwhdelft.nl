<template>
  <section>
    <div class="-skew-y-7 overflow-hidden -mb-48">
      <div class="skew-y-7 -mt-48">
        <div class="pb-48 pt-48 relative z-10">
          <div class="py-20 md:py-40">
            <slot />
          </div>
        </div>
        <div class="absolute top-0 w-full h-full">
          <slot name="background" />
        </div>
      </div>
    </div>
  </section>
</template>
