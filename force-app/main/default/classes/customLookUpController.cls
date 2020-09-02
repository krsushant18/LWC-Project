public class customLookUpController{

@auraEnabled
public static List<Sobject> fetchRecords(String searchKeyword, String objectName){
    String searchStr = searchKeyword + '%';
    List<Sobject> returnObjects = new List<Sobject>();    
    
    String strQuery =  'select id, Name from ' +objectName + ' where Name LIKE: searchStr order by createdDate DESC limit 5';
    
    List<Sobject> lstOfobjects = Database.query(strQuery);
    for(Sobject obj : lstOfobjects){
        returnObjects.add(obj);
    }
    
    System.debug('returnObjects--'+ returnObjects);
    return returnObjects;
}

}