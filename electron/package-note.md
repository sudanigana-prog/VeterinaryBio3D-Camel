# Electron shell

The desktop shell uses context isolation, disabled Node integration, and sandboxed renderer settings. The web app remains the primary Phase 1 delivery target. For production packaging, add a signed installer pipeline and explicit content security policy before distribution.