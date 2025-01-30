import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";
import React from "react";
import {
  FaApple,
  FaDollarSign,
  FaHandHoldingHeart,
  FaHeart,
  FaLeaf,
  FaShare,
  FaStethoscope,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about who we are, our mission, vision, and the values that drive our work.",
};

interface ApproachCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

function ApproachCard({ icon, title, description, items }: ApproachCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <FaHeart className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface InvolvementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  buttonText: React.ReactNode;
}

function InvolvementCard({
  icon,
  title,
  description,
  items,
  buttonText,
}: InvolvementCardProps) {
  return (
    <Card className="bg-emerald-700/30 border-emerald-500/50 text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1">
                <div className="h-2 w-2 rounded-full bg-emerald-300" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="secondary"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

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
                src="/about-hero.jpg"
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
                Welcome to HungerToHope, where we are dedicated to transforming
                the lives of children in Anganwadis often the only wholesome
                meal these young minds receive each day. Our mission is to
                ensure that every child receives the nutrition and healthcare
                they need to thrive. Through our comprehensive and sustainable
                approach, we aim to turn hunger into hope for these young lives.
              </p>
              <p className="text-gray-600 mb-4">
                Millions of children in Aanganwadis across India suffer from
                malnutrition and lack of proper healthcare. These children are
                the future, and it is our responsibility to ensure they have the
                opportunity to grow and develop healthily. HungerToHope is
                dedicated to bridging this gap by providing essential resources
                and support.
              </p>
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                <Link href="/our-works">Learn More About Our Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-800 text-center">
            Why We Do What We Do
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto text-center">
            This initiative supports the United Nations Sustainable Development
            Goal of Zero Hunger, striving to end hunger, ensure food security,
            and improve nutrition worldwide.
          </p>

          <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            At Hunger to Hope, we believe that no child should be deprived of
            education due to hunger or malnutrition. Our mission is driven by
            the conviction that every child deserves the opportunity to learn,
            grow, and reach their full potential. By addressing the root causes
            of hunger and malnutrition, we aim to break the cycle of poverty and
            create a brighter future for communities around the world. We are
            committed to providing the nourishment and support needed to ensure
            that every child can thrive academically and personally. Together,
            we can transform lives and turn hunger into hope.
          </p>

          <Tabs defaultValue="fundraising" className="  w-full">
            <TabsList className="grid w-full grid-cols-1 grid-rows-5  h-full sm:grid-cols-2 sm:grid-rows-3 md:h-full  md:grid-rows-1 gap-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="fundraising">Fundraising</TabsTrigger>
              <TabsTrigger value="budget">Budget Planning</TabsTrigger>
              <TabsTrigger value="health">Health Check-ups</TabsTrigger>
              <TabsTrigger value="meal">Meal Planning</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            </TabsList>
            <TabsContent value="fundraising">
              <ApproachCard
                icon={<FaDollarSign className="h-6 w-6 text-emerald-600" />}
                title="Fundraising"
                description="We organize various fundraising events and campaigns to gather the necessary resources to support our initiatives."
                items={[
                  "Community Events: Hosting local events such as charity runs, bake sales, and cultural programs to engage the community and raise funds.",
                  "Online Campaigns: Utilizing social media and crowdfunding platforms to reach a wider audience and encourage online donations.",
                  "Corporate Partnerships: Collaborating with businesses to secure sponsorships and donations, and to organize joint fundraising activities.",
                ]}
              />
            </TabsContent>
            <TabsContent value="budget">
              <ApproachCard
                icon={<FaDollarSign className="h-6 w-6 text-emerald-600" />}
                title="Budget Planning"
                description="Our finance team meticulously plans and allocates funds to ensure that every dollar is used effectively and efficiently."
                items={[
                  "Needs Assessment: Conducting thorough assessments to understand the specific financial needs of each Aanganwadi.",
                  "Detailed Budgeting: Creating a comprehensive budget that covers all aspects of the project, from health check-ups to meal planning and sustainability measures.",
                  "Financial Monitoring: Regularly reviewing and adjusting the budget to ensure optimal use of resources.",
                ]}
              />
            </TabsContent>
            <TabsContent value="health">
              <ApproachCard
                icon={<FaStethoscope className="h-6 w-6 text-emerald-600" />}
                title="Health Check-ups"
                description="Regular health assessments are conducted to monitor and improve the well-being of the children. We collaborate with healthcare professionals to provide comprehensive check-ups."
                items={[
                  "Medical Camps: Organizing periodic health camps in Aanganwadis with the help of volunteer doctors and nurses.",
                  "Health Records: Maintaining detailed health records for each child to track their progress and identify any health issues early.",
                  "Follow-up Care: Ensuring that children who need further medical attention receive the necessary follow-up care and treatment.",
                ]}
              />
            </TabsContent>
            <TabsContent value="meal">
              <ApproachCard
                icon={<FaApple className="h-6 w-6 text-emerald-600" />}
                title="Meal Planning"
                description="We develop nutritious meal plans tailored to the specific needs of each child, ensuring they receive balanced and healthy diets."
                items={[
                  "Nutritional Assessments: Conducting assessments to determine the dietary needs of the children based on their age, health status, and local food availability.",
                  "Menu Development: Creating weekly meal plans that include a variety of nutritious foods to meet the children's dietary requirements.",
                  "Food Sourcing: Partnering with local farmers and suppliers to source fresh, high-quality ingredients for the meals.",
                ]}
              />
            </TabsContent>
            <TabsContent value="sustainability">
              <ApproachCard
                icon={<FaLeaf className="h-6 w-6 text-emerald-600" />}
                title="Sustainability Measures"
                description="We focus on creating long-term strategies to maintain and expand our impact, ensuring that our efforts continue to benefit future generations."
                items={[
                  "Training Programs: Providing training for Aanganwadi staff and community volunteers on nutrition, health, and hygiene practices.",
                  "Community Engagement: Involving the local community in our initiatives to foster a sense of ownership and ensure long-term sustainability.",
                  "Monitoring and Evaluation: Implementing robust monitoring and evaluation systems to track the progress and impact of our programs.",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-800 text-center">
            Our Team
          </h2>
          <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Arth Bhardwaj",
                role: "Founder",
                image: "/arth-img.jpeg",
              },
              {
                name: "Avni Bhardwaj",
                role: "Co-founder",
                image: "/avni-img.jpeg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className=" flex flex-col justify-center items-center rounded-lg overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="rounded-full"
                />
                <div className="p-4 text-center">
                  <Link
                    href={`/about-us/${member.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                    className="font-bold text-2xl mb-1 text-black hover:underline"
                  >
                    {member.name}
                  </Link>
                  <p className="text-lg text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}

            <div className=" flex flex-col justify-center items-center rounded-lg overflow-hidden">
              <Image
                src="/tanya.jpg"
                alt="tanya"
                width={250}
                height={250}
                className="rounded-full"
              />
              <div className="p-4 text-center">
                <p className="font-bold text-2xl mb-1 text-black ">Tanya</p>
                <p className="text-lg text-gray-600">Project Manager</p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center rounded-lg overflow-hidden">
              <Image
                src="/anjali.jpg"
                alt="annjali"
                width={250}
                height={250}
                className="rounded-full"
              />
              <div className="p-4 text-center">
                <p className="font-bold text-2xl mb-1 text-black ">Anjali Kang</p>
                <p className="text-lg text-gray-600">Project Officer</p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center rounded-lg overflow-hidden">
              <Image
                src="/tanya.jpg"
                alt="tanya"
                width={250}
                height={250}
                className="rounded-full"
              />
              <div className="p-4 text-center">
                <p className="font-bold text-2xl mb-1 text-black ">Mehar Bajaj</p>
                <p className="text-lg text-gray-600">Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Get Involved
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            Together, we can make a difference. Support our mission and help us
            create a better world for children and our planet. Your support is
            crucial to our mission. There are many ways you can get involved and
            help us turn hunger into hope:
          </p>

          <Tabs defaultValue="donate" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full sm:grid-cols-3 grid-cols-1  mb-10 h-full bg-emerald-700/50">
              <TabsTrigger
                value="donate"
                className="text-white data-[state=active]:bg-emerald-500"
              >
                Donate
              </TabsTrigger>
              <TabsTrigger
                value="volunteer"
                className="text-white data-[state=active]:bg-emerald-500"
              >
                Volunteer
              </TabsTrigger>
              <TabsTrigger
                value="spread"
                className="text-white data-[state=active]:bg-emerald-500"
              >
                Spread the Word
              </TabsTrigger>
            </TabsList>
            <TabsContent value="donate">
              <InvolvementCard
                icon={<FaHeart className="h-8 w-8 text-emerald-300" />}
                title="Donate"
                description="Your financial contributions can make a significant impact. Every donation helps us provide better nutrition and healthcare to the children."
                items={[
                  "One-Time Donations: Make a one-time donation to support our immediate needs.",
                  "Monthly Giving: Become a monthly donor to provide ongoing support for our programs.",
                  "Corporate Giving: Encourage your company to match your donation or sponsor our initiatives.",
                ]}
                buttonText={
                  <a target="_blank" href="https://gofund.me/c4ef3801">
                    Donate Now
                  </a>
                }
              />
            </TabsContent>
            <TabsContent value="volunteer">
              <InvolvementCard
                icon={
                  <FaHandHoldingHeart className="h-8 w-8 text-emerald-300" />
                }
                title="Volunteer"
                description="Join our team of dedicated volunteers who work tirelessly to support our initiatives. Your time and skills can make a real difference."
                items={[
                  "Event Volunteers: Help us organize and run fundraising events and health camps.",
                  "Professional Volunteers: Share your expertise in areas such as healthcare, nutrition, education, and project management.",
                  "Community Outreach: Assist in spreading awareness about our cause and engaging the local community.",
                ]}
                buttonText={<Link href="/get-involved">Get Involved</Link>}
              />
            </TabsContent>
            <TabsContent value="spread">
              <InvolvementCard
                icon={<FaShare className="h-8 w-8 text-emerald-300" />}
                title="Spread the Word"
                description="Help us raise awareness about our cause by sharing our mission with your friends, family, and social networks."
                items={[
                  "Social Media: Follow us on social media and share our posts to reach a wider audience.",
                  "Word of Mouth: Talk to your friends and family about our work and encourage them to get involved.",
                  "Advocacy: Advocate for policies and programs that support child nutrition and health at the local and national levels.",
                ]}
                buttonText={<Link href="/get-involved">Join Us</Link>}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-800 text-center">
            Experience Our Journey
          </h2>
          <div className="max-w-3xl  mx-auto">
            <div className="aspect-w-16 h-96 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/Cotv_lMW_wM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
                height={800}
              ></iframe>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Watch our story and see how we&apos;ve made a difference over the
              years.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
