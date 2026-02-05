import React from 'react';

// This file is imported in index.tsx to make the declarations global.

declare global {
  // Fix: Add JSX namespace to declare the 'iconify-icon' custom element.
  // This resolves TypeScript errors about the property not existing on JSX.IntrinsicElements.
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon: string;
      };
    }
  }

  interface Window {
    UnicornStudio?: {
        isInitialized: boolean;
        init: () => void;
    };
  }
}

export {};
