import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
    @Input() label: string = '';
    @Input() value: string = '';
    @Input() formCName: string = '';

    constructor() {}

    ngOnInit(): void {}
}
