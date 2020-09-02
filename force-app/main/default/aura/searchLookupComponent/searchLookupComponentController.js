({
	selectRecord : function(component, event, helper) {
        var getselectedRecord = component.get("v.oRecord");
        var callEvent = component.getEvent("SelectedRecordEvent");
        callEvent.setParams({"recordByEvent" : getselectedRecord});		
        component.fire();
	}
})