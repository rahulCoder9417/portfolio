const Footer = () => {
    return (
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Rahul Kumar. All rights reserved.
          </p>
          <p>
            Designed & Built with{" "}
            <span className="text-primary">♥</span>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  