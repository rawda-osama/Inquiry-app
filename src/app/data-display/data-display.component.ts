import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit {

  httpClient = inject(HttpClient);
  data: any[] = [];


  ngOnInit(): void {
    this.fetchData();
  }
  
  
  fetchData() {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.data = data;
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
     });

    }
  }

  
  
  