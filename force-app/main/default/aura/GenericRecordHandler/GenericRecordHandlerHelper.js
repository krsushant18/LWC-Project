({
    
    /**
     * This function gets object list
     * */
	getObjectList : function(component) {
        var modalBody;
		var action = component.get("c.getObjects");
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {                        
                   component.find('overlayLib').showCustomModal({
                       header: "Application Confirmation",
                       body: modalBody, 
                       showCloseButton: true,
                       cssClass: "mymodal",
                       closeCallback: function() {
                           alert('Objects are Loaded!');
                       }
                   })
                component.set("v.allObjects", response.getReturnValue());
                component.set("v.filteredObjects", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	},
    
    /**
     * This function gets record list
     * */
    getRecordList : function(component, selectedObject) {
        var action = component.get("c.getRecords");
        action.setParams({
            'objectName' : selectedObject
        });
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.records", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})