import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {

                console.log(result.user);
            }).catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FcGoogle className="mr-2" />
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;