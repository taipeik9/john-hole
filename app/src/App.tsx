import { useState } from "react";
import Layout from "./pages/Layout";
import People from "./pages/People";

function App() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Layout
      openDrawer={openDrawer}
      handleOpenDrawer={handleOpenDrawer}
      handleCloseDrawer={handleCloseDrawer}
    >
      <People />
    </Layout>
  );
}

export default App;
