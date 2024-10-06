﻿namespace ProductData.Models;

public class Product
{
    public int Id { get; set; }  
    public string Name { get; set; } 
    public string Description { get; set; }  
    public decimal Price { get; set; }  
    public string ImageUrl { get; set; } 
    public DateTime CreatedAt { get; set; }  
    public List<Review> Reviews { get; set; }  
}