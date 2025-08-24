'use client';
import { useEffect, useRef, useState } from 'react';

const LiveMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setMapLoaded(true);
        initializeMap();
      };
      script.onerror = () => {
        console.error('Google Maps failed to load');
        showStaticMap();
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 12.9716, lng: 77.5946 }, // Bangalore coordinates
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }]
          }
        ]
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 12.9716, lng: 77.5946 },
        map: map,
        title: "Digital India Tech Solutions",
        icon: {
          url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTIiIGZpbGw9IiMyNTYzZWEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkQ8L3RleHQ+Cjwvc3ZnPg==",
          scaledSize: new window.google.maps.Size(30, 30)
        }
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px;">
            <h3 style="margin: 0 0 8px 0; color: #2563eb;">Digital India Tech Solutions</h3>
            <p style="margin: 0; color: #666;">123 Tech Park, Innovation Road<br>Bengaluru - 560001</p>
          </div>
        `
      });

      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    };

    const showStaticMap = () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; border-radius: 12px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; padding: 20px; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>
            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">Map Unavailable</h3>
            <p style="opacity: 0.9;">Please check your internet connection</p>
            <div style="margin-top: 1rem; background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem;">
              📍 123 Tech Park, Bengaluru
            </div>
          </div>
        `;
      }
    };

    loadGoogleMaps();
  }, [mapLoaded]);

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946&destination_place_id=ChIJbU60yXAWrjsR4E9-UejD3_g', '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
      
      {/* Map Container */}
      <div 
        ref={mapRef}
        className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>

      {/* Location Details */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center">
          <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
            📍
          </span>
          <div>
            <h3 className="font-semibold text-gray-900">Digital India Tech Solutions</h3>
            <p className="text-gray-600 text-sm">Pilkhua, Ghaziabd, Uttar Pradesh - 245304</p>
          </div>
        </div>

        <div className="flex items-center">
          <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
            🚆
          </span>
          <div>
            <h3 className="font-semibold text-gray-900">Nearest  Station</h3>
            <p className="text-gray-600 text-sm">Pilkhua (5 minutes walk)</p>
          </div>
        </div>

        <div className="flex items-center">
          <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-3">
            🚗
          </span>
          <div>
            <h3 className="font-semibold text-gray-900">Parking Available</h3>
            <p className="text-gray-600 text-sm">Free parking for customers</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button 
          onClick={openGoogleMaps}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          <span>📱</span>
          Get Directions
        </button>
        <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
          <span>📋</span>
          Save Location
        </button>
      </div>

      {/* Business Hours */}
      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <h4 className="font-semibold text-gray-900 mb-2">🕒 Business Hours</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 8:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Emergency Services Only</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMap;