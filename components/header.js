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
                <span className="pr-4 capitalize">
                  {route === '/' ? 'home' : route.slice(1)}
                </span>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
