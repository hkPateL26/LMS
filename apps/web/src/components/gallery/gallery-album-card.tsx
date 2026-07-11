import * as React from 'react';
import { MapPin, Calendar, Images, PlayCircle } from 'lucide-react';

export interface GalleryAlbumCardProps {
  title: string;
  college: string;
  location: string;
  date: string;
  photoCount: number;
  videoCount: number;
}

export function GalleryAlbumCard({
  title,
  college,
  location,
  date,
  photoCount,
  videoCount,
}: GalleryAlbumCardProps) {
  return (
    <div className="bg-card group flex cursor-pointer flex-col overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md">
      <div className="bg-muted text-muted-foreground/30 relative flex aspect-[16/9] items-center justify-center overflow-hidden">
        <Images className="h-16 w-16 transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute bottom-3 right-3 flex gap-2">
          {photoCount > 0 && (
            <div className="flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-md">
              <Images className="h-3.5 w-3.5" />
              <span>{photoCount}</span>
            </div>
          )}
          {videoCount > 0 && (
            <div className="flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-md">
              <PlayCircle className="h-3.5 w-3.5" />
              <span>{videoCount}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-grow flex-col p-5">
        <div className="mb-2">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider">
            {college}
          </span>
        </div>
        <h3 className="mb-3 line-clamp-2 text-lg font-bold">{title}</h3>

        <div className="text-muted-foreground mt-auto flex items-center justify-between border-t pt-4 text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
