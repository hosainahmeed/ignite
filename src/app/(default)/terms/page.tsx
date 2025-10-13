
import SectionLayout from '@/app/components/component-layout/SectionLayout'
import PageTopBanner from '@/app/components/status-banner/PageTopBanner'
import React from 'react'

function page() {
    return (
        <div>
            <PageTopBanner
                title="Terms and Conditions"
                description="Clear guidelines to ensure fairness, transparency, and security for all.."
            />
            <SectionLayout className='mt-12'>
                <div
                    style={{ fontFamily: 'sans-serif' }}
                    dangerouslySetInnerHTML={{
                        __html: `<html>
<body>
<!--StartFragment--><p>﻿<span style="white-space:pre-wrap;">Terms &amp; Conditions<br><br>Welcome to IGNITE Foundation (“we,” “our,” or “us”). By accessing or using our website and services (the “Platform”), you agree to follow these Terms. If you do not agree, please discontinue use.<br><br>1.Purpose of IGNITE Foundation<br><br>IGNITE Foundation exists to support young athletes through donations, mentorship, and community partnerships. We provide a safe platform where:<br><br>Donors can contribute to youth development.<br>Parents and guardians can nominate children for support.<br>Clubs and academies can join our network to offer opportunities.<br><br>Eligibility<br><br>You must be at least 18 years old to make a donation, submit a nomination, or register a club/academy.<br>Nominations must be submitted by parents, guardians, or authorized adults.<br>All information shared must be accurate and truthful.<br><br>Donations<br><br>Donations are voluntary and non-refundable.<br><br>Payments are processed securely through third-party providers (Stripe).<br>Donors may choose to remain anonymous or be acknowledged publicly.<br>Donation receipts will be emailed for recordkeeping or tax purposes (if applicable).<br><br>Athlete Nominations<br><br>Parents/guardians may submit athlete details, highlight reels, or stories.<br>All submissions may be verified by our team.<br>Support is not guaranteed; selection depends on resources and need.<br>Media (photos, videos, stories) will only be shared with parental consent.<br><br>Clubs &amp; Academies<br><br>Clubs/academies must provide accurate details when applying to partner.<br>Approval or rejection is at the Foundation’s discretion.<br>Approved partners must follow fair play, safety, and inclusivity standards.<br><br>User Responsibilities<br><br>You agree to use the Platform only for lawful purposes and to respect the rights and privacy of athletes, families, and partners. Any misuse may result in suspension of access.<br><br>Intellectual Property<br><br>All content (logos, text, designs, images) belongs to IGNITE Foundation. You may not copy or reuse content without written permission.<br><br>Privacy &amp; Data<br><br>Your use of the Platform is also governed by our Privacy Policy, which explains how we handle personal data.<br><br>Limitation of Liability<br><br>The Platform is provided “as is.” IGNITE Foundation is not responsible for errors, service interruptions, or outcomes of nominations/donations beyond our control.<br><br>Changes to Terms<br><br>We may update these Terms when needed. Continued use of the Platform means you accept the updated Terms.<br><br>Contact Us<br><br>For questions, reach out to:<br><br>IGNITE Foundation Support<br>📧 Email: support@ignitefoundation.us<br><br>📬 Mailing Address: [Foundation Address]<br>📞 Phone: [Support Phone Number]</span>﻿﻿</p><!--EndFragment-->
</body>
</html>` }} />
            </SectionLayout>
        </div>
    )
}

export default page