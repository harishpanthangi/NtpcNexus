using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NtpcNexus.API.Data;
using NtpcNexus.API.Models;

namespace NtpcNexus.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ApplicationsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Applications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Application>>> GetApplications()
        {
            return await _context.Applications.ToListAsync();
        }

        // GET: api/Applications/search?q=term
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Application>>> SearchApplications([FromQuery] string q)
        {
            if (string.IsNullOrWhiteSpace(q))
            {
                 return await _context.Applications.ToListAsync();
            }

            return await _context.Applications
                .Where(a => a.Name.Contains(q) || a.Description.Contains(q))
                .ToListAsync();
        }
    }
}
