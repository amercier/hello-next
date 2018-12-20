import Link from 'next/link'

const linkStyle = {
  marginRight: 15
};

const Header = () => (
    <div>
        <Link as={`${BASE_URL}/`} href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link as={`${BASE_URL}/about`} href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
