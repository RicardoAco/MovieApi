using MovieApi.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApi.Models
{
    public class DbInitializer
    {
        public static void Initialize(MoviesDbContext context)
        {
            context.Database.EnsureCreated();
            //if (!context.Movies.Any())
            //{
            //    var movie = new Movie()
            //    {
            //        Title = "The Hobbit",
            //        Director = "Peter Jackson",
            //        Description = "The Hobbit is a film series consisting of three high fantasy adventure films directed by Peter Jackson.",
            //        Genre = "Fantasy Fiction",
            //        Year = 2012
            //    };

            //    context.Movies.Add(movie);
            //    context.SaveChanges();
            //}
        }
    }
}
