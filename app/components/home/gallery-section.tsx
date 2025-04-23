import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const fakePhotos = [
  {
    id: 1,
    category: "Nature",
    src: "https://images.pexels.com/photos/4160252/pexels-photo-4160252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    category: "Portrait",
    src: "https://images.pexels.com/photos/31732878/pexels-photo-31732878/free-photo-of-batiments-aux-couleurs-pastel-dans-un-cadre-urbain-ensoleille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    category: "Urban",
    src: "https://images.pexels.com/photos/31591768/pexels-photo-31591768/free-photo-of-navigation-sereine-en-yacht-sur-des-eaux-bleues-claires.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    category: "Nature",
    src: "https://images.pexels.com/photos/31633276/pexels-photo-31633276/free-photo-of-une-surfeuse-profite-des-vagues-de-la-plage-en-ete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    category: "Portrait",
    src: "https://images.pexels.com/photos/31352261/pexels-photo-31352261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
  },
  {
    id: 6,
    category: "Urban",
    src: "https://images.pexels.com/photos/31670957/pexels-photo-31670957/free-photo-of-la-majestueuse-baleine-de-bryde-se-nourrit-dans-les-eaux-thailandaises.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const GallerySection = () => {
  const [category, setCategory] = useState("All");

  const filteredPhotos =
    category === "All" ? fakePhotos : fakePhotos.filter((photo) => photo.category === category);
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Gallery</h2>
      <Tabs value={category} onValueChange={setCategory} className="mb-6 text-center">
        <TabsList className="flex justify-center gap-4">
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Nature">Nature</TabsTrigger>
          <TabsTrigger value="Portrait">Portrait</TabsTrigger>
          <TabsTrigger value="Urban">Urban</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <Card key={photo.id}>
            <CardContent className="p-0">
              <img src={photo.src} alt="Gallery" className="w-full h-64 object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
