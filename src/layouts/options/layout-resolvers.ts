import { ILayoutResolver } from '@/interface';

import BlankResolver from './blank';
import ProLayoutResolver from './pro-layout';

export const LAYOUT_RESOLVERS: ILayoutResolver[] = [ProLayoutResolver, BlankResolver];
