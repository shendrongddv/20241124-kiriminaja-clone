import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

type LayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
