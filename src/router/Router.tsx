import { Spin } from 'antd';
import * as React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
    <div style={{ width: '100%', minHeight: 300, marginTop: 100, padding: 30, textAlign: 'center' }}>
        <Spin size="large" tip="加载中..." />
    </div>
);

export interface RouterIF {
    menuKey: string;
    name: string;
    path: string;
    component: any;
}
// const Details = 
const Routes: RouterIF[] = [
    // 首页
    {
        name: '首页',
        menuKey: 'home',
        path: '/',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "namespace" */ '../pages/Home/index'),
            loading: Loading,
        }),
    },
    // 首页
    {
        name: '详情页',
        menuKey: 'details',
        path: '/details',
        component:
            Loadable({
                loader: () => import(/* webpackChunkName: "details" */ '../pages/Details/index'),
                loading: Loading,
            }),
    },
    // 首页
    {
        name: '信息页',
        menuKey: 'info',
        path: '/info',
        component:
            Loadable({
                loader: () => import(/* webpackChunkName: "details" */ '../pages/Info/index'),
                loading: Loading,
            }),
    },
]

export default Routes;