import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const routes = ['/', '/about', '/contact'];

  return (
    <div className="py-4 bg-indigo-700">
      <div className="container px-4">
        {routes.map((route) => {
          return (
            <Link href={route} key={route}>
              <a
                className={`mr-4 text-white ${
                  router.pathname === route ? 'font-bold' : ''
                }`}
              >
                <div className="inline pr-4 capitalize">
                  {route === '/' ? 'home' : route.slice(1)}
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
