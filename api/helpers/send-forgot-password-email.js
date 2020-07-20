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

    SENDGRID_API_KEY='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'
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: inputs.email,
      from: 'rfarooq@csquareonline.com',
      subject: 'Recover Password',
      // text: `i'm sending text`,
      html: `
      <div>
        <strong>Please click on the following link to change your password</strong>
      </div>
      <div>
        ${inputs.link}
      </div>
        `,
    };

    sgMail.send(msg);


  }


};

