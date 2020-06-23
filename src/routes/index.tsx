import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AsyncImport = (path: string) => lazy(() => import(`containers/${path}`));

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={AsyncImport('ProductList')} />
          <Route path="/product" component={AsyncImport('Product')} />
          <Route path="/basket" component={AsyncImport('Basket')} />
          <Route component={AsyncImport('NotFound')} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppNavigation;
