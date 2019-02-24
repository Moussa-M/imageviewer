# Image Viewer  
> This plugin is used to show a images from an  URL into a image Viewer with zoom features for ionic 4.

<p align="center">
  <img src="/demo/demo.gif"/>
<p>

## How to Install

```bash
$ ionic cordova plugin add com-moussam-imageviewer
$ npm install --save ionic-native-image-viewer
```

## Supported platform
> Android


## Usage
```
...
import { ImageViewer } from 'ionic-native-image-viewer/ngx'
...
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  providers:[ImageViewer,],//here
  declarations: [PagePage]
})
export class MyModuleModule {}


```
Inject it in your component like so 
```
....
import { ImageViewer } from 'ionic-native-image-viewer/ngx'
....
constructor(private imageViewer:ImageViewer){

}
ngOnInit() {
//handling all images click event
$('body').on('click', 'img',(event)=>{
        this.imageViewer.show(event.target.src);
        //or
        //ImageViewer.show('http://localhost:8080/assets/any_image.png', 'Title');
})

}


```

## Options

Options:
* share: Option is used to hide and show the share option.
* closeButton: Option for close button visibility when is set to false 


```
var options = {
    share: true, // default is false
    closeButton: false // default is true
};

ImageViewer.show('http://any_site.com/any_image.png', 'Title', options);
```
