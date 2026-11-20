# Phase 1 — Foundation

## Included in this branch

- React + TypeScript + Vite application foundation.
- React Three Fiber viewer with an explicitly disclosed demonstration placeholder.
- Male/female selection with a shared body-system catalog and sex-specific reproductive entries.
- System navigation, structure search, metadata panel, and Arabic/English labels.
- Verification states and evidence-first warnings.
- Electron shell with hardened renderer defaults.
- Camel-specific imaging-to-GLB asset pipeline documentation.

## Not included / not clinically validated

- No real camel CT/MRI-derived meshes are included.
- The displayed 3D primitive is not an anatomical representation and must not be used for teaching anatomy.
- No surgical simulation, incision guidance, risk zones, or treatment instructions are enabled.
- The catalog is a starting inventory and requires specialist review and literature-backed completion.

## Next acceptance steps

1. Install dependencies and run `npm run build` and `npm test` in CI.
2. Obtain licensed camel imaging/dissection datasets.
3. Review the anatomical inventory with camel anatomy and surgery specialists.
4. Replace placeholder geometry with specimen-traceable GLB models.
