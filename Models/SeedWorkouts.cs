using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace workoutApp.Models
{
	public class SeedWorkouts
	{
		public static void Initialize(IServiceProvider serviceProvIder)
		{
			using (var context = new workoutAppContext(
				  serviceProvIder.GetRequiredService<DbContextOptions<workoutAppContext>>()))
			{
				if (context.Workout.Any())
				{
					return;
				}

				context.Workout.AddRange(
					new Workout
					{
						Name = "Deadlift",
						Sets = 2,
						Reps = 12,
						Weight = 175,
						DayId = 1,
						Note = null
					},
					new Workout
					{
						Name = "Bench Press",
						Sets = 3,
						Reps = 8,
						Weight = 180,
						DayId = 1,
						Note = "Decrease Weight next time"
					},
					new Workout
					{
						Name = "Lat Pull Down",
						Sets = 3,
						Reps = 10,
						Weight = 30,
						DayId = 1,
						Note = null
					},
					new Workout
					{
						Name = "Leg Press",
						Sets = 2,
						Reps = 12,
						Weight = 41,
						DayId = 1,
						Note = null
					},
					new Workout
					{
						Name = "Lying Leg Curl",
						Sets = 4,
						Reps = 12,
						Weight = 35,
						DayId = 2,
						Note = "Need more Weight"
					},
					new Workout
					{
						Name = "Cruch",
						Sets = 2,
						Reps = 12,
						Weight = 175,
						DayId = 2,
						Note = null
					},
					new Workout
					{
						Name = "Deadlift",
						Sets = 2,
						Reps = 12,
						Weight = 175,
						DayId = 2,
						Note = null
					},
					new Workout
					{
						Name = "Bench Press",
						Sets = 3,
						Reps = 12,
						Weight = 150,
						DayId = 2,
						Note = null
					},
					new Workout
					{
						Name = "Lat Pull Down",
						Sets = 3,
						Reps = 10,
						Weight = 40,
						DayId = 3,
						Note = "Need more Weight"
					},
					new Workout
					{
						Name = "Leg Press",
						Sets = 2,
						Reps = 11,
						Weight = 45,
						DayId = 3,
						Note = null
					},
					new Workout
					{
						Name = "Lying Leg Curl",
						Sets = 4,
						Reps = 8,
						Weight = 25,
						DayId = 1,
						Note = "Less Sets, more Reps"
					},
					new Workout{
						Name = "Crunch",
						Sets = 2,
						Reps = 12,
						Weight = 0,
						DayId = 4
					},
					new Workout {Name = "Deadlift", Sets = 2, Reps = 12, Weight = 175, DayId = 4},
					new Workout {Name = "Bench Press", Sets = 3, Reps = 8, Weight = 150, DayId = 4},
					new Workout { Name = "Lat Pull Down", Sets = 3, Reps = 10, Weight = 55, DayId = 4},
					new Workout {  Name = "Leg Press", Sets = 2, Reps = 12, Weight = 45, DayId = 5},
					new Workout {  Name = "Lying Leg Curl", Sets = 3, Reps = 12, Weight = 40, DayId = 5},
					new Workout { Name = "Crunch", Sets = 2, Reps = 12, Weight = 0, DayId = 5},
					new Workout { Name = "Deadlift", Sets = 2, Reps = 12, Weight = 175, DayId = 6},
					new Workout { Name = "Bench Press", Sets = 3, Reps = 8, Weight = 150, DayId = 6},
					new Workout { Name = "Lat Pull Down", Sets = 3, Reps = 10, Weight = 55, DayId = 6},
					new Workout { Name = "Leg Press", Sets = 2, Reps = 12, Weight = 45, DayId = 7},
					new Workout { Name = "Lying Leg Curl", Sets = 4, Reps = 8, Weight = 35, DayId = 7},
					new Workout { Name = "Crunch", Sets = 2, Reps = 12, Weight = 0, DayId = 7},
					new Workout { Name = "Deadlift", Sets = 2, Reps = 12, Weight = 175, DayId = 7}

				);
				context.SaveChanges();
			}

		}

	}
}
