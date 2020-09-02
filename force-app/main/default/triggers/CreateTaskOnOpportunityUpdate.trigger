trigger CreateTaskOnOpportunityUpdate on Opportunity (after update) {

   List<Task> tasksToInsert = New List<Task>();
   if(trigger.isUpdate && trigger.isAfter){
     for(Opportunity opp : Trigger.New){
          Task taskObj = New Task();
          taskObj.Subject = 'Call';
          taskObj.Priority = 'Normal';
          taskObj.WhatId = opp.Id;
          taskObj.Status = 'Not Started';
          tasksToInsert.add(taskObj);                    
     }
     insert tasksToInsert;
   }

}