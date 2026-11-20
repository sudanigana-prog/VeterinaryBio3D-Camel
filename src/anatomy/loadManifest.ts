import { validateAssetManifest, type CamelAssetManifest } from './assetManifest';

export async function loadCamelAssetManifest(): Promise<CamelAssetManifest> {
  const response = await fetch(`${import.meta.env.BASE_URL}models/camel/manifest.json`);
  if (!response.ok) throw new Error(`Unable to load camel asset manifest (${response.status})`);
  const value: unknown = await response.json();
  if (!validateAssetManifest(value)) throw new Error('Camel asset manifest failed schema validation');
  return value;
}
