using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMSBackend.Models
{
    [Table("stock_movements")]
    public class StockMovement
    {
        [Key]
        public int Id { get; set; }

        public int InventoryId { get; set; }

        [Required]
        [StringLength(20)]
        public string MovementType { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime MovementDate { get; set; }

        [StringLength(70)]
        public string Reason { get; set; }

        [ForeignKey("InventoryId")]
        public InventoryItem InventoryItem { get; set; }
    }
}

