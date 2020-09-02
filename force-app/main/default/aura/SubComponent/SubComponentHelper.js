({
    getAllAccounts : function(component, helper) {
        //Calling BaseJS method to call Aura Method
        callServer(component, "c.getAccounts", 
                   function(response){
                       if(response){
                           component.set("v.data", response);
                           //Calling showToast method of BaseJS 
                           showToast({
                               "title": "SUCCESS",
                               "type": "success",
                               "message": "Account details are loaded"
                           });
                       }
                   });
    },
})