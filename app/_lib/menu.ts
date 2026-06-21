import { readFile } from "fs/promises";
import path from "path";
import { parseCsv } from "./csv";

export type MenuCategory =
  | "Espresso"
  | "Espresso Drinks"
  | "Pastries"
  | "Sandwiches"
  | "Cold Drinks";

export type MenuItem = {
  name: string;
  category: MenuCategory;
  description: string;
  price: string;
  badge: "" | "Popular" | "House favorite";
  slug: string;
};

const CSV_PATH = path.join(process.cwd(), "docs", "menu-items.csv");

export const CATEGORY_ORDER: MenuCategory[] = [
  "Espresso",
  "Espresso Drinks",
  "Pastries",
  "Sandwiches",
  "Cold Drinks",
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const raw = await readFile(CSV_PATH, "utf-8");
  const [, ...rows] = parseCsv(raw);
  return rows.map(([name, category, description, price, badge]) => ({
    name,
    category: category as MenuCategory,
    description,
    price,
    badge: (badge ?? "") as MenuItem["badge"],
    slug: slugify(name),
  }));
}

export async function getMenuByCategory(): Promise<
  { category: MenuCategory; items: MenuItem[] }[]
> {
  const items = await getMenuItems();
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((item) => item.category === category),
  }));
}

export async function getFeaturedItems(limit = 4): Promise<MenuItem[]> {
  const items = await getMenuItems();
  const featured: MenuItem[] = [];

  for (const category of CATEGORY_ORDER) {
    const pick = items.find((item) => item.category === category && item.badge !== "");
    if (pick) featured.push(pick);
    if (featured.length >= limit) break;
  }

  return featured;
}
