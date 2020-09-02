trigger createRelatedObjRecord on Contact (after insert, after update) {
    
   Set<Id> setofNewids = new Set<Id>(); 
   Set<Id> relatedrecordsids = new Set<Id>();
   Set<Id> SetOfAccountids = new Set<Id>();
   
   for(Contact con : Trigger.new){
        setofNewids.add(con.id);   
        SetOfAccountids.add(con.Accountid);
   }
   
   if(trigger.isinsert || trigger.isupdate){
     List<Contact> conlist = [select id, 
                                     name,
                                     Related_Chechbox__c 
                                     from 
                                     Contact where id in : setofNewids];                                   
    
     Map<Id, Account> mapofAccount = New Map<Id, Account>([Select id, AllContact__c from Account where id in: SetOfAccountids]); 
     Account accountObj;
     Integer amount = 0;
     for(Contact con : Trigger.new){
         if(mapofAccount.containskey(con.Accountid)){
           accountObj = mapofAccount.get(con.Accountid);
           amount = amount + Integer.valueof(con.Secret_Key__c);           
           // mapofAccount.get(con.Accountid).AllContact__c = mapofAccount.get(con.Accountid).AllContact__c + mapofAccount.get(con.Accountid).AllContact__c + con.Secret_Key__c;
         }
         accountObj.AllContact__c += String.valueof(amount);
     }
     update accountObj; 
      
    // update mapofAccount.values();
     
    /*   for(Contact con : conlist){
            if(con.Related_Chechbox__c){
               Case caseObj = new Case();
               caseObj.Origin = 'Phone';
               caseObj.Contactid = con.Id;
               caseObj.Status = 'Open';
               insert caseObj; 
            }
       }
   
        
    for(Contact con : conlist){
        if(con.Related_Chechbox__c == false){
            setofNewids.add(con.id);
        }    
    }   
    
      List<Case> caseList = [select id, contactid from case where contactid in : setofNewids];
      delete caseList;   
    */       
   }                                                                   
}