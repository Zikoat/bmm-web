<script lang="ts" setup>
import { MediaPlaylistInjectionKey } from "~/plugins/3.mediaPlayer";

const onError = (error: any) => {
  console.error(error);
};

const { currentTrack } = inject(MediaPlaylistInjectionKey)!;
</script>

<template>
  <div class="flex h-full overflow-y-hidden max-h-[100vh]">
    <SidebarElement />
    <main class="flex-grow overflow-y-auto relative">
      <AppToolbar />
      <NuxtErrorBoundary @error="onError">
        <slot />
        <template #error="{ error }">
          <ErrorMsg :error="error.value" />
        </template>
      </NuxtErrorBoundary>
    </main>
    <footer>
      <MediaPlayer v-if="currentTrack !== undefined" />
    </footer>
  </div>
</template>
