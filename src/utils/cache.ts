export const CACHE_NAME = 'freelance-flow-v1';

export async function cacheAssets(assets: string[]) {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(assets);
}

export async function getCachedAsset(request: Request) {
    const cache = await caches.open(CACHE_NAME);
    return await cache.match(request);
} 