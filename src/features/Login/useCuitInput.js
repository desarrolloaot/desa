import { useState } from 'react';

export function useCuitInput(initialValue = '') {
  const [cuit, setCuit] = useState(initialValue);

  const handleCuitChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    let formattedCuit = rawValue;

    if (rawValue.length > 2) {
      formattedCuit = `${rawValue.slice(0, 2)}-${rawValue.slice(2)}`;
    }
    if (rawValue.length > 10) {
      formattedCuit = `${rawValue.slice(0, 2)}-${rawValue.slice(2, 10)}-${rawValue.slice(10, 11)}`;
    }

    setCuit(formattedCuit);
  };

  return { cuit, handleCuitChange, setCuit };
}