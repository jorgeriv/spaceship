import {coerceBooleanProperty} from '../utils';
import {Constructor} from './constructor';

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
