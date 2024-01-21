import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TypeVehicle } from '../../models/typeVehicle';

@Component({
  selector: 'app-type-vehicle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './type-vehicle.component.html',
  styleUrl: './type-vehicle.component.scss'
})
export class TypeVehicleComponent implements OnInit {
 
  typeVehicleList: TypeVehicle[]= [];

  @ViewChild('formulario')
  formulario!: NgForm;

  ngOnInit(): void {
    this.typeVehicleList = localStorage.getItem('type') ? JSON.parse(localStorage.getItem('type')!) : [];
  }
  

  onSubmit(formValue: TypeVehicle){
    this.typeVehicleList.push(formValue);
    localStorage.setItem('type', JSON.stringify(this.typeVehicleList));
  }

  resetForm() {
    this.formulario.resetForm();
  }
}
