public class AccountController {
    
    public static List<Account> listofAccounts{get;set;}
    
    public AccountController(){
      listofAccounts = new List<Account>();
    }
    // modified by sushant kumar 
    public static void showListofAccounts(){
      listofAccounts = [Select id, Name,Industry from Account limit 10];     
    } 
}