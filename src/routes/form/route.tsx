import { parseSubmission, report, useForm } from '@conform-to/react/future'
import { coerceFormValue } from '@conform-to/zod/v4/future'
import { Form, useActionData, type ActionFunctionArgs } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod/v4'
import { Button } from '~/components/ui/button'
import { Label } from '~/components/ui/label'

const schema = coerceFormValue(
  z.object({
    name: z.string({ error: 'Name is required' }),
  }),
)

export const action = async ({ request }: ActionFunctionArgs) => {
  const submission = parseSubmission(await request.formData())
  const result = schema.safeParse(submission.payload)

  if (!result.success) {
    toast.error('Please fix the errors in the form.', {
      description: z.prettifyError(result.error),
    })
    return {
      lastResult: report(submission, { error: result.error }),
    }
  }

  toast.success(`Hello, ${result.data.name}!`)
  return {
    lastResult: report(submission, { reset: true }),
  }
}

export default function FormPage() {
  const actionData = useActionData<typeof action>()
  const { form, fields, intent } = useForm({
    lastResult: actionData?.lastResult,
    schema,
  })

  return (
    <Form method="POST" {...form.props} className="grid grid-cols-1 gap-4 p-8">
      <div>
        <Label htmlFor={fields.name.id}>Name</Label>
        <input
          type="text"
          name={fields.name.name}
          id={fields.name.id}
          defaultValue={fields.name.defaultValue}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm"
        />
        <div id={fields.name.errorId} className="text-sm text-red-500">
          {fields.name.errors}
        </div>
      </div>

      <Button type="submit">Submit</Button>
      <Button
        type="button"
        variant="ghost"
        onClick={() => {
          intent.reset()
        }}
      >
        Reset
      </Button>
    </Form>
  )
}
