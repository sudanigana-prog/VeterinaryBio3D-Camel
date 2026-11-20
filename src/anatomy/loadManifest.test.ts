import { describe, expect, it, vi } from 'vitest';
import { loadCamelAssetManifest } from './loadManifest';

describe('loadCamelAssetManifest', () => {
  it('returns an empty valid manifest when no model assets are installed', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ schemaVersion: 1, species: 'Camelus dromedarius', generatedAt: '2026-11-20', assets: [] })
    }));
    await expect(loadCamelAssetManifest()).resolves.toMatchObject({ species: 'Camelus dromedarius', assets: [] });
    vi.unstubAllGlobals();
  });

  it('rejects invalid manifest data', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ species: 'horse' }) }));
    await expect(loadCamelAssetManifest()).rejects.toThrow('schema validation');
    vi.unstubAllGlobals();
  });
});
