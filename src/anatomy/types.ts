export type Sex = 'male' | 'female';
export type VerificationStatus = 'unverified' | 'under_review' | 'verified' | 'approved_for_training';

export interface AnatomyStructure {
  id: string;
  nameEn: string;
  nameAr: string;
  systemId: string;
  appliesTo: 'all' | Sex;
  status: VerificationStatus;
  descriptionEn: string;
  descriptionAr: string;
  meshName?: string;
  sources: string[];
  clinicalRelevance?: string;
}

export interface AnatomySystem {
  id: string;
  nameEn: string;
  nameAr: string;
  structures: AnatomyStructure[];
}

export const statusLabel: Record<VerificationStatus, string> = {
  unverified: 'Unverified / غير موثق',
  under_review: 'Under review / قيد المراجعة',
  verified: 'Verified / موثق',
  approved_for_training: 'Approved for training / معتمد للتدريب'
};