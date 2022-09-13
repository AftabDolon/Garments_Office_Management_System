import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as XLSX from 'xlsx';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generate } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  allPerson: any = [];
  fileName= 'ExcelSheet.xlsx';
  success:boolean = false;

 
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.showUser();
    

  }

  showUser() {
    this.api.getTypeRequest('attendance/showUser').subscribe((res: any) => {

      this.allPerson = res.data;
      
    })
   
  }

  generate(){
    this.success = true; 
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
