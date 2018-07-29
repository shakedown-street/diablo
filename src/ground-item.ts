import { AnimationDef, Point2d, Renderer } from './squire';
import { CoinsAnim } from './anims';
import { HeavyArmorItemAnim } from './anims';

export abstract class GroundItem {

  public abstract animation: AnimationDef;
  protected lastFrameTime = 0;
  public frame = 0;

  constructor(public pos: Point2d) { }

  public renderAnim(r: Renderer) {
    let now = Date.now();
    let frameCount = this.animation.animations["drop"].frames.length;
    let frameDuration = this.animation.animations["drop"].duration;
    let needsNewFrame = now - this.lastFrameTime > frameDuration;
    if (needsNewFrame && this.frame != frameCount - 1) {
      this.frame = (this.frame + 1) % frameCount;
      this.lastFrameTime = now;
    }
    this.animation.render(r, "drop", this.frame, 0, this.pos.x, this.pos.y);
  }
}

export class CoinsGroundItem extends GroundItem {
  public animation = new CoinsAnim();
}

export class HeavyArmorGroundItem extends GroundItem {
  public animation = new HeavyArmorItemAnim();
}
