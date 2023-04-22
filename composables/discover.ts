import { DiscoverApi, IDocumentModel } from "@bcc-code/bmm-sdk-fetch";

export function useDiscover() {
  return useAsyncData<IDocumentModel[]>("discover", () =>
    new DiscoverApi().discoverGet()
  );
}
