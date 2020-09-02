public class CreateAccountRecordinLightning {

    @AuraEnabled
    Public static void updateRecord(Account accountRecord){
        try{
           update accountRecord; 
        }catch(DMLException e){
            throw new AuraHandledException(e.getDMLMessage(0)); 
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage()); 
        }  
    }
    
    @AuraEnabled
    Public static Account deleteRecord(Account accountRecord){
        try{
            if(accountRecord != null){
               delete accountRecord; 
            } 
        }catch(DMLException e){
            throw new AuraHandledException(e.getDMLMessage(0)); 
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage()); 
        } 
        return accountRecord;
    }
}