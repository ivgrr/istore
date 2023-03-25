import {
  CartPage,
  ComputersPage,
  IndexPage,
  LaptopsPage,
  NotFoundPage,
  OrdersPage,
  PhonesPage,
  SigninPage,
  SignupPage,
  TabletsPage,
} from '../pages/';
import { WithLoader } from '../components/WithLoader/WithLoader';

export interface IRoute {
  path: string;
  element: React.FunctionComponent<any>;
  replace?: boolean;
}

export enum RouteNames {
  INDEX = '/',
  SIGN_IN = '/signin',
  SIGN_UP = '/signup',
  PHONES = '/phones',
  TABLETS = '/tablets',
  LAPTOPS = '/laptops',
  COMPUTERS = '/computers',
  CART = '/cart',
  ORDERS = '/orders',
  NOT_FOUND = '*',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.INDEX, element: IndexPage },
  { path: RouteNames.SIGN_IN, element: WithLoader(SigninPage) },
  { path: RouteNames.SIGN_UP, element: WithLoader(SignupPage) },
  { path: RouteNames.PHONES, element: PhonesPage },
  { path: RouteNames.TABLETS, element: TabletsPage },
  { path: RouteNames.LAPTOPS, element: LaptopsPage },
  { path: RouteNames.COMPUTERS, element: ComputersPage },
  { path: RouteNames.CART, element: CartPage },
  { path: RouteNames.NOT_FOUND, element: NotFoundPage },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.INDEX, element: IndexPage },
  { path: RouteNames.PHONES, element: PhonesPage },
  { path: RouteNames.TABLETS, element: TabletsPage },
  { path: RouteNames.LAPTOPS, element: LaptopsPage },
  { path: RouteNames.COMPUTERS, element: ComputersPage },
  { path: RouteNames.CART, element: CartPage },
  { path: RouteNames.ORDERS, element: OrdersPage },
  { path: RouteNames.NOT_FOUND, element: NotFoundPage },
];
