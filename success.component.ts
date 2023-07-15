import {Component} from '@angular/core'
@Component({
    selector: 'success-alert',
    templateUrl: './success.component.html',
    styles: [`
    button{
        background-color:blueviolet;
        color: white;
    }
    p{
        margin-top: 10px;
        padding: 20px;
        color: darkcyan;
        background-color:greenyellow;
        border: 1px solid green;
    }`]
})
export class SuccessAlert{

}