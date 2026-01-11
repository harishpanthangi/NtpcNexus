
export const CATEGORIES = ['NTPC', 'Ministry / CEA', 'Mobile Apps'];

export const MOCK_APPS = [
  { id: '1', name: 'REAL TIME MARKET', category: 'Corporate', platform: 'Web', description: 'Central management for financial and operational resources.', icon: 'fa-database', usageCount: 5000 },
  { id: '2', name: 'DREAMS 2.0', category: 'Employee', platform: 'Both', description: 'Employee self-service, leave, and payroll portal.', icon: 'fa-users', usageCount: 12000 },
  { id: '3', name: 'Vendor Enlishment Portal', category: 'Operations', platform: 'Web', description: 'Monitoring and tracking of fuel supply across plants.', icon: 'fa-gas-pump', usageCount: 800 },
  { id: '4', name: 'Unified DSM', category: 'Business', platform: 'Web', description: 'Streamlined bidding and vendor management system.', icon: 'fa-shopping-cart', usageCount: 2500 },
  { id: '5', name: 'NTPC Mobile One', category: 'Mobile', platform: 'Mobile', description: 'Consolidated mobile app for all NTPC services.', icon: 'fa-mobile-screen', usageCount: 15000 },
  { id: '6', name: 'Sangam', category: 'Operations', platform: 'Web', description: 'Real-time efficiency tracking for thermal units.', icon: 'fa-chart-line', usageCount: 450 },
  { id: '7', name: 'Vigilance Portal', category: 'Corporate', platform: 'Web', description: 'Transparency and compliance monitoring tool.', icon: 'fa-shield-halved', usageCount: 1200 },
  { id: '8', name: 'NTPC Learning Hub', category: 'Employee', platform: 'Both', description: 'Training modules and certification platform.', icon: 'fa-graduation-cap', usageCount: 3400 },
  { id: '9', name: 'Medical Portal', category: 'Employee', platform: 'Both', description: 'Healthcare benefits and hospital empanelment.', icon: 'fa-heart-pulse', usageCount: 8900 },
  { id: '10', name: 'Estate Management', category: 'Corporate', platform: 'Web', description: 'Housing and infrastructure asset management.', icon: 'fa-building', usageCount: 2100 },
  // Adding more to simulate 60-80 apps
  ...Array.from({ length: 50 }).map((_, i) => ({
    id: `${i + 11}`,
    name: `Enterprise Tool ${i + 11}`,
    category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
    platform: Math.random() > 0.5 ? 'Web' : (Math.random() > 0.5 ? 'Mobile' : 'Both'),
    description: 'Specialized tool for optimizing specific departmental workflows.',
    icon: 'fa-gears',
    usageCount: Math.floor(Math.random() * 2000)
  }))
];
