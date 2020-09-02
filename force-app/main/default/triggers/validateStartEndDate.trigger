trigger validateStartEndDate on Account(before insert, before update) {
   
   for(Account dataRecord : Trigger.new){
       // before insert record
       if(Trigger.oldMap == null || Trigger.oldMap.size() == 0){
           if(dataRecord.StartDate__c >= dataRecord.EndDate__c){
              dataRecord.addError('Start Date cannot be after the End Date. Please review the dates');
           }            
       }
       else if(Trigger.oldMap != null){ // before update record
           Account oldInstance = Trigger.oldMap.get(dataRecord.Id);
           
           if(dataRecord.StartDate__c != oldInstance.StartDate__c &&
               dataRecord.StartDate__c >= dataRecord.EndDate__c){
               dataRecord.addError('Start Date cannot be after the End Date. Please review the dates');
           }
           if(dataRecord.EndDate__c != oldInstance.EndDate__c &&
               dataRecord.StartDate__c >= dataRecord.EndDate__c){
               dataRecord.addError('End Date cannot be before Start Date. Please review the dates');
           }
       }
   }
   
}