import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.form.controls.checkPassword.updateValueAndValidity());
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required,  Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
     
    });
  }
  onSubmit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.api.register(username, password);
      this.message.create('success', 'Đăng ký tài khoản thành công');
      ;
      console.log('register success');
      this.router.navigateByUrl('/auth/login');
      return this.form.reset();
    }
  }
}
