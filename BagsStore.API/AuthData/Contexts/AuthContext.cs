using AuthData.Models;

namespace AuthData.Contexts;
using Microsoft.EntityFrameworkCore;


public class AuthContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<AppRole> AppRoles { get; set; }
    public DbSet<UserRole> UserRoles { get; set; }

    public AuthContext()
    {
    }

    public AuthContext(DbContextOptions<AuthContext> options) : base(options)
    {
    }
    
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var userEntity = modelBuilder.Entity<User>();
        var appRoleEntity = modelBuilder.Entity<AppRole>();
        var userRoleEntity = modelBuilder.Entity<UserRole>();

        userEntity.HasKey(u => u.Id);  

        userEntity.Property(u => u.Username)
            .IsRequired();
        userEntity.HasIndex(u => u.Username)
            .IsUnique();

        userEntity.Property(u => u.Email)
            .IsRequired();
        userEntity.HasIndex(u => u.Email)
            .IsUnique();

        userEntity.Property(u => u.Password)
            .IsRequired();


        appRoleEntity.HasKey(a => a.Id);
        appRoleEntity.Property(a => a.Name).IsRequired();
        appRoleEntity.HasIndex(a => a.Name).IsUnique();

        userRoleEntity.HasKey(u => u.Id);

        userRoleEntity
            .HasOne(ur => ur.AppRole)
            .WithMany(ar => ar.UserRoles)  
            .HasForeignKey(ur => ur.RoleId) 
            .OnDelete(DeleteBehavior.Cascade); 

        userRoleEntity
            .HasOne(ur => ur.User)
            .WithMany(u => u.UserRoles)  
            .HasForeignKey(ur => ur.UserId) 
            .OnDelete(DeleteBehavior.Cascade);  
    }
    

}