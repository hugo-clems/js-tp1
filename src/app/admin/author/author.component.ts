import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/shared/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authorForm = new FormGroup({
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    firstName: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authorService.create(this.authorForm.value).subscribe(() => this.authorForm.reset());
  }

  get firstName() {
    return this.authorForm.get("firstName");
  }

  get lastName() {
    return this.authorForm.get("lastName");
  }

}
