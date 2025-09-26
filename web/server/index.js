const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/brochure', (req, res) => {
  const brochurePath = path.join(__dirname, '..', 'public', 'docs', 'brochure.pdf');
  res.download(brochurePath, 'Metaarth-Capital-Brochure.pdf', (err) => {
    if (err) {
      console.error('Brochure download error:', err);
      res.status(500).json({ success: false, message: 'Failed to download brochure' });
    }
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body || {};
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields.' 
      });
    }

    // Create Gmail transporter with your new credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'metafitlucknow@gmail.com', // Replace with your new email
        pass: 'ksmotvwrqlgtflmo', // Replace with your new App Password
      },
    });

    // Beautiful professional email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - Metaarth Capital</title>
        <style>
            body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                max-width: 600px; 
                margin: 0 auto; 
                padding: 20px; 
                background-color: #f8f9fa; 
            }
            .container { 
                background: white; 
                border-radius: 12px; 
                box-shadow: 0 4px 20px rgba(0,0,0,0.1); 
                overflow: hidden; 
            }
            .header { 
                background: linear-gradient(135deg, #ffc107 0%, #ca8a04 100%); 
                color: white; 
                padding: 30px; 
                text-align: center; 
            }
            .header h1 { 
                margin: 0; 
                font-size: 24px; 
                font-weight: 600; 
            }
            .header p { 
                margin: 8px 0 0 0; 
                opacity: 0.9; 
                font-size: 14px; 
            }
            .content { 
                padding: 30px; 
            }
            .field { 
                margin-bottom: 20px; 
                padding: 15px; 
                background: #f8f9fa; 
                border-radius: 8px; 
                border-left: 4px solid #ffc107; 
            }
            .field-label { 
                font-weight: 600; 
                color: #495057; 
                font-size: 14px; 
                text-transform: uppercase; 
                letter-spacing: 0.5px; 
                margin-bottom: 5px; 
            }
            .field-value { 
                color: #212529; 
                font-size: 16px; 
            }
            .message-field { 
                background: #fff; 
                border: 2px solid #e9ecef; 
                border-radius: 8px; 
                padding: 20px; 
                margin-top: 10px; 
            }
            .footer { 
                background: #f8f9fa; 
                padding: 20px 30px; 
                text-align: center; 
                border-top: 1px solid #e9ecef; 
                color: #6c757d; 
                font-size: 12px; 
            }
            .timestamp { 
                color: #6c757d; 
                font-size: 12px; 
                text-align: right; 
                margin-top: 20px; 
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🏛️ Metaarth Capital</h1>
                <p>New Contact Form Submission</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">👤 Client Name</div>
                    <div class="field-value">${name}</div>
                </div>
                <div class="field">
                    <div class="field-label">📧 Email Address</div>
                    <div class="field-value">${email}</div>
                </div>
                <div class="field">
                    <div class="field-label">📞 Phone Number</div>
                    <div class="field-value">${phone || 'Not provided'}</div>
                </div>
                <div class="field">
                    <div class="field-label">📋 Subject</div>
                    <div class="field-value">${subject}</div>
                </div>
                <div class="field">
                    <div class="field-label">💬 Message</div>
                    <div class="message-field">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="timestamp">
                    Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the Metaarth Capital website contact form.</p>
                <p>Please respond to the client at: <strong>${email}</strong></p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Send beautiful email to your Gmail
    const info = await transporter.sendMail({
      from: '"Metaarth Capital" <metafitlucknow@gmail.com>', // Replace with your new email
      to: 'jhamonty302@gmail.com',
      subject: `[Metaarth Capital] New Contact: ${subject}`,
      html: htmlTemplate,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}\n\nReceived: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    });

    console.log('✅ Email sent successfully to jhamonty302@gmail.com');
    console.log('📧 Message ID:', info.messageId);

    // Return success response
    res.json({ 
      success: true, 
      message: 'Thank you! Your message has been received. We will contact you soon.',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});

// Basic error guard
app.use((err, _req, res, _next) => {
  console.error('Unhandled API error:', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});


