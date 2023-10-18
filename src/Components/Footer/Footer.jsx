const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Home</header>
          <a className="link link-hover">Brands</a>
          <a className="link link-hover">Product</a>
          <a className="link link-hover">My Cart</a>
          <a className="link link-hover">Login</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
