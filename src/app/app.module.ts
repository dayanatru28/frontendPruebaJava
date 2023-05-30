import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AdicionarComponent } from './components/adicionar/adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturasComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
