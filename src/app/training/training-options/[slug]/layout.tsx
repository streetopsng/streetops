import Footer from "@/components/LatestlandingPage/footer";
import NewFooter from "@/components/new-footer";
import NewHeader from "@/components/new-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NewHeader />
      {children}
      <NewFooter />
    </div>
  );
};

export default layout;
