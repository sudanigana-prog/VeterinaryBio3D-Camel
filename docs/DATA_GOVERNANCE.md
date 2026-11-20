# Data governance and provenance

Every source asset must have documented ownership, permission, and license before ingestion. Keep original DICOM and source media immutable; store processed segmentations and meshes separately. Use stable specimen IDs and never expose personal or farm-identifying data without consent.

Each anatomy structure should record: unique ID, Arabic and English names, system, species, sex applicability, source specimen IDs, source modality, original file references, mesh filename, DOI/publication or institutional source, license/permission, verification status, reviewer, review date, and clinical relevance.

Allowed verification states: `unverified`, `under_review`, `verified`, `approved_for_training`. Only a qualified reviewer may approve a structure. Training approval is not equivalent to regulatory approval or authorization for clinical use.
