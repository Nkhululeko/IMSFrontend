using System.ComponentModel.DataAnnotations;

namespace IMSBackend.Models
{
    public class Log
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Action { get; set; }

        [Required]
        public int UserId { get; set; }

        public DateTime Timestamp { get; set; }

        // Navigation property (optional)
        public User User { get; set; }
    }
}
