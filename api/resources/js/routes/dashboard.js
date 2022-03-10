import admin from '@/middleware/admin'
export default [
	{
        path: '/dashboard',
        name: 'auth.dashboard',
        component: () => import('@/views/Panel.vue'),
    },
    {
        path: '/notifications',
        name: 'auth.notifications',
        component: () => import('@/views/Notifications.vue'),
    },
    {
        path: '/upload-products-csv',
        name: 'auth.productscsv',
        component: () => import('@/views/UploadProductsCSV.vue'),
    },
    {
        path: '/profile',
        name: 'auth.profile',
        component: () => import('@/views/Profile.vue'),
    },
    {
        path: '/roles/',
        name: 'auth.roles',
        component: ()=> import('@/views/Role/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Role/List.vue'),
                name: 'auth.roles.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Role/Form.vue'),
                name: 'auth.roles.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Role/Form.vue'),
                name: 'auth.roles.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/permissions/',
        name: 'auth.permissions',
        component: ()=> import('@/views/Permission/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Permission/List.vue'),
                name: 'auth.permissions.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Permission/Form.vue'),
                name: 'auth.permissions.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Permission/Form.vue'),
                name: 'auth.permissions.edit'
            }
        ],
        beforeEnter: admin,
    },
    
    {
        path: '/products/',
        name: 'auth.products',
        component: ()=> import('@/views/Product/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Product/List.vue'),
                name: 'auth.products.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Product/Form.vue'),
                name: 'auth.products.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Product/Form.vue'),
                name: 'auth.products.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/users/',
        name: 'auth.users',
        component: ()=> import('@/views/User/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/User/List.vue'),
                name: 'auth.users.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/User/Add.vue'),
                name: 'auth.users.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/User/Edit.vue'),
                name: 'auth.users.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/coupons/',
        name: 'auth.coupons',
        component: ()=> import('@/views/Coupon/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Coupon/List.vue'),
                name: 'auth.coupons.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Coupon/Form.vue'),
                name: 'auth.coupons.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Coupon/Form.vue'),
                name: 'auth.coupons.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/categories/',
        name: 'auth.categories',
        component: ()=> import('@/views/Category/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Category/List.vue'),
                name: 'auth.categories.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Category/Form.vue'),
                name: 'auth.categories.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Category/Form.vue'),
                name: 'auth.categories.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/brands/',
        name: 'auth.brands',
        component: ()=> import('@/views/Brand/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Brand/List.vue'),
                name: 'auth.brands.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Brand/Form.vue'),
                name: 'auth.brands.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Brand/Form.vue'),
                name: 'auth.brands.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/banners/',
        name: 'auth.banners',
        component: ()=> import('@/views/Banner/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Banner/List.vue'),
                name: 'auth.banners.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Banner/Form.vue'),
                name: 'auth.banners.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Banner/Form.vue'),
                name: 'auth.banners.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/product-quotes/',
        name: 'auth.product_quotes',
        component: ()=> import('@/views/ProductQuote/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/ProductQuote/List.vue'),
                name: 'auth.product_quotes.listing'
            },
            {
                path: 'view/:id',
                component: ()=> import('@/views/ProductQuote/View.vue'),
                name: 'auth.product_quotes.view'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/orders/',
        name: 'auth.orders',
        component: ()=> import('@/views/Order/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Order/List.vue'),
                name: 'auth.orders.listing'
            },
            {
                path: 'view/:id',
                component: ()=> import('@/views/Order/View.vue'),
                name: 'auth.orders.view'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/countries/',
        name: 'auth.countries',
        component: ()=> import('@/views/Country/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Country/List.vue'),
                name: 'auth.countries.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Country/Form.vue'),
                name: 'auth.countries.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Country/Form.vue'),
                name: 'auth.countries.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/states/',
        name: 'auth.states',
        component: ()=> import('@/views/State/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/State/List.vue'),
                name: 'auth.states.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/State/Form.vue'),
                name: 'auth.states.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/State/Form.vue'),
                name: 'auth.states.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/cities/',
        name: 'auth.cities',
        component: ()=> import('@/views/City/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/City/List.vue'),
                name: 'auth.cities.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/City/Form.vue'),
                name: 'auth.cities.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/City/Form.vue'),
                name: 'auth.cities.edit'
            }
        ],
        beforeEnter: admin,
    },    
];