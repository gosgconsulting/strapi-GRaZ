import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={() => {}} />
      
      <div className="container mx-auto px-6 py-12 pt-24 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <ScrollArea className="h-auto">
          <div className="space-y-8">
            {/* Table of Contents */}
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#information-collection" className="text-primary hover:underline">1. Information Collection</a></li>
                <li><a href="#use-of-information" className="text-primary hover:underline">2. Use of Information</a></li>
                <li><a href="#information-sharing" className="text-primary hover:underline">3. Information Sharing</a></li>
                <li><a href="#data-security" className="text-primary hover:underline">4. Data Security</a></li>
                <li><a href="#user-rights" className="text-primary hover:underline">5. Your Rights</a></li>
                <li><a href="#cookies-analytics" className="text-primary hover:underline">6. Cookies & Analytics</a></li>
                <li><a href="#contact-information" className="text-primary hover:underline">7. Contact Information</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <div className="bg-primary/5 p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-muted-foreground">
                The Academy of Dance is committed to protecting your personal data in compliance with Singapore's Personal Data Protection Act (PDPA) 2012. 
                This Privacy Policy explains how we collect, use, protect, and share your personal information when you use our services.
              </p>
            </div>

            {/* Information Collection */}
            <section id="information-collection">
              <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Personal Data We Collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Student Information:</strong> Full name, date of birth, age, gender, contact details</li>
                  <li><strong>Parent/Guardian Information:</strong> Name, relationship to student, contact details, billing address</li>
                  <li><strong>Emergency Contacts:</strong> Names and contact information of emergency contacts</li>
                  <li><strong>Medical Information:</strong> Relevant health conditions, allergies, injuries, medical clearances</li>
                  <li><strong>Payment Information:</strong> Billing details, payment method information (processed securely through third parties)</li>
                  <li><strong>Academic Information:</strong> Class enrollment, attendance records, progress assessments, examination results</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">How We Collect Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Registration and enrollment forms (online and paper)</li>
                  <li>Trial class registration</li>
                  <li>Our website contact forms and newsletter signup</li>
                  <li>Phone and in-person interactions</li>
                  <li>Cookies and website analytics (see Section 6)</li>
                  <li>Photography and video during classes and performances (with consent)</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">Legal Basis for Processing (PDPA Compliance)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consent:</strong> Marketing communications, photography/videography, performance participation</li>
                  <li><strong>Contract Performance:</strong> Class delivery, payment processing, scheduling</li>
                  <li><strong>Legal Obligation:</strong> Emergency response, safety compliance, record keeping</li>
                  <li><strong>Legitimate Interest:</strong> Class management, facility security, business operations</li>
                </ul>
              </div>
            </section>

            {/* Use of Information */}
            <section id="use-of-information">
              <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Primary Uses</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Class Management:</strong> Enrollment, scheduling, attendance tracking, progress monitoring</li>
                  <li><strong>Safety and Emergency Response:</strong> Contacting emergency contacts, medical emergency response</li>
                  <li><strong>Payment Processing:</strong> Billing, payment collection, financial record keeping</li>
                  <li><strong>Communication:</strong> Class updates, schedule changes, important announcements</li>
                  <li><strong>Performance and Competition Management:</strong> Event coordination, participant management</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">Marketing Communications (With Consent Only)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Promotional emails about new classes and workshops</li>
                  <li>Newsletter with academy updates and dance-related content</li>
                  <li>Social media content featuring students (with specific consent)</li>
                  <li>Marketing materials using student photos/videos (with specific consent)</li>
                </ul>
                
                <p className="italic">
                  <strong>Opt-out:</strong> You can withdraw consent for marketing communications at any time by emailing us or clicking unsubscribe links.
                </p>
              </div>
            </section>

            {/* Information Sharing */}
            <section id="information-sharing">
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Third Parties We Share Data With</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Payment Processors:</strong> Secure third-party services for processing payments (data encrypted and tokenized)</li>
                  <li><strong>Emergency Services:</strong> When necessary for student safety and emergency response</li>
                  <li><strong>Competition Organizers:</strong> Student information for competition registration (with explicit consent)</li>
                  <li><strong>Examination Bodies:</strong> Student details for dance examinations and certifications</li>
                  <li><strong>Insurance Companies:</strong> In case of claims or incidents (as legally required)</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">We Do NOT Share Data With</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Marketing companies or advertisers (unless you provide specific consent)</li>
                  <li>Social media platforms (unless you consent to social media features)</li>
                  <li>Data brokers or aggregators</li>
                  <li>Any party for commercial purposes unrelated to our services</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">International Transfers</h3>
                <p>
                  Your data is primarily stored and processed in Singapore. Any international transfers (such as cloud storage providers) 
                  use appropriate safeguards and comply with PDPA requirements.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-security">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Security Measures</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Physical Security:</strong> Locked filing cabinets, restricted access to administrative areas</li>
                  <li><strong>Digital Security:</strong> Encrypted data storage, secure payment processing, regular software updates</li>
                  <li><strong>Access Controls:</strong> Staff access limited to necessary information, password protection</li>
                  <li><strong>Data Backup:</strong> Regular backups with encryption, secure cloud storage</li>
                  <li><strong>Staff Training:</strong> Regular privacy and security training for all staff members</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">Data Retention</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Active Students:</strong> Data retained for duration of enrollment plus 1 year</li>
                  <li><strong>Former Students:</strong> Academic records retained for 7 years for certification purposes</li>
                  <li><strong>Financial Records:</strong> Retained for 7 years as required by Singapore law</li>
                  <li><strong>Marketing Data:</strong> Retained until consent is withdrawn</li>
                  <li><strong>CCTV Footage:</strong> Automatically deleted after 30 days unless incident recorded</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">Data Breach Procedures</h3>
                <p>
                  In the unlikely event of a data breach, we will notify affected individuals and the Personal Data Protection Commission 
                  within 72 hours as required by law, and take immediate steps to secure the data and prevent further breaches.
                </p>
              </div>
            </section>

            {/* User Rights */}
            <section id="user-rights">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights Under Singapore PDPA</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Your Rights Include</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Access:</strong> Request a copy of personal data we hold about you</li>
                  <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing or other consent-based processing</li>
                  <li><strong>Right to Data Portability:</strong> Request your data in a commonly used format</li>
                  <li><strong>Right to Object:</strong> Object to certain types of data processing</li>
                  <li><strong>Right to Deletion:</strong> Request deletion of data where legally permissible</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">How to Exercise Your Rights</h3>
                <div className="bg-card p-4 rounded border">
                  <p><strong>Email:</strong> privacy@theacademyofdance.com.sg</p>
                  <p><strong>Phone:</strong> +65 XXXX XXXX</p>
                  <p><strong>In Person:</strong> Visit either of our studio locations</p>
                  <p><strong>Response Time:</strong> We will respond to your request within 30 days</p>
                </div>
                
                <h3 className="text-lg font-medium text-foreground">Limitations</h3>
                <p>
                  Some data cannot be deleted if required for legal compliance, safety records, or ongoing contractual obligations. 
                  We will explain any limitations when responding to your requests.
                </p>
              </div>
            </section>

            {/* Cookies & Analytics */}
            <section id="cookies-analytics">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies & Website Analytics</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality, cannot be disabled</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Track visits across websites for advertising (only with consent)</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground">Google Analytics</h3>
                <p>
                  We use Google Analytics to understand website usage patterns. This data is anonymized and aggregated. 
                  You can opt out using Google's opt-out browser add-on.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Social Media Plugins</h3>
                <p>
                  Our website includes social media sharing buttons. These may set cookies from the respective social media platforms. 
                  We do not control these third-party cookies.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Managing Cookies</h3>
                <p>
                  You can control cookies through your browser settings. Blocking certain cookies may affect website functionality. 
                  Our cookie consent tool allows you to manage non-essential cookies.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact-information">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information & Complaints</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Data Protection Officer</h3>
                <div className="bg-card p-4 rounded border">
                  <p><strong>The Academy of Dance - Data Protection Officer</strong></p>
                  <p><strong>Email:</strong> privacy@theacademyofdance.com.sg</p>
                  <p><strong>Phone:</strong> +65 XXXX XXXX</p>
                  <p><strong>Address:</strong> [Studio Address]</p>
                  <p><strong>Business Hours:</strong> Monday-Friday 9:00 AM - 6:00 PM</p>
                </div>
                
                <h3 className="text-lg font-medium text-foreground">Filing Complaints</h3>
                <p>
                  If you believe we have not handled your personal data properly, you can file a complaint with:
                </p>
                <div className="bg-card p-4 rounded border">
                  <p><strong>Personal Data Protection Commission Singapore</strong></p>
                  <p><strong>Website:</strong> www.pdpc.gov.sg</p>
                  <p><strong>Email:</strong> enquiries@pdpc.gov.sg</p>
                  <p><strong>Phone:</strong> +65 6377 3131</p>
                </div>
                
                <h3 className="text-lg font-medium text-foreground">Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes via email or prominent website notice 30 days before implementation.
                </p>
              </div>
            </section>

            {/* Final Notes */}
            <div className="bg-primary/5 p-6 rounded-lg border mt-8">
              <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Children's Privacy:</strong> We take special care with children's personal data. 
                  Parental consent is required for children under 13, and we limit data collection to what is necessary for dance education.
                </p>
                <p>
                  <strong>PDPA Compliance:</strong> This policy complies with Singapore's Personal Data Protection Act 2012 and 
                  incorporates best practices from international privacy frameworks.
                </p>
                <p>
                  <strong>Questions:</strong> If you have any questions about this Privacy Policy or our data practices, 
                  please don't hesitate to contact our Data Protection Officer using the details above.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;