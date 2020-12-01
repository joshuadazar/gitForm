import { Component } from '@angular/core';
import { UserService } from './auth/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userResponse: any[] = [];
  userCached: string = "";

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserRepos();
  }

  validateUserInput(user: string): boolean {
    return user === this.userCached ? false : true;
  }

  getUserRepos(user: string = 'joshuadazar') {
    if (this.validateUserInput(user)) {
      if (user === "") user = this.userCached;
      this.userCached = user
      this.userService.getUsers(user.trim()).subscribe(data => {
        this.userResponse = data;
        // console.log(data);
      });
    }
  }

  settings = {
    columns: {
      git_url: {
        title: 'Git URL'
      },
      language: {
        title: 'Language'
      },
      default_branch: {
        title: 'Default Branch'
      },
      name: {
        title: 'Repo Name'
      },
      description: {
        title: 'Description'
      },
    },
    actions: false,
    pager: { perPage: 5 }
  };


}
