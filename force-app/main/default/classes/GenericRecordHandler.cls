/**
 * Controller class for GenericRecordHandler Lightning Component
 * Contains method to retrieve objects and records
 * */
public class GenericRecordHandler {
    
    //Object wrapper class having object properties like name, label and isCustom
    public class ObjectWrapper{
        @AuraEnabled public String objectName;
        @AuraEnabled public String objectLabel;
        @AuraEnabled public Boolean isCustom;
        ObjectWrapper(String objectName, String objectLabel, Boolean isCustom){
            this.objectName = objectName;
            this.objectLabel = objectLabel;
            this.isCustom = isCustom;
        }
    }
}