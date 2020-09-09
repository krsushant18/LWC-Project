public class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Type,Phone, Rating,
                AccountSource, Industry FROM Account LIMIT 5];
    }
}