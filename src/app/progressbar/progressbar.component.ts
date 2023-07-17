import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'progress-bar',
    template: `
    <div class="progressBar" 
    [style.backgroundColor]="backgroundColor"
    >
        <div class='progress'
            [style.backgroundColor]="progressColor"
            [style.width]="progress + '%'"
        >
        </div>
    </div>`,
    styleUrls: ['./progressbar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {
    @Input() backgroundColor = 'grey';
    @Input() progressColor = 'blue'
    private $progress = 0;
    @Input() get progress(): Number { return this.$progress; }
    set progress(value: Number) {
        if (typeof value != 'number') {
            const progress = Number(value)
            if (isNaN(progress)) {
                this.$progress = 0;
            } else {
                this.$progress = progress;
            }
        } else {
            this.$progress = value;
        }
    }

    constructor() {
        console.log('contructor ', { backgroundColor: this.backgroundColor, prossgressColor: this.progressColor, progress: this.progress });
    }

    ngOnInit() {
        console.log('onInit', { backgroundColor: this.backgroundColor, prossgressColor: this.progressColor, progress: this.progress });

    }

    ngOnChanges(change: SimpleChanges) {
        console.log('onChanges', { backgroundColor: this.backgroundColor, prossgressColor: this.progressColor, progress: this.progress });

    }
    // @Input() progress = 60;

    // constructor() {
    //     console.log('contructor ', { backgroundColor: this.backgroundColor, prossgressColor: this.progressColor, progress: this.progress });
    // }

    // ngOnInit() {
    //     console.log('onInit', { backgroundColor: this.backgroundColor, prossgressColor: this.progressColor, progress: this.progress });

    // }

    // ngOnChanges(change: SimpleChanges) {
    //     console.log('onChanges', { backgroundColor: this.backgroundColor, prossgressColor: this.progressColor, progress: this.progress });

    // }

}