# Getting started

## Requirements
- Node.js 20 or newer
- npm
- A modern browser with WebGL 2 support (for the 3D viewport)

## Install and run
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run build
npm test
```

## Desktop shell
```bash
npm run electron:dev
```

The desktop shell is an early development wrapper. Production packaging, signing, update delivery, and security review are still required before distribution.

## Add a reviewed camel model
1. Add the licensed GLB file under `public/models/camel/`.
2. Add a manifest record to `public/models/camel/manifest.json`.
3. Use a stable `id` matching the anatomy structure identifier and a valid `systemId`.
4. Record specimen IDs, sources, license/permission, mesh names, reviewer and review date.
5. Set status to `verified` only after anatomical review. Set `approved_for_training` only after additional training-specific review.
6. Run the build and tests, then submit the change through a pull request.

The manifest loader displays only assets with status `verified` or `approved_for_training`. The surgical training gate additionally requires explicit training approval and provenance.
