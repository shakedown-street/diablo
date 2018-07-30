import {
  IsoHelper,
  Renderer,
  Point2d,
  Random,
} from './squire';

export class Map {

  private image: any = null;

  private mapData = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  ];

  constructor() {
    this.image = new Image();
    this.image.src = 'assets/floor2.png';
  }

  public render(r: Renderer) {
    r.rect('black', 0, 0, 800, 600);
    this.mapData.forEach((row, rowIdx) => {
      row.forEach((column, columnIdx) => {
        let x = rowIdx * 80;
        let y = columnIdx * 80;
        let tileType = this.mapData[rowIdx][columnIdx];
        let isoPoint = IsoHelper.twoDToIso(new Point2d(x, y));
        r.image(this.image, 160 * tileType, 0, 160, 80, isoPoint.x, isoPoint.y, 160, 80);
      });
    });
  }

}
