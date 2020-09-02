import { LightningElement, track, wire} from 'lwc';

import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import getAllEmployees from '@salesforce/apex/EmployeeController.getAllEmployees';

import EMPLOYEE_OBJECT from '@salesforce/schema/Employee__c';
import FIRST_FIELD from '@salesforce/schema/Employee__c.FirstName__c';
import LAST_FIELD from '@salesforce/schema/Employee__c.LastName__c';
import EMAIL_FIELD from '@salesforce/schema/Employee__c.Email__c';
import PHONE_FIELD from '@salesforce/schema/Employee__c.Mobile_Phone__c';
import GENDER_FIELD from '@salesforce/schema/Employee__c.Gender__c';
import DEPARTMENT_FIELD from '@salesforce/schema/Employee__c.Department__c';

const columns = [
    { label: 'First Name', fieldName: 'FirstName__c' },
    { label: 'Last Name', fieldName: 'LastName__c' },
    { label: 'Email', fieldName: 'Email__c' },
    { label: 'Phone', fieldName: 'Mobile_Phone__c' },
    { label: 'Gender', fieldName: 'Gender__c' },
    { label: 'Department', fieldName: 'Department__c' },
];

export default class CreateRecordInLWC extends LightningElement {
    @track error ;
    @track data ;
    @track columns = columns;

    @wire(getAllEmployees)        
    wiredRecords({ error, data }) {
        if (data) {
            this.data = data;
        }
    }

    @track RecordData = {
        FirstName : FIRST_FIELD,
        LastName : LAST_FIELD,
        Email : EMAIL_FIELD,
        Phone : PHONE_FIELD,
        Gender : GENDER_FIELD,
        Department : DEPARTMENT_FIELD
    };

    firstNameOnChange(event){
        this.RecordData.FirstName = event.target.value;       
    }
    lastNameOnChange(event){
        this.RecordData.LastName = event.target.value;       
    }
    emailNameOnChange(event){
        this.RecordData.Email = event.target.value;       
    }
    mobileNumberOnChange(event){
        this.RecordData.Phone = event.target.value;       
    }
    handleGenderOnChange(event){
        this.RecordData.Gender = event.target.value;       
    }
    handleDepartmentOnChange(event){
        this.RecordData.Department = event.target.value;       
    }
    
    get options() {
        return [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
        ];
    }
    get deptOptions() {
        return [
                 { label: 'Coding', value: 'Coding' },
                 { label: 'Testing', value: 'Testing' },
                 { label: 'Integration', value: 'Integration' },
                 { label: 'Deployment', value: 'Deployment' }
               ];
    }

    handleSave() {
        const fields = {};

        fields[FIRST_FIELD.fieldApiName] = this.RecordData.FirstName;
        fields[LAST_FIELD.fieldApiName] = this.RecordData.LastName;
        fields[EMAIL_FIELD.fieldApiName] = this.RecordData.Email;
        fields[PHONE_FIELD.fieldApiName] = this.RecordData.Phone;
        fields[GENDER_FIELD.fieldApiName] = this.RecordData.Gender;
        fields[DEPARTMENT_FIELD.fieldApiName] = this.RecordData.Department;
       
        // Creating record using uiRecordApi
        let recordInput = { apiName: EMPLOYEE_OBJECT.objectApiName, fields }
        createRecord(recordInput)
        .then(result => {            
            this.accRecord = {};
            window.console.log('result----'+result);            
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!',
                message: 'Employee Record Created Successfully',
                variant: 'success'
            }),);
        })
        .catch(error => {
            this.error = JSON.stringify(error);
        });
    }
}