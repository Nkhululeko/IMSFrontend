import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  displayedColumns: string[] = ['id', 'name', 'status']; // Define the columns
  dataSource = ELEMENT_DATA;  // Data source for the table

  // Method to generate PDF
  generatePdf(): void {
    const data = document.getElementById('reportContent');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const heightLeft = imgHeight;
        const doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        doc.save('report.pdf');
      });
    }
  }
}

// Example data; replace with actual data
const ELEMENT_DATA: any[] = [
  { id: 1, name: 'John Doe', status: 'Active' },
  { id: 2, name: 'Jane Smith', status: 'Inactive' }
];

