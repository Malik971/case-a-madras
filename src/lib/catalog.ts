/**
 * ====================================================================
 *  COUCHE D'ACCES AUX DONNEES (data layer)
 * ====================================================================
 *  Les composants lisent le catalogue via ces fonctions, jamais
 *  directement depuis le fichier de donnees. C'est le seul point a
 *  modifier le jour ou vous branchez le backend Spring Boot.
 *
 *  AUJOURD'HUI : donnees locales (src/data/products.ts).
 *
 *  DEMAIN (Spring Boot) : passez ces fonctions en async et appelez l'API,
 *  les composants n'auront presque rien a changer. Exemple :
 *
 *    export async function getProducts(): Promise<Product[]> {
 *      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
 *        next: { revalidate: 60 },
 *      });
 *      if (!res.ok) throw new Error("API produits indisponible");
 *      return res.json();
 *    }
 *
 *  Cote panier, useCartStore.openWhatsApp() pourra etre double d'un
 *  POST `${API}/api/orders` pour enregistrer la commande.
 * ====================================================================
 */

import { products, featuredProducts, type Product, type ProductCategory } from "@/data/products";

export function getProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return featuredProducts;
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
