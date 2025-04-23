import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaHatCowboySide, FaLeaf } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const missionData = [
  {
    icon: FaLeaf,
    title: "Mid Day Meals",
    description:
      "Ensuring underprivileged children receive wholesome mid-day meals to support their growth and education.",
  },
  {
    icon: MdOutlineHealthAndSafety,
    title: "Healthy Lifestyles",
    description:
      "Educating communities about the critical benefits of nutritious food during early childhood and encouraging habits that lead to holistic growth and well-being.",
  },
  {
    icon: FaHatCowboySide,
    title: "Engaging Young Leaders",
    description:
      "Building a community of young, aspiring leaders dedicated to joining us in this journey towards a healthier, hunger-free future.",
  },
];
export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <main>
        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-950">
                  Together, We Can Make a Difference
                </h1>
                <p className="text-md md:text-xl mb-6 pr-8 text-gray-500">
                  At
                  <span className="ml-1 text-zinc-600 font-bold">
                    HungerToHope
                  </span>
                  , we transform the lives of children in Aanganwadis by
                  providing essential nutrition and healthcare, turning hunger
                  into hope.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                  <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="/get-involved">Get Involved</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <a target="_blank" href="https://gofund.me/c4ef3801">
                      Donate Now
                    </a>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="/hero.jpg"
                  alt="Poor children in need of help"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-16">
              At HungerToHope, we strive to provide a brighter future for
              children in Aanganwadis by addressing their health and nutritional
              needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <item.icon className="h-12 w-12 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
