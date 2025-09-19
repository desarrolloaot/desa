import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import HeadlessDemo from './HeadlessDemo';
import { PrimeReactProvider } from 'primereact/api';

/*<PrimeReactProvider value={{ unstyled: false }}>
</PrimeReactProvider>*/
function App() {
  const [menuVisible, setMenuVisible] = useState(true);
  
  return (
          <div>
          <Button onClick={() => setMenuVisible(true)}>Menu</Button>
          <HeadlessDemo visible={menuVisible} onHide={() => setMenuVisible(false)} />
          </div>
        
  )
}

export default App
