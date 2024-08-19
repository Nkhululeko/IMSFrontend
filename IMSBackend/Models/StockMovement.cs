using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace IMSBackend.Models
{
    public enum MovementType
    {
        Addition,
        Removal
    }
    public class StockMovement
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int InventoryId { get; set; }

        [ForeignKey("InventoryId")]
        public InventoryItem InventoryItem { get; set; }

        [Required]
        [Column(TypeName = "enum('addition', 'removal')")]
        public MovementType MovementType { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public DateTime MovementDate { get; set; }

        public string Reason { get; set; }
    }
}
