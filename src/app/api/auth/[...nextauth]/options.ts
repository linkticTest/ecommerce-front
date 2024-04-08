import { USERSMOCK } from "@/app/_mocks";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    pages: {
        signIn: '/sign-in',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // @TODO: Implement user login with credentials
                if (credentials?.email === USERSMOCK.USER && 
                    credentials?.password === USERSMOCK.PWD) {
                    return {
                        id: USERSMOCK.ID,
                        name: USERSMOCK.NAME,
                        email: USERSMOCK.USER,
                        image: ''
                    };
                }
                return null;
            },
        }),
    ],
};


export default authOptions;