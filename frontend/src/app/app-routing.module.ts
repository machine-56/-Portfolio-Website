import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';
import { SampleComponent } from './sample/sample.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'', component:PageComponent},
  {path:'about', component:AboutComponent},
  {path:'sample', component:SampleComponent},
  {path:'contact', component:ContactComponent},
  {path:'service', component:ServiceComponent}
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
