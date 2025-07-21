import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CellTowerMap = () => {
  const [cellTowers, setCellTowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data/cell_towers_cumberland3.csv');
        const csvData = await response.text();

        const lines = csvData.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));

        const towers = lines.slice(1).map(line => {
          const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
          const tower = {};
          headers.forEach((header, index) => {
            tower[header] = values[index] || '';
          });

          const lat = parseFloat(tower.Latitude);
          const lng = parseFloat(tower.Longitude);

          if (!isNaN(lat) && !isNaN(lng)) {
            return { ...tower, Latitude: lat, Longitude: lng };
          }
          return null;
        }).filter(tower => tower !== null);

        setCellTowers(towers);
        setLoading(false);
      } catch (err) {
        console.error('Error loading data:', err);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading...</div>;
  }

  const center = cellTowers.length > 0
    ? [
        cellTowers.reduce((sum, t) => sum + t.Latitude, 0) / cellTowers.length,
        cellTowers.reduce((sum, t) => sum + t.Longitude, 0) / cellTowers.length
      ]
    : [36.0, -84.5];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6 text-center">📡 Cell Tower Infrastructure Map</h1>

      <div className="w-full max-w-4xl h-[500px] rounded shadow-lg">
        <MapContainer
          center={center}
          zoom={10}
          style={{ height: '100%', width: '100%', border: '2px solid red' }}  // add this
          className="rounded"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {cellTowers.map((tower, index) => (
            <CircleMarker
              key={index}
              center={[tower.Latitude, tower.Longitude]}
              radius={6}
              fillColor="#3b82f6"
              color="#1e40af"
              weight={2}
              opacity={0.8}
              fillOpacity={0.6}
            >
              <Tooltip>
                <div>
                  <strong>{tower['Owner Name'] || 'Unknown'}</strong><br />
                  Status: {tower.Status}<br />
                  Height: {tower['Overall Height Above Ground (AGL)']} ft<br />
                  Location: {tower['Structure City/State']}
                </div>
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CellTowerMap;
