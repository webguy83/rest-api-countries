import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-filter-regions-input',
  templateUrl: './filter-regions-input.component.html',
  styleUrls: ['./filter-regions-input.component.scss'],
})
export class FilterRegionsInputComponent implements OnInit {
  selectRegionIsOpen: boolean = false;

  @Input() regions: string[] = [];
  // @Output('onRegionChange') onRegionChange$ = new EventEmitter<Event>();
  @Output() selectedRegionChange = new EventEmitter<string>();

  selectedRegion = 'Filter By Region';
  constructor(
    private utilitiesService: UtilitiesService,
    private eRef: ElementRef
  ) {}

  ngOnInit() {
    this.selectedRegionChange.subscribe((region) => {
      this.selectedRegion = region;
    });
    this.utilitiesService.documentClickedTarget.subscribe((target) =>
      this.documentClickListener(target)
    );
  }

  onRegionClick() {
    this.selectRegionIsOpen = !this.selectRegionIsOpen;
  }

  onRegionBlur() {
    this.selectRegionIsOpen = false;
  }

  onRegionChange(evt: Event) {
    const region = (evt.target as HTMLInputElement).value;
    this.selectedRegionChange.emit(region);
    this.selectRegionIsOpen = false;
  }

  documentClickListener(target: HTMLElement): void {
    if (!this.eRef.nativeElement.contains(target)) {
      this.selectRegionIsOpen = false;
    }
  }
}
