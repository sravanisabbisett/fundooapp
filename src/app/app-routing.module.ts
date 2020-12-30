import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NoteComponent } from './components/note/note.component';
import { RegisterComponent } from './components/register/register.component';
import {ResetpasswordComponent} from './components/resetpassword/resetpassword.component'

const routes: Routes = [{ path: 'register', component: RegisterComponent },
                        { path: '', component: LoginComponent },
                        { path: 'forgotPassword', component: ForgotPasswordComponent },
                        { path: 'reset', component: ResetpasswordComponent },
                        {
                          path: 'dashboard', component: DashboardComponent,
                      
                          children: [
                            {
                              path: '', redirectTo: 'note', pathMatch: 'full'
                            },
                      
                            { path: 'note', component: NoteComponent }
                          ]
                        },
                        {path:'dsplaynote',component:DisplaynoteComponent}
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
