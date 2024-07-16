import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [],
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.css'
})
export class DrawComponent implements AfterViewInit {
  @ViewChild('refCanvas') canvas!: ElementRef<HTMLCanvasElement>
  @ViewChildren('refCanvas') moreCanvas!: QueryList<ElementRef<HTMLCanvasElement>>
  private context!: CanvasRenderingContext2D | null

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d')
   
    console.log(this.moreCanvas.toArray())
  }

  drawRectangle() {
    if (!this.context) return
    this.context.fillStyle = 'blue'
    this.context.fillRect(0, 0, 100, 100)
  }
}
