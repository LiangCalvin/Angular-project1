import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements OnInit, AfterViewInit{
  @ViewChild('codeimg',{read: ElementRef})
  set imgRef(el: ElementRef<HTMLImageElement> | undefined ) {
    this.imgRef$.next(el);
  }
  get imgRef(){
    return this.imgRef$.value;
  }
  imgRef$ = new BehaviorSubject<ElementRef<HTMLImageElement> | undefined> (undefined);

  constructor() {}


  ngOnInit(): void {
    this.imgRef$.subscribe((ref) => {
      console.log("oninit:",ref)
    })
  }

  ngAfterViewInit(): void {
    // console.log("Afteroninit:",this.imgRef)
  }
  isShowimg = false;

  small(){
    if(this.imgRef !== undefined){
      const imageElement = this.imgRef.nativeElement;
      imageElement.style.width = '200px';
    }

  }
  medium(){
    if(this.imgRef !== undefined){
      const imageElement = this.imgRef.nativeElement;
      imageElement.style.width = '400px';
    }
  }
  large(){
    if(this.imgRef !== undefined){
      const imageElement = this.imgRef.nativeElement;
      imageElement.style.width = '800px';
    }
  }

}
