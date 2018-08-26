import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
    constructor(private http: Http) {}

    get() {
      return this.http.get('mediaitems')
        .map(response => {
          return response.json().mediaItems;
        });
    }

    add(mediaItem) {
      return this.http.post('mediaitems', mediaItem);
    }

    delete(mediaItem) {
      return this.http.delete(`mediaitems/${mediaItem.id}`);
    }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}