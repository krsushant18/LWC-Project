import { LightningElement, api } from "lwc";
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import Account_INDUSTRY from "@salesforce/schema/Account.Industry";
export default class LtngRecordForm extends LightningElement {
  /*
        force:hasRecordId - recordId
        force:hasSobjectName - objectAPIName
    */
  @api recordId;
  @api objectApiName;
  fields = [ACCOUNT_NAME, Account_INDUSTRY];
  /*handleSuccess() {
    // eslint-disable-next-line no-alert
    alert("Success Called");
  }*/
}