/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import 'ionicons';


import {
  StarRating as StarRating
} from './components/star-rating/star-rating';

declare global {
  interface HTMLStarRatingElement extends StarRating, HTMLElement {
  }
  var HTMLStarRatingElement: {
    prototype: HTMLStarRatingElement;
    new (): HTMLStarRatingElement;
  };
  interface HTMLElementTagNameMap {
    "star-rating": HTMLStarRatingElement;
  }
  interface ElementTagNameMap {
    "star-rating": HTMLStarRatingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "star-rating": JSXElements.StarRatingAttributes;
    }
  }
  namespace JSXElements {
    export interface StarRatingAttributes extends HTMLAttributes {
      color?: string;
      fontSize?: number;
      initialRating?: number;
      stars?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
