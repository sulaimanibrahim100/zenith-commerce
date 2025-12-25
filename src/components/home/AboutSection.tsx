const AboutSection = () => {
  return (
    <div className="container mb-4">
      <div className="bg-card rounded shadow-sm p-4">
        <h2 className="text-sm sm:text-base font-semibold text-foreground mb-3">
          Clarity Tech Ltd – Your No.1 ICT Store for Quality Laptops, Desktops & Tech Devices in Nigeria
        </h2>
        
        <div className="text-xs text-muted-foreground space-y-3 leading-relaxed">
          <p>
            Welcome to Clarity Tech Ltd, a trusted ICT store in Lagos, Nigeria, committed to providing high-quality laptops, desktops, accessories, and professional IT solutions for individuals, businesses, and organizations across the country. We offer 100% original tech products, unbeatable prices, fast delivery, and professional guidance to help you make the right choice.
          </p>
          
          <p>
            Whether you're looking to buy a laptop in Nigeria, upgrade your office systems, or shop for reliable tech gadgets, Clarity Tech Ltd is your one-stop destination for quality, affordability, and exceptional customer service.
          </p>

          <h3 className="text-xs font-semibold text-foreground pt-2">What We Do at Clarity Tech Ltd</h3>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <h4 className="font-medium text-foreground mb-1">Sales of Laptops</h4>
              <p>We sell brand-new and UK-used laptops from globally trusted brands such as HP, Dell, Lenovo, Apple MacBook, Asus, Acer, and more. From student laptops to business workstations, ultrabooks, and high-performance gaming laptops, we stock everything you need.</p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-1">Desktops, All-in-One PCs & Office Computers</h4>
              <p>Need a full desktop setup? We provide desktop computers and all-in-one PCs suitable for offices, schools, graphic design studios, and home workstations.</p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-1">Mobile Devices, Tablets & Accessories</h4>
              <p>Looking for a smartphone, tablet, or essential ICT accessories like chargers, SSDs, routers, UPS, keyboards, mouse, printers, and more – we've got you covered.</p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-1">Technical Support, Configuration & IT Services</h4>
              <p>We also provide IT support, system setup, networking, software installation and device configuration — perfect for offices, small businesses, startups, or anyone who needs reliable hardware + support.</p>
            </div>
          </div>

          <p className="font-medium text-foreground pt-2">
            Looking to buy laptops or computers in Nigeria? Don't waste time – Clarity Tech Ltd is here with authentic laptops, desktops, and accessories at the best prices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;