<template>
  <section>
    <div class="-mb-48 -skew-y-7 overflow-hidden">
      <div class="-mt-48 skew-y-7">
        <div class="relative z-10 py-48">
          <div class="py-20 md:py-40">
            <slot />
          </div>
        </div>
        <div class="absolute top-0 size-full">
          <slot name="background" />
        </div>
      </div>
    </div>
  </section>
</template>
