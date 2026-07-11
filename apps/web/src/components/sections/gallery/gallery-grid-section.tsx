'use client';

import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { FilterTabs } from '@/components/gallery/filter-tabs';
import { MediaCard } from '@/components/gallery/media-card';
import { GalleryLightbox } from '@/components/gallery/gallery-lightbox';
import { motion, AnimatePresence } from 'framer-motion';

const filters = [
  'All Media',
  'College Workshops',
  'Classroom Sessions',
  'Speaker Sessions',
  'Learning Moments',
];

import { WORKSHOPS } from '@/data/workshops';

const galleryData = WORKSHOPS.flatMap((workshop) => [
  ...workshop.imageUrls.map((url, i) => ({
    id: `${workshop.id}-img-${i}`,
    type: 'image' as const,
    title: `${workshop.collegeName} Session`,
    category: 'College Workshops',
    url,
  })),
  ...(workshop.videoUrls || []).map((url, i) => ({
    id: `${workshop.id}-vid-${i}`,
    type: 'video' as const,
    title: `${workshop.collegeName} Highlights`,
    category: 'Learning Moments',
    url,
  })),
]);

export function GalleryGridSection() {
  const [activeFilter, setActiveFilter] = React.useState('All Media');
  const [lightboxItem, setLightboxItem] = React.useState<(typeof galleryData)[0] | null>(null);

  const filteredData = React.useMemo(() => {
    if (activeFilter === 'All Media') return galleryData;
    return galleryData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Workshop Highlights
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Filter through our extensive collection of moments captured directly from our on-campus
            training sessions.
          </p>

          <FilterTabs tabs={filters} activeTab={activeFilter} onTabChange={setActiveFilter} />
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <MediaCard
                  type={item.type}
                  title={item.title}
                  category={item.category}
                  onClick={() => setLightboxItem(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-muted-foreground py-20 text-center">
            No media found for this category.
          </div>
        )}
      </Container>

      <GalleryLightbox
        isOpen={!!lightboxItem}
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />
    </Section>
  );
}
