export function sanitizeHtml(text: string): string {
  if (text === null || text === '') return ''
  else text = text.toString()

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return text.replace(/(<([^>]+)>)/gi, ' ')
}
