import { Injectable } from '@angular/core';
import exampledata  from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';
import { HttpClient } from '@angular/common/http';
import { Track } from '../models/Track';


/**
 * The below class is used to send data correctly to the angular application's webpage to display.
 * this is where we would normally hook up API calls to retrieve data from a real database.
 */
@Injectable({ providedIn: 'root' }) //  inject at the root level of the Angular application
export class MusicServiceService {

  albums: Album[] = exampledata;

  private host = "https://shoppingmallfood.com";

  constructor(private http: HttpClient) {}

  // Retrieves All Artist data from REST API
  public getArtists(callback: (artists: Artist[])=> void): void {
    this.http.get<Artist[]>(this.host + "/artists").
      subscribe((artists: Artist[]) =>{
        callback(artists);
      });
  }

  public getAlbums(callback: (alums: Album[])=> void): void  {
    this.http.get<Album[]>(this.host + "/albums").
      subscribe((albums: Album[]) =>{
        callback(albums);
      });
  }

  public getAlbumsOfArtist(callback: (albums: Album[])=> void, artistName: String): void {
    this.http.get<Album[]>(this.host + "/albums/" + artistName).
    subscribe((albums: Album[]) =>{
      callback(albums);
    });
  }

  public createAlbum(album: Album, callback: ()=> void): void {
    this.http.post<Album[]>(this.host + "/albums/", album).
    subscribe((data) =>{
      callback();
    });
  }

  public updateAlbum(album: Album, callback: ()=> void): void {
    this.http.put<Album[]>(this.host + "/albums/", album).
    subscribe((data) =>{
      callback();
    });
  }

  public deleteAlbum(id: number, callback: ()=> void): void {
    this.http.delete(this.host + "/albums/" + id).
    subscribe((data) =>{
      callback();
    });
  }

  public getAlbumById(id: number, callback: (albums: Album[])=>void){
    this.http.get<Album[]>(this.host + "/albums?albumId=" + id).
    subscribe((albums: Album[])=>{
      callback(albums);
    });
  }


  /*public getAlbum(artist: string, id: number): Album | undefined {
		const album = this.albums.find((a) => a.artist === artist && a.albumId === id);

		if (album) {
			const newTracks = album.tracks.map((track) => new Track(track.trackId, track.number, track.title, track.lyrics, track.video));
			return new exampledata(album.albumId, album.title, album.artist, album.description, album.year, album.image, newTracks);
		}

		return undefined;
	}*/
}
