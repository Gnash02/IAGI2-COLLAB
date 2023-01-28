import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ProductsComponent } from './Pages/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { UpdateuserComponent } from './Pages/updateuser/updateuser.component';
import { AboutComponent } from './Pages/about/about.component';


const appRoutes: Routes = [
  {path: 'Products' , component:ProductsComponent},
  {path: 'Home' , component:HomeComponent},
  {path: 'Register' , component:RegisterComponent},
  {path: 'Login' , component:LoginComponent},
  {path : 'UpdateUser' , component:UpdateuserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
