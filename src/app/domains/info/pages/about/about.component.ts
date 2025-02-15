import { Component, signal } from '@angular/core';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-about',
  imports: [CounterComponent, WaveAudioComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  duration = signal(1000);
  msg = signal('Hola');

  changeDuration(event: Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMsg(event: Event){
    const input = event.target as HTMLInputElement;
    this.msg.set(input.value);
  }

}
