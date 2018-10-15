using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace workoutApp.Models
{
    public class workoutAppContext : DbContext
    {
        public workoutAppContext (DbContextOptions<workoutAppContext> options)
            : base(options)
        {
        }

        public DbSet<Workout> Workout { get; set; }
        public DbSet<Day> Day { get; set; }
    }
}
