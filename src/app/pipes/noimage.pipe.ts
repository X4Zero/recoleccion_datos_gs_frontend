import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( image: any): string {

    // if ( !image ) {
    //   return 'assets/img/noimage.png';
    // }
    console.log(image);
    if ( image.includes('http') ) {
      return image;
    } else {
      return 'assets/img/noimage2.png';
      // return 'https://scholar.google.com/citations/images/avatar_scholar_128.png';
    }

  }

}
