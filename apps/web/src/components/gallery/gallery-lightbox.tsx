'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, PlayCircle } from 'lucide-react';

interface LightboxItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  category: string;
  imageUrl?: string;
}

export interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  item: LightboxItem | null;
}

export function GalleryLightbox({ isOpen, onClose, item }: GalleryLightboxProps) {
  // Prevent scrolling when lightbox is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
        >
          {/* Header */}
          <div className="absolute left-0 right-0 top-0 z-10 flex items-start justify-between bg-gradient-to-b from-black/60 to-transparent p-4 md:p-6">
            <div>
              <span className="bg-primary text-primary-foreground mb-2 inline-block rounded-md px-2 py-1 text-xs font-semibold">
                {item.category}
              </span>
              <h3 className="text-lg font-medium text-white md:text-xl">{item.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Media Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative flex max-h-full w-full max-w-5xl items-center justify-center overflow-hidden rounded-lg"
          >
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="max-h-[85vh] max-w-full object-contain"
              />
            ) : (
              <div className="flex aspect-video max-h-[85vh] w-full flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50">
                {item.type === 'video' ? (
                  <PlayCircle className="mb-4 h-16 w-16 opacity-50" />
                ) : (
                  <Camera className="mb-4 h-16 w-16 opacity-50" />
                )}
                <p className="text-lg">Placeholder for high-resolution {item.type}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
