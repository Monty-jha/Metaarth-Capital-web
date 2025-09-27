import { NextRequest, NextResponse } from 'next/server';

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

    // Log the contact form submission
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || 'Not provided'}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    // For now, we'll just log the submission and return success
    // In a real production environment, you would integrate with an email service
    // like SendGrid, Mailgun, or AWS SES
    
    return NextResponse.json(
      { message: 'Contact form received successfully. We will get back to you soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in contact-simple API:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
