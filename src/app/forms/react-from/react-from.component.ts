import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from '../../shared/models/users.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-react-from',
  templateUrl: './react-from.component.html',
  styleUrls: ['./react-from.component.scss']
})
export class ReactFromComponent implements OnInit {

  displayedColumns = ['id', 'name', 'email'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  form: FormGroup;
  users: User[];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      email: ['']
    });



    this.userService.listUser()
      .subscribe(users => {
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSubmit(user: User) {
    console.log(this.form.value);
    this.userService.saveUser(user).subscribe((response) => {
      console.log(response.id, response.name, response.email);
    });
  }

}
