const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/signup">Sign Up</a>
          <a href="/signin">Sign In</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
