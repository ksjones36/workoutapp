using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace workoutApp.Models
{
    public class SeedDays
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
          using(var context = new workoutAppContext(
				serviceProvider.GetRequiredService<DbContextOptions<workoutAppContext>>()))
			{
				Console.WriteLine("Here");
				if(context.Day.Any())
				{
					return;
				}

				context.Day.AddRange(
					new Day
					{
						Id = 1,
						DayName = "Thursday",
						Date = DateTime.Parse("2018-06-28"),
						Week = 1
					},
					new Day
					{
						Id = 2,
						DayName = "Saturday",
						Date = DateTime.Parse("2018-06-30"),
						Week = 1
					},
					new Day
					{
						Id = 3,
						DayName = "Monday",
						Date = DateTime.Parse("2018-07-02"),
						Week = 2
					},
					new Day
					{
						Id = 4,
						DayName = "Wednesday",
						Date = DateTime.Parse("2018-07-04"),
						Week = 2
					},
					new Day
					{
						Id = 5,
						DayName = "Friday",
						Date = DateTime.Parse("2018-07-06"),
						Week = 2
					},
					new Day
					{
						Id = 6,
						DayName = "Monday",
						Date = DateTime.Parse("2018-07-09"),
						Week = 3
					},
					new Day
					{
						Id = 7,
						DayName = "Wednesday",
						Date = DateTime.Parse("2018-07-11"),
						Week = 3
					}
				);
				context.SaveChanges();
			}

        }
        
    }
}
