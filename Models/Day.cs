using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace workoutApp.Models
{
    public class Day
    {
		public int Id { get; set; }
		public string DayName { get; set; }
		[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
		public DateTime Date { get; set; }
		public int Week { get; set; }
	}
}
