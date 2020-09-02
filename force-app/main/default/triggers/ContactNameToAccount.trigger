trigger ContactNameToAccount on Contact (after insert, after delete, after undelete, after update){
    
   //In after trigger we can capture the only id of the record inserted and not get the all other field values.             
   String names='';
   Set<id> accIdList = new Set<id>();
   if((trigger.isInsert || trigger.isUndelete) && trigger.isAfter){
   for(Contact con : Trigger.new)
   {
    accIdList.add(con.accountid);
   }
   }
   
   if((trigger.isDelete || trigger.isUpdate) && trigger.isAfter){
   for(Contact con : Trigger.old)
   {
    accIdList.add(con.accountid);
   }
   }

   List<Account> accUpdateList = new List<Account>();
   for(Account acc : [Select id, name, description,(Select Id, name, lastname From Contacts order by name) From Account Where Id In : accIdList]){
       for(Contact con : acc.contacts){
        if(con.lastname != null)
        {
            names = names + con.name + ', ';
        }
        
    } 
        names=names.removeEnd(', ');
        names = names.replaceAll('(.*), (.*)', '$1 and $2');
        acc.description = names;   
        accUpdateList.add(acc);
   }    
   update accUpdateList;
}