import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="bg-emerald-600 text-white">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo-placeholder.svg"
              alt="NGO Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="font-bold text-xl">HungerToHope</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="hover:text-emerald-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-emerald-200">
              About
            </Link>
            <Link href="#" className="hover:text-emerald-200">
              Projects
            </Link>
            <Link href="#" className="hover:text-emerald-200">
              Contact
            </Link>
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-emerald-600 hover:bg-emerald-100"
            >
              Donate
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </header>

      <main>
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
                  environmental conservation and child welfare. Our journey
                  began with a simple idea: to create a sustainable future for
                  all children while preserving our planet's resources.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've grown from a small group of passionate
                  individuals to a global organization, touching the lives of
                  thousands of children and making a significant impact on our
                  environment.
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
              Together, we can make a difference. Support our mission and help
              us create a better world for children and our planet.
            </p>
            <div className="space-x-4">
              <Button className="bg-white text-emerald-600 hover:bg-emerald-100">
                Donate Now
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-emerald-700"
              >
                Volunteer
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">HungerToHope</h3>
              <p className="text-sm md:text-base">
                Making the world a better place for children, one project at a
                time.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-sm md:text-base">Email: info@ecoaction.org</p>
              <p className="text-sm md:text-base">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="hover:text-emerald-300 text-sm md:text-base"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="hover:text-emerald-300 text-sm md:text-base"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="hover:text-emerald-300 text-sm md:text-base"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm">
              &copy; 2023 HungerToHope. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
