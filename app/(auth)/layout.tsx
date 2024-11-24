type LayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default AuthLayout;
