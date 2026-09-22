export interface Project {
  id: string;
  title: string;
  category: 'Software Engineering' | 'Web Development' | 'UI/UX';
  year?: string;
  description: string;
  features?: string[];
  technologies: string[];
  liveUrl?: string;
  imageUrl?: string;
  isPreviewOnly?: boolean;
  featured?: boolean;
  badge?: string;
  visualType: 'sms-system' | 'figma-portal' | 'voyageur' | 'gallery' | 'calculator' | 'music' | 'queueless' | 'focusflow' | 'rentie';
}

export interface SkillItem {
  name: string;
  isLearning?: boolean;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'tech' | 'se' | 'uiux' | 'web';
  skills: SkillItem[];
}

export interface TimelineItem {
  title: string;
  roleOrPhase: string;
  description: string;
  technologies: string[];
  highlight?: string;
}

export interface AcademicAchievement {
  semester: string;
  gpa: string;
  description: string;
  badge: string;
}
