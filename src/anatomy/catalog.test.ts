import { describe, expect, it } from 'vitest';
import { getVisibleSystems } from './catalog';

describe('sex-specific anatomy catalog', () => {
  it('shares common systems and exposes male reproductive structures for male selection', () => {
    const systems = getVisibleSystems('male');
    expect(systems.some(system => system.id === 'skeletal')).toBe(true);
    expect(systems.some(system => system.id === 'male-reproductive')).toBe(true);
    expect(systems.some(system => system.id === 'female-reproductive')).toBe(false);
  });

  it('shares common systems and exposes female reproductive structures for female selection', () => {
    const systems = getVisibleSystems('female');
    expect(systems.some(system => system.id === 'skeletal')).toBe(true);
    expect(systems.some(system => system.id === 'female-reproductive')).toBe(true);
    expect(systems.some(system => system.id === 'male-reproductive')).toBe(false);
  });
});