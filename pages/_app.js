import Header from '../components/header';
import '../styles/tailwind.src.css';

export default function ({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
