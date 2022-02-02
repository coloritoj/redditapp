import { Component, OnInit } from '@angular/core';
import { RedditPostObject } from '../reddit-post-object';

@Component({
  selector: 'app-reddit-post-object',
  templateUrl: './reddit-post-object.component.html',
  styleUrls: ['./reddit-post-object.component.css']
})
export class RedditPostObjectComponent implements OnInit {

  redditObjects: RedditPostObject[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
