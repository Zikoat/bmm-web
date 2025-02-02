import {
  PlaylistApi,
  PlaylistModel,
  TrackModel,
} from "@bcc-code/bmm-sdk-fetch";

interface UsePlaylistOptions {
  id: number;
}

/**
 * Get playlist with the specified id
 */
export function usePlaylist(options: UsePlaylistOptions) {
  const { id } = options;

  return useAsyncData<PlaylistModel>(`playlist-${id}`, () =>
    new PlaylistApi().playlistIdGet({ id })
  );
}

interface UsePlaylistTracksOptions {
  id: number;
}

/**
 * Get playlist tracks
 */
export function usePlaylistTracks(options: UsePlaylistTracksOptions) {
  const { id } = options;

  return useAsyncData<TrackModel[]>(`playlist-tracks-${id}`, () =>
    new PlaylistApi().playlistIdTrackGet({ id })
  );
}

/**
 * Get all curated playlists
 */
export function usePlaylists() {
  return useAsyncData<PlaylistModel[]>("playlists", () =>
    new PlaylistApi().playlistGet()
  );
}
