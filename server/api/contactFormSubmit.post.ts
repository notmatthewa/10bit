export default defineEventHandler(async (event) => {
  const body = readBody(event)
  const config = useRuntimeConfig(event)

  //  const sgRequest = await $fetch("https://api.sendgrid.com/v3/mail/send",
  //  {
  //    method: "POST",
  //    headers: {
  //     Authorization: "Bearer " + config.SENDGRID_API_KEY,
  //     "Content-Type": "application/json",
  //     Accept: "application/json"
  //    },
  //  body: JSON.stringify({
  //    personalizations: [
  //      {
  //        to: [
  //          {
  //            email: "matt@10bit.tech",
  //            name: "Matt"
  //          },
  //          {
  //            email: "carlos@10bit.tech",
  //            name: "Carlos"
  //          }
  //        ]
  //      },
  //    ],
  //    from: {
  //      email: "no-reply@10bit.tech",
  //      name: "10 Bit Technology"
  //    },
  //    subject: "Contact Form Submission",
  //    content: [
  //      {
  //        type: "text/plain",
  //        value: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`
  //      }
  //    ]
  //
  //  })
  //  }).catch((error) => {
  //    return error;
  //  });
  // return sgRequest;

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(config.NUXT_TWILIO_API_KEY)
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
      email: ""
    }
  }
})