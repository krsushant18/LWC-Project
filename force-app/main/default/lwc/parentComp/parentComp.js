import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class ParentComp extends LightningElement {
    @track fname = "Farukh Haider";

    onNameChange(event){
        this.fname = event.target.value;        
    }
    @wire(getAccountList)accounts;
    onButtonClick(){
        this.template.querySelector("c-child-lwc").childFunction();  
    }

}