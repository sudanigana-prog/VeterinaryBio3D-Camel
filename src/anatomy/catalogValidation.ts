import type { AnatomySystem } from './types';

export interface CatalogIssue {
  code: 'duplicate-system-id' | 'duplicate-structure-id' | 'system-mismatch' | 'invalid-sex-scope';
  message: string;
}

export function validateAnatomyCatalog(systems: AnatomySystem[]): CatalogIssue[] {
  const issues: CatalogIssue[] = [];
  const systemIds = new Set<string>();
  const structureIds = new Set<string>();

  for (const system of systems) {
    if (systemIds.has(system.id)) issues.push({ code: 'duplicate-system-id', message: `Duplicate system id: ${system.id}` });
    systemIds.add(system.id);

    for (const structure of system.structures) {
      if (structureIds.has(structure.id)) issues.push({ code: 'duplicate-structure-id', message: `Duplicate structure id: ${structure.id}` });
      structureIds.add(structure.id);
      if (structure.systemId !== system.id) issues.push({ code: 'system-mismatch', message: `Structure ${structure.id} points to ${structure.systemId}, not ${system.id}` });
      if (!['all', 'male', 'female'].includes(structure.appliesTo)) issues.push({ code: 'invalid-sex-scope', message: `Invalid sex scope for ${structure.id}` });
    }
  }

  return issues;
}
