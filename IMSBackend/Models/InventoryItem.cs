using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMSBackend.Models
{
    public class InventoryItem
     {
            [Key]
            public int Id { get; set; }

            [Required]
            [StringLength(100)]
            public string PartName { get; set; }

            [Required]
            [StringLength(50)]
            public string PartNumber { get; set; }

            [Required]
            public int Quantity { get; set; }

            [Required]
            [Column(TypeName = "decimal(18,2)")]
            public decimal Price { get; set; }

            [Required]
            public int SupplierId { get; set; }

            [ForeignKey("SupplierId")]
            public Supplier Supplier { get; set; }

            [Required]
            public int CategoryId { get; set; }

            [ForeignKey("CategoryId")]
            public ProductCategory Category { get; set; }

            [Required]
            public DateTime CreatedAt { get; set; }

          
    }
}

