import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeinfoComponent } from './employee/employeeinfo/employeeinfo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './ulogin/login/login.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { DefaultComponent } from './default/default.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { AuthGuard } from './auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { GetattendanceComponent } from './getattendance/getattendance.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewattendanceComponent } from './viewattendance/viewattendance.component';
import { AdminComponent } from './admin/admin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ActivitylogComponent } from './activitylog/activitylog.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'default', component: DefaultComponent,canActivate: [AuthGuard] , children: [
      { path: '', component: NewHomeComponent },
      { path: 'newhome', component: NewHomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeinfoComponent },
      { path: 'post', component: PostComponent },
      { path: 'product', component: ProductComponent },
      { path: 'about', component: AboutComponent },
      { path: 'task', component: TasklistComponent },
      { path: 'change', component: ChangepassComponent },
      { path: 'attendance', component: GetattendanceComponent },
      
      
    ]
  },

  {
    path: 'adminpage', component: AdminComponent,canActivate: [AuthGuard] , children: [
      { path: '', component: AdminDashboardComponent },
      
      { path: 'admin', component: AdminDashboardComponent },
      { path: 'attendance', component: GetattendanceComponent },
      { path: 'user', component: UserlistComponent },
      { path: 'adduser', component: AdduserComponent },
      { path: 'viewAttendance', component: ViewattendanceComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeinfoComponent },
      { path: 'post', component: PostComponent },
      { path: 'product', component: ProductComponent },
      { path: 'about', component: AboutComponent },
      { path: 'task', component: TasklistComponent },
      { path: 'change', component: ChangepassComponent },
      { path: 'activity', component: ActivitylogComponent },
      { path: 'report', component: ReportComponent },
    ]
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
