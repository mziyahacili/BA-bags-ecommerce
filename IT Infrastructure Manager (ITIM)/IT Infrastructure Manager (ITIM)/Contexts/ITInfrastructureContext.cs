namespace IT_Infrastructure_Manager__ITIM_.Contexts;

using IT_Infrastructure_Manager__ITIM_.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

public class ITInfrastructureContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<Server> Servers { get; set; }
    public DbSet<NetworkDevice> NetworkDevices { get; set; }
    public DbSet<Incident> Incidents { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<MaintenanceTask> MaintenanceTasks { get; set; }

    public ITInfrastructureContext(DbContextOptions<ITInfrastructureContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Настройка отношений между моделями, если необходимо
        modelBuilder.Entity<User>()
            .HasMany(u => u.Incidents)
            .WithOne()
            .HasForeignKey(i => i.UserId);
        // Добавьте дополнительные настройки по необходимости
    }
}
