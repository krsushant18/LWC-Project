/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api } from "lwc";
import firsttemplate from "./lifeCycleHook.html";
import secondtemplate from "./lifeCycleHook2.html";

export default class LifeCycleHook extends LightningElement {
  @api templateNo = "templ1";
  constructor() {
    super();
    console.log("Inside constructor");
  }
  connectedCallback() {
    console.log("Inside Connected Callback");
  }
  disconnectedCallback() {
    console.log("Inside Disconnected Callback");
  }
  changeTemplate() {
    if (this.templateNo === "temp1") {
      this.templateNo = "temp2";
    } else {
      this.templateNo = "temp1";
    }
  }
  render() {
    console.log("Inside render");
    if (this.templateNo === "temp1") {
      return firsttemplate;
      // eslint-disable-next-line no-else-return
    } else {
      return secondtemplate;
    }
  }
  renderedCallback() {
    console.log("Inside renderedCallback");
  }
  // eslint-disable-next-line no-unused-vars
  errorCallback(error, stack) {
    console.log("Inside error callback" + error);
    // eslint-disable-next-line no-alert
    alert("error: " + error);
  }
}
