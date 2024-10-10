// MenuItems

export interface IMenuItem {
  title: string;
  id: string;
  link: string;
  icon?: string;
}

export interface SubMenuItems {
  [key: string]: SubMenuItem[];
}

export interface SubMenuItem {
  title: string;
  menu_id: string;
  id: string;
  link: string;
}

export const crmPath = '/crm';

export const menuItems: IMenuItem[] = [
  { title: 'Home', id: 'menu_item_1', link: '/', icon: 'home' },
  { title: 'Finances', id: 'menu_item_2', link: '/finances', icon: 'finances' },
  { title: 'Events calendar', id: 'menu_item_3', link: '/events', icon: 'calendar' },
  { title: 'Videos statistic', id: 'menu_item_4', link: '/videos-statistic', icon: 'video' },
  { title: 'Realeases', id: 'menu_item_5', link: '/releases', icon: 'archive' },
  { title: 'Team', id: 'menu_item_6', link: '/team', icon: 'users' },
  { title: 'Team tasks', id: 'menu_item_7', link: '/tasks', icon: 'tasks' },
  { title: 'Contracts & Deals', id: 'menu_item_8', link: '/contracts', icon: 'contract' },
  { title: 'Merch', id: 'menu_item_9', link: '/merch', icon: 'shop' },
  { title: 'Panels', id: 'menu_item_10', link: '/panels', icon: 'dashboard' },
  { title: 'Brain storm', id: 'menu_item_11', link: '/brain-storm', icon: 'global' },
  { title: 'Big goals', id: 'menu_item_12', link: '/goals', icon: 'goals' },
  { title: 'Quick contacts', id: 'menu_item_13', link: '/contacts', icon: 'contacts' },
  { title: 'Website', id: 'menu_item_14', link: '/websites', icon: 'website' },
];

export const subMenuItems: SubMenuItems = {
  menu_item_9: [
    { title: 'Investments', menu_id: 'menu_item_9', id: 'sub_menu_item_1', link: '/merch/investments' },
    { title: 'Release dates', menu_id: 'menu_item_9', id: 'sub_menu_item_2', link: '/merch/dates' },
    { title: 'For future', menu_id: 'menu_item_9', id: 'sub_menu_item_3', link: '/merch/future' },
    { title: 'Collaborations', menu_id: 'menu_item_9', id: 'sub_menu_item_4', link: '/merch/collaborations' },
  ],
  menu_item_10: [
    { title: 'Space', menu_id: 'menu_item_10', id: 'sub_menu_item_5', link: '/panels/space' },
    { title: 'Twich', menu_id: 'menu_item_10', id: 'sub_menu_item_6', link: '/panels/twich-data' },
  ],
  menu_item_14: [
    { title: 'Landing page', menu_id: 'menu_item_14', id: 'sub_menu_item_7', link: '/websites/landing' },
    { title: 'Landing page', menu_id: 'menu_item_14', id: 'sub_menu_item_8', link: '/websites/landing' },
    { title: 'Other projects', menu_id: 'menu_item_14', id: 'sub_menu_item_9', link: '/websites/projects' },
    {
      title: 'Comments & QA',
      menu_id: 'menu_item_14',
      id: 'sub_menu_item_10',
      link: '/websites/projects',
    },
    { title: 'Bug Reports', menu_id: 'menu_item_14', id: 'sub_menu_item_11', link: '/websites/reports' },
  ],
};

export const blockedMenuItems = ['Contracts & Deals', 'Merch', 'Panels', 'Brain storm',
  'Big goals', 'Quick contacts', 'Website', 'Investments', 'Release dates', 'For future', 'Collaborations', 'Space', 'Twich',
  'Landing page', 'Other projects', 'Comments & QA', 'Bug Reports',
]
