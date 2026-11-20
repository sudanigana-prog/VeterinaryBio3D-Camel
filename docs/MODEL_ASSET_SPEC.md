# 3D model asset specification

## File and naming
- Preferred delivery: one optimized GLB per anatomical structure or coherent anatomical layer.
- Use stable lowercase kebab-case IDs that exactly match the catalogue, e.g. `skull`, `camel-c1`, `tarsus`.
- Keep source segmentation projects and high-resolution meshes outside the runtime bundle; include a traceable source identifier.
- Avoid combining structures from different specimens into one mesh unless the assembly is explicitly documented as a composite teaching model.

## Geometry and transforms
- Preserve real-world proportions and record the source measurement/scale basis.
- Use a consistent right-handed glTF coordinate convention and document any transform applied during conversion.
- Check orientation against anatomical planes and at least three known landmarks before publishing.
- Apply mesh cleanup only when it does not erase clinically meaningful foramina, grooves, ridges, joint surfaces, or tissue boundaries.
- Keep anatomical layers separable where possible; do not fuse unrelated organs into a single opaque mesh.

## Required manifest fields
Every asset must declare:
- stable asset ID and anatomical system ID;
- sex applicability;
- runtime file path and GLB/glTF format;
- specimen ID(s), source publication/institution, and permission/license;
- mesh names contained in the file;
- verification status;
- reviewer and review date when approved.

## Review levels
- `unverified`: newly ingested or procedurally created asset; hidden from the normal reviewed-model viewer.
- `under_review`: being checked; not treated as authoritative.
- `verified`: anatomy and provenance reviewed for educational display.
- `approved_for_training`: separately approved for a specified educational training use. This does not authorize clinical use.

## Performance
- Prefer mesh compression and texture optimization only after checking that surface detail is retained.
- Split large systems into independently loadable assets.
- Keep original high-resolution source geometry archived; runtime optimization must be reproducible.
