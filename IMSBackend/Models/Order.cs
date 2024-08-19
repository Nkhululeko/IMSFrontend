using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace IMSBackend.Models
{
    public enum OrderStatus
    {
        Pending,
        Completed,
        Canceled
    }
    public class Order
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }

        [Required]
        public DateTime OrderDate { get; set; }

        [Required]
        [Column(TypeName = "enum('pending', 'completed', 'canceled')")]
        public OrderStatus Status { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Total { get; set; }

        // Navigation property for order details
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
