using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using IMSBackend.Data;
using IMSBackend.Models;

namespace IMSBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockMovementsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public StockMovementsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: StockMovements
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.StockMovements.Include(s => s.InventoryItem);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: StockMovements/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var stockMovement = await _context.StockMovements
                .Include(s => s.InventoryItem)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (stockMovement == null)
            {
                return NotFound();
            }

            return View(stockMovement);
        }

        // GET: StockMovements/Create
        public IActionResult Create()
        {
            ViewData["InventoryId"] = new SelectList(_context.InventoryItems, "Id", "PartName");
            return View();
        }

        // POST: StockMovements/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,InventoryId,MovementType,Quantity,MovementDate,Reason")] StockMovement stockMovement)
        {
            if (ModelState.IsValid)
            {
                _context.Add(stockMovement);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["InventoryId"] = new SelectList(_context.InventoryItems, "Id", "PartName", stockMovement.InventoryId);
            return View(stockMovement);
        }

        // GET: StockMovements/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var stockMovement = await _context.StockMovements.FindAsync(id);
            if (stockMovement == null)
            {
                return NotFound();
            }
            ViewData["InventoryId"] = new SelectList(_context.InventoryItems, "Id", "PartName", stockMovement.InventoryId);
            return View(stockMovement);
        }

        // POST: StockMovements/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,InventoryId,MovementType,Quantity,MovementDate,Reason")] StockMovement stockMovement)
        {
            if (id != stockMovement.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(stockMovement);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!StockMovementExists(stockMovement.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["InventoryId"] = new SelectList(_context.InventoryItems, "Id", "PartName", stockMovement.InventoryId);
            return View(stockMovement);
        }

        // GET: StockMovements/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var stockMovement = await _context.StockMovements
                .Include(s => s.InventoryItem)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (stockMovement == null)
            {
                return NotFound();
            }

            return View(stockMovement);
        }

        // POST: StockMovements/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var stockMovement = await _context.StockMovements.FindAsync(id);
            if (stockMovement != null)
            {
                _context.StockMovements.Remove(stockMovement);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool StockMovementExists(int id)
        {
            return _context.StockMovements.Any(e => e.Id == id);
        }
    }
}
