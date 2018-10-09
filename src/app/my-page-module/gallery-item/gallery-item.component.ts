import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gallery-item',
  template: 'My id: {{id}}',
})
export class GalleryItemComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
              private title: Title) {}

  ngOnInit() {
   this.route.paramMap.subscribe(params => {
     this.id = Number(params.get('id'));
   });

    // this.route.params.subscribe((params: { id: string }) => {
    //   this.id = Number(params.id);
    // });

    // this.route.queryParamMap.subscribe(queryParams => {
    //   console.log(queryParams);
    // });

    this.route.data.subscribe((data: { title: string }) => {
      this.title.setTitle(data.title);
    })
  }
}
