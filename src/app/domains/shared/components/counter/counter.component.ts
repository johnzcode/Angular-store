import { Component, Input, signal, SimpleChanges, PLATFORM_ID, Inject } from '@angular/core';
import { ProductComponent } from "../../../products/components/product/product.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) msg = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    // no async
    // before render
    // una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('msg =>', this.msg);
    if (isPlatformBrowser(this.platformId)){
      this.counterRef = window.setInterval(() => {
        console.log('run interval')
        this.counter.update(statePrev => statePrev + 1);
      }, 1000);
    }
  }

  ngAfterViewInit(){
    // after render
    // hijos ya fueron render
    if (isPlatformBrowser(this.platformId)){
      console.log('ngAfterViewInit');
      console.log('-'.repeat(10));
    }
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    if (isPlatformBrowser(this.platformId)){
      window.clearInterval(this.counterRef);
    }
  }

  doSomething(){
    console.log('change duration');
  }

}
