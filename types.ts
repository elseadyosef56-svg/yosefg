export enum Section {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  VISION = 'VISION',
  TECH_HUB = 'TECH_HUB',
  CONTACT = 'CONTACT',
  REGISTER = 'REGISTER'
}

export interface NavItem {
  id: Section;
  label: string;
  icon: React.ReactNode;
}