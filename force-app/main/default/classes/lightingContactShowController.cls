public class lightingContactShowController{

  public static List<WrapperContact> listofWrapperContact;
  
  public lightingContactShowController(){
    listofWrapperContact = new List<WrapperContact>();
  }
  
  @auraenabled
  public static void onSelectedRecord(List<Contact> listofSelectedRecords){
  
  }
 
  // inner wrapperclass.
  public class WrapperContact{
     
     public Boolean isSelected;
     public Contact contactRecord;
     
     public WrapperContact(Contact contactRecord, Boolean isSelected){
       this.isSelected = isSelected;       
       this.contactRecord = contactRecord;
     }
    
  }   
 
}