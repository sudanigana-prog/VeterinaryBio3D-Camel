import type { AnatomyStructure } from './types';
import type { CamelAssetRecord } from './assetManifest';

/**
 * A structure can be exposed to a future surgical-training module only after
 * both its anatomical record and the linked mesh have explicit approval.
 * This is a governance gate, not a claim that a procedure is clinically safe.
 */
export function canUseForSurgicalTraining(
  structure: AnatomyStructure,
  asset: CamelAssetRecord | undefined
): boolean {
  if (!asset || structure.status !== 'approved_for_training') return false;
  if (asset.status !== 'approved_for_training') return false;
  if (asset.systemId !== structure.systemId) return false;
  if (asset.id !== structure.id) return false;
  if (!asset.specimenIds.length || !asset.sources.length || !asset.license.trim()) return false;
  return Boolean(asset.reviewer?.trim() && asset.reviewedAt?.trim());
}
