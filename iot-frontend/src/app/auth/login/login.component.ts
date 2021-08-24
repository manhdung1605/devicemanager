import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isLogined = false;

  // submitForm(): void {
  //   for (const i in this.validateForm.controls) {
  //     if (this.validateForm.controls.hasOwnProperty(i)) {
  //       this.validateForm.controls[i].markAsDirty();
  //       this.validateForm.controls[i].updateValueAndValidity();
  //     }
  //   }
  // }

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [true]
    });
    // this.api.jwtUserToken.subscribe(token => {
    //   if (token) {
    //     this.router.navigateByUrl('/').then();
    //   }
    // });
  }
  onSubmit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.api.login(username, password);
      this.message.create('success', 'Đăng nhập thành công');
      this.isLogined = true;
      console.log('login success');
      this.router.navigateByUrl('/device');
      return this.form.reset();
    }
  }
}
