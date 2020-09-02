public class THS_Response_Wrapper {
    String message{get;set;}
    Boolean isSuccess{get;set;}
    
    public THS_Response_Wrapper(String message , Boolean isSuccess)
    {
        this.message = message;
        this.isSuccess = isSuccess;
    }
}