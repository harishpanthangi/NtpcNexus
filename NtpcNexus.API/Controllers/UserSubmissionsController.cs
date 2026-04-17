using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NtpcNexus.API.Data;
using NtpcNexus.API.Models;

namespace NtpcNexus.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubmissionsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserSubmissionsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/UserSubmissions/recent
        [HttpGet("recent")]
        public async Task<ActionResult<IEnumerable<UserSubmission>>> GetRecent()
        {
            // Fetch top 10 most recent submissions
            return await _context.UserSubmissions
                .OrderByDescending(u => u.CreatedAt)
                .Take(10)
                .ToListAsync();
        }

        // GET: api/UserSubmissions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserSubmission>>> GetAll()
        {
            return await _context.UserSubmissions
                .Include(u => u.Application) // Include Application details for the dashboard
                .OrderByDescending(u => u.CreatedAt)
                .ToListAsync();
        }
        
        // POST: api/UserSubmissions
        [HttpPost]
        public async Task<ActionResult<UserSubmission>> PostUserSubmission(UserSubmission userSubmission)
        {
            userSubmission.SubmittedBy = "adm";
            _context.UserSubmissions.Add(userSubmission);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecent", new { id = userSubmission.Id }, userSubmission);
        }
    }
}
