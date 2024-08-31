using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using IMSBackend.Models;

namespace IMSBackend.Models
{
    [Table("categories")]
    public class ProductCategory
    {
        [Key]
        public int CategoryId { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(50)]
        public string Description { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        // Navigation property for inventory items
        public ICollection<InventoryItem> InventoryItems { get; set; }
    }
}
