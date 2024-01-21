import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Records } from '../../models/record';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss'
})
export class RecordComponent implements OnInit{
  
  
  recordList: Records[] = [];
  fechaHoraActual: string = new Date().toLocaleString();
  typeList: any[] = [];

  @ViewChild('formulario')
  formulario!: NgForm;

  ngOnInit(): void {
    this.recordList = localStorage.getItem('record') ? JSON.parse(localStorage.getItem('record')!) : [];
    this.typeList = localStorage.getItem('type') ? JSON.parse(localStorage.getItem('type')!) : [];  }

  onSubmit(formValue: Records){
    console.log(formValue);
    this.recordList.push(formValue);
    localStorage.setItem('record', JSON.stringify(this.recordList));
  }

  checkIn(){
    // con este metodo intente capturar el id seleccionado para poderlo trabajar y colocar la hora y el calculo de precio
    const table = document.querySelector('#table-record');
    if (table !== null){
      const rows = table.querySelectorAll('tr');

      rows.forEach(row => {
        console.log(row);
      });
    }
    
    




    this.fechaHoraActual;
    console.log(this.fechaHoraActual)
  }

  resetForm() {
    this.formulario.resetForm();
    this.fechaHoraActual = new Date().toLocaleString();
  }
}
