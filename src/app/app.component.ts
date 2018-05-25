import { Component } from "@angular/core";
import { ImageCropperComponent, CropperSettings } from "ngx-img-cropper";

@Component({
  selector: "app-root",
  templateUrl: './app.component.html'
})
export class AppComponent {
  data: any;
  cropperSettings: CropperSettings;

  constructor() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;

    this.data = {};
  }
}