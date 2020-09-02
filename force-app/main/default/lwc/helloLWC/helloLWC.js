import { LightningElement, track } from 'lwc';
export default class HelloLWC extends LightningElement {
    @track greeting = 'SUSHANT';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}