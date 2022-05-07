import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  documentClickedTarget = new EventEmitter<HTMLElement>();
  constructor() {}
}
