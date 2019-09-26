using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Data;
using MovieApi.Models;

namespace MovieApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class MoviesController : ControllerBase
    {
        private MoviesDbContext _moviesDbContext;

        public MoviesController(MoviesDbContext moviesDbContext)
        {
            _moviesDbContext = moviesDbContext;
            
        }



        // GET: api/Movies
        //[Authorize]
        [HttpGet]
        public IActionResult Get(String sort)
        {
            IQueryable<Movie> movies;

            switch (sort)
            {
                case "desc":
                    movies = _moviesDbContext.Movies.OrderByDescending(q => q.Year);
                    break;
                case "asc":
                    movies = _moviesDbContext.Movies.OrderBy(q => q.Year);
                    break;
                default:
                    movies = _moviesDbContext.Movies;
                    break;
                
            }
            
            return Ok(movies);
            
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult FilterYear(int filterYear)
        {
            var movies = _moviesDbContext.Movies;
            var theMoviesSortedByYear = movies.Where(m => m.Year == filterYear).OrderBy(m => m.Title);

            return Ok(theMoviesSortedByYear);
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult PagingMovie(int? pageNumber, int? pageSize)
        {
            var movies = _moviesDbContext.Movies;

            var currentPageNumber = pageNumber ?? 1;
            var currentPageSize = pageSize ?? 5;

            return Ok(movies.Skip((currentPageNumber - 1) * currentPageSize).Take(currentPageSize));
        }

        // GET: api/Movies/5
        [HttpGet("{id}", Name = "Get")]
        public Movie Get(int id)
        {
            var quote =_moviesDbContext.Movies.Find(id);
            return quote;
        }

        // api/Movies/Test/1
        [HttpGet("[action]/{id}")]
        public int Test(int id)
        {
            return id;
        }
        // POST: api/Movies
        [Authorize]
        [HttpPost]
        public IActionResult Post([FromBody] Movie movie)
        {
            _moviesDbContext.Movies.Add(movie);
            _moviesDbContext.SaveChanges();
            
            return StatusCode(StatusCodes.Status201Created);
            
        }

        // PUT: api/Quotes/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Movie movie)
        {
           var entity = _moviesDbContext.Movies.Find(id);
            if (entity == null)
            {
                return NotFound("No movie found against this Id...");
            }
            else
            {
                entity.Title = movie.Title;
                entity.Director = movie.Director;
                entity.Description = movie.Description;
                entity.Genre = movie.Genre;
                entity.Year = movie.Year;
                _moviesDbContext.SaveChanges();
                return Ok("Movie updated succesfully!");
            }
            
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var movie =  _moviesDbContext.Movies.Find(id);
            if (movie == null)
            {
                return NotFound("No movie found against this Id...");
            }
            else
            {
                _moviesDbContext.Remove(movie);
                _moviesDbContext.SaveChanges();
                return Ok("Movie is deleted succesfully!");
            }
            
        }
    }
}
