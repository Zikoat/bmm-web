<template>
  <header
    class="py-4 px-6 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0"
  >
    <strong v-if="toolbarTitleStore().toolbarTitle">
      {{ toolbarTitleStore().toolbarTitle }}
    </strong>
  </header>
</template>
