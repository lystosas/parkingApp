import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Parameters } from '../../models/parameters';

@Component({
  selector: 'app-parameters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parameters.component.html',
  styleUrl: './parameters.component.scss'
})
export class ParametersComponent implements OnInit{
  parameter: Parameters[] = [];
  ngOnInit(): void {
    this.parameter = localStorage.getItem('parameters') ? JSON.parse(localStorage.getItem('parameters')!) : [];
  }

  


  onSubmit(parameter: Parameters){
    this.parameter.push(parameter);
    localStorage.setItem('parameters', JSON.stringify(parameter));
  }

}
