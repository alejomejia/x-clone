export function includeUsernames(content: string) {
  const words = content.split(' ')

  const contentWithUsernames = words.map((word) => {
    if (word.startsWith('@')) {
      return `<a class="text-sky-500" href="#">${word}</a>`
    } else {
      return word
    }
  })

  return contentWithUsernames.join(' ')
}
