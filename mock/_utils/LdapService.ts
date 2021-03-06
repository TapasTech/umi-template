import { Request } from 'umi';
import faker from 'faker';
import ResponseError from './ResponseError';

export const FAKE_ADMIN_TOKEN = 'oijhdvkdsiiopwejr3209jds';
export const FAKE_HANMEIMEI_TOKEN = 'knfhsdop09923jds;kmnsdf';

const ADMIN_PERMISSIONS = ['VIEW_DASHBOARD_ANALYSIS', 'VIEW_DASHBOARD_MONITOR', 'VIEW_ADMIN_USER_MANAGEMENT'];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const USER_PERMISSIONS = ['VIEW_DASHBOARD_ANALYSIS', 'VIEW_DASHBOARD_MONITOR'];

export const UserAdmin: ILdapUser = {
  id: 1,
  name: 'Admin',
  email: 'admin@gmail.com',
  team: 'IT Support',
  avatar: '/admin_avatar.png',
  phone: '18888888888',
  permissions: ADMIN_PERMISSIONS,
};

export const UserHanMeiMei: ILdapUser = {
  id: 1,
  name: 'Meimei.Han',
  email: 'meimei.han@gmail.com',
  team: 'Human Resource',
  avatar: '/meimei_avatar.png',
  phone: '18888888888',
  permissions: USER_PERMISSIONS,
};

interface ILdapUser {
  id: number;
  name: string;
  email: string;
  team: string;
  phone: string;
  avatar: string;
  permissions?: string[];
}

class LdapService {
  searchUsersByName(name: string): Promise<ILdapUser[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          [faker.random.number(), faker.random.number(), faker.random.number()].map(n => {
            const card = faker.helpers.contextualCard();
            return {
              id: n,
              name: card.name,
              email: card.email,
              team: faker.commerce.department(),
              phone: card.phone,
              avatar: card.avatar,
              permissions: [],
            } as ILdapUser;
          })
        );
      }, 500);
    });
  }

  async getCurrentUser(req: Request): Promise<ILdapUser> {
    const token = req.get('Authorization');
    if (FAKE_ADMIN_TOKEN === token) {
      return UserAdmin;
    }

    if (FAKE_HANMEIMEI_TOKEN === token) {
      return UserHanMeiMei;
    }

    throw new ResponseError(401, 'invalid token');
  }
}

export default new LdapService();
