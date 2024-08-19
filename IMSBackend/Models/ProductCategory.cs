using System.ComponentModel.DataAnnotations;

namespace IMSBackend.Models
{
    public class ProductCategory
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string CategoryName { get; set; }

        // Navigation property (optional)
        public ICollection<InventoryItem> InventoryItems { get; set; }
    }
}
