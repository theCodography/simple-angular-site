import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <form (ngSubmit)="onSubmit()" #form="ngForm">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                name="name"
                type="text"
                placeholder="e.g Alex Smith"
                [(ngModel)]="name"
                #nameInput="ngModel"
                required
              />
            </div>
            <div
              class="help is-error"
              *ngIf="nameInput.invalid && nameInput.touched"
            >
              Your name is required
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                name="email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
                [(ngModel)]="email"
                #emailInput="ngModel"
                required
                email
              />
            </div>
            <div
              class="help is-error"
              *ngIf="emailInput.invalid && emailInput.touched"
            >
              Your email is required
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" [disabled]="form.invalid">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    const message: string = `My name is ${this.name}`;
    alert(message);
  }
}
