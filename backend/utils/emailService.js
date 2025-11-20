import nodemailer from 'nodemailer';

const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

const getPurposeLabel = (purpose) => {
  const purposes = {
    'job': 'Job Application',
    'service': 'Service Request',
    'quotation': 'Project Quotation',
    'enquiry': 'General Enquiry',
    'support': 'Support Request',
    'demo': 'Product Demo',
    'partnership': 'Partnership'
  };
  return purposes[purpose] || purpose;
};

export const sendLeadNotificationEmail = async (leadData) => {
  try {
    const transporter = createTransporter();

    const purposeLabel = getPurposeLabel(leadData.purpose);
    const formattedDate = new Date(leadData.createdAt || new Date()).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Lead Notification</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .email-header {
            background: linear-gradient(135deg, #050515 0%, #4D00FF 50%, #B521BA 100%);
            padding: 40px 30px;
            text-align: center;
            color: #ffffff;
        }
        .logo-container {
            margin-bottom: 20px;
        }
        .logo-container img {
            max-width: 120px;
            height: auto;
            display: block;
            margin: 0 auto;
        }
        .email-header h1 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 10px;
            margin-top: 0;
        }
        .email-header p {
            font-size: 16px;
            opacity: 0.9;
            margin: 0;
        }
        .email-body {
            padding: 40px 30px;
        }
        .lead-badge {
            display: inline-block;
            background-color: #f0f0f0;
            color: #4D00FF;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 30px;
        }
        .info-section {
            margin-bottom: 30px;
        }
        .info-row {
            display: flex;
            padding: 15px 0;
            border-bottom: 1px solid #e5e5e5;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .info-label {
            font-weight: 600;
            color: #666;
            width: 140px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .info-value {
            flex: 1;
            color: #333;
            font-size: 15px;
        }
        .message-box {
            background-color: #f8f9fa;
            border-left: 4px solid #4D00FF;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        .message-box .label {
            font-weight: 600;
            color: #666;
            margin-bottom: 10px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .message-box .content {
            color: #333;
            font-size: 15px;
            line-height: 1.8;
            white-space: pre-wrap;
        }
        .email-footer {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e5e5;
        }
        .email-footer p {
            color: #666;
            font-size: 13px;
            margin-bottom: 5px;
        }
        .timestamp {
            color: #999;
            font-size: 12px;
            margin-top: 10px;
        }
        @media only screen and (max-width: 600px) {
            .email-header {
                padding: 30px 20px;
            }
            .logo-container img {
                max-width: 100px;
            }
            .email-body {
                padding: 30px 20px;
            }
            .info-row {
                flex-direction: column;
            }
            .info-label {
                width: 100%;
                margin-bottom: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <div class="logo-container">
                <img src="https://i0.wp.com/wartinlabs.com/wp-content/uploads/2022/02/WARTIN-LAB-AI-2-2.png?fit=117%2C87&ssl=1" alt="WartinLabs Logo" style="max-width: 120px; height: auto; display: block; margin: 0 auto;" />
            </div>
            <h1>🎯 New Lead Received</h1>
            <p>You have a new contact form submission</p>
        </div>
        
        <div class="email-body">
            <span class="lead-badge">${purposeLabel}</span>
            
            <div class="info-section">
                <div class="info-row">
                    <div class="info-label">Name</div>
                    <div class="info-value">${leadData.firstName} ${leadData.lastName}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Email</div>
                    <div class="info-value">
                        <a href="mailto:${leadData.email}" style="color: #4D00FF; text-decoration: none;">${leadData.email}</a>
                    </div>
                </div>
                ${leadData.phone ? `
                <div class="info-row">
                    <div class="info-label">Phone</div>
                    <div class="info-value">
                        <a href="tel:${leadData.phone}" style="color: #4D00FF; text-decoration: none;">${leadData.phone}</a>
                    </div>
                </div>
                ` : ''}
                <div class="info-row">
                    <div class="info-label">Purpose</div>
                    <div class="info-value">${purposeLabel}</div>
                </div>
            </div>
            
            <div class="message-box">
                <div class="label">Message</div>
                <div class="content">${leadData.message}</div>
            </div>
        </div>
        
        <div class="email-footer">
            <p><strong>WartinLabs</strong></p>
            <p>Professional Contract Intelligence for Modern Buyer's Agent</p>
            <div class="timestamp">Received on ${formattedDate}</div>
        </div>
    </div>
</body>
</html>
    `;

    const recipientEmails = [
      'rithvikbeeram@gmail.com',
      // Add more email addresses here, for example:
      // 'another-email@example.com',
      // 'third-email@example.com'
    ].filter(email => email && email.trim() !== '');

    const mailOptions = {
      from: `"WartinLabs Contact Form" <${process.env.EMAIL_USER}>`,
      to: recipientEmails.join(', '), // Send to multiple recipients
      subject: `New Lead: ${purposeLabel} - ${leadData.firstName} ${leadData.lastName}`,
      html: htmlContent,
      text: `
New Lead Received

Name: ${leadData.firstName} ${leadData.lastName}
Email: ${leadData.email}
${leadData.phone ? `Phone: ${leadData.phone}` : ''}
Purpose: ${purposeLabel}

Message:
${leadData.message}

Received on: ${formattedDate}
      `.trim()
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email notification');
  }
};

