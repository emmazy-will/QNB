// app/gallery/page.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

type MediaItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt?: string;
  caption?: string;
  category: string;
  date: string;
};

// Import your media files
import nature1 from '../images/car8.jpg';
import nature2 from '../images/car2.jpg';
import portrait1 from '../images/car3.jpg';
import event1 from '../images/car4.jpg';
import event2 from '../images/car5.jpg';
import event3 from '../images/car6.jpg';
import car from '../images/car7.jpg';
import companyVideo from '../images/vid1.mp4';

const galleryItems: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    src: nature1,
    alt: 'Tucks',
    caption: 'Q.N.B company',
    category: 'company',
    date: '2023-05-15'
  },
  {
    id: '2',
    type: 'image',
    src: nature2,
    alt: 'Q.N.B Truck view',
    caption: 'Q.N.B Truck View',
    category: 'company',
    date: '2023-10-22'
  },
  {
    id: '3',
    type: 'image',
    src: event1,
    alt: 'Conference keynote speech',
    caption: 'Annual Tech Conference',
    category: 'company',
    date: '2023-10-22'
  },
  {
    id: '4',
    type: 'video',
    src: companyVideo,
    alt: 'Our company offloading highlights',
    caption: 'Company Annual Meeting 2023',
    category: 'company',
    date: '2023-11-15'
  },
  {
    id: '5',
    type: 'image',
    src: portrait1,
    alt: 'Professional headshot',
    caption: 'Q.N.B Trucks',
    category: 'company',
    date: '2023-07-05'
  },
  {
    id: '6',
    type: 'image',
    src: event2,
    alt: 'Professional headshot',
    caption: 'Q.N.B Carmer',
    category: 'company',
    date: '2023-07-05'
  },
  {
    id: '7',
    type: 'image',
    src: event3,
    alt: 'Professional headshot',
    caption: 'Q.N.B Carmer',
    category: 'company',
    date: '2023-07-05'
  },
  {
    id: '8',
    type: 'image',
    src: car,
    alt: 'Tucks',
    caption: 'Q.N.B company',
    category: 'company',
    date: '2023-05-15'
  },
];

const allCategories = ['all', 'images', 'videos', ...new Set(galleryItems.map(item => item.category))];

const MediaThumbnail = ({ item, fixedHeight = true }: { item: MediaItem; fixedHeight?: boolean }) => (
  <div className={`relative ${fixedHeight ? 'h-64' : 'h-full'}`}>
    {item.type === 'image' ? (
      <img
        src={item.src}
        alt={item.alt || item.caption || 'Gallery image'}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    ) : (
      <>
        <video
          src={item.src}
          className="w-full h-full object-cover"
          poster={item.thumbnail}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </>
    )}
  </div>
);

