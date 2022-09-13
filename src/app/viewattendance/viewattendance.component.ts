import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.scss']
})
export class ViewattendanceComponent implements OnInit {
  allPerson: any = [];
  fileName= 'ExcelSheet.xlsx';
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.showUser();
  }

  showUser() {
    this.api.getTypeRequest('attendance/show').subscribe((res: any) => {

      this.allPerson = res.data;
      console.log(this.allPerson)
    })

  }

  //export excel method
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
