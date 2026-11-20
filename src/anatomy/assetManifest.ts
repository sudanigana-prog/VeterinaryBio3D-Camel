import type { Sex, VerificationStatus } from './types';

export interface CamelAssetRecord {
  id: string;
  systemId: string;
  sex: 'all' | Sex;
  file: string;
  format: 'glb' | 'gltf';
  specimenIds: string[];
  sources: string[];
  license: string;
  status: VerificationStatus;
  reviewer?: string;
  reviewedAt?: string;
  meshNames: string[];
}

export interface CamelAssetManifest {
  schemaVersion: 1;
  species: 'Camelus dromedarius';
  generatedAt: string;
  assets: CamelAssetRecord[];
}

export function validateAssetManifest(value: unknown): value is CamelAssetManifest {
  if (!value || typeof value !== 'object') return false;
  const manifest = value as Partial<CamelAssetManifest>;
  if (manifest.schemaVersion !== 1 || manifest.species !== 'Camelus dromedarius' || !Array.isArray(manifest.assets)) return false;
  return manifest.assets.every((asset) =>
    typeof asset.id === 'string' &&
    typeof asset.systemId === 'string' &&
    typeof asset.file === 'string' &&
    (asset.file.endsWith('.glb') || asset.file.endsWith('.gltf')) &&
    Array.isArray(asset.specimenIds) &&
    Array.isArray(asset.sources) &&
    Array.isArray(asset.meshNames) &&
    typeof asset.license === 'string' &&
    ['unverified', 'under_review', 'verified', 'approved_for_training'].includes(asset.status)
  );
}

export function isAssetAllowedForTraining(asset: CamelAssetRecord): boolean {
  return asset.status === 'approved_for_training' &&
    asset.specimenIds.length > 0 &&
    asset.sources.length > 0 &&
    asset.license.trim().length > 0 &&
    Boolean(asset.reviewer?.trim()) &&
    Boolean(asset.reviewedAt?.trim());
}
