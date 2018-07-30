import {
  IsoHelper,
  Renderer,
  Point2d,
} from './squire';

export class Map {

  private mapData = [
    [1,1,1,1,1,1],
    [1,0,0,0,0,1],
    [1,0,0,0,0,1],
    [1,0,0,0,0,1],
    [1,0,0,0,0,1],
    [1,1,1,1,1,1]
  ];

  constructor() {

  }

  public render(r: Renderer) {
    this.mapData.forEach((row, rowIdx) => {
      row.forEach((column, columnIdx) => {
        let x = rowIdx * 96;
        let y = columnIdx * 96;
        let tileType = this.mapData[rowIdx][columnIdx];
        let color = 'black';
        switch(tileType) {
          case 0:
            color = 'green';
          case 1:
            color = 'gray';
        }
        let isoPoint = IsoHelper.twoDToIso(new Point2d(x, y));
        r.rect(color, isoPoint.x, isoPoint.y, 96, 96);
      });
    });
  }

}
