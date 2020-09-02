import { LightningElement, track } from 'lwc';
const columns = [
    {label: 'First name', fieldName: 'bindFirstName', type: 'text'},
    {label: 'Last name', fieldName: 'bindLastName', type: 'text'},
    {label: 'Gender', fieldName: 'bindGender', type: 'text'},
    {label: 'Department', fieldName: 'binDdepartment', type: 'text'},
    {label: 'Contact Email', fieldName: 'bindContact', type: 'email'},
    {label: 'Contact Phone', fieldName: 'bindPhone', type: 'phone'},
];
export default class TestNewTableBindLWC extends LightningElement {
    @track firstName; 
    @track lastName;
    @track email;
    @track mobileNumber;
    @track gender;
    @track department;
    columns = columns;
    firstNameOnChange(event){
        this.firstName = event.target.value;        
    }
    lastNameOnChange(event){
        this.lastName = event.target.value;   
    }
    emailNameOnChange(event){
        this.email = event.target.value;        
    }
    mobileNumberOnChange(event){
        this.mobileNumber = event.target.value;        
    }
    handleGenderOnChange(event){
        this.gender=event.target.value;        
    }
    handleDepartmentOnChange(event){
        this.department=event.target.value;        
    }
    value = '';
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
    @track data = [];
    getSelectedName(event) {
        console.log('event',event);
        console.log('event.detail.selectedRows',event.detail.selectedRows);
        const selectedRows = event.detail.selectedRows;
        console.log(selectedRows);
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].bindFirstName);
        }
    }
    createContact(event) {       
        this.data = [...this.data ,{
            "id": 'a'+(this.data.length+1),
            "bindFirstName": this.firstName,
            "bindLastName": this.lastName,
            "bindGender": this.gender,
            "binDdepartment": this.department,
            "bindContact": this.email,
            "bindPhone": this.mobileNumber                 
        }];
    }
}