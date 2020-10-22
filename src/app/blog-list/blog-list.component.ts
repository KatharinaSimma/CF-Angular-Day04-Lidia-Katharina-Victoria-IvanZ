import { Component, OnInit } from '@angular/core';
import { blogs } from '../blogs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  bloglist = blogs; 

  constructor() { }

  ngOnInit(): void {
  }

}
