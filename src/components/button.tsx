import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer',
        className
      )}
    >
      {children}
    </button>
  )
}
export default Button
