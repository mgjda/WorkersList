using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkersController : ControllerBase
    {
        private DatabaseContext _context { get; set; }

        public WorkersController(DatabaseContext context)
        {
            _context = context;
        }
        [HttpGet, Authorize]
        public IEnumerable<Worker> Get()
        {
            return _context.Workers.ToList();
        }
        [HttpGet("{id}"), Authorize]
        public Worker GetOne(int id)
        {
            return _context.Workers.SingleOrDefault(m => m.Id == id);
        }
        [HttpPost, Authorize(Roles = "admin")]
        public bool Create([FromBody] Worker worker)
        {
            _context.Workers.Add(worker);
            _context.SaveChanges();
            return true;
        }
        [HttpPut("{id}"), Authorize(Roles = "admin")]
        public bool Update(int id, [FromBody] Worker worker)
        {
            _context.Workers.Update(worker);
            _context.SaveChanges();
            return true;
        }
        [HttpDelete("{id}"), Authorize(Roles = "admin")]
        public void Delete(int id)
        {
            var student = _context.Workers.FirstOrDefault(t => t.Id == id);
            if (student != null)
            {
                _context.Workers.Remove(student);
                _context.SaveChanges();
            }
        }
    }
}
