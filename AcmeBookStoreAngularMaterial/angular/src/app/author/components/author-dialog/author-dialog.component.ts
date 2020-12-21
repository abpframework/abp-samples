import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AuthorDto } from '@proxy/authors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-author-dialog',
  templateUrl: './author-dialog.component.html',
  styleUrls: ['./author-dialog.component.scss'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, width: "50vw" }}

  ]
})
export class AuthorDialogComponent implements OnInit{

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AuthorDto,
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.data?.name, Validators.required],
      birthDate: [this.data?.birthDate, Validators.required],
    });
  }

  getFormValue() {
    const {birthDate} = this.form.value;
    return {
      ...this.form.value,
      publishDate: `${birthDate?.getFullYear()}-${birthDate?.getMonth() + 1}-${birthDate?.getDate()}`
    };
  }
}
