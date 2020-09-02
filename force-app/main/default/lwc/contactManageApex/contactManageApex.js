import { LightningElement, wire, track } from "lwc";
import getAllContact from "@salesforce/apex/ContactManager.getContacts";

export default class ContactManageApex extends LightningElement {
  @track conList;
  @track showContact = false;
  /*Using Wire*/
  @wire(getAllContact /*, { flag: "$showContact"}*/)
  wiredcontacts({ error, data }) {
    if (data) {
      console.log("--data-->" + data);
      this.conList = data;
    } else if (error) {
      console.log("error: " + error);
    }
  }

  /* Using Imperative Call
  getContactList() {
    getAllContact()
      .then((result) => {
        this.conList = result;
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }*/

  handleChange(event) {
    this.showContact = event.target.checked;
  }
}