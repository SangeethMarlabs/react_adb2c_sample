import { useMsal, AuthenticatedTemplate } from '@azure/msal-react';
import { Container } from 'react-bootstrap'; 
import { IdTokenData } from './DataDisplay';
 
export const Home = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    return (
        <>
            <AuthenticatedTemplate>
                {activeAccount ? (
                    <Container>
                        <IdTokenData idTokenClaims={activeAccount.idTokenClaims} />
                    </Container>
                ) : null}
            </AuthenticatedTemplate>
        </>
    );
};