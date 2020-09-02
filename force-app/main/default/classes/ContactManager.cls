public with sharing class ContactManager {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT FirstName, LastName, Email FROM Contact LIMIT 10];
    }
}