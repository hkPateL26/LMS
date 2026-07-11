import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { GalleryAlbumCard } from '@/components/gallery/gallery-album-card';

import { WORKSHOPS } from '@/data/workshops';

export function WorkshopAlbumsSection() {
  return (
    <Section>
      <Container>
        <div className="mb-12 flex flex-col items-end justify-between gap-4 border-b pb-6 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Browse by College
            </h2>
            <p className="text-muted-foreground text-lg">
              View complete photo and video albums from our past campus visits.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WORKSHOPS.map((album) => (
            <GalleryAlbumCard
              key={album.id}
              title={album.topics.join(' & ')}
              college={album.collegeName}
              location="Gujarat"
              date={album.date}
              photoCount={album.imageUrls.length * 10}
              videoCount={album.videoUrls?.length || 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
