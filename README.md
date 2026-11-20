# VeterinaryBio 3D Camel

A bilingual anatomy workspace for the one-humped dromedary camel (*Camelus dromedarius*), with an evidence-first architecture intended to grow into a veterinary surgical education platform.

## Current implementation status

This repository started empty. Development is taking place on `feature/phase-1-foundation` and is proposed through [Pull Request #1](https://github.com/sudanigana-prog/VeterinaryBio3D-Camel/pull/1).

Implemented:
- React + TypeScript + Vite + React Three Fiber viewer foundation.
- Male/female selection and a shared anatomical catalogue with sex-specific reproductive systems.
- English/Arabic labels, structure search, metadata and verification status.
- Versioned GLB manifest, manifest validation and reviewed-asset loading.
- Data provenance rules, scientific reference register, and DICOM-to-3D workflow documentation.
- Electron desktop shell, CI workflow and unit tests.

Not yet delivered:
- No real camel CT/MRI-derived GLB anatomy models are included.
- The fallback 3D shape is a demonstration placeholder, not anatomy.
- No procedure-specific surgical simulation or clinically validated guidance is enabled.

## Quick start

See [Getting Started](docs/GETTING_STARTED.md).

```bash
npm install
npm run dev
```

## Scientific and data integrity

Only dromedary-specific evidence may support anatomical verification. Every model must carry specimen provenance, source references, license/permission, mesh names, reviewer and review date. Generic mammalian meshes and generated placeholder geometry must never be labelled as verified camel anatomy.

Surgical-training approval is a separate gate from anatomical verification and requires procedure-specific expert review. This project is an educational software prototype, not a clinical decision-support system.
