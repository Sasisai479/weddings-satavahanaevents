
import fs from "fs/promises";
import path from "path";

const images = [
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    filename: "luxury-1.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    filename: "luxury-2.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    filename: "luxury-3.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    filename: "luxury-4.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1519167651039-887f337f747e?auto=format&fit=crop&w=1200&q=80",
    filename: "luxury-5.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1519167586094-4c7ed3185328?auto=format&fit=crop&w=1200&q=80",
    filename: "luxury-6.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    filename: "luxury-7.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1519677100101-00084f7a376d?auto=format&fit=crop&w=1200&q=80",
    filename: "luxury-8.jpg"
  }
];

async function downloadImages() {
  const assetsDir = path.join(process.cwd(), "src/assets");
  for (const img of images) {
    try {
      const response = await fetch(img.url);
      const buffer = await response.arrayBuffer();
      await fs.writeFile(path.join(assetsDir, img.filename), Buffer.from(buffer));
      console.log(`✅ Downloaded ${img.filename}`);
    } catch (e) {
      console.error(`❌ Failed to download ${img.filename}:`, e);
    }
  }
}

downloadImages();
