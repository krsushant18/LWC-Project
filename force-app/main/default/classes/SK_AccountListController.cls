public class SK_AccountListController {
    @AuraEnabled
    public static List<Account> findAccounts(string acname){
        system.debug('********acname:'+acname);
        List<Account> accList = new List<Account>();
        string searchText= string.escapeSingleQuotes(acname);
        searchText = '%' + searchText + '%';
        string queryString = '';
        if(acname != null && acname != ''){
            queryString = queryString + 'select id,name,type,industry from Account where name Like : searchText order by LastModifiedDate DESC Limit 10';
        }else{
            queryString = queryString + 'select id,name,type,industry from Account order by LastModifiedDate DESC Limit 100';
        }
        try{
            accList = database.query(queryString);
        }catch(exception ex){
            system.debug('Problem with SOQL Query:'+ ex.getMessage());
        }
        return accList;
    }

}