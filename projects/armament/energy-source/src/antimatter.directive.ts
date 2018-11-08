import { Directive, Input, ElementRef, OnChanges, SimpleChanges} from '@angular/core';
import { HasEnergy, mixinExhausted} from 'armament/core';

export class ArmAntimatterBase {
    constructor(public _elementRef: ElementRef) {}
}

export const _ArmAntimatterMixinBase = mixinExhausted(ArmAntimatterBase);

@Directive({
    selector: '[armAntimatter]',
})
export class AntimatterDirective extends _ArmAntimatterMixinBase implements HasEnergy, OnChanges {
    @Input() isExhausted: boolean;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.isExhausted) {
            this.exhausted = this.isExhausted;
        }
    }
}
