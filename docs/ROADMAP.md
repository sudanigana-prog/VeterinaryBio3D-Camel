# Product roadmap

## Phase 1 — foundation (current pull request)
- [x] React / TypeScript / Vite application shell.
- [x] Three-dimensional interaction scaffold and clearly labelled demo placeholder.
- [x] Male/female switch and shared-system catalogue architecture.
- [x] Bilingual navigation, structure search and metadata panel.
- [x] Evidence status and source governance model.
- [x] Imaging-to-mesh workflow documentation.
- [x] CI workflow and initial unit tests.

## Phase 2 — anatomy data and model ingestion
- [x] Versioned asset manifest contract and validation helpers.
- [x] Surgical-training approval gate at the data layer.
- [ ] Acquire licensed, specimen-traceable camel DICOM/MRI/ultrasound datasets.
- [ ] Segment head, axial skeleton, limbs, thoracic/abdominal organs and reproductive organs.
- [ ] Create reviewed GLB assets and mesh-level metadata.
- [ ] Validate orientation, scale, topology and anatomy with specialists.

## Phase 3 — interactive anatomy atlas
- [ ] Load GLB assets by anatomical system.
- [ ] Per-structure visibility, isolation, opacity and annotation.
- [ ] Cross-sectional CT/MRI viewer linked to 3D selections.
- [ ] Anatomical landmark and region navigation.
- [ ] English/Arabic terminology review and accessibility.

## Phase 4 — surgical education
- [ ] Select and document camel-specific procedures with veterinary specialists.
- [ ] Build approach-specific layers, landmarks and risk-structure overlays.
- [ ] Add procedural interaction only after anatomical and educational validation.
- [ ] Usability testing with veterinary surgeons and students.
- [ ] Clearly label educational simulation; do not imply clinical decision support.

## Release gates
A phase is not complete because the UI exists. Each release requires reproducible builds, automated tests, review of all new scientific content, license/provenance checks, and a documented list of limitations. Clinical use is outside scope unless separately validated and authorized.
