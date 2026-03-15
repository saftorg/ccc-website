<script setup lang="ts">
import { micromark } from "micromark";
import faqs from "../../utils/faq.json";
import logos from "../../utils/logo-metrics.json";

const { "ccc-logo-full.svg": ccc, ...logoArr } = logos;

const selectedQuestion = ref<number>(0);

const faqDiv = useTemplateRef("faq-div");
const { arrivedState } = useScroll(faqDiv);
</script>

<template>
  <div class="hidden md:flex h-screen flex-col overflow-hidden">
    <nav
      class="border-b flex justify-between px-8 gap-10 items-center h-[100px] shrink-0"
    >
      <img
        class="brightness-0 invert"
        :src="ccc.path"
        :width="ccc.width"
        :height="ccc.height"
        :style="{
          transform: `translateY(${ccc.offsetY}px)`,
        }"
        alt="Confident Christian Conversations"
      />

      <a
        class="rounded-full text-xl bg-white px-7 py-3 text-black no-underline"
        href="https://tally.so/r/eqBXaJ"
      >
        Apply Now
      </a>
    </nav>

    <main class="flex-1 min-h-0 grid grid-cols-[1.2fr,2fr] grid-rows-[2fr,3fr]">
      <div class="border-b border-r grid col-start-1 row-start-1 p-4">
        <h1
          class="font-joyride text-white tagline-text uppercase place-self-center"
        >
          <span class="stretch-125">T</span>
          <span class="stretch-115">h</span>i<span class="stretch-125">n</span>
          <span class="stretch-125">k</span>.<br />
          Believe.<br />
          Defen<span class="stretch-115">d</span>.
        </h1>
      </div>

      <article
        class="col-start-1 row-start-2 border-r p-4 lg:p-6 overflow-y-auto min-h-0 flex flex-col"
      >
        <h2 class="text-3xl font-semibold pb-4 shrink-0">
          What is Confident Christian Conversations?
        </h2>
        <p class="text-md leading-relaxed">
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

      <article
        class="col-start-2 col-end-3 row-start-1 row-end-3 flex flex-col min-h-0"
      >
        <h2
          class="text-3xl lg:text-5xl border-b px-4 lg:px-8 py-3 lg:py-4 text-right shrink-0"
        >
          FAQs
        </h2>

        <section class="grid grid-cols-2 flex-1 min-h-0">
          <div
            ref="faq-div"
            class="faq-questions overflow-y-auto overflow-x-hidden"
            :data-fade-top="!arrivedState.top"
            :data-fade-bottom="!arrivedState.bottom"
          >
            <button
              v-for="(faq, idx) in faqs"
              :key="faq.question"
              :data-selected="selectedQuestion === idx"
              class="border-b w-full text-left px-3 lg:px-5 py-2 lg:py-3 text-white text-sm lg:text-xl data-[selected=true]:bg-white data-[selected=true]:text-black"
              @click="selectedQuestion = idx"
            >
              {{ faq.question }}
            </button>
          </div>
          <div
            class="border-l p-3 lg:p-5 text-sm lg:text-lg overflow-y-auto"
            v-html="micromark(faqs[selectedQuestion]?.answer ?? '')"
          />
        </section>
      </article>
    </main>

    <footer
      class="border-t px-4 lg:px-8 py-3 lg:py-5 flex justify-between items-center h-[60px] lg:h-[80px] shrink-0"
    >
      <span class="footer-title whitespace-nowrap">
        Confident Christian Conversations
      </span>

      <div class="flex gap-10">
        <a
          v-for="logo in logoArr"
          :key="logo.path"
          :href="logo.link"
          class="contents"
        >
          <img
            class="brightness-0 invert"
            :src="logo.path"
            :width="logo.width"
            :height="logo.height"
            :style="{
              transform: `translate(${logo.offsetX}px, ${logo.offsetY}px)`,
            }"
          />
        </a>
      </div>
    </footer>
  </div>
</template>
