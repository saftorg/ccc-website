<script setup lang="ts">
import { micromark } from "micromark";
import faqs from "../../utils/faq.json";
import logos from "../../utils/logo-metrics.json";

const { "ccc-logo-full.svg": ccc, ...logoArr } = logos;

const selectedQuestion = ref<number>(0);
</script>

<template>
  <div class="md:hidden min-h-screen flex flex-col">
    <!-- Nav -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b flex justify-between px-4 gap-4 items-center h-[60px]"
    >
      <img
        class="brightness-0 invert h-8"
        :src="ccc.path"
        alt="Confident Christian Conversations"
      />
      <div class="flex gap-2 items-center">
        <a
          class="rounded-full text-sm border border-white px-3 py-2 text-white whitespace-nowrap no-underline"
          href="https://us02web.zoom.us/meeting/register/nnhB0JoPS1ipkD7OLlojEQ"
          target="_blank"
        >
          Briefing
        </a>
        <a
          class="rounded-full text-sm bg-white px-4 py-2 text-black whitespace-nowrap no-underline"
          href="https://tally.so/r/eqBXaJ"
        >
          Apply Now
        </a>
      </div>
    </nav>

    <!-- Scrollable content -->
    <main class="flex-1 overflow-y-auto pt-[60px]">
      <!-- Description -->
      <article class="p-4 border-b">
        <h2 class="text-xl font-semibold pb-3">
          What is Confident Christian Conversations?
        </h2>
        <p class="text-sm leading-relaxed text-gray-200">
          Confident Christian Conversations is a synergised, official
          partnership between 3 ministries that share the passion for
          apologetics in India. Through a first-of-its-kind free, accessible,
          community driven and rigorous 6 month training programme in
          partnership with Reasonable Faith and Ratio Christi, CCC is taking on
          the challenge to build up a new line of Indian Christian defenders who
          will be empowered and connected with global ministries to have
          confident conversations about Christianity in India's campuses,
          workspaces, churches and communities.
        </p>
      </article>

      <!-- FAQs -->
      <section class="border-b">
        <h2 class="text-2xl px-4 py-3">FAQs</h2>
        <div>
          <div v-for="(faq, idx) in faqs" :key="faq.question">
            <button
              :class="[
                'border-t w-full text-left px-4 py-3 text-sm font-medium',
                selectedQuestion === idx ? 'bg-white text-black' : 'text-white',
              ]"
              @click="selectedQuestion = selectedQuestion === idx ? -1 : idx"
            >
              {{ faq.question }}
            </button>
            <div
              v-if="selectedQuestion === idx"
              class="px-4 py-3 text-sm text-gray-200 bg-black/20"
              v-html="micromark(faq.answer)"
            />
          </div>
        </div>
      </section>

      <!-- Tagline -->
      <div class="p-6 border-b flex items-center justify-center">
        <h1 class="font-joyride text-white text-4xl uppercase text-center">
          <span class="stretch-125">T</span>
          <span class="stretch-115">h</span>i<span class="stretch-125">n</span>
          <span class="stretch-125">k</span>.<br />
          Believe.<br />
          Defen<span class="stretch-115">d</span>.
        </h1>
      </div>

      <!-- Footer -->
      <footer class="p-6 pb-10">
        <p class="text-center text-sm mb-8">
          Confident Christian Conversations
        </p>
        <div class="flex flex-col items-center gap-8">
          <a
            v-for="logo in logoArr"
            :key="logo.path"
            :href="logo.link"
            class="block"
          >
            <img
              class="brightness-0 invert w-40 h-auto object-contain"
              :src="logo.path"
              :alt="logo.link"
            />
          </a>
        </div>
      </footer>
    </main>
  </div>
</template>
