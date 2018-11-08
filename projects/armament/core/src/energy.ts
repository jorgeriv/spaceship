import {Constructor} from './common/constructor';

/** Coerces a data-bound value (typically a string) to a boolean. */
export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

/** @docs-private */
export interface HasEnergy {
  /** Whether the power source is exahusted. */
  exhausted: boolean;
}

/** Mixin to augment a directive with a `disabled` property. */
export function mixinExhausted<T extends Constructor<{}>>(base: T): Constructor<HasEnergy> & T {
  return class extends base {
    private _exhausted = false;

    get exhausted() { return this._exhausted; }
    set exhausted(value: any) { this._exhausted = coerceBooleanProperty(value); }

    constructor(...args: any[]) { super(...args); }
  };
}
