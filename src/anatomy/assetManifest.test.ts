import { describe, expect, it } from 'vitest';
import { isAssetAllowedForTraining, validateAssetManifest } from './assetManifest';
import { canUseForSurgicalTraining } from './surgicalReadiness';
import type { AnatomyStructure } from './types';

const approvedAsset = {
  id: 'camel-skull', systemId: 'skeletal', sex: 'all' as const,
  file: '/models/camel/skull.glb', format: 'glb' as const,
  specimenIds: ['CAM-CT-001'], sources: ['doi:example'], license: 'Institutional permission on file',
  status: 'approved_for_training' as const, reviewer: 'Qualified camel anatomist', reviewedAt: '2026-11-20',
  meshNames: ['Skull']
};

const approvedStructure: AnatomyStructure = {
  id: 'camel-skull', nameEn: 'Skull', nameAr: 'الجمجمة', systemId: 'skeletal', appliesTo: 'all',
  status: 'approved_for_training', descriptionEn: 'Reviewed', descriptionAr: 'تمت المراجعة', sources: ['doi:example']
};

describe('camel asset governance', () => {
  it('rejects manifests for the wrong species', () => {
    expect(validateAssetManifest({ schemaVersion: 1, species: 'Equus caballus', assets: [] })).toBe(false);
  });

  it('accepts a correctly shaped dromedary manifest', () => {
    expect(validateAssetManifest({ schemaVersion: 1, species: 'Camelus dromedarius', generatedAt: '2026-11-20', assets: [approvedAsset] })).toBe(true);
  });

  it('requires specimen provenance, source, license, reviewer and date for training approval', () => {
    expect(isAssetAllowedForTraining(approvedAsset)).toBe(true);
    expect(isAssetAllowedForTraining({ ...approvedAsset, specimenIds: [] })).toBe(false);
  });

  it('does not enable surgical training when the linked structure and asset are not approved', () => {
    expect(canUseForSurgicalTraining(approvedStructure, approvedAsset)).toBe(true);
    expect(canUseForSurgicalTraining({ ...approvedStructure, status: 'verified' }, approvedAsset)).toBe(false);
    expect(canUseForSurgicalTraining(approvedStructure, undefined)).toBe(false);
  });
});
