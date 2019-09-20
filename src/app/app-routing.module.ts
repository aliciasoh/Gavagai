import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
