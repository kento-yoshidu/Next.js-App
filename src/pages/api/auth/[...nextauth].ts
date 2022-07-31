import type { NextApiHandler } from "next"
import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options = {
  providers: [
    GithubProvider({
      /* @ts-ignore */
      clientId: process.env.GITHUB_ID,
      /* @ts-ignore */
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      /* @ts-ignore */
      clientId: process.env.GOOGLE_ID,
      /* @ts-ignore */
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin"
  }
}
