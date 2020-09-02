trigger countContactsOnAccount on Contact (after insert,after delete, after undelete) {

  Set<Id> setOfAccountIds = New Set<Id>(); 
  List<Account> listOfAccounttoUpdate = new List<Account>();
  if(trigger.isAfter &&  trigger.isInsert){
    
     for(Contact conObj : Trigger.New){
         setOfAccountIds.add(conObj.AccountId);
     }       
  }
  
  List<Account> accList = [Select id, Name, NumberOfEmployees, (Select id, name from Contacts) from Account where id in: setOfAccountIds];
  
  for(Account acc : accList){
           acc.NumberOfEmployees = acc.Contacts.size();
          listOfAccounttoUpdate.add(acc);          
   }
  update listOfAccounttoUpdate;
  
}