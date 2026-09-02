const nodemailer = require('nodemailer');
const Inquiry = require('../models/Inquiry');

/**
 * Configure Nodemailer Transporter
 */
const createTransporter = async () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const isMock = !pass || pass === 'mock-app-password-for-development' || pass.includes('your-');

  // If real credentials are provided
  if (user && pass && !isMock) {
    const isGmail = (process.env.EMAIL_SERVICE || 'gmail').toLowerCase() === 'gmail';
    if (isGmail) {
      return {
        transporter: nodemailer.createTransport({
          service: 'gmail',
          auth: { user, pass }
        }),
        isLive: true
      };
    }

    return {
      transporter: nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587', 10),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: { user, pass }
      }),
      isLive: true
    };
  }

  // Fallback: Create dynamic Ethereal test account
  const testAccount = await nodemailer.createTestAccount();
  return {
    transporter: nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    }),
    isLive: false,
    isEthereal: true
  };
};

// @desc    Submit an event lighting consultation inquiry & send notification email
// @route   POST /api/inquiry (or /api/inquiries)
// @access  Public
exports.createInquiry = async (req, res) => {
  try {
    // 1. Extract fields from request body
    const {
      name,
      partnerName = '',
      email,
      phone = '',
      date = '',
      weddingDate,
      guests = '300 - 600 Guests',
      guestCount,
      service = 'Full Event Lighting',
      vision = '',
      notes
    } = req.body;

    const finalDate = date || weddingDate || '';
    const finalGuests = guests || guestCount || '300 - 600 Guests';
    const finalVision = vision || notes || '';

    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and Email Address are required fields.'
      });
    }

    // 2. Save inquiry to MongoDB
    let savedInquiry = null;
    try {
      savedInquiry = await Inquiry.create({
        name: name.trim(),
        partnerName: partnerName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        date: finalDate,
        guests: finalGuests,
        service: service.trim(),
        vision: finalVision.trim()
      });
      console.log(`✨ [Database] Saved inquiry for ${name} (${email})`);
    } catch (dbError) {
      console.warn('⚠️ MongoDB save notice:', dbError.message);
    }

    // 3. Prepare Plain Text & HTML Email for Site Owner
    const partnerDisplay = partnerName.trim() ? ` / ${partnerName.trim()}` : '';
    const phoneDisplay = phone.trim() ? phone.trim() : 'Not provided';
    const dateDisplay = finalDate ? finalDate : 'Flexible / TBD';
    const visionDisplay = finalVision.trim() ? finalVision.trim() : 'No additional notes shared.';

    const plainTextEmail = `New Event Lighting Inquiry - Suraj Light House!

Name: ${name.trim()}${partnerDisplay}
Contact: ${email.trim()} | ${phoneDisplay}
Event Date: ${dateDisplay} | Guests: ${finalGuests}
Desired Service: ${service}
Requirements & Venue: ${visionDisplay}
`;

    const htmlEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #FAF6F0; margin: 0; padding: 25px; color: #1A1A1A; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(230, 57, 86, 0.15); border: 1px solid #F5D5DC; }
        .header { background: #E63956; padding: 30px 20px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1.5px; }
        .header p { margin: 6px 0 0; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; color: #FFCCD3; }
        .content { padding: 30px; }
        .item-card { background: #FAF6F0; border-radius: 12px; padding: 16px; margin-bottom: 14px; border-left: 4px solid #E63956; }
        .item-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #CF203E; font-weight: bold; margin-bottom: 4px; }
        .item-value { font-size: 15px; color: #1A1A1A; font-weight: 600; }
        .vision-box { background: #FAF6F0; border-radius: 12px; padding: 18px; border: 1px dashed #E63956; margin-top: 18px; }
        .footer { text-align: center; padding: 18px; font-size: 12px; color: #888888; border-top: 1px solid #FAF6F0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SURAJ LIGHT HOUSE</h1>
          <p>Ranthambore • Royal Event Lighting & Tenting Inquiry</p>
        </div>
        <div class="content">
          <div class="item-card">
            <div class="item-label">Client / Event Name</div>
            <div class="item-value">${name.trim()}${partnerDisplay}</div>
          </div>
          
          <div class="item-card">
            <div class="item-label">Contact Information</div>
            <div class="item-value">
              <a href="mailto:${email.trim()}" style="color: #E63956; text-decoration: none;">${email.trim()}</a> | ${phoneDisplay}
            </div>
          </div>
          
          <div class="item-card">
            <div class="item-label">Event Date & Expected Scale</div>
            <div class="item-value">📅 Date: ${dateDisplay} &nbsp;•&nbsp; 👥 Scale: ${finalGuests}</div>
          </div>
          
          <div class="item-card">
            <div class="item-label">Requested Production Service</div>
            <div class="item-value">${service}</div>
          </div>
          
          <div class="vision-box">
            <div class="item-label">Venue, Generator & Lighting Requirements</div>
            <div style="font-size: 14px; line-height: 1.6; color: #1A1A1A; margin-top: 8px; white-space: pre-wrap;">${visionDisplay}</div>
          </div>
        </div>
        <div class="footer">
          <p>© 2026 Suraj Light House (Suraj Light's Ranthambore). Received on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // 4. Check for Web3Forms Access Key
    let emailStatus = 'pending';
    let previewUrl = null;

    if (process.env.WEB3FORMS_ACCESS_KEY && !process.env.WEB3FORMS_ACCESS_KEY.includes('your-')) {
      try {
        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (compatible; SurajLightHouse/1.0)'
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject: `✨ New Event Lighting Inquiry: ${name.trim()} (${finalGuests})`,
            from_name: 'Suraj Light House Inquiries',
            name: `${name.trim()}${partnerDisplay}`,
            email: email.trim(),
            phone: phoneDisplay,
            date: dateDisplay,
            guests: finalGuests,
            service: service,
            vision: visionDisplay,
            message: plainTextEmail
          })
        });

        const rawText = await web3Res.text();
        let web3Data = null;
        try {
          web3Data = JSON.parse(rawText);
        } catch {
          // If Web3Forms returned HTML (e.g. Cloudflare / 502 / WAF), log warning gracefully
          console.warn(`⚠️ [Web3Forms] API returned non-JSON response (HTTP ${web3Res.status})`);
        }

        if (web3Data && web3Data.success) {
          emailStatus = 'sent_via_web3forms';
          console.log(`✅ [Web3Forms] Real Email notification delivered directly to your inbox!`);
        } else if (web3Data) {
          console.warn('⚠️ [Web3Forms] Response:', web3Data.message || 'Submission was not accepted');
        }
      } catch (w3Err) {
        console.error('⚠️ [Web3Forms] Dispatch error:', w3Err.message);
      }
    }

    // 5. If not sent via Web3Forms, try Nodemailer SMTP or Ethereal test inbox
    if (emailStatus !== 'sent_via_web3forms') {
      try {
        const { transporter, isLive, isEthereal } = await createTransporter();
        const emailRecipient = process.env.EMAIL_TO || process.env.EMAIL_USER || 'Rinkuchinki91@gmail.com';
        const emailSender = process.env.EMAIL_USER || 'leads@surajlighthouse.com';

        const mailInfo = await transporter.sendMail({
          from: `"${process.env.EMAIL_FROM_NAME || 'Suraj Light House'}" <${isLive ? emailSender : 'inquiry@surajlighthouse.com'}>`,
          to: isLive ? emailRecipient : 'suraj-test@surajlighthouse.com',
          replyTo: email.trim(),
          subject: `✨ New Event Lighting Inquiry: ${name.trim()} (${finalGuests})`,
          text: plainTextEmail,
          html: htmlEmail,
        });

        if (isLive) {
          emailStatus = 'sent_to_real_inbox';
          console.log(`✅ [Nodemailer] LIVE EMAIL DELIVERED to: ${emailRecipient}`);
        } else if (isEthereal) {
          previewUrl = nodemailer.getTestMessageUrl(mailInfo);
          emailStatus = 'sent_to_test_inbox';
          console.log('📬 [Nodemailer - Test Inbox Generated]');
          console.log(`🔗 Click to view preview: ${previewUrl}`);
        }
      } catch (mailError) {
        console.error('⚠️ [Nodemailer] Dispatch error:', mailError.message);
        emailStatus = 'error: ' + mailError.message;
      }
    }

    // 6. Response to Frontend
    res.status(201).json({
      success: true,
      message: `✨ Thank you, ${name.trim()}! Your event lighting inquiry has been received. Suraj Light House will contact you within 24 hours.`,
      emailStatus,
      previewUrl,
      data: savedInquiry || {
        name,
        partnerName,
        email,
        phone,
        date: finalDate,
        guests: finalGuests,
        service,
        vision: finalVision
      }
    });

  } catch (error) {
    console.error('❌ [Error] createInquiry failed:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error processing event inquiry.'
    });
  }
};

// @desc    Get all inquiries for admin / planner dashboard
// @route   GET /api/inquiry (or /api/inquiries)
// @access  Private / Internal
exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
