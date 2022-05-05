import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-filter-regions-input',
  templateUrl: './filter-regions-input.component.html',
  styleUrls: ['./filter-regions-input.component.scss'],
})
export class FilterRegionsInputComponent implements OnInit {
  selectRegionIsOpen: boolean = false;

  @Input() regions: string[] = [];
  @Output() onRegionChange = new EventEmitter<Event>();

  @HostListener('document:click', ['$event']) documentClickEvent() {
    this.selectRegionIsOpen = !this.selectRegionIsOpen;
  }
  constructor() {}

  ngOnInit(): void {}

  onRegionClick() {
    this.selectRegionIsOpen = !this.selectRegionIsOpen;
  }

  onRegionBlur() {
    this.selectRegionIsOpen = false;
  }

  onChange(evt: Event) {
    this.onRegionChange.emit(evt);
  }
}
