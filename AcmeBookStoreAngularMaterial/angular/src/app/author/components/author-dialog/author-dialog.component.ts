import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AuthorDto } from '@proxy/authors';

@Component({
  selector: 'app-author-dialog',
  templateUrl: './author-dialog.component.html',
  styleUrls: ['./author-dialog.component.scss'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, width: "50vw" }}

  ]
})
export class AuthorDialogComponent implements OnInit {

  form: FormGroup; // add this line


  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: AuthorDto
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

}
