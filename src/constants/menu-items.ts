// MenuItems

export interface IMenuItem {
  title: string;
  id: string;
  link: string;
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
  { title: 'Home', id: 'menu_item_1', link: '/' },
  { title: 'Finances', id: 'menu_item_2', link: '/finances' },
  { title: 'Events calendar', id: 'menu_item_3', link: '/events' },
  { title: 'Videos statistic', id: 'menu_item_4', link: '/videos-statistic' },
  { title: 'Realeases', id: 'menu_item_5', link: '/releases' },
  { title: 'Team', id: 'menu_item_6', link: '/team' },
  { title: 'Team tasks', id: 'menu_item_7', link: '/tasks' },
  { title: 'Contracts & Deals', id: 'menu_item_8', link: '/contracts' },
  { title: 'Merch', id: 'menu_item_9', link: '/merch' },
  { title: 'Dashboard', id: 'menu_item_10', link: '/dashboard' },
  { title: 'Brain storm', id: 'menu_item_11', link: '/brain-storm' },
  { title: 'Big goals', id: 'menu_item_12', link: '/goals' },
  { title: 'Quick contacts', id: 'menu_item_13', link: '/contacts' },
  { title: 'Website', id: 'menu_item_14', link: '/websites' },
];

export const subMenuItems: SubMenuItems = {
  menu_item_9: [
    { title: 'Investments', menu_id: 'menu_item_9', id: 'sub_menu_item_1', link: '/merch/investments' },
    { title: 'Release dates', menu_id: 'menu_item_9', id: 'sub_menu_item_2', link: '/merch/dates' },
    { title: 'For future', menu_id: 'menu_item_9', id: 'sub_menu_item_3', link: '/merch/future' },
    { title: 'Collaborations', menu_id: 'menu_item_9', id: 'sub_menu_item_4', link: '/merch/collaborations' },
  ],
  menu_item_10: [
    { title: 'Space', menu_id: 'menu_item_10', id: 'sub_menu_item_5', link: '/dashboard/space' },
    { title: 'Twich', menu_id: 'menu_item_10', id: 'sub_menu_item_6', link: '/dashboard/twich-data' },
  ],
  menu_item_14: [
    { title: 'Landing page', menu_id: 'menu_item_14', id: 'sub_menu_item_7', link: '/websites/landing' },
    { title: 'Landing page', menu_id: 'menu_item_14', id: 'sub_menu_item_8', link: '/websites/landing' },
    { title: 'Other projects', menu_id: 'menu_item_14', id: 'sub_menu_item_9', link: '/websites/projects' },
    {
      title: 'Comments & Propositions about CRM or Landing page',
      menu_id: 'menu_item_14',
      id: 'sub_menu_item_10',
      link: '/websites/projects',
    },
    { title: 'Bug Reports', menu_id: 'menu_item_14', id: 'sub_menu_item_11', link: '/websites/reports' },
  ],
};
