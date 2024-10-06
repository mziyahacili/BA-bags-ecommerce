using ProductData.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductData.Contexts;

public class ProductContext : DbContext
{
    public ProductContext(DbContextOptions<ProductContext> options) 
        : base(options)
    {
        
    }

    public DbSet<Product> Products { get; set; }

    public DbSet<Review> Reviews { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>() 
            .HasMany(b => b.Reviews)
            .WithOne(r => r.Product)
            .HasForeignKey(r => r.ProductId)
            .OnDelete(DeleteBehavior.Cascade); 

        base.OnModelCreating(modelBuilder);
    }
}