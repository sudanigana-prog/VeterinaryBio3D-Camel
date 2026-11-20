# Anatomical asset pipeline

1. Obtain camel-specific DICOM CT/MRI, ultrasound, radiographs, or documented dissection assets with written permission and clear reuse terms.
2. Preserve original files read-only. Record specimen ID, species, sex, age (if known), health status, acquisition date, modality, orientation, voxel spacing, source institution, consent, and license.
3. Import DICOM into 3D Slicer. Verify orientation and voxel spacing before segmentation.
4. Segment one anatomical structure at a time; retain segmentation project files and document thresholds/manual edits.
5. Export surfaces for cleanup in Blender. Preserve anatomical labels and specimen provenance.
6. Export optimized GLB/glTF assets into `public/models/camel/` and register every mesh in the anatomy manifest.
7. Review against camel-specific literature and a qualified camel veterinarian/anatomist. Only then change verification status.

## Non-negotiable safeguards

- Never merge scans from different animals into a single implied specimen.
- Never infer camel anatomy solely from horse, bovine, or generic mammal assets.
- Never mark procedural primitives or AI-generated meshes as verified anatomy.
- Do not publish surgical access routes, incision planes, or safe zones without camel-specific evidence and documented expert approval.
- Store source/license and reviewer/date metadata with each structure.
