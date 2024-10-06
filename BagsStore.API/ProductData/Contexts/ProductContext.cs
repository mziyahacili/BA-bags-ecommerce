using ProductData.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductData.Contexts;

public class ProductContext : DbContext
{
    public ProductContext()
    {
    }

    public ProductContext(DbContextOptions<ProductContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderItem> OrderItems { get; set; }

    public virtual DbSet<OrderStatus> OrderStatuses { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Warehouse> Warehouses { get; set; }
    
    

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
    }
}