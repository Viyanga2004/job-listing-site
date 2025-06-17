"use client"

<<<<<<< HEAD
import { useState, useMemo } from "react"
=======
import { useState, useEffect } from "react"
>>>>>>> 1f3c7c05beb0f4326186065c3e0b43f6628896d2
import {
  Search,
  MapPin,
  Clock,
<<<<<<< HEAD
  DollarSign,
  Filter,
  Menu,
  X,
  Briefcase,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Job data with all 22 jobs
const jobData = [
  {
    id: 1,
    title: "Work From Home Specialist",
    company: "Remote Solutions Inc.",
    location: "Remote",
=======
  Building,
  ExternalLink,
  Star,
  Users,
  TrendingUp,
  Filter,
  Heart,
  Bell,
  Share2,
  ChevronDown,
  Briefcase,
  DollarSign,
  Mail,
  Phone,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const jobs = [
  {
    id: 1,
    title: "Airport Job",
    company: "Aviation Services",
    location: "Various Locations",
>>>>>>> 1f3c7c05beb0f4326186065c3e0b43f6628896d2
    type: "Full-time",
    salary: "$45,000 - $65,000",
    salaryMin: 45000,
    salaryMax: 65000,
    description:
<<<<<<< HEAD
      "Join our remote team and work from the comfort of your home. Perfect opportunity for self-motivated individuals looking to balance work and life.",
    category: "Remote Work",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/4QX811T/?sub1=fromhome",
    featured: true,
    urgent: false,
    postedDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$120,000 - $180,000",
    salaryMin: 120000,
    salaryMax: 180000,
    description:
      "Build the next generation of Google products. Work with cutting-edge technology and brilliant minds to solve complex problems at scale.",
    category: "Technology",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/4QZLTQG/?sub2=googlejob",
    featured: true,
    urgent: true,
    postedDate: "2024-01-14",
  },
  {
    id: 3,
    title: "Warehouse Associate",
    company: "Amazon",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$35,000 - $45,000",
    salaryMin: 35000,
    salaryMax: 45000,
    description:
      "Join the Amazon team and be part of the world's largest e-commerce operation. Great benefits and career growth opportunities.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/4R21QH3/?sub3=amazonjob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-13",
  },
  {
    id: 4,
    title: "Delivery Driver",
    company: "FedEx",
    location: "Various Cities",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    salaryMin: 40000,
    salaryMax: 55000,
    description:
      "Deliver packages and provide excellent customer service as a FedEx driver. Competitive pay and excellent benefits package.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/51F5PFD/?sub2=fedexjobs",
    featured: false,
    urgent: true,
    postedDate: "2024-01-12",
  },
  {
    id: 5,
    title: "Store Associate",
    company: "Aldi",
    location: "Multiple Locations",
    type: "Part-time",
    salary: "$28,000 - $35,000",
    salaryMin: 28000,
    salaryMax: 35000,
    description:
      "Provide exceptional customer service and maintain store operations at Aldi. Great entry-level opportunity with growth potential.",
    category: "Retail",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/548B3D1/?sub2=aldijob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-11",
  },
  {
    id: 6,
    title: "Airport Ground Crew",
    company: "Airport Services",
    location: "Major Airports",
    type: "Full-time",
    salary: "$38,000 - $48,000",
    salaryMin: 38000,
    salaryMax: 48000,
    description:
      "Work in a dynamic airport environment handling aircraft ground operations. Exciting opportunity in aviation industry.",
    category: "Airlines",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/54MF58T/?sub4=airportjob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-10",
  },
  {
    id: 7,
    title: "Social Media Manager",
    company: "Instagram",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$70,000 - $95,000",
    salaryMin: 70000,
    salaryMax: 95000,
    description:
      "Manage social media presence and create engaging content for Instagram. Join one of the world's leading social platforms.",
    category: "Technology",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/54Q6WQ3/?sub2=instagramjob",
    featured: true,
    urgent: false,
    postedDate: "2024-01-09",
  },
  {
    id: 8,
    title: "Cleaning Specialist",
    company: "CleanPro Services",
    location: "Multiple Locations",
    type: "Part-time",
    salary: "$25,000 - $32,000",
    salaryMin: 25000,
    salaryMax: 32000,
    description:
      "Maintain cleanliness and hygiene standards in commercial and residential properties. Flexible scheduling available.",
    category: "Cleaning",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/616SFKD/?sub4=cleaningjob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-08",
  },
  {
    id: 9,
    title: "Quick Hire Position",
    company: "Rapid Staffing",
    location: "Various",
    type: "Temporary",
    salary: "$30,000 - $40,000",
    salaryMin: 30000,
    salaryMax: 40000,
    description:
      "Immediate hiring for various positions. Quick application process with same-day interviews available.",
    category: "All Jobs",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/619L72L/?sub2=quickhirejob",
    featured: false,
    urgent: true,
    postedDate: "2024-01-16",
  },
  {
    id: 10,
    title: "Registered Nurse",
    company: "Healthcare Plus",
    location: "Multiple Hospitals",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    salaryMin: 65000,
    salaryMax: 85000,
    description:
      "Provide compassionate patient care in a supportive healthcare environment. Join our dedicated team of healthcare professionals.",
    category: "Healthcare",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/61C13R7/?sub3=nursejob",
    featured: true,
    urgent: true,
    postedDate: "2024-01-07",
  },
  {
    id: 11,
    title: "Food Quality Tester",
    company: "Food Safety Corp",
    location: "Food Processing Plants",
    type: "Full-time",
    salary: "$42,000 - $52,000",
    salaryMin: 42000,
    salaryMax: 52000,
    description:
      "Ensure food quality and safety standards in food processing facilities. Great opportunity in food industry.",
    category: "Food Service",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/61DCZHS/?sub3=foodtesterjob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-06",
  },
  {
    id: 12,
    title: "Remote Work Specialist",
    company: "WorkFromHome Co.",
    location: "Remote",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    salaryMin: 50000,
    salaryMax: 70000,
    description:
      "Flexible remote work opportunity with competitive benefits. Perfect for experienced professionals seeking work-life balance.",
    category: "Remote Work",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/79FZ7K7/?sub3=workhome",
    featured: true,
    urgent: false,
    postedDate: "2024-01-05",
  },
  {
    id: 13,
    title: "Airport Operations Specialist",
    company: "Airport Authority",
    location: "International Airports",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    salaryMin: 45000,
    salaryMax: 60000,
    description:
      "Available positions in airport operations and management. Join our team ensuring smooth airport operations.",
    category: "Airlines",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/35S8WJD4/?sub3=airavila",
    featured: false,
    urgent: false,
    postedDate: "2024-01-04",
  },
  {
    id: 14,
    title: "Google Career Opportunity",
    company: "Google",
    location: "Multiple Offices",
    type: "Full-time",
    salary: "$90,000 - $150,000",
    salaryMin: 90000,
    salaryMax: 150000,
    description:
      "Join Google and work on products used by billions of people worldwide. Multiple positions available across different teams.",
    category: "Technology",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/35SB9F4P/?sub4=gbavail",
    featured: true,
    urgent: true,
    postedDate: "2024-01-03",
  },
  {
    id: 15,
    title: "FedEx Career Position",
    company: "FedEx",
    location: "Distribution Centers",
    type: "Full-time",
    salary: "$42,000 - $58,000",
    salaryMin: 42000,
    salaryMax: 58000,
    description: "Available career opportunities at FedEx distribution centers. Join the global logistics leader.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/361X789B/?sub5=fdxavail",
    featured: false,
    urgent: true,
    postedDate: "2024-01-02",
  },
  {
    id: 16,
    title: "Staffing Specialist",
    company: "Kelly Services",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    salaryMin: 40000,
    salaryMax: 55000,
    description:
      "Help connect talented individuals with great career opportunities. Join our staffing and recruitment team.",
    category: "All Jobs",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/377T3HNL/?sub2=KellyServices",
    featured: false,
    urgent: false,
    postedDate: "2024-01-01",
  },
  {
    id: 17,
    title: "Retail Associate",
    company: "Dollar Tree",
    location: "Store Locations",
    type: "Part-time",
    salary: "$24,000 - $30,000",
    salaryMin: 24000,
    salaryMax: 30000,
    description:
      "Provide excellent customer service at Dollar Tree retail locations. Great entry-level opportunity with flexible scheduling.",
    category: "Retail",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/37DP63S4/?sub5=DollarTree",
    featured: false,
    urgent: false,
    postedDate: "2023-12-30",
  },
  {
    id: 18,
    title: "Flight Attendant (Spanish Speaking)",
    company: "American Airlines",
    location: "Major Airports",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    salaryMin: 50000,
    salaryMax: 70000,
    description:
      "Provide exceptional service to passengers on American Airlines flights. Spanish language skills required.",
    category: "Airlines",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38BQ7W6T/?sub4=AmAir",
    featured: true,
    urgent: false,
    postedDate: "2023-12-29",
  },
  {
    id: 19,
    title: "Amazon Fulfillment Associate",
    company: "Amazon",
    location: "Fulfillment Centers",
    type: "Full-time",
    salary: "$36,000 - $46,000",
    salaryMin: 36000,
    salaryMax: 46000,
    description:
      "Work in Amazon fulfillment centers with competitive benefits. Be part of the world's largest e-commerce operation.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38JWFFG5/?sub5=Ama",
    featured: false,
    urgent: false,
    postedDate: "2023-12-28",
  },
  {
    id: 20,
    title: "Housekeeping Supervisor",
    company: "Hotel Management",
    location: "Hotels & Resorts",
    type: "Full-time",
    salary: "$35,000 - $45,000",
    salaryMin: 35000,
    salaryMax: 45000,
    description:
      "Supervise housekeeping operations in hospitality settings. Lead a team to maintain high cleanliness standards.",
    category: "Cleaning",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38K85LLD/?sub5=HouseKeeping",
    featured: false,
    urgent: false,
    postedDate: "2023-12-27",
  },
  {
    id: 21,
    title: "Professional Driver",
    company: "Transport Solutions",
    location: "Various Routes",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    salaryMin: 45000,
    salaryMax: 60000,
    description:
      "Professional driving opportunities with flexible schedules. Join our transportation team with competitive pay.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38KDB8S7/?sub3=Driv",
    featured: false,
    urgent: true,
    postedDate: "2023-12-26",
  },
  {
    id: 22,
    title: "Airport Security Officer",
    company: "Airport Security Services",
    location: "Airport Terminals",
    type: "Full-time",
    salary: "$40,000 - $50,000",
    salaryMin: 40000,
    salaryMax: 50000,
    description:
      "Ensure airport security and passenger safety. Critical role in maintaining aviation security standards.",
    category: "Airlines",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38KFP5JS/?sub3=Airp",
    featured: false,
    urgent: false,
    postedDate: "2023-12-25",
  },
]

// Job categories
const jobCategories = [
  "All Jobs",
  "Remote Work",
  "Technology",
  "Healthcare",
  "Transportation",
  "Retail",
  "Food Service",
  "Cleaning",
  "Airlines",
]

export default function JobPortal() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Jobs")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<(typeof jobData)[0] | null>(null)
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  // Filter jobs based on search term and category
  const filteredJobs = useMemo(() => {
    const filtered = jobData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "All Jobs" || job.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort jobs
    switch (sortBy) {
      case "salary-high":
        filtered.sort((a, b) => b.salaryMax - a.salaryMax)
        break
      case "salary-low":
        filtered.sort((a, b) => a.salaryMin - b.salaryMin)
        break
      case "company":
        filtered.sort((a, b) => a.company.localeCompare(b.company))
        break
      default:
        filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
    }

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const handleApply = (applyLink: string) => {
    window.open(applyLink, "_blank")
  }

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="lg:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-blue-600">JobFinder</span>
              </div>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2"
                />
=======
      "Join our dynamic airport team and be part of the aviation industry. Great benefits and career growth opportunities.",
    fullDescription:
      "We are seeking dedicated professionals to join our airport operations team. This role offers excellent career advancement opportunities in the fast-paced aviation industry. You'll work with cutting-edge technology and be part of ensuring safe, efficient airport operations.",
    tags: ["Aviation", "Customer Service", "Security"],
    url: "https://www.gn3atrk.com/2WH8SDD7/38KFP5JS/?sub1=airport",
    featured: true,
    postedDays: 2,
    category: "Transportation",
    experience: "Entry Level",
    benefits: ["Health Insurance", "401k", "Paid Time Off", "Career Growth"],
    companyLogo: "🛫",
    urgentHiring: true,
  },
  {
    id: 2,
    title: "Driver Job",
    company: "Transport Solutions",
    location: "Multiple Cities",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    salaryMin: 40000,
    salaryMax: 55000,
    description: "Professional driving opportunities with flexible schedules. Clean driving record required.",
    fullDescription:
      "Join our professional driving team with flexible scheduling options. We offer competitive pay, comprehensive benefits, and opportunities for advancement. Perfect for experienced drivers looking for stability and growth.",
    tags: ["Driving", "Transportation", "Logistics"],
    url: "https://www.gn3atrk.com/2WH8SDD7/38KDB8S7/?sub1=Driver",
    featured: false,
    postedDays: 1,
    category: "Transportation",
    experience: "Mid Level",
    benefits: ["Flexible Schedule", "Vehicle Provided", "Gas Allowance"],
    companyLogo: "🚛",
    urgentHiring: false,
  },
  {
    id: 3,
    title: "House Keeping Job",
    company: "Hospitality Group",
    location: "Hotels & Resorts",
    type: "Part-time/Full-time",
    salary: "$30,000 - $42,000",
    salaryMin: 30000,
    salaryMax: 42000,
    description: "Maintain cleanliness and comfort in premium hospitality environments. Training provided.",
    fullDescription:
      "Be part of our hospitality team ensuring guests have exceptional experiences. We provide comprehensive training and offer both part-time and full-time positions with advancement opportunities.",
    tags: ["Hospitality", "Cleaning", "Customer Service"],
    url: "https://www.gn3atrk.com/2WH8SDD7/38K85LLD/?sub1=HKJobs",
    featured: false,
    postedDays: 3,
    category: "Hospitality",
    experience: "Entry Level",
    benefits: ["Training Provided", "Flexible Hours", "Employee Discounts"],
    companyLogo: "🏨",
    urgentHiring: false,
  },
  {
    id: 4,
    title: "Amazon Job",
    company: "Amazon",
    location: "Fulfillment Centers",
    type: "Full-time",
    salary: "$35,000 - $50,000",
    salaryMin: 35000,
    salaryMax: 50000,
    description: "Join the world's largest e-commerce company. Warehouse and logistics positions available.",
    fullDescription:
      "Amazon is hiring for various positions in our fulfillment centers. Join a global leader in e-commerce with excellent benefits, career development programs, and opportunities for advancement.",
    tags: ["E-commerce", "Warehouse", "Logistics"],
    url: "https://www.gn3atrk.com/2WH8SDD7/38JWFFG5/?sub1=Amazon",
    featured: true,
    postedDays: 1,
    category: "Warehouse",
    experience: "Entry Level",
    benefits: ["Health Benefits", "Stock Options", "Career Development", "Tuition Assistance"],
    companyLogo: "📦",
    urgentHiring: true,
  },
  {
    id: 5,
    title: "American Airlines (Spanish)",
    company: "American Airlines",
    location: "Airports Nationwide",
    type: "Full-time",
    salary: "$38,000 - $58,000",
    salaryMin: 38000,
    salaryMax: 58000,
    description: "Bilingual customer service representatives needed. Spanish fluency required.",
    fullDescription:
      "American Airlines is seeking bilingual customer service professionals. This role requires fluency in Spanish and English. Join our team and help provide exceptional service to our diverse customer base.",
    tags: ["Airlines", "Bilingual", "Customer Service"],
    url: "https://www.gn3atrk.com/2WH8SDD7/38BQ7W6T/?sub1=AASJob",
    featured: false,
    postedDays: 4,
    category: "Customer Service",
    experience: "Mid Level",
    benefits: ["Flight Benefits", "Health Insurance", "Retirement Plan"],
    companyLogo: "✈️",
    urgentHiring: false,
  },
  {
    id: 6,
    title: "Dollar Tree Job",
    company: "Dollar Tree",
    location: "Retail Stores",
    type: "Part-time/Full-time",
    salary: "$25,000 - $35,000",
    salaryMin: 25000,
    salaryMax: 35000,
    description: "Retail positions available in fast-growing discount retail chain. Growth opportunities.",
    fullDescription:
      "Join Dollar Tree, one of the fastest-growing discount retail chains. We offer flexible scheduling, competitive pay, and excellent opportunities for career advancement in retail management.",
    tags: ["Retail", "Sales", "Customer Service"],
    url: "https://www.gn3atrk.com/2WH8SDD7/37DP63S4/?sub1=DTJob",
    featured: false,
    postedDays: 5,
    category: "Retail",
    experience: "Entry Level",
    benefits: ["Employee Discount", "Flexible Schedule", "Advancement Opportunities"],
    companyLogo: "🛒",
    urgentHiring: false,
  },
  {
    id: 7,
    title: "Work From Home Job",
    company: "Remote Solutions",
    location: "Remote",
    type: "Full-time",
    salary: "$45,000 - $70,000",
    salaryMin: 45000,
    salaryMax: 70000,
    description: "Flexible remote work opportunities. Perfect work-life balance with competitive compensation.",
    fullDescription:
      "Join our remote team and enjoy the perfect work-life balance. We offer competitive compensation, comprehensive benefits, and the flexibility to work from anywhere. Ideal for self-motivated professionals.",
    tags: ["Remote", "Flexible", "Technology"],
    url: "https://www.gn3atrk.com/2WH8SDD7/4QX811T/?sub1=WFHJob",
    featured: true,
    postedDays: 1,
    category: "Technology",
    experience: "Mid Level",
    benefits: ["Work From Home", "Flexible Hours", "Tech Stipend", "Health Benefits"],
    companyLogo: "💻",
    urgentHiring: true,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Found Airport Job",
    content:
      "Seek A Job helped me land my dream job at the airport. The process was smooth and the support was excellent!",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Mike Rodriguez",
    role: "Remote Worker",
    content: "I found the perfect work-from-home position through this platform. Highly recommended!",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    name: "Emily Chen",
    role: "Driver",
    content: "Great platform with legitimate job opportunities. Found my driving job within a week!",
    rating: 5,
    avatar: "👩‍🚗",
  },
]

export default function JobListingWebsite() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedExperience, setSelectedExperience] = useState("all")
  const [salaryRange, setSalaryRange] = useState([0, 100000])
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [email, setEmail] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNewsletter, setShowNewsletter] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Show newsletter popup after 5 seconds
    const timer = setTimeout(() => setShowNewsletter(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || job.category === selectedCategory
      const matchesExperience = selectedExperience === "all" || job.experience === selectedExperience
      const matchesSalary = job.salaryMin >= salaryRange[0] && job.salaryMax <= salaryRange[1]

      return matchesSearch && matchesCategory && matchesExperience && matchesSalary
    })
    setFilteredJobs(filtered)
  }, [searchTerm, selectedCategory, selectedExperience, salaryRange])

  const handleApply = (url: string) => {
    window.open(url, "_blank")
  }

  const toggleFavorite = (jobId: number) => {
    setFavorites((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  const shareJob = (job: any) => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Check out this job opportunity: ${job.title} at ${job.company}`,
        url: window.location.href,
      })
    }
  }

  const categories = ["all", ...Array.from(new Set(jobs.map((job) => job.category)))]
  const experiences = ["all", ...Array.from(new Set(jobs.map((job) => job.experience)))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Seek A Job
                </h1>
                <p className="text-xs text-gray-500">Your Career Partner</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors cursor-pointer">
                  <Users className="w-4 h-4" />
                  <span>10,000+ Jobs</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors cursor-pointer">
                  <TrendingUp className="w-4 h-4" />
                  <span>Growing Daily</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors cursor-pointer">
                  <Award className="w-4 h-4" />
                  <span>Verified</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowNewsletter(true)}
                className="border-blue-200 hover:bg-blue-50"
              >
                <Bell className="w-4 h-4 mr-2" />
                Job Alerts
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-100 pt-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>10,000+ Jobs</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>Growing Daily</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowNewsletter(true)}
                  className="w-full border-blue-200 hover:bg-blue-50"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Job Alerts
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />7 New Jobs Added Today
              </Badge>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Find Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                Dream Job
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover amazing career opportunities from top companies. Your next adventure starts here with verified
              employers and competitive salaries.
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-blue-100">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search jobs, companies, or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-4 py-4 text-lg border-0 focus:ring-2 focus:ring-blue-500 rounded-2xl bg-transparent"
                    />
                  </div>
                  <Button
                    onClick={() => setShowFilters(!showFilters)}
                    variant="outline"
                    className="px-6 py-4 rounded-2xl border-blue-200 hover:bg-blue-50"
                  >
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                  </Button>
                  <Button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Search Jobs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category === "all" ? "All Categories" : category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                      <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="All Levels" />
                        </SelectTrigger>
                        <SelectContent>
                          {experiences.map((experience) => (
                            <SelectItem key={experience} value={experience}>
                              {experience === "all" ? "All Levels" : experience}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fulltime" />
                          <label htmlFor="fulltime" className="text-sm">
                            Full-time
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="parttime" />
                          <label htmlFor="parttime" className="text-sm">
                            Part-time
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { number: "7+", label: "Active Jobs", icon: Briefcase, color: "blue" },
                { number: "100%", label: "Verified Companies", icon: CheckCircle, color: "green" },
                { number: "24/7", label: "Support Available", icon: Users, color: "purple" },
                { number: "95%", label: "Success Rate", icon: TrendingUp, color: "indigo" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-${stat.color}-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Featured Opportunities</h3>
            <p className="text-xl text-gray-600">Hand-picked jobs from trusted employers</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <Card
                key={job.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 cursor-pointer relative overflow-hidden ${
                  job.featured ? "ring-2 ring-blue-200 shadow-lg" : ""
                } ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isLoaded ? "fadeInUp 0.6s ease-out forwards" : "none",
                }}
              >
                {/* Urgent Hiring Badge */}
                {job.urgentHiring && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 animate-pulse">
                      Urgent Hiring
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl">{job.companyLogo}</div>
                      {job.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {job.postedDays} day{job.postedDays !== 1 ? "s" : ""} ago
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(job.id)
                        }}
                        className="p-2 hover:bg-red-50"
                      >
                        <Heart
                          className={`w-4 h-4 ${favorites.includes(job.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          shareJob(job)
                        }}
                        className="p-2 hover:bg-blue-50"
                      >
                        <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                    {job.title}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold text-green-600">{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {job.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-600">
                        +{job.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 rounded-xl border-blue-200 hover:bg-blue-50"
                          onClick={() => setSelectedJob(job)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-3">
                            <span className="text-2xl">{job.companyLogo}</span>
                            <div>
                              <h3 className="text-xl font-bold">{job.title}</h3>
                              <p className="text-gray-600">{job.company}</p>
                            </div>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-gray-500" />
                              <span className="font-semibold text-green-600">{job.salary}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Briefcase className="w-4 h-4 text-gray-500" />
                              <span>{job.experience}</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Job Description</h4>
                            <p className="text-gray-600 leading-relaxed">{job.fullDescription}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Benefits</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {job.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Skills & Tags</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button
                            onClick={() => handleApply(job.url)}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            Apply Now
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      onClick={() => handleApply(job.url)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Apply Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-6">
                <Search className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">No jobs found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedExperience("all")
                }}
                variant="outline"
                className="border-blue-200 hover:bg-blue-50"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h3>
            <p className="text-xl text-gray-600">Hear from our successful job seekers</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Popup */}
      <Dialog open={showNewsletter} onOpenChange={setShowNewsletter}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              Get Job Alerts
            </DialogTitle>
            <DialogDescription className="text-center">
              Never miss out on your dream job. Get notified when new opportunities match your preferences.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl"
            />
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl"
              onClick={() => {
                // Handle newsletter signup
                setShowNewsletter(false)
                setEmail("")
              }}
            >
              Subscribe to Job Alerts
            </Button>
            <p className="text-xs text-gray-500 text-center">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Seek A Job</h4>
                  <p className="text-blue-200">Your trusted career partner</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                We connect talented individuals with amazing career opportunities. Join thousands of successful job
                seekers who found their dream jobs through our platform.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
>>>>>>> 1f3c7c05beb0f4326186065c3e0b43f6628896d2
              </div>
            </div>

            <div>
<<<<<<< HEAD
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Post a Job
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className={`lg:w-64 ${sidebarOpen ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Job Categories</h3>
                  <div className="space-y-2">
                    {jobCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                        <span className="float-right text-xs text-gray-400">
                          {category === "All Jobs"
                            ? jobData.length
                            : jobData.filter((job) => job.category === category).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Temporary"].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="newest">Newest First</option>
                    <option value="salary-high">Salary: High to Low</option>
                    <option value="salary-low">Salary: Low to High</option>
                    <option value="company">Company A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === "All Jobs" ? "All Jobs" : selectedCategory}
                  </h1>
                  <p className="text-gray-600">
                    Showing {filteredJobs.length} jobs
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm lg:hidden"
                  >
                    <option value="newest">Newest First</option>
                    <option value="salary-high">Salary: High to Low</option>
                    <option value="salary-low">Salary: Low to High</option>
                    <option value="company">Company A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                              {job.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Featured</Badge>
                              )}
                              {job.urgent && <Badge className="bg-red-100 text-red-800 border-red-200">Urgent</Badge>}
                            </div>
                            <p className="text-blue-600 font-medium">{job.company}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSaveJob(job.id)}
                            className="text-gray-400 hover:text-blue-600"
                          >
                            {savedJobs.includes(job.id) ? (
                              <BookmarkCheck className="h-5 w-5" />
                            ) : (
                              <Bookmark className="h-5 w-5" />
                            )}
                          </Button>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="text-gray-500 text-xs">Posted {getTimeAgo(job.postedDate)}</div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <Badge variant="secondary" className="text-xs">
                            {job.category}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={() => setSelectedJob(job)} className="text-sm">
                              Details
                            </Button>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-sm"
                              onClick={() => handleApply(job.applyLink)}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or browse all available positions.</p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All Jobs")
                  }}
                >
                  View All Jobs
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredJobs.length > 10 && (
              <div className="text-center mt-6">
                <Button variant="outline" className="w-full sm:w-auto">
                  Load More Jobs
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                    {selectedJob.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Featured</Badge>
                    )}
                    {selectedJob.urgent && <Badge className="bg-red-100 text-red-800 border-red-200">Urgent</Badge>}
                  </div>
                  <p className="text-lg text-blue-600 font-medium">{selectedJob.company}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedJob(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedJob.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedJob.type}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {selectedJob.salary}
                </div>
                <Badge variant="secondary">{selectedJob.category}</Badge>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Relevant experience in the field</li>
                  <li>Strong communication skills</li>
                  <li>Ability to work in a team environment</li>
                  <li>Problem-solving abilities</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleApply(selectedJob.applyLink)}
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" onClick={() => setSelectedJob(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simple Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-lg font-bold text-blue-600">JobFinder</span>
            </div>
            <div className="text-sm text-gray-600">&copy; 2024 JobFinder. All rights reserved.</div>
          </div>
        </div>
      </footer>
=======
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Seek A Job. All rights reserved. Made with ❤️ for job seekers worldwide.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
>>>>>>> 1f3c7c05beb0f4326186065c3e0b43f6628896d2
    </div>
  )
}
