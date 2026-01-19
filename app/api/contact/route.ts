import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData: ContactFormData = contactFormSchema.parse(body)

    // TODO: Implement email sending here
    // You can integrate with services like:
    // - SendGrid (recommended)
    // - Mailgun
    // - AWS SES
    // - Resend
    // - Node.js nodemailer
    
    console.log('Contact form submission:', validatedData)

    // Placeholder response - replace with actual email sending logic
    return Response.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon!',
      },
      { status: 200 }
    )
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      const zodError = error as z.ZodError<ContactFormData>
      const formattedErrors = zodError.errors.map((e: any) => ({
        path: e.path.join('.'),
        message: e.message,
      }))
      
      return Response.json(
        {
          success: false,
          message: 'Validation error',
          errors: formattedErrors,
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return Response.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    )
  }
}
