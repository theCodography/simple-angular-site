import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "app-user-single",
  template: `
    <section class="section">
      <div class="container">
        <div class="card" *ngIf="user">
          <img [src] = "user.avatar_url">
          <h2>{{ user.login }}</h2>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class UserSingleComponent implements OnInit {
  user;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const username = params["username"];
      //* use user service to get data of users from github api
      this.userService
        .getUser(username)
        .subscribe((user) => (this.user = user)); //* bind that to a user variable
    });
  }
}
