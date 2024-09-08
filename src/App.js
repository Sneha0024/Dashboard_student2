import React, { useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import HorizontalMenu from './components/HorizontalMenu';
import GridView from './components/GridView';
import TileView from './components/TileView';
import DetailView from './components/DetailView';
import ThemeProvider from './components/ThemeProvider';
import './styles/index.css';

function App() {
  const [view, setView] = useState('grid'); // 'grid' or 'tile'
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTileClick = (item) => {
    setSelectedItem(item);
    setView('detail');
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <ThemeProvider>
      <HamburgerMenu />
      <HorizontalMenu onViewChange={handleViewChange} currentView={view} />
      {view === 'grid' && <GridView onTileClick={handleTileClick} />}
      {view === 'tile' && <TileView onTileClick={handleTileClick} />}
      {view === 'detail' && <DetailView item={selectedItem} onBack={() => setView('tile')} />}
    </ThemeProvider>
  );
}

export default App;
