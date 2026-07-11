import * as React from 'react';
import { Camera, PlayCircle } from 'lucide-react';

export interface MediaCardProps {
  type: 'image' | 'video';
  title: string;
  category: string;
  imageUrl?: string;
  onClick?: () => void;
}

export function MediaCard({ type, title, category, imageUrl, onClick }: MediaCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-muted group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md"
    >
      {/* 
        For production, you would use next/image here. 
        We use a placeholder visual structure for now.
      */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="text-muted-foreground bg-secondary/10 flex h-full w-full flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
          {type === 'video' ? (
            <PlayCircle className="mb-2 h-10 w-10 opacity-50" />
          ) : (
            <Camera className="mb-2 h-10 w-10 opacity-50" />
          )}
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="bg-primary text-primary-foreground mb-2 inline-block w-fit rounded-md px-2 py-1 text-xs font-semibold">
          {category}
        </span>
        <h4 className="line-clamp-2 text-sm font-medium text-white">{title}</h4>
      </div>

      {/* Video Indicator */}
      {type === 'video' && (
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
          <PlayCircle className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}
