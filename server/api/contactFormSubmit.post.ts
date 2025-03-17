import sgMail from '@sendgrid/mail'

// Form data interface
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  message: string;
  impact: string;
  timeframe: string;
  token: string;
}

// Project type mapping
const projectTypeMap: Record<string, string> = {
  'data-migration': 'Data Migration & ETL',
  'web-scraping': 'Web Scraping & Market Intelligence',
  'automation': 'Business Process Automation',
  'app-development': 'Custom App Development',
  'security': 'Security Upgrades',
  'emergency': 'Emergency Solution',
  'other': 'Other'
};

export default defineEventHandler(async (event) => {
  const formData = await readBody(event) as ContactFormData;
  const {
    token,
    firstName,
    lastName,
    email,
    phone = 'Not provided',
    company = 'Not provided',
    projectType,
    message,
    impact,
    timeframe
  } = formData;

  const config = useRuntimeConfig(event);

  // Validate token if not in debug mode
  if (!token && !config.form_debug) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Token not provided.',
    });
  }

  sgMail.setApiKey(config.twilio_api_key);

  // Verify turnstile token if not in debug mode
  const secretKey = useRuntimeConfig(event).turnstile.secretKey;
  try {
    if (!config.form_debug) {
      // const tokenIsValid = await verifyTurnstileToken(token);
      const tokenIsValid = await $fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      });
      if (!tokenIsValid || tokenIsValid.success !== true) {
        throw createError({
          statusCode: 422,
          statusMessage: 'Token is invalid.',
        });
      }
    }
  } catch (error) {
    console.error("Error verifying token: ", error);
    throw createError({
      statusCode: 422,
      statusMessage: 'Token verification failed.',
      data: {
        error: error,
        traceback: error.stack,
        secretKey: secretKey,
      }
    });
  }

  // Format current date
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Create plain text email body
  const textBody = `
New Contact Form Submission

Date: ${dateFormatted}

CONTACT INFORMATION
------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company}

PROJECT DETAILS
------------------
Service Type: ${projectTypeMap[projectType] || projectType}
Estimated Annual Cost: ${impact}
Timeframe Needed: ${timeframe}

Message:
${message}

This form was submitted via the 10 Bit Technology website contact form.
  `.trim();

  // Create HTML email body with styling that matches website
  const htmlBody = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>10 Bit Technology Contact Form</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; color: #333; background-color: #f9f9f9;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; border-spacing: 0; border-collapse: collapse;">
    <tr>
      <td>
        <!-- Header with gradient effect using table cells -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-radius: 12px 12px 0 0; overflow: hidden;">
          <tr>
            <td bgcolor="#5e35b1" align="center" style="padding: 25px 20px; background-image: linear-gradient(to right, #5e35b1, #3949ab); background-color: #5e35b1;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                Contact Form Submission
              </h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <!-- Main Content Card -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
          <tr>
            <td style="padding: 30px;">
              <!-- Date -->
              <p style="margin-top: 0; margin-bottom: 24px; font-size: 14px; color: #666666;">Received on ${dateFormatted}</p>
              
              <!-- Contact Info Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <h2 style="margin-top: 0; margin-bottom: 16px; font-size: 18px; font-weight: 700;">Contact Information</h2>
                    
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0; width: 140px; color: #666666; font-size: 14px; vertical-align: top;">Name:</td>
                        <td style="padding: 8px 0; font-size: 14px; vertical-align: top;">
                          <strong>${firstName} ${lastName}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; width: 140px; color: #666666; font-size: 14px; vertical-align: top;">Email:</td>
                        <td style="padding: 8px 0; font-size: 14px; vertical-align: top;">
                          <a href="mailto:${email}" style="color: #5e35b1; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; width: 140px; color: #666666; font-size: 14px; vertical-align: top;">Phone:</td>
                        <td style="padding: 8px 0; font-size: 14px; vertical-align: top;">${phone}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; width: 140px; color: #666666; font-size: 14px; vertical-align: top;">Company:</td>
                        <td style="padding: 8px 0; font-size: 14px; vertical-align: top;">${company}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Project Details Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <h2 style="margin-top: 0; margin-bottom: 16px; font-size: 18px; font-weight: 700;">Project Details</h2>
                    
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0; width: 140px; color: #666666; font-size: 14px; vertical-align: top;">Service Type:</td>
                        <td style="padding: 8px 0; font-size: 14px; vertical-align: top;">
                          <strong>${projectTypeMap[projectType] || projectType}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; width: 140px; color: #666666; font-size: 14px; vertical-align: top;">Estimated Cost:</td>
                        <td style="padding: 8px 0; font-size: 14px; vertical-align: top;">${impact}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; width: 140px; color: #666666; font-size: 14px; vertical-align: top;">Timeframe:</td>
                        <td style="padding: 8px 0; font-size: 14px; vertical-align: top;">
                          ${timeframe === 'ASAP' ? 
                            `<span style="color: #e53935; font-weight: 700;">${timeframe}</span> 
                             <span style="background-color: #ffebee; color: #e53935; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-left: 6px;">URGENT</span>` 
                            : timeframe}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <h2 style="margin-top: 0; margin-bottom: 16px; font-size: 18px; font-weight: 700;">Message</h2>
                    <div style="padding: 16px; background-color: #f5f5f5; border-radius: 8px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                      ${message}
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- Call to Action -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 32px;">
                <tr>
                  <td align="center">
                    <div>
                      <!-- Using table for button to ensure compatibility -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                        <tr>
                          <td align="center" bgcolor="#5e35b1" style="border-radius: 8px; background-image: linear-gradient(to right, #5e35b1, #3949ab); background-color: #5e35b1;">
                            <a href="mailto:${email}" target="_blank" style="display: inline-block; padding: 12px 24px; color: #ffffff; font-weight: 700; text-decoration: none; font-size: 14px;">
                              Reply to ${firstName}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px 20px;">
        <!-- Footer -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td align="center" style="padding: 16px; font-size: 12px; color: #666666;">
              <p style="margin: 0 0 8px 0;">This form was submitted via the 10 Bit Technology website contact form.</p>
              <p style="margin: 0;">© 2025 10 Bit Technology. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const msg = {
    to: [
      {
        email: "matt@10bit.tech",
        name: "Matt"
      },
      {
        email: "carlos@10bit.tech",
        name: "Carlos"
      }
    ],
    from: {
      email: "no-reply@10bit.tech",
      name: "10 Bit Technology"
    },
    replyTo: email,
    subject: `New Contact: ${firstName} ${lastName} - ${projectTypeMap[projectType] || projectType}`,
    text: textBody,
    html: htmlBody,
  };

  try {
    const response = await sgMail.send(msg);
    return {
      success: true,
      message: 'Email sent successfully!'
    };
  } catch (error: any) {
    console.error("Error sending email: ", error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email.',
      data: error.response ? error.response.body : undefined
    });
  }
});