const MediaModal = ({ item, onClose }: { item: MediaItem; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-4xl max-h-full"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close modal"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="bg-black rounded-xl overflow-hidden flex flex-col h-full">
          <div className="flex-grow flex items-center justify-center p-4">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || item.caption || 'Gallery image'}
                className="max-w-full max-h-[80vh] object-contain"
              />
            ) : (
              <video
                src={item.src}
                className="max-w-full max-h-[80vh]"
                controls
                autoPlay
              />
            )}
          </div>
          
          <div className="bg-gray-900 p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold mb-1">{item.caption}</h2>
                <div className="flex gap-4 text-sm text-gray-300">
                  <span className="capitalize">{item.type}</span>
                  <span className="capitalize">{item.category}</span>
                  <span>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
            {item.alt && (
              <p className="mt-3 text-gray-300">{item.alt}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AlbumModal = ({ items, onClose, onItemSelect }: { 
  items: MediaItem[]; 
  onClose: () => void;
  onItemSelect: (item: MediaItem) => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-4xl h-full"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close modal"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="bg-black rounded-xl overflow-hidden flex flex-col h-full">
          <div className="flex-grow overflow-y-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onItemSelect(item);
                  }}
                >
                  <MediaThumbnail item={item} fixedHeight={false} />
                  <div className="p-3">
                    <h3 className="font-medium line-clamp-1">{item.caption}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-900 p-4 text-white border-t border-gray-700">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">Album ({items.length} items)</h2>
                <p className="text-sm text-gray-300">
                  {new Date(items[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<MediaItem[] | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaTypeFilter, setMediaTypeFilter] = useState<'all' | 'image' | 'video'>('all');

  // Sort items by date (newest first)
  const sortedItems = [...galleryItems].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredItems = sortedItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || 
                        item.category === activeCategory ||
                        (activeCategory === 'images' && item.type === 'image') ||
                        (activeCategory === 'videos' && item.type === 'video');
    
    const matchesSearch = searchTerm === '' || 
                        item.caption?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.alt?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesMediaType = mediaTypeFilter === 'all' || item.type === mediaTypeFilter;

    return matchesCategory && matchesSearch && matchesMediaType;
  });

  // Group items by date for albums
  const itemsByDate = filteredItems.reduce((acc, item) => {
    const dateKey = new Date(item.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(item);
    return acc;
  }, {} as Record<string, MediaItem[]>);

  // Group dates by month-year for display
  const groupedItems = Object.entries(itemsByDate).reduce((acc, [dateString, items]) => {
    const date = new Date(items[0].date);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const groupKey = `${monthName} ${year}`;

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push({ dateString, items });
    return acc;
  }, {} as Record<string, {dateString: string, items: MediaItem[]}[]>);

  const openModal = useCallback((item: MediaItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  }, []);

  const openAlbum = useCallback((items: MediaItem[]) => {
    setSelectedAlbum(items);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    setSelectedAlbum(null);
    document.body.style.overflow = 'auto';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-2">Media Gallery</h1>
        
        {/* Filters */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search media..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Media Type:</span>
              <select
                className="px-3 py-1 border rounded-md"
                value={mediaTypeFilter}
                onChange={(e) => setMediaTypeFilter(e.target.value as 'all' | 'image' | 'video')}
              >
                <option value="all">All</option>
                <option value="image">Images</option>
                <option value="video">Videos</option>
              </select>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Content */}
        {Object.keys(groupedItems).length > 0 ? (
        <div className="space-y-12">
          {Object.entries(groupedItems).map(([groupKey, dateGroups]) => (
            <div key={groupKey} className="space-y-8">
              {/* Enhanced Group Header */}
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 relative inline-block">
                  {groupKey}
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </div>
              
              {dateGroups.map(({dateString, items}) => (
                <div key={dateString} className="space-y-6">
                  {/* Enhanced Date Header */}
                  <div className="flex items-center space-x-4">
                    <h3 className="text-xl font-semibold text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border-l-4 border-blue-500">
                      {dateString}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                  
                  {/* Enhanced Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {items.length > 1 ? (
                      /* Enhanced Album Card */
                      <div 
                        className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100
                                  col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 transform hover:-translate-y-2"
                        onClick={() => openAlbum(items)}
                      >
                        {/* Album Grid */}
                        <div className="grid grid-cols-2 grid-rows-2 h-80 sm:h-96 gap-2 p-3">
                          {items.slice(0, 4).map((item, index) => (
                            <div key={item.id} className={`relative overflow-hidden rounded-xl ${index === 0 ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}`}>
                              <MediaThumbnail item={item} fixedHeight={false} />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Album Info */}
                        <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-xl mb-2 text-gray-800">Album Collection</h3>
                              <p className="text-gray-600 text-sm font-medium">{items.length} items • {dateString}</p>
                            </div>
                            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {items.length}
                            </div>
                          </div>
                        </div>
                        
                        {/* Album Badge */}
                        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          <span className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                            </svg>
                            <span>ALBUM</span>
                          </span>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ) : (
                      /* Enhanced Individual Item Cards */
                      items.map((item) => (
                        <div 
                          key={item.id}
                          className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 transform hover:-translate-y-2"
                          onClick={() => openModal(item)}
                        >
                          {/* Type Badge */}
                          <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            <span className="capitalize flex items-center space-x-1">
                              {item.type === 'video' && (
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 000 2h8a1 1 0 100-2H5z"/>
                                </svg>
                              )}
                              {item.type === 'image' && (
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                                </svg>
                              )}
                              <span>{item.type}</span>
                            </span>
                          </div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            <span className="capitalize">{item.category}</span>
                          </div>
                          
                          {/* Media Container */}
                          <div className="relative overflow-hidden">
                            <MediaThumbnail item={item} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          {/* Enhanced Content */}
                          <div className="p-5 bg-gradient-to-r from-gray-50 to-white">
                            <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                              {item.caption}
                            </h3>
                            <div className="flex items-center justify-between">
                              <p className="text-gray-500 text-sm font-medium">{dateString}</p>
                              <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </div>
                          
                          {/* Hover Effect Ring */}
                          <div className="absolute inset-0 ring-2 ring-blue-400 ring-opacity-0 group-hover:ring-opacity-50 transition-all duration-300 rounded-2xl"></div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        /* Enhanced Empty State */
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-3">No Media Found</h3>
            <p className="text-gray-500 leading-relaxed">
              We couldn't find any media matching your criteria.<br/>
              Try adjusting your search or filter settings to discover more content.
            </p>
            <div className="mt-6">
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                  setMediaTypeFilter('all');
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Modals */}
      {selectedItem && (
        <MediaModal item={selectedItem} onClose={closeModal} />
      )}

      {selectedAlbum && (
        <AlbumModal 
          items={selectedAlbum} 
          onClose={closeModal}
          onItemSelect={(item) => {
            setSelectedItem(item);
            setSelectedAlbum(null);
          }}
        />
      )}
    </div>
  );
}