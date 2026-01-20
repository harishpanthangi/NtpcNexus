using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NtpcNexus.API.Models
{
    public class UserSubmission
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string SubmissionType { get; set; } = string.Empty;

        public int? ProjectId { get; set; }

        [ForeignKey("ProjectId")]
        public Application? Application { get; set; }

        [StringLength(255)]
        public string? Title { get; set; }

        [Required]
        public string Description { get; set; } = string.Empty;

        [StringLength(50)]
        public string? Priority { get; set; }

        [StringLength(50)]
        public string? Status { get; set; } = "Pending";

        [StringLength(100)]
        public string? SubmittedBy { get; set; }

        [StringLength(100)]
        public string? Department { get; set; }

        public string? Beneficiaries { get; set; }

        public string? References { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
