namespace IT_Infrastructure_Manager__ITIM_.Models;

public class Incident
{
    public int Id { get; set; }              
    public string Description { get; set; }   
    public DateTime ReportedAt { get; set; }  
    public string Status { get; set; }     
    public int UserId { get; set; }           
}
