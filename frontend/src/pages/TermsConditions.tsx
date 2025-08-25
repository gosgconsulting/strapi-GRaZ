import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={() => {}} />
      
      <div className="container mx-auto px-6 py-12 pt-24 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <ScrollArea className="h-auto">
          <div className="space-y-8">
            {/* Table of Contents */}
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#general-terms" className="text-primary hover:underline">1. General Terms</a></li>
                <li><a href="#dance-classes" className="text-primary hover:underline">2. Dance Classes & Services</a></li>
                <li><a href="#payment-terms" className="text-primary hover:underline">3. Payment Terms</a></li>
                <li><a href="#health-safety" className="text-primary hover:underline">4. Health & Safety</a></li>
                <li><a href="#intellectual-property" className="text-primary hover:underline">5. Intellectual Property</a></li>
                <li><a href="#liability-insurance" className="text-primary hover:underline">6. Liability & Insurance</a></li>
                <li><a href="#termination" className="text-primary hover:underline">7. Termination</a></li>
              </ul>
            </div>

            {/* General Terms */}
            <section id="general-terms">
              <h2 className="text-2xl font-semibold mb-4">1. General Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using The Academy of Dance's services, website, and facilities, you agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and The Academy of Dance.
                </p>
                <p>
                  The Academy of Dance reserves the right to modify these terms at any time with reasonable notice to students and parents/guardians. Continued use of our services after such modifications constitutes acceptance of the revised terms.
                </p>
                <p>
                  For any queries regarding these terms, please contact us at info@theacademyofdance.com.sg or visit our studios during operating hours.
                </p>
              </div>
            </section>

            {/* Dance Classes & Services */}
            <section id="dance-classes">
              <h2 className="text-2xl font-semibold mb-4">2. Dance Classes & Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Class Enrollment</h3>
                <p>
                  All students must complete enrollment forms and provide accurate information. Class placement is subject to instructor assessment and studio availability.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Age Requirements</h3>
                <p>
                  Classes are grouped by age and skill level as determined by The Academy of Dance. Students must meet minimum age requirements for their enrolled classes.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Trial Classes</h3>
                <p>
                  Trial classes are available for new students. Trial class fees are non-refundable but may be credited toward enrollment if the student continues within 30 days.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Make-up Classes</h3>
                <p>
                  Make-up classes for student absences are subject to availability and must be scheduled within the current term. No refunds are provided for missed classes.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Student Behavior</h3>
                <p>
                  Students are expected to maintain respectful behavior toward instructors, staff, and fellow students. Disruptive behavior may result in suspension or termination.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Dress Code</h3>
                <p>
                  Students must adhere to specified dress codes for each class type. Appropriate dance attire and footwear are required for safety and optimal learning.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Performances and Competitions</h3>
                <p>
                  Participation in performances and competitions may require additional fees and commitments. Attendance at rehearsals is mandatory for participants.
                </p>
              </div>
            </section>

            {/* Payment Terms */}
            <section id="payment-terms">
              <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Registration and Deposits</h3>
                <p>
                  Registration fees are required upon enrollment and are non-refundable. Security deposits may be required and will be refunded upon completion of the program, subject to any outstanding balances.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Payment Schedules</h3>
                <p>
                  Monthly fees are due by the 1st of each month. Term fees are due in full prior to the start of each term. Late payments incur a fee of S$20 after a 7-day grace period.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Refund and Cancellation</h3>
                <p>
                  Cancellations must be provided with 30 days written notice. Refunds are prorated based on remaining classes, minus administrative fees. No refunds for missed classes due to student absence.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Additional Costs</h3>
                <p>
                  Costume fees, competition entry fees, examination fees, and special workshop costs are separate from regular tuition and must be paid as specified.
                </p>
              </div>
            </section>

            {/* Health & Safety */}
            <section id="health-safety">
              <h2 className="text-2xl font-semibold mb-4">4. Health & Safety</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Medical Clearance</h3>
                <p>
                  Students with medical conditions must provide medical clearance before participating. Parents/guardians must disclose any health conditions that may affect participation.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Injury Liability</h3>
                <p>
                  Students participate at their own risk. The Academy of Dance is not liable for injuries sustained during classes, performances, or on studio premises, except in cases of gross negligence.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Emergency Contacts</h3>
                <p>
                  Current emergency contact information must be maintained with the studio. Parents/guardians will be contacted immediately in case of injury or emergency.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Studio Safety Rules</h3>
                <p>
                  All students must follow posted safety guidelines. Eating and drinking (except water) are not permitted in dance studios. Street shoes are prohibited in dance areas.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Photography and Videography</h3>
                <p>
                  By enrolling, students consent to being photographed/videotaped for promotional purposes unless written objection is provided. Parents may request removal of their child's image at any time.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Choreography Ownership</h3>
                <p>
                  All choreography created by Academy instructors remains the intellectual property of The Academy of Dance. Students may not teach or reproduce choreography without written permission.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Music Licensing</h3>
                <p>
                  The Academy of Dance maintains appropriate music licensing for class instruction. Recording or distributing copyrighted music used in classes is prohibited.
                </p>
              </div>
            </section>

            {/* Liability & Insurance */}
            <section id="liability-insurance">
              <h2 className="text-2xl font-semibold mb-4">6. Liability & Insurance</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Limitation of Liability</h3>
                <p>
                  The Academy of Dance's liability is limited to the fees paid for services. We are not liable for indirect, incidental, or consequential damages.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Personal Injury</h3>
                <p>
                  Students participate in physical activities at their own risk. The Academy of Dance recommends that all students maintain appropriate health insurance coverage.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Property Damage</h3>
                <p>
                  Students and parents are responsible for any damage to studio property. The Academy of Dance is not responsible for lost or stolen personal items.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section id="termination">
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Withdrawal Notice</h3>
                <p>
                  Students may withdraw with 30 days written notice. Withdrawal without proper notice forfeits any refund eligibility.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Suspension</h3>
                <p>
                  The Academy of Dance may suspend students for non-payment, behavioral issues, or violation of studio policies. Suspended students remain financially responsible for enrolled classes.
                </p>
                
                <h3 className="text-lg font-medium text-foreground">Expulsion</h3>
                <p>
                  Students may be expelled for serious misconduct, repeated policy violations, or non-payment. Expelled students forfeit all fees and deposits.
                </p>
              </div>
            </section>

            {/* Contact and Governing Law */}
            <div className="bg-card p-6 rounded-lg border mt-8">
              <h2 className="text-xl font-semibold mb-4">Contact Information & Governing Law</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>The Academy of Dance</strong></p>
                <p>Email: info@theacademyofdance.com.sg</p>
                <p>Phone: +65 XXXX XXXX</p>
                <p className="mt-4">
                  These Terms and Conditions are governed by Singapore law and comply with the Personal Data Protection Act (PDPA) 2012 and Consumer Protection (Fair Trading) Act. 
                  Any disputes will be resolved through the Singapore Arbitration Centre.
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

export default TermsConditions;