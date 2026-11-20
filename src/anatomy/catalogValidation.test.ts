import { describe, expect, it } from 'vitest';
import { anatomySystems } from './catalog';
import { validateAnatomyCatalog } from './catalogValidation';

describe('anatomy catalogue integrity', () => {
  it('has unique system and structure identifiers with consistent system ownership', () => {
    expect(validateAnatomyCatalog(anatomySystems)).toEqual([]);
  });

  it('detects duplicate structure identifiers', () => {
    const duplicate = [...anatomySystems, { ...anatomySystems[0], id: 'extra-system' }];
    expect(validateAnatomyCatalog(duplicate).some(issue => issue.code === 'duplicate-structure-id')).toBe(true);
  });
});
