/**
 * Product Catalog Data
 * Design: Minimalist Urban Contemporary - Black & White
 * All products feature the PANEL! logo in contrasting colors
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  colors: {
    name: string;
    hex: string;
    image: string;
  }[];
  sizes: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 'panel-classic-black',
    name: 'PANEL! Classic Black',
    description: 'Camiseta negra premium con logo PANEL! en blanco. Diseño urbano minimalista perfecto para cualquier ocasión.',
    price: 29.99,
    colors: [
      {
        name: 'Negro',
        hex: '#1A1A1A',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663536276606/2gA9N3SUTCNiMQ2nCN28kq/hero-tshirt-black-VAb85TSacToZiB7qub2tYX.webp',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: 'panel-classic-white',
    name: 'PANEL! Classic White',
    description: 'Camiseta blanca premium con logo PANEL! en negro. Diseño urbano minimalista con máximo contraste.',
    price: 29.99,
    colors: [
      {
        name: 'Blanco',
        hex: '#FFFFFF',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663536276606/2gA9N3SUTCNiMQ2nCN28kq/hero-tshirt-white-Hhu5LWugmUfRiTxv3AuJTJ.webp',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: 'panel-duo-pack',
    name: 'PANEL! Duo Pack',
    description: 'Pack de dos camisetas: una negra y una blanca. Perfecto para tener el contraste completo de la marca.',
    price: 49.99,
    colors: [
      {
        name: 'Negro + Blanco',
        hex: '#000000',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663536276606/2gA9N3SUTCNiMQ2nCN28kq/tshirt-collection-hero-Ua7NQtwwV2R5jewfCZV6WN.webp',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    featured: false,
  },
  {
    id: 'panel-oversized-black',
    name: 'PANEL! Oversized Black',
    description: 'Camiseta oversized negra con logo PANEL! grande. Estilo urbano relajado y moderno.',
    price: 34.99,
    colors: [
      {
        name: 'Negro',
        hex: '#1A1A1A',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663536276606/2gA9N3SUTCNiMQ2nCN28kq/hero-tshirt-black-VAb85TSacToZiB7qub2tYX.webp',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    featured: false,
  },
  {
    id: 'panel-oversized-white',
    name: 'PANEL! Oversized White',
    description: 'Camiseta oversized blanca con logo PANEL! grande. Estilo urbano relajado y minimalista.',
    price: 34.99,
    colors: [
      {
        name: 'Blanco',
        hex: '#FFFFFF',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663536276606/2gA9N3SUTCNiMQ2nCN28kq/hero-tshirt-white-Hhu5LWugmUfRiTxv3AuJTJ.webp',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    featured: false,
  },
];
