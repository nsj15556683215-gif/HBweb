import { Building2, Factory, Award } from 'lucide-react';
import { Cpu, Wrench, Heart, Globe } from 'lucide-react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Settings, Gauge, Zap, Shield, LucideIcon } from 'lucide-react';

export const aboutIcons: Record<string, LucideIcon> = {
  founded: Building2,
  machines: Factory,
  export: Globe,
  quality: Award,
};


export const advantagesIcons: Record<string, LucideIcon> = {
    cpu: Cpu,
    wrench: Wrench,
    heart: Heart,
    globe: Globe,
};

export const contactIcons: Record<string, LucideIcon> = {
    phone: Phone,
    mail: Mail,
    mapPin:MapPin,
    clock:Clock,
};

export const productIcons: Record<string, LucideIcon> = {
  'auto-dosing': Settings,
  'super-mixer': Gauge,
  'cooling-mixer': Zap,
  'banbury-machine': Shield,
  'mixing-roll': Gauge,
  'strainer': Gauge,
  'calender': Gauge,
  'post-calender': Gauge,
  'winder': Gauge,
  'laminating-machine': Gauge,
  'planetary-extruder': Gauge,
};
