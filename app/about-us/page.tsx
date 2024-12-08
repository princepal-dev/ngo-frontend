import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-emerald-50">
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-emerald-800 text-center">
            About HungerToHope
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="HungerToHope team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-700">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, HungerToHope has been at the forefront of
                environmental conservation and child welfare. Our journey began
                with a simple idea: to create a sustainable future for all
                children while preserving our planet&apos;s resources.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we&apos;ve grown from a small group of
                passionate individuals to a global organization, touching the
                lives of thousands of children and making a significant impact
                on our environment.
              </p>
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                Learn More About Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-800 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Environmental Stewardship",
                description:
                  "We are committed to protecting and restoring our planet's ecosystems for future generations.",
              },
              {
                title: "Child Welfare",
                description:
                  "Every child deserves a chance at a bright future. We work tirelessly to provide education, healthcare, and opportunities for underprivileged children.",
              },
              {
                title: "Community Empowerment",
                description:
                  "We believe in the power of local communities to drive sustainable change. Our projects always involve and empower local populations.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly seek innovative solutions to address complex environmental and social challenges.",
              },
              {
                title: "Transparency",
                description:
                  "We are committed to being open and accountable in all our operations and use of resources.",
              },
              {
                title: "Collaboration",
                description:
                  "We partner with like-minded organizations, governments, and individuals to maximize our impact.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-emerald-700">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-800 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Jane Doe",
                role: "Executive Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "John Smith",
                role: "Head of Operations",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Brown",
                role: "Project Manager",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-emerald-50 rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1 text-emerald-700">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Cause
          </h2>
          <p className="text-lg mb-6">
            Together, we can make a difference. Support our mission and help us
            create a better world for children and our planet.
          </p>
          <div className="space-x-4">
            <Button variant="outline" className="bg-white text-emerald-600 hover:bg-emerald-700">
              Donate Now
            </Button>
            <Button
              variant="outline"
              className="bg-white text-emerald-600 hover:bg-emerald-700"
            >
              Volunteer
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
