import config from '@/config/index';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    BgColor?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: 'screencast-2-linear',
        BgColor: 'primary',
        to: '/home'
    },
    { header: 'Klika App' },

    {
        title: config.DEFAULTS.ITEM_NAME,
        icon: 'widget-5-bold-duotone',
        BgColor: 'error',
        to: '/items',
        children: [
            {
                title: 'All', //note: change this
                BgColor: 'error',
                to: '/items'
            },
            {
                title: 'Manage', //note: change this
                BgColor: 'error',
                to: '/manage-item'
            }
        ]
    },

    {
        title: config.DEFAULTS.SHOWCASES,
        icon: 'money-bag-bold-duotone',
        BgColor: 'primary',
        to: '/showcases',
        children: [
            {
                title: 'All', //note: change this
                BgColor: 'error',
                to: '/showcases'
            },
            {
                title: 'Manage', //note: change this
                BgColor: 'error',
                to: '/manage-showcase'
            }
        ]
    },

    {
        title: 'App Settings',
        icon: 'smartphone-2-bold-duotone',
        BgColor: 'success',
        to: '/app_settings'
    },
    {
        title: 'Discounts',
        icon: 'sale-bold-duotone',
        BgColor: 'warning',
        to: '/discounts'
    },
    {
        title: 'Users',
        icon: 'users-group-two-rounded-bold-duotone',
        BgColor: 'info',
        to: '/users'
    },
    {
        title: 'User Access Control',
        icon: 'shield-user-bold-duotone',
        BgColor: 'primary',
        to: '/manage-access-control'
    }
];

export default sidebarItem;
