import { LightningElement, api,track } from 'lwc';

export default class ChildComp extends LightningElement {
    @api childMessage = 'Sushant Salesforce developer';
    @api textMessage = 'Lightning web component';
    @api test = 'testing';
    @track checkBoxChecked = false;  
    @api childFunction(){  
        console.log("Child LWC Component method invoked");  
        this.checkBoxChecked = true;  
    }  
}