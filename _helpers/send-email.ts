export default async function sendEmail({ to, subject, html }: any) {
    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'onboarding@resend.dev',
                to: 'karyllexcx@gmail.com',
                subject: subject,
                html: html,
            }),
        });

        const data = await response.json() as any;
        console.log('Resend response:', data);

        if (!response.ok) {
            console.error('Resend Error:', data);
        } else {
            console.log('Email sent successfully! ID:', data.id);
        }
    } catch (err) {
        console.error('Network error:', err);
    }
}