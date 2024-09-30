namespace IT_Infrastructure_Manager__ITIM_.Models;

public class User
{
    public int Id { get; set; }              
    public string Username { get; set; }     
    public string PasswordHash { get; set; }  
    public string Email { get; set; }        
    public Role Role { get; set; }  
}
