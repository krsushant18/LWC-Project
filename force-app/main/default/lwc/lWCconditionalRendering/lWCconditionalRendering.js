import { LightningElement } from 'lwc';

export default class LWCconditionalRendering extends LightningElement {

    areDetailsVisible = false;

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }

}