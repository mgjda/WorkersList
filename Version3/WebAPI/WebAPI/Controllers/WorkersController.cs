using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkersController : ControllerBase
    {
        //private static List<Worker> WorkersCollection = new List<Worker>
        //{
        //    new Worker { Id= 1, Avatar="assets\\avatar_1.png", Name= "Katarzyna", Surname= "Robak", Job= "Obsługa klienta" },
        //    new Worker { Id= 2, Avatar="assets\\avatar_2.png", Name= "Daniel", Surname= "Ryba", Job= "Sprzedawca" },
        //    new Worker { Id= 3, Avatar="assets\\avatar_3.png", Name= "Henryk", Surname= "Kania", Job= "Dyrektor Finansowy" },
        //    new Worker { Id= 4, Avatar="assets\\avatar_4.png", Name= "Laura", Surname= "Ramka", Job= "HRówka" },
        //    new Worker { Id= 5, Avatar="assets\\avatar_5.png", Name= "Grzegorz", Surname= "Pudełko", Job= "Kelner" }
        //};
        private DatabaseContext _context { get; set; }

        public WorkersController(DatabaseContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Worker> Get()
        {
            return _context.Workers.ToList();
        }
        [HttpGet("{id}")]
        public Worker GetOne(int id)
        {
            return _context.Workers.SingleOrDefault(m => m.Id == id);
        }
        [HttpPost]
        public bool Create([FromBody] Worker worker)
        {
            _context.Workers.Add(worker);
            _context.SaveChanges();
            return true;
        }
        [HttpPut("{id}")]
        public bool Update(int id, [FromBody] Worker worker)
        {
            _context.Workers.Update(worker);
            _context.SaveChanges();
            return true;
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //return WorkersCollection.Remove(WorkersCollection.SingleOrDefault(m => m.Id == id));
            var student = _context.Workers.FirstOrDefault(t => t.Id == id);
            if (student != null)
            {
                _context.Workers.Remove(student);
                _context.SaveChanges();
            }
        }
    }
}
