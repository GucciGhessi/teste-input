import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: "Login",
  description: "Tela para efetuar login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
