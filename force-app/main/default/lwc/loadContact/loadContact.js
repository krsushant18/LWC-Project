import { LightningElement, api, track, wire } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { getRecord, getFieldValue, createRecord } from "lightning/uiRecordApi";
import FIRST_NAME from "@salesforce/schema/Contact.FirstName";
import LAST_NAME from "@salesforce/schema/Contact.LastName";
import CONTACT_EMAIL from "@salesforce/schema/Contact.Email";
import CONTACT_OBJECT from "@salesforce/schema/Contact";

const FIELDS = ["Contact.Name", "Contact.Phone", "Contact.Email"];

export default class Loadcontact extends LightningElement {
  @api recordId;
  @track contact;
  @track name;
  @track phone;
  @track email;
  @track accountName;
  @wire(getRecord, {
    recordId: "$recordId",
    fields: FIELDS,
    modes: ["View"],
    layoutTypes: ["Full"]
  })
  wiredRecord({ error, data }) {
    if (error) {
      let message = "Unknown error";
      if (Array.isArray(error.body)) {
        message = error.body.map((e) => e.message).join(", ");
      } else if (typeof error.body.message === "string") {
        message = error.body.message;
      }
      this.dispatchEvent(
        new ShowToastEvent({
          title: "Error loading contact",
          message,
          variant: "error"
        })
      );
    } else if (data) {
      this.contact = data;
      console.log(" Contact Information ", this.contact);
      this.accountName = this.contact.fields.Account.value; /*.fields.Name.value;*/
      console.log(" this.accountName ", this.accountName);
      /*this.name = this.contact.fields.Name.value;
            this.phone = this.contact.fields.Phone.value;*/
    }
  }
  get nameInfo() {
    return getFieldValue(this.contact, FIRST_NAME);
  }
  handleSave() {
    // eslint-disable-next-line no-alert
    alert("Preparing Record ......");
    const fields = {};
    fields[FIRST_NAME.fieldApiName] = "LWC";
    fields[LAST_NAME.fieldApiName] = "Reskilling";
    fields[CONTACT_EMAIL.fieldApiName] = "rasha201@in.ibm.com";
    let recordInfo = {
      apiName: CONTACT_OBJECT.objectApiName,
      fields: fields
    };
    // eslint-disable-next-line no-alert
    alert("Creatinging Record ......");
    createRecord(recordInfo)
      .then((record) => {
        console.log("Record Created", record.recordId);
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success!",
            message: "Record Created",
            variant: "success"
          })
        );
      })
      .catch((error) => {
        let message = "Unknown error";
        if (Array.isArray(error.body)) {
          message = error.body.map((e) => e.message).join(", ");
        } else if (typeof error.body.message === "string") {
          message = error.body.message;
        }
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error creating contact",
            message,
            variant: "error"
          })
        );
      });
  }
}