<template>
  <div class="text-white border-white font-manrope">
    <!-- Background video -->
    <div
      class="w-full h-[100svh] flex flex-col items-center justify-center brightness-50 -z-10 fixed inset-0 overflow-hidden"
    >
      <video
        class="size-full object-cover blur-xl scale-110"
        autoplay
        loop
        muted
      >
        <source src="/ccc-header.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- MOBILE LAYOUT (scrollable) -->
    <MobileLayout />

    <!-- DESKTOP LAYOUT (viewport-locked) -->
    <DesktopLayout />
  </div>
</template>

<style>
@import url("~/assets/joyride-vf.css");

a {
  text-decoration: underline;
}

.faq-questions {
  --fade-top: black;
  --fade-bottom: black;

  &[data-fade-top="true"] {
    --fade-top: transparent;
  }

  &[data-fade-bottom="true"] {
    --fade-bottom: transparent;
  }

  mask-image: linear-gradient(
    to bottom,
    var(--fade-top),
    black 40px,
    black calc(100% - 40px),
    var(--fade-bottom)
  );
}

.font-manrope {
  font-family: "Manrope", sans-serif;
}

.tagline-text {
  font-size: clamp(1.5rem, 3.5vw + 0.5rem, 3.5rem);
  line-height: 1.1;
}

.footer-title {
  font-size: clamp(0.75rem, 1.5vw + 0.25rem, 1.5rem);
}

.font-joyride {
  font-family: "Joyride VF", sans-serif;
  font-variation-settings: "wdth" 100;

  span {
    &.stretch-115 {
      animation: stretch-115 2s cubic-bezier(1, 0, 0, 1) forwards;
    }

    &.stretch-125 {
      animation: stretch-125 2s cubic-bezier(1, 0, 0, 1) forwards;
    }
  }
}

@keyframes stretch-125 {
  0% {
    font-variation-settings: "wdth" 100;
  }

  100% {
    font-variation-settings: "wdth" 125;
  }
}

@keyframes stretch-115 {
  0% {
    font-variation-settings: "wdth" 100;
  }
  100% {
    font-variation-settings: "wdth" 115;
  }
}
</style>
