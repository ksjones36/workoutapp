using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using workoutApp.Models;

namespace workoutApp.Controllers
{
	[Route("api/days")]
	public class DaysController: Controller
    {
		private readonly workoutAppContext _context;

		public DaysController (workoutAppContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<IEnumerable<Day>> GetAllDays()
		{
			IList<Day> days = await _context.Day.ToListAsync();

			return days;
		}

		[HttpGet("{week:int}")]
		public async Task<IEnumerable<Day>> GetDaysByWeek(int week)
		{
			IList<Day> days = await _context.Day
				.Where(m => m.Week == week).ToListAsync<Day>();

			return days;
		}

		[HttpGet("id/{id:int}")]
		public async Task<IEnumerable<Day>> GetDayById(int id)
		{
			IList<Day> day = await _context.Day
				.Where(m => m.Id == id).ToListAsync<Day>();

			return day;
		}

		[HttpGet("weeks")]
		public async Task<IEnumerable<int>> GetWeeks()
		{
			return await _context.Day.Select(x => x.Week ).OrderByDescending(x => x).Distinct().ToListAsync();
		}

		[HttpPost]
		public async Task<IActionResult> CreateDay([FromBody] Day day)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest();
			}

			_context.Day.Add(day);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetDayById", new { id = day.Id }, day);
		}

		[HttpDelete("{Id}")]
		public async Task<IActionResult> DeleteDay([FromRoute] int Id)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest();
			}

			var day = await _context.Day.SingleOrDefaultAsync(m => m.Id == Id);
			if (day == null)
			{
				return NotFound();
			}

			_context.Day.Remove(day);
			await _context.SaveChangesAsync();
			return Ok(day);
		}
	}
}
