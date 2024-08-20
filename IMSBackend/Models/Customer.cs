using System.ComponentModel.DataAnnotations;

namespace IMSBackend.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [StringLength(100)]
        public string Email { get; set; }

        [StringLength(20)]
        public string Phone { get; set; }

        public string Address { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        // Navigation property for orders
        public ICollection<Order> Orders { get; set; }
    }
}
