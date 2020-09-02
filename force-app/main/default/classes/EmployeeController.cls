public with sharing class EmployeeController {    
    @AuraEnabled(cacheable=true)
    public static List<Employee__c> getAllEmployees() {
       return [SELECT Id, Name, FirstName__c, Gender__c,
               LastName__c,Mobile_Phone__c,Email__c,
               Department__c FROM Employee__c];
    }
}