export const ErrorMessage = ({ message }: { message: string | undefined }) => {
  return message ? (
    <p className="text-red-500 text-sm mt-[-3px]">{message}</p>
  ) : null
}
