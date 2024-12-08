import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react"

interface AuthFormLayoutProps {
  children: ReactNode
  title: string
  description: string
  footer: ReactNode
}

export function AuthFormLayout({ children, title, description, footer }: AuthFormLayoutProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter>
          {footer}
        </CardFooter>
      </Card>
    </div>
  )
}

