import DashboardLayout from "../layout/layout";
import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider as AuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
 
  return (
    <Provider store={store}>
        <AuthProvider session={pageProps.session}>
          <DashboardLayout {...pageProps}>
            <Component {...pageProps} />
          </DashboardLayout>
          <ToastContainer position="bottom-right" theme="dark" />
        </AuthProvider>
    </Provider>
  );
}

export default MyApp;
