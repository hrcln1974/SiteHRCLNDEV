export interface Service {
  icon: JSX.Element
  title: string
  description: string
  features: string[]
}

export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link: string
}

export interface Testimonial {
  id: number
  name: string
  position: string
  image: string
  rating: number
  text: string
}

export interface Technology {
  name: string
  icon: JSX.Element
  color: string
}

export interface ContactInfo {
  icon: JSX.Element
  title: string
  info: string
  link: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface ProcessStep {
  icon: JSX.Element
  title: string
  description: string
  color: string
}

export interface Stat {
  end: number
  suffix: string
  label: string
  duration: number
}