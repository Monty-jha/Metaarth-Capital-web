import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Metaarth-Capital" <${process.env.EMAIL_USER}>`,
      to: 'jhamonty302@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Metaarth Capital - Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: 'Inter', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: #ffc107; padding: 30px; text-align: center;">
              <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                <div style="width: 40px; height: 40px; background: #ffffff; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                  <span style="font-size: 20px; color: #ffc107;">🏦</span>
                </div>
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                  Metaarth Capital
                </h1>
              </div>
              <p style="color: #ffffff; margin: 0; font-size: 16px; opacity: 0.9;">
                New Contact Form Submission
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              
              <!-- Name Card -->
              <div style="background: #ffffff; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
                <div style="display: flex; align-items: center; padding: 20px;">
                  <div style="width: 6px; height: 100%; background: #ffc107; margin-right: 20px; flex-shrink: 0;"></div>
                  <div style="display: flex; align-items: center; flex: 1;">
                    <div style="margin-right: 15px;">
                      <span style="font-size: 20px;">👤</span>
                    </div>
                    <div>
                      <div style="color: #333333; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 5px;">CLIENT NAME</div>
                      <div style="color: #333333; font-size: 16px;">${name}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Email Card -->
              <div style="background: #ffffff; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
                <div style="display: flex; align-items: center; padding: 20px;">
                  <div style="width: 6px; height: 100%; background: #ffc107; margin-right: 20px; flex-shrink: 0;"></div>
                  <div style="display: flex; align-items: center; flex: 1;">
                    <div style="margin-right: 15px;">
                      <span style="font-size: 20px;">📧</span>
                    </div>
                    <div>
                      <div style="color: #333333; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 5px;">EMAIL ADDRESS</div>
                      <div style="color: #0066cc; font-size: 16px; text-decoration: underline;">${email}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Phone Card -->
              <div style="background: #ffffff; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
                <div style="display: flex; align-items: center; padding: 20px;">
                  <div style="width: 6px; height: 100%; background: #ffc107; margin-right: 20px; flex-shrink: 0;"></div>
                  <div style="display: flex; align-items: center; flex: 1;">
                    <div style="margin-right: 15px;">
                      <span style="font-size: 20px;">📞</span>
                    </div>
                    <div>
                      <div style="color: #333333; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 5px;">PHONE NUMBER</div>
                      <div style="color: #333333; font-size: 16px;">${phone || 'Not provided'}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Message Card -->
              <div style="background: #ffffff; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
                <div style="display: flex; align-items: flex-start; padding: 20px;">
                  <div style="width: 6px; height: 100%; background: #ffc107; margin-right: 20px; flex-shrink: 0;"></div>
                  <div style="display: flex; align-items: flex-start; flex: 1;">
                    <div style="margin-right: 15px;">
                      <span style="font-size: 20px;">💬</span>
                    </div>
                    <div style="flex: 1;">
                      <div style="color: #333333; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 10px;">MESSAGE</div>
                      <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 3px solid #ffc107;">
                        <div style="color: #333333; font-size: 16px; line-height: 1.5; white-space: pre-wrap;">${message}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <div style="color: #6c757d; font-size: 14px; margin-bottom: 10px;">
                Received on: ${new Date().toLocaleDateString('en-GB', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })} at ${new Date().toLocaleTimeString('en-GB', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </div>
              <div style="color: #6c757d; font-size: 14px; margin-bottom: 5px;">
                This email was sent from the Metaarth Capital website contact form.
              </div>
              <div style="color: #6c757d; font-size: 14px;">
                Please respond to the client at: ${email}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
