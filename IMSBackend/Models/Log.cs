using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMSBackend.Models
{
    [Table("logs")]
    public class Log
    {
        [Key]
        public int LogId { get; set; }

        [Required]
        [StringLength(255)]
        public string Action { get; set; }

        public int? UserId { get; set; }

        [Column(TypeName = "time")]
        public TimeSpan Timestamp { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
