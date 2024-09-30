namespace IT_Infrastructure_Manager__ITIM_.Models;

public class Server
{
    public int Id { get; set; }               
    public string Name { get; set; }         
    public string IPAddress { get; set; }      
    public string OperatingSystem { get; set; } 
    public string Status { get; set; }     
    public DateTime CreatedAt { get; set; }  
}
