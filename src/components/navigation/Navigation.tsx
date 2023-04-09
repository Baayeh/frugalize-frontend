import styles from '@/styles/Navigation.module.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { GiPayMoney } from 'react-icons/gi';
import { HiHome, HiOutlineUser } from 'react-icons/hi2';
import { MdCategory } from 'react-icons/md';

const Navigation = () => {
  const router = useRouter();
  const currRoute = usePathname();

  const items = [
    {
      label: 'Transaction',
      icon: GiPayMoney,
      command: () => {
        router.push('/transactions/add')
      },
    },
    {
      label: 'Category',
      icon: MdCategory,
      command: () => {
        router.push('/categories/add')
      },
    },
  ];

  const navDecorator = (name: string) => {
    if (name.length > 9) {
      const newName = name.slice(0, 9);
      return `${newName}..`;
    }
    return name;
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles['navbar-list']}>
        <div className="flex gap-6">
          <li>
            <Link
              href="/dashboard"
              className={`${
                currRoute === '/dashboard' ? styles.active : ''
              } p-1 flex flex-col justify-center items-center gap-1`}
            >
              <span className="text-xl">
                <HiHome />
              </span>
              <span className="text-[0.8rem]">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={`${
                currRoute === '/search' ? styles.active : ''
              } p-1 flex flex-col justify-center items-center gap-1`}
            >
              <span className="text-xl">
                <BiSearchAlt />
              </span>
              <span className="text-[0.8rem]">Search</span>
            </Link>
          </li>
        </div>
        <div className="flex gap-6">
          <li>
            <Link
              href="/notifications"
              className={`${
                currRoute === '/notifications' ? styles.active : ''
              } p-1 flex flex-col justify-center items-center gap-1`}
            >
              <span className="text-xl">
                <BsBell />
              </span>
              <span className="text-[0.8rem]">
                {navDecorator('Notifications')}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className={`${
                currRoute === '/profile' ? styles.active : ''
              } p-1 flex flex-col justify-center items-center gap-1`}
            >
              <span className="text-xl">
                <HiOutlineUser />
              </span>
              <span className="text-[0.8rem]">Profile</span>
            </Link>
          </li>
        </div>
      </ul>
      <Tooltip
        target=".speeddial-bottom-right .p-speeddial-action"
        position="top"
      />
      <SpeedDial
        model={items}
        transitionDelay={80}
        radius={80}
        type="semi-circle"
        direction="up"
        style={{ left: 'calc(50% - 2rem)', top: -20 }}
        className="speeddial-bottom-right "
      />
    </nav>
  );
};

export default Navigation;
