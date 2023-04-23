import UserSelectionsProvider from './data'
import '@/styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <UserSelectionsProvider>
      <Component {...pageProps} />
    </UserSelectionsProvider>
  )
}

export default MyApp
