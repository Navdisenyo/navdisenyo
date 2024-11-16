import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Paintbrush, Code, Megaphone, UserCircle, ShoppingBag, Shield } from "lucide-react"

const services = [
  {
    icon: Paintbrush,
    title: "Design",
    description: "Designing a website is a task that many people are not equipped to do on their own. This is why we create websites. As web designers, we take every aspect of a customer's idea or goal and help them achieve their vision. This gives customers something that they can be proud of and that drives traffic to their site."
  },
  {
    icon: Code,
    title: "Development",
    description: "We develop stunning web projects, AI application and SaaS applications. If you need A+ quality AI & SaaS development or backend functionality for your website, Mobile apps or CMS system, Our expert developers will help you make your creative business ideas become reality."
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Digital Marketing is the process of gaining traffic or attention through digital channels with the goal of purchasing products , and therefore, earning revenue. Digital marketing is always evolving as new tools for marketing become available and more advanced analytics become available to measure results."
  },
  {
    icon: Shield,
    title: "Blockchain",
    description: "Trying to find blockchain development company? Blockchain & Trading Bot projects are revolutionizing the world with blockchain technology. We are a leading crypto exchange & blockchain development firm. With our proficient team of experts, we would build your blockchain project in the most cost-effective manner."
  },
  {
    icon: ShoppingBag,
    title: "eCommerce",
    description: "Our skilled team of professionals will listen closely to your goals and dreams, take the time to learn more about your business and the message you wish to convey, and will ensure the end result is not only an excellent online store that sells your products or services, but a website that uniquely represents and reflects you."
  },
  {
    icon: UserCircle,
    title: "Application",
    description: "Mobile app development has become the biggest thing in today's business world because everyone wants their business to be portable and take advantage of the crowd that is always online and available. We're a team of experienced mobile app developers. We have experience in multiple platforms for mobile apps like Android and iOS."
  },
]

export default function ServiceBoxes() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-primary-foreground hover:shadow-lg hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#0470f3] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            <CardHeader className="relative z-10">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground bg-cyan-900">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}