import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  max:any;
  users: any[] = [];
  currentPage: number = 1;
  totalPages: number = 2;
  searchId: string = '';
  userInfo: any;
  error:any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = []
    setTimeout(() => {
      this.userService.getUsers(this.currentPage).subscribe(response => {
        this.users = response.data;
        this.max = response.total
      });}, 500);
    
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }
  searchUser(event: Event): void {
    const input = event.target as HTMLInputElement; 
    const userId = Number(input.value);

    
      if(userId <= this.max){
        if (!isNaN(userId)) {
          this.userService.getUser(userId).subscribe(
            response => {
              this.userInfo= response.data
              this.users = [];
              this.users.push(this.userInfo);
            });} 
      }
      else{
        this.loadUsers();
      }
      
  }
}
