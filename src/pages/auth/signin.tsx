import {
  signIn,
  getCsrfToken,
  getProviders,
  useSession,
} from "next-auth/react";
import Image from "next/image";
import styles from "../../styles/signin.module.css";
import Link from "next/link";
import DeleteAlt from "baseui/icon/delete-alt";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Signin = ({ providers }: any) => {
  const router = useRouter();

  const { status } = useSession();
  useEffect(() => {
    if (status == "authenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <Image
            src="/assets/asset.svg"
            width="196"
            height="64"
            alt="App Logo"
            style={{ height: "85px", marginBottom: "20px" }}
          />
          <div className={styles.cardContent}>
            {providers &&
              Object.values(providers).map((provider, i) => (
                <div key={provider.name} style={{ marginBottom: 3 }}>
                  <button
                    className={i == 0 ? styles.twitter : styles.discord}
                    onClick={() => signIn(provider.id)}
                  >
                    <Image
                      width="20"
                      height="100"
                      alt="Provider logo"
                      src="/assets/twitter.png"
                      className={styles.providerLogo}
                    />
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
          </div>
        </div>
        <button className={styles.crossButton}>
          <Link href={"/"}>
            <DeleteAlt size={57} />
          </Link>
        </button>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
    </div>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
