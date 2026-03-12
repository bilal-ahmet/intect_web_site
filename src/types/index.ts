export interface Solution {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  color: string
}

export interface Value {
  id: string
  title: string
  description: string
  icon: string
}

export interface TeamSection {
  id: string
  title: string
  description: string
  count: string
  icon: string
}

export interface Stat {
  id: string
  value: string
  label: string
  description: string
  icon: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  workingHours: string
}

export interface TechStack {
  category: string
  items: string[]
}

export interface Approach {
  step: string
  title: string
  description: string
}
