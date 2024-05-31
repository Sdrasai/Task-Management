import { MailerSend, Sender, Recipient, EmailParams } from 'mailersend';
// require('dotenv').config();

const mailerSend = new MailerSend({
  apiKey:
    // "mlsn.17f8840c96afac4f0ca88fe3bea896545cba453b54a3eeaf85fba5f38d104d86",
    'mlsn.dbcdc9f3376dd2875881387087dc23356e39902ddd01a8c6fc701fd86e9151b4',
});

async function sendEmailNotification(userInfo) {
  try {
    const sentFrom = new Sender(
      // `mlsn.MS_wAMZMo@trial-3z0vklojq5pg7qrx.mlsender.net`,
      // "Diras"
      'MS_U31keB@trial-351ndgwyoexlzqx8.mlsender.net',
      'Task Management',
    );

    const recipients = [new Recipient(userInfo.owner, 'New User')];
    const emailContent = `
      <p dir="rtl">New User Cpmpleted their task !</p>
      <ul dir="rtl">
        <li>${userInfo.owner}</li>
        <li>${userInfo.description}</li>
        <li>Status:Task Completed!</li>
      </ul>
    `;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject('Task Management Status')
      .setHtml(emailContent);

    const response = await mailerSend.email.send(emailParams);

    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default sendEmailNotification;
