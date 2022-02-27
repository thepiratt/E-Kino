import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  @Output()
  changeMarkdown = new EventEmitter<string>();

  @Input()
  markdownContent = '';

  @Input()
  label = 'value';

  ngOnInit(): void {
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}
