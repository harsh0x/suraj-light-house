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
    const cleanPhone = phone.trim().replace(/[^0-9+]/g, '');
    const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}` : null;

    const htmlEmail = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Event Lighting Inquiry - Suraj Light House</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F3EE; margin: 0; padding: 24px 12px; color: #1A1A1A; }
        .wrapper { max-width: 620px; margin: 0 auto; background: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #EEDCD5; }
        .header { background: linear-gradient(135deg, #1A1A1A 0%, #2D151B 50%, #E63956 100%); padding: 36px 24px 30px; text-align: center; color: #FFFFFF; }
        .header-tag { display: inline-block; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #F3C64F; font-weight: 700; margin-bottom: 8px; }
        .header h1 { margin: 0 0 6px; font-size: 26px; font-weight: 800; letter-spacing: 1.5px; font-family: Georgia, 'Times New Roman', serif; }
        .header p { margin: 0; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: #FFE6EB; opacity: 0.9; }
        .content { padding: 32px 28px; }
        .badge-bar { background: #FFF5F6; border: 1px solid #FFCCD3; border-radius: 50px; padding: 8px 16px; text-align: center; margin-bottom: 24px; }
        .badge-text { font-size: 12px; font-weight: 700; color: #CF203E; text-transform: uppercase; letter-spacing: 1px; }
        .grid-table { width: 100%; border-collapse: separate; border-spacing: 0 12px; }
        .card-cell { background: #FAF6F0; border-radius: 12px; padding: 14px 18px; border-left: 4px solid #E63956; border-top: 1px solid #F4ECE0; border-right: 1px solid #F4ECE0; border-bottom: 1px solid #F4ECE0; }
        .card-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #CF203E; margin-bottom: 4px; }
        .card-value { font-size: 15px; color: #1A1A1A; font-weight: 600; line-height: 1.4; }
        .vision-container { background: #FFFDF9; border-radius: 14px; padding: 20px; border: 1px dashed #D4AF37; margin: 20px 0; }
        .vision-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #9E7D23; margin-bottom: 8px; }
        .vision-text { font-size: 14px; line-height: 1.65; color: #333333; white-space: pre-wrap; margin: 0; }
        .cta-row { text-align: center; padding: 12px 0 6px; }
        .btn { display: inline-block; padding: 12px 22px; border-radius: 50px; font-size: 12px; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; margin: 6px 4px; }
        .btn-reply { background: #E63956; color: #FFFFFF !important; }
        .btn-call { background: #1A1A1A; color: #FFFFFF !important; }
        .btn-wa { background: #25D366; color: #FFFFFF !important; }
        .footer { background: #FAF6F0; text-align: center; padding: 22px 20px; font-size: 11px; color: #7A7275; border-top: 1px solid #EEDCD5; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <div class="header-tag">✦ Royal Rajasthan Decor & Lighting ✦</div>
          <h1>SURAJ LIGHT HOUSE</h1>
          <p>Ranthambore • Client Production Inquiry</p>
        </div>
        
        <div class="content">
          <div class="badge-bar">
            <span class="badge-text">✨ New Inquiry Received • Quick Response Recommended</span>
          </div>

          <table class="grid-table">
            <tr>
              <td class="card-cell">
                <div class="card-label">👤 Client / Couple Name</div>
                <div class="card-value">${name.trim()}${partnerDisplay}</div>
              </td>
            </tr>
            <tr>
              <td class="card-cell">
                <div class="card-label">✉️ Email Address</div>
                <div class="card-value">
                  <a href="mailto:${email.trim()}" style="color: #E63956; text-decoration: none;">${email.trim()}</a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="card-cell">
                <div class="card-label">📞 Phone / Mobile Number</div>
                <div class="card-value">
                  ${phone.trim() ? `<a href="tel:${cleanPhone}" style="color: #1A1A1A; text-decoration: none;">${phone.trim()}</a>` : '<span style="color: #888;">Not provided</span>'}
                </div>
              </td>
            </tr>
            <tr>
              <td class="card-cell">
                <div class="card-label">📅 Event Date & Scale</div>
                <div class="card-value">
                  <strong>Date:</strong> ${dateDisplay} &nbsp;•&nbsp; <strong>Expected Scale:</strong> ${finalGuests}
                </div>
              </td>
            </tr>
            <tr>
              <td class="card-cell">
                <div class="card-label">🎪 Requested Production Service</div>
                <div class="card-value" style="color: #CF203E;">${service}</div>
              </td>
            </tr>
          </table>

          <div class="vision-container">
            <div class="vision-title">🏛️ Venue Details & Custom Lighting Vision</div>
            <p class="vision-text">${visionDisplay}</p>
          </div>

          <!-- Quick Action Buttons -->
          <div class="cta-row">
            <a href="mailto:${email.trim()}?subject=Re:%20Event%20Lighting%20Inquiry%20-%20Suraj%20Light%20House" class="btn btn-reply">✉️ Reply by Email</a>
            ${cleanPhone ? `<a href="tel:${cleanPhone}" class="btn btn-call">📞 Call Client</a>` : ''}
            ${waLink ? `<a href="${waLink}" class="btn btn-wa">💬 WhatsApp</a>` : ''}
          </div>
        </div>

        <div class="footer">
          <p style="margin: 0 0 4px; font-weight: 600; color: #1A1A1A;">Suraj Light House (Suraj Light's Ranthambore)</p>
          <p style="margin: 0;">Automated Dispatch Notification • Received on ${new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full' })} at ${new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', timeStyle: 'short' })} IST</p>
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
