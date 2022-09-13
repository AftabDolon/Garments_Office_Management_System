import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PostComponent } from './post/post.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeinfoComponent } from './employee/employeeinfo/employeeinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostlistComponent } from './post/postlist/postlist.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {TextFieldModule} from '@angular/cdk/text-field';
import { PostsService } from './post/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './ulogin/login/login.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { DefaultComponent } from './default/default.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { GetattendanceComponent } from './getattendance/getattendance.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewattendanceComponent } from './viewattendance/viewattendance.component';
import { AdminComponent } from './admin/admin.component';
import { AdminsidenavComponent } from './adminsidenav/adminsidenav.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ReportComponent } from './report/report.component';
import { ActivitylogComponent } from './activitylog/activitylog.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    PostComponent,
    EmployeeComponent,
    EmployeeinfoComponent,
    PostlistComponent,
    LoginComponent,
    ProductComponent,
    AboutComponent,
    NewHomeComponent,
    DefaultComponent,
    TasklistComponent,
    AdminDashboardComponent,
    ChangepassComponent,
    GetattendanceComponent,
    UserlistComponent,
    ViewattendanceComponent,
    AdminComponent,
    AdminsidenavComponent,
    AdduserComponent,
    ReportComponent,
    ActivitylogComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    DragDropModule,
    TextFieldModule
    
  ],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
