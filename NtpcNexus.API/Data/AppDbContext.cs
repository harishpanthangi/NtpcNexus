using Microsoft.EntityFrameworkCore;
using NtpcNexus.API.Models;

namespace NtpcNexus.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Application> Applications { get; set; }
        public DbSet<UserSubmission> UserSubmissions { get; set; }
    }
}
