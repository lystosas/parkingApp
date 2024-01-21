import { Routes } from '@angular/router';
import { ParkingComponent } from './components/parking/parking.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { RecordComponent } from './components/record/record.component';
import { TypeVehicleComponent } from './components/type-vehicle/type-vehicle.component';

export const routes: Routes = [
    {path: '', component: ParkingComponent},
    {path: 'parameters', component: ParametersComponent},
    {path: 'record', component: RecordComponent},
    {path: 'typeVehicle', component: TypeVehicleComponent}
];
