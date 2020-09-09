import { LightningElement, api, wire, track } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getContactList from '@salesforce/apex/ContactController.getContactList';

import CONTACT_FIRSTNAME from "@salesforce/schema/Contact.FirstName";
import CONTACT_LASTNAME from "@salesforce/schema/Contact.LastName";
import CONTACT_EMAIL from "@salesforce/schema/Contact.Email";
import CONTACT_PHONE from "@salesforce/schema/Contact.MobilePhone"; 


export default class CreateRecordInLWC extends LightningElement {
  @api recordId;
  @api objectApiName;
  
  selectedFields = [CONTACT_FIRSTNAME, CONTACT_LASTNAME,CONTACT_EMAIL,CONTACT_PHONE];
  handleSuccess(event) {
    const evt = new ShowToastEvent({
        title: "Success",
        message: 'Record successfully created',
        variant: "success"
    });
    this.dispatchEvent(evt);
  }
  
  @track columns = [{
    label: 'First name',
    fieldName: 'FirstName',
    type: 'text',
    sortable: true
},
{
    label: 'Last Name',
    fieldName: 'LastName',
    type: 'text',
    sortable: true
},
{
    label: 'Email',
    fieldName: 'Email',
    type: 'text',
    sortable: true
},
{
    label: 'MobilePhone',
    fieldName: 'MobilePhone',
    type: 'text',
    sortable: true
}
];

@track conList;
@wire(getContactList)
wiredContacts({
error,
data
}) {
if (data) {
    this.conList = data;
}
}
  
}