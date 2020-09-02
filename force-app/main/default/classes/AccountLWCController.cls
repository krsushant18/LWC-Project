public with sharing class AccountLWCController {
    @AuraEnabled(cacheable = true)
    public static List<Account> showAccounts(){
        List<Account> listOfAccounts= [SELECT id, Name FROM Account Limit 10];
        return listOfAccounts;
    }
}