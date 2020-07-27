const sgMail = require('@sendgrid/mail');

module.exports = {


  friendlyName: 'Send forgot password email',


  description: '',


  inputs: {
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      description: 'Email of user of which password has to be reset'
    },
    link: {
      type: 'string',
      required: true,
      description: 'Recovery Link'
    },

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // TODO

    // SENDGRID_API_KEY = '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';
    SENDGRID_API_KEY = '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';
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: inputs.email,
      from: 'support@wefetch.com',
      subject: 'Reset Your Password',
      html: `
      <p>Hello,</p>
      <p>If you requested to reset your password for ${inputs.email}, click the link below. If you didn’t make this request, please ignore this email.</p>
      <p><a href='${inputs.link}'>${inputs.link}</a></p>
      <p>Thanks,</p>
      <p>We Fetch</p>
      `,
    };

    sgMail.send(msg).then((res) => {
    }).catch(e => console.log(e.response.body));


  }


};

