import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//componentes
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TablaComponent } from './tabla/tabla.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';



const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch:'full' },
  { path: 'inicio', component:AppComponent},


  // { path: 'inicio', component: SlidersComponent},
  // { path: 'inicio', component: TarjetasComponent},
  // {path: 'inicio', component: TablaComponent},
  // { path: 'inicio', component: FooterComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
