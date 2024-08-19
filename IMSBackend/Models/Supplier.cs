using System.ComponentModel.DataAnnotations;

namespace IMSBackend.Models
{
    public class Supplier
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string CompanyName { get; set; }

        [Required]
        [StringLength(255)]
        public string ContactEmail { get; set; }

        [StringLength(15)]
        public string ContactPhone { get; set; }

        [StringLength(500)]
        public string Address { get; set; }

        // Navigation property (optional)
        public ICollection<InventoryItem> SuppliedItems { get; set; }
    }
}
