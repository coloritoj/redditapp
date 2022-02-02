import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedditAppLab';

  redditdata: any = null;

  constructor(private http: HttpClient) {}

  loadData() {
    var req = this.http.get<any>("https://www.reddit.com/r/aww/.json");
    req.subscribe(
      result => {
        console.log(result);
        this.redditdata = result;
      }
    )
  }
}
