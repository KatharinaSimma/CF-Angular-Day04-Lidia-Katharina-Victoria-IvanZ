import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogs } from '../blogs';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  details;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.details = blogs[+params.get('title')];
  });

  }
}
