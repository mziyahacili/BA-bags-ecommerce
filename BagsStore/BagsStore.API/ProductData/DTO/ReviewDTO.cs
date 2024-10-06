namespace ProductData.DTO;

public class ReviewDTO
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public string UserName { get; set; }
    public string Content { get; set; }
    public int Rating { get; set; }
}