global class batchExample implements Database.Batchable<sObject> {
    
    global Database.QueryLocator start(Database.BatchableContext BC) {            
        String query = 'SELECT Id,Name FROM Account';
        return Database.getQueryLocator(query);
    }
     
    global void execute(Database.BatchableContext BC, List<Account> accList) {        
       
        for(Account acc : accList){        
            // Update the Account Name 
            acc.Name = acc.Name + 'Webkul';
        }
        
        try {
            update accList;
         
        } 
        catch(Exception e) {
            System.debug(e);
        }         
    }   
     
    global void finish(Database.BatchableContext BC) {        
    
    }
}