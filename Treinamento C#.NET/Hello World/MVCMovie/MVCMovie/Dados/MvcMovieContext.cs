using Microsoft.EntityFrameworkCore;
using MVCMovie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCMovie.Dados
{
    public class MvcMovieContext:DbContext
    {
        public MvcMovieContext (DbContextOptions<MvcMovieContext> options)
            :base(options)
        {

        }

        public DbSet<Movie> Movie { get; set; }
    }
}
