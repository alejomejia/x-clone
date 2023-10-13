'use client'

import { useRef } from 'react'

import { insertPost } from '@/actions/insertPost'

/**
 * @todo - Add type feedback related to max characters
 */

export function ComposePostForm() {
  // const disableButton = content.length === 0 || content.length > 280

  const formRef = useRef<HTMLFormElement>(null)

  const handleAction = async (formData: FormData) => {
    await insertPost(formData)

    console.log(formRef.current)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={handleAction}>
      <div className="border-b border-b-gray-800">
        <textarea
          className="w-full p-2 text-xl bg-transparent placeholder-gray-500 resize-none focus:outline-none"
          name="content"
          rows={4}
          placeholder="What is happening?!"
        />
      </div>
      <div className="flex justify-end pt-3">
        <div className="flex items-center">
          <span className="border-r border-r-gray-800 pr-4 mr-4">CP</span>
          <button
            className="px-5 py-2 rounded-full text-sm font-semibold bg-sky-500 disabled:opacity-50 disabled:hover:bg-sky-500 hover:bg-sky-600 transition duration-300"
            type="submit"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  )
}
