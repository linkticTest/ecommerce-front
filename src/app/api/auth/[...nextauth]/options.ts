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
                if (credentials?.email === 'betobustamante.ef@gmail.com') {
                    return {
                        id: '1',
                        name: '',
                        email: 'betobustamante.ef@gmail.com',
                        image: '1'
                    };
                }
                return null;
            },
        }),
    ],
};


export default authOptions;