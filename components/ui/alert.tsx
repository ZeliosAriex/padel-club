import { type VariantProps, cva } from 'class-variance-authority'
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'flex items-center gap-3 p-4 border rounded-md text-sm font-medium [&_svg]:shrink-0 [&_svg]:size-5',
  {
    variants: {
      variant: {
        error: 'border-red-600 bg-red-50 text-red-700',
        success: 'border-green-600 bg-green-50 text-green-700',
        info: 'border-blue-600 bg-blue-50 text-blue-700',
        warning: 'border-yellow-600 bg-yellow-50 text-yellow-700',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
)

const iconMap = {
  error: AlertCircle,
  success: CheckCircle,
  info: Info,
  warning: AlertTriangle,
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, children, ...props }, ref) => {
    const Icon = iconMap[variant || 'info']
    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        <Icon />
        {children}
      </div>
    )
  },
)
Alert.displayName = 'Alert'

export { Alert, alertVariants }
