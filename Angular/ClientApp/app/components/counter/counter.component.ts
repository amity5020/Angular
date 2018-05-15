import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    modalRef: BsModalRef;
    public currentCount = 0;
    constructor( private bsModalService: BsModalService) {

    }
    public incrementCounter() {
        this.currentCount++;
    }
    public openpopup(template: TemplateRef<any>) {
        this.modalRef = this.bsModalService.show(template);
    }
}
