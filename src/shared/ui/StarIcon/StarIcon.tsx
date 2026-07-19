import type { SVGProps } from 'react'

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2.5L14.93 8.44L21.49 9.39L16.75 14L17.87 20.54L12 17.46L6.13 20.54L7.25 14L2.51 9.39L9.07 8.44L12 2.5Z" />
    </svg>
  )
}