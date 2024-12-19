import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutUs() {
  const impactGallery = [
    {
      title: "Clean Water Initiative",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Education for All",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Sustainable Agriculture",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Community Empowerment",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <>
      <Navbar />

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
                  Welcome to HungerToHope, where we are dedicated to
                  transforming the lives of children in Aanganwadis. Our mission
                  is to ensure that every child receives the nutrition and
                  healthcare they need to thrive. Through our comprehensive and
                  sustainable approach, we aim to turn hunger into hope for
                  these young lives.
                </p>
                <p className="text-gray-600 mb-4">
                  Millions of children in Aanganwadis across India suffer from
                  malnutrition and lack of proper healthcare. These children are
                  the future, and it is our responsibility to ensure they have
                  the opportunity to grow and develop healthily. HungerToHope is
                  dedicated to bridging this gap by providing essential
                  resources and support.
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
              Why We Do What We Do
            </h2>
            <div>
              <p className="text-gray-600 mb-4">
                Millions of children in Aanganwadis across India suffer from
                malnutrition and lack of proper healthcare. These children are
                the future, and it is our responsibility to ensure they have the
                opportunity to grow and develop healthily. HungerToHope is
                dedicated to bridging this gap by providing essential resources
                and support.
              </p>
              <p className="text-gray-600  mb-2 font-bold">Our Approach</p>
              <ul className="text-gray-600 list-disc mb-6 ">
                <li className="mb-1">
                  <span className="font-semibold">Fundraising:</span> We
                  organize various fundraising events and campaigns to gather
                  the necessary resources to support our initiatives. Every
                  contribution, big or small, helps us move closer to our goal.
                </li>
                <ul className="list-disc ml-6">
                  <li>
                    Community Events: Hosting local events such as charity runs,
                    bake sales, and cultural programs to engage the community
                    and raise funds.
                  </li>
                  <li>
                    Online Campaigns: Utilizing social media and crowdfunding
                    platforms to reach a wider audience and encourage online
                    donations.
                  </li>
                  <li>
                    Corporate Partnerships: Collaborating with businesses to
                    secure sponsorships and donations, and to organize joint
                    fundraising activities.
                  </li>
                </ul>
              </ul>
              <ul className="text-gray-600 list-disc mb-6">
                <li className="mb-1">
                  <span className="font-semibold">Budget Planning:</span> Our
                  finance team meticulously plans and allocates funds to ensure
                  that every dollar is used effectively and efficiently.
                </li>
                <ul className="list-disc ml-6">
                  <li>
                    Needs Assessment: Conducting thorough assessments to
                    understand the specific financial needs of each Aanganwadi.
                  </li>
                  <li>
                    Detailed Budgeting: Creating a comprehensive budget that
                    covers all aspects of the project, from health check-ups to
                    meal planning and sustainability measures.
                  </li>
                  <li>
                    Financial Monitoring: Regularly reviewing and adjusting the
                    budget to ensure optimal use of resources.
                  </li>
                </ul>
              </ul>
              <ul className="text-gray-600 list-disc mb-6">
                <li className="mb-1">
                  <span className="font-semibold">Health Check-ups:</span>{" "}
                  Regular health assessments are conducted to monitor and
                  improve the well-being of the children. We collaborate with
                  healthcare professionals to provide comprehensive check-ups.
                </li>
                <ul className="list-disc ml-6">
                  <li>
                    Medical Camps: Organizing periodic health camps in
                    Aanganwadis with the help of volunteer doctors and nurses.
                  </li>
                  <li>
                    Health Records: Maintaining detailed health records for each
                    child to track their progress and identify any health issues
                    early.
                  </li>
                  <li>
                    Follow-up Care: Ensuring that children who need further
                    medical attention receive the necessary follow-up care and
                    treatment.
                  </li>
                </ul>
              </ul>
              <ul className="text-gray-600 list-disc mb-6">
                <li className="mb-1">
                  <span className="font-semibold">Meal Planning:</span> We
                  develop nutritious meal plans tailored to the specific needs
                  of each child, ensuring they receive balanced and healthy
                  diets.
                </li>
                <ul className="list-disc ml-6">
                  <li>
                    Nutritional Assessments: Conducting assessments to determine
                    the dietary needs of the children based on their age, health
                    status, and local food availability.
                  </li>
                  <li>
                    Menu Development: Creating weekly meal plans that include a
                    variety of nutritious foods to meet the children&apos;s
                    dietary requirements.
                  </li>
                  <li>
                    Food Sourcing: Partnering with local farmers and suppliers
                    to source fresh, high-quality ingredients for the meals.
                  </li>
                </ul>
              </ul>
              <ul className="text-gray-600 list-disc mb-6">
                <li className="mb-1">
                  <span className="font-semibold">
                    Sustainability Measures:
                  </span>{" "}
                  We focus on creating long-term strategies to maintain and
                  expand our impact, ensuring that our efforts continue to
                  benefit future generations.
                </li>
                <ul className="list-disc ml-6">
                  <li>
                    Training Programs: Providing training for Aanganwadi staff
                    and community volunteers on nutrition, health, and hygiene
                    practices.
                  </li>
                  <li>
                    Community Engagement: Involving the local community in our
                    initiatives to foster a sense of ownership and ensure
                    long-term sustainability.
                  </li>
                  <li>
                    Monitoring and Evaluation: Implementing robust monitoring
                    and evaluation systems to track the progress and impact of
                    our programs.
                  </li>
                </ul>
              </ul>
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
          <div className="container mx-auto px-4 ">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Get Involved
            </h2>
            <p className="text-lg mb-6 text-center">
              Together, we can make a difference. Support our mission and help
              us create a better world for children and our planet. <br /> Your
              support is crucial to our mission. There are many ways you can get
              involved and help us turn hunger into hope:
            </p>
            <div className="flex justify-center">
              <div>
                <ul className="text-gray-100 list-disc mb-6 ">
                  <li className="mb-1">
                    <span className="font-semibold">Donate:</span> Your
                    financial contributions can make a significant impact. Every
                    donation helps us provide better nutrition and healthcare to
                    the children.
                  </li>
                  <ul className="list-disc ml-6">
                    <li>
                      One-Time Donations: Make a one-time donation to support
                      our immediate needs.
                    </li>
                    <li>
                      Monthly Giving: Become a monthly donor to provide ongoing
                      support for our programs.
                    </li>
                    <li>
                      Corporate Giving: Encourage your company to match your
                      donation or sponsor our initiatives.
                    </li>
                  </ul>
                </ul>
                <ul className="text-gray-100 list-disc mb-6">
                  <li className="mb-1">
                    <span className="font-semibold">Volunteer:</span> Join our
                    team of dedicated volunteers who work tirelessly to support
                    our initiatives. Your time and skills can make a real
                    difference.
                  </li>
                  <ul className="list-disc ml-6">
                    <li>
                      Event Volunteers: Help us organize and run fundraising
                      events and health camps.
                    </li>
                    <li>
                      Professional Volunteers: Share your expertise in areas
                      such as healthcare, nutrition, education, and project
                      management.
                    </li>
                    <li>
                      Community Outreach: Assist in spreading awareness about
                      our cause and engaging the local community.
                    </li>
                  </ul>
                </ul>
                <ul className="text-gray-100 list-disc mb-6">
                  <li className="mb-1">
                    <span className="font-semibold">Spread the Word:</span> Help
                    us raise awareness about our cause by sharing our mission
                    with your friends, family, and social networks.
                  </li>
                  <ul className="list-disc ml-6">
                    <li>
                      Social Media: Follow us on social media and share our
                      posts to reach a wider audience.
                    </li>
                    <li>
                      Word of Mouth: Talk to your friends and family about our
                      work and encourage them to get involved.
                    </li>
                    <li>
                      Advocacy: Advocate for policies and programs that support
                      child nutrition and health at the local and national
                      levels.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="space-x-4 text-center">
              <Button
                variant="outline"
                className="bg-white text-emerald-600 hover:bg-emerald-700"
              >
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
        <section className="mb-16">
          <h2 className="text-2xl mt-8 md:text-3xl font-bold mb-8 text-emerald-800 text-center">
            See Our Impacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-6">
            {impactGallery.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-emerald-700">
                    {item.title}
                  </h3>
                  <Link
                    href="#"
                    className="text-emerald-600 hover:text-emerald-800 font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-800 text-center">
            Experience Our Journey
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Watch our story and see how we&apos;ve made a difference over the
            years.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
