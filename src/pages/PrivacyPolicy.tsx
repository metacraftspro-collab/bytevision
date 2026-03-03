import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container-custom max-w-4xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-6">Last updated: March 3, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>We may collect personal information such as your name, email address, phone number, and any other details you provide when contacting us through our website or using our services.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide and improve our services, respond to your inquiries, send relevant communications, and enhance your experience on our website.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Data Protection</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some features of our website.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
              <p>We may use third-party services for analytics, advertising, or other purposes. These services may collect information about your usage of our website in accordance with their own privacy policies.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at info@bytevision.com.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
              <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised date.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@bytevision.com" className="text-primary hover:underline">info@bytevision.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
