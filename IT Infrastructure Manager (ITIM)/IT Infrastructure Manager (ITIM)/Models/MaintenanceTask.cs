namespace IT_Infrastructure_Manager__ITIM_.Models;


public class MaintenanceTask
{
    public int Id { get; set; }              
    public string Description { get; set; }    
    public DateTime DueDate { get; set; }      
    public bool IsCompleted { get; set; }      
}
