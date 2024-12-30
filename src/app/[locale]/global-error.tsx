// app/[locale]/global-error.tsx
'use client'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.log(error)
  return (
    <html>
      <body>
        <h2>Bir şeyler yanlış gitti!</h2>
        <button onClick={() => reset()}>Tekrar dene</button>
      </body>
    </html>
  )
}
