import { LightningElement, api } from "lwc";
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import Account_INDUSTRY from "@salesforce/schema/Account.Industry";

export default class LDSRecordForm extends LightningElement {
  @api recordId;
  @api objectApiName;
  fields = [ACCOUNT_NAME, Account_INDUSTRY];
  handleSuccess() {
    // eslint-disable-next-line no-alert
    alert("Success Called");
  }
}