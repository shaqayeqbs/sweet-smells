import DashboardLayout from "../modules/layout/layout";
import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider as AuthProvider } from "next-auth/client";
import Head from "next/head";
import { StyledEngineProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider session={pageProps.session}>
        <StyledEngineProvider injectFirst>
          <DashboardLayout {...pageProps}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <Component {...pageProps} />
          </DashboardLayout>
        </StyledEngineProvider>
        <ToastContainer position="bottom-right" theme="dark" />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
