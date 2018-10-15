using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using workoutApp.Models;

namespace workoutApp.Controllers
{
	[Route("api/workouts")]
	public class WorkoutsController : Controller
	{
		private readonly workoutAppContext _context;

		public WorkoutsController(workoutAppContext context)
		{
			_context = context;
		}

		// GET: Workouts
		[HttpGet]
		public async Task<IEnumerable<Workout>> GetAllWorkouts()
		{
			IList<Workout> workouts = await _context.Workout.ToListAsync<Workout>();

			return workouts;
		}

		// GET: Workouts/5
		[HttpGet("{DayId:int}")]
		public async Task<IEnumerable<Workout>> GetWorkoutsByDayId(int DayId)
		{
			IList<Workout> workouts = await _context.Workout
				.Where(m => m.DayId == DayId).ToListAsync<Workout>();

			return workouts;
		}

		[HttpGet("id/{DayId:int}")]
		public async Task<IEnumerable<Workout>> GetWorkoutsById(int Id)
		{
			IList<Workout> workouts = await _context.Workout
				.Where(m => m.Id == Id).ToListAsync<Workout>();

			return workouts;
		}

		[HttpGet("{Name}")]
		public async Task<IEnumerable<Workout>> GetWorkoutsByName(string Name)
		{
			IList<Workout> workouts = await _context.Workout
				.Where(m => m.Name == Name).ToListAsync<Workout>();

			return workouts;
		}

		//POST: Workouts/Create
		[HttpPost]
		public async Task<IActionResult> CreateWorkout([FromBody] Workout workout)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest();
			}

			_context.Workout.Add(workout);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetWorkoutsById", new { id = workout.Id }, workout);
		}

		[HttpPost("multiple")]
		public async Task<IActionResult> CreateMultipleWorkouts([FromBody] Workout[] workouts)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest();
			}

			_context.Workout.AddRange(workouts);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetAllWorkouts", workouts);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> EditWorkout(int id, [FromBody] Workout workout)
		{
			var w = _context.Workout.Find(id);

			if (!ModelState.IsValid)
			{
				return BadRequest();
			}

			w.Name = workout.Name;
			w.Note = workout.Note;
			w.Reps = workout.Reps;
			w.Sets = workout.Sets;
			w.Weight = workout.Weight;

			_context.Workout.Update(w);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetAllWorkouts", w);
		}

		[HttpDelete("{Id}")]
		public async Task<IActionResult> DeleteWorkout([FromRoute] int Id)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest();
			}

			var workout = await _context.Workout.SingleOrDefaultAsync(m => m.Id == Id);
			if (workout == null)
			{
				return NotFound();
			}

			_context.Workout.Remove(workout);
			await _context.SaveChangesAsync();
			return Ok(workout);
		}

		[HttpDelete("multiple/{DayId}")]
		public async Task<IActionResult> DeleteByDayId([FromRoute] int DayId)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest();
			}

			await _context.Workout.Where(m => m.DayId == DayId).ForEachAsync((x) => _context.Remove(x));

			await _context.SaveChangesAsync();

			return Ok();
		}

	}
}
