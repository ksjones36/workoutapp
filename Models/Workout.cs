using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace workoutApp.Models
{
    public class Workout
    {
      public int Id { get; set; }
      public string Name { get; set; }
      public int Sets { get; set; }
      public int Reps { get; set; }
      public int Weight { get; set; }
      public int DayId { get; set; }
      public string Note { get; set; }
    }
}
