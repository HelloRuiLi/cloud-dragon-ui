import {
    Component,
    OnInit
} from "@angular/core";

@Component({
    selector: "cd-dialog",
    template: require("./dialog.component.html"),
    styles: [require("./dialog.component.less")]
})
export class DialogComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}