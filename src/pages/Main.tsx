import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '../router/Router';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

class Main extends React.Component {
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <Switch>
                    {Routes.map((route) => {
                        // 登录页面不适用公共layout
                        // if (['/login'].includes(route.path)) {
                        //     return <Route key={route.name} {...route} />;
                        // }

                        // 其他需要鉴权的页面
                        console.log(route)
                        return < Route exact key={route.name} path={route.path} component={route.component} />
                    })}
                </Switch>
            </ConfigProvider >
        );
    }
}

export default Main;