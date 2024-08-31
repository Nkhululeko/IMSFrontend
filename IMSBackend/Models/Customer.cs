using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMSBackend.Models
{
    [Table("Customers")]
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }

        [Required]
        [StringLength(100)] // Maximum length of 100 characters
        [Column(TypeName = "nvarchar(100)")] // Specifies the column type in SQL Server
        public string Name { get; set; }

        [Required]
        [StringLength(100)]
        [EmailAddress] // Validates that the email address is in the correct format
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }

        [StringLength(20)]
        [Column(TypeName = "nvarchar(20)")]
        public string Phone { get; set; }

        [StringLength(200)] // Adjusted length for address if necessary
        [Column(TypeName = "nvarchar(200)")]
        public string Address { get; set; }

        [Required]
        [Column(TypeName = "datetime2")] // Specifies the column type in SQL Server
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Default value

        // Navigation property for orders
        public ICollection<Order> Orders { get; set; } = new List<Order>(); // Initializes to avoid null reference
    }
}
