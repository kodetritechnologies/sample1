import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sticky-header': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'data-sticky-type'?: string };
      'drawer-menu': any;
      'drawer-opener': any;
      'modal-search': any;
      'team-slider': any;
      'faq-accordion': any;
      'testi-slider': any;
    }
  }
}
