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
        
        // POST: api/UserSubmissions
        [HttpPost]
        public async Task<ActionResult<UserSubmission>> PostUserSubmission(UserSubmission userSubmission)
        {
            _context.UserSubmissions.Add(userSubmission);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecent", new { id = userSubmission.Id }, userSubmission);
        }
    }
}
