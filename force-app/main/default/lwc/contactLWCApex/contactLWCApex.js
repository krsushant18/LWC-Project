import { LightningElement, track } from "lwc";
import getAllContact from "@salesforce/apex/ContactManager.getContacts";

export default class ContactLWCApex extends LightningElement {
  @track conList;
  @track showContact = false;
  /*Using Wire*/
  /*@wire(getAllContact , { flag: "$showContact"})
  conList;
  wiredcontacts({ error, data }) {
    if (data) {
      console.log("--data-->" + data);
      this.conList = data;
    } else if (error) {
      console.log("error: " + error);
    }
  }*/

  /*Using Imperative Call*/
  getContactList() {
    getAllContact()
      .then((data) => {
        this.conList = data;
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }

  handleChange(event) {
    this.showContact = event.target.checked;
  }
}
