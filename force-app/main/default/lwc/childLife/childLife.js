import { LightningElement } from "lwc";
export default class ChildLife extends LightningElement {
  connectedCallback() {
    throw new Error("Custom error occurred");
  }
